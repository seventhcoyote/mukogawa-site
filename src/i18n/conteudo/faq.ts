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
          "Se você procura um paralelo, a linhagem é a de <b>Cartas de um Diabo ao Seu Aprendiz</b>, de C.S. Lewis, e <b>Esse Mundo Tenebroso</b>, de Frank Peretti: o conflito entre potências invisíveis como narrativa, não como sermão.",
        ],
      },
      {
        p: "Quais obras influenciaram Mukō-Gawa?",
        r: [
          "Cinco, citadas pelo autor: <b>Castlevania</b>, de Warren Ellis, <b>Jujutsu Kaisen</b>, de Gege Akutami, <b>Elden Ring</b>, de Hidetaka Miyazaki, e <b>Sandman</b> e <b>Deuses Americanos</b>, de Neil Gaiman.",
          "As três primeiras são fantasia sombria para público adulto, com combate de peso e um mundo que não se explica todo de uma vez. As duas de Gaiman tratam o mito como matéria de ficção, com potências invisíveis em conflito conduzindo a narrativa. É desse cruzamento que Mukō-Gawa parte.",
        ],
      },
      {
        p: "Em que ordem devo ler?",
        r: [
          "Comece por <b>Saga</b>, o arco principal, dividido em cinco temporadas (ou livros). <b>Protogenesis</b> é a prequela e foi pensada para entrar entre a Segunda e a Terceira Temporada (ou livro), não antes de tudo. <b>Desvelar</b> é o epílogo e vem depois da Quinta.",
          "Ler Protogenesis fora de ordem não estraga a história, mas ela foi escrita para ser lida naquele ponto.",
          "O <b>yomikiri</b> se passa entre Protogenesis e a Primeira Temporada. É opcional, e existe para dar o gosto do mundo antes do compromisso com a série.",
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
          "Sim. A língua dos Eternos tem escrita, fonologia e gramática próprias, desenvolvidas por Israel Subira em conjunto com o linguista Pedro Vizioli.",
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
          'A série conta com um elenco de mais de cem personagens. O site apresenta onze deles — os que já ganharam arte própria —, divididos entre a Hoste e os Rebeldes, um por classe. <a href="/personagens">A grade está aqui</a>.',
        ],
      },
    ],
  },
  {
    rotulo: "Lançamento",
    titulo: "Quando e onde comprar",
    perguntas: [
      {
        p: "O que é um yomikiri?",
        r: [
          "É um capítulo avulso, fechado em si mesmo, publicado antes da série regular. Em mangá, ele funciona como piloto: apresenta o mundo, o traço e o tom sem exigir que o leitor tenha acompanhado nada antes.",
          "O de Mukō-Gawa se chama <b>Por Isso Lutamos</b> e é a primeira publicação da série. O volume 1 do mangá vem depois dele.",
          "Na cronologia da história ele fica entre <b>Protogenesis</b> e a Primeira Temporada, e é <b>leitura opcional</b>: quem pular não fica com buraco nenhum.",
        ],
      },
      {
        p: "Quando sai o yomikiri?",
        r: [
          "1º de dezembro de 2026. As datas seguem o calendário atual da editora e podem mudar.",
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
          "Sim. As edições saem impressas e digitais.",
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
          "Israel Subira é o criador, escritor e roteirista. Daniel Bretas assina a arte conceitual e Guilherme Match, a arte do mangá.",
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
          "Israel começou Mukō-Gawa há cerca de sete anos. Desde então o projeto cresceu para um mangá, um ciclo de livros já escritos e a base para uma adaptação animada. O aviso do lançamento dos livros também sai pela lista de espera.",
        ],
      },
    ],
  },
]
;

// Escrito em inglês na mesma voz seca, usando a terminologia do autor:
// the Guest (não "Rebels"), the Defiled Well, Protogenesis, Unveiled.
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
          "If you want a bearing, the lineage is that of <b>The Screwtape Letters</b>, by C.S. Lewis, and <b>This Present Darkness</b>, by Frank Peretti: the conflict between unseen powers as narrative, not as sermon.",
        ],
      },
      {
        p: "Which works influenced Mukō-Gawa?",
        r: [
          "Five, named by the author: <b>Castlevania</b>, by Warren Ellis, <b>Jujutsu Kaisen</b>, by Gege Akutami, <b>Elden Ring</b>, by Hidetaka Miyazaki, and <b>The Sandman</b> and <b>American Gods</b>, by Neil Gaiman.",
          "The first three are dark fantasy for a mature audience, with weight in their combat and a world that does not explain itself all at once. The two Gaiman works treat myth as material for fiction, with unseen powers in conflict driving the narrative. Mukō-Gawa sets out from where those two lines cross.",
        ],
      },
      {
        p: "In what order should I read it?",
        r: [
          "Start with <b>Saga</b>, the main arc, in five seasons (or books). <b>Protogenesis</b> is the prequel and was meant to land between Season Two and Season Three (or book), not before everything. <b>Unveiled</b> is the epilogue and comes after Season Five.",
          "Reading Protogenesis out of order does not spoil the story, but it was written to be read at that point.",
          "The <b>yomikiri</b> sits between Protogenesis and Season One. It is optional, and exists to give a taste of the world before committing to the series.",
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
          "Seven in total. Five make up <b>Saga</b>, one per season, and the other two are <b>Protogenesis</b> and <b>Unveiled</b> — the same two that, in the adaptation plan, would be feature films.",
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
          "Yes. The language of the Eternals has its own script, phonology and grammar, developed by Israel Subira together with the linguist Pedro Vizioli.",
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
          'The series has a cast of more than a hundred characters. The site introduces eleven of them — the ones that already have art of their own — split between the Host and the Guest, one per class. <a href="/en/characters">The grid is here</a>.',
        ],
      },
    ],
  },
  {
    rotulo: "Release",
    titulo: "When and where to buy",
    perguntas: [
      {
        p: "What is a yomikiri?",
        r: [
          "It is a standalone chapter, complete in itself, published ahead of the regular series. In manga it works as a pilot: it introduces the world, the art and the tone without asking the reader to have followed anything before it.",
          "The Mukō-Gawa one is called <b>This Is Why We Fight</b>, and it is the first publication in the series. Volume 1 of the manga follows it.",
          "Within the story it sits between <b>Protogenesis</b> and Season One, and it is <b>optional reading</b>: skipping it leaves no gap.",
        ],
      },
      {
        p: "When does the yomikiri come out?",
        r: [
          "1 December 2026. Dates shown are current publisher schedule and may change.",
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
          "Yes. Editions come in print and digital.",
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
          "Israel Subira is the creator, writer and scriptwriter. Daniel Bretas did the concept art and Guilherme Match draws the manga.",
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
          "Israel began Mukō-Gawa roughly seven years ago. Since then it has grown into a manga, an already written novel cycle, and the groundwork for an animated adaptation. Word of the novels also goes out through the waiting list.",
        ],
      },
    ],
  },
];

/**
 * FAQ em japonês.
 *
 * ATENÇÃO, e isto não é formalidade: diferente do resto do site japonês, este
 * bloco NÃO é texto do autor. O site antigo não tinha FAQ, então as 23
 * perguntas foram traduzidas aqui, do inglês. A terminologia segue o glossário
 * confirmado em conteudo/JA-SITE-MODELO.md — 天軍, 客人, 永遠者, 汚された井戸,
 * 帷（ヴェイル）, 星の時代 — mas a redação é nossa.
 *
 * PRECISA DE REVISÃO POR FALANTE NATIVO antes de contar como definitivo.
 * Registro de voz: o FAQ é a Voz da Casa, seca. Nada de registro litúrgico.
 */
const gruposJa: Grupo[] = [
  {
    rotulo: "作品について",
    titulo: "『向こう側』とは",
    perguntas: [
      {
        p: "『向こう側』とはどんな作品ですか。",
        r: [
          "原人類の同族が、次元の狭間 — 現にあるものと約束されたものとの折り目 — をめぐって争う内戦を描くダークファンタジーです。ひとつの血統から二つの秩序が生まれます。狭間を閉じたままにしようとする者と、引き裂こうとする者です。",
          '刊行はまず漫画、続いて小説シリーズという順になります。<a href="/ja/story">物語の全体はこちら</a>。',
        ],
      },
      {
        p: "『向こう側』という題名の意味は。",
        r: [
          "向こう側とは<b>反対側</b>のことです。この題は語りの視点を示しています。戦はあちら側から、永遠者たちによって語られ、その存在を知らずに生きる人間の側からは語られません。",
        ],
      },
      {
        p: "キリスト教神話の知識は必要ですか。",
        r: [
          "不要です。『向こう側』は、他の作品が北欧のサガやギリシアの叙事詩を用いるのと同じように、キリスト教神話を物語の素材として扱います。典拠を知る読者には層が増えますが、知らない読者も同じように物語を追えます。",
        ],
      },
      {
        p: "『向こう側』はキリスト教の作品ですか。",
        r: [
          "キリスト教徒の作家が書いた虚構であり、聖書の物語がその背骨です。中心にあるのは贖罪の弧で、それを外側から、永遠者たちが語ります。教理問答ではなく、読者に信仰を前提としません。むしろキリスト教徒でない読者を念頭に書かれています。",
          "手がかりを求めるなら、系譜としてはC.S.ルイス『悪魔の手紙』、フランク・ペレッティ『この暗黒の世界』に連なります。見えざる力のあいだの相克を、説教ではなく物語として描くということです。",
        ],
      },
      {
        p: "『向こう側』が影響を受けた作品は何ですか。",
        r: [
          "作者が挙げるのは五作です。ウォーレン・エリス『キャッスルヴァニア』、芥見下々『呪術廻戦』、宮崎英高『エルデンリング』、そしてニール・ゲイマン『サンドマン』『アメリカン・ゴッズ』。",
          "前の三作は成人向けのダークファンタジーであり、重量のある戦闘と、一度にすべてを説明しない世界を持ちます。ゲイマンの二作は神話を虚構の素材として扱い、見えざる力の相克が物語を動かします。『向こう側』はその二つの線が交わる地点から出発しています。",
        ],
      },
      {
        p: "どの順番で読めばよいですか。",
        r: [
          "主軸である<b>Saga</b>から始めてください。全五シーズン（各巻）です。<b>Protogenesis</b>は前日譚で、第二シーズンと第三シーズン（巻）のあいだに置かれるよう構想されました。冒頭ではありません。<b>Unveiled</b>は結びで、第五シーズンの後に来ます。",
          "Protogenesisを順番どおりに読まなくても物語は損なわれませんが、あの位置で読まれるように書かれています。",
          "<b>読み切り</b>はProtogenesisと第一シーズンのあいだに位置します。任意の一編で、シリーズに踏み込む前に世界の空気を掴むためのものです。",
        ],
      },
      {
        p: "漫画・小説・アニメの違いは。",
        r: [
          "同じ物語の三つの形です。漫画は巻ごとに連載します。小説シリーズは2027年に始まり、その全篇はすでに書き上がっています。読む順に一巻ずつ刊行されます。アニメは想定されている映像化です。",
        ],
      },
      {
        p: "小説は何冊ありますか。",
        r: [
          "全七冊です。うち五冊が<b>Saga</b>で各シーズンに対応し、残る二冊が<b>Protogenesis</b>と<b>Unveiled</b> — 映像化の計画では劇場長編にあたる二作です。",
          "執筆は完了しています。刊行はまだ一冊もありません。",
        ],
      },
      {
        p: "物語はひとつですか、複数ですか。",
        r: [
          "主となる物語がひとつあり、その傍らを多くの筋が走り、大勢の登場人物がそこで育っていきます。進み方はテーブルトークRPGのキャンペーンに似ていますが、それは偶然ではありません。作者は書き手である前にゲームマスターでした。",
          "筋は緻密で、戦闘は生々しい描写を伴います。青年漫画の水準で、成人読者に向けて書かれています。",
        ],
      },
      {
        p: "作中に独自の言語はありますか。",
        r: [
          "あります。永遠者の言語には固有の文字・音韻・文法があり、イスラエル・スビラが言語学者ペドロ・ヴィジオリと共に作り上げました。",
          "摩擦音・気音・吸気音を多く含み、それが言語に幽玄な質を与えています。文字は諸々の神秘主義の伝統の記号を出発点とし、剣をはじめ永遠者の用いる器物に刻まれることを前提に設計されました。",
        ],
      },
      {
        p: "アニメ化は決定していますか。",
        r: [
          "していません。映像化はこの企画の背後にある夢ですが、制作もスタジオも決まっていません。『向こう側』は独立した企画であり、コンセプトアートは日本のスタジオへ提示するためにこそ整えられています。",
          "構想は五シーズンと二本の劇場作品です。正式な発表があれば、本サイトと事前登録でお知らせします。噂でではありません。",
        ],
      },
      {
        p: "登場人物は何人いますか。",
        r: [
          '本シリーズには百を超える登場人物がいます。本サイトではそのうち十一人 — すでに専用の絵を持つ者たち — を、天軍と客人に分け、階級ごとに一人ずつ紹介しています。<a href="/ja/characters">一覧はこちら</a>。',
        ],
      },
    ],
  },
  {
    rotulo: "発売",
    titulo: "時期と購入先",
    perguntas: [
      {
        p: "読み切りとは何ですか。",
        r: [
          "本編の連載に先立って発表される、一話完結の作品です。世界観と絵と語り口を、前提知識なしに読者へ差し出す入口にあたります。",
          "『向こう側』の読み切りは<b>我らが戦う理由</b>。シリーズ最初の刊行物であり、漫画第1巻はその後に続きます。",
          "物語の時系列では<b>Protogenesis</b>と第一シーズンのあいだに位置し、<b>読まなくても支障はありません</b>。",
        ],
      },
      {
        p: "読み切りはいつ発売されますか。",
        r: [
          "2026年12月1日です。表示している日程は出版社の現行予定であり、変更の可能性があります。",
        ],
      },
      {
        p: "どこで購入できますか。",
        r: [
          "ブラジルでは自社ストアから国内発送します。アメリカではAmazon、日本ではAmazon.co.jpを通じてお求めいただけます。",
          '販売リンクはまだありません。<a href="/ja/shop">各地域の状況は購入先ページに記載しています</a>。常に実際の状態を示し、どこにも繋がらないボタンは置きません。',
        ],
      },
      {
        p: "英語版は出ますか。",
        r: [
          "出ます。アメリカ版は英語です。ブラジル版はポルトガル語、日本版は日本語です。",
        ],
      },
      {
        p: "電子版は出ますか。",
        r: [
          "出ます。各版とも紙と電子の両方で刊行されます。",
        ],
      },
      {
        p: "価格はいくらですか。",
        r: [
          "未定です。版・価格・送料・在庫は各地域の販売元が扱うため、ブラジル・アメリカ・日本で金額が異なる場合があります。",
        ],
      },
      {
        p: "海外発送はありますか。",
        r: [
          "ブラジルのストアは国内発送のみです。他地域の読者は、お住まいの地域のAmazonからお求めください。配送はそちらが行います。",
        ],
      },
    ],
  },
  {
    rotulo: "事前登録",
    titulo: "お知らせの受け取り方",
    perguntas: [
      {
        p: "発売開始をどう知ればよいですか。",
        r: [
          '<a href="/ja/#lista-de-espera">事前登録</a>にメールアドレスを残し、地域をお選びください。お住まいの地域で販売が始まった際にお知らせします。',
        ],
      },
      {
        p: "メールアドレスは何に使われますか。",
        r: [
          "それ以外には使いません。お住まいの地域で販売が始まったことをお伝えするためのものです。他の配信もなく、第三者への提供もありません。",
        ],
      },
    ],
  },
  {
    rotulo: "制作",
    titulo: "作り手について",
    perguntas: [
      {
        p: "誰が書き、誰が描いていますか。",
        r: [
          "イスラエル・スビラが原作・執筆・脚本を担います。ダニエル・ブレタスがコンセプトアート、ギリェルメ・マッチが漫画作画です。",
          '<a href="/ja/creators">制作陣のページで各人を紹介しています</a>。',
        ],
      },
      {
        p: "なぜ絵師が二人いるのですか。",
        r: [
          "別種の仕事だからです。ブレタスは最初のコンセプトアート、人物習作、そしてシリーズの視覚言語を定めた階級の意匠を描きました。マッチは漫画そのものを描き、物語を漫画へ移す上での指導役も務めています。",
          "本サイトで二種類の絵が同居しながら、同じものとして扱われていないのはそのためです。",
        ],
      },
      {
        p: "コンセプトアートの費用はどう賄われましたか。",
        r: [
          "クラウドファンディングです。最初のコンセプトアート一式は支援者によって賄われました。本サイトも、スタジオへの企画提示も、その絵が支えています。",
        ],
      },
      {
        p: "企画はいつから続いていますか。",
        r: [
          "イスラエルが『向こう側』を書き始めておよそ七年になります。以来この企画は、漫画、すでに書き上がった小説群、そして映像化の土台へと育ちました。小説の刊行についても事前登録でお知らせします。",
        ],
      },
    ],
  },
];

export const FAQ: Record<Idioma, ConteudoFaq> = {
  pt: {
    titulo: "Perguntas frequentes",
    descricao: "Quando sai o yomikiri, onde comprar, em que ordem ler e quem faz Mukō-Gawa. As respostas diretas sobre a obra e sobre o lançamento de 1º de dezembro de 2026.",
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
    descricao: "When the yomikiri arrives, where to buy it, what order to read in, and who makes Mukō-Gawa. Straight answers about the work and about the 1 December 2026 release.",
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
    descricao: "Cuándo sale el yomikiri, dónde comprar, en qué orden leer y quién hace Mukō-Gawa.",
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
    descricao: "読み切りの発売時期、購入先、読む順番、そして『向こう側』の制作陣について。",
    rotulo: "FAQ // よくある質問",
    lead: "決まっていること、まだ決まっていないこと、そしてその違い。",
    fechoRotulo: "見つからない場合",
    fechoTexto: "登場人物、階級、三つのシリーズは各ページで詳しく紹介しています。",
    atalhos: [
      { href: ROTAS.historia.ja, texto: "物語を読む" },
      { href: ROTAS.personagens.ja, texto: "登場人物を見る" },
      { href: ROTAS.loja.ja, texto: "購入先" },
    ],
    grupos: gruposJa,
  },
};
