/**
 * Home por idioma. O EN é o texto do autor, colhido do site modelo — inclusive
 * o hero, onde "supposal" funciona em inglês e é o termo de C.S. Lewis.
 *
 * A tagline foi alinhada em 2026-08-01: o PT passou a dizer "um conto do outro
 * lado", que é a tradução do título em inglês do próprio site antigo.
 */
import type { Idioma } from "../idiomas";

interface Formato { selo: string; titulo: string; texto: string }
interface Credencial { valor: string; rotulo: string }

interface ConteudoInicio {
  descricao: string;
  heroRotulo: string;
  heroLead: string;
  heroCta: string;
  heroSecundario: string;
  heroDescer: string;
  anuncioRotulo: string;
  anuncioAntes: string;
  anuncioForte: string;
  anuncioDepois: string;
  anuncioDias: string;
  anuncioAria: (n: number) => string;
  aviseMe: string;
  gostoRotulo: string;
  gostoTitulo: string;
  gostoLead: string;
  gostoAria: string;
  gostoDica: string;
  narrativaRotulo: string;
  narrativaTitulo: string;
  formatos: Formato[];
  historiaRotulo: string;
  historiaTitulo: string;
  historiaLead: string;
  historiaCta: string;
  elencoRotulo: string;
  elencoTitulo: string;
  elencoTodos: string;
  classesRotulo: string;
  classesTitulo: string;
  classesLead: string;
  credenciaisRotulo: string;
  credenciais: Credencial[];
}

export const INICIO: Record<Idioma, ConteudoInicio> = {
  pt: {
    descricao: "Um conto do outro lado. Mangá, livros e o projeto de anime de Mukō-Gawa, uma imersão na mitologia cristã. Primeiro volume em dezembro de 2026.",
    heroRotulo: "Um conto do outro lado",
    heroLead: "Assim como as antigas sagas nórdicas e os épicos gregos, Mukō-Gawa é uma imersão nas profundezas da mitologia cristã, que revela a história da Criação e da Redenção, enquanto uma Guerra Celestial se consome até que dela nasça a Paz Eterna.",
    heroCta: "Avise-me do volume 1",
    heroSecundario: "Ler a história",
    heroDescer: "Ir para o anúncio",
    anuncioRotulo: "Anúncio",
    anuncioAntes: "O primeiro volume do mangá chega em ",
    anuncioForte: "dezembro de 2026",
    anuncioDepois: ". A série de livros começa em 2027.",
    anuncioDias: "dias",
    anuncioAria: (n) => `${n} dias para o lançamento`,
    aviseMe: "Avise-me",
    gostoRotulo: "Leitura dramatizada",
    gostoTitulo: "Um Gosto da Narrativa",
    gostoLead: "Um trecho da obra, narrado. É a forma mais rápida de sentir o tom antes do primeiro volume.",
    gostoAria: "Assistir à leitura dramatizada de Mukō-Gawa no YouTube",
    gostoDica: "Assistir no YouTube",
    narrativaRotulo: "Uma narrativa",
    narrativaTitulo: "Três formas, uma narrativa",
    formatos: [
      { selo: "Primeiro volume // Dezembro de 2026", titulo: "Mangá",
        texto: "A narrativa serializada da guerra, publicada volume a volume a partir de dezembro de 2026." },
      { selo: "Série começa em 2027", titulo: "Livros",
        texto: "O ciclo de livros está escrito e concluído. Um volume será lançado por vez, na ordem de leitura, a partir de 2027." },
      { selo: "Em desenvolvimento // Ainda sem produção", titulo: "Anime",
        texto: "A adaptação animada é o sonho por trás deste projeto. Ela só se torna possível se os livros e o mangá forem bem — e qualquer notícia de estúdio, equipe ou elenco será anunciada aqui primeiro." },
    ],
    historiaRotulo: "A história",
    historiaTitulo: "Antes da história, uma civilização entrou em guerra pela forma do mundo.",
    historiaLead: "Mukō-Gawa acompanha uma guerra civil entre um povo proto-humano que disputa um plano interdimensional — a dobra entre o que é e o que foi prometido. Duas ordens nascem de uma mesma linhagem: a que quer manter o plano fechado e a que quer rompê-lo.",
    historiaCta: "Saber mais",
    elencoRotulo: "O elenco",
    elencoTitulo: "Personagens",
    elencoTodos: "Todos os personagens",
    classesRotulo: "Os Eternos",
    classesTitulo: "As Nove Classes",
    classesLead: "Nove classes ordenam os Eternos — e atravessam os dois lados da guerra.",
    credenciaisRotulo: "Quem está por trás",
    credenciais: [
      { valor: "7 anos", rotulo: "de escrita, com o ciclo de livros concluído" },
      { valor: "3 prêmios", rotulo: "do artista conceitual: Brasil Manga Awards e dois Troféus HQ Mix" },
      { valor: "JBC", rotulo: "publicou o artista do mangá, Guilherme Match" },
      { valor: "Financiado", rotulo: "pelos leitores: a arte conceitual saiu de apoio coletivo" },
    ],
  },

  en: {
    descricao: "A tale from the other side. The manga, the books and the anime project of Mukō-Gawa, a deep dive into Christian mythology. First volume December 2026.",
    heroRotulo: "A tale from the other side",
    heroLead: "Much like the Norse sagas and the Greek epics, Mukō-Gawa is a deep dive into Christian mythology. The supposal fictional narrative shares the tale of Creation and Redemption, as a celestial war culminates in eternal peace.",
    heroCta: "Notify me about volume 1",
    heroSecundario: "Read the story",
    heroDescer: "Go to the announcement",
    anuncioRotulo: "Announcement",
    anuncioAntes: "The first manga volume arrives ",
    anuncioForte: "December 2026",
    anuncioDepois: ". The novel series begins in 2027.",
    anuncioDias: "days",
    anuncioAria: (n) => `${n} days to release`,
    aviseMe: "Notify me",
    gostoRotulo: "Dramatised reading",
    gostoTitulo: "A Taste of the Narrative",
    gostoLead: "An excerpt from the work, read aloud. It is the fastest way to feel the tone before the first volume.",
    gostoAria: "Watch the dramatised reading of Mukō-Gawa on YouTube",
    gostoDica: "Watch on YouTube",
    narrativaRotulo: "One narrative",
    narrativaTitulo: "Three forms, one narrative",
    formatos: [
      { selo: "First volume // December 2026", titulo: "Manga",
        texto: "The serialized telling of the war, published volume by volume from December 2026." },
      { selo: "Series begins 2027", titulo: "Books",
        texto: "The novel cycle is written and complete. One volume will be released at a time, in reading order, from 2027." },
      { selo: "In development // Not yet in production", titulo: "Anime",
        texto: "An animated adaptation is the dream behind this project. It becomes possible only if the books and the manga do well — and any studio, staff or casting news will be published here first." },
    ],
    historiaRotulo: "The story",
    historiaTitulo: "Before history, a civilization went to war over the shape of the world.",
    historiaLead: "Mukō-Gawa follows a civil war among a proto-human people who contend on an interdimensional plane — the fold between what is and what was promised. Two orders emerge from one bloodline: those who would hold the plane closed, and those who would tear it open.",
    historiaCta: "Read more",
    elencoRotulo: "The cast",
    elencoTitulo: "Characters",
    elencoTodos: "All characters",
    classesRotulo: "The Eternals",
    classesTitulo: "The Nine Classes",
    classesLead: "Nine classes order the Eternals — and they cross both sides of the war.",
    credenciaisRotulo: "Who is behind it",
    credenciais: [
      { valor: "7 years", rotulo: "of writing, with the novel cycle already complete" },
      { valor: "3 awards", rotulo: "for the concept artist: Brasil Manga Awards and two Troféu HQ Mix" },
      { valor: "JBC", rotulo: "has published the manga artist, Guilherme Match" },
      { valor: "Reader-funded", rotulo: "the original concept art was paid for by backers" },
    ],
  },

  // Traduzido do PT-BR. Pendente de revisão.
  es: {
    descricao: "Un cuento del otro lado. El manga, los libros y el proyecto de anime de Mukō-Gawa, una inmersión en la mitología cristiana. Primer volumen en diciembre de 2026.",
    heroRotulo: "Un cuento del otro lado",
    heroLead: "Como las antiguas sagas nórdicas y las epopeyas griegas, Mukō-Gawa es una inmersión en las profundidades de la mitología cristiana, que revela la historia de la Creación y la Redención, mientras una Guerra Celestial se consume hasta que de ella nace la Paz Eterna.",
    heroCta: "Avísame del volumen 1",
    heroSecundario: "Leer la historia",
    heroDescer: "Ir al anuncio",
    anuncioRotulo: "Anuncio",
    anuncioAntes: "El primer volumen del manga llega en ",
    anuncioForte: "diciembre de 2026",
    anuncioDepois: ". La serie de libros comienza en 2027.",
    anuncioDias: "días",
    anuncioAria: (n) => `${n} días para el lanzamiento`,
    aviseMe: "Avísame",
    gostoRotulo: "Lectura dramatizada",
    gostoTitulo: "Un Sabor de la Narrativa",
    gostoLead: "Un fragmento de la obra, narrado. Es la forma más rápida de sentir el tono antes del primer volumen.",
    gostoAria: "Ver la lectura dramatizada de Mukō-Gawa en YouTube",
    gostoDica: "Ver en YouTube",
    narrativaRotulo: "Una narrativa",
    narrativaTitulo: "Tres formas, una narrativa",
    formatos: [
      { selo: "Primer volumen // Diciembre de 2026", titulo: "Manga",
        texto: "La narrativa serializada de la guerra, publicada volumen a volumen desde diciembre de 2026." },
      { selo: "La serie comienza en 2027", titulo: "Libros",
        texto: "El ciclo de libros está escrito y concluido. Un volumen se lanzará por vez, en orden de lectura, desde 2027." },
      { selo: "En desarrollo // Aún sin producción", titulo: "Anime",
        texto: "La adaptación animada es el sueño detrás de este proyecto. Solo se vuelve posible si los libros y el manga van bien, y cualquier noticia de estudio, equipo o reparto se anunciará aquí primero." },
    ],
    historiaRotulo: "La historia",
    historiaTitulo: "Antes de la historia, una civilización entró en guerra por la forma del mundo.",
    historiaLead: "Mukō-Gawa sigue una guerra civil entre un pueblo protohumano que disputa un plano interdimensional: el pliegue entre lo que es y lo que fue prometido. Dos órdenes nacen de un mismo linaje: la que quiere mantener el plano cerrado y la que quiere romperlo.",
    historiaCta: "Saber más",
    elencoRotulo: "El reparto",
    elencoTitulo: "Personajes",
    elencoTodos: "Todos los personajes",
    classesRotulo: "Los Eternos",
    classesTitulo: "Las Nueve Clases",
    classesLead: "Nueve clases ordenan a los Eternos, y atraviesan ambos lados de la guerra.",
    credenciaisRotulo: "Quién está detrás",
    credenciais: [
      { valor: "7 años", rotulo: "de escritura, con el ciclo de libros concluido" },
      { valor: "3 premios", rotulo: "del artista conceptual: Brasil Manga Awards y dos Troféu HQ Mix" },
      { valor: "JBC", rotulo: "ha publicado al artista del manga, Guilherme Match" },
      { valor: "Financiado", rotulo: "por los lectores: el arte conceptual salió de apoyo colectivo" },
    ],
  },

  // Base: site modelo. Pendente de revisão.
  ja: {
    descricao: "向こう側からの物語。『向こう側』の漫画、小説、アニメ企画。キリスト教神話への深い潜行。第1巻は2026年12月。",
    heroRotulo: "向こう側からの物語",
    heroLead: "北欧のサガやギリシアの叙事詩のように、『向こう側』はキリスト教神話の深みへの潜行である。神話と神秘のあいだに織られた想定譜として、創造と贖罪の物語を語り、天上の戦は燃え尽きて永遠の平和を生む。",
    heroCta: "第1巻のお知らせを受け取る",
    heroSecundario: "物語を読む",
    heroDescer: "お知らせへ",
    anuncioRotulo: "お知らせ",
    anuncioAntes: "漫画第1巻は",
    anuncioForte: "2026年12月",
    anuncioDepois: "発売。小説シリーズは2027年より刊行開始。",
    anuncioDias: "日",
    anuncioAria: (n) => `発売まで${n}日`,
    aviseMe: "お知らせを受け取る",
    gostoRotulo: "朗読",
    gostoTitulo: "物語の一片",
    gostoLead: "作品の一節を朗読で。第1巻の前に空気を掴む、最も早い方法である。",
    gostoAria: "『向こう側』の朗読をYouTubeで観る",
    gostoDica: "YouTubeで観る",
    narrativaRotulo: "ひとつの物語",
    narrativaTitulo: "三つの形式、ひとつの物語",
    formatos: [
      { selo: "第1巻 // 2026年12月", titulo: "漫画",
        texto: "戦の記録を連載として描く。2026年12月より巻ごとに刊行。" },
      { selo: "2027年より刊行", titulo: "小説",
        texto: "小説シリーズは執筆済み。2027年より、読む順に一巻ずつ刊行する。" },
      { selo: "企画中 // 制作は未開始", titulo: "アニメ",
        texto: "アニメ化は本企画の夢である。実現は書籍と漫画の成果にかかっており、制作スタジオ・スタッフ・キャストの発表は本サイトで最初に行う。" },
    ],
    historiaRotulo: "物語",
    historiaTitulo: "歴史の前に、ひとつの文明が世界の形をめぐって戦った。",
    historiaLead: "『向こう側』は、次元の狭間 — 現にあるものと約束されたものとの折り目 — を争う原人類の内戦を描く。ひとつの血統から二つの秩序が生まれる。狭間を閉じたままにする者と、引き裂こうとする者。",
    historiaCta: "詳しく見る",
    elencoRotulo: "登場人物",
    elencoTitulo: "登場人物",
    elencoTodos: "登場人物一覧",
    classesRotulo: "永遠者",
    classesTitulo: "九つの階級",
    classesLead: "九つの階級が永遠者を貫く。戦の、いずれの側にも。",
    credenciaisRotulo: "制作の背景",
    credenciais: [
      { valor: "7年", rotulo: "の執筆。小説群はすでに完結している" },
      { valor: "3つの受賞", rotulo: "コンセプトアート担当：Brasil Manga Awards と Troféu HQ Mix 二部門" },
      { valor: "JBC", rotulo: "漫画作画のギリェルミ・マッチを刊行" },
      { valor: "読者出資", rotulo: "オリジナルのコンセプトアートは支援によって実現した" },
    ],
  },
};
