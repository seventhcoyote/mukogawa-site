/**
 * Página Bleeding Light — a campanha.
 *
 * Textos EXATOS da referência do autor (pacote de 2026-10-16). Gerados do
 * objeto `T` daquele arquivo, não redigitados: o pacote diz que, havendo
 * divergência entre o documento e a referência, vale a referência.
 *
 * ESPANHOL repete o português de propósito. O ES está escrito e DESLIGADO em
 * `idiomas.ts` (`pronto: false`), então estas strings nunca são servidas —
 * existem só para satisfazer o `Record<Idioma, ...>`. É o mesmo arranjo que o
 * FAQ já usava. Ao ligar o ES, traduzir aqui.
 *
 * O campo `banner` guarda a CHAVE da imagem, não o caminho: o arquivo muda por
 * idioma (bl-sinopse / bl-en-synopsis / bl-ja-synopsis) e quem resolve isso é a
 * página, com o import do Astro.
 */
import type { Idioma } from "../idiomas";

export interface SecaoBL {
  rotulo: string;
  banner: string;
  titulo: string;
  citacao: string;
  paragrafos: string[];
}

export interface ConteudoBL {
  titulo: string;
  lede: string;
  secoes: SecaoBL[];
  spreadAlt: string;
  altPencil: string;
  specsTitulo: string;
  specs: string[];
  coverAlt: string;
  specsNota: string;
  jBanner: string;
  jTitulo: string;
  jCitacao: string;
  altSketch: string;
  jA: string[];
  jPull: string;
  altJapan: string;
  jB: string[];
  altPrint: string;
  jFim: string;
  ctaAutores: string;
  ctaApoiar: string;
  emBreve: string;
}

export const BLEEDING_LIGHT: Record<Idioma, ConteudoBL> = {
  pt: {
    titulo: "Mukō-Gawa: Bleeding Light",
    lede: "Bleeding Light é um mangá de dark fantasy baseado em literatura bíblica, onde anjos e demônios travam uma guerra oculta aos olhos humanos.",
    secoes: [
      {
        rotulo: "Sinopse",
        banner: "bl-sinopse",
        titulo: "Sinopse",
        citacao: "Os céus estão marcados por uma guerra que não podemos ver.",
        paragrafos: ["Um homem abandona o pacto que seus ancestrais carregavam com os céus. Enquanto sua esperança se esvai, os Anjos que o guardam sangram num campo de batalha, resilientes apesar da ignorância da humanidade quanto ao conflito que os consome. Mas mesmo com os céus manchados pelas marcas dessa guerra invisível, um novo descendente se levanta, disposto a carregar o pacto adiante."],
      },
      {
        rotulo: "Projeto",
        banner: "bl-projeto",
        titulo: "Projeto",
        citacao: "É o dever da luz, afinal, sofrer pela esperança.",
        paragrafos: ["Mukō-Gawa (que em japonês significa \"Do Outro Lado\") é uma ficção inspirada na literatura bíblica, onde o antigo conflito entre anjos e demônios se entrelaça com a fé dos humanos. A história é contada da perspectiva do outro lado, habitação dos seres eternos.", "Numa atmosfera que mistura fantasia sombria e cenas de ação brutais com reflexões sobre a coragem de servir, Bleeding Light é um conto sobre Thaevi, um soldado que, apesar da desvantagem, se recusa a desistir. Se você curte histórias inspiradas em mitologia, literatura bíblica com uma dose de fantasia e sequências de combate empolgantes, esse mangá é perfeito pra você!"],
      },
      {
        rotulo: "Campanha",
        banner: "bl-campanha",
        titulo: "Campanha",
        citacao: "Você é mais uma lâmina contra a escuridão esmagadora.",
        paragrafos: ["A produção do mangá está na reta final. Todo o desenvolvimento até aqui foi bancado pelos próprios autores, com o auxílio de apoiadores que adquiriram material conceitual oferecido anteriormente. Agora precisamos cobrir os custos finais de diagramação, impressão e envio do mangá.", "Apoiar o projeto nesta fase também funciona como pré-venda, garantindo sua cópia do mangá (física ou digital) além de itens exclusivos da campanha, dependendo do nível de recompensa escolhido."],
      },
    ],
    spreadAlt: "Páginas internas do mangá Mukō-Gawa: Bleeding Light",
    altPencil: "Página a lápis e nanquim de um demônio alado",
    specsTitulo: "Especificações do livro",
    specs: ["14x20 cm", "144 páginas", "Miolo em papel avena 80g", "Com sobrecapa", "Sentido de leitura japonês", "Aconselhável para maiores de 16 anos (violência/sangue)"],
    coverAlt: "Capa provisória de Mukō-Gawa: Bleeding Light",
    specsNota: "*Capa provisória",
    jBanner: "bl-jornada",
    jTitulo: "Jornada",
    jCitacao: "Como não ouvir, quando as estrelas brilham com tanta fúria.",
    altSketch: "Folheando os esboços do mangá",
    jA: ["Isra começou a trabalhar na narrativa de Mukō-Gawa em 2019, e os primeiros anos foram dedicados à construção de mundo, adaptando o universo da literatura bíblica à sistemas de fantasia, até que a fundação estivesse completa. Deste processo surgiram 7 livros cobrindo a narrativa bíblica pela perspectiva dos eternos.", "Em 2025, ele esteve em Tokyo e se reuniu com um editor da Shueisha (a maior editora de mangá do mundo) para apresentar a visão que tinha pra essa grande saga que havia desenvolvido nos últimos sete anos.", "O editor ficou muito impressionado com o projeto, elogiou a narrativa e os visuais. Também disse que pensava que o projeto estava pronto pra ser apresentado pra estúdios de animação, mas que se o Isra quisesse desenvolver isso em forma de mangá, ele deveria começar com um yomikiri (uma história fechada em um único capítulo)."],
    jPull: "“Embora tudo isso seja muito interessante, o melhor jeito de se provar como um escritor pra mangás seria contando uma curta história primeiro.”",
    altJapan: "Isra na Shueisha, em Tóquio, e os autores com o público num evento",
    jB: ["Esse conselho se tornou uma missão. Não demorou muito pra ele desenvolver o primeiro esboço da história e apresentar a um ilustrador, com a proposta de realizarem essa obra juntos. A proficiência em quadrinhos do Match, especialmente por conta das sequências de ação e do storytelling excelente, como o Isra havia percebido em Track e Kophee, era exatamente o que esse mangá precisava.", "Depois de anunciar a parceria, foram várias mensagens, reuniões e inúmeras versões da história até chegar ao resultado que vocês estão prestes a conhecer. A colisão de dois mundos, o da literatura e o do mangá. Fruto da vontade de criar boas histórias inspiradas pela maior de todas as histórias."],
    altPrint: "Página impressa com um anjo em combate",
    jFim: "É assim que nasce Mukō-Gawa: Bleeding Light.",
    ctaAutores: "Conheça os autores",
    ctaApoiar: "Apoie agora",
    emBreve: "Em breve",
  },

  en: {
    titulo: "Mukō-Gawa: Bleeding Light",
    lede: "Bleeding Light is a dark fantasy manga based on biblical literature, where angels and demons wage a war hidden from human eyes.",
    secoes: [
      {
        rotulo: "Synopsis",
        banner: "bl-en-synopsis",
        titulo: "Synopsis",
        citacao: "The heavens are marked by a war we cannot see.",
        paragrafos: ["A man abandons the pact his ancestors carried with the heavens. As his hope drains away, the Angels who guard it bleed on an invisible battlefield, resilient despite humanity’s ignorance of the conflict consuming them. But even as the heavens are stained with the marks of this war, a new descendant rises, willing to carry the pact forward."],
      },
      {
        rotulo: "Project",
        banner: "bl-en-project",
        titulo: "Project",
        citacao: "It is the duty of light, after all, to suffer for hope.",
        paragrafos: ["Mukō-Gawa (which in Japanese means \"From the Other Side\") is a fiction inspired by biblical literature, where the ancient conflict between angels and demons intertwines with human faith. The story is told from the perspective of the other side, home of the eternal beings.", "In an atmosphere that blends dark fantasy and brutal action scenes with reflections on the courage to serve, Bleeding Light is a tale about Thaevi, a soldier who, despite the odds against him, refuses to give up. If you enjoy stories inspired by mythology, biblical literature with a dash of fantasy, and thrilling combat sequences, this manga is perfect for you!"],
      },
      {
        rotulo: "Campaign",
        banner: "bl-en-campaign",
        titulo: "Campaign",
        citacao: "You are another blade against the crushing darkness.",
        paragrafos: ["The manga’s production is in its final stretch. All development up to this point has been funded by the authors themselves, with the support of backers who purchased concept material offered previously. Now we need to cover the final costs of layout, printing, and shipping the manga.", "Supporting the project at this stage also works as a pre-order, guaranteeing your copy of the manga (physical or digital) as well as exclusive items from the campaign, depending on the reward tier you choose."],
      },
    ],
    spreadAlt: "Interior pages of the Mukō-Gawa: Bleeding Light manga",
    altPencil: "Pencil and ink page of a winged demon",
    specsTitulo: "Book Specs",
    specs: ["14x20 cm", "144 pages", "Interior printed on 80g avena paper", "With dust jacket", "Japanese reading order", "Recommended for ages 16+ (violence/blood)"],
    coverAlt: "Provisional cover of Mukō-Gawa: Bleeding Light",
    specsNota: "*Cover art is provisional",
    jBanner: "bl-en-journey",
    jTitulo: "Journey",
    jCitacao: "How could we not listen, when the stars burn with such fury.",
    altSketch: "Flipping through the manga sketches",
    jA: ["Isra began working on the narrative of Mukō-Gawa in 2019, and the first years were dedicated to worldbuilding, adapting the universe of biblical literature into fantasy systems, until the foundation was complete. From this process came 7 books covering the biblical narrative from the perspective of the eternal beings.", "In 2025, he was in Tokyo and met with an editor from Shueisha (the world’s largest manga publisher) to present the vision he had for this great saga he’d developed over the past seven years.", "The editor was deeply impressed with the project, praised the narrative and the visuals. He also said he thought the project was ready to be pitched to animation studios, but that if Isra wanted to develop it in manga form, he should start with a yomikiri (a self-contained story told in a single chapter)."],
    jPull: "“As interesting as all of this is, the best way to prove yourself as a manga writer would be to tell a short story first.”",
    altJapan: "Isra at Shueisha in Tokyo, and the authors with readers at an event",
    jB: ["That advice became a mission. It didn’t take him long to develop the first draft of the story and bring it to an illustrator, with a proposal to create this work together. Match’s skill in comics, especially his action sequences and excellent storytelling, as Isra had noticed in Track and Kophee, was exactly what this manga needed.", "After announcing the partnership came countless messages, meetings, and versions of the story before arriving at the result you’re about to discover. The collision of two worlds, that of literature and that of manga. The fruit of a desire to create good stories inspired by the greatest story of all."],
    altPrint: "Printed page of an angel in combat",
    jFim: "This is how Mukō-Gawa: Bleeding Light was born.",
    ctaAutores: "Meet the authors",
    ctaApoiar: "Support now",
    emBreve: "Coming soon",
  },

  ja: {
    titulo: "『向こう側:ブリーディング・ライト』",
    lede: "『向こう側:ブリーディング・ライト』は、聖書文学を基にしたダークファンタジー漫画。天使と悪魔が、人知れず戦い続ける見えざる戦争を描く。",
    secoes: [
      {
        rotulo: "あらすじ",
        banner: "bl-ja-synopsis",
        titulo: "あらすじ",
        citacao: "天は、見えざる戦の傷に覆われている。",
        paragrafos: ["一人の男が、祖先が天と結んだ盟約を捨てる。希望が消えゆく中、それを守る天使たちは名もなき戦場で血を流し続ける。人は己を覆う戦の存在すら知らぬまま。だが天があの見えざる戦の傷に染まるとき、一人の末裔が立ち上がる。盟約を、なおも背負う覚悟を持って。"],
      },
      {
        rotulo: "プロジェクト",
        banner: "bl-ja-project",
        titulo: "プロジェクトについて",
        citacao: "光とは、希望のために苦しむ定め。",
        paragrafos: ["『向こう側(ムコウガワ)』は、聖書文学に着想を得たフィクションで、天使と悪魔の古き戦いが人間の信仰と絡み合っていく物語だ。物語は「向こう側」、すなわち永遠なる者たちが住まう世界の視点から語られる。", "ダークファンタジーと容赦ない戦闘シーンが、仕えることの覚悟を問う静かな想いと交差する世界観の中、『向こう側:ブリーディング・ライト』は一人の兵士、セイヴィの物語を描く。圧倒的な不利を前にしても、彼は決して退かない。神話や聖書文学にファンタジーの味わいを加えた物語、そして胸を熱くする戦闘シーンが好きなら、この漫画はまさにあなたのための一冊だ!"],
      },
      {
        rotulo: "キャンペーン",
        banner: "bl-ja-campaign",
        titulo: "キャンペーンについて",
        citacao: "君もまた、圧倒的な闇に立ち向かう一振りの刃。",
        paragrafos: ["漫画の制作は最終段階を迎えている。ここまでの開発費はすべて著者自身が負担し、以前に提供したコンセプト素材を購入してくれた支援者たちの協力にも支えられてきた。今は、漫画のレイアウト、印刷、発送にかかる最終費用を賄う段階だ。", "この段階でのプロジェクト支援は予約購入としても機能し、選んだリワードの段階に応じて、漫画のコピー(紙版またはデジタル版)に加え、キャンペーン限定アイテムが手に入る。"],
      },
    ],
    spreadAlt: "『向こう側:ブリーディング・ライト』本文ページ",
    altPencil: "翼を持つ悪魔の下描きページ",
    specsTitulo: "書籍仕様",
    specs: ["14x20 cm", "144ページ", "本文用紙:アヴェナ紙80g", "カバー装丁", "日本式(右綴じ)読み方", "16歳以上推奨(暴力・流血表現あり)"],
    coverAlt: "『向こう側:ブリーディング・ライト』仮表紙",
    specsNota: "※表紙は仮デザインです",
    jBanner: "bl-ja-journey",
    jTitulo: "ここまでの歩み",
    jCitacao: "星々がこれほど激しく燃えているのに、どうして耳を塞げようか。",
    altSketch: "漫画のラフをめくる様子",
    jA: ["イスラが『向こう側』の物語に着手したのは2019年のこと。最初の数年は世界観の構築に費やされ、聖書文学の世界をファンタジーの体系へと落とし込みながら、その土台を固めていった。この過程から、永遠なる者たちの視点で聖書の物語を描く全7冊の作品が生まれた。", "2025年、彼は東京を訪れ、集英社(世界最大の漫画出版社)の編集者と面会し、この七年間をかけて育て上げてきた壮大なサーガのビジョンを伝えた。", "編集者はこの企画に強い感銘を受け、物語性とビジュアルの両方を高く評価した。また、このプロジェクトはすでにアニメスタジオへ持ち込める段階にあると感じているとも語ったが、もしイスラが漫画という形で展開したいのであれば、まずは読み切り(一話完結の物語)から始めるべきだとも伝えた。"],
    jPull: "「これはどれも非常に興味深いものですが、漫画作家として自分を証明する一番の方法は、まず短い物語を語ることです。」",
    altJapan: "東京・集英社でのイスラと、イベントで読者と並ぶ作者たち",
    jB: ["その助言は、一つの使命となった。イスラはほどなくして物語の最初のプロットを作り上げ、ある一人のイラストレーターにそれを見せ、共にこの作品を作り上げないかと持ちかけた。マッチの漫画における力量、特にその卓越したアクションシーンと物語運びは、イスラが『Soundtrack』や『Kophee』を通して見出していたものであり、まさにこの漫画に必要なものだった。", "パートナーシップを発表してから、数え切れないほどのメッセージ、打ち合わせ、そして幾度もの改稿を経て、今まさにあなたが目にしようとしている物語にたどり着いた。文学と漫画、二つの世界が衝突して生まれたもの。それは、あらゆる物語の中で最も偉大な物語に触発され、良き物語を紡ぎたいという願いの結晶だ。"],
    altPrint: "戦う天使の印刷ページ",
    jFim: "こうして、『向こう側:ブリーディング・ライト』は生まれた。",
    ctaAutores: "作者を知る",
    ctaApoiar: "今すぐ支援",
    emBreve: "近日公開",
  },
};

// ES desligado: reaproveita o PT para o tipo fechar. Ver o comentário do topo.
(BLEEDING_LIGHT as Record<string, ConteudoBL>).es = BLEEDING_LIGHT.pt;
