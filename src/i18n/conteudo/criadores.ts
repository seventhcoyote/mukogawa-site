/**
 * Criadores por idioma. O EN vem do site modelo, onde a página se chamava
 * "Author"; o site novo renomeou para "Criadores" porque o autor é um só mas a
 * obra tem três nomes. Mantive a renomeação e usei o texto original do autor.
 */
import type { Idioma } from "../idiomas";

interface Pessoa {
  nome: string;
  papel: string;
  paragrafos: string[];
}

interface ConteudoCriadores {
  titulo: string;
  descricao: string;
  rotulo: string;
  rotuloArte: string;
  tituloArte: string;
  papelPrincipal: string;
  instagramDe: (nome: string) => string;
  israel: Pessoa;
  bretas: Pessoa;
  match: Pessoa;
}

export const CRIADORES: Record<Idioma, ConteudoCriadores> = {
  pt: {
    titulo: "Criadores",
    descricao: "Israel Subira, criador e roteirista de Mukō-Gawa, com a arte conceitual de Daniel Bretas e a arte do mangá de Guilherme Match.",
    rotulo: "Quem faz",
    rotuloArte: "A arte",
    tituloArte: "Quem desenha",
    papelPrincipal: "Criador de Mukō-Gawa",
    instagramDe: (n) => `Instagram de ${n}`,
    israel: {
      nome: "Israel Subira",
      papel: "Criação e roteiro",
      paragrafos: [
        "Israel Subira é o escritor e criador de Mukō-Gawa, com formação em teologia e trajetória na fantasia. Começou o projeto há cerca de sete anos, e desde então ele cresceu para um mangá, um ciclo de livros concluído e a base para uma adaptação animada, com forte presença nas redes sociais e grande expectativa em torno dele.",
        "Seu tempo como mestre de jogo em RPGs de mesa influenciou profundamente o projeto — suas próprias campanhas autorais foram o campo de treino antes de entrar na fantasia como escritor. A metodologia de Israel é híbrida, entre roteiro e exploração: planeja de antemão os pontos narrativos mais críticos, mas deixa espaço para um elenco forte conduzir a história e crescer junto com o arco principal.",
        "É apaixonado por arte e literatura, e tem também outras obras ainda inéditas em desenvolvimento.",
      ],
    },
    bretas: {
      nome: "Daniel Bretas",
      papel: "Arte conceitual",
      paragrafos: [
        "Bretas desenhou a primeira leva de concept art original de Mukō-Gawa — os estudos de personagem e os designs das classes que definiram a linguagem visual da série.",
        "Venceu o Brasil Manga Awards em 2015 e, em 2023, levou dois prêmios no 35º Troféu HQ Mix: melhor produção para outras linguagens, por Calaboca e Escuta, e melhor projeto gráfico, por Colorbar.",
      ],
    },
    match: {
      nome: "Guilherme Match",
      papel: "Arte do mangá",
      paragrafos: [
        "Guilherme Match tem longa trajetória na ilustração, boa parte dela na publicidade, mas foi nos quadrinhos que encontrou sua verdadeira paixão. Seu trabalho já foi publicado pela JBC, incluindo Kophee e sua HQ mais recente, Soundtrack.",
      ],
    },
  },

  en: {
    titulo: "Creators",
    descricao: "Israel Subira, writer and creator of Mukō-Gawa, with concept art by Daniel Bretas and manga art by Guilherme Match.",
    rotulo: "Who makes it",
    rotuloArte: "The art",
    tituloArte: "Who draws it",
    papelPrincipal: "Creator of Mukō-Gawa",
    instagramDe: (n) => `${n} on Instagram`,
    israel: {
      nome: "Israel Subira",
      papel: "Writer and creator",
      paragrafos: [
        "Israel Subira is the writer and creator of Mukō-Gawa, working from a background in theology and fantasy. He began the project roughly seven years ago, and it has grown since into a manga, a completed novel cycle, and the groundwork for an animated adaptation, with a substantial social media following and no small amount of expectation behind it.",
        "His time as a dungeon master in tabletop role-playing games shaped the project deeply — his own homebrew campaigns were the training ground before he entered fantasy as a writer. Israel's method is a hybrid of outline and exploratory writing: he plans the most critical narrative points ahead, then leaves room for a strong cast to run with the story and grow alongside the main arc.",
        "He is passionate about art and literature, and has several other unpublished works in development.",
      ],
    },
    bretas: {
      nome: "Daniel Bretas",
      papel: "Concept art",
      paragrafos: [
        "Bretas drew the first round of original concept art for Mukō-Gawa — the character studies and class designs that set the visual language of the series.",
        "He won the Brasil Manga Awards in 2015, and in 2023 took two prizes at the 35th Troféu HQ Mix: best production in other media for Calaboca e Escuta, and best graphic design for Colorbar.",
      ],
    },
    match: {
      nome: "Guilherme Match",
      papel: "Manga art",
      paragrafos: [
        "Guilherme Match has a long history in illustration, much of it spent in advertising, but comics are where he found his true passion. His work has been published by JBC, including Kophee and his latest comic, Soundtrack.",
      ],
    },
  },

  // Traduzido do PT-BR. Pendente de revisão.
  es: {
    titulo: "Creadores",
    descricao: "Israel Subira, creador y guionista de Mukō-Gawa, con el arte conceptual de Daniel Bretas y el arte del manga de Guilherme Match.",
    rotulo: "Quién lo hace",
    rotuloArte: "El arte",
    tituloArte: "Quién dibuja",
    papelPrincipal: "Creador de Mukō-Gawa",
    instagramDe: (n) => `Instagram de ${n}`,
    israel: {
      nome: "Israel Subira",
      papel: "Creación y guion",
      paragrafos: [
        "Israel Subira es el escritor y creador de Mukō-Gawa, con formación en teología y trayectoria en la fantasía. Empezó el proyecto hace unos siete años, y desde entonces ha crecido hasta convertirse en un manga, un ciclo de novelas concluido y la base para una adaptación animada, con fuerte presencia en redes sociales y mucha expectativa alrededor.",
        "Su tiempo como director de juego en juegos de rol de mesa marcó profundamente el proyecto: sus propias campañas fueron el campo de entrenamiento antes de entrar en la fantasía como escritor. Su método es híbrido, entre guion y exploración: planifica de antemano los puntos narrativos más críticos, pero deja espacio para que un reparto fuerte conduzca la historia y crezca junto al arco principal.",
        "Es apasionado del arte y la literatura, y tiene además otras obras inéditas en desarrollo.",
      ],
    },
    bretas: {
      nome: "Daniel Bretas",
      papel: "Arte conceptual",
      paragrafos: [
        "Bretas dibujó la primera tanda de arte conceptual original de Mukō-Gawa: los estudios de personaje y los diseños de las clases que definieron el lenguaje visual de la serie.",
        "Ganó el Brasil Manga Awards en 2015 y, en 2023, obtuvo dos premios en el 35.º Troféu HQ Mix: mejor producción para otros lenguajes, por Calaboca e Escuta, y mejor proyecto gráfico, por Colorbar.",
      ],
    },
    match: {
      nome: "Guilherme Match",
      papel: "Arte del manga",
      paragrafos: [
        "Guilherme Match tiene una larga trayectoria en la ilustración, buena parte de ella en publicidad, pero fue en el cómic donde encontró su verdadera pasión. Su trabajo ha sido publicado por JBC, incluyendo Kophee y su cómic más reciente, Soundtrack.",
      ],
    },
  },

  // Base: site modelo. Pendente de revisão.
  ja: {
    titulo: "制作",
    descricao: "『向こう側』の原作・脚本イスラエル・スビラ、コンセプトアート ダニエル・ブレタス、漫画アート ギリェルミ・マッチ。",
    rotulo: "制作陣",
    rotuloArte: "アート",
    tituloArte: "作画",
    papelPrincipal: "『向こう側』原作者",
    instagramDe: (n) => `${n}のInstagram`,
    israel: {
      nome: "イスラエル・スビラ",
      papel: "原作・脚本",
      paragrafos: [
        "イスラエル・スビラは『向こう側』の作者であり創造者である。神学を背景に持ち、ファンタジーの道を歩んできた。約七年前にこの企画を始め、以来それは漫画、完結した小説群、そしてアニメ化の土台へと成長し、SNS上でも大きな支持と期待を集めている。",
        "テーブルトークRPGのゲームマスターとしての時間が、この企画を深く形づくった。自作のキャンペーンが、作家としてファンタジーに入る前の訓練の場であった。彼の手法は構成と探索の混成である。最も重要な物語の要所は先に定め、あとは強い登場人物たちが物語を運び、本編とともに育つ余地を残す。",
        "芸術と文学を愛し、未発表の他作品も手がけている。",
      ],
    },
    bretas: {
      nome: "ダニエル・ブレタス",
      papel: "コンセプトアート",
      paragrafos: [
        "ブレタスは『向こう側』の最初のオリジナル・コンセプトアートを描いた。シリーズの視覚言語を定めた、人物study と階級のデザインである。",
        "2015年にBrasil Manga Awardsを受賞。2023年には第35回Troféu HQ Mixで二部門を受賞した（Calaboca e Escutaで他媒体部門、Colorbarでグラフィックデザイン部門）。",
      ],
    },
    match: {
      nome: "ギリェルミ・マッチ",
      papel: "漫画アート",
      paragrafos: [
        "ギリェルミ・マッチはイラストレーションで長い経歴を持ち、その多くは広告分野であったが、真の情熱を見出したのは漫画であった。作品はJBCより刊行されており、『Kophee』や最新作『Soundtrack』がある。",
      ],
    },
  },
};
