/**
 * Configuração dos três idiomas do site.
 *
 * PT-BR é a raiz e não leva prefixo (`/historia`). EN e ES vivem sob prefixo
 * (`/en/story`, `/es/historia`). Os slugs são traduzidos: um leitor espanhol
 * não deveria ter que ler "characters" na barra de endereço.
 *
 * O inglês NÃO é retradução do português — vem do site antigo, onde é a voz do
 * próprio autor. Ver conteudo/GLOSSARIO-EN.md.
 */

/**
 * `pronto` diz se aquele idioma já tem páginas publicadas. Enquanto for false,
 * o idioma não entra no seletor nem no hreflang: anunciar `/en/` antes de ela
 * existir é o mesmo defeito que um link de rede social que não leva a lugar
 * nenhum — e este projeto já decidiu não fazer isso.
 *
 * Vire para true no idioma assim que as páginas dele existirem.
 */
export const IDIOMAS = {
  pt: { rotulo: "Português", curto: "PT", htmlLang: "pt-BR", ogLocale: "pt_BR", pronto: true },
  en: { rotulo: "English", curto: "EN", htmlLang: "en", ogLocale: "en_US", pronto: true },
  es: { rotulo: "Español", curto: "ES", htmlLang: "es", ogLocale: "es_ES", pronto: false },
  ja: { rotulo: "日本語", curto: "JA", htmlLang: "ja", ogLocale: "ja_JP", pronto: true },
} as const;

export type Idioma = keyof typeof IDIOMAS;

export const PADRAO: Idioma = "pt";
export const TODOS = Object.keys(IDIOMAS) as Idioma[];

/** Só os idiomas que realmente têm páginas. É esta lista que a interface usa. */
export const ATIVOS = TODOS.filter((i) => IDIOMAS[i].pronto);

/** Chave de página -> caminho em cada idioma. Fonte única das rotas. */
export const ROTAS = {
  inicio: { pt: "/", en: "/en/", es: "/es/", ja: "/ja/" },
  historia: { pt: "/historia", en: "/en/story", es: "/es/historia", ja: "/ja/story" },
  personagens: { pt: "/personagens", en: "/en/characters", es: "/es/personajes", ja: "/ja/characters" },
  criadores: { pt: "/criadores", en: "/en/creators", es: "/es/creadores", ja: "/ja/creators" },
  loja: { pt: "/loja", en: "/en/shop", es: "/es/tienda", ja: "/ja/shop" },
  faq: { pt: "/faq", en: "/en/faq", es: "/es/faq", ja: "/ja/faq" },
  imprensa: { pt: "/imprensa", en: "/en/press", es: "/es/prensa", ja: "/ja/press" },
  privacidade: { pt: "/privacidade", en: "/en/privacy", es: "/es/privacidad", ja: "/ja/privacy" },
} as const;

export type ChaveRota = keyof typeof ROTAS;

/** Descobre o idioma a partir do caminho. Sem prefixo conhecido = padrão. */
export function idiomaDaUrl(pathname: string): Idioma {
  const primeiro = pathname.split("/").filter(Boolean)[0];
  return TODOS.includes(primeiro as Idioma) ? (primeiro as Idioma) : PADRAO;
}

/** Caminho de uma página num idioma. */
export function rota(chave: ChaveRota, idioma: Idioma): string {
  return ROTAS[chave][idioma];
}

/** Chave da página atual, para o seletor saber para onde apontar. */
export function chaveDaUrl(pathname: string): ChaveRota | null {
  const limpo = pathname.replace(/\/+$/, "") || "/";
  for (const chave of Object.keys(ROTAS) as ChaveRota[]) {
    for (const idioma of TODOS) {
      const alvo = ROTAS[chave][idioma].replace(/\/+$/, "") || "/";
      if (alvo === limpo) return chave;
    }
  }
  return null;
}

/**
 * Para onde o seletor de idioma deve levar, a partir da página atual.
 * Página sem equivalente (um personagem, por exemplo) cai na home do idioma,
 * que é melhor que um link para 404.
 */
export function equivalente(pathname: string, destino: Idioma): string {
  const chave = chaveDaUrl(pathname);
  return chave ? rota(chave, destino) : rota("inicio", destino);
}
