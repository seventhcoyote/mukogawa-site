/**
 * FAQ por idioma. Não existe no site modelo — foi escrito para o site novo, na
 * Voz da Casa (seca): o leitor está atrás de um fato, não contemplando o mundo.
 *
 * Regra que vale nos quatro idiomas: nenhuma resposta afirma o que o site ainda
 * não sabe. Quando não há decisão, a resposta diz que não há.
 *
 * ES e JA ainda não foram escritos: caem no PT-BR, e as rotas deles não são
 * geradas enquanto o idioma não estiver `pronto`.
 */
import type { Idioma } from "../idiomas";
import { ROTAS } from "../idiomas";

export interface Pergunta { p: string; r: string[] }
export interface Grupo { rotulo: string; titulo: string; perguntas: Pergunta[] }
interface ConteudoFaq {
  titulo: string;
  descricao: string;
  rotulo: string;
  lead: string;
  fechoRotulo: string;
  fechoTexto: string;
  atalhos: { href: string; texto: string }[];
  grupos: Grupo[];
}

const gruposPt: Grupo[] = [
  {
    rotulo: "A obra",
    titulo: "O que é",
    perguntas: [
      {
        p: "O que é Mukō-Gawa?",
        r: [
          "Uma fantasia sombria sobre uma guerra civil entre um povo proto-humano que disputa um plano interdimensional: a dobra entre o que é e o que foi prometido. Duas ordens nascem de uma mesma linhagem, a que quer manter o plano fechado e a que quer rompê-lo.",
          'A narrativa sai primeiro como mangá, depois como série de livros. <a href="/historia">A história inteira está aqui</a>.',
        ],
      },
      {
        p: "O que quer dizer Mukō-Gawa?",
        r: [
          "向こう側 quer dizer <b>do outro lado</b>. O nome descreve o ponto de vista: a guerra é contada de lá, pelos Eternos, e não pelos humanos que vivem sem saber que ela existe.",
        ],
      },
      {
        p: "Preciso conhecer a mitologia cristã para entender?",
        r: [
          "Não. Mukō-Gawa usa a mitologia cristã como material narrativo, do mesmo modo que outras obras usam as sagas nórdicas ou as epopeias gregas. Quem conhece as referências reconhece camadas a mais; quem não conhece acompanha a história do mesmo jeito.",
        ],
      },
      {
        p: "Mukō-Gawa é uma obra cristã?",
        r: [
          "É ficção, escrita por um autor cristão, e a narrativa bíblica é a espinha dela: o arco central é o da redenção, contado do lado de fora, pelos Eternos. Não é catequese e não pressupõe fé nenhuma do leitor — foi escrita pensando justamente em quem não é cristão.",
          "Se você procura um paralelo, a linhagem é a de <b>Cartas de um Diabo ao Seu Aprendiz</b>, de C.S. Lewis, e <b>Esse Mundo Tenebroso</b>, de Frank Peretti: o conflito entre anjos e demônios como matéria de ficção, não como sermão.",
        ],
      },
      {
        p: "Em que ordem devo ler?",
        r: [
          "Comece por <b>Saga</b>, o arco principal, dividido em cinco temporadas. <b>Protogenesis</b> é a prequela e foi pensada para entrar entre a Segunda e a Terceira Temporada, não antes de tudo. <b>Desvelar</b> é o epílogo e vem depois da Quinta.",
          "Ler Protogenesis fora de ordem não estraga a história, mas ela foi escrita para ser lida naquele ponto.",
        ],
      },
      {
        p: "Qual a diferença entre o mangá, os livros e o anime?",
        r: [
          "São três formas da mesma narrativa. O mangá serializa a história volume a volume. A série de livros começa em 2027 e o ciclo já está escrito e concluído: um volume é lançado por vez, na ordem de leitura. O anime é a adaptação pretendida.",
        ],
      },
      {
        p: "Quantos livros são?",
        r: [
          "Sete no total. Cinco formam a <b>Saga</b>, uma por temporada, e os outros dois são <b>Protogenesis</b> e <b>Desvelar</b> — os mesmos dois que, no plano da adaptação, seriam longas-metragens.",
          "A escrita está concluída. Nenhum deles foi publicado ainda.",
        ],
      },
      {
        p: "A história é uma só ou são várias?",
        r: [
          "Uma história principal, com muitos enredos correndo junto e um elenco grande que se desenvolve ao longo dela. A progressão lembra a de uma campanha de RPG de mesa, e isso não é acaso: o criador foi mestre de jogo antes de escrever.",
          "Espere tramas densas e combate visceral. É uma obra escrita para leitor adulto, no registro de um mangá seinen.",
        ],
      },
      {
        p: "Existe uma língua própria na obra?",
        r: [
          "Sim. A língua dos Eternos tem escrita, fonologia e gramática próprias, desenvolvidas por um linguista para o projeto.",
          "Ela é feita de muitos sons fricativos, aerados e ingressivos, o que dá ao idioma uma qualidade etérea. A escrita partiu de símbolos de várias tradições místicas e foi desenhada para ser gravada em espadas e em outros objetos usados pelos Eternos.",
        ],
      },
      {
        p: "O anime já está confirmado?",
        r: [
          "Não. A adaptação animada é o sonho por trás do projeto, mas não tem produção nem estúdio. Mukō-Gawa é um projeto independente, e a arte conceitual está sendo levantada justamente para ser apresentada a estúdios japoneses.",
          "O plano é de cinco temporadas e dois filmes. Qualquer anúncio real virá por aqui e pela lista de espera, não por rumor.",
        ],
      },
      {
        p: "Quantos personagens tem a série?",
        r: [
          'O site apresenta onze, divididos entre a Hoste e os Rebeldes, cada um com sua classe. <a href="/personagens">A grade completa está aqui</a>. Nem todo o elenco foi revelado.',
        ],
      },
    ],
  },
  {
    rotulo: "Lançamento",
    titulo: "Quando e onde comprar",
    perguntas: [
      {
        p: "Quando sai o primeiro volume?",
        r: [
          "Dezembro de 2026. O dia exato ainda não foi anunciado. As datas seguem o calendário atual da editora e podem mudar.",
        ],
      },
      {
        p: "Onde vou poder comprar?",
        r: [
          "No Brasil, pela nossa própria loja, com envio dentro do país. Nos Estados Unidos, pela Amazon. No Japão, pela Amazon.co.jp.",
          'Nenhum link de venda existe ainda. <a href="/loja">A situação de cada região está na loja</a>, sempre com o estado real, nunca com um botão que não leva a lugar nenhum.',
        ],
      },
      {
        p: "Vai ter edição em português?",
        r: [
          "Sim. A edição brasileira é em português. A edição americana é em inglês e a japonesa é em japonês.",
        ],
      },
      {
        p: "Vai ter versão digital?",
        r: [
          "Nos Estados Unidos e no Japão, as edições saem impressas e digitais.",
        ],
      },
      {
        p: "Quanto vai custar?",
        r: [
          "O preço ainda não foi definido. Edições, preços, frete e disponibilidade são responsabilidade do varejista de cada região, então o valor pode ser diferente entre Brasil, Estados Unidos e Japão.",
        ],
      },
      {
        p: "Vocês enviam para fora do Brasil?",
        r: [
          "A loja brasileira envia dentro do país. Quem está fora compra pela Amazon da sua região, que cuida do envio.",
        ],
      },
    ],
  },
  {
    rotulo: "Lista de espera",
    titulo: "Como ser avisado",
    perguntas: [
      {
        p: "Como fico sabendo quando as vendas abrirem?",
        r: [
          'Deixe seu e-mail na <a href="/#lista-de-espera">lista de espera</a> e escolha sua região. Você recebe um aviso quando as vendas abrirem onde você está.',
        ],
      },
      {
        p: "O que vocês fazem com meu e-mail?",
        r: [
          "Nada além disso. O e-mail serve para avisar da abertura das vendas na sua região. Sem outros envios, sem repasse para terceiros.",
        ],
      },
    ],
  },
  {
    rotulo: "Quem faz",
    titulo: "Os criadores",
    perguntas: [
      {
        p: "Quem escreve e quem desenha?",
        r: [
          "Israel Subira é o criador e roteirista. Daniel Bretas assina a arte conceitual e Guilherme Match, a arte do mangá.",
          '<a href="/criadores">A página dos criadores traz a trajetória de cada um</a>.',
        ],
      },
      {
        p: "Por que dois artistas diferentes?",
        r: [
          "Porque são dois trabalhos distintos. Bretas desenhou a primeira leva de arte conceitual, os estudos de personagem e os designs das classes que definiram a linguagem visual da série. Match desenha o mangá em si, e tem atuado também como mentor na adaptação da história para quadrinhos.",
          "É por isso que as duas naturezas de arte convivem no site sem serem tratadas como a mesma coisa.",
        ],
      },
      {
        p: "Como a arte conceitual foi financiada?",
        r: [
          "Por financiamento coletivo. A primeira leva de arte conceitual original saiu do bolso de apoiadores, e é essa arte que sustenta tanto este site quanto a apresentação do projeto a estúdios.",
        ],
      },
      {
        p: "Há quanto tempo o projeto existe?",
        r: [
          "Israel começou Mukō-Gawa há cerca de sete anos. Desde então o projeto cresceu para um mangá, um ciclo de livros já concluído e a base para uma adaptação animada.",
        ],
      },
    ],
  },
]
;

// Escrito em inglês na mesma voz seca, usando a terminologia do autor:
// the Guest (não "Rebels"), the Defiled Well, Genesis, Unveiled.
const gruposEn: Grupo[] = [
  {
    rotulo: "The work",
    titulo: "What it is",
    perguntas: [
      {
        p: "What is Mukō-Gawa?",
        r: [
          "A dark fantasy about a civil war among a proto-human people who contend on an interdimensional plane: the fold between what is and what was promised. Two orders emerge from one bloodline, those who would hold the plane closed and those who would tear it open.",
          'It comes first as a manga, then as a series of novels. <a href="/en/story">The whole story is here</a>.',
        ],
      },
      {
        p: "What does Mukō-Gawa mean?",
        r: [
          "向こう側 means <b>the other side</b>. The name describes the point of view: the war is told from over there, by the Eternals, and not by the humans who live without knowing it exists.",
        ],
      },
      {
        p: "Do I need to know Christian mythology to follow it?",
        r: [
          "No. Mukō-Gawa uses Christian mythology as narrative material, the same way other works use the Norse sagas or the Greek epics. Readers who know the references catch extra layers; readers who do not follow the story just the same.",
        ],
      },
      {
        p: "Is Mukō-Gawa a Christian work?",
        r: [
          "It is fiction, written by a Christian author, and the biblical narrative is its spine: the central arc is redemption, told from the outside, by the Eternals. It is not catechism and it assumes no faith from the reader — it was written with the non-Christian reader in mind.",
          "If you want a bearing, the lineage is that of <b>The Screwtape Letters</b>, by C.S. Lewis, and <b>This Present Darkness</b>, by Frank Peretti: the conflict between angels and demons as material for fiction, not as a sermon.",
        ],
      },
      {
        p: "In what order should I read it?",
        r: [
          "Start with <b>Saga</b>, the main arc, in five seasons. <b>Genesis</b> is the prequel and was meant to land between Season Two and Season Three, not before everything. <b>Unveiled</b> is the epilogue and comes after Season Five.",
          "Reading Genesis out of order does not spoil the story, but it was written to be read at that point.",
        ],
      },
      {
        p: "What is the difference between the manga, the books and the anime?",
        r: [
          "Three forms of the same narrative. The manga serialises the story volume by volume. The novel series begins in 2027 and the cycle is already written and complete: one volume is released at a time, in reading order. The anime is the intended adaptation.",
        ],
      },
      {
        p: "How many books are there?",
        r: [
          "Seven in total. Five make up <b>Saga</b>, one per season, and the other two are <b>Genesis</b> and <b>Unveiled</b> — the same two that, in the adaptation plan, would be feature films.",
          "The writing is finished. None of them has been published yet.",
        ],
      },
      {
        p: "Is it one story or several?",
        r: [
          "One main story, with many plots running alongside it and a large cast that develops through it. The progression resembles a tabletop role-playing campaign, and that is no accident: the creator was a game master before he was a writer.",
          "Expect dense plotting and visceral combat. It is written for an adult reader, in the register of a seinen manga.",
        ],
      },
      {
        p: "Is there a language of its own in the work?",
        r: [
          "Yes. The language of the Eternals has its own script, phonology and grammar, developed by a linguist for the project.",
          "It is built from many fricative, aspirated and ingressive sounds, which give the language an ethereal quality. The script started from symbols of various mystical traditions and was designed to be engraved on swords and other objects used by the Eternals.",
        ],
      },
      {
        p: "Is the anime confirmed?",
        r: [
          "No. The animated adaptation is the dream behind the project, but it has no production and no studio. Mukō-Gawa is an independent project, and the concept art is being put together precisely so it can be presented to Japanese studios.",
          "The plan is five seasons and two films. Any real announcement will come through here and through the waitlist, not through rumour.",
        ],
      },
      {
        p: "How many characters are there?",
        r: [
          'The site introduces eleven, split between the Host and the Guest, each with their class. <a href="/en/characters">The full grid is here</a>. Not all of the cast has been revealed.',
        ],
      },
    ],
  },
  {
    rotulo: "Release",
    titulo: "When and where to buy",
    perguntas: [
      {
        p: "When does the first volume come out?",
        r: [
          "December 2026. The exact day has not been announced. Dates shown are current publisher schedule and may change.",
        ],
      },
      {
        p: "Where will I be able to buy it?",
        r: [
          "In Brazil, from our own store, shipped domestically. In the United States, through Amazon. In Japan, through Amazon.co.jp.",
          'No retail link exists yet. <a href="/en/shop">The status of each region is on the shop page</a>, always showing the real state, never a button that leads nowhere.',
        ],
      },
      {
        p: "Will there be an English edition?",
        r: [
          "Yes. The US edition is in English. The Brazilian edition is in Portuguese and the Japanese edition is in Japanese.",
        ],
      },
      {
        p: "Will there be a digital version?",
        r: [
          "In the United States and Japan, editions come in print and digital.",
        ],
      },
      {
        p: "How much will it cost?",
        r: [
          "Pricing has not been set. Editions, pricing, shipping and availability are handled by the retailer for each region, so the figure may differ between Brazil, the United States and Japan.",
        ],
      },
      {
        p: "Do you ship internationally?",
        r: [
          "The Brazilian store ships within Brazil. Readers elsewhere buy through the Amazon for their region, which handles delivery.",
        ],
      },
    ],
  },
  {
    rotulo: "Waitlist",
    titulo: "How to be notified",
    perguntas: [
      {
        p: "How do I find out when sales open?",
        r: [
          'Leave your email on the <a href="/en/#lista-de-espera">waitlist</a> and pick your region. You get a note when sales open where you are.',
        ],
      },
      {
        p: "What do you do with my email?",
        r: [
          "Nothing beyond that. The email is there to tell you when sales open in your region. No other mailings, no passing it to third parties.",
        ],
      },
    ],
  },
  {
    rotulo: "Who makes it",
    titulo: "The creators",
    perguntas: [
      {
        p: "Who writes it and who draws it?",
        r: [
          "Israel Subira is the writer and creator. Daniel Bretas did the concept art and Guilherme Match draws the manga.",
          '<a href="/en/creators">The creators page covers each of them</a>.',
        ],
      },
      {
        p: "Why two different artists?",
        r: [
          "Because they are two distinct jobs. Bretas drew the first round of concept art, the character studies and the class designs that set the visual language of the series. Match draws the manga itself, and has also acted as a mentor in adapting the story into comics.",
          "That is why the two natures of art coexist on this site without being treated as the same thing.",
        ],
      },
      {
        p: "How was the concept art funded?",
        r: [
          "By crowdfunding. The first round of original concept art was paid for by backers, and it is that art which carries both this site and the presentation of the project to studios.",
        ],
      },
      {
        p: "How long has the project existed?",
        r: [
          "Israel began Mukō-Gawa roughly seven years ago. Since then it has grown into a manga, an already completed novel cycle, and the groundwork for an animated adaptation.",
        ],
      },
    ],
  },
];

export const FAQ: Record<Idioma, ConteudoFaq> = {
  pt: {
    titulo: "Perguntas frequentes",
    descricao: "Quando sai o primeiro volume, onde comprar, em que ordem ler e quem faz Mukō-Gawa. As respostas diretas sobre a obra e sobre o lançamento de dezembro de 2026.",
    rotulo: "FAQ // Dúvidas comuns",
    lead: "O que já está definido, o que ainda não está, e a diferença entre as duas coisas.",
    fechoRotulo: "Não achou aqui",
    fechoTexto: "O elenco, as classes e as três séries estão detalhados nas páginas da obra. O que ainda não tem resposta é porque ainda não foi decidido.",
    atalhos: [
      { href: ROTAS.historia.pt, texto: "Ler a história" },
      { href: ROTAS.personagens.pt, texto: "Ver os personagens" },
      { href: ROTAS.loja.pt, texto: "Onde comprar" },
    ],
    grupos: gruposPt,
  },
  en: {
    titulo: "Frequently asked questions",
    descricao: "When the first volume arrives, where to buy it, what order to read in, and who makes Mukō-Gawa. Straight answers about the work and about the December 2026 release.",
    rotulo: "FAQ // Common questions",
    lead: "What is settled, what is not, and the difference between the two.",
    fechoRotulo: "Not here",
    fechoTexto: "The cast, the classes and the three series are laid out on the pages of the work. Anything still unanswered is unanswered because it has not been decided.",
    atalhos: [
      { href: ROTAS.historia.en, texto: "Read the story" },
      { href: ROTAS.personagens.en, texto: "See the characters" },
      { href: ROTAS.loja.en, texto: "Where to buy" },
    ],
    grupos: gruposEn,
  },
  // ES e JA ainda não escritos: caem no PT até serem traduzidos.
  es: {
    titulo: "Preguntas frecuentes",
    descricao: "Cuándo sale el primer volumen, dónde comprar, en qué orden leer y quién hace Mukō-Gawa.",
    rotulo: "FAQ // Dudas comunes",
    lead: "Lo que ya está definido, lo que aún no, y la diferencia entre ambas cosas.",
    fechoRotulo: "No lo encontraste",
    fechoTexto: "El reparto, las clases y las tres series están detallados en las páginas de la obra.",
    atalhos: [
      { href: ROTAS.historia.es, texto: "Leer la historia" },
      { href: ROTAS.personagens.es, texto: "Ver los personajes" },
      { href: ROTAS.loja.es, texto: "Dónde comprar" },
    ],
    grupos: gruposPt,
  },
  ja: {
    titulo: "よくある質問",
    descricao: "第1巻の発売時期、購入先、読む順番、そして『向こう側』の制作陣について。",
    rotulo: "FAQ // よくある質問",
    lead: "決まっていること、まだ決まっていないこと、そしてその違い。",
    fechoRotulo: "見つからない場合",
    fechoTexto: "登場人物、階級、三つのシリーズは各ページで詳しく紹介しています。",
    atalhos: [
      { href: ROTAS.historia.ja, texto: "物語を読む" },
      { href: ROTAS.personagens.ja, texto: "登場人物を見る" },
      { href: ROTAS.loja.ja, texto: "購入先" },
    ],
    grupos: gruposPt,
  },
};
