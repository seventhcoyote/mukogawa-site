// @ts-check
import { defineConfig } from "astro/config";

// Enquanto mukogawa.com ainda serve o site antigo, o deploy de preview precisa
// anunciar a própria URL: senão o canonical manda o Google para o site velho e o
// preview de link vai buscar a og.jpg num domínio onde ela não existe.
// A Vercel expõe VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL sem o protocolo.
const urlDaVercel =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export default defineConfig({
  site:
    process.env.SITE_URL ??
    (urlDaVercel ? `https://${urlDaVercel}` : "https://mukogawa.com"),
  // PT-BR é o idioma raiz. A estrutura já prevê /en/ na próxima rodada.
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: "auto" },
  image: {
    // Formatos modernos + fallback, gerados no build.
    responsiveStyles: true,
  },
});
