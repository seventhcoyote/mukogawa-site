// External destinations. Campaign, store and socials from mukogawa.com (2026-10-16).
export const STORE_URL = "/loja/#loja";
export const CAMPAIGN_URL = "https://www.catarse.com.br/muko-gawa?utm_source=mukogawaverse&utm_medium=site&utm_campaign=pre-campanha";
export const ORVALHO_URL = "https://loja.orvalho.com/livros/muko-gawa-apostila-conceitual-israel-subira";
// YouTube: mukogawa.com links no channel; both of its videos are on Isra's channel.
export const SOCIAL = { instagram: "https://www.instagram.com/mukogawaverse/", discord: "https://discord.gg/xjXtrfGPZx", youtube: "https://www.youtube.com/@IsraelSubira" };
// Internal links land on the page's first section (feedback 2026-10-16: "every click should take you
// to the middle of the page"); components/Site.tsx scrolls to the visible [data-anchor].
export const PAGE = { campanha: "/campanha/#projeto", autores: "/autores/#autores", loja: "/loja/#loja" };
// External destinations open in a new tab (Fellipe, 2026-10-19): spread onto any <a>.
export const ext = (href: string) => (/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {});
