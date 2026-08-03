/**
 * História por idioma.
 *
 * O EN é o texto do próprio autor, colhido do site modelo — inclusive os nomes
 * das séries, que mudam de idioma de propósito: Protogenesis/Protogenesis e
 * Desvelar/Unveiled. Igualmente, a facção que o PT chama "Rebeldes" o EN chama
 * "the Guest", em oposição a "the Host". Não uniformizar.
 *
 * ES traduzido do PT-BR e JA vindo do site modelo, ambos pendentes de revisão.
 */
import type { Idioma } from "../idiomas";

interface Serie { nome: string; selo: string; texto: string }

interface Era { nome: string; texto: string }

interface ConteudoHistoria {
  titulo: string;
  descricao: string;
  rotuloAbertura: string;
  h1: string;
  aberturaP1: string;
  aberturaP2: string;
  rotuloEternos: string;
  tituloEternos: string;
  eternosP: string[];
  rotuloLados: string;
  tituloLados: string;
  ladosP: string[];
  rotuloEras: string;
  tituloEras: string;
  leadEras: string;
  eras: Era[];
  rotuloObra: string;
  tituloSeries: string;
  series: Serie[];
  rotuloPreco: string;
  tituloPoco: string;
  pocoP: string[];
  rotuloRuptura: string;
  tituloGuerra: string;
  guerraP: string[];
  falaHelel: string;
  citaHelel: string;
  rotuloBase: string;
  tituloMitologia: string;
  mitologiaP: string[];
  rotuloAviso: string;
  aviso: string;
}

export const HISTORIA: Record<Idioma, ConteudoHistoria> = {
  pt: {
    titulo: "História",
    descricao: "Antes da humanidade, uma civilização entrou em guerra pela forma da realidade. As três séries, as Fontes Profanas e a Guerra pela Humanidade em Mukō-Gawa.",
    rotuloAbertura: "A história",
    h1: "Antes da humanidade, uma civilização entrou em guerra pela forma da realidade.",
    aberturaP1: "Como as sagas nórdicas e as epopeias gregas, Mukō-Gawa é uma imersão profunda na mitologia cristã. A narrativa conta a Criação e a Redenção, enquanto uma guerra celestial culmina em paz eterna.",
    aberturaP2: "Mukō-Gawa acompanha uma guerra civil entre um povo proto-humano que disputa um plano interdimensional — a dobra entre o que é e o que foi prometido. Duas ordens nascem de uma mesma linhagem: a que quer manter o plano fechado e a que quer rompê-lo.",
    rotuloEternos: "Os Eternos",
    tituloEternos: "Quem são os Eternos",
    eternosP: [
      "Os Eternos são a raça angélica, os filhos do céu, chamados à existência para percorrer a criação, guardá-la e cultivá-la. Não se multiplicam como os homens: são convocados em legiões, e o tempo não os gasta.",
      "Duas naturezas separam o Eterno do homem. O Eterno é espírito, e apenas espírito. O homem é espírito e alma, os dois abrigados num corpo. É essa dupla natureza, e não a força, que faz dele o centro da guerra.",
      "Cada Eterno descobre em si um chamado, uma inclinação que o move antes de qualquer ordem: ao serviço, à sabedoria, à beleza, à força. Com o tempo o chamado endurece e vira posto. É daí que nascem as nove classes.",
      "E nada disso é visto. O Eterno atravessa o mundo dos homens sem ser percebido. A guerra que decide o destino deles passa ao lado deles, e eles não a enxergam.",
    ],
    rotuloLados: "Os dois lados",
    tituloLados: "A Hoste e os Rebeldes",
    ladosP: [
      "A Hoste é o exército dos Eternos que permaneceram fiéis ao Altíssimo. Está ordenada em três Escalões e é conduzida por generais como Miguel: a força permanente dos Céus, empenhada na guerra que não cessa.",
      "Os Rebeldes são os que seguiram Helel na insurreição e caíram com ele. Depois da queda ergueram facção própria, espelho torto daquela que deixaram: onde havia ordem, puseram o avesso da ordem.",
      "A Hoste os chama de Profanadores. Eles não se chamam assim. É nome vindo da boca do inimigo, e carrega o que o inimigo pensa deles.",
    ],
    rotuloEras: "As eras",
    tituloEras: "O tempo desta história",
    leadEras: "A narrativa vai do surgimento dos Antigos, que precedem a humanidade, ao desfecho escatológico — belo e assombroso na mesma medida. Protogenesis cobre da Era das Estrelas até a era dos homens.",
    eras: [
      { nome: "A Era das Estrelas", texto: "A era mais antiga. Os Eternos percorrem o cosmos, cartografam-no e o cultivam, e é neste tempo que cada um encontra o próprio chamado." },
      { nome: "O Cisma", texto: "A recusa de Helel parte a Hoste em duas e acende a Guerra Celestial." },
      { nome: "A era dos homens", texto: "A história dos homens corre na superfície e a guerra corre por baixo dela, invisível. É nesta era que o yomikiri e a Saga se passam." },
      { nome: "O Ajuste de Contas", texto: "Ainda que muitos o ignorem, deveria ser temido por todos, pois ninguém lhe escapa. A colisão do reino eterno sobre o reino dos mortais é inevitável. E o fim também." },
    ],
    rotuloObra: "A obra",
    tituloSeries: "Três séries",
    series: [
      { nome: "Saga", selo: "Cinco temporadas // Cinco livros // Arco principal do mangá",
        texto: "Saga é o relato da redenção contada pelo outro lado: uma guerra brutal travada com espada e mente, onde legiões descem sobre seus inimigos, e generais empunham não apenas poder, mas estratégia. Dividida em cinco temporadas, Saga desvela o conflito eterno entre a Hoste e o Rebelde, enquanto o destino da humanidade pende por um fio." },
      { nome: "Protogenesis", selo: "Prequela // Longa-metragem e livro",
        texto: "Protogenesis é a origem. Assim como O Silmarillion é para O Senhor dos Anéis, Protogenesis serve como o prelúdio de Saga: uma recontagem mítica dos eventos que antecederam a guerra. Planejado como um longa-metragem, Protogenesis será lançado entre a Segunda e a Terceira Temporada, oferecendo profundidade, contexto e o peso da história antiga." },
      { nome: "Desvelar", selo: "Epílogo // Longa-metragem e livro",
        texto: "Desvelar é a luz final. Após o desfecho arrebatador da Quinta Temporada, muitos se perguntarão o que foi feito de seus personagens favoritos. Desvelar é o filme pós-série, criado para trazer resolução, mistério e encerramento: o último ato da jornada de Mukō-Gawa." },
    ],
    rotuloPreco: "O preço",
    tituloPoco: "As Fontes Profanas",
    pocoP: [
      "Após a Rebelião, os Profanadores descobriram que as Águas Vivas dos Altos Céus já não os acolhiam. O que antes curava, agora queimava. Em desafio, roubaram as águas sagradas e as levaram para o Abismo. Ali, sob o olhar do Rei Serpente, a graça roubada foi distorcida por alquimia proibida, dando origem ao Poço Profanado.",
      "O Poço oferece restauração, mas por um preço. Cada mergulho corrói o espírito. As formas se retorcem, a essência apodrece, e alguns são maculados além do reconhecimento, transformando-se em Flageladores: criaturas de tormento, libertas sobre a humanidade para semear confusão e temor.",
      "Ainda que o Poço conceda poder sombrio, há reverência entre os caídos por aqueles que mantêm sua forma original. Permanecer incorrupto é raro, e fala de uma força terrível. Pois no Abismo, a corrupção é poder, mas a resistência é glória.",
    ],
    rotuloRuptura: "A ruptura",
    tituloGuerra: "A Guerra pela Humanidade",
    guerraP: [
      "Durante a Era das Estrelas, o Conselho Celestial foi convocado, e o Altíssimo revelou Seu desígnio: trazer à existência um novo mundo, um planeta habitável, onde uma nova espécie se ergueria. Chamá-los-ia humanos. Diferente dos Eternos, não nasceriam em legiões, mas se multiplicariam sobre a terra, moldados do pó, ainda assim carregando a imagem dAquele que os formou. Com o tempo, seriam recebidos na comunhão dos Céus.",
      "Mas então veio o grande mistério, aquele que fez o firmamento estremecer e colocou a eternidade em suspense: os Eternos serviriam à humanidade nesta era, e na vindoura, a humanidade julgaria sobre eles. Foi nesse instante que o coração de Helel se tornou pedra.",
      "Helel rejeitou o decreto. O que começou como orgulho tornou-se rebelião aberta, e em seu íntimo, cobiçou o próprio Trono. Sem mais disfarces, sua insurgência ergueu-se contra o Altíssimo, e a Guerra Civil irrompeu entre os Eternos. Aos olhos de Helel, a subjugação da humanidade não é apenas estratégia, é autopreservação. Em segredo, ele constrói um paraíso: uma utopia sem Deus, onde o eu é entronizado e o Arquiteto, esquecido.",
      "E ainda que os mortais permaneçam, em sua maioria, ignorantes à Guerra Eterna, ela é tão real quanto o ar que respiram. Ela os cerca, move reinos, agita corações, muda o curso da história.",
    ],
    falaHelel: "Servir a essas criaturas menores? Ser julgado por elas? Absurdo.",
    citaHelel: "Helel, Rei dos Rebeldes",
    rotuloBase: "A base",
    tituloMitologia: "Mitologia cristã",
    mitologiaP: [
      "Mukō-Gawa é uma obra enraizada na mitologia cristã. Embora permaneça fiel à narrativa bíblica, inspira-se na disciplina do sinergismo bíblico: uma abordagem que honra as Escrituras enquanto dialoga com a história, a tradição e a imaginação, para edificar um mundo que se encaixa nas linhas e entrelinhas daquilo que a Bíblia revela. Ainda que o autor tenha a precisão bíblica em alta estima, Mukō-Gawa é, em essência, uma obra de ficção. Os eventos das Escrituras permanecem intocados, mas o que acontece entre os versículos é moldado pela fantasia. Anjos guerreiam por trás do véu. Poderes se movem no invisível. Escolhas reverberam entre os reinos.",
      "É necessário também dizer: há muitas escolas de interpretação bíblica, e escolher um caminho é, inevitavelmente, deixar outros. Mukō-Gawa não busca agradar toda escola de interpretação; busca, antes, contar a maior de todas as histórias: a História da Redenção.",
    ],
    rotuloAviso: "Aviso",
    aviso: "Mukō-Gawa é uma suposição de fantasia sombria — uma releitura de temas bíblicos tecida em um mundo mítico de guerra invisível e consequência eterna. Contém conteúdo adulto, incluindo violência intensa, elementos temáticos sombrios e narrativa emocionalmente intensa. Recomendado para público adulto.",
  },

  en: {
    titulo: "Story",
    descricao: "Before humanity, a civilization went to war over the shape of reality. The three series, the Defiled Well and the War for Mankind in Mukō-Gawa.",
    rotuloAbertura: "The story",
    h1: "Before humanity, a civilization went to war over the shape of reality.",
    aberturaP1: "Much like the Norse sagas and the Greek epics, Mukō-Gawa is a deep dive into Christian mythology. The narrative tells of Creation and Redemption, as a celestial war culminates in eternal peace.",
    aberturaP2: "Mukō-Gawa follows a civil war among a proto-human people who contend on an interdimensional plane — the fold between what is and what was promised. Two orders emerge from one bloodline: those who would hold the plane closed, and those who would tear it open.",
    rotuloEternos: "The Eternals",
    tituloEternos: "Who the Eternals are",
    eternosP: [
      "The Eternals are the angelic race, the children of the sky, called into being to range across creation, to steward it and to cultivate it. They do not multiply as men do: they are summoned in hosts, and time does not wear them down.",
      "Two natures separate the Eternal from the man. The Eternal is spirit, and spirit alone. Man is spirit and soul, both sheltered in a body. It is that double nature, and not strength, that makes him the centre of the war.",
      "Every Eternal finds a calling within himself, an inclination that moves him before any order is given: toward service, toward wisdom, toward beauty, toward strength. In time the calling hardens into rank. The nine classes are born from it.",
      "And none of this is seen. The Eternal crosses the world of men unperceived. The war that decides their fate passes beside them, and they do not see it.",
    ],
    rotuloLados: "The two sides",
    tituloLados: "The Host and the Guest",
    ladosP: [
      "The Host is the army of Eternals who stayed loyal to the Almighty. It is ordered into three Echelons and led by generals such as Michael: the standing force of the Heavens, bound to a war that does not stop.",
      "The Guest are those who followed Helel into rebellion and fell with him. After the fall they raised a faction of their own and named it in mockery of the one they left: Host and Guest, order and the inversion of order.",
      "The Host calls them the Defilers. They do not call themselves that. It is a name from the mouth of the enemy, and it carries what the enemy thinks of them.",
    ],
    rotuloEras: "The ages",
    tituloEras: "The time this story runs through",
    leadEras: "The narrative spans from the surge of the Ancient beings who predate mankind to an eschatological closure that is both beautiful and haunting. Protogenesis tells of the Age of Stars until the age of man.",
    eras: [
      { nome: "The Age of Stars", texto: "The earliest age. The Eternals range across the cosmos, chart it and cultivate it, and it is in this time that each one finds his calling." },
      { nome: "The Sundering", texto: "Helel's refusal splits the Host in two and kindles the Celestial War." },
      { nome: "The age of man", texto: "The history of men runs on the surface and the war runs beneath it, unseen. The yomikiri and the Saga are set in this age." },
      { nome: "The Reckoning", texto: "Though the reckoning is ignored by some, it ought to be feared by all, for none can escape it. The collision of the eternal realm onto the realm of mortals is unavoidable. And so is the end." },
    ],
    rotuloObra: "The work",
    tituloSeries: "Three series",
    series: [
      { nome: "Saga", selo: "Five seasons // Five books // Main manga arc",
        texto: "Saga is the tale of redemption told from the other side. A brutal war fought through sword and mind, where legions descend upon their foes and generals wield not only power, but strategy. Divided into five seasons, Saga unfolds the eternal conflict between the Host and the Guest, as the fate of mankind hangs in the balance." },
      { nome: "Protogenesis", selo: "Prequel // Feature film & book",
        texto: "Protogenesis is the origin: a mythic retelling of what transpired before the war began, standing to Saga as The Silmarillion stands to The Lord of the Rings. Planned as a feature film, Protogenesis will be released between Seasons Two and Three, offering depth, context, and ancient history." },
      { nome: "Unveiled", selo: "Epilogue // Feature film & book",
        texto: "Unveiled is the final light. After the climactic end of Season Five, many will be left wondering what became of their favourite characters. Unveiled is a post-series film, created to bring resolution, mystery and closure — the final act in the Mukō-Gawa journey." },
    ],
    rotuloPreco: "The price",
    tituloPoco: "The Defiled Well",
    pocoP: [
      "After the Rebellion, the Defilers discovered that the Living Waters of the High Heavens no longer welcomed them. What once healed now burned. In defiance, they stole the sacred waters and brought them into the Abyss. There, under the gaze of King Snake, the stolen grace was twisted through forbidden alchemy, giving rise to the Defiled Well.",
      "The Well offers restoration, but at a price. Each visit corrodes the soul. Forms twist, essence decays, and some are defiled beyond recognition, becoming Tormentors — wretches unleashed upon mankind to sow confusion and dread.",
      "Though the Well grants dark power, there is still reverence for those who retain their original form. To remain uncorrupted is rare among the fallen, and it speaks of a terrifying strength. For in the Abyss, corruption is power, but endurance is glory.",
    ],
    rotuloRuptura: "The rupture",
    tituloGuerra: "War for Mankind",
    guerraP: [
      "During the Age of Stars, the Heavenly Council was assembled, and the Almighty revealed His design: to bring forth a new world, an inhabitable planet where a new species would rise. They would be called mankind. Unlike the Eternals, they would not be born in hosts but would multiply across the earth, shaped from dust yet bearing the image of the One who formed them. In time, they would be welcomed into the fellowship of Heaven.",
      "But then came the greater mystery, one that stirred the heavens and set eternity on edge: the Eternals would serve mankind in this age. And in the age to come, mankind would serve as arbiters over them.",
      "It was in that moment that Helel's heart turned to stone. He refused the decree. What began as pride became open defiance, and in his heart he coveted the Throne itself. No longer veiled, his rebellion erupted against the Most High, igniting the civil war among the Eternals. In his eyes, the subjugation of mankind is not merely strategy, but self-preservation. In secret, he builds a paradise — a godless utopia, where the self is enthroned and the Architect forgotten.",
      "And though mortals remain, for the most part, blind to the Eternal War, it is no less real. It surrounds them, shaping kingdoms, stirring hearts, shifting the course of history.",
    ],
    falaHelel: "To serve these lesser creatures? To be judged by them? Absurd.",
    citaHelel: "Helel, King of the Guest",
    rotuloBase: "The foundation",
    tituloMitologia: "Christian mythology",
    mitologiaP: [
      "Mukō-Gawa is a work rooted in Christian mythology. While remaining faithful to the biblical narrative, it draws upon the discipline of biblical synergism — an approach that honours Scripture while engaging with history, tradition and theological imagination to build a world that fits within the contours of what the Bible reveals. Though the writer holds biblical accuracy in high regard, Mukō-Gawa is ultimately a work of fiction. The events of Scripture remain untouched, but what happens between the lines is shaped by fantasy. Angels clash behind the veil. Powers move unseen. Choices ripple across realms.",
      "It must also be said: there are many schools of biblical interpretation. To choose one path is, inevitably, to leave others behind. Mukō-Gawa does not pretend to please every doctrine; it seeks, rather, to tell the greatest story of all — the Tale of Redemption.",
    ],
    rotuloAviso: "Advisory",
    aviso: "Mukō-Gawa is a dark fantasy supposal — a reimagining of biblical themes woven into a mythic world of unseen war and eternal consequence. It contains mature content, including intense violence, dark thematic elements and emotionally charged storytelling. Recommended for a mature audience.",
  },

  // Traduzido do PT-BR. Pendente de revisão.
  es: {
    titulo: "Historia",
    descricao: "Antes de la humanidad, una civilización entró en guerra por la forma de la realidad. Las tres series, las Fuentes Profanas y la Guerra por la Humanidad en Mukō-Gawa.",
    rotuloAbertura: "La historia",
    h1: "Antes de la humanidad, una civilización entró en guerra por la forma de la realidad.",
    aberturaP1: "Como las sagas nórdicas y las epopeyas griegas, Mukō-Gawa es una inmersión profunda en la mitología cristiana. La narrativa cuenta la Creación y la Redención, mientras una guerra celestial culmina en paz eterna.",
    aberturaP2: "Mukō-Gawa sigue una guerra civil entre un pueblo protohumano que disputa un plano interdimensional: el pliegue entre lo que es y lo que fue prometido. Dos órdenes nacen de un mismo linaje: la que quiere mantener el plano cerrado y la que quiere romperlo.",
    rotuloEternos: "Los Eternos",
    tituloEternos: "Quiénes son los Eternos",
    eternosP: [
      "Los Eternos son la raza angélica, los hijos del cielo, llamados a existir para recorrer la creación, guardarla y cultivarla. No se multiplican como los hombres: son convocados en legiones, y el tiempo no los desgasta.",
      "Dos naturalezas separan al Eterno del hombre. El Eterno es espíritu, y solo espíritu. El hombre es espíritu y alma, ambos albergados en un cuerpo. Es esa doble naturaleza, y no la fuerza, la que lo vuelve el centro de la guerra.",
      "Cada Eterno descubre en sí un llamado, una inclinación que lo mueve antes de cualquier orden: al servicio, a la sabiduría, a la belleza, a la fuerza. Con el tiempo el llamado se endurece y se vuelve rango. De ahí nacen las nueve clases.",
      "Y nada de esto se ve. El Eterno atraviesa el mundo de los hombres sin ser percibido. La guerra que decide su destino pasa a su lado, y ellos no la ven.",
    ],
    rotuloLados: "Los dos bandos",
    tituloLados: "La Hueste y los Rebeldes",
    ladosP: [
      "La Hueste es el ejército de los Eternos que permanecieron fieles al Altísimo. Está ordenada en tres Escalones y la conducen generales como Miguel: la fuerza permanente de los Cielos, empeñada en la guerra que no cesa.",
      "Los Rebeldes son quienes siguieron a Helel en la insurrección y cayeron con él. Tras la caída levantaron facción propia, espejo torcido de aquella que dejaron: donde había orden, pusieron el revés del orden.",
      "La Hueste los llama Profanadores. Ellos no se llaman así. Es nombre venido de la boca del enemigo, y lleva lo que el enemigo piensa de ellos.",
    ],
    rotuloEras: "Las eras",
    tituloEras: "El tiempo de esta historia",
    leadEras: "La narrativa va del surgimiento de los Antiguos, que preceden a la humanidad, al desenlace escatológico: bello y sobrecogedor en igual medida. Protogenesis cubre de la Era de las Estrellas hasta la era de los hombres.",
    eras: [
      { nome: "La Era de las Estrellas", texto: "La era más antigua. Los Eternos recorren el cosmos, lo cartografían y lo cultivan, y es en este tiempo cuando cada uno encuentra su llamado." },
      { nome: "El Cisma", texto: "La negativa de Helel parte la Hueste en dos y enciende la Guerra Celestial." },
      { nome: "La era de los hombres", texto: "La historia de los hombres corre en la superficie y la guerra corre por debajo, invisible. En esta era transcurren el yomikiri y la Saga." },
      { nome: "El Ajuste de Cuentas", texto: "Aunque muchos lo ignoren, debería ser temido por todos, pues nadie escapa de él. La colisión del reino eterno sobre el reino de los mortales es inevitable. Y el fin también." },
    ],
    rotuloObra: "La obra",
    tituloSeries: "Tres series",
    series: [
      { nome: "Saga", selo: "Cinco temporadas // Cinco libros // Arco principal del manga",
        texto: "Saga es el relato de la redención contado desde el otro lado: una guerra brutal librada con espada y mente, donde legiones descienden sobre sus enemigos y los generales empuñan no solo poder, sino estrategia. Dividida en cinco temporadas, Saga desvela el conflicto eterno entre la Hueste y el Rebelde, mientras el destino de la humanidad pende de un hilo." },
      { nome: "Protogenesis", selo: "Precuela // Largometraje y libro",
        texto: "Protogenesis es el origen. Así como El Silmarillion es a El Señor de los Anillos, Protogenesis sirve de preludio a Saga: un recuento mítico de los acontecimientos que precedieron a la guerra. Planeado como largometraje, se estrenará entre la Segunda y la Tercera Temporada, ofreciendo profundidad, contexto y el peso de la historia antigua." },
      { nome: "Desvelar", selo: "Epílogo // Largometraje y libro",
        texto: "Desvelar es la luz final. Tras el desenlace arrollador de la Quinta Temporada, muchos se preguntarán qué fue de sus personajes favoritos. Desvelar es la película posterior a la serie, creada para traer resolución, misterio y cierre: el último acto del viaje de Mukō-Gawa." },
    ],
    rotuloPreco: "El precio",
    tituloPoco: "Las Fuentes Profanas",
    pocoP: [
      "Tras la Rebelión, los Profanadores descubrieron que las Aguas Vivas de los Altos Cielos ya no los acogían. Lo que antes curaba, ahora quemaba. En desafío, robaron las aguas sagradas y las llevaron al Abismo. Allí, bajo la mirada del Rey Serpiente, la gracia robada fue distorsionada por alquimia prohibida, dando origen al Pozo Profanado.",
      "El Pozo ofrece restauración, pero a un precio. Cada inmersión corroe el espíritu. Las formas se retuercen, la esencia se pudre, y algunos quedan mancillados más allá del reconocimiento, transformándose en Flageladores: criaturas de tormento, liberadas sobre la humanidad para sembrar confusión y temor.",
      "Aunque el Pozo conceda poder sombrío, hay reverencia entre los caídos por aquellos que mantienen su forma original. Permanecer incorrupto es raro, y habla de una fuerza terrible. Pues en el Abismo, la corrupción es poder, pero la resistencia es gloria.",
    ],
    rotuloRuptura: "La ruptura",
    tituloGuerra: "La Guerra por la Humanidad",
    guerraP: [
      "Durante la Era de las Estrellas, el Consejo Celestial fue convocado, y el Altísimo reveló Su designio: traer a la existencia un mundo nuevo, un planeta habitable donde una nueva especie se alzaría. Los llamaría humanos. A diferencia de los Eternos, no nacerían en legiones, sino que se multiplicarían sobre la tierra, moldeados del polvo, llevando aun así la imagen de Aquel que los formó. Con el tiempo, serían recibidos en la comunión de los Cielos.",
      "Pero entonces vino el gran misterio, aquel que hizo estremecer el firmamento y puso la eternidad en suspenso: los Eternos servirían a la humanidad en esta era, y en la venidera, la humanidad juzgaría sobre ellos. Fue en ese instante que el corazón de Helel se volvió piedra.",
      "Helel rechazó el decreto. Lo que empezó como orgullo se volvió rebelión abierta, y en su interior codició el Trono mismo. Sin más disfraces, su insurgencia se alzó contra el Altísimo, y la Guerra Civil estalló entre los Eternos. A los ojos de Helel, la subyugación de la humanidad no es solo estrategia, es autopreservación. En secreto, él construye un paraíso: una utopía sin Dios, donde el yo es entronizado y el Arquitecto, olvidado.",
      "Y aunque los mortales permanezcan, en su mayoría, ignorantes de la Guerra Eterna, ella es tan real como el aire que respiran. Los rodea, mueve reinos, agita corazones, cambia el curso de la historia.",
    ],
    falaHelel: "¿Servir a esas criaturas menores? ¿Ser juzgado por ellas? Absurdo.",
    citaHelel: "Helel, Rey de los Rebeldes",
    rotuloBase: "La base",
    tituloMitologia: "Mitología cristiana",
    mitologiaP: [
      "Mukō-Gawa es una obra enraizada en la mitología cristiana. Aunque permanece fiel a la narrativa bíblica, se inspira en la disciplina del sinergismo bíblico: un enfoque que honra las Escrituras mientras dialoga con la historia, la tradición y la imaginación, para edificar un mundo que encaja en las líneas y entrelíneas de lo que la Biblia revela. Aunque el autor tiene la precisión bíblica en alta estima, Mukō-Gawa es, en esencia, una obra de ficción. Los eventos de las Escrituras permanecen intactos, pero lo que ocurre entre los versículos es moldeado por la fantasía. Ángeles guerrean tras el velo. Poderes se mueven en lo invisible. Elecciones reverberan entre los reinos.",
      "Es necesario decir también: hay muchas escuelas de interpretación bíblica, y elegir un camino es, inevitablemente, dejar otros. Mukō-Gawa no busca agradar a toda escuela de interpretación; busca, antes, contar la mayor de todas las historias: la Historia de la Redención.",
    ],
    rotuloAviso: "Aviso",
    aviso: "Mukō-Gawa es una suposición de fantasía oscura: una relectura de temas bíblicos tejida en un mundo mítico de guerra invisible y consecuencia eterna. Contiene contenido adulto, incluyendo violencia intensa, elementos temáticos sombríos y narrativa emocionalmente intensa. Recomendado para público adulto.",
  },

  // Base: site modelo. Pendente de revisão.
  ja: {
    titulo: "物語",
    descricao: "人類より前に、ひとつの文明が現実の形をめぐって戦った。『向こう側』の三つのシリーズ、汚された井戸、そして人のための戦。",
    rotuloAbertura: "物語",
    h1: "人類より前に、ひとつの文明が現実の形をめぐって戦った。",
    aberturaP1: "北欧のサガやギリシアの叙事詩のように、『向こう側』はキリスト教神話への深い潜行である。創造と贖罪の物語を語り、天上の戦は永遠の平和へと至る。",
    aberturaP2: "『向こう側』は、次元の狭間 — 現にあるものと約束されたものとの折り目 — を争う原人類の内戦を描く。ひとつの血統から二つの秩序が生まれる。狭間を閉じたままにする者と、引き裂こうとする者。",
    rotuloEternos: "永遠者",
    tituloEternos: "永遠者とは何者か",
    eternosP: [
      "永遠者は天使の種族であり、天の子らである。創造を巡り、守り、育てるために呼び出された。人のように殖えることはない。群として召され、時に磨り減ることもない。",
      "永遠者と人を分かつのは二つの本性である。永遠者は霊であり、霊のみである。人は霊と魂の双方を、体に宿して持つ。人を戦の中心に据えるのは力ではなく、この二重の本性である。",
      "永遠者はおのおの自らのうちに召しを見いだす。命じられる前から己を動かす傾きである。奉仕へ、知恵へ、美へ、力へ。時とともに召しは固まり、位となる。九つの階級はそこから生まれた。",
      "そしてそのいずれも見られることはない。永遠者は人の世を、気づかれぬまま渡る。彼らの運命を決める戦は、すぐ傍らを過ぎてゆく。人はそれを見ない。",
    ],
    rotuloLados: "二つの陣営",
    tituloLados: "天軍と客人",
    ladosP: [
      "天軍は、全能者に忠実であり続けた永遠者たちの軍である。三つの階梯に編まれ、ミカエルのような将が率いる。已むことなき戦に就く、天の常備の力である。",
      "客人は、ヘレルの叛乱に従い、ともに堕ちた者たちである。堕ちたのち自らの陣営を立て、去った側を嘲るように名づけた。天軍に対する客人。秩序に対する、秩序の裏返しである。",
      "天軍は彼らを汚す者と呼ぶ。彼ら自身はそう名乗らない。敵の口から出た名であり、敵が彼らをどう見ているかを担っている。",
    ],
    rotuloEras: "時代",
    tituloEras: "この物語が渡る時",
    leadEras: "物語は、人類に先立つ古き者たちの興りから、美しくも慄然たる終末の結びまでを渡る。『Protogenesis』が語るのは、星の時代から人の時代までである。",
    eras: [
      { nome: "星の時代", texto: "最も古い時代。永遠者は宇宙を巡り、図に写し、育てた。おのおのが自らの召しを見いだすのも、この時である。" },
      { nome: "断絶", texto: "ヘレルの拒みが天軍を二つに割り、天上の戦に火を点ける。" },
      { nome: "人の時代", texto: "人の歴史が表を流れ、戦はその下を、見えぬまま流れる。読み切りと『Saga』は、この時代に置かれている。" },
      { nome: "清算", texto: "軽んじる者もあるが、本来はすべての者が恐れるべきものである。何者も逃れ得ぬからだ。永遠の界が死すべき者の界へ落ちかかることは避けられない。終わりもまた同じである。" },
    ],
    rotuloObra: "作品",
    tituloSeries: "三つのシリーズ",
    series: [
      { nome: "Saga", selo: "全五シーズン // 全五巻 // 漫画本編",
        texto: "『Saga』は向こう側から語られる贖罪の物語。剣と知略で戦われる過酷な戦であり、軍団が敵に降り、将は力のみならず戦略を振るう。全五シーズンにわたり、天軍と客人の永遠の相克を、人の運命を天秤に載せながら描く。" },
      { nome: "Protogenesis", selo: "前史 // 劇場長編・書籍",
        texto: "『Protogenesis』は起源である。『指輪物語』に対する『シルマリルの物語』のように、『Saga』の前史として、戦の始まる前に何が起きたかを神話として語り直す。劇場長編として企画され、第二シーズンと第三シーズンの間に公開予定。深みと文脈、そして古き歴史を届ける。" },
      { nome: "Unveiled", selo: "終章 // 劇場長編・書籍",
        texto: "『Unveiled』は最後の光。第五シーズンの終幕のあと、多くの者が愛した人物たちの行方を思うだろう。『Unveiled』はシリーズ後の劇場作品として、決着と謎と結びをもたらす——『向こう側』の旅の最終幕である。" },
    ],
    rotuloPreco: "代価",
    tituloPoco: "汚された井戸",
    pocoP: [
      "叛乱の後、汚す者たちは高き天の生ける水がもはや自分たちを受け入れぬことを知った。かつて癒したものが、いまは焼いた。彼らは抗って聖なる水を奪い、深淵へ持ち込んだ。そこで蛇の王の眼差しのもと、盗まれた恵みは禁じられた錬成によって歪められ、汚された井戸が生じた。",
      "井戸は回復を与えるが、代価を取る。訪れるたびに魂が蝕まれる。形は捩れ、本質は朽ち、見分けもつかぬまでに汚された者は責め苦の者となり、人の世に放たれて混乱と恐れを撒く。",
      "井戸が闇の力を授けるとはいえ、元の形を保つ者にはなお畏敬が向けられる。堕ちた者のうちで汚れずにいることは稀であり、それは恐るべき強さの証である。深淵において腐敗は力であり、耐えることは栄光なのだ。",
    ],
    rotuloRuptura: "断絶",
    tituloGuerra: "人のための戦",
    guerraP: [
      "星の時代、天の議会が召集され、全能者はその設計を明かした。新しい世界を——新たな種が興る、住まうべき星を——生じさせること。彼らは人と呼ばれる。永遠者と異なり、群として生まれるのではなく地に増え広がり、塵より形づくられながら、形づくった者の像を帯びる。時が満ちれば、天の交わりに迎えられる。",
      "だがそこに、天を揺らし永遠を瀬戸際に立たせる、より大きな神秘が続いた。この世において永遠者は人に仕える。そして来たるべき世において、人は彼らを裁く者となる。その瞬間、ヘレルの心は石となった。",
      "彼は勅を拒んだ。誇りとして始まったものは公然の叛意となり、その心は玉座そのものを欲した。もはや覆いもなく、彼の叛乱は至高者に向かって噴き上がり、永遠者の内戦に火を点けた。彼の目に、人を屈服させることは単なる戦略ではなく自己保存である。密かに彼は楽園を築く——神なき理想郷、自我が玉座に据えられ、設計者が忘れられた地を。",
      "そして人の子らはおおむね永遠の戦に目を閉ざしていても、その戦は少しも虚ではない。それは彼らを取り巻き、王国を形づくり、心を掻き立て、歴史の流れを移す。",
    ],
    falaHelel: "この劣った者どもに仕えよと? その者らに裁かれよと? 不条理だ。",
    citaHelel: "ヘレル、客人の王",
    rotuloBase: "土台",
    tituloMitologia: "キリスト教神話",
    mitologiaP: [
      "『向こう側』はキリスト教神話に根を持つ作品である。聖書の物語に忠実でありながら、聖書的シナジズムの手法を用いる——聖典を尊びつつ、歴史・伝統・神学的想像力と対話し、聖書が示す輪郭のうちに収まる世界を築く方法である。作者は聖書的正確さを重んじるが、『向こう側』は最終的に虚構の作品である。聖典の出来事はそのままに、行間で起こることは幻想によって形づくられる。天使は帷の背後で衝突し、力は見えぬまま動き、選択は界を越えて波を打つ。",
      "また言い添えねばならない。聖書解釈には多くの学派がある。ひとつの道を選ぶことは、必然的に他を置いていくことである。『向こう側』はあらゆる教義を満たすふりをしない。むしろ、最も偉大な物語——贖罪の物語——を語ろうとする。",
    ],
    rotuloAviso: "注意",
    aviso: "『向こう側』はダークファンタジーの想定譜である——聖書の主題を、見えぬ戦と永遠の帰結の神話世界に織り込んだ再構想。激しい暴力、陰鬱な主題、感情の重い語りを含む成人向け内容を含む。成人読者に推奨。",
  },
};
