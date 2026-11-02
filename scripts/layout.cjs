// Layout safety check. Proves a change only touched what it meant to touch.
//
//   npm run baseline   → before changing anything: photographs every page at 7 screen widths
//   (make the change, then)
//   npm run check      → photographs again and compares, page by page
//
// Needs the site built and served: `npm run build` then `npm run serve` (another terminal).
// Animations are frozen (reduced motion), so the pictures repeat exactly. For each page × width it
// compares every element's position/size and the pixels. Image decoding makes a few thousand pixels
// differ now and then (under 0.1% of a page): ignored. Any element moving, appearing or disappearing,
// or more than 0.1% of the pixels changing, is reported as CHANGED.
// Chrome path: CHROME_PATH env var, or the default macOS location.
const puppeteer = require("puppeteer-core");
const { PNG } = require("pngjs");
const fs = require("fs");

const MODE = process.argv[2];                       // "baseline" | "check"
const URL = process.env.SITE_URL || "http://localhost:3021";
const CHROME = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const DIR = ".layout";
const PAGES = ["/pt/", "/pt/campanha/", "/pt/autores/", "/pt/loja/", "/en/", "/en/campanha/", "/en/autores/", "/en/loja/"];
// phone · iPad mini/Air portrait · just under the switch · switch to desktop · iPad landscape · laptop · big screen
const WIDTHS = [[390, 844, true], [768, 1024, true], [1023, 768, true], [1100, 800, false], [1180, 820, false], [1440, 900, false], [1920, 1080, false]];

async function snap(out) {
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--hide-scrollbars"] });
  for (const [w, h, mob] of WIDTHS) for (const pg of PAGES) {
    const p = await b.newPage();
    await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await p.emulate({ viewport: { width: w, height: h, deviceScaleFactor: 1, isMobile: mob, hasTouch: true }, userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148" });
    await p.goto(URL + pg, { waitUntil: "networkidle0" });
    await p.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important} iframe{visibility:hidden!important}" });
    await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } scrollTo(0, 0); });
    await new Promise((r) => setTimeout(r, 800));
    const geo = await p.evaluate(() => [...document.querySelectorAll("body *")].map((e) => {
      const r = e.getBoundingClientRect(), cs = getComputedStyle(e);
      return [e.tagName, String(e.className.baseVal ?? e.className).slice(0, 40), Math.round(r.x), Math.round(r.y + scrollY), Math.round(r.width), Math.round(r.height), cs.display, cs.fontSize];
    }));
    const name = `${w}${pg.replace(/\//g, "_")}`;
    fs.writeFileSync(`${out}/${name}.json`, JSON.stringify(geo));
    await p.screenshot({ path: `${out}/${name}.png`, fullPage: true });
    await p.close();
    process.stdout.write(".");
  }
  await b.close();
  console.log("");
}

function compare(A, B) {
  let changed = 0;
  for (const f of fs.readdirSync(A).filter((f) => f.endsWith(".png")).sort((a, b) => parseInt(a) - parseInt(b))) {
    const a = PNG.sync.read(fs.readFileSync(`${A}/${f}`)), b = PNG.sync.read(fs.readFileSync(`${B}/${f}`));
    let px = 0;
    if (a.width !== b.width || a.height !== b.height) px = -1;
    else for (let i = 0; i < a.data.length; i += 4) if (Math.abs(a.data[i] - b.data[i]) + Math.abs(a.data[i + 1] - b.data[i + 1]) + Math.abs(a.data[i + 2] - b.data[i + 2]) > 12) px++;
    const count = (file) => { const m = new Map(); for (const r of JSON.parse(fs.readFileSync(file))) { const k = JSON.stringify(r); m.set(k, (m.get(k) || 0) + 1); } return m; };
    const ma = count(`${A}/${f.replace(".png", ".json")}`), mb = count(`${B}/${f.replace(".png", ".json")}`);
    const diff = (x, y) => { const out = []; for (const [k, v] of x) for (let i = 0; i < v - (y.get(k) || 0); i++) out.push(JSON.parse(k)); return out; };
    const removed = diff(ma, mb), added = diff(mb, ma);
    const name = (r) => `${r[0].toLowerCase()}${r[1] ? "." + r[1].split(" ")[0] : ""}`;
    // pixel noise from image decoding is tiny; more than 0.1% of the page is a real visual change
    const real = removed.length + added.length > 0 || px === -1 || px > a.width * a.height * 0.001;
    if (real) changed++;
    const label = `${f.replace(".png", "").replace(/_/g, "/").replace(/^(\d+)/, "$1px ")}`;
    console.log(`${real ? "CHANGED" : "same   "}  ${label.padEnd(22)} ${px === -1 ? `page height ${a.height}→${b.height}` : `pixels ${px}`}` +
      (removed.length ? `  moved/removed: ${[...new Set(removed.map(name))].slice(0, 6).join(", ")}` : "") +
      (added.length ? `  moved/added: ${[...new Set(added.map(name))].slice(0, 6).join(", ")}` : ""));
  }
  console.log(changed ? `\n${changed} page(s) changed — make sure each one is a change you meant.` : "\nNothing changed on any page or screen size.");
}

(async () => {
  if (MODE === "baseline") { await snap(`${DIR}/before`); console.log("Baseline saved. Make your change, rebuild, then run: npm run check"); }
  else if (MODE === "check") {
    if (!fs.existsSync(`${DIR}/before`)) { console.log("No baseline yet. Run `npm run baseline` before making the change."); process.exit(1); }
    await snap(`${DIR}/after`); compare(`${DIR}/before`, `${DIR}/after`);
  } else console.log("usage: node scripts/layout.cjs baseline|check");
  process.exit(0);
})();
