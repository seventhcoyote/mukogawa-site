/**
 * Home por idioma. O EN é o texto do autor, colhido do site modelo — inclusive
 * o hero, onde "supposal" funciona em inglês e é o termo de C.S. Lewis.
 *
 * A tagline foi alinhada em 2026-08-01: o PT passou a dizer "um conto do outro
 * lado", que é a tradução do título em inglês do próprio site antigo.
 */
import type { Idioma } from "../idiomas";

interface Formato { selo: string; titulo: string; texto: string }
interface Escalao { nome: string; nota?: string }

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
  primeiroRotulo: string;
  primeiroCta: string;
  classesRotulo: string;
  classesTitulo: string;
  classesLead: string;
  /* Os três Escalões, do mais baixo ao mais alto — a mesma ordem em que as
     classes já eram numeradas de 01 a 09. Cada um cobre três classes. */
  escaloes: Escalao[];
}

export const INICIO: Record<Idioma, ConteudoInicio> = {
  pt: {
    descricao: "Uma guerra civil entre os Eternos pela fenda entre o que é e o que foi prometido. O yomikiri, capítulo piloto do mangá, chega em 1º de dezembro de 2026; a série de livros, em 2027.",
    heroRotulo: "Um conto do outro lado",
    heroLead: "Assim como as antigas sagas nórdicas e os épicos gregos, Mukō-Gawa é uma imersão nas profundezas da mitologia cristã, que revela a história da Criação e da Redenção, enquanto uma Guerra Celestial se consome até que dela nasça a Paz Eterna.",
    heroCta: "Avise-me do lançamento",
    heroSecundario: "Ler a história",
    heroDescer: "Ir para o anúncio",
    anuncioRotulo: "Anúncio",
    anuncioAntes: "O yomikiri (piloto) do mangá chega em ",
    anuncioForte: "1º de dezembro de 2026",
    anuncioDepois: ". A série de livros começa em 2027.",
    anuncioDias: "dias",
    anuncioAria: (n) => `${n} dias para o lançamento`,
    aviseMe: "Avise-me",
    gostoRotulo: "Leitura dramatizada",
    gostoTitulo: "Um Gosto da Narrativa",
    gostoLead: "Um trecho da obra, narrado por dubladores brasileiros. É a forma mais rápida de sentir o tom antes do lançamento.",
    gostoAria: "Assistir à leitura dramatizada de Mukō-Gawa no YouTube",
    gostoDica: "Assistir no YouTube",
    narrativaRotulo: "Uma narrativa",
    narrativaTitulo: "Três formas, uma narrativa",
    formatos: [
      { selo: "Yomikiri // 1º de dezembro de 2026", titulo: "Mangá",
        texto: "A narrativa serializada da guerra. Abre com o yomikiri (piloto) em 1º de dezembro de 2026; os volumes vêm depois." },
      { selo: "Série começa em 2027", titulo: "Livros",
        texto: "O ciclo de livros está escrito e concluído. Um volume será lançado por vez, na ordem de leitura, a partir de 2027." },
      { selo: "Em desenvolvimento // Ainda sem produção", titulo: "Anime",
        texto: "A adaptação animada é o sonho por trás deste projeto. Ela só se torna possível se os livros e o mangá forem bem — e qualquer notícia de estúdio, equipe ou elenco será anunciada aqui primeiro." },
    ],
    historiaRotulo: "A história",
    historiaTitulo: "Antes da humanidade, uma civilização entrou em guerra pela forma da realidade.",
    historiaLead: "Mukō-Gawa acompanha uma guerra civil entre um povo proto-humano que disputa um plano interdimensional — a dobra entre o que é e o que foi prometido. Duas ordens erguem-se de uma mesma feitura: a que quer manter o plano fechado e a que quer rompê-lo.",
    historiaCta: "Saber mais",
    elencoRotulo: "O elenco",
    elencoTitulo: "Personagens",
    elencoTodos: "Todos os personagens",
    primeiroRotulo: "O que sai primeiro",
    primeiroCta: "As oito obras",
    classesRotulo: "Os Eternos",
    classesTitulo: "As Nove Classes",
    classesLead: "Nove classes ordenam os Eternos, repartidas em três Escalões — e atravessam os dois lados da guerra.",
    escaloes: [
      { nome: "Terceiro Escalão" },
      { nome: "Segundo Escalão" },
      { nome: "Primeiro Escalão", nota: "Os Antigos: os mais velhos, os que estiveram mais perto do princípio, e por muito tempo a autoridade que guiava os Eternos mais novos." },
    ],
  },

  en: {
    descricao: "A civil war among the Eternals over the fold between what is and what was promised. The yomikiri, the manga's pilot chapter, arrives 1 December 2026; the novels, from 2027.",
    heroRotulo: "A tale from the other side",
    heroLead: "Much like the Norse sagas and the Greek epics, Mukō-Gawa is a deep dive into Christian mythology. The supposal fictional narrative shares the tale of Creation and Redemption, as a celestial war culminates in eternal peace.",
    heroCta: "Notify me about the release",
    heroSecundario: "Read the story",
    heroDescer: "Go to the announcement",
    anuncioRotulo: "Announcement",
    anuncioAntes: "The manga's yomikiri (pilot) arrives ",
    anuncioForte: "1 December 2026",
    anuncioDepois: ". The novel series begins in 2027.",
    anuncioDias: "days",
    anuncioAria: (n) => `${n} days to release`,
    aviseMe: "Notify me",
    gostoRotulo: "Dramatised reading",
    gostoTitulo: "A Taste of the Narrative",
    gostoLead: "An excerpt from the work, read aloud by Brazilian voice actors. It is the fastest way to feel the tone before the release.",
    gostoAria: "Watch the dramatised reading of Mukō-Gawa on YouTube",
    gostoDica: "Watch on YouTube",
    narrativaRotulo: "One narrative",
    narrativaTitulo: "Three forms, one narrative",
    formatos: [
      { selo: "Yomikiri // 1 December 2026", titulo: "Manga",
        texto: "The serialized telling of the war. It opens with the yomikiri (pilot) on 1 December 2026; the volumes follow." },
      { selo: "Series begins 2027", titulo: "Books",
        texto: "The novel cycle is written and complete. One volume will be released at a time, in reading order, from 2027." },
      { selo: "In development // Not yet in production", titulo: "Anime",
        texto: "An animated adaptation is the dream behind this project. It becomes possible only if the books and the manga do well — and any studio, staff or casting news will be published here first." },
    ],
    historiaRotulo: "The story",
    historiaTitulo: "Before humanity, a civilization went to war over the shape of reality.",
    historiaLead: "Mukō-Gawa follows a civil war among a proto-human people who contend on an interdimensional plane — the fold between what is and what was promised. Two orders rise from one making: those who would hold the plane closed, and those who would tear it open.",
    historiaCta: "Read more",
    elencoRotulo: "The cast",
    elencoTitulo: "Characters",
    elencoTodos: "All characters",
    primeiroRotulo: "What comes first",
    primeiroCta: "All eight works",
    classesRotulo: "The Eternals",
    classesTitulo: "The Nine Classes",
    classesLead: "Nine classes order the Eternals, set into three Echelons — and they cross both sides of the war.",
    escaloes: [
      { nome: "Third Echelon" },
      { nome: "Second Echelon" },
      { nome: "First Echelon", nota: "The Ancients: the eldest, those who stood closest to the beginning, and for a long age the authority that guided the younger Eternals." },
    ],
  },

  // Traduzido do PT-BR. Pendente de revisão.
  es: {
    descricao: "Una guerra civil entre los Eternos por la grieta entre lo que es y lo que fue prometido. El yomikiri, el capítulo piloto del manga, llega el 1 de diciembre de 2026; la serie de libros, en 2027.",
    heroRotulo: "Un cuento del otro lado",
    heroLead: "Como las antiguas sagas nórdicas y las epopeyas griegas, Mukō-Gawa es una inmersión en las profundidades de la mitología cristiana, que revela la historia de la Creación y la Redención, mientras una Guerra Celestial se consume hasta que de ella nace la Paz Eterna.",
    heroCta: "Avísame del lanzamiento",
    heroSecundario: "Leer la historia",
    heroDescer: "Ir al anuncio",
    anuncioRotulo: "Anuncio",
    anuncioAntes: "El yomikiri (piloto) del manga llega el ",
    anuncioForte: "1 de diciembre de 2026",
    anuncioDepois: ". La serie de libros comienza en 2027.",
    anuncioDias: "días",
    anuncioAria: (n) => `${n} días para el lanzamiento`,
    aviseMe: "Avísame",
    gostoRotulo: "Lectura dramatizada",
    gostoTitulo: "Un Sabor de la Narrativa",
    gostoLead: "Un fragmento de la obra, narrado por actores de voz brasileños. Es la forma más rápida de sentir el tono antes del lanzamiento.",
    gostoAria: "Ver la lectura dramatizada de Mukō-Gawa en YouTube",
    gostoDica: "Ver en YouTube",
    narrativaRotulo: "Una narrativa",
    narrativaTitulo: "Tres formas, una narrativa",
    formatos: [
      { selo: "Yomikiri // 1 de diciembre de 2026", titulo: "Manga",
        texto: "La narrativa serializada de la guerra. Abre con el yomikiri (piloto) el 1 de diciembre de 2026; los volúmenes vienen después." },
      { selo: "La serie comienza en 2027", titulo: "Libros",
        texto: "El ciclo de libros está escrito y concluido. Un volumen se lanzará por vez, en orden de lectura, desde 2027." },
      { selo: "En desarrollo // Aún sin producción", titulo: "Anime",
        texto: "La adaptación animada es el sueño detrás de este proyecto. Solo se vuelve posible si los libros y el manga van bien, y cualquier noticia de estudio, equipo o reparto se anunciará aquí primero." },
    ],
    historiaRotulo: "La historia",
    historiaTitulo: "Antes de la humanidad, una civilización entró en guerra por la forma de la realidad.",
    historiaLead: "Mukō-Gawa sigue una guerra civil entre un pueblo protohumano que disputa un plano interdimensional: el pliegue entre lo que es y lo que fue prometido. Dos órdenes se alzan de una misma hechura: la que quiere mantener el plano cerrado y la que quiere romperlo.",
    historiaCta: "Saber más",
    elencoRotulo: "El reparto",
    elencoTitulo: "Personajes",
    elencoTodos: "Todos los personajes",
    primeiroRotulo: "Lo que sale primero",
    primeiroCta: "Las ocho obras",
    classesRotulo: "Los Eternos",
    classesTitulo: "Las Nueve Clases",
    classesLead: "Nueve clases ordenan a los Eternos, repartidas en tres Escalones, y atraviesan ambos lados de la guerra.",
    escaloes: [
      { nome: "Tercer Escalón" },
      { nome: "Segundo Escalón" },
      { nome: "Primer Escalón", nota: "Los Antiguos: los más viejos, los que estuvieron más cerca del principio, y por mucho tiempo la autoridad que guiaba a los Eternos más jóvenes." },
    ],
  },

  // Base: site modelo. Pendente de revisão.
  ja: {
    descricao: "現にあるものと約束されたものとの折り目をめぐる、永遠者たちの内戦。読み切りは2026年12月1日、小説シリーズは2027年より。",
    heroRotulo: "向こう側からの物語",
    heroLead: "北欧のサガやギリシアの叙事詩のように、『向こう側』はキリスト教神話の深みへの潜行である。神話と神秘のあいだに織られた想定譜として、創造と贖罪の物語を語り、天上の戦は燃え尽きて永遠の平和を生む。",
    heroCta: "発売のお知らせを受け取る",
    heroSecundario: "物語を読む",
    heroDescer: "お知らせへ",
    anuncioRotulo: "お知らせ",
    anuncioAntes: "漫画の読み切りは",
    anuncioForte: "2026年12月1日",
    anuncioDepois: "発売。小説シリーズは2027年より刊行開始。",
    anuncioDias: "日",
    anuncioAria: (n) => `発売まで${n}日`,
    aviseMe: "お知らせを受け取る",
    gostoRotulo: "朗読",
    gostoTitulo: "物語の一片",
    gostoLead: "作品の一節を、ブラジルの声優による朗読で。発売前に空気を掴む、最も早い方法である。",
    gostoAria: "『向こう側』の朗読をYouTubeで観る",
    gostoDica: "YouTubeで観る",
    narrativaRotulo: "ひとつの物語",
    narrativaTitulo: "三つの形式、ひとつの物語",
    formatos: [
      { selo: "読み切り // 2026年12月1日", titulo: "漫画",
        texto: "戦の記録を連載として描く。2026年12月1日の読み切りに始まり、以後は巻ごとに刊行。" },
      { selo: "2027年より刊行", titulo: "小説",
        texto: "小説シリーズは執筆済み。2027年より、読む順に一巻ずつ刊行する。" },
      { selo: "企画中 // 制作は未開始", titulo: "アニメ",
        texto: "アニメ化は本企画の夢である。実現は書籍と漫画の成果にかかっており、制作スタジオ・スタッフ・キャストの発表は本サイトで最初に行う。" },
    ],
    historiaRotulo: "物語",
    historiaTitulo: "人類より前に、ひとつの文明が現実の形をめぐって戦った。",
    historiaLead: "『向こう側』は、次元の狭間 — 現にあるものと約束されたものとの折り目 — を争う原人類の内戦を描く。ひとつの創造から二つの秩序が立ち上がる。狭間を閉じたままにする者と、引き裂こうとする者。",
    historiaCta: "詳しく見る",
    elencoRotulo: "登場人物",
    elencoTitulo: "登場人物",
    elencoTodos: "登場人物一覧",
    primeiroRotulo: "最初に出るもの",
    primeiroCta: "八つの作品",
    classesRotulo: "永遠者",
    classesTitulo: "九つの階級",
    classesLead: "九つの階級が永遠者を貫き、三つの階梯に分かれる。戦の、いずれの側にも。",
    escaloes: [
      { nome: "第三階梯" },
      { nome: "第二階梯" },
      { nome: "第一階梯", nota: "古き者たち。最も年経た者であり、始まりに最も近く立った者であり、長きにわたり若き永遠者を導く権威であった。" },
    ],
  },
};
