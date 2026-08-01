// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

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

  // PT-BR é o idioma raiz e não leva prefixo. EN e ES vivem sob /en/ e /es/.
  // Os slugs são traduzidos por idioma — o mapa está em src/i18n/idiomas.ts.
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es", "ja"],
    routing: { prefixDefaultLocale: false },
  },

  build: { inlineStylesheets: "auto" },

  image: {
    // Formatos modernos + fallback, gerados no build.
    responsiveStyles: true,
  },

  // O sitemap declara os pares de idioma para o Google, no mesmo par que o
  // hreflang do Base.astro já anuncia. Só entram PT e EN: ES e JA estão
  // escritos mas desligados em src/i18n/idiomas.ts, e suas rotas nem são
  // geradas — anunciá-las seria apontar para páginas que não existem.
  integrations: [
    sitemap({
      i18n: { defaultLocale: "pt", locales: { pt: "pt-BR", en: "en" } },
    }),
  ],
});