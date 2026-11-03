// Japanese font files for the /ja/ pages: only the characters used in content/ja.ts (plus Latin and
// punctuation), from Google Fonts' text= service, like the Shippori subset the site already uses.
//   npm run fonts:ja   → writes app/fonts/shippori-ja-{400,600,700}.woff2 and app/fonts/yuji-boku-ja.woff2
// Run it again whenever Japanese text is added or changed, so no character is missing.
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const src = readFileSync(new URL("../content/ja.ts", import.meta.url), "utf8");
const ascii = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join("");
const chars = [...new Set([...src.replace(/\/\/.*$/gm, ""), ...ascii, ..."、。「」『』()!?:・ー—…〜"])]
  .filter((c) => c >= " " && c !== "\n").sort().join("");
console.log(`${chars.length} characters`);

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const get = (url) => execFileSync("curl", ["-sSfL", "-A", UA, url], { maxBuffer: 64 << 20 });
const fonts = [
  ["Shippori Mincho", "400", "shippori-ja-400"],
  ["Shippori Mincho", "600", "shippori-ja-600"],
  ["Shippori Mincho", "700", "shippori-ja-700"],
  ["Yuji Boku", "400", "yuji-boku-ja"],
];
for (const [family, weight, file] of fonts) {
  const css = get(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(chars)}`).toString();
  const url = css.match(/url\((https:[^)]+)\)/)?.[1];
  if (!url) throw new Error(`no font file for ${family} ${weight}`);
  const data = get(url);
  writeFileSync(new URL(`../app/fonts/${file}.woff2`, import.meta.url), data);
  console.log(`${file}.woff2  ${(data.length / 1024).toFixed(0)} KB`);
}
