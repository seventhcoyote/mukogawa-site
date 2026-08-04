/**
 * Personagens em inglês — texto do próprio autor, colhido do site modelo
 * (ver conteudo/EN-SITE-MODELO.md). NÃO é retradução do português.
 *
 * A estrutura espelha src/data/personagens.ts: mesmo slug, mesmo número de
 * parágrafos. O que muda por idioma é só o texto; lado, classe numérica e
 * kanji continuam vindo do arquivo de dados, porque são estruturais.
 *
 * Terminologia deliberada, não uniformizar com o PT:
 *   Rebeldes → the Guest   |   Hoste → the Host
 */

export interface TextoPersonagem {
  nome: string;
  epiteto: string;
  classe: string;
  sobreClasse: string;
  sobrePersonagem: string[];
  credito: string;
}

const CONCEPT = "Concept art — Art: D. Bretas, 2025.";
const MANGA = "Manga art — Art: Match, 2026.";

export const CLASSES_EN = [
  { num: "01", nome: "Cohorts",
    descricao: "Cohorts are the foundational workforce of the Host. Formed with willing hearts and bound by duty, they carry out the will of the High Heavens with unwavering resolve. In the Age of Stars, those Eternals who gravitated toward service were appointed to this rank. Bearing a single pair of wings, Cohorts are the backbone of the Host — soldiers, messengers, and whatever is needed in between. They may not wield the might of an Archon or the mystery of a Principality, but their loyalty shapes the outcome of every war." },
  { num: "02", nome: "Archons",
    descricao: "Archons are the mightiest warriors among the Host. In the Age Before, they were the Eternals drawn to strength, and strength was given to them in abundance. No other rank matches their raw mettle or resilience, making them decisive figures in times of war. They are the only echelon entrusted with Rift-Tearing weapons — masterworks of Zorphael, the forgemaster of the Host — each forged in flame and consecrated by the Architect's own hand. These weapons can rend the fabric of space itself, opening portals across realms, battlefields, and even the Veil. Archons bear two pairs of wings: one broad and commanding, the other smaller and swift — crafted for violent thrusts and perfect aerial maneuvering." },
  { num: "03", nome: "Principalities",
    descricao: "Principalities are the princes of knowledge, those among the Eternals who, in the Age Before, gravitated toward wisdom. Long before the civil war, they were architects of literature, stewards of heavenly order, and weavers of celestial power. Of all the Host, none surpass them in the mastery of arcane forces. Their magic is elegant and exacting, often written in radiant script that coils through the air as it is spoken — each word a key, each symbol a gate." },
  { num: "04", nome: "Virtues",
    descricao: "Virtues are formidable beings whose power flows not from arcane knowledge, like the Principalities, but from innate emanation. Their presence shapes not only the battlefield, but entire regions — bringing strength, restoration, and clarity where there was once chaos. They move between realms, often unseen, serving as vessels through which healing and deliverance are poured out upon mankind. Marked by a regal pair of horns that crown their heads — a symbol of Second Echelon authority — Virtues bear a single pair of wings. Though seldom seen in open combat, their influence is undeniable. Before the war, they were the Eternals who longed for beauty: artists, dreamers, and singers of light, who once filled the cosmos with wonder." },
  { num: "05", nome: "Powers",
    descricao: "Powers, also called Custodians, are unlike their Ancient and Eternal siblings. While the Ancients bear the mark of the Elders, and the Eternals were summoned in a single breath, the Powers came later — born during the great flourishing of the Age of Stars. As the cosmos expanded and the architecture of creation grew vast, the Eternals cried out for aid. In response, the Custodians were forged: colossal beings shaped by the will of the Most High, with the hands of their elder siblings guiding the work. Monumental in stature, like titans of light and steel, they became the wardens of the Far Heavens — ensuring structure, harmony and balance. Though youngest among the Host, their presence is unmatched. Each Custodian is singular in form; some winged, others not." },
  { num: "06", nome: "Dominars",
    descricao: "Dominars stand at the head of the Second Echelon, marked by two sets of wings and regal horns that crown their heads. These are the Eternals who, in the Age Before, gravitated toward both strength and knowledge, and in that union became something distinct. Though not as strong as an Archon, nor as arcane as a Principality, the Dominars excel in both. That balance — of body and mind, blade and spell — makes them dangerous in ways few can anticipate. Strategists and commanding presences, they often serve as the bridge between the Hosts above and below, leading charges where angels fear to tread." },
  { num: "07", nome: "Ophanim",
    descricao: "The Ophanim belong to the First Echelon: beings of terrible and radiant beauty, formed of interlocking wheels forged from the oldest metals of creation. Their frames burn with eyes that do not blink or rest. While the Seraphim fix their gaze upon the Almighty, the Ophanim cast their vision outward, to the farthest reaches of the cosmos. They do not speak as others speak, but resonate in Ophanix — a language not vocalized but released. With each turn of their wheels, waves of compressed truth ripple through the realms. Their speech is vibration; their song, revelation. Few can decipher it. Fewer still can answer." },
  { num: "08", nome: "Cherubim",
    descricao: "The Cherubim are beings of awe and wonder, immense in beauty and mystery. Formed in the first breath of the Almighty's will, they predate the Eternals and surpass them in power. Their true forms are otherworldly: wings upon wings, bodies of flame and wind, faces that shift like fire. Yet among the Host they often appear as great beasts — majestic, soaring like omens through the expanse. Desiring fellowship with their younger kin, they took on Visages: humanoid forms chosen not by need, but affection." },
  { num: "09", nome: "Seraphim",
    descricao: "The Seraphim are the first of the Ancient, eldest among their kind and heads of the First Echelon. Of all the Host, they alone were formed with the gift to comprehend — not merely to know, but to understand, deeply and in full. Their minds move with the breath of the Architect Himself. For this reason, they have never left the Throne Room. Not bound by command or chain, they remain by choice — captivated. For once they beheld the glory of the One upon the Throne, they could not look away." },
] as const;

export const PERSONAGENS_EN: Record<string, TextoPersonagem> = {
  gabriel: {
    nome: "Gabriel",
    epiteto: "Herald",
    classe: "Cohorts",
    sobreClasse:
      "Cohorts are the foundational workforce of the Host. Formed with willing hearts and bound by duty, they carry out the will of the High Heavens with unwavering resolve. In the Age of Stars, those Eternals who gravitated toward service were appointed to this rank. Bearing a single pair of wings, Cohorts are the backbone of the Host — soldiers, messengers, and whatever is needed in between. They may not wield the might of an Archon or the mystery of a Principality, but their loyalty shapes the outcome of every war.",
    sobrePersonagem: [
      "Among them, Gabriel is renowned. A herald of the Most High, he is rarely seen with a weapon. Though a formidable warrior, Gabriel avoids combat — not out of fear of the battle, but fear of what his hands might do. Instead, he walks into the fray unarmed, bearing not steel, but the weight of the Word. His voice has silenced wars and stirred kings to repentance. In him, the calling of a Cohort is fully seen — not to dominate, but to serve with power, purpose, and peace.",
    ],
    credito: CONCEPT,
  },

  amunet: {
    nome: "Amunet",
    epiteto: "Defiled",
    classe: "Cohorts",
    sobreClasse:
      "Cohorts are the foundational workforce of the Host. Formed with willing hearts and bound by duty, they carry out the will of the High Heavens with unwavering resolve. In the Age of Stars, those Eternals who gravitated toward service were appointed to this rank. Bearing a single pair of wings, Cohorts are the backbone of the Host — soldiers, messengers, and whatever is needed in between. They may not wield the might of an Archon or the mystery of a Principality, but their loyalty shapes the outcome of every war.",
    sobrePersonagem: [
      "Amunet is one of the series' most visually distinctive characters, and his appearance is a direct illustration of what the Defiled Well does over time. His skin has become dark, scaled hide. His features are thick and heavy, suggesting the ancient crocodiles of the Nile delta.",
      "His most defining feature: his right arm — or what was once his right arm — has become a grotesque cluster of fused limbs, each with its own hands and fingers, intertwined and writhing like a knot of serpents. The individual hands flex involuntarily. The mass has a life of its own.",
    ],
    credito: MANGA,
  },

  miguel: {
    nome: "Michael",
    epiteto: "The Warmonger",
    classe: "Archons",
    sobreClasse:
      "Archons are the mightiest warriors among the Host. In the Age Before, they were the Eternals drawn to strength, and strength was given to them in abundance. No other rank matches their raw mettle or resilience, making them decisive figures in times of war. They are the only echelon entrusted with Rift-Tearing weapons — masterworks of Zorphael, the forgemaster of the Host — each forged in flame and consecrated by the Architect's own hand. These weapons can rend the fabric of space itself, opening portals across realms, battlefields, and even the Veil. Archons bear two pairs of wings: one broad and commanding, the other smaller and swift — crafted for violent thrusts and perfect aerial maneuvering.",
    sobrePersonagem: [
      "Among them, none stands higher than Michael, the Warmonger. Unyielding. Undefeated. His presence alone strikes fear into the hearts of Heaven's enemies. His spear, Veritas, was the first weapon drawn from Zorphael's forge when the war began. No hand but Michael's has ever wielded it.",
    ],
    credito: CONCEPT,
  },

  satis: {
    nome: "Satis",
    epiteto: "Fallen Blade",
    classe: "Archons",
    sobreClasse:
      "Archons are the mightiest warriors among the Host. In the Age Before, they were the Eternals drawn to strength, and strength was given to them in abundance. No other rank matches their raw mettle or resilience, making them decisive figures in times of war.",
    sobrePersonagem: [
      "Satis is striking: an Eternal of measured elegance whose poise survives even the progressive damage of the Well. Her hair is white and gleaming, with a quiet luster that seems at odds with the environment she inhabits. Dark armour adorned with faded sigils encases her form — the engravings nearly worn away by time and battle. She carries the Onyx Shard across her back, its shattered tip somehow making it more dangerous rather than less.",
      "Eldritch markings twist along her arms and legs, their form stretched just beyond natural proportions — the Well's corruption spreading slowly across her.",
    ],
    credito: MANGA,
  },

  celeste: {
    nome: "Celeste",
    epiteto: "Weaver",
    classe: "Principalities",
    sobreClasse:
      "Principalities are the princes of knowledge, those among the Eternals who, in the Age Before, gravitated toward wisdom. Long before the civil war, they were architects of literature, stewards of heavenly order, and weavers of celestial power. Of all the Host, none surpass them in the mastery of arcane forces. Their magic is elegant and exacting, often written in radiant script that coils through the air as it is spoken — each word a key, each symbol a gate.",
    sobrePersonagem: [
      "Celeste is a living testament to what it means to be a Principality. Ever present in councils of war, her voice carries weight among commanders and sages alike. Yet when battle begins, she does not stand behind. She lifts her hand, and the skies answer, unleashing wonders that can reshape the battlefield for her brethren.",
    ],
    credito: CONCEPT,
  },

  ariel: {
    nome: "Ariel",
    epiteto: "Vialbearer",
    classe: "Virtues",
    sobreClasse:
      "Virtues are formidable beings whose power flows not from arcane knowledge, like the Principalities, but from innate emanation. Their presence shapes not only the battlefield, but entire regions — bringing strength, restoration, and clarity where there was once chaos. They move between realms, often unseen, serving as vessels through which healing and deliverance are poured out upon mankind. Marked by a regal pair of horns that crown their heads — a symbol of Second Echelon authority — Virtues bear a single pair of wings. Though seldom seen in open combat, their influence is undeniable. Before the war, they were the Eternals who longed for beauty: artists, dreamers, and singers of light, who once filled the cosmos with wonder.",
    sobrePersonagem: [
      "Among them, Ariel is a beacon of hope. Wherever she walks, healing follows. She carries sacred vials of the living waters of the High Heavens, a single drop enough to raise a fallen warrior. Ariel is patient and measured, yet never distant — her bond with her brother Tesserion unbreakable.",
    ],
    credito: CONCEPT,
  },

  tesserion: {
    nome: "Tesserion",
    epiteto: "Stormbearer",
    classe: "Powers",
    sobreClasse:
      "Powers, also called Custodians, are unlike their Ancient and Eternal siblings. While the Ancients bear the mark of the Elders, and the Eternals were summoned in a single breath, the Powers came later — born during the great flourishing of the Age of Stars. As the cosmos expanded and the architecture of creation grew vast, the Eternals cried out for aid. In response, the Custodians were forged: colossal beings shaped by the will of the Most High, with the hands of their elder siblings guiding the work. Monumental in stature, like titans of light and steel, they became the wardens of the Far Heavens — ensuring structure, harmony and balance. Though youngest among the Host, their presence is unmatched. Each Custodian is singular in form; some winged, others not.",
    sobrePersonagem: [
      "Among them stands Tesserion, the Stormbearer. Towering like a mountain clad in armour, he wields a blade the size of a citadel. His lion-helm has become a symbol of sanctuary. Though few words pass his lips, he shares an indestructible bond with his sister, Ariel.",
    ],
    credito: CONCEPT,
  },

  kharzul: {
    nome: "Kharzul",
    epiteto: "Scout",
    classe: "Dominars",
    sobreClasse:
      "Dominars stand at the head of the Second Echelon, marked by two sets of wings and regal horns that crown their heads. These are the Eternals who, in the Age Before, gravitated toward both strength and knowledge, and in that union became something distinct. Though not as strong as an Archon, nor as arcane as a Principality, the Dominars excel in both. That balance — of body and mind, blade and spell — makes them dangerous in ways few can anticipate. Strategists and commanding presences, they often serve as the bridge between the Hosts above and below, leading charges where angels fear to tread.",
    sobrePersonagem: [
      "Among them once stood Kharzul. Seduced by ambition, he aligned with the Defilers, abandoning the Light for the promise of ascent. His most recent defeat came at the hands of Michael — not only defeat, but humiliation. His horns are jagged, his skin darkened, his name disgraced. Stripped of rank and discarded by the Prince of Babylon, he was reassigned as a mere scout. And yet Kharzul endures: cunning, patient, watchful. A tactician still. A shadow not yet silenced.",
    ],
    credito: `${CONCEPT} / ${MANGA}`,
  },

  orthrax: {
    nome: "Orthrax",
    epiteto: "The Fallen Eye",
    classe: "Ophanim",
    sobreClasse:
      "The Ophanim belong to the First Echelon: beings of terrible and radiant beauty, formed of interlocking wheels forged from the oldest metals of creation. Their frames burn with eyes that do not blink or rest. While the Seraphim fix their gaze upon the Almighty, the Ophanim cast their vision outward, to the farthest reaches of the cosmos. They do not speak as others speak, but resonate in Ophanix — a language not vocalized but released. With each turn of their wheels, waves of compressed truth ripple through the realms. Their speech is vibration; their song, revelation. Few can decipher it. Fewer still can answer.",
    sobrePersonagem: [
      "And yet, one among them fell. Orthrax was once a pillar of unity, a vigilant eye that bound the heavens. Now he serves the King Snake, sent into regions where the Guest cannot see clearly. His presence grants the Defiled sight — but at a cost. For when an Ophanim enters the field, the heavens must answer. The stakes rise. The veil burns. Orthrax is no longer merely a watcher. He is a warning.",
    ],
    credito: CONCEPT,
  },

  helel: {
    nome: "Helel",
    epiteto: "King of the Guest",
    classe: "Cherubim",
    sobreClasse:
      "The Cherubim are beings of awe and wonder, immense in beauty and mystery. Formed in the first breath of the Almighty's will, they predate the Eternals and surpass them in power. Their true forms are otherworldly: wings upon wings, bodies of flame and wind, faces that shift like fire. Yet among the Host they often appear as great beasts — majestic, soaring like omens through the expanse. Desiring fellowship with their younger kin, they took on Visages: humanoid forms chosen not by need, but affection.",
    sobrePersonagem: [
      "Among them stood Helel, radiant and mighty, a prince robed in splendour, trusted with mysteries. But in time the light turned inward. He questioned why glory returned to the Throne, why power was shared, why dust should bear the image of the Almighty. He became the first to lie, to turn, to spark rebellion. A third of the Eternals followed him. For this he was cast down, his wings severed. Once the dragon of old, he now slithers in shadow. Yet his beauty endures, untarnished by the Defiled Well. He is the architect of war. The King of the Guest.",
    ],
    credito: CONCEPT,
  },

  serafins: {
    nome: "Seraphim",
    epiteto: "The Burning Ones",
    classe: "Seraphim",
    sobreClasse:
      "The Seraphim are the first of the Ancient, eldest among their kind and heads of the First Echelon. Of all the Host, they alone were formed with the gift to comprehend — not merely to know, but to understand, deeply and in full. Their minds move with the breath of the Architect Himself. For this reason, they have never left the Throne Room. Not bound by command or chain, they remain by choice — captivated. For once they beheld the glory of the One upon the Throne, they could not look away.",
    sobrePersonagem: [
      "Their worship is endless, not because they were told to sing, but because they cannot stop seeing. Their voices are deep and layered, echoing through the High Heavens like the roar of flame. They bear six wings, countless eyes, and a fire none but they can endure. Wherever they go, they burn. Their presence is overwhelming, their insight unfathomable. These are the Burning Ones — the first to see, and the last to turn away.",
    ],
    credito: CONCEPT,
  },
};
