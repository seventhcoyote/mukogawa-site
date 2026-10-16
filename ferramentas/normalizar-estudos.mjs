/**
 * Normaliza o fundo das artes de ESTUDO para preto puro.
 *
 * O PROBLEMA QUE ISTO RESOLVE
 * As artes de personagem passam por um pipeline que zera o fundo. As de estudo
 * nunca passaram: chegaram do scan com o fundo entre 3 e 45 (12% a 19% da área)
 * e uma dominante azul de ~+1,8. Como essas artes são exibidas com
 * `mix-blend-mode: screen`, todo pixel acima de zero CLAREIA o fundo do card —
 * então o fundo sujo virava um véu azulado, e as áreas onde a escrita tinha sido
 * apagada (preto puro de verdade) apareciam como retângulos escuros recortados.
 * Era o contrário do que parecia: os blocos escuros eram as partes limpas.
 *
 * O QUE FAZ
 * 1. tira a cor (o traço é branco sobre preto; dominante azul é resíduo de scan);
 * 2. aplica uma curva que zera o fundo e preserva o antialiasing do traço:
 *    até PISO vira 0, de PISO a TETO sobe suave, acima de TETO não se toca;
 * 3. grava em site/public/estudos/ como WebP sem perda, lendo sempre do
 *    original. Sem perda, não com perda: ver o comentário no ponto da gravação.
 *
 * Os painéis de mangá do Match ficam de fora: têm fundo claro e moldura própria,
 * não usam blend, e essa curva os destruiria.
 *
 *   node ferramentas/normalizar-estudos.mjs
 */
import sharp from "../node_modules/sharp/lib/index.js";
import { existsSync } from "node:fs";
import { join } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
// A origem é o ORIGINAL, com as escritas do Bretas intactas.
//
// Decisão do Bruno em 2026-08-01: nas páginas de personagem, as artes de estudo
// aparecem como vieram do caderno — "#01 SKETCHS / NOME" e "D.BRETAS '25"
// fazem parte da peça, não são sujeira. A remoção de escrita da revisão 9 vale
// só para as artes de personagem do card, não para os estudos.
//
// O que continua sendo feito aqui é SÓ o fundo. O original tem fundo entre 14 e
// 25 com dominante azul; sob mix-blend-mode: screen isso clareia o card inteiro
// e foi a origem do "fundo puxando para o azul". Zerar o fundo não encosta em
// escrita nenhuma: os glifos do Bretas são traço branco, muito acima do piso.
const ORIGEM = join(RAIZ, "assets-originais/personagens");
const DESTINO = join(RAIZ, "public/estudos");

// Fundo abaixo disto é ruído de scan e vai a zero.
const PISO = 26;
// Acima disto é traço de verdade e não se mexe.
const TETO = 72;

// Só o traço solto do Bretas. Painel de mangá não entra: ver PAINEIS em
// src/paginas/Personagem.astro.
const ALVOS = [
  "gabriel-estudos", "ariel-estudos", "celeste-estudos", "helel-estudos",
  "kharzul-estudos", "kharzul", "miguel-estudos", "orthrax-estudos",
  "serafins-estudos", "tesserion-estudos",
  // Substituições enviadas pelo Bruno em 2026-08-01: as versões que estavam no
  // site tinham faixas pretas cortando a base. Estas são arte do Match, mas com
  // fundo escuro uniforme (~14,5) e sem moldura branca — então entram aqui e
  // deixam de ser tratadas como painel de mangá.
  "amunet-estudo", "kharzul-manga", "kharzul-manga-estudo", "kharzul-corpo",
];

// tabela de 256 posições, calculada uma vez
const CURVA = new Uint8Array(256);
for (let v = 0; v < 256; v++) {
  if (v <= PISO) CURVA[v] = 0;
  else if (v >= TETO) CURVA[v] = v;
  else {
    const t = (v - PISO) / (TETO - PISO);      // 0..1
    CURVA[v] = Math.round(TETO * (t * t));      // sobe devagar, sem degrau
  }
}

const relatorio = [];

for (const nome of ALVOS) {
  const origem = join(ORIGEM, `${nome}.jpg`);
  if (!existsSync(origem)) { console.warn("sem original:", nome); continue; }

  const { data, info } = await sharp(origem)
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let sujoAntes = 0;
  for (let i = 0; i < data.length; i++) {
    const v = data[i];
    if (v > 2 && v < 46) sujoAntes++;
    data[i] = CURVA[v];
  }

  let sujoDepois = 0, pretoDepois = 0;
  for (let i = 0; i < data.length; i++) {
    const v = data[i];
    if (v > 2 && v < 46) sujoDepois++;
    if (v === 0) pretoDepois++;
  }

  // PNG, e servido direto de public/: qualquer recompressão com perda
  // reintroduz 11% a 17% de ruído entre 1 e 29 no fundo — foi o que o WebP do
  // pipeline vinha fazendo, e é o que fazia a arte virar um retângulo mais
  // claro que a seção. PNG de traço branco sobre preto comprime muito bem.
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 1 } })
    // WebP SEM PERDA, não PNG. A diferença importa e foi medida: o que
    // estragava estas artes era o WebP COM PERDA do pipeline do Astro, que
    // reintroduzia ruído entre 1 e 29 no fundo e fazia a arte virar um
    // retângulo mais claro sobre a seção preta. O lossless é bit-a-bit
    // idêntico ao PNG — verificado nos 14 arquivos, pixel a pixel — e pesa
    // 38,8% menos: 6,22 MB viram 3,81 MB.
    .webp({ lossless: true, effort: 6 })
    .toFile(join(DESTINO, `${nome}.webp`));

  const total = data.length;
  relatorio.push(
    `${nome.padEnd(20)} sujo ${(sujoAntes / total * 100).toFixed(1)}% -> ` +
    `${(sujoDepois / total * 100).toFixed(1)}%   preto puro ${(pretoDepois / total * 100).toFixed(1)}%`,
  );
}

console.log(`ok  ${relatorio.length} artes de estudo normalizadas em site/public/estudos/`);
relatorio.forEach((l) => console.log("   ", l));
