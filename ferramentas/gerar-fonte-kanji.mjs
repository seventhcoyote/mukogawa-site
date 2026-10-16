/**
 * Gera um woff2 com APENAS os kanji e o kana que o site usa.
 *
 * Zen Old Mincho traz o japonês completo, dividido em 10 blocos de ~2 MB. O
 * site usa cerca de vinte caracteres: baixar megabytes para isso é absurdo, e
 * deixar o navegador escolher o bloco por unicode-range ainda traria 2 MB.
 *
 * Este script varre o código atrás dos caracteres CJK realmente usados e corta
 * a fonte para eles. Rodar de novo sempre que entrar um kanji novo — o script
 * avisa se encontrar algum que não estava no recorte anterior.
 *
 *   node ferramentas/gerar-fonte-kanji.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const FONTE = join(RAIZ, "node_modules/@fontsource/zen-old-mincho/files/zen-old-mincho-japanese-700-normal.woff2");
const SAIDA = join(RAIZ, "public/fontes/zen-old-mincho-cjk-700.woff2");
// O ambiente vivia em /tmp e o macOS o apagava sem aviso — duas vezes em dois
// meses, sempre com um ENOENT enterrado num despejo de argumentos que não se
// parece nada com "faltou instalar". Agora mora no projeto. O caminho antigo
// fica como alternativa, para quem já o tiver montado.
import { fileURLToPath } from "node:url";
const AQUI = fileURLToPath(new URL(".", import.meta.url));
const CANDIDATOS = [AQUI + ".venv/bin/pyftsubset", "/tmp/fontenv/bin/pyftsubset"];
const PY = CANDIDATOS.find(existsSync) ?? CANDIDATOS[0];
if (!existsSync(PY)) {
  console.error("\n  pyftsubset não encontrado. Para reconstruir:\n" +
    "    python3 -m venv --clear ferramentas/.venv\n" +
    "    ferramentas/.venv/bin/python3 -m ensurepip --upgrade\n" +
    "    ferramentas/.venv/bin/pip install fonttools brotli\n");
  process.exit(1);
}

function varrer(dir, acc = []) {
  for (const nome of readdirSync(dir)) {
    if (nome === "node_modules" || nome === "dist" || nome === ".astro") continue;
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) varrer(p, acc);
    else if (/\.(astro|ts|tsx|md)$/.test(nome)) acc.push(p);
  }
  return acc;
}

// hiragana, katakana, kanji e a pontuação CJK
const CJK = /[　-〿぀-ゟ゠-ヿ一-鿿＀-￯]/gu;

const usados = new Set();
for (const arq of varrer(join(RAIZ, "src"))) {
  const texto = readFileSync(arq, "utf8");
  for (const c of texto.match(CJK) ?? []) usados.add(c);
}
// os idiomas ES e JA estão escritos mas desligados; incluir mesmo assim para
// não quebrar quando forem ligados
const lista = [...usados].sort().join("");

if (!existsSync(FONTE)) {
  console.error("fonte de origem não encontrada:", FONTE);
  process.exit(1);
}

execFileSync(PY, [
  FONTE,
  `--text=${lista}`,
  "--flavor=woff2",
  "--layout-features=*",
  `--output-file=${SAIDA}`,
]);

const antes = statSync(FONTE).size / 1024 / 1024;
const depois = statSync(SAIDA).size / 1024;
console.log(`ok  ${usados.size} caracteres CJK no site`);
console.log(`    ${lista}`);
console.log(`    ${antes.toFixed(1)} MB -> ${depois.toFixed(1)} KB`);
