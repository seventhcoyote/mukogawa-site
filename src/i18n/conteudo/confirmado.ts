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
    descricao: "Seu e-mail está confirmado na lista de espera de Mukō-Gawa.",
    rotulo: "Lista de espera // Confirmado",
    h1: "Pronto. Você está na lista.",
    lead: "Seu e-mail foi confirmado. Não é preciso fazer mais nada.",
    espera: [
      "Você será avisado quando as vendas abrirem na sua região.",
      "O yomikiri — o piloto do mangá — sai em 1º de dezembro de 2026.",
    ],
    ctaHistoria: "Ler a história",
    ctaPersonagens: "Todos os personagens",
    nota: "Confirmou sem querer? Todo e-mail que enviamos traz um link para sair da lista, e sair vale a partir do próprio pedido.",
  },

  en: {
    titulo: "Confirmed",
    descricao: "Your email is confirmed on the Mukō-Gawa waiting list.",
    rotulo: "Waiting list // Confirmed",
    h1: "Done. You are on the list.",
    lead: "Your email has been confirmed. There is nothing else to do.",
    espera: [
      "We will let you know when sales open in your region.",
      "The yomikiri — the manga pilot — arrives 1 December 2026.",
    ],
    ctaHistoria: "Read the story",
    ctaPersonagens: "All characters",
    nota: "Confirmed by mistake? Every mailing we send carries a link to leave the list, and leaving takes effect from the request itself.",
  },

  es: {
    titulo: "Confirmado",
    descricao: "Tu correo está confirmado en la lista de espera de Mukō-Gawa.",
    rotulo: "Lista de espera // Confirmado",
    h1: "Listo. Estás en la lista.",
    lead: "Tu correo ha sido confirmado. No hace falta nada más.",
    espera: [
      "Te avisaremos cuando abran las ventas en tu región.",
      "El yomikiri — el piloto del manga — llega el 1 de diciembre de 2026.",
    ],
    ctaHistoria: "Leer la historia",
    ctaPersonagens: "Todos los personajes",
    nota: "¿Confirmaste sin querer? Cada envío incluye un enlace para salir de la lista, y salir surte efecto desde la propia solicitud.",
  },

  ja: {
    titulo: "登録完了",
    descricao: "『向こう側』の事前登録が完了しました。",
    rotulo: "事前登録 // 完了",
    h1: "登録が完了しました。",
    lead: "メールアドレスの確認が取れました。これ以上の操作は不要です。",
    espera: [
      "お住まいの地域で販売が始まった際にお知らせします。",
      "読み切り（漫画のパイロット版）は2026年12月1日に公開します。",
    ],
    ctaHistoria: "物語を読む",
    ctaPersonagens: "登場人物一覧",
    nota: "お心当たりのない場合は、配信されるすべてのメールに配信停止の導線があります。停止はお申し出の時点から有効です。",
  },
};
