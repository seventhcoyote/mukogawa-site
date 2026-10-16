/**
 * Criadores.
 *
 * DOIS CRIADORES, lado a lado e com o mesmo peso. Daniel Bretas saiu em
 * 2026-10-16, por decisão do autor já acertada com ele — junto saíram o
 * subtítulo "Quem desenha" e o crédito dele no rodapé.
 *
 * Textos exatos da referência do pacote. O ES repete o PT porque está
 * desligado em `idiomas.ts`; ao ligar, traduzir aqui.
 */
import type { Idioma } from "../idiomas";

export interface Criador {
  nome: string;
  funcao: string;
  bio: string;
  instagram: string;
}

export interface ConteudoCriadores {
  rotulo: string;
  titulo: string;
  descricao: string;
  criadores: Criador[];
}

export const CRIADORES: Record<Idioma, ConteudoCriadores> = {
  pt: {
    rotulo: "Quem faz",
    titulo: "Criadores",
    descricao: "Israel Subira tem escolaridade em Literatura Bíblica, é escritor, dungeon master nas horas vagas e está debutando no mundo dos quadrinhos com…",
    criadores: [
      {
        nome: "Israel Subira",
        funcao: "Criador / Escritor / Roteirista",
        bio: "Israel Subira tem escolaridade em Literatura Bíblica, é escritor, dungeon master nas horas vagas e está debutando no mundo dos quadrinhos com Muko-Gawa: Bleeding Light. Ama universos de fantasia, é um grande admirador dos livros de Brandon Sanderson, Attack on Titan, os mangás de Hiromu Arakawa e a arte de Hideo Minaba.",
        instagram: "israelsubira",
      },
      {
        nome: "Guilherme Match",
        funcao: "Ilustrador / Roteirista",
        bio: "Guilherme Match é quadrinista e ilustrador. Autor de KOPHEE e co-autor de SOUNDTRACK, ambas publicadas pela Editora JBC e indicadas ao troféu HQmix. É apaixonado por universos distópicos, ficção pós-apocalíptica e personagens com visuais maneiros. A Lâmina do Imortal, Monster e Akira estão entre as suas obras preferidas. Bleeding Light marca sua estreia nos mangás de fantasia.",
        instagram: "yohke",
      },
    ],
  },

  en: {
    rotulo: "Who makes it",
    titulo: "Creators",
    descricao: "Israel Subira has a background in Biblical Literature, is a writer, a dungeon master in his spare time, and is making his debut in comics with…",
    criadores: [
      {
        nome: "Israel Subira",
        funcao: "Creator / Writer / Scriptwriter",
        bio: "Israel Subira has a background in Biblical Literature, is a writer, a dungeon master in his spare time, and is making his debut in comics with Mukō-Gawa: Bleeding Light. He loves fantasy worlds and is a big admirer of Brandon Sanderson’s books, Attack on Titan, Hiromu Arakawa’s manga, and Hideo Minaba’s art.",
        instagram: "israelsubira",
      },
      {
        nome: "Guilherme Match",
        funcao: "Illustrator / Scriptwriter",
        bio: "Guilherme Match is a comic artist and illustrator. Author of KOPHEE and co-author of SOUNDTRACK, both published by Editora JBC and nominated for the HQmix award. He’s passionate about dystopian worlds, post-apocalyptic fiction, and characters with cool visual designs. Blade of the Immortal, Monster, and Akira are among his favorite works. Bleeding Light marks his debut in fantasy manga.",
        instagram: "yohke",
      },
    ],
  },

  ja: {
    rotulo: "制作",
    titulo: "クリエイター",
    descricao: "イスラエル・スビラは聖書文学を学び、作家として活動するほか、余暇にはダンジョンマスターも務める。『向こう側:ブリーディング・ライト』で漫画の世界に初めて挑む。ファンタジーの世界を愛し、ブランドン・サンダーソンの著作、『進撃の巨人』、荒川弘の漫画作品、そして皆葉英夫のアートの大ファンでもある。…",
    criadores: [
      {
        nome: "イスラエル・スビラ",
        funcao: "原作 / 作家 / 脚本",
        bio: "イスラエル・スビラは聖書文学を学び、作家として活動するほか、余暇にはダンジョンマスターも務める。『向こう側:ブリーディング・ライト』で漫画の世界に初めて挑む。ファンタジーの世界を愛し、ブランドン・サンダーソンの著作、『進撃の巨人』、荒川弘の漫画作品、そして皆葉英夫のアートの大ファンでもある。",
        instagram: "israelsubira",
      },
      {
        nome: "ギリェルミ・マッチ",
        funcao: "作画 / 脚本",
        bio: "ギリェルミ・マッチは漫画家、イラストレーター。『コフィー』の著者であり、『サウンドトラック』の共著者でもある。両作品はJBC社から出版され、HQmix賞にもノミネートされた。ディストピア的な世界観、ポストアポカリプス的なフィクション、そして格好いいビジュアルを持つキャラクターを愛する。『無限の住人』、『MONSTER』、『AKIRA』は彼のお気に入りの作品に数えられる。『向こう側:ブリーディング・ライト』は、彼にとってファンタジー漫画デビュー作となる。",
        instagram: "yohke",
      },
    ],
  },
};

(CRIADORES as Record<string, ConteudoCriadores>).es = CRIADORES.pt;
