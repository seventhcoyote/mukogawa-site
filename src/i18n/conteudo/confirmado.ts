/**
 * Página de destino do "Confirm Subscription" do e-mail de confirmação.
 *
 * POR QUE ELA EXISTE. O `Opt-in Redirect URL` do Beehiiv apontava para a home:
 * a pessoa confirmava o e-mail e caía numa página que não dizia nada sobre o que
 * tinha acabado de acontecer. O Bruno sentiu isso no próprio teste, em
 * 2026-08-04 — "não recebi nenhuma mensagem após clicar em confirmar". Um fluxo
 * que pede um segundo passo ao leitor precisa dizer que o passo funcionou.
 *
 * VOZ DA CASA, SECA (ver conteudo/VOZ.md). É interface, não é o mundo: a página
 * confirma, diz o que esperar e abre um caminho. Nada de épico aqui.
 *
 * O JAPONÊS NÃO FOI REVISADO POR FALANTE NATIVO — decisão do Bruno em
 * 2026-08-04, consciente e igual à do resto do site: fica na tradução corrente
 * e a revisão de verdade vem depois. Está registrado no MAPA.md.
 */
import type { Idioma } from "../idiomas";

export interface ConteudoConfirmado {
  titulo: string;
  descricao: string;
  rotulo: string;
  h1: string;
  lead: string;
  /** O que a pessoa recebe, e quando. Duas linhas curtas. */
  espera: string[];
  ctaHistoria: string;
  ctaPersonagens: string;
  /** Saída honesta, na mesma tela: quem confirmou por engano não fica preso. */
  nota: string;
}

export const CONFIRMADO: Record<Idioma, ConteudoConfirmado> = {
  pt: {
    titulo: "Confirmado",
    descricao: "Seu e-mail está confirmado na newsletter de Mukō-Gawa.",
    rotulo: "Newsletter // Confirmado",
    h1: "Pronto. Você está na lista.",
    lead: "Seu e-mail foi confirmado. Não é preciso fazer mais nada.",
    espera: [
      "Você recebe as novidades de Mukō-Gawa em primeira mão.",
    ],
    ctaHistoria: "Conheça Bleeding Light",
    ctaPersonagens: "Os criadores",
    nota: "Confirmou sem querer? Todo e-mail que enviamos traz um link para sair da lista, e sair vale a partir do próprio pedido.",
  },

  en: {
    titulo: "Confirmed",
    descricao: "Your email is confirmed on the Mukō-Gawa newsletter.",
    rotulo: "Newsletter // Confirmed",
    h1: "Done. You are on the list.",
    lead: "Your email has been confirmed. There is nothing else to do.",
    espera: [
      "You get news about Mukō-Gawa first hand.",
    ],
    ctaHistoria: "Discover Bleeding Light",
    ctaPersonagens: "The creators",
    nota: "Confirmed by mistake? Every mailing we send carries a link to leave the list, and leaving takes effect from the request itself.",
  },

  es: {
    titulo: "Confirmado",
    descricao: "Tu correo está confirmado en la newsletter de Mukō-Gawa.",
    rotulo: "Newsletter // Confirmado",
    h1: "Listo. Estás en la lista.",
    lead: "Tu correo ha sido confirmado. No hace falta nada más.",
    espera: [
      "Recibes las novedades de Mukō-Gawa de primera mano.",
    ],
    ctaHistoria: "Conoce Bleeding Light",
    ctaPersonagens: "Los creadores",
    nota: "¿Confirmaste sin querer? Cada envío incluye un enlace para salir de la lista, y salir surte efecto desde la propia solicitud.",
  },

  ja: {
    titulo: "登録完了",
    descricao: "『向こう側』のニュースレター登録が完了しました。",
    rotulo: "ニュースレター // 完了",
    h1: "登録が完了しました。",
    lead: "メールアドレスの確認が取れました。これ以上の操作は不要です。",
    espera: [
      "『向こう側』の最新情報をいち早くお届けします。",
    ],
    ctaHistoria: "Bleeding Light を見る",
    ctaPersonagens: "クリエイター",
    nota: "お心当たりのない場合は、配信されるすべてのメールに配信停止の導線があります。停止はお申し出の時点から有効です。",
  },
};
