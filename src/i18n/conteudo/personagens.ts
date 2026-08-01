/**
 * Junta a estrutura (src/data/personagens.ts) com o texto de cada idioma.
 *
 * Estrutural e imutável entre idiomas: slug, lado, classeNum, kanji. O lado
 * carrega informação narrativa e define a cor, então nunca varia por tradução.
 * Textual e por idioma: nome, epíteto, nome da classe, lore, crédito.
 *
 * PT-BR e EN estão completos. ES e JA ainda não: enquanto não estiverem, caem
 * no PT-BR — mas as rotas deles também não são geradas, então isso é só uma
 * rede de segurança, não uma tradução silenciosa em produção.
 */
import { personagens, CLASSES, type Personagem, type Lado } from "../../data/personagens";
import { PERSONAGENS_EN, CLASSES_EN, type TextoPersonagem } from "./personagens-en";
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
  if (idioma === "en") {
    return CLASSES.map((c) => ({
      ...c,
      nome: CLASSES_EN.find((e) => e.num === c.num)?.nome ?? c.nome,
    }));
  }
  return CLASSES.map((c) => ({ ...c }));
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
  lados: Record<Lado, string>;
}> = {
  pt: {
    titulo: "Personagens",
    descricao: "O elenco de Mukō-Gawa: onze personagens entre a Hoste e os Rebeldes, e as Nove Classes dos Eternos.",
    rotulo: "O elenco",
    lead: "O elenco é vasto. Estas páginas apresentam as nove classes, uma por vez.",
    tituloClasses: "As Nove Classes",
    leadClasses: "As ordens da Hoste, reveladas uma por vez.",
    revelada: "Revelada",
    classe: "Classe",
    todos: "Todos os personagens",
    todosCurto: "Todos",
    estudos: "Estudos",
    lados: { hoste: "Hoste", rebeldes: "Rebeldes" },
  },
  en: {
    titulo: "Characters",
    descricao: "The cast of Mukō-Gawa: eleven characters between the Host and the Guest, and the Nine Classes of the Eternals.",
    rotulo: "The cast",
    lead: "The cast is vast. These pages introduce the nine classes, one at a time.",
    tituloClasses: "The Nine Classes",
    leadClasses: "Ranks of the Host, revealed one at a time.",
    revelada: "Revealed",
    classe: "Class",
    todos: "All characters",
    todosCurto: "All",
    estudos: "Studies",
    lados: { hoste: "Host", rebeldes: "Guest" },
  },
  es: {
    titulo: "Personajes",
    descricao: "El reparto de Mukō-Gawa: once personajes entre la Hueste y los Rebeldes, y las Nueve Clases de los Eternos.",
    rotulo: "El reparto",
    lead: "El reparto es vasto. Estas páginas presentan las nueve clases, una por vez.",
    tituloClasses: "Las Nueve Clases",
    leadClasses: "Las órdenes de la Hueste, reveladas una por vez.",
    revelada: "Revelada",
    classe: "Clase",
    todos: "Todos los personajes",
    todosCurto: "Todos",
    estudos: "Estudios",
    lados: { hoste: "Hueste", rebeldes: "Rebeldes" },
  },
  ja: {
    titulo: "登場人物",
    descricao: "『向こう側』の登場人物。天軍と客人にまたがる十一人と、永遠者の九つの階級。",
    rotulo: "登場人物",
    lead: "登場人物は数多い。本ページでは、九つの階級を順に紹介する。",
    tituloClasses: "九つの階級",
    leadClasses: "天軍の階級を、順に明かしていく。",
    revelada: "公開済",
    classe: "階級",
    todos: "登場人物一覧",
    todosCurto: "一覧",
    estudos: "習作",
    lados: { hoste: "天軍", rebeldes: "客人" },
  },
};
