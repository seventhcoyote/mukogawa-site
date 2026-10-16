/**
 * Gera a imagem de compartilhamento da home — o og.jpg que aparece quando
 * alguém manda o link no WhatsApp, no X ou no Discord.
 *
 * Por que por navegador e não por sharp+SVG: a imagem usa a Zen Old Mincho, a
 * mesma fonte do site, servida do próprio projeto. Compondo por SVG a fonte
 * cairia num fallback do sistema e a marca sairia diferente em cada máquina —
 * exatamente o problema que fez a Cinzel ser trocada. Renderizando no Chrome, a
 * página carrega a fonte real do servidor de desenvolvimento.
 *
 * A anterior tinha três defeitos, todos visíveis quando o card foi aberto no
 * WhatsApp: a logo era a antiga, os textos estavam sem acento ("TRES FORMAS",
 * "MANGA") e a data ficava por cima da figura, ilegível.
 *
 * Requer o servidor de desenvolvimento no ar (porta 4331).
 *
 *   node ferramentas/gerar-og-principal.mjs
 */
import { spawn } from "node:child_process";
import { writeFile, unlink } from "node:fs/promises";
import { setTimeout as espera } from "node:timers/promises";
import { join } from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORTA = 9460;
const BASE = process.env.BASE ?? "http://localhost:4331";
const RAIZ = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const PAGINA = join(RAIZ, "public/_og.html");
const SAIDA = join(RAIZ, "public/og.jpg");

const L = 1200, A = 630;

/* A página é temporária e some no fim — nunca entra no build. */
const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<style>
  @font-face {
    font-family: "Zen Old Mincho";
    src: url("/fontes/zen-old-mincho-latin-700.woff2") format("woff2");
    font-weight: 700; font-display: block;
  }
  @font-face {
    font-family: "Zen Old Mincho";
    src: url("/fontes/zen-old-mincho-cjk-700.woff2") format("woff2");
    font-weight: 700; font-display: block;
    unicode-range: U+3000-303F, U+3040-309F, U+30A0-30FF, U+4E00-9FFF, U+FF00-FFEF;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: ${L}px; height: ${A}px; overflow: hidden; background: #000; }

  .cartao { position: relative; width: ${L}px; height: ${A}px; display: flex; }

  /* A arte fica à direita e o texto à esquerda, cada um no seu lugar. Na versão
     anterior a data caía por cima da figura e sumia. */
  .arte {
    position: absolute; inset: 0 0 0 44%;
    background: url("/video/poster.jpg") center right / cover no-repeat;
  }
  /* Véu que escurece só o lado do texto, para o contraste não depender da arte */
  .veu {
    position: absolute; inset: 0;
    background: linear-gradient(95deg, #000 0%, #000 40%, rgba(0,0,0,.82) 52%, rgba(0,0,0,.15) 78%, rgba(0,0,0,.45) 100%);
  }
  .halftone {
    position: absolute; inset: 0; opacity: .16;
    background-image: radial-gradient(#000 1px, transparent 1.1px);
    background-size: 4px 4px;
  }

  .texto {
    position: relative;
    width: 58%;
    padding: 62px 0 58px 68px;
    display: flex; flex-direction: column; justify-content: center;
    font-family: "Barlow Condensed", "Helvetica Neue", sans-serif;
  }

  .rotulo {
    display: flex; align-items: center; gap: 14px;
    font-size: 21px; font-weight: 600; letter-spacing: .34em;
    text-transform: uppercase; color: #b4b4bd;
  }
  .rotulo::before {
    content: ""; width: 11px; height: 11px; flex: none;
    transform: rotate(45deg);
    border: 1px solid #d21c26; background: rgba(210,28,38,.55);
  }

  .marca { margin: 26px 0 0; width: 430px; height: auto; display: block; }

  .frase {
    margin: 30px 0 0; max-width: 22ch;
    font-family: "Zen Old Mincho", Georgia, serif;
    font-weight: 700; font-size: 33px; line-height: 1.28; color: #ececee;
  }

  /* Tarja da data, com fundo próprio: é informação e precisa ser legível. */
  .data {
    margin: 34px 0 0; align-self: flex-start;
    padding: 11px 20px 10px;
    background: #d21c26; color: #fff;
    font-size: 19px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase;
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  }

  .filete { position: absolute; inset: auto 0 0 0; height: 7px; background: #d21c26; }
</style></head>
<body>
  <div class="cartao">
    <div class="arte"></div>
    <div class="veu"></div>
    <div class="halftone"></div>
    <div class="texto">
      <p class="rotulo">Uma fantasia sombria</p>
      <img class="marca" src="/_og-marca.png" alt="">
      <p class="frase">Antes da história, uma civilização entrou em guerra pela forma do mundo.</p>
      <p class="data">Yomikiri &middot; 1º de dezembro de 2026</p>
    </div>
    <div class="filete"></div>
  </div>
</body></html>`;

/* ---------- CDP mínimo ---------- */
const cdp = async () => {
  for (let i = 0; i < 80; i++) {
    try {
      const abas = await (await fetch(`http://127.0.0.1:${PORTA}/json/list`)).json();
      const p = abas.find((a) => a.type === "page");
      if (p?.webSocketDebuggerUrl) return p.webSocketDebuggerUrl;
    } catch { /* subindo */ }
    await espera(250);
  }
  throw new Error("Chrome não respondeu");
};

await writeFile(PAGINA, html, "utf8");
// a marca precisa estar servida pelo mesmo host, senão o Chrome bloqueia file://
const { copyFile } = await import("node:fs/promises");
await copyFile(join(RAIZ, "src/assets/marca/logo-mukogawa.png"),
               join(RAIZ, "public/_og-marca.png"));

const chrome = spawn(CHROME, [
  "--headless=new", "--disable-gpu", "--hide-scrollbars",
  `--remote-debugging-port=${PORTA}`, "--user-data-dir=/tmp/mukogawa-og",
  "--no-first-run", "about:blank",
], { stdio: "ignore" });

const limpar = async () => {
  try { chrome.kill(); } catch {}
  for (const f of [PAGINA, join(RAIZ, "public/_og-marca.png")]) {
    try { await unlink(f); } catch {}
  }
};

try {
  const ws = new WebSocket(await cdp());
  await new Promise((ok) => ws.addEventListener("open", ok, { once: true }));
  let id = 0; const pend = new Map();
  ws.addEventListener("message", (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pend.has(m.id)) {
      const { ok, no } = pend.get(m.id); pend.delete(m.id);
      m.error ? no(new Error(m.error.message)) : ok(m.result);
    }
  });
  const cmd = (method, params = {}) => new Promise((ok, no) => {
    const i = ++id; pend.set(i, { ok, no }); ws.send(JSON.stringify({ id: i, method, params }));
  });

  await cmd("Page.enable");
  await cmd("Emulation.setDeviceMetricsOverride", { width: L, height: A, deviceScaleFactor: 2, mobile: false });
  await cmd("Page.navigate", { url: `${BASE}/_og.html` });
  await espera(2500);   // fonte e arte

  const { data } = await cmd("Page.captureScreenshot", {
    format: "jpeg", quality: 90,
    clip: { x: 0, y: 0, width: L, height: A, scale: 2 },
  });
  const bruto = Buffer.from(data, "base64");

  // volta para 1200x630 e comprime: o card do WhatsApp não usa mais que isso,
  // e a imagem viaja em rede móvel
  const sharp = (await import(join(RAIZ, "node_modules/sharp/lib/index.js"))).default;
  await sharp(bruto).resize(L, A).jpeg({ quality: 86, mozjpeg: true, progressive: true }).toFile(SAIDA);

  const { size } = await (await import("node:fs/promises")).stat(SAIDA);
  console.log(`ok  og.jpg ${L}x${A}, ${(size / 1024).toFixed(0)} KB`);
} finally {
  await limpar();
}
