/**
 * Sala de imprensa — o que um veículo precisa para escrever sobre a obra sem
 * ter que pedir nada por e-mail e esperar resposta.
 *
 * A estrutura é a de um press kit de obra: ficha técnica, sinopse em três
 * tamanhos (porque cada veículo tem um espaço diferente), material para baixar,
 * quem faz, e a regra de uso das imagens — essa última é a que evita que a arte
 * do Bretas e do Match circule sem crédito.
 *
 * MUITA COISA AQUI É PLACEHOLDER, e de propósito: os textos de sinopse e os
 * arquivos para download dependem de material que ainda não está em disco. Cada
 * pendência está marcada com `pendente: true` e aparece na página como um aviso
 * honesto em vez de um link que não baixa nada. Ver PENDENCIAS.md.
 */
import type { Idioma } from "../idiomas";

export interface ItemMaterial {
  nome: string;
  detalhe: string;
  /** caminho do arquivo; null enquanto não existir */
  href: string | null;
}

export interface BlocoMaterial {
  titulo: string;
  itens: ItemMaterial[];
}

export interface ConteudoImprensa {
  titulo: string;
  descricao: string;
  rotulo: string;
  lead: string;

  fichaTitulo: string;
  ficha: { rotulo: string; valor: string }[];

  sinopseTitulo: string;
  sinopseNota: string;
  sinopses: { rotulo: string; texto: string }[];

  materialTitulo: string;
  materialLead: string;
  materiais: BlocoMaterial[];
  emBreve: string;

  usoTitulo: string;
  uso: string[];

  creditoTitulo: string;
  creditoLead: string;
  creditoLinha: string;

  contatoTitulo: string;
  contatoTexto: string;
  contatoBotao: string;
}

/** Enquanto o arquivo não existe, o item aparece marcado — nunca como link morto. */
const SEM_ARQUIVO = null;

export const IMPRENSA: Record<Idioma, ConteudoImprensa> = {
  pt: {
    titulo: "Imprensa",
    descricao: "Material de imprensa de Mukō-Gawa: ficha técnica, sinopses, artes liberadas para publicação e contato.",
    rotulo: "Sala de imprensa",
    lead: "O que é preciso para escrever sobre Mukō-Gawa, reunido num lugar só. Se faltar alguma coisa, é só pedir.",

    fichaTitulo: "Ficha técnica",
    ficha: [
      { rotulo: "Título", valor: "Mukō-Gawa (向こう側)" },
      { rotulo: "Volume 1", valor: "Por Isso Lutamos" },
      { rotulo: "Criador e roteirista", valor: "Israel Subira" },
      { rotulo: "Arte conceitual", valor: "Daniel Bretas" },
      { rotulo: "Arte do mangá", valor: "Guilherme Match" },
      { rotulo: "Gênero", valor: "Dark fantasy, seinen" },
      { rotulo: "Formato", valor: "Mangá; série de livros a partir de 2027" },
      { rotulo: "Lançamento", valor: "Volume 1 em dezembro de 2026" },
      { rotulo: "Idiomas", valor: "Português, inglês e japonês" },
      { rotulo: "Classificação", valor: "A definir" },
      { rotulo: "ISBN", valor: "A definir" },
      { rotulo: "Editora", valor: "A definir" },
    ],

    sinopseTitulo: "Sinopses",
    sinopseNota: "Três tamanhos, para caber em qualquer espaço. Todos podem ser publicados como estão.",
    sinopses: [
      { rotulo: "Uma linha",
        texto: "Antes da história, uma civilização entrou em guerra pela forma do mundo." },
      { rotulo: "Um parágrafo",
        texto: "Mukō-Gawa é uma dark fantasy sobre a guerra civil de um povo proto-humano que disputa o plano interdimensional entre o que é e o que foi prometido. De uma só linhagem nascem duas ordens: a que quer manter a fenda fechada e a que quer rasgá-la. A narrativa sai primeiro como mangá, com o primeiro volume em dezembro de 2026, e depois como série de livros." },
      { rotulo: "Três parágrafos", texto: "" },
    ],

    materialTitulo: "Material para baixar",
    materialLead: "Arquivos em alta resolução, liberados para publicação editorial.",
    materiais: [
      { titulo: "Marca", itens: [
        { nome: "Logotipo — fundo escuro", detalhe: "PNG com transparência", href: SEM_ARQUIVO },
        { nome: "Logotipo — fundo claro", detalhe: "PNG com transparência", href: SEM_ARQUIVO },
        { nome: "Logotipo — vetor", detalhe: "SVG", href: SEM_ARQUIVO },
      ]},
      { titulo: "A obra", itens: [
        { nome: "Capa do volume 1", detalhe: "JPG em alta", href: SEM_ARQUIVO },
        { nome: "Arte conceitual selecionada", detalhe: "pacote ZIP", href: SEM_ARQUIVO },
        { nome: "Páginas de amostra do mangá", detalhe: "pacote ZIP", href: SEM_ARQUIVO },
      ]},
      { titulo: "Quem faz", itens: [
        { nome: "Fotos dos criadores", detalhe: "pacote ZIP", href: SEM_ARQUIVO },
        { nome: "Biografias", detalhe: "texto", href: SEM_ARQUIVO },
      ]},
      { titulo: "Tudo", itens: [
        { nome: "Kit de imprensa completo", detalhe: "pacote ZIP", href: SEM_ARQUIVO },
      ]},
    ],
    emBreve: "em breve",

    usoTitulo: "Como usar as imagens",
    uso: [
      "As artes podem ser publicadas em matérias, resenhas e reportagens sobre a obra, sem custo.",
      "O crédito ao artista é obrigatório e vem indicado no nome de cada arquivo.",
      "As imagens não podem ser recortadas de modo a remover assinatura ou crédito, nem alteradas em cor, proporção ou conteúdo.",
      "Uso comercial, mercadoria e qualquer aplicação fora de contexto editorial dependem de autorização por escrito.",
    ],

    creditoTitulo: "Como creditar",
    creditoLead: "Linha pronta para copiar:",
    creditoLinha: 'MUKŌ-GAWA (向こう側) "Por Isso Lutamos", de Israel Subira e Guilherme Match. © 2026 Israel Subira. Todos os direitos reservados.',

    contatoTitulo: "Falar com a assessoria",
    contatoTexto: "Entrevistas, exemplares para resenha, material que não está aqui ou qualquer outra coisa: escreva e nós respondemos.",
    contatoBotao: "Escrever para a imprensa",
  },

  en: {
    titulo: "Press",
    descricao: "Mukō-Gawa press materials: fact sheet, synopses, art cleared for publication and contact.",
    rotulo: "Press room",
    lead: "Everything you need to write about Mukō-Gawa, in one place. If something is missing, just ask.",

    fichaTitulo: "Fact sheet",
    ficha: [
      { rotulo: "Title", valor: "Mukō-Gawa (向こう側)" },
      { rotulo: "Volume 1", valor: "This Is Why We Fight" },
      { rotulo: "Creator and writer", valor: "Israel Subira" },
      { rotulo: "Concept art", valor: "Daniel Bretas" },
      { rotulo: "Manga art", valor: "Guilherme Match" },
      { rotulo: "Genre", valor: "Dark fantasy, seinen" },
      { rotulo: "Format", valor: "Manga; novel series from 2027" },
      { rotulo: "Release", valor: "Volume 1 in December 2026" },
      { rotulo: "Languages", valor: "Portuguese, English and Japanese" },
      { rotulo: "Age rating", valor: "To be confirmed" },
      { rotulo: "ISBN", valor: "To be confirmed" },
      { rotulo: "Publisher", valor: "To be confirmed" },
    ],

    sinopseTitulo: "Synopses",
    sinopseNota: "Three lengths, to fit any space. All of them may be published as they are.",
    sinopses: [
      { rotulo: "One line",
        texto: "Before history, a civilisation went to war over the shape of the world." },
      { rotulo: "One paragraph",
        texto: "Mukō-Gawa is a dark fantasy about the civil war of a proto-human people who contend on the interdimensional plane between what is and what was promised. Two orders emerge from one bloodline: those who would hold the fold closed and those who would tear it open. It comes first as a manga, with the first volume in December 2026, and then as a series of novels." },
      { rotulo: "Three paragraphs", texto: "" },
    ],

    materialTitulo: "Downloads",
    materialLead: "High-resolution files, cleared for editorial use.",
    materiais: [
      { titulo: "Brand", itens: [
        { nome: "Logo — dark background", detalhe: "PNG with transparency", href: SEM_ARQUIVO },
        { nome: "Logo — light background", detalhe: "PNG with transparency", href: SEM_ARQUIVO },
        { nome: "Logo — vector", detalhe: "SVG", href: SEM_ARQUIVO },
      ]},
      { titulo: "The work", itens: [
        { nome: "Volume 1 cover", detalhe: "high-resolution JPG", href: SEM_ARQUIVO },
        { nome: "Selected concept art", detalhe: "ZIP", href: SEM_ARQUIVO },
        { nome: "Sample manga pages", detalhe: "ZIP", href: SEM_ARQUIVO },
      ]},
      { titulo: "The creators", itens: [
        { nome: "Creator photos", detalhe: "ZIP", href: SEM_ARQUIVO },
        { nome: "Biographies", detalhe: "text", href: SEM_ARQUIVO },
      ]},
      { titulo: "Everything", itens: [
        { nome: "Full press kit", detalhe: "ZIP", href: SEM_ARQUIVO },
      ]},
    ],
    emBreve: "coming soon",

    usoTitulo: "Using the images",
    uso: [
      "The art may be published in articles, reviews and features about the work, at no cost.",
      "Crediting the artist is required, and the credit is given in each file name.",
      "Images may not be cropped in a way that removes a signature or credit, nor altered in colour, proportion or content.",
      "Commercial use, merchandise and any application outside an editorial context require written permission.",
    ],

    creditoTitulo: "How to credit",
    creditoLead: "Ready to copy:",
    creditoLinha: 'MUKŌ-GAWA (向こう側) "This Is Why We Fight" by Israel Subira & Guilherme Match. © 2026 Israel Subira. All rights reserved.',

    contatoTitulo: "Contact press",
    contatoTexto: "Interviews, review copies, material that is not here, or anything else: write to us and we will answer.",
    contatoBotao: "Email the press desk",
  },

  es: {
    titulo: "Prensa",
    descricao: "Material de prensa de Mukō-Gawa: ficha técnica, sinopsis, arte liberado para publicación y contacto.",
    rotulo: "Sala de prensa",
    lead: "Todo lo necesario para escribir sobre Mukō-Gawa, en un solo lugar. Si falta algo, basta pedirlo.",

    fichaTitulo: "Ficha técnica",
    ficha: [
      { rotulo: "Título", valor: "Mukō-Gawa (向こう側)" },
      { rotulo: "Volumen 1", valor: "Por Eso Luchamos" },
      { rotulo: "Creador y guionista", valor: "Israel Subira" },
      { rotulo: "Arte conceptual", valor: "Daniel Bretas" },
      { rotulo: "Arte del manga", valor: "Guilherme Match" },
      { rotulo: "Género", valor: "Dark fantasy, seinen" },
      { rotulo: "Formato", valor: "Manga; serie de libros desde 2027" },
      { rotulo: "Lanzamiento", valor: "Volumen 1 en diciembre de 2026" },
      { rotulo: "Idiomas", valor: "Portugués, inglés y japonés" },
      { rotulo: "Clasificación", valor: "Por definir" },
      { rotulo: "ISBN", valor: "Por definir" },
      { rotulo: "Editorial", valor: "Por definir" },
    ],

    sinopseTitulo: "Sinopsis",
    sinopseNota: "Tres tamaños, para caber en cualquier espacio. Todos pueden publicarse tal como están.",
    sinopses: [
      { rotulo: "Una línea",
        texto: "Antes de la historia, una civilización fue a la guerra por la forma del mundo." },
      { rotulo: "Un párrafo",
        texto: "Mukō-Gawa es una dark fantasy sobre la guerra civil de un pueblo protohumano que disputa el plano interdimensional entre lo que es y lo que fue prometido. De un solo linaje nacen dos órdenes: la que quiere mantener cerrada la grieta y la que quiere rasgarla. La narrativa sale primero como manga, con el primer volumen en diciembre de 2026, y después como serie de libros." },
      { rotulo: "Tres párrafos", texto: "" },
    ],

    materialTitulo: "Material para descargar",
    materialLead: "Archivos en alta resolución, liberados para uso editorial.",
    materiais: [
      { titulo: "Marca", itens: [
        { nome: "Logotipo — fondo oscuro", detalhe: "PNG con transparencia", href: SEM_ARQUIVO },
        { nome: "Logotipo — fondo claro", detalhe: "PNG con transparencia", href: SEM_ARQUIVO },
        { nome: "Logotipo — vector", detalhe: "SVG", href: SEM_ARQUIVO },
      ]},
      { titulo: "La obra", itens: [
        { nome: "Portada del volumen 1", detalhe: "JPG en alta", href: SEM_ARQUIVO },
        { nome: "Arte conceptual seleccionado", detalhe: "ZIP", href: SEM_ARQUIVO },
        { nome: "Páginas de muestra del manga", detalhe: "ZIP", href: SEM_ARQUIVO },
      ]},
      { titulo: "Quiénes lo hacen", itens: [
        { nome: "Fotos de los creadores", detalhe: "ZIP", href: SEM_ARQUIVO },
        { nome: "Biografías", detalhe: "texto", href: SEM_ARQUIVO },
      ]},
      { titulo: "Todo", itens: [
        { nome: "Kit de prensa completo", detalhe: "ZIP", href: SEM_ARQUIVO },
      ]},
    ],
    emBreve: "próximamente",

    usoTitulo: "Cómo usar las imágenes",
    uso: [
      "El arte puede publicarse en artículos, reseñas y reportajes sobre la obra, sin costo.",
      "El crédito al artista es obligatorio y se indica en el nombre de cada archivo.",
      "Las imágenes no pueden recortarse de modo que se elimine una firma o un crédito, ni alterarse en color, proporción o contenido.",
      "El uso comercial, la mercancía y cualquier aplicación fuera del contexto editorial requieren autorización por escrito.",
    ],

    creditoTitulo: "Cómo acreditar",
    creditoLead: "Línea lista para copiar:",
    creditoLinha: 'MUKŌ-GAWA (向こう側) "Por Eso Luchamos", de Israel Subira y Guilherme Match. © 2026 Israel Subira. Todos los derechos reservados.',

    contatoTitulo: "Hablar con prensa",
    contatoTexto: "Entrevistas, ejemplares para reseña, material que no esté aquí o cualquier otra cosa: escríbenos y respondemos.",
    contatoBotao: "Escribir a prensa",
  },

  ja: {
    titulo: "報道関係者の方へ",
    descricao: "『向こう側』の報道用資料。作品情報、あらすじ、掲載可能な画像、連絡先。",
    rotulo: "プレスルーム",
    lead: "『向こう側』について書くために必要なものを、ひとつの場所にまとめました。足りないものがあれば、お知らせください。",

    fichaTitulo: "作品情報",
    ficha: [
      { rotulo: "題名", valor: "『向こう側』" },
      { rotulo: "第1巻", valor: "我らが戦う理由" },
      { rotulo: "原作・脚本", valor: "イスラエル・スビラ" },
      { rotulo: "コンセプトアート", valor: "ダニエル・ブレタス" },
      { rotulo: "漫画作画", valor: "ギリェルメ・マッチ" },
      { rotulo: "ジャンル", valor: "ダークファンタジー／青年" },
      { rotulo: "形態", valor: "漫画。2027年より小説シリーズ" },
      { rotulo: "発売", valor: "第1巻は2026年12月" },
      { rotulo: "言語", valor: "ポルトガル語・英語・日本語" },
      { rotulo: "対象年齢", valor: "未定" },
      { rotulo: "ISBN", valor: "未定" },
      { rotulo: "出版社", valor: "未定" },
    ],

    sinopseTitulo: "あらすじ",
    sinopseNota: "掲載枠に合わせて三つの長さをご用意しました。いずれもそのまま掲載いただけます。",
    sinopses: [
      { rotulo: "一行",
        texto: "歴史の前に、ひとつの文明が世界の形をめぐって戦った。" },
      { rotulo: "一段落",
        texto: "『向こう側』は、原人類の同族が、現にあるものと約束されたものとの折り目である次元の狭間をめぐって争う内戦を描くダークファンタジーである。ひとつの血統から二つの秩序が生まれる。狭間を閉じたままにしようとする者と、引き裂こうとする者。刊行はまず漫画として、第1巻が2026年12月に。続いて小説シリーズとなる。" },
      { rotulo: "三段落", texto: "" },
    ],

    materialTitulo: "資料ダウンロード",
    materialLead: "高解像度データ。報道・批評目的での掲載を許諾しています。",
    materiais: [
      { titulo: "ロゴ", itens: [
        { nome: "ロゴ — 暗背景用", detalhe: "透過PNG", href: SEM_ARQUIVO },
        { nome: "ロゴ — 明背景用", detalhe: "透過PNG", href: SEM_ARQUIVO },
        { nome: "ロゴ — ベクター", detalhe: "SVG", href: SEM_ARQUIVO },
      ]},
      { titulo: "作品", itens: [
        { nome: "第1巻書影", detalhe: "高解像度JPG", href: SEM_ARQUIVO },
        { nome: "コンセプトアート（抜粋）", detalhe: "ZIP", href: SEM_ARQUIVO },
        { nome: "漫画サンプルページ", detalhe: "ZIP", href: SEM_ARQUIVO },
      ]},
      { titulo: "制作陣", itens: [
        { nome: "制作陣の写真", detalhe: "ZIP", href: SEM_ARQUIVO },
        { nome: "プロフィール", detalhe: "テキスト", href: SEM_ARQUIVO },
      ]},
      { titulo: "一括", itens: [
        { nome: "プレスキット一式", detalhe: "ZIP", href: SEM_ARQUIVO },
      ]},
    ],
    emBreve: "準備中",

    usoTitulo: "画像のご利用について",
    uso: [
      "本作に関する記事・批評・特集での掲載は無償で許諾します。",
      "作画者のクレジット表記は必須です。表記内容は各ファイル名に記しています。",
      "署名やクレジットが失われる形での切り抜き、および色・比率・内容の改変はご遠慮ください。",
      "商業利用、商品化、報道以外の用途については書面での許諾が必要です。",
    ],

    creditoTitulo: "クレジット表記",
    creditoLead: "そのままお使いいただけます：",
    creditoLinha: 'MUKŌ-GAWA（向こう側）「我らが戦う理由」イスラエル・スビラ、ギリェルメ・マッチ © 2026 Israel Subira. All rights reserved.',

    contatoTitulo: "お問い合わせ",
    contatoTexto: "取材、献本、ここにない資料など、どのようなご用件でもご連絡ください。",
    contatoBotao: "報道関係のお問い合わせ",
  },
};
