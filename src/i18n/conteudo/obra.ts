/**
 * A obra — as oito sinopses, por idioma.
 *
 * O material veio do autor em 2026-08-02, em inglês, e foi revisado contra
 * conteudo/VOZ.md: as perguntas retóricas dirigidas ao leitor saíram (a voz do
 * mundo narra, nunca conversa) e o vocabulário devocional genérico deu lugar ao
 * léxico do próprio mundo — Altíssimo, Altos Céus, Véu.
 *
 * DUAS REGRAS QUE NÃO DEVEM SER DESFEITAS
 *
 * 1. Ninguém é nomeado. O autor escreve "um andarilho", "um sonhador", "um
 *    pastor de ovelhas", "aquele que os dois lados esperavam", e não os nomes
 *    correspondentes. É deliberado: quem conhece as referências reconhece, quem
 *    não conhece lê dark fantasy e não tropeça. Nenhum rótulo, título ou meta
 *    descrição desta página pode dizer "história bíblica", "Antigo Testamento",
 *    "Gênesis" ou "Apocalipse" — o reconhecimento é do leitor, não do site.
 *
 * 2. `aberta: false` a partir da Saga III. Dali em diante a sinopse conta o
 *    rumo da história, e Desvelar entrega o desfecho. Numa página que se rola
 *    de cima a baixo, o leitor toparia com o fim sem ter escolhido.
 *
 * A ordem aqui é a CRONOLOGIA DA HISTÓRIA, não a ordem de leitura recomendada
 * (que é outra, e vive no FAQ: começar por Saga, com Protogenesis entre a
 * Segunda e a Terceira Temporada).
 */
import type { Idioma } from "../idiomas";

export interface Obra {
  num: string;
  nome: string;
  selo: string;
  sinopse: string[];
  /** Aberta de saída, ou recolhida atrás do aviso de que revela o rumo. */
  aberta: boolean;
}

interface ConteudoObra {
  titulo: string;
  descricao: string;
  rotulo: string;
  h1: string;
  lead: string;
  notaOrdem: string;
  avisoRecolhida: string;
  abrir: string;
  obras: Obra[];
}

export const OBRA: Record<Idioma, ConteudoObra> = {
  pt: {
    titulo: "A obra",
    descricao: "As oito obras de Mukō-Gawa, na ordem em que a história acontece: Protogenesis, o yomikiri, as cinco temporadas da Saga e Desvelar.",
    rotulo: "A obra",
    h1: "Oito obras, uma história",
    lead: "Estão aqui na ordem em que a história acontece, e não na ordem em que se recomenda ler.",
    notaOrdem: "A ordem de leitura está no FAQ.",
    avisoRecolhida: "Revela o rumo da história",
    abrir: "Ler a sinopse",
    obras: [
      {
        num: "01", nome: "Protogenesis", aberta: true,
        selo: "Prequela // Longa-metragem e livro",
        sinopse: [
          "Antes que houvesse reinos de homens, houve um reino de luz. E uma guerra cujo eco atravessa tudo o que veio depois.",
          "Protogenesis acompanha um dos mais luminosos e dotados seres daquele reino: alguém que ajudou a erguer a própria ordem do mundo em que vivia, e que viu algo escuro criar raiz por dentro. Orgulho. Anseio. Fome de mais do que lhe fora dado. O que começa como uma pergunta silenciosa termina em rebelião, e a rebelião parte os céus.",
          "É a queda de quem tinha tudo, narrada com a escala de uma guerra entre mundos e a intimidade de alguém que se perde de si. Não se pergunta aqui como é cair em desgraça. Mostra-se por dentro.",
        ],
      },
      {
        num: "02", nome: "Yomikiri", aberta: true,
        selo: "Piloto // Primeiro a ser publicado // 1º de dezembro de 2026",
        sinopse: [
          "Logo além do que o olho humano alcança, trava-se uma guerra que o mundo não sabe que existe.",
          "O yomikiri é uma fresta aberta sobre esse campo de batalha: guerreiros que defendem um mundo sem ideia de estar sendo defendido, contra um inimigo já convencido de que venceu. Exaustos e em menor número, começam a duvidar que o que fazem aqui embaixo importe. E, num quarto silencioso ali perto, alguém está prestes a testar essa dúvida do modo mais miúdo e menos vistoso que se possa imaginar.",
          "Um gosto da saga maior, o yomikiri é sobre a distância entre a guerra dos Céus e a dor calada de uma casa. E sobre o que seria preciso para fechá-la.",
        ],
      },
      {
        num: "03", nome: "Saga I — Intercepção", aberta: true,
        selo: "Primeira temporada",
        sinopse: [
          "Muito antes que as nações tivessem nome, um homem deixou sua terra rumo a uma promessa que ainda não podia ver. E as potências que regiam o mundo o notaram.",
          "Saga I acompanha a jornada de um andarilho escolhido para algo maior que ele: reinos, fome, guerra, e uma aliança que sobreviverá a todo império que o observa. Ele não caminha sozinho, e não caminha despercebido. Acima dele, príncipes invisíveis repartem entre si o mundo antigo, medindo-se uns aos outros, medindo a velha ordem, rondando uma única linhagem que receberam ordem de quebrar antes que criasse raiz.",
          "E sob tudo isso, num lugar de onde nada vivo jamais escapou, move-se algo para o qual nem as potências das trevas estão prontas.",
          "Fé levada ao limite. Impérios que sobem e caem ao fundo da fidelidade silenciosa de uma família. E uma guerra travada por uma promessa que se recusa a morrer.",
        ],
      },
      {
        num: "04", nome: "Saga II — Êxodo", aberta: true,
        selo: "Segunda temporada",
        sinopse: [
          "Nem todo prisioneiro permanece sepultado. Nem toda promessa permanece pequena.",
          "Saga II retoma a guerra nas sombras, onde um inimigo quebrado se arrasta de volta da derrota com fome de desforra. Gerações abaixo, um sonhador é vendido como escravo, lançado às profundezas de um império e esquecido por todos, menos pelo Altíssimo, que lhe pôs o sonho no peito.",
          "O que se segue é sobre poder erguido em segredo: o que se sussurra nas cortes dos demônios e o que se forja em celas e sombras de palácio. Uma família se parte e, de algum modo, se refaz. Um menino cresce até virar alguém com quem reis precisam contar. E uma nação inteira, nascida de uma promessa impossível, vê-se escravizada sob o peso de um império que ainda não sabe o que solta ao recusar deixá-la ir.",
          "Acima de tudo, velhas contas seguem abertas. As potências que perderam a última guerra não pararam de tramar. E desta vez aprenderam com o próprio erro.",
        ],
      },
      {
        num: "05", nome: "Saga III — Um Rei Melhor", aberta: false,
        selo: "Terceira temporada",
        sinopse: [
          "A liberdade, ao que se vê, é um deserto à sua maneira.",
          "Saga III abre no rescaldo de um milagre: um povo liberto, um mar fechado às suas costas, um império partido. Mas libertação e devoção não são a mesma coisa, e a estrada adiante se mostra mais longa e mais estranha que a estrada deixada para trás. Sobre o acampamento, velhos inimigos não desistiram; apenas trocaram a guerra aberta por algo mais silencioso e mais paciente: a erosão lenta da esperança, uma queixa, uma dúvida, uma promessa quebrada por vez.",
          "Desse deserto a história avança para a pergunta que moldará tudo o que vem depois: o que é preciso, de fato, para ser um bom rei? Saga III segue a ascensão e o desfazimento das primeiras coroas: a ambição que azeda em paranoia, um pastor de ovelhas que entra numa herança grande demais para caber nele, e um reino que aprende do modo duro que o trono desejado não era o trono necessário.",
          "A guerra por trás do véu nem sempre tem forma de exército. Às vezes tem forma de coroa.",
        ],
      },
      {
        num: "06", nome: "Saga IV — O Filho do Homem", aberta: false,
        selo: "Quarta temporada",
        sinopse: [
          "Todo reino cai, mais cedo ou mais tarde. O que importa é o que fica de pé quando cai.",
          "Saga IV acompanha o desfazimento lento de uma nação: gerações de reis que esquecem a promessa recebida, profetas que veem o ajuste de contas chegar e não conseguem detê-lo, e uma Hoste obrigada a assistir ao juízo seguir seu curso em vez de intervir. Quando enfim as muralhas caem e o povo é arrastado ao exílio, parece, pela primeira vez na história, que o inimigo pode estar vencendo.",
          "Mas o exílio se torna um campo de batalha à parte. No coração de um império estrangeiro, um punhado de fiéis se recusa a dobrar: sobrevivem à fornalha, aos leões e às tramas de príncipes humanos e não humanos, e se tornam prova viva de que o cativeiro não alcança o que é de fato inabalável. E por trás do véu prepara-se uma guerra que sobe mais alto que qualquer trono da terra, insinuando um título, e uma figura, que mudarão o sentido da palavra reino.",
          "É a curva mais escura da história, e a sua promessa mais nítida: derrota, exílio e silêncio dos Altos Céus não são o fim. São a preparação daquilo que o inimigo teme desde o princípio.",
        ],
      },
      {
        num: "07", nome: "Saga V — Primogênito", aberta: false,
        selo: "Quinta temporada",
        sinopse: [
          "Uma estrela se levanta. Sábios abandonam seus reinos em silêncio para segui-la. E toda potência que passou cinco sagas tentando impedir exatamente este instante enfim compreende: é tarde.",
          "Saga V é a história que a guerra inteira rondava desde a primeira traição: a chegada daquele que os dois lados esperavam, sussurravam e temiam em igual medida. Ele cresce comum. Ensina. Cura. Desassossega reis e sacerdotes pelo simples fato de existir. E quanto mais se aproxima daquilo para que sempre esteve destinado, mais desesperadas ficam as forças reunidas contra ele.",
          "Reivindicações impossíveis, amor impossível, um reino anunciado não por exércitos, mas por humildade. E um confronto final que não se dá entre galáxias, mas ao longo de uma semana brutal, num canto pequeno do mundo.",
          "Aqui toda promessa feita desde o princípio ou se quebra, ou se cumpre.",
        ],
      },
      {
        num: "08", nome: "Desvelar", aberta: false,
        selo: "Epílogo // Longa-metragem e livro",
        sinopse: [
          "Toda guerra tem um fim. É aqui que o de Mukō-Gawa enfim chega.",
          "O Rei vitorioso retorna à casa, e por um instante parece que a história poderia repousar aí. Mas a guerra que atravessou as sagas não terminou: entra em seu capítulo derradeiro e mais explosivo. Uma chama se espalha sobre a terra, levada por gente que império nenhum esperava que importasse. E por trás do véu começa a contagem para o último confronto entre a Hoste e os Rebeldes.",
          "Selos rompidos, advertências soadas, e o acerto final entre todas as potências que moldaram esta história desde a primeira página. Tudo converge: cada promessa, cada traição, cada gesto silencioso de fé espalhado por gerações.",
          "É a saga em que o próprio véu cai, e a guerra iniciada pelo orgulho de um só encontra o seu fim.",
        ],
      },
    ],
  },

  en: {
    titulo: "The work",
    descricao: "The eight works of Mukō-Gawa, in the order the story happens: Protogenesis, the yomikiri, the five seasons of the Saga and Unveiled.",
    rotulo: "The work",
    h1: "Eight works, one story",
    lead: "They are laid out in the order the story happens, not in the order we recommend reading them.",
    notaOrdem: "The reading order is in the FAQ.",
    avisoRecolhida: "Reveals where the story goes",
    abrir: "Read the synopsis",
    obras: [
      {
        num: "01", nome: "Protogenesis", aberta: true,
        selo: "Prequel // Feature film & book",
        sinopse: [
          "Before there were kingdoms of men, there was a kingdom of light, and a war that would echo through everything that came after.",
          "Protogenesis follows one of the brightest, most gifted beings in that kingdom: a soul who helped build the very order of the world he lived in, only to watch something dark take root inside him. Pride. Longing. A hunger for more than he was given. What begins as a quiet question becomes a rebellion that shatters the heavens.",
          "It is the fall of someone who had everything, told with the scope of a war between worlds and the intimacy of one person losing themselves. The story does not ask what falling from grace might feel like. It shows it from the inside.",
        ],
      },
      {
        num: "02", nome: "Yomikiri", aberta: true,
        selo: "Pilot // First to be published // 1 December 2026",
        sinopse: [
          "Just beyond what human eyes can reach, a war is being fought that the world does not know exists.",
          "The yomikiri is a glimpse into that hidden battlefield: warriors defending a world that has no idea it is being defended, against an enemy already convinced it has won. Exhausted and outnumbered, they begin to doubt that anything they do down here matters. And in a quiet room nearby, someone is about to test that doubt in the smallest, least assuming way imaginable.",
          "A taste of the larger saga, the yomikiri is about the distance between heaven's war and one household's quiet, unresolved pain. And about what it would take to close it.",
        ],
      },
      {
        num: "03", nome: "Saga I — Interception", aberta: true,
        selo: "Season one",
        sinopse: [
          "Long before nations had names, a man walked out of one land toward a promise he could not yet see, and the powers ruling the world took notice.",
          "Saga I follows a wanderer chosen for something greater than himself, moving through kingdoms, famine, war, and a covenant that will outlast every empire watching him. He is not walking alone, and he is not walking unnoticed. Above him, unseen princes carve up the ancient world between them, testing each other, testing the old order, circling a single bloodline they have been ordered to break before it can take root.",
          "And somewhere beneath it all, in a place no living thing has ever escaped, something stirs that even the powers of darkness are not ready for.",
          "Faith tested to its limit. Empires rising and falling behind one family's quiet fidelity. And a war fought over a promise that refuses to die.",
        ],
      },
      {
        num: "04", nome: "Saga II — Exodus", aberta: true,
        selo: "Season two",
        sinopse: [
          "Some prisoners do not stay buried. Some promises do not stay small.",
          "Saga II picks up the war in the shadows, where a broken enemy claws his way back from defeat and hungers for a rematch. Generations below, a single dreamer is sold into slavery, cast into the depths of an empire, and forgotten by everyone except the Almighty, who put the dream in him.",
          "What follows is a story of power built in secret: the kind whispered in demon courts and the kind forged in prison cells and palace shadows. A family fractures and is somehow remade. A boy grows into someone kings must reckon with. And an entire nation, born of one impossible promise, finds itself enslaved beneath an empire that does not yet know what it unleashes by refusing to let them go.",
          "Above it all, old scores remain open. The powers that lost the last war never stopped plotting. This time they have learned from their mistakes.",
        ],
      },
      {
        num: "05", nome: "Saga III — A Better King", aberta: false,
        selo: "Season three",
        sinopse: [
          "Freedom, it turns out, is its own kind of wilderness.",
          "Saga III opens in the aftermath of a miracle: a people delivered, a sea closed behind them, an empire broken. But deliverance and devotion are not the same thing, and the road ahead proves longer and stranger than the road behind. Above the camp, old enemies have not given up; they have traded open war for something quieter and more patient: the slow erosion of hope, one complaint, one doubt, one broken promise at a time.",
          "From that wilderness the story moves toward the question that shapes everything after it: what does it actually take to be a good king? Saga III follows the rise and unravelling of the first crowns: ambition curdling into paranoia, a shepherd boy stepping into an inheritance too large to fit him, and a kingdom learning the hard way that the throne it wanted was not the throne it needed.",
          "The war behind the veil does not always look like armies. Sometimes it looks like a crown.",
        ],
      },
      {
        num: "06", nome: "Saga IV — The Son of Man", aberta: false,
        selo: "Season four",
        sinopse: [
          "Every kingdom falls eventually. What matters is what is left standing when it does.",
          "Saga IV follows a nation's slow unravelling: generations of kings who forget the promise they were given, prophets who see the reckoning coming and cannot stop it, and a Host forced to watch judgment run its course instead of intervening. When the walls finally fall and the people are dragged into exile, it looks, for the first time in the story, as though the enemy might be winning.",
          "But exile becomes its own battlefield. In the heart of a foreign empire, a handful of the faithful refuse to bend: they survive furnaces, lions and the schemes of princes both human and otherwise, becoming living proof that captivity cannot touch what is truly unshakable. And behind the veil a war is brewing that reaches higher than any earthly throne, hinting at a title, and a figure, that will change what the word kingdom means.",
          "It is the story's darkest turn and its clearest promise: defeat, exile and silence from the High Heavens are not the end. They are the setup for what the enemy has dreaded since the very beginning.",
        ],
      },
      {
        num: "07", nome: "Saga V — Firstborn", aberta: false,
        selo: "Season five",
        sinopse: [
          "A star rises. Scholars quietly abandon their kingdoms to follow it. And every power that has spent five sagas trying to stop this exact moment finally understands: they are too late.",
          "Saga V is the story the entire war has circled since the first betrayal: the arrival of the one both sides have been waiting for, whispered about, and dreading in equal measure. He grows up ordinary. He teaches. He heals. He unsettles kings and priests simply by existing. And the closer he comes to the purpose he was always meant for, the more desperate the forces arrayed against him become.",
          "Impossible claims and impossible love, a kingdom announced not with armies but with humility, and a final confrontation that plays out not across galaxies but across one brutal week in one small corner of the world.",
          "Here every promise made since the beginning either breaks, or is kept.",
        ],
      },
      {
        num: "08", nome: "Unveiled", aberta: false,
        selo: "Epilogue // Feature film & book",
        sinopse: [
          "Every war has an ending. This is where Mukō-Gawa's finally arrives.",
          "The victorious King returns home, and for a moment it looks as though the story could rest there. But the war that spanned the sagas is not finished: it is entering its final and most explosive chapter. A flame spreads across the earth, carried by people no empire ever expected to matter. And behind the veil, the countdown to the last confrontation between the Host and the Guest quietly begins.",
          "Seals broken, warnings sounded, and a final reckoning between every power that has shaped this story since its first page. Everything converges: every promise, every betrayal, every quiet act of faith scattered across generations.",
          "It is the saga where the veil itself comes down, and the war that began with one being's pride meets its end.",
        ],
      },
    ],
  },

  // Traduzido do PT-BR. Pendente de revisão por falante nativo.
  es: {
    titulo: "La obra",
    descricao: "Las ocho obras de Mukō-Gawa, en el orden en que ocurre la historia: Protogenesis, el yomikiri, las cinco temporadas de la Saga y Desvelar.",
    rotulo: "La obra",
    h1: "Ocho obras, una historia",
    lead: "Están aquí en el orden en que ocurre la historia, y no en el orden en que se recomienda leerlas.",
    notaOrdem: "El orden de lectura está en el FAQ.",
    avisoRecolhida: "Revela el rumbo de la historia",
    abrir: "Leer la sinopsis",
    obras: [
      {
        num: "01", nome: "Protogenesis", aberta: true,
        selo: "Precuela // Largometraje y libro",
        sinopse: [
          "Antes de que hubiera reinos de hombres, hubo un reino de luz. Y una guerra cuyo eco atraviesa todo lo que vino después.",
          "Protogenesis sigue a uno de los seres más luminosos y dotados de aquel reino: alguien que ayudó a levantar el orden mismo del mundo en que vivía, y que vio algo oscuro echar raíz por dentro. Orgullo. Anhelo. Hambre de más de lo que le fue dado. Lo que empieza como una pregunta silenciosa termina en rebelión, y la rebelión parte los cielos.",
          "Es la caída de quien lo tenía todo, narrada con la escala de una guerra entre mundos y la intimidad de alguien que se pierde de sí. No se pregunta aquí cómo es caer en desgracia. Se muestra por dentro.",
        ],
      },
      {
        num: "02", nome: "Yomikiri", aberta: true,
        selo: "Piloto // Primero en publicarse // 1 de diciembre de 2026",
        sinopse: [
          "Justo más allá de lo que el ojo humano alcanza, se libra una guerra que el mundo no sabe que existe.",
          "El yomikiri es una rendija abierta sobre ese campo de batalla: guerreros que defienden un mundo sin idea de estar siendo defendido, contra un enemigo ya convencido de que venció. Exhaustos y en inferioridad, empiezan a dudar de que lo que hacen aquí abajo importe. Y, en un cuarto silencioso allí cerca, alguien está a punto de poner a prueba esa duda del modo más menudo y menos vistoso que quepa imaginar.",
          "Un anticipo de la saga mayor, el yomikiri trata de la distancia entre la guerra de los Cielos y el dolor callado de una casa. Y de lo que haría falta para cerrarla.",
        ],
      },
      {
        num: "03", nome: "Saga I — Intercepción", aberta: true,
        selo: "Primera temporada",
        sinopse: [
          "Mucho antes de que las naciones tuvieran nombre, un hombre dejó su tierra rumbo a una promesa que aún no podía ver. Y las potencias que regían el mundo lo notaron.",
          "Saga I sigue el viaje de un caminante elegido para algo mayor que él: reinos, hambre, guerra, y una alianza que sobrevivirá a todo imperio que lo observa. No camina solo, y no camina inadvertido. Sobre él, príncipes invisibles se reparten el mundo antiguo, midiéndose unos a otros, midiendo el viejo orden, rondando un único linaje que recibieron orden de quebrar antes de que echara raíz.",
          "Y bajo todo esto, en un lugar del que nada vivo escapó jamás, se mueve algo para lo que ni las potencias de las tinieblas están listas.",
          "Fe llevada al límite. Imperios que suben y caen al fondo de la fidelidad silenciosa de una familia. Y una guerra librada por una promesa que se niega a morir.",
        ],
      },
      {
        num: "04", nome: "Saga II — Éxodo", aberta: true,
        selo: "Segunda temporada",
        sinopse: [
          "No todo prisionero permanece sepultado. No toda promesa permanece pequeña.",
          "Saga II retoma la guerra en las sombras, donde un enemigo quebrado se arrastra de vuelta desde la derrota con hambre de revancha. Generaciones más abajo, un soñador es vendido como esclavo, arrojado a las profundidades de un imperio y olvidado por todos, menos por el Altísimo, que le puso el sueño en el pecho.",
          "Lo que sigue trata del poder levantado en secreto: el que se susurra en las cortes de los demonios y el que se forja en celdas y sombras de palacio. Una familia se parte y, de algún modo, se rehace. Un niño crece hasta volverse alguien con quien los reyes deben contar. Y una nación entera, nacida de una promesa imposible, se ve esclavizada bajo el peso de un imperio que aún no sabe lo que suelta al negarse a dejarla ir.",
          "Por encima de todo, viejas cuentas siguen abiertas. Las potencias que perdieron la última guerra no dejaron de tramar. Y esta vez aprendieron de su propio error.",
        ],
      },
      {
        num: "05", nome: "Saga III — Un Rey Mejor", aberta: false,
        selo: "Tercera temporada",
        sinopse: [
          "La libertad, según se ve, es un desierto a su manera.",
          "Saga III abre tras el rescoldo de un milagro: un pueblo liberado, un mar cerrado a sus espaldas, un imperio partido. Pero liberación y devoción no son lo mismo, y el camino por delante resulta más largo y más extraño que el camino dejado atrás. Sobre el campamento, viejos enemigos no se rindieron; solo cambiaron la guerra abierta por algo más silencioso y más paciente: la erosión lenta de la esperanza, una queja, una duda, una promesa rota por vez.",
          "De ese desierto la historia avanza hacia la pregunta que moldeará todo lo que viene después: ¿qué hace falta, de hecho, para ser un buen rey? Saga III sigue el ascenso y el deshacerse de las primeras coronas: la ambición que se agria en paranoia, un pastor de ovejas que entra en una herencia demasiado grande para caberle, y un reino que aprende del modo duro que el trono deseado no era el trono necesario.",
          "La guerra tras el velo no siempre tiene forma de ejército. A veces tiene forma de corona.",
        ],
      },
      {
        num: "06", nome: "Saga IV — El Hijo del Hombre", aberta: false,
        selo: "Cuarta temporada",
        sinopse: [
          "Todo reino cae, tarde o temprano. Lo que importa es qué queda en pie cuando cae.",
          "Saga IV sigue el deshacerse lento de una nación: generaciones de reyes que olvidan la promesa recibida, profetas que ven llegar el ajuste de cuentas y no logran detenerlo, y una Hueste obligada a mirar cómo el juicio sigue su curso en vez de intervenir. Cuando por fin las murallas caen y el pueblo es arrastrado al exilio, parece, por primera vez en la historia, que el enemigo podría estar venciendo.",
          "Pero el exilio se vuelve un campo de batalla aparte. En el corazón de un imperio extranjero, un puñado de fieles se niega a doblarse: sobreviven al horno, a los leones y a las tramas de príncipes humanos y no humanos, y se vuelven prueba viva de que el cautiverio no alcanza lo que es de veras inquebrantable. Y tras el velo se prepara una guerra que sube más alto que cualquier trono de la tierra, insinuando un título, y una figura, que cambiarán el sentido de la palabra reino.",
          "Es la curva más oscura de la historia, y su promesa más nítida: derrota, exilio y silencio de los Altos Cielos no son el fin. Son la preparación de aquello que el enemigo teme desde el principio.",
        ],
      },
      {
        num: "07", nome: "Saga V — Primogénito", aberta: false,
        selo: "Quinta temporada",
        sinopse: [
          "Una estrella se levanta. Sabios abandonan sus reinos en silencio para seguirla. Y toda potencia que pasó cinco sagas tratando de impedir exactamente este instante por fin comprende: es tarde.",
          "Saga V es la historia que la guerra entera rondaba desde la primera traición: la llegada de aquel a quien ambos bandos esperaban, susurraban y temían por igual. Crece común. Enseña. Cura. Desasosiega a reyes y sacerdotes por el simple hecho de existir. Y cuanto más se acerca a aquello para lo que siempre estuvo destinado, más desesperadas se vuelven las fuerzas reunidas contra él.",
          "Reivindicaciones imposibles, amor imposible, un reino anunciado no por ejércitos, sino por humildad. Y un enfrentamiento final que no ocurre entre galaxias, sino a lo largo de una semana brutal, en un rincón pequeño del mundo.",
          "Aquí toda promesa hecha desde el principio o se quiebra, o se cumple.",
        ],
      },
      {
        num: "08", nome: "Desvelar", aberta: false,
        selo: "Epílogo // Largometraje y libro",
        sinopse: [
          "Toda guerra tiene un fin. Es aquí donde el de Mukō-Gawa por fin llega.",
          "El Rey victorioso vuelve a casa, y por un instante parece que la historia podría reposar ahí. Pero la guerra que atravesó las sagas no terminó: entra en su capítulo último y más explosivo. Una llama se extiende sobre la tierra, llevada por gente que ningún imperio esperaba que importara. Y tras el velo empieza la cuenta atrás para el último enfrentamiento entre la Hueste y los Rebeldes.",
          "Sellos rotos, advertencias sonadas, y el ajuste final entre todas las potencias que moldearon esta historia desde la primera página. Todo converge: cada promesa, cada traición, cada gesto silencioso de fe esparcido por generaciones.",
          "Es la saga en que el velo mismo cae, y la guerra iniciada por el orgullo de uno solo encuentra su fin.",
        ],
      },
    ],
  },

  // Traduzido a partir do PT e do EN. Pendente de revisão por falante nativo.
  ja: {
    titulo: "作品",
    descricao: "『向こう側』の八つの作品を、物語の起きる順に。『Protogenesis』、読み切り、『Saga』全五シーズン、そして『Unveiled』。",
    rotulo: "作品",
    h1: "八つの作品、ひとつの物語",
    lead: "ここに並ぶのは物語の起きる順であり、読む順ではない。",
    notaOrdem: "読む順はFAQに記している。",
    avisoRecolhida: "物語の行方に触れる",
    abrir: "あらすじを読む",
    obras: [
      {
        num: "01", nome: "Protogenesis", aberta: true,
        selo: "前史 // 劇場長編・書籍",
        sinopse: [
          "人の王国があるより前に、光の王国があった。そして、後に来るすべてに響き渡る戦があった。",
          "『Protogenesis』が追うのは、その王国で最も輝き、最も恵まれた者のひとりである。自らが生きる世界の秩序を築くのを助けながら、内に暗いものが根を張るのを見た者。誇り。渇き。与えられた以上を求める飢え。静かな問いとして始まったものが叛乱に終わり、叛乱は天を裂く。",
          "すべてを持っていた者の墜落を、世界と世界の戦の規模で、そして自らを見失っていく一者の近さで語る。堕ちるとはどういうことかを、この物語は問わない。内側から見せる。",
        ],
      },
      {
        num: "02", nome: "読み切り", aberta: true,
        selo: "パイロット // 最初の刊行 // 2026年12月1日",
        sinopse: [
          "人の目の届くすぐ先で、世界がその存在を知らぬ戦が行われている。",
          "読み切りは、その隠された戦場を覗く一条の隙間である。守られていることを知らぬ世界を守る戦士たち。すでに勝ったと信じ切った敵。疲れ果て、数でも劣り、彼らはこの下で自分たちのすることに意味があるのかを疑いはじめる。そして、すぐ近くの静かな部屋で、誰かがその疑いを、考えうるかぎり最も小さく目立たぬやり方で試そうとしている。",
          "大きな物語の一片として、読み切りは天の戦と、ひとつの家の言わぬ痛みとの隔たりを描く。そして、その隔たりを閉じるのに何が要るのかを。",
        ],
      },
      {
        num: "03", nome: "Saga I — Interception", aberta: true,
        selo: "第一シーズン",
        sinopse: [
          "国々がまだ名を持たぬ遥か昔、ひとりの男が、まだ見えぬ約束に向かって自らの地を出た。そして世を統べる力がそれに目を留めた。",
          "『Saga I』が追うのは、己より大いなるもののために選ばれた漂泊者の旅路である。王国、飢饉、戦、そして彼を見張るいかなる帝国よりも長らえる契約。彼はひとりで歩いてはおらず、気づかれずに歩いてもいない。頭上では見えざる君主たちが古き世を分け合い、互いを測り、旧き秩序を測り、根づく前に断てと命じられたひとつの血統の周りを巡っている。",
          "そしてそのすべての下、生ある者がひとりとして逃れたことのない場所で、闇の力さえ備えのないものが動く。",
          "極限まで試される信。ひとつの家の静かな忠実の背後で興り、また滅びる帝国。そして、死ぬことを拒む約束をめぐって戦われる戦。",
        ],
      },
      {
        num: "04", nome: "Saga II — Exodus", aberta: true,
        selo: "第二シーズン",
        sinopse: [
          "葬られたまま留まらぬ囚人がいる。小さいまま留まらぬ約束がある。",
          "『Saga II』は影の中の戦を継ぐ。砕かれた敵が敗北から這い戻り、雪辱に飢える。幾世代か下では、ひとりの夢見る者が奴隷として売られ、帝国の底へ投げ込まれ、すべての者に忘れられる。その胸に夢を置いた全能者を除いて。",
          "続くのは、秘して築かれる力の物語である。悪魔の宮廷で囁かれる力と、牢と宮廷の影で鍛えられる力。ひとつの家が割れ、どうにかして結び直される。ひとりの少年が、王たちが数に入れねばならぬ者へと育つ。そして不可能な約束から生まれた一つの民が、去らせることを拒むことで何を解き放つのかをまだ知らぬ帝国の重みの下、奴隷とされる。",
          "そのすべての上で、古い貸し借りはなお開いたままである。前の戦に敗れた力は謀ることをやめていない。そして今度は、自らの過ちから学んでいる。",
        ],
      },
      {
        num: "05", nome: "Saga III — A Better King", aberta: false,
        selo: "第三シーズン",
        sinopse: [
          "自由とは、見てみれば、それ自体がひとつの荒野である。",
          "『Saga III』は奇跡の余燼に開く。解き放たれた民、背後で閉じた海、砕かれた帝国。だが解放と献身は同じものではなく、前に延びる道は、後にした道より長く、より奇妙であることが知れる。宿営の上で、古き敵は諦めていない。ただ公然の戦を、より静かでより忍耐強いものに替えただけである。希望のゆるやかな摩耗を、ひとつの不平、ひとつの疑い、ひとつの破られた約束ずつ。",
          "その荒野から物語は、後のすべてを形づくる問いへ向かう。良き王であるとは、実のところ何を要するのか。『Saga III』は最初の王冠の興りとほどけを追う。偏執へと饐えていく野心。身に余る継承へ踏み出す羊飼いの少年。そして望んだ玉座が必要だった玉座ではなかったと、苦い仕方で学ぶ王国。",
          "帷の背後の戦は、いつも軍の形をしているとは限らない。時に、王冠の形をしている。",
        ],
      },
      {
        num: "06", nome: "Saga IV — The Son of Man", aberta: false,
        selo: "第四シーズン",
        sinopse: [
          "いかなる王国も、いずれは倒れる。問われるのは、倒れたとき何が立ち残るかである。",
          "『Saga IV』が追うのは、ひとつの民のゆるやかなほどけである。授かった約束を忘れる王たちの世代。清算の到来を見ながら止められぬ預言者たち。そして介入する代わりに、裁きがその道を辿るのを見ているほかない天軍。ついに城壁が崩れ、民が捕囚へ引かれていくとき、物語のうちで初めて、敵が勝ちつつあるように見える。",
          "だが捕囚はそれ自体がひとつの戦場となる。異邦の帝国の只中で、ひと握りの信ある者が屈むことを拒む。炉を、獅子を、人なる君主と人ならざる君主の謀を生き延び、囚われが真に揺るがぬものには触れ得ぬことの、生きた証しとなる。そして帷の背後では、地上のいかなる玉座よりも高くに届く戦が兆し、王国という語の意味を変える称号と、ひとつの姿とを匂わせる。",
          "物語の最も暗い曲がり角であり、最も明らかな約束である。敗北も、捕囚も、高き天の沈黙も終わりではない。それらは、敵が初めから恐れてきたものへの備えである。",
        ],
      },
      {
        num: "07", nome: "Saga V — Firstborn", aberta: false,
        selo: "第五シーズン",
        sinopse: [
          "ひとつの星が昇る。学者たちが静かに自らの王国を捨て、それに従う。そして五つのサガを費やしてまさにこの瞬間を阻もうとしてきたあらゆる力が、ついに悟る。遅かった、と。",
          "『Saga V』は、最初の裏切り以来、戦のすべてが巡りつづけてきた物語である。両の陣営がひとしく待ち、囁き、恐れてきた者の到来。彼は平凡に育つ。教える。癒す。ただ在るというだけで、王と祭司を落ち着かなくさせる。そして、常に定められていたその目的に近づくほど、彼に対して集められた力は必死になる。",
          "あり得ぬ主張と、あり得ぬ愛。軍によってではなく、へりくだりによって告げられる王国。そして銀河のあいだではなく、世界の小さな一隅の、苛烈な一週間にわたって演じられる最後の対決。",
          "ここで、初めから交わされたすべての約束が、破られるか、果たされるかする。",
        ],
      },
      {
        num: "08", nome: "Unveiled", aberta: false,
        selo: "終章 // 劇場長編・書籍",
        sinopse: [
          "いかなる戦にも終わりがある。『向こう側』のそれが、ついにここへ届く。",
          "勝利した王が家へ帰り、ひととき、物語はそこで憩えるかに見える。だがサガを渡ってきた戦は終わっていない。最後の、最も激しい章に入るのである。ひとつの炎が地に広がる。運ぶのは、いかなる帝国も意に介さなかった人々である。そして帷の背後で、天軍と客人の最後の対決への数え上げが、静かに始まる。",
          "解かれる封印、鳴らされる警告、そしてこの物語を最初の頁から形づくってきたあらゆる力の、最後の清算。すべてが収斂する。あらゆる約束、あらゆる裏切り、幾世代にも散らばったあらゆる静かな信の振る舞いが。",
          "帷そのものが落ち、ただ一者の誇りから始まった戦が、その終わりに出会うサガである。",
        ],
      },
    ],
  },
};
