// External destinations. Campaign, store and socials from mukogawa.com (2026-10-16).
export const CAMPAIGN_URL = "https://www.catarse.com.br/muko-gawa?utm_source=mukogawaverse&utm_medium=site&utm_campaign=pre-campanha";
export const ORVALHO_URL = "https://loja.orvalho.com/livros/muko-gawa-apostila-conceitual-israel-subira";
// YouTube: mukogawa.com links no channel; both of its videos are on Isra's channel.
export const SOCIAL = { instagram: "https://www.instagram.com/mukogawaverse/", discord: "https://discord.gg/xjXtrfGPZx", youtube: "https://www.youtube.com/@IsraelSubira" };

// Languages: each one lives under its own folder (/pt/, /en/). mukogawa.com/ picks one from the
// browser's language (public/index.html). To add Japanese: content/ja.ts, then "ja" here.
export const LANGS = ["pt", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const LANG_NAMES: Record<Lang, string> = { pt: "PT", en: "EN" };

// Internal links land on the page's first section (feedback 2026-10-16: "every click should take you
// to the middle of the page"); components/Site.tsx scrolls to the visible [data-anchor].
export const home = (lang: Lang) => `/${lang}/`;
export const page = (lang: Lang) => ({
  campanha: `/${lang}/campanha/#projeto`,
  autores: `/${lang}/autores/#autores`,
  loja: `/${lang}/loja/#loja`,
});
// External destinations open in a new tab (Fellipe, 2026-10-19): spread onto any <a>.
export const ext = (href: string) => (/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {});

/** The same page in another language (`path` is the current address, e.g. /pt/campanha/). */
export const inLang = (path: string, to: Lang) => path.replace(/^\/[a-z]{2}(?=\/|$)/, `/${to}`) || `/${to}/`;
/** Remembered so that mukogawa.com/ opens in the language the visitor chose last (public/index.html). */
export const rememberLang = (lang: Lang) => { try { localStorage.setItem("mg-lang", lang); } catch {} };
