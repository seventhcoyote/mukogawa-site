/**
 * Strings de interface — a Voz da Casa nos três idiomas.
 *
 * Regra do VOZ.md que vale igual em EN e ES: o épico nunca invade a interface.
 * O botão diz "Quero ser avisado" / "Notify me" / "Avísame", nunca
 * "Ergue tua voz". Se uma string aqui soar litúrgica, ela está errada.
 *
 * EN vem do site antigo sempre que existia lá (ver GLOSSARIO-EN.md); o que não
 * existia foi escrito no mesmo registro seco.
 */
import type { Idioma } from "./idiomas";

export const UI = {
  pt: {
    "nav.inicio": "Início",
    "nav.historia": "História",
    "nav.personagens": "Personagens",
    "nav.criadores": "Criadores",
    "nav.loja": "Loja",
    "nav.faq": "Perguntas frequentes",
    "nav.faqCurto": "FAQ",
    "nav.abrirMenu": "Abrir menu",
    "nav.principal": "Navegação principal",
    "nav.inicioAria": "Mukō-Gawa — início",

    "cta.aviseMe": "Avise-me",
    "cta.pular": "Pular para o conteúdo",
    "cta.idioma": "Idioma",

    "rodape.obra": "A obra",
    "rodape.publicacao": "Publicação",
    "rodape.listaEspera": "Lista de espera",
    "rodape.emBreve": "em breve",
    "rodape.direitos": "Todos os direitos reservados.",
    "rodape.frase":
      "Antes da história, uma civilização entrou em guerra pela forma do mundo.",
    "rodape.contato": "Contato",
    "rodape.imprensa": "Imprensa",
    "rodape.creditos": "Arte de Daniel Bretas e Guilherme Match.",
    "espera.rotulo": "Volume 01 // Dezembro de 2026",
    "espera.titulo": "O primeiro volume do mangá chega em dezembro de 2026.",
    "espera.apoio": "Deixe seu e-mail e você é avisado quando as vendas abrirem na sua região. Sem outros envios.",
    "espera.email": "Seu e-mail",
    "espera.regiao": "Sua região",
    "espera.botao": "Quero ser avisado",
    "espera.naoPreencha": "Não preencha",
    "espera.erroEmail": "Confira o e-mail digitado.",
    "espera.semEndpoint": "Cadastro ainda não conectado. Falta ligar o provedor de e-mail.",
    "espera.enviando": "Enviando...",
    "espera.ok": "Pronto. Você será avisado.",
    "espera.erroEnvio": "Não deu para enviar agora. Tente de novo em instantes.",
    "espera.nota": "Edições, preços e frete são responsabilidade do varejista de cada região. As datas seguem o calendário atual da editora e podem mudar.",
    "regiao.BR": "Brasil", "regiao.US": "Estados Unidos", "regiao.JP": "Japão", "regiao.OUTRO": "Outra",
  },

  en: {
    "nav.inicio": "Home",
    "nav.historia": "Story",
    "nav.personagens": "Characters",
    "nav.criadores": "Creators",
    "nav.loja": "Shop",
    "nav.faq": "FAQ",
    "nav.faqCurto": "FAQ",
    "nav.abrirMenu": "Open menu",
    "nav.principal": "Main navigation",
    "nav.inicioAria": "Mukō-Gawa — home",

    "cta.aviseMe": "Notify me",
    "cta.pular": "Skip to content",
    "cta.idioma": "Language",

    "rodape.obra": "The work",
    "rodape.publicacao": "Publication",
    "rodape.listaEspera": "Waitlist",
    "rodape.emBreve": "soon",
    "rodape.direitos": "All rights reserved.",
    "rodape.frase":
      "Before history, a civilization went to war over the shape of the world.",
    "rodape.contato": "Contact",
    "rodape.imprensa": "Press",
    "rodape.creditos": "Art by Daniel Bretas and Guilherme Match.",
    "espera.rotulo": "Volume 01 // December 2026",
    "espera.titulo": "The first manga volume arrives December 2026.",
    "espera.apoio": "Leave your email and we will let you know when sales open in your region. Nothing else.",
    "espera.email": "Your email",
    "espera.regiao": "Your region",
    "espera.botao": "Notify me",
    "espera.naoPreencha": "Do not fill in",
    "espera.erroEmail": "Check the email you typed.",
    "espera.semEndpoint": "Signup not connected yet. The email provider still has to be wired up.",
    "espera.enviando": "Sending...",
    "espera.ok": "Done. You will be notified.",
    "espera.erroEnvio": "Could not send just now. Try again in a moment.",
    "espera.nota": "Editions, pricing and shipping are handled by the retailer for each region. Dates shown are current publisher schedule and may change.",
    "regiao.BR": "Brazil", "regiao.US": "United States", "regiao.JP": "Japan", "regiao.OUTRO": "Other",
  },

  es: {
    "nav.inicio": "Inicio",
    "nav.historia": "Historia",
    "nav.personagens": "Personajes",
    "nav.criadores": "Creadores",
    "nav.loja": "Tienda",
    "nav.faq": "Preguntas frecuentes",
    "nav.faqCurto": "FAQ",
    "nav.abrirMenu": "Abrir menú",
    "nav.principal": "Navegación principal",
    "nav.inicioAria": "Mukō-Gawa — inicio",

    "cta.aviseMe": "Avísame",
    "cta.pular": "Saltar al contenido",
    "cta.idioma": "Idioma",

    "rodape.obra": "La obra",
    "rodape.publicacao": "Publicación",
    "rodape.listaEspera": "Lista de espera",
    "rodape.emBreve": "pronto",
    "rodape.direitos": "Todos los derechos reservados.",
    "rodape.frase":
      "Antes de la historia, una civilización entró en guerra por la forma del mundo.",
    "rodape.contato": "Contacto",
    "rodape.imprensa": "Prensa",
    "rodape.creditos": "Arte de Daniel Bretas y Guilherme Match.",
    "espera.rotulo": "Volumen 01 // Diciembre de 2026",
    "espera.titulo": "El primer volumen del manga llega en diciembre de 2026.",
    "espera.apoio": "Deja tu correo y te avisamos cuando abran las ventas en tu región. Nada más.",
    "espera.email": "Tu correo",
    "espera.regiao": "Tu región",
    "espera.botao": "Avísame",
    "espera.naoPreencha": "No rellenar",
    "espera.erroEmail": "Revisa el correo que escribiste.",
    "espera.semEndpoint": "El registro aún no está conectado. Falta enlazar el proveedor de correo.",
    "espera.enviando": "Enviando...",
    "espera.ok": "Listo. Te avisaremos.",
    "espera.erroEnvio": "No se pudo enviar ahora. Inténtalo de nuevo en un momento.",
    "espera.nota": "Ediciones, precios y envío son responsabilidad del minorista de cada región. Las fechas siguen el calendario actual de la editorial y pueden cambiar.",
    "regiao.BR": "Brasil", "regiao.US": "Estados Unidos", "regiao.JP": "Japón", "regiao.OUTRO": "Otra",
  },

  ja: {
    "nav.inicio": "ホーム",
    "nav.historia": "物語",
    "nav.personagens": "登場人物",
    "nav.criadores": "制作",
    "nav.loja": "ショップ",
    "nav.faq": "よくある質問",
    "nav.faqCurto": "FAQ",
    "nav.abrirMenu": "メニューを開く",
    "nav.principal": "メインナビゲーション",
    "nav.inicioAria": "向こう側 — ホーム",

    "cta.aviseMe": "お知らせを受け取る",
    "cta.pular": "本文へ移動",
    "cta.idioma": "言語",

    "rodape.obra": "作品",
    "rodape.publicacao": "刊行",
    "rodape.listaEspera": "お知らせリスト",
    "rodape.emBreve": "準備中",
    "rodape.direitos": "無断転載を禁じます。",
    "rodape.frase":
      "歴史の前に、ひとつの文明が世界の形をめぐって戦った。",
    "rodape.contato": "お問い合わせ",
    "rodape.imprensa": "メディア",
    "rodape.creditos": "アート: ダニエル・ブレタス、ギリェルミ・マッチ。",
    "espera.rotulo": "第1巻 // 2026年12月",
    "espera.titulo": "漫画第1巻は2026年12月発売。",
    "espera.apoio": "メールアドレスをご登録いただくと、お住まいの地域で販売が開始された際にお知らせします。他の配信はありません。",
    "espera.email": "メールアドレス",
    "espera.regiao": "地域",
    "espera.botao": "お知らせを受け取る",
    "espera.naoPreencha": "入力しないでください",
    "espera.erroEmail": "メールアドレスをご確認ください。",
    "espera.semEndpoint": "登録機能は未接続です。メール配信サービスの設定が必要です。",
    "espera.enviando": "送信中...",
    "espera.ok": "完了しました。お知らせします。",
    "espera.erroEnvio": "現在送信できませんでした。しばらくして再度お試しください。",
    "espera.nota": "版・価格・配送は各地域の販売元が取り扱います。日程は現行の刊行予定であり、変更される場合があります。",
    "regiao.BR": "ブラジル", "regiao.US": "アメリカ合衆国", "regiao.JP": "日本", "regiao.OUTRO": "その他",
  },
} as const;

export type Chave = keyof (typeof UI)["pt"];

/** Tradutor do idioma dado. Cai no português se faltar a chave. */
export function usarUI(idioma: Idioma) {
  return (chave: Chave): string =>
    (UI[idioma] as Record<string, string>)[chave] ?? UI.pt[chave];
}
