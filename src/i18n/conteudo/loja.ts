/**
 * Conteúdo da Loja por idioma.
 *
 * PT-BR é o texto revisado do site novo. EN é o do próprio autor, colhido do
 * site modelo (ver conteudo/EN-SITE-MODELO.md) — não é retradução.
 * ES e JA aguardam revisão: ver conteudo/JA-SITE-MODELO.md.
 */
import type { Idioma } from "../idiomas";

export interface Regiao {
  codigo: string;
  pais: string;
  canal: string;
  texto: string;
  quando: string;
  destaque: boolean;
}

interface ConteudoLoja {
  capaRotulo: string;
  capaTitulo: string;
  capaTexto: string;
  capaAlt: string;
  titulo: string;
  rotulo: string;
  lead: string;
  descricao: string;
  semLink: string;
  aviseMe: string;
  nota: string;
  duvidas: string;
  regioes: Regiao[];
}

export const LOJA: Record<Idioma, ConteudoLoja> = {
  pt: {
    capaRotulo: "Volume 01 // Capa",
    capaTitulo: "This Is Why We Fight",
    capaTexto: "A capa do primeiro volume, com arte de Guilherme Match. É por ela que a obra chega às mãos de quem ainda não conhece o mundo.",
    capaAlt: "Capa do volume 1 de Mukō-Gawa: um guerreiro alado de armadura, empunhando uma lâmina, sobre fundo vermelho",
    titulo: "Loja",
    rotulo: "Onde comprar",
    lead: "Edições, preços, frete e disponibilidade são responsabilidade do varejista da sua região.",
    descricao: "Onde comprar Mukō-Gawa. Edições para Brasil, Estados Unidos e Japão. O primeiro volume do mangá chega em dezembro de 2026.",
    semLink: "Link de venda ainda não disponível",
    aviseMe: "Avise-me",
    nota: "Os links de venda entram no ar a cada lançamento. As datas seguem o calendário atual da editora e podem mudar.",
    duvidas: "Dúvidas sobre preço, idioma e envio",
    regioes: [
      { codigo: "BR", pais: "Brasil", canal: "Shopify", destaque: true,
        texto: "Edições em português, vendidas diretamente pela nossa loja e enviadas dentro do país.",
        quando: "Mangá — dezembro de 2026" },
      { codigo: "US", pais: "Estados Unidos", canal: "Amazon", destaque: false,
        texto: "Edições em inglês, impressas e digitais, com entrega pela Amazon.",
        quando: "Mangá — dezembro de 2026" },
      { codigo: "JP", pais: "Japão", canal: "Amazon.co.jp", destaque: false,
        texto: "Edições em japonês, impressas e digitais, com entrega pela Amazon.co.jp.",
        quando: "Mangá — dezembro de 2026" },
    ],
  },

  en: {
    capaRotulo: "Volume 01 // Cover",
    capaTitulo: "This Is Why We Fight",
    capaTexto: "The cover of the first volume, with art by Guilherme Match. It is how the work reaches the hands of someone who does not yet know this world.",
    capaAlt: "Cover of Mukō-Gawa volume 1: a winged warrior in armour, blade drawn, against a red field",
    titulo: "Shop",
    rotulo: "Where to buy",
    lead: "Editions, pricing, shipping and availability are handled by the retailer for your region.",
    descricao: "Where to buy Mukō-Gawa. Editions for Brazil, the United States and Japan. The first manga volume arrives December 2026.",
    semLink: "Retail link not live yet",
    aviseMe: "Notify me",
    nota: "Retail links go live with each release. Dates shown are current publisher schedule and may change.",
    duvidas: "Questions about pricing, language and shipping",
    regioes: [
      { codigo: "BR", pais: "Brazil", canal: "Shopify", destaque: true,
        texto: "Portuguese editions, sold direct from our own store and shipped domestically.",
        quando: "Manga — December 2026" },
      { codigo: "US", pais: "United States", canal: "Amazon", destaque: false,
        texto: "English editions in print and digital, fulfilled by Amazon.",
        quando: "Manga — December 2026" },
      { codigo: "JP", pais: "Japan", canal: "Amazon.co.jp", destaque: false,
        texto: "Japanese editions in print and digital, fulfilled by Amazon.co.jp.",
        quando: "Manga — December 2026" },
    ],
  },

  // Traduzido do PT-BR. Pendente de revisão por falante nativo.
  es: {
    capaRotulo: "Volumen 01 // Portada",
    capaTitulo: "This Is Why We Fight",
    capaTexto: "La portada del primer volumen, con arte de Guilherme Match. Es por ella que la obra llega a las manos de quien aún no conoce este mundo.",
    capaAlt: "Portada del volumen 1 de Mukō-Gawa: un guerrero alado con armadura, espada en mano, sobre fondo rojo",
    titulo: "Tienda",
    rotulo: "Dónde comprar",
    lead: "Ediciones, precios, envío y disponibilidad son responsabilidad del minorista de tu región.",
    descricao: "Dónde comprar Mukō-Gawa. Ediciones para Brasil, Estados Unidos y Japón. El primer volumen del manga llega en diciembre de 2026.",
    semLink: "Enlace de venta aún no disponible",
    aviseMe: "Avísame",
    nota: "Los enlaces de venta se activan con cada lanzamiento. Las fechas siguen el calendario actual de la editorial y pueden cambiar.",
    duvidas: "Dudas sobre precio, idioma y envío",
    regioes: [
      { codigo: "BR", pais: "Brasil", canal: "Shopify", destaque: true,
        texto: "Ediciones en portugués, vendidas directamente por nuestra tienda y enviadas dentro del país.",
        quando: "Manga — diciembre de 2026" },
      { codigo: "US", pais: "Estados Unidos", canal: "Amazon", destaque: false,
        texto: "Ediciones en inglés, impresas y digitales, con entrega por Amazon.",
        quando: "Manga — diciembre de 2026" },
      { codigo: "JP", pais: "Japón", canal: "Amazon.co.jp", destaque: false,
        texto: "Ediciones en japonés, impresas y digitales, con entrega por Amazon.co.jp.",
        quando: "Manga — diciembre de 2026" },
    ],
  },

  // Base: site modelo. Pendente de revisão.
  ja: {
    capaRotulo: "第1巻 // 表紙",
    capaTitulo: "This Is Why We Fight",
    capaTexto: "第1巻の表紙。作画はギリェルミ・マッチ。まだこの世界を知らない読者の手に、作品が最初に届く姿である。",
    capaAlt: "『向こう側』第1巻の表紙：赤を背に、刃を携えた翼ある鎧の戦士",
    titulo: "ショップ",
    rotulo: "購入先",
    lead: "版・価格・配送・在庫は各地域の販売元が取り扱います。",
    descricao: "『向こう側』の購入先。ブラジル・アメリカ・日本の各版。漫画第1巻は2026年12月発売。",
    semLink: "販売リンクは未公開",
    aviseMe: "お知らせを受け取る",
    nota: "販売リンクは各刊行に合わせて公開されます。日程は現行の刊行予定であり、変更される場合があります。",
    duvidas: "価格・言語・配送についてのご質問",
    regioes: [
      { codigo: "BR", pais: "ブラジル", canal: "Shopify", destaque: true,
        texto: "ポルトガル語版。自社ストアより直接販売し、国内へ発送します。",
        quando: "漫画 — 2026年12月" },
      { codigo: "US", pais: "アメリカ合衆国", canal: "Amazon", destaque: false,
        texto: "英語版。紙・電子ともにAmazonが取り扱います。",
        quando: "漫画 — 2026年12月" },
      { codigo: "JP", pais: "日本", canal: "Amazon.co.jp", destaque: false,
        texto: "日本語版。紙・電子ともにAmazon.co.jpが取り扱います。",
        quando: "漫画 — 2026年12月" },
    ],
  },
};
