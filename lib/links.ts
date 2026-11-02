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

// Each language has its own words in the address: /pt/campanha/#projeto, /en/project/#project.
// The page files stay the same (views/); only the address and the #section name change.
export type PageKey = "campanha" | "autores" | "loja";
export const SLUGS: Record<Lang, Record<PageKey, string>> = {
  pt: { campanha: "campanha", autores: "autores", loja: "loja" },
  en: { campanha: "project", autores: "authors", loja: "store" },
};
// The section each page opens on (its #name).
export const ANCHORS: Record<Lang, Record<PageKey, string>> = {
  pt: { campanha: "projeto", autores: "autores", loja: "loja" },
  en: { campanha: "project", autores: "authors", loja: "store" },
};
export const pathOf = (lang: Lang, key: PageKey) => `/${lang}/${SLUGS[lang][key]}/`;
/** Which page an address word is, in a language (undefined if none). */
export const keyOf = (lang: Lang, slug: string) => (Object.keys(SLUGS[lang]) as PageKey[]).find((k) => SLUGS[lang][k] === slug);

// Internal links land on the page's first section (feedback 2026-10-16: "every click should take you
// to the middle of the page"); components/Site.tsx scrolls to the visible [data-anchor].
export const home = (lang: Lang) => `/${lang}/`;
export const page = (lang: Lang) => ({
  campanha: `${pathOf(lang, "campanha")}#${ANCHORS[lang].campanha}`,
  autores: `${pathOf(lang, "autores")}#${ANCHORS[lang].autores}`,
  loja: `${pathOf(lang, "loja")}#${ANCHORS[lang].loja}`,
});
// External destinations open in a new tab (Fellipe, 2026-10-19): spread onto any <a>.
export const ext = (href: string) => (/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {});

/** The same page in another language (`path` is the current address, e.g. /pt/campanha/). */
export const inLang = (path: string, to: Lang) => {
  const [, from, slug] = path.match(/^\/([a-z]{2})\/([^/]+)?/) ?? [];
  const key = (LANGS as readonly string[]).includes(from) && slug ? keyOf(from as Lang, slug) : undefined;
  return key ? pathOf(to, key) : home(to);
};
/** Remembered so that mukogawa.com/ opens in the language the visitor chose last (public/index.html). */
export const rememberLang = (lang: Lang) => { try { localStorage.setItem("mg-lang", lang); } catch {} };
