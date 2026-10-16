// Auditor de rotas por CDP (Chrome DevTools Protocol).
//
// Existe por um motivo específico e registrado: nenhum modo headless deste Mac
// consegue uma janela abaixo de ~500px, então "medição de mobile" a 500px não é
// medição de mobile. O CDP contorna isso com Emulation.setDeviceMetricsOverride,
// que define a largura CSS independentemente do tamanho da janela do sistema.
// De quebra resolve a captura: Page.captureScreenshot com captureBeyondViewport
// pinta a área que estava fora da tela, coisa que o --screenshot com rolagem
// não faz (devolve preto).
//
// Depende de public/_auditoria.js estar servido — ou seja, do servidor em modo
// de desenvolvimento. Nada disto entra no build.
//
//   node ferramentas/auditar.mjs --larguras 1440,768,375 --rotas /,/historia
//   node ferramentas/auditar.mjs --tiro /personagens/helel --so .retrato
//
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { setTimeout as espera } from "node:timers/promises";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE ?? "http://localhost:4331";
const PORTA = 9333;

const arg = (nome, padrao) => {
  const i = process.argv.indexOf(`--${nome}`);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : padrao;
};

const ROTAS = arg("rotas", "/,/historia,/personagens,/personagens/helel,/criadores,/loja,/faq").split(",");
const LARGURAS = arg("larguras", "1440,768,375").split(",").map(Number);
const TIRO = arg("tiro", null);        // rota para captura
const SO = arg("so", null);            // seletor isolado na captura
const SAIDA = arg("saida", "capturas");

/* ---------- cliente CDP mínimo ---------- */
class Cdp {
  constructor(ws) { this.ws = ws; this.id = 0; this.pendentes = new Map(); this.eventos = new Map();
    ws.addEventListener("message", (e) => {
      const m = JSON.parse(e.data);
      if (m.id && this.pendentes.has(m.id)) {
        const { ok, falha } = this.pendentes.get(m.id);
        this.pendentes.delete(m.id);
        m.error ? falha(new Error(m.error.message)) : ok(m.result);
      } else if (m.method) {
        for (const f of this.eventos.get(m.method) ?? []) f(m.params);
      }
    });
  }
  envia(method, params = {}) {
    const id = ++this.id;
    return new Promise((ok, falha) => {
      this.pendentes.set(id, { ok, falha });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  ao(evento, f) {
    if (!this.eventos.has(evento)) this.eventos.set(evento, []);
    this.eventos.get(evento).push(f);
  }
}

const alvoDaPagina = async () => {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORTA}/json/list`);
      const abas = await r.json();
      const p = abas.find((a) => a.type === "page");
      if (p?.webSocketDebuggerUrl) return p.webSocketDebuggerUrl;
    } catch { /* o Chrome ainda está subindo */ }
    await espera(250);
  }
  throw new Error("Chrome não respondeu na porta de depuração");
};

const chrome = spawn(CHROME, [
  "--headless=new", "--disable-gpu", "--hide-scrollbars",
  `--remote-debugging-port=${PORTA}`,
  "--user-data-dir=/tmp/mukogawa-auditoria",
  "--no-first-run", "--no-default-browser-check",
  "about:blank",
], { stdio: "ignore" });

const encerrar = () => { try { chrome.kill(); } catch {} };
process.on("exit", encerrar);
process.on("SIGINT", () => { encerrar(); process.exit(1); });

const ws = new WebSocket(await alvoDaPagina());
await new Promise((ok) => ws.addEventListener("open", ok, { once: true }));
const cdp = new Cdp(ws);
await cdp.envia("Page.enable");
await cdp.envia("Runtime.enable");

/** Navega, espera a rede sossegar e devolve a página pronta para ler. */
const abrir = async (url, largura, altura = 900) => {
  await cdp.envia("Emulation.setDeviceMetricsOverride", {
    width: largura, height: altura, deviceScaleFactor: 1,
    mobile: largura < 700,
  });
  const parado = new Promise((ok) => {
    const f = (p) => { if (p.name === "networkIdle" || p.name === "load") ok(); };
    cdp.ao("Page.lifecycleEvent", f);
  });
  await cdp.envia("Page.setLifecycleEventsEnabled", { enabled: true });
  await cdp.envia("Page.navigate", { url });
  await Promise.race([parado, espera(8000)]);
  await espera(1200);  // as imagens preguiçosas ainda estão chegando
};

const avaliar = async (expr) => {
  const r = await cdp.envia("Runtime.evaluate", { expression: expr, returnByValue: true });
  return r.result?.value;
};

/* ---------- modo captura ---------- */
if (TIRO) {
  await mkdir(SAIDA, { recursive: true });
  for (const largura of LARGURAS) {
    await abrir(`${BASE}${TIRO}${SO ? `?so=${encodeURIComponent(SO)}` : ""}`, largura);
    const alt = await avaliar("document.documentElement.scrollHeight");
    const { data } = await cdp.envia("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: true,
      clip: { x: 0, y: 0, width: largura, height: Math.min(alt, 4000), scale: 1 },
    });
    // o seletor entra no nome: sem isso, duas capturas da mesma rota com
    // recortes diferentes se sobrescreviam em silêncio
    const limpo = (s) => s.replace(/\W+/g, "-").replace(/^-|-$/g, "");
    const arq = `${SAIDA}/${limpo(TIRO) || "inicio"}${SO ? `--${limpo(SO)}` : ""}-${largura}.png`;
    await writeFile(arq, Buffer.from(data, "base64"));
    console.log(`${arq}  ${largura}x${Math.min(alt, 4000)}`);
  }
  encerrar();
  process.exit(0);
}

/* ---------- modo medição pontual ---------- */
// --js "<expressão>" avalia na página, em cada largura, com a largura garantida.
// Existe porque o painel do navegador devolve innerWidth 0 neste projeto, e
// medida tirada de viewport zerado já virou diagnóstico errado mais de uma vez.
const JS = arg("js", null);
if (JS) {
  for (const largura of LARGURAS) {
    await abrir(`${BASE}${ROTAS[0]}`, largura);
    const real = await avaliar("innerWidth");
    if (real !== largura) { console.log(`  !! ${largura}px pedido, ${real}px medido — INVÁLIDO`); continue; }
    console.log(`\n--- ${ROTAS[0]} @ ${largura}px ---`);
    console.log(JSON.stringify(await avaliar(`(() => { ${JS} })()`), null, 2));
  }
  encerrar();
  process.exit(0);
}

/* ---------- modo auditoria ---------- */
let defeitos = 0;
for (const largura of LARGURAS) {
  console.log(`\n${"=".repeat(58)}\n  ${largura}px\n${"=".repeat(58)}`);
  for (const rota of ROTAS) {
    await abrir(`${BASE}${rota}`, largura);
    const texto = await avaliar("document.getElementById('AUDITORIA')?.textContent ?? 'SEM AUDITORIA'");
    // A largura precisa ser conferida, não presumida: já houve diagnóstico
    // errado feito em cima de um viewport que não era o pedido. A conferência
    // sai da linha ROTA, escrita pelo auditor no instante da medição — ler
    // innerWidth depois não vale, o override já não está mais valendo.
    const real = Number(texto.match(/viewport=(\d+)x/)?.[1]);
    if (real !== largura) console.log(`  !! pedido ${largura}px, medido ${real}px — MEDIÇÃO INVÁLIDA`);
    for (const linha of texto.split("\n")) {
      const m = linha.match(/^(corte|contraste|vazamento|toque|blend-morto)=(\d+)/);
      if (m && Number(m[2]) > 0) defeitos += Number(m[2]);
    }
    console.log(texto.split("\n").filter((l) => !/^blend-contido=/.test(l) && !/isolation:isolate/.test(l)).join("\n"));
  }
}
console.log(`\nTOTAL DE DEFEITOS: ${defeitos}`);
encerrar();
process.exit(defeitos > 0 ? 1 : 0);
