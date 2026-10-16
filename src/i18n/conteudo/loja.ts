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

/**
 * O que já se compra hoje, em oposição aos cartões de região, que ainda dizem
 * "aguarde". Bloco próprio e no topo por isso: a Loja inteira fala no futuro, e
 * um item comprável perdido no meio de três avisos de espera não seria visto.
 *
 * SEM PREÇO, como em todo o resto do site. O valor vive no varejista e o FAQ
 * diz isso com todas as letras.
 *
 * A palavra "anime" NÃO entra aqui, embora a página do varejista use. O site
 * afirma, na Obra e no FAQ, que o anime é o horizonte do projeto e ainda não
 * tem produção — repetir o termo numa página de venda contradiria isso e
 * prometeria ao leitor uma coisa que não existe.
 */
export interface ItemVenda {
  rotulo: string;
  titulo: string;
  texto: string;
  /**
   * A ficha do item. É o que dá peso de coleção sem precisar de adjetivo:
   * colecionador reconhece objeto catalogado — ano, natureza, tiragem —, não
   * quem se anuncia como raro. Cada campo aqui é verificável: o ano está
   * impresso na própria peça, a tiragem foi confirmada pelo Bruno, o idioma
   * está na página do varejista.
   */
  ficha: string[];
  /** Idioma e alcance do envio: quem lê em inglês ou japonês precisa saber. */
  nota: string;
  cta: string;
  alt: string;
}

/**
 * O destaque da campanha, no topo da Loja. Só o português o mostra: a campanha
 * é em português e aceita apoio do Brasil, e mandar quem lê japonês para um
 * financiamento que ele não pode usar seria um beco.
 *
 * O TÍTULO NÃO DIZ "PRÉ-VENDA ABERTA", como estava na referência do autor: a
 * campanha abre em 03/11/2026 e hoje o Catarse só aceita seguir o projeto.
 * Anunciar uma pré-venda que ainda não começou é a mesma promessa vazia que o
 * botão "Apoie agora" faria. Em 03/11 os dois mudam juntos.
 */
export interface Catarse {
  rotulo: string;
  titulo: string;
  h1: string;
  lede: string;
  texto: string;
  abertura: string;
  alt: string;
}

/** EN e JA não mostram loja: a Orvalho envia só dentro do Brasil e a campanha
 *  é em português. Em vez de uma página vazia, um aviso e um caminho. */
export interface LojaEmBreve {
  rotulo: string;
  titulo: string;
  texto: string;
  cta: string;
}

interface ConteudoLoja {
  catarse: Catarse;
  emBreve: LojaEmBreve;
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
  disponivel: ItemVenda;
  regioes: Regiao[];
}

export const LOJA: Record<Idioma, ConteudoLoja> = {
  pt: {
    catarse: {
      rotulo: "Campanha na Catarse // Edição em português",
      titulo: "Mukō-Gawa: Bleeding Light",
      h1: "Pré-venda",
      lede: "Bleeding Light é um mangá de dark fantasy baseado em literatura bíblica, onde anjos e demônios travam uma guerra oculta aos olhos humanos.",
      texto: "A produção está na reta final. Apoiar o projeto nesta fase também funciona como pré-venda: você garante sua cópia física ou digital, conforme a recompensa escolhida.",
      abertura: "A campanha abre em 3 de novembro. Até lá, siga o projeto no Catarse para ser avisado na abertura.",
      alt: "Capa da campanha de Mukō-Gawa: Bleeding Light no Catarse",
    },
    emBreve: { rotulo: "Loja", titulo: "Em breve", texto: "A loja de Mukō-Gawa chega em breve.", cta: "Conheça o próximo lançamento" },
    capaRotulo: "Yomikiri // Capa",
    capaTitulo: "Mukō-Gawa: Por isso Lutamos",
    capaTexto: "A capa do yomikiri, com arte de Guilherme Match. É por ela que a obra chega às mãos de quem ainda não conhece o mundo.",
    capaAlt: "Capa do yomikiri de Mukō-Gawa: um guerreiro alado de armadura, empunhando uma lâmina, sobre fundo vermelho",
    titulo: "Loja",
    rotulo: "Onde comprar",
    lead: "Edições, preços, frete e disponibilidade são responsabilidade do varejista da sua região.",
    descricao: "Onde comprar Mukō-Gawa. Edições para Brasil, Estados Unidos e Japão. O yomikiri, capítulo piloto do mangá, chega em 1º de dezembro de 2026.",
    semLink: "Link de venda ainda não disponível",
    aviseMe: "Avise-me",
    nota: "Os links de venda entram no ar a cada lançamento. As datas seguem o calendário atual da editora e podem mudar.",
    duvidas: "Dúvidas sobre preço, idioma e envio",
    disponivel: {
      rotulo: "Item de coleção // À venda agora",
      titulo: "Apostila conceitual + print",
      texto: "Antes de existir como obra publicada, Mukō-Gawa foi um caderno de apresentação: o conceito, o enredo e os personagens em traço e estudo. É esse documento de 2025 que está impresso aqui, em espiral, e com ele vai o print do anúncio do yomikiri. Material de bastidor que quase nunca chega ao leitor — quem tem este kit chegou antes do primeiro capítulo.",
      ficha: ["2025", "Tiragem limitada", "Apostila + print"],
      nota: "Edição em português, com envio dentro do Brasil, pela Orvalho.",
      cta: "Comprar na Orvalho",
      alt: "Foto do kit de Mukō-Gawa segurado na mão: a apostila conceitual em espiral, com estudo em traço na capa, sobre o print do anúncio do yomikiri, de fundo vermelho",
    },
    regioes: [
      { codigo: "BR", pais: "Brasil", canal: "Loja própria e Amazon", destaque: true,
        texto: "Edições em português, na nossa própria loja com envio dentro do país, e também pela Amazon.",
        quando: "Yomikiri — 1º de dezembro de 2026" },
      { codigo: "US", pais: "Estados Unidos", canal: "Amazon", destaque: false,
        texto: "Edições em inglês, impressas e digitais, com entrega pela Amazon.",
        quando: "Yomikiri — 1º de dezembro de 2026" },
      { codigo: "JP", pais: "Japão", canal: "Amazon.co.jp", destaque: false,
        texto: "Edições em japonês, impressas e digitais, com entrega pela Amazon.co.jp.",
        quando: "Yomikiri — 1º de dezembro de 2026" },
    ],
  },

  en: {
    catarse: {
      rotulo: "Catarse campaign // Portuguese edition",
      titulo: "Mukō-Gawa: Bleeding Light",
      h1: "Pre-order",
      lede: "Bleeding Light is a dark fantasy manga based on biblical literature, where angels and demons wage a war hidden from human eyes.",
      texto: "Production is in its final stretch. Backing the project at this stage also works as a pre-order: you secure your copy, physical or digital, according to the reward you choose.",
      abertura: "The campaign opens on 3 November.",
      alt: "Cover of the Mukō-Gawa: Bleeding Light campaign on Catarse",
    },
    emBreve: { rotulo: "Shop", titulo: "Coming soon", texto: "The Mukō-Gawa store is coming soon.", cta: "Learn about the upcoming product" },
    capaRotulo: "Yomikiri // Cover",
    capaTitulo: "Mukō-Gawa: Why We Fight",
    capaTexto: "The cover of the yomikiri, with art by Guilherme Match. It is how the work reaches the hands of someone who does not yet know this world.",
    capaAlt: "Cover of the Mukō-Gawa yomikiri: a winged warrior in armour, blade drawn, against a red field",
    titulo: "Shop",
    rotulo: "Where to buy",
    lead: "Editions, pricing, shipping and availability are handled by the retailer for your region.",
    descricao: "Where to buy Mukō-Gawa. Editions for Brazil, the United States and Japan. The yomikiri, the manga's pilot chapter, arrives 1 December 2026.",
    semLink: "Retail link not live yet",
    aviseMe: "Notify me",
    nota: "Retail links go live with each release. Dates shown are current publisher schedule and may change.",
    duvidas: "Questions about pricing, language and shipping",
    disponivel: {
      rotulo: "Collector's item // On sale now",
      titulo: "Concept booklet + print",
      texto: "Before it existed as a published work, Mukō-Gawa was a presentation notebook: the concept, the plot and the characters in sketch and study. It is that 2025 document printed here, spiral-bound, and the yomikiri announcement print comes with it. Backstage material that almost never reaches the reader — whoever holds this set arrived before the first chapter.",
      ficha: ["2025", "Limited print run", "Booklet + print"],
      nota: "Portuguese edition, shipped within Brazil by Orvalho.",
      cta: "Buy from Orvalho",
      alt: "Photo of the Mukō-Gawa set held in hand: the spiral-bound concept booklet, a line study on its cover, over the yomikiri announcement print on its red field",
    },
    regioes: [
      { codigo: "BR", pais: "Brazil", canal: "Own store and Amazon", destaque: true,
        texto: "Portuguese editions, from our own store with domestic shipping, and also through Amazon.",
        quando: "Yomikiri — 1 December 2026" },
      { codigo: "US", pais: "United States", canal: "Amazon", destaque: false,
        texto: "English editions in print and digital, fulfilled by Amazon.",
        quando: "Yomikiri — 1 December 2026" },
      { codigo: "JP", pais: "Japan", canal: "Amazon.co.jp", destaque: false,
        texto: "Japanese editions in print and digital, fulfilled by Amazon.co.jp.",
        quando: "Yomikiri — 1 December 2026" },
    ],
  },

  // Traduzido do PT-BR. Pendente de revisão por falante nativo.
  es: {
    catarse: {
      rotulo: "Campaña en Catarse // Edición en portugués",
      titulo: "Mukō-Gawa: Bleeding Light",
      h1: "Preventa",
      lede: "Bleeding Light é um mangá de dark fantasy baseado em literatura bíblica, onde anjos e demônios travam uma guerra oculta aos olhos humanos.",
      texto: "La producción está en la recta final.",
      abertura: "La campaña abre el 3 de noviembre.",
      alt: "Portada de la campaña de Mukō-Gawa: Bleeding Light en Catarse",
    },
    emBreve: { rotulo: "Tienda", titulo: "Muy pronto", texto: "La tienda de Mukō-Gawa llega muy pronto.", cta: "Conoce el próximo lanzamiento" },
    capaRotulo: "Yomikiri // Portada",
    capaTitulo: "Mukō-Gawa: Por Eso Luchamos",
    capaTexto: "La portada del yomikiri, con arte de Guilherme Match. Es por ella que la obra llega a las manos de quien aún no conoce este mundo.",
    capaAlt: "Portada del yomikiri de Mukō-Gawa: un guerrero alado con armadura, espada en mano, sobre fondo rojo",
    titulo: "Tienda",
    rotulo: "Dónde comprar",
    lead: "Ediciones, precios, envío y disponibilidad son responsabilidad del minorista de tu región.",
    descricao: "Dónde comprar Mukō-Gawa. Ediciones para Brasil, Estados Unidos y Japón. El yomikiri, el capítulo piloto del manga, llega el 1 de diciembre de 2026.",
    semLink: "Enlace de venta aún no disponible",
    aviseMe: "Avísame",
    nota: "Los enlaces de venta se activan con cada lanzamiento. Las fechas siguen el calendario actual de la editorial y pueden cambiar.",
    duvidas: "Dudas sobre precio, idioma y envío",
    disponivel: {
      rotulo: "Pieza de colección // A la venta ahora",
      titulo: "Cuadernillo conceptual + lámina",
      texto: "Antes de existir como obra publicada, Mukō-Gawa fue un cuaderno de presentación: el concepto, la trama y los personajes en trazo y estudio. Es ese documento de 2025 el que está impreso aquí, con encuadernación en espiral, y con él va la lámina del anuncio del yomikiri. Material de bastidores que casi nunca llega al lector — quien tiene este kit llegó antes del primer capítulo.",
      ficha: ["2025", "Tirada limitada", "Cuadernillo + lámina"],
      nota: "Edición en portugués, con envío dentro de Brasil, por Orvalho.",
      cta: "Comprar en Orvalho",
      alt: "Foto del kit de Mukō-Gawa sostenido en la mano: el cuadernillo conceptual en espiral, con estudio a trazo en la portada, sobre la lámina del anuncio del yomikiri, de fondo rojo",
    },
    regioes: [
      { codigo: "BR", pais: "Brasil", canal: "Tienda propia y Amazon", destaque: true,
        texto: "Ediciones en portugués, en nuestra propia tienda con envío dentro del país, y también por Amazon.",
        quando: "Yomikiri — 1 de diciembre de 2026" },
      { codigo: "US", pais: "Estados Unidos", canal: "Amazon", destaque: false,
        texto: "Ediciones en inglés, impresas y digitales, con entrega por Amazon.",
        quando: "Yomikiri — 1 de diciembre de 2026" },
      { codigo: "JP", pais: "Japón", canal: "Amazon.co.jp", destaque: false,
        texto: "Ediciones en japonés, impresas y digitales, con entrega por Amazon.co.jp.",
        quando: "Yomikiri — 1 de diciembre de 2026" },
    ],
  },

  // Base: site modelo. Pendente de revisão.
  ja: {
    catarse: {
      rotulo: "Catarse キャンペーン // ポルトガル語版",
      titulo: "Mukō-Gawa: Bleeding Light",
      h1: "予約",
      lede: "『向こう側:ブリーディング・ライト』は、聖書文学を基にしたダークファンタジー漫画。天使と悪魔が、人知れず戦い続ける見えざる戦争を描く。",
      texto: "制作は最終段階にあります。",
      abertura: "キャンペーンは11月3日に開始します。",
      alt: "Catarse における『向こう側 Bleeding Light』キャンペーンの表紙",
    },
    emBreve: { rotulo: "ショップ", titulo: "近日公開", texto: "『向こう側』のストアは近日公開予定です。", cta: "新作について知る" },
    capaRotulo: "読み切り // 表紙",
    capaTitulo: "Mukō-Gawa: Tatakau Riyū",
    capaTexto: "読み切りの表紙。作画はギリェルミ・マッチ。まだこの世界を知らない読者の手に、作品が最初に届く姿である。",
    capaAlt: "『向こう側』読み切りの表紙：赤を背に、刃を携えた翼ある鎧の戦士",
    titulo: "ショップ",
    rotulo: "購入先",
    lead: "版・価格・配送・在庫は各地域の販売元が取り扱います。",
    descricao: "『向こう側』の購入先。ブラジル・アメリカ・日本の各版。漫画の読み切りは2026年12月1日発売。",
    semLink: "販売リンクは未公開",
    aviseMe: "お知らせを受け取る",
    nota: "販売リンクは各刊行に合わせて公開されます。日程は現行の刊行予定であり、変更される場合があります。",
    duvidas: "価格・言語・配送についてのご質問",
    disponivel: {
      rotulo: "コレクターズアイテム // 発売中",
      titulo: "設定資料集＋プリント",
      texto: "『向こう側』は、刊行される作品となる前に、一冊の企画書でした。構想・物語・登場人物を、線画と習作で示したもの。ここに印刷されているのは、その2025年の資料であり、リング製本の一冊に読み切り告知のプリントが付きます。読者の目に触れることの少ない、舞台裏の品。この一組を手にした方は、第一話より前に辿り着いたことになります。",
      ficha: ["2025年", "限定部数", "資料集＋プリント"],
      nota: "ポルトガル語版。Orvalho によるブラジル国内発送のみとなります。",
      cta: "Orvalho で購入する",
      alt: "手に持たれた『向こう側』の一組：リング製本の設定資料集と、その下に赤地の読み切り告知プリント",
    },
    regioes: [
      { codigo: "BR", pais: "ブラジル", canal: "自社ストアとAmazon", destaque: true,
        texto: "ポルトガル語版。自社ストアより直接販売して国内へ発送するほか、Amazonでもお求めいただけます。",
        quando: "読み切り — 2026年12月1日" },
      { codigo: "US", pais: "アメリカ合衆国", canal: "Amazon", destaque: false,
        texto: "英語版。紙・電子ともにAmazonが取り扱います。",
        quando: "読み切り — 2026年12月1日" },
      { codigo: "JP", pais: "日本", canal: "Amazon.co.jp", destaque: false,
        texto: "日本語版。紙・電子ともにAmazon.co.jpが取り扱います。",
        quando: "読み切り — 2026年12月1日" },
    ],
  },
};
