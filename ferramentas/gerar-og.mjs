/**
 * Gera uma imagem de compartilhamento por personagem.
 *
 * Antes, as 34 páginas dividiam um único og.jpg: mandar o link do Helel no
 * WhatsApp mostrava a mesma capa genérica de sempre.
 *
 * Regra do projeto respeitada: a arte entra em `contain`, nunca `cover`. Nada de
 * cabeça, asa, arma ou chifre cortado — se sobrar espaço, sobra fundo, não corte.
 * A brasa atrás segue o lado do personagem: aço para a Hoste, sangue para os
 * Rebeldes, a mesma informação narrativa que a cor carrega no site.
 *
 *   node ferramentas/gerar-og.mjs
 *
 * Saída: site/public/og/<slug>.jpg (1200x630)
 */
import sharp from "../node_modules/sharp/lib/index.js";
import { readFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const ARTES = join(RAIZ, "src/assets/personagens");
const SAIDA = join(RAIZ, "public/og");

const L = 1200, A = 630;

// lado de cada personagem, lido do arquivo de dados para não duplicar verdade
const dados = readFileSync(join(RAIZ, "src/data/personagens.ts"), "utf8");
const lados = {};
for (const bloco of dados.split("    slug: ").slice(1)) {
  const slug = bloco.split('"')[1];
  const lado = /lado:\s*"([^"]+)"/.exec(bloco)?.[1] ?? "hoste";
  lados[slug] = lado;
}

const COR = {
  hoste: { r: 29, g: 109, b: 153 },   // --aco-fundo
  rebeldes: { r: 210, g: 28, b: 38 }, // --sangue
};

mkdirSync(SAIDA, { recursive: true });

const feitos = [];
for (const [slug, lado] of Object.entries(lados)) {
  const origem = join(ARTES, `${slug}.jpg`);
  if (!existsSync(origem)) { console.warn("sem arte:", slug); continue; }

  const c = COR[lado];

  // brasa: elipse da cor do lado, atrás da figura
  const brasa = Buffer.from(`
    <svg width="${L}" height="${A}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="b" cx="50%" cy="52%" r="52%">
          <stop offset="0%"   stop-color="rgb(${c.r},${c.g},${c.b})" stop-opacity="0.85"/>
          <stop offset="55%"  stop-color="rgb(${c.r},${c.g},${c.b})" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="rgb(${c.r},${c.g},${c.b})" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="${L}" height="${A}" fill="#000000"/>
      <ellipse cx="${L / 2}" cy="${A * 0.52}" rx="${A * 0.62}" ry="${A * 0.56}" fill="url(#b)"/>
    </svg>`);

  // A arte vem numa moldura 4:5 com a figura ocupando ~72% da área, então numa
  // caixa 1200x630 ela sairia minúscula. `trim` apara só o fundo preto uniforme
  // — o desenho é traço branco, não é tocado — e aí a figura ganha a altura toda.
  const aparada = await sharp(origem).trim({ threshold: 12 }).toBuffer();

  const alturaFigura = Math.round(A * 0.94);
  const figura = await sharp(aparada)
    .resize({ height: alturaFigura, fit: "inside", withoutEnlargement: false })
    .toBuffer();
  const { width: fw, height: fh } = await sharp(figura).metadata();

  // filete inferior na cor do lado, a mesma barra que o site usa
  const filete = Buffer.from(`
    <svg width="${L}" height="${A}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="${A - 6}" width="${L}" height="6" fill="rgb(${c.r},${c.g},${c.b})"/>
    </svg>`);

  await sharp(brasa)
    .composite([
      { input: figura, left: Math.round((L - fw) / 2), top: Math.round((A - fh) / 2), blend: "screen" },
      { input: filete, blend: "over" },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(join(SAIDA, `${slug}.jpg`));

  feitos.push(`${slug} (${lado})`);
}

console.log(`ok  ${feitos.length} imagens de compartilhamento em site/public/og/`);
console.log("   ", feitos.join(", "));
