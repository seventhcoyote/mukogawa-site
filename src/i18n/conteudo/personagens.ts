/**
 * Junta a estrutura (src/data/personagens.ts) com o texto de cada idioma.
 *
 * Estrutural e imutável entre idiomas: slug, lado, classeNum, kanji. O lado
 * carrega informação narrativa e define a cor, então nunca varia por tradução.
 * Textual e por idioma: nome, epíteto, nome da classe, lore, crédito.
 *
 * PT-BR, EN e JA estão completos — os três com texto do próprio autor, os dois
 * últimos colhidos do site antigo. ES ainda cai no PT-BR, mas as rotas dele não
 * são geradas, então isso é rede de segurança e não tradução silenciosa.
 */
import { personagens, CLASSES, type Personagem, type Lado } from "../../data/personagens";
import { PERSONAGENS_EN, CLASSES_EN, type TextoPersonagem } from "./personagens-en";
import { PERSONAGENS_JA, CLASSES_JA } from "./personagens-ja";
import type { Idioma } from "../idiomas";

export interface PersonagemIdioma {
  slug: string;
  lado: Lado;
  classeNum: string;
  kanji: string;
  nome: string;
  epiteto: string;
  classe: string;
  sobreClasse: string;
  sobrePersonagem: string[];
  credito: string;
}

const doPt = (p: Personagem): TextoPersonagem => ({
  nome: p.nome,
  epiteto: p.epiteto,
  classe: p.classe,
  sobreClasse: p.sobreClasse,
  sobrePersonagem: p.sobrePersonagem,
  credito: p.credito,
});

function texto(p: Personagem, idioma: Idioma): TextoPersonagem {
  if (idioma === "en") return PERSONAGENS_EN[p.slug] ?? doPt(p);
  if (idioma === "ja") return PERSONAGENS_JA[p.slug] ?? doPt(p);
  return doPt(p);
}

export function personagensDoIdioma(idioma: Idioma): PersonagemIdioma[] {
  return personagens.map((p) => ({
    slug: p.slug,
    lado: p.lado,
    classeNum: p.classeNum,
    kanji: p.kanji,
    ...texto(p, idioma),
  }));
}

export function classesDoIdioma(idioma: Idioma) {
  const traduzidas = idioma === "en" ? CLASSES_EN : idioma === "ja" ? CLASSES_JA : null;
  if (!traduzidas) return CLASSES.map((c) => ({ ...c }));
  return CLASSES.map((c) => {
    const t = traduzidas.find((e) => e.num === c.num);
    return { ...c, nome: t?.nome ?? c.nome, descricao: t?.descricao ?? c.descricao };
  });
}

/** Rótulos da página de personagens, na Voz da Casa. */
export const ROTULOS_PERSONAGENS: Record<Idioma, {
  titulo: string;
  descricao: string;
  rotulo: string;
  lead: string;
  tituloClasses: string;
  leadClasses: string;
  revelada: string;
  classe: string;
  todos: string;
  todosCurto: string;
  estudos: string;
  /** rótulo da seção que descreve a classe do personagem */
  ordem: string;
  /** rótulo da seção que descreve o personagem em si */
  oEterno: string;
  /** rótulo da galeria de estudos */
  doCaderno: string;
  anterior: string;
  proximo: string;
  porClasse: string;
  indicePorClasse: string;
  lados: Record<Lado, string>;
}> = {
  pt: {
    titulo: "Personagens",
    descricao: "O elenco de Mukō-Gawa: onze personagens entre a Hoste e os Rebeldes, e as Nove Classes dos Eternos.",
    rotulo: "O elenco",
    lead: "Mukō-Gawa tem mais de cem personagens. Estes onze já ganharam arte própria e representam as nove classes.",
    tituloClasses: "As Nove Classes",
    leadClasses: "Nove classes ordenam os Eternos — e atravessam os dois lados da guerra.",
    revelada: "Revelada",
    classe: "Classe",
    todos: "Todos os personagens",
    todosCurto: "Todos",
    estudos: "Estudos",
    ordem: "A ordem",
    oEterno: "O Eterno",
    doCaderno: "Do caderno",
    anterior: "Anterior",
    proximo: "Próximo",
    porClasse: "Por classe",
    indicePorClasse: "Índice por classe",
    lados: { hoste: "Hoste", rebeldes: "Rebeldes" },
  },
  en: {
    titulo: "Characters",
    descricao: "The cast of Mukō-Gawa: eleven characters between the Host and the Guest, and the Nine Classes of the Eternals.",
    rotulo: "The cast",
    lead: "Mukō-Gawa has more than a hundred characters. These eleven already have art of their own, and stand for the nine classes.",
    tituloClasses: "The Nine Classes",
    leadClasses: "Nine classes order the Eternals — and they cross both sides of the war.",
    revelada: "Revealed",
    classe: "Class",
    todos: "All characters",
    todosCurto: "All",
    estudos: "Studies",
    ordem: "The order",
    oEterno: "The Eternal",
    doCaderno: "From the sketchbook",
    anterior: "Previous",
    proximo: "Next",
    porClasse: "By class",
    indicePorClasse: "Index by class",
    lados: { hoste: "Host", rebeldes: "Guest" },
  },
  es: {
    titulo: "Personajes",
    descricao: "El reparto de Mukō-Gawa: once personajes entre la Hueste y los Rebeldes, y las Nueve Clases de los Eternos.",
    rotulo: "El reparto",
    lead: "Mukō-Gawa tiene más de cien personajes. Estos once ya tienen arte propia y representan las nueve clases.",
    tituloClasses: "Las Nueve Clases",
    leadClasses: "Nueve clases ordenan a los Eternos, y atraviesan ambos lados de la guerra.",
    revelada: "Revelada",
    classe: "Clase",
    todos: "Todos los personajes",
    todosCurto: "Todos",
    estudos: "Estudios",
    ordem: "El orden",
    oEterno: "El Eterno",
    doCaderno: "Del cuaderno",
    anterior: "Anterior",
    proximo: "Siguiente",
    porClasse: "Por clase",
    indicePorClasse: "Índice por clase",
    lados: { hoste: "Hueste", rebeldes: "Rebeldes" },
  },
  ja: {
    titulo: "登場人物",
    descricao: "『向こう側』の登場人物。天軍と客人にまたがる十一人と、永遠者の九つの階級。",
    rotulo: "登場人物",
    lead: "『向こう側』には百を超える登場人物がいる。ここに挙げる十一人はすでに専用の絵を持ち、九つの階級を代表する。",
    tituloClasses: "九つの階級",
    leadClasses: "九つの階級が永遠者を貫く。戦の、いずれの側にも。",
    revelada: "公開済",
    classe: "階級",
    todos: "登場人物一覧",
    todosCurto: "一覧",
    estudos: "習作",
    ordem: "階級",
    oEterno: "永遠者",
    doCaderno: "手帳より",
    anterior: "前へ",
    proximo: "次へ",
    porClasse: "階級別",
    indicePorClasse: "階級別索引",
    lados: { hoste: "天軍", rebeldes: "客人" },
  },
};
