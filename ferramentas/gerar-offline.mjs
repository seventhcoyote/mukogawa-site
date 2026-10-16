/**
 * Gera o pacote offline do Mukō-Gawa: o mesmo build, com os caminhos absolutos
 * reescritos para relativos, de modo que o site abra por duplo clique, sem
 * servidor. Depois valida que nenhuma referência ficou apontando para o vazio.
 *
 *   node ferramentas/gerar-offline.mjs
 *
 * Sem dependências. Espera que `npm run build` já tenha rodado em site/.
 */
import { readFileSync, writeFileSync, cpSync, rmSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname, posix } from "node:path";
import { execFileSync } from "node:child_process";

const RAIZ = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const DIST = join(RAIZ, "site", "dist");
const SAIDA = join(RAIZ, "mukogawa-offline");
const ZIP = join(RAIZ, "mukogawa-offline.zip");

if (!existsSync(DIST)) {
  console.error("dist/ não existe. Rode `npm run build --prefix site` antes.");
  process.exit(1);
}

// ---------------------------------------------------------------- varrer
function arquivos(dir, acc = []) {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) arquivos(p, acc);
    else acc.push(p);
  }
  return acc;
}

rmSync(SAIDA, { recursive: true, force: true });
cpSync(DIST, SAIDA, { recursive: true });

const todos = arquivos(SAIDA);
const existe = new Set(todos.map((p) => relative(SAIDA, p)));

/** "/faq" -> "faq/index.html" quando a rota é um diretório com index. */
function resolverAlvo(caminhoAbs) {
  const limpo = caminhoAbs.replace(/^\//, "");
  if (limpo === "" ) return "index.html";
  if (existe.has(limpo)) return limpo;
  const comIndex = posix.join(limpo, "index.html");
  if (existe.has(comIndex)) return comIndex;
  return limpo; // pode não existir: a validação abaixo acusa
}

let reescritas = 0;
const quebrados = [];

for (const arquivo of todos) {
  if (!/\.(html|css)$/.test(arquivo)) continue;

  const base = dirname(relative(SAIDA, arquivo));
  const html = /\.html$/.test(arquivo);
  let texto = readFileSync(arquivo, "utf8");

  const paraRelativo = (abs) => {
    const [semHash, hash = ""] = abs.split("#");
    const [semQuery, query = ""] = semHash.split("?");
    const alvo = html ? resolverAlvo(semQuery) : semQuery.replace(/^\//, "");
    let rel = posix.relative(base === "." ? "" : base, alvo) || ".";
    if (!rel.startsWith(".")) rel = "./" + rel;
    reescritas++;
    return rel + (query ? "?" + query : "") + (hash ? "#" + hash : "");
  };

  // href="/..." / src="/..." / content="/..."
  texto = texto.replace(/\b(href|src|content)="(\/[^"]*)"/g, (_, attr, val) =>
    `${attr}="${paraRelativo(val)}"`,
  );

  // srcset="/a.webp 380w, /b.webp 700w"
  texto = texto.replace(/\bsrcset="([^"]+)"/g, (m, val) => {
    if (!val.includes("/")) return m;
    const partes = val.split(",").map((p) => {
      const t = p.trim();
      const [url, ...resto] = t.split(/\s+/);
      if (!url.startsWith("/")) return t;
      return [paraRelativo(url), ...resto].join(" ");
    });
    return `srcset="${partes.join(", ")}"`;
  });

  // url(/...) dentro de CSS, inline ou em arquivo
  texto = texto.replace(/url\((['"]?)(\/[^)'"]+)\1\)/g, (_, aspas, val) =>
    `url(${aspas}${paraRelativo(val)}${aspas})`,
  );

  writeFileSync(arquivo, texto);
}

// ------------------------------------------------------------- validação
for (const arquivo of todos) {
  if (!/\.html$/.test(arquivo)) continue;
  const base = dirname(relative(SAIDA, arquivo));
  const texto = readFileSync(arquivo, "utf8");

  for (const m of texto.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const val = m[1];
    if (/^(https?:|mailto:|data:|#|\/\/)/.test(val)) continue;
    const alvo = val.split("#")[0].split("?")[0];
    if (!alvo) continue;
    const resolvido = posix.normalize(posix.join(base === "." ? "" : base, alvo));
    if (!existe.has(resolvido)) {
      quebrados.push(`${relative(SAIDA, arquivo)} -> ${val}`);
    }
  }

  if (/(?:href|src)="\//.test(texto)) {
    quebrados.push(`${relative(SAIDA, arquivo)}: ainda tem caminho absoluto`);
  }
}

if (quebrados.length) {
  console.error(`REFERÊNCIAS QUEBRADAS (${quebrados.length}):`);
  quebrados.slice(0, 40).forEach((q) => console.error("  " + q));
  process.exit(1);
}

rmSync(ZIP, { force: true });
execFileSync("zip", ["-qr", ZIP, "mukogawa-offline"], { cwd: RAIZ });

const paginas = todos.filter((p) => p.endsWith(".html")).length;
console.log(`ok  ${paginas} páginas, ${todos.length} arquivos, ${reescritas} caminhos reescritos, 0 quebrados`);
console.log(`    ${SAIDA}`);
console.log(`    ${ZIP}`);
