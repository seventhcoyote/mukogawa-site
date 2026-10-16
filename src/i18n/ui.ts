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
    "nav.obra": "A obra",
    "nav.personagens": "Personagens",
    "nav.criadores": "Criadores",
    "nav.loja": "Loja",
    "nav.faq": "Perguntas frequentes",
    "nav.faqCurto": "FAQ",
    "nav.abrirMenu": "Abrir menu",
    "nav.principal": "Navegação principal",
    "nav.inicioAria": "Mukō-Gawa — início",

    "cta.aviseMe": "Avise-me",
    "nav.bleedingLight": "Bleeding Light",
    "cta.apoiar": "Pré-venda",
    "catarse.seguir": "Siga a campanha",
    "cta.pular": "Pular para o conteúdo",
    "cta.idioma": "Idioma",
    "cta.aoTopo": "Topo",

    "rodape.obra": "Sobre",
    "rodape.publicacao": "Publicação",
    "rodape.listaEspera": "Newsletter",
    "rodape.emBreve": "em breve",
    "rodape.direitos": "Todos os direitos reservados.",
    "rodape.frase":
      "Antes da humanidade, uma civilização entrou em guerra pela forma da realidade.",
    "rodape.contato": "Contato",
    "rodape.imprensa": "Imprensa",
    "rodape.privacidade": "Privacidade",
    "rodape.creditos": "Arte de Guilherme Match.",
    "espera.rotulo": "Newsletter",
    "espera.titulo": "Fique por dentro das novidades.",
    // ATENÇÃO ao mexer aqui: esta linha é lida no momento em que a pessoa
    // consente, e por isso vale tanto quanto a política de privacidade. Ela
    // prometia "sem outros envios" até 2026-08-04; se a lista voltar a ter uma
    // finalidade só, o texto encolhe de novo — e a política encolhe junto.
    "espera.apoio": "Deixe seu e-mail e receba as novidades de Mukō-Gawa em primeira mão. Para sair, basta um clique.",
    "espera.email": "Seu e-mail",
    "espera.regiao": "Sua região",
    "espera.botao": "Inscrever-se",
    "espera.naoPreencha": "Não preencha",
    "espera.erroEmail": "Confira o e-mail digitado.",
    "espera.semEndpoint": "Cadastro ainda não conectado. Falta ligar o provedor de e-mail.",
    "espera.enviando": "Enviando...",
    "espera.ok": "Pronto. Você será avisado.",
    // Usada quando o provedor pede confirmação por e-mail (double opt-in). Quem
    // escolhe entre as duas é a resposta da função, não o build: sem isso, ligar
    // a confirmação no painel deixaria o site prometendo o que não aconteceu.
    "espera.okPendente": "Quase lá: confirme no e-mail que enviamos.",
    "espera.erroEnvio": "Não deu para enviar agora. Tente de novo em instantes.",
    "espera.nota": "Edições, preços e frete são responsabilidade do varejista de cada região. As datas seguem o calendário atual da editora e podem mudar.",
    "regiao.BR": "Brasil", "regiao.US": "Estados Unidos", "regiao.JP": "Japão", "regiao.OUTRO": "Outra",
    "404.rotulo": "Erro 404",
    "404.titulo": "Página não encontrada",
    "404.texto": "O endereço que você abriu não existe, ou deixou de existir. Os caminhos abaixo continuam valendo.",
    "404.voltar": "Ir para o início",
  },

  en: {
    "nav.inicio": "Home",
    "nav.historia": "Story",
    "nav.obra": "The work",
    "nav.personagens": "Characters",
    "nav.criadores": "Creators",
    "nav.loja": "Shop",
    "nav.faq": "FAQ",
    "nav.faqCurto": "FAQ",
    "nav.abrirMenu": "Open menu",
    "nav.principal": "Main navigation",
    "nav.inicioAria": "Mukō-Gawa — home",

    "cta.aviseMe": "Notify me",
    "nav.bleedingLight": "Bleeding Light",
    "cta.apoiar": "Support",
    "catarse.seguir": "Follow the campaign",
    "cta.pular": "Skip to content",
    "cta.idioma": "Language",
    "cta.aoTopo": "Top",

    "rodape.obra": "About",
    "rodape.publicacao": "Publication",
    "rodape.listaEspera": "Newsletter",
    "rodape.emBreve": "soon",
    "rodape.direitos": "All rights reserved.",
    "rodape.frase":
      "Before humanity, a civilization went to war over the shape of reality.",
    "rodape.contato": "Contact",
    "rodape.imprensa": "Press",
    "rodape.privacidade": "Privacy",
    "rodape.creditos": "Art by Guilherme Match.",
    "espera.rotulo": "Newsletter",
    "espera.titulo": "Keep up with the news.",
    "espera.apoio": "Leave your email and get news about Mukō-Gawa first hand. One click to leave.",
    "espera.email": "Your email",
    "espera.regiao": "Your region",
    "espera.botao": "Subscribe",
    "espera.naoPreencha": "Do not fill in",
    "espera.erroEmail": "Check the email you typed.",
    "espera.semEndpoint": "Signup not connected yet. The email provider still has to be wired up.",
    "espera.enviando": "Sending...",
    "espera.ok": "Done. You will be notified.",
    "espera.okPendente": "Almost there: confirm in the email we have just sent.",
    "espera.erroEnvio": "Could not send just now. Try again in a moment.",
    "espera.nota": "Editions, pricing and shipping are handled by the retailer for each region. Dates shown are current publisher schedule and may change.",
    "regiao.BR": "Brazil", "regiao.US": "United States", "regiao.JP": "Japan", "regiao.OUTRO": "Other",
    "404.rotulo": "Error 404",
    "404.titulo": "Page not found",
    "404.texto": "The address you opened does not exist, or no longer does. The paths below still hold.",
    "404.voltar": "Go to the home page",
  },

  es: {
    "nav.inicio": "Inicio",
    "nav.historia": "Historia",
    "nav.obra": "La obra",
    "nav.personagens": "Personajes",
    "nav.criadores": "Creadores",
    "nav.loja": "Tienda",
    "nav.faq": "Preguntas frecuentes",
    "nav.faqCurto": "FAQ",
    "nav.abrirMenu": "Abrir menú",
    "nav.principal": "Navegación principal",
    "nav.inicioAria": "Mukō-Gawa — inicio",

    "cta.aviseMe": "Avísame",
    "nav.bleedingLight": "Bleeding Light",
    "cta.apoiar": "Apoyar",
    "catarse.seguir": "Sigue la campaña",
    "cta.pular": "Saltar al contenido",
    "cta.idioma": "Idioma",
    "cta.aoTopo": "Arriba",

    "rodape.obra": "Acerca",
    "rodape.publicacao": "Publicación",
    "rodape.listaEspera": "Newsletter",
    "rodape.emBreve": "pronto",
    "rodape.direitos": "Todos los derechos reservados.",
    "rodape.frase":
      "Antes de la humanidad, una civilización entró en guerra por la forma de la realidad.",
    "rodape.contato": "Contacto",
    "rodape.imprensa": "Prensa",
    "rodape.privacidade": "Privacidad",
    "rodape.creditos": "Arte de Guilherme Match.",
    "espera.rotulo": "Newsletter",
    "espera.titulo": "Mantente al día.",
    "espera.apoio": "Deja tu correo y recibe las novedades de Mukō-Gawa de primera mano. Para salir, basta un clic.",
    "espera.email": "Tu correo",
    "espera.regiao": "Tu región",
    "espera.botao": "Suscribirse",
    "espera.naoPreencha": "No rellenar",
    "espera.erroEmail": "Revisa el correo que escribiste.",
    "espera.semEndpoint": "El registro aún no está conectado. Falta enlazar el proveedor de correo.",
    "espera.enviando": "Enviando...",
    "espera.ok": "Listo. Te avisaremos.",
    "espera.okPendente": "Casi listo: confirma en el correo que te enviamos.",
    "espera.erroEnvio": "No se pudo enviar ahora. Inténtalo de nuevo en un momento.",
    "espera.nota": "Ediciones, precios y envío son responsabilidad del minorista de cada región. Las fechas siguen el calendario actual de la editorial y pueden cambiar.",
    "regiao.BR": "Brasil", "regiao.US": "Estados Unidos", "regiao.JP": "Japón", "regiao.OUTRO": "Otra",
    "404.rotulo": "Error 404",
    "404.titulo": "Página no encontrada",
    "404.texto": "La dirección que abriste no existe, o dejó de existir. Los caminos de abajo siguen valiendo.",
    "404.voltar": "Ir al inicio",
  },

  ja: {
    "nav.inicio": "ホーム",
    "nav.historia": "物語",
    "nav.obra": "作品",
    "nav.personagens": "登場人物",
    "nav.criadores": "制作",
    "nav.loja": "ショップ",
    "nav.faq": "よくある質問",
    "nav.faqCurto": "FAQ",
    "nav.abrirMenu": "メニューを開く",
    "nav.principal": "メインナビゲーション",
    "nav.inicioAria": "向こう側 — ホーム",

    "cta.aviseMe": "お知らせを受け取る",
    "nav.bleedingLight": "Bleeding Light",
    "cta.apoiar": "支援する",
    "catarse.seguir": "キャンペーンをフォロー",
    "cta.pular": "本文へ移動",
    "cta.idioma": "言語",
    "cta.aoTopo": "上へ",

    "rodape.obra": "概要",
    "rodape.publicacao": "刊行",
    "rodape.listaEspera": "ニュースレター",
    "rodape.emBreve": "準備中",
    "rodape.direitos": "無断転載を禁じます。",
    "rodape.frase":
      "人類より前に、ひとつの文明が現実の形をめぐって戦った。",
    "rodape.contato": "お問い合わせ",
    "rodape.imprensa": "メディア",
    "rodape.privacidade": "プライバシー",
    "rodape.creditos": "作画：ギリェルミ・マッチ",
    "espera.rotulo": "ニュースレター",
    "espera.titulo": "最新情報をお届けします。",
    "espera.apoio": "メールアドレスをご登録いただくと、『向こう側』の最新情報をいち早くお届けします。配信停止はいつでも可能です。",
    "espera.email": "メールアドレス",
    "espera.regiao": "地域",
    "espera.botao": "登録する",
    "espera.naoPreencha": "入力しないでください",
    "espera.erroEmail": "メールアドレスをご確認ください。",
    "espera.semEndpoint": "登録機能は未接続です。メール配信サービスの設定が必要です。",
    "espera.enviando": "送信中...",
    "espera.ok": "完了しました。お知らせします。",
    "espera.okPendente": "あと一歩です。お送りしたメールでご確認ください。",
    "espera.erroEnvio": "現在送信できませんでした。しばらくして再度お試しください。",
    "espera.nota": "版・価格・配送は各地域の販売元が取り扱います。日程は現行の刊行予定であり、変更される場合があります。",
    "regiao.BR": "ブラジル", "regiao.US": "アメリカ合衆国", "regiao.JP": "日本", "regiao.OUTRO": "その他",
    "404.rotulo": "エラー404",
    "404.titulo": "ページが見つかりません",
    "404.texto": "開いた住所は存在しないか、すでに失われている。下の道はいまも通じている。",
    "404.voltar": "トップへ",
  },
} as const;

export type Chave = keyof (typeof UI)["pt"];

/** Tradutor do idioma dado. Cai no português se faltar a chave. */
export function usarUI(idioma: Idioma) {
  return (chave: Chave): string =>
    (UI[idioma] as Record<string, string>)[chave] ?? UI.pt[chave];
}
