/**
 * Política de privacidade.
 *
 * Não é firula: o site coleta e-mail de pessoas no Brasil, e a LGPD (Lei
 * 13.709/2018) exige dizer qual dado se coleta, para quê, com que base legal,
 * por quanto tempo, com quem se compartilha e como a pessoa pede para sair.
 * Sem esta página, o formulário da lista de espera não deveria ir ao ar.
 *
 * O texto descreve o que o site REALMENTE faz hoje, e isso foi verificado no
 * código, não presumido: um formulário que envia e-mail e região, nenhum
 * cookie, nenhuma analítica, nenhum rastreador de terceiro. O único
 * armazenamento local é a marca de sessão da abertura da home, que não
 * identifica ninguém. **Se qualquer uma dessas coisas mudar — e a analítica
 * está em discussão —, este texto muda junto.**
 *
 * O controlador foi identificado em 2026-08-03: é pessoa jurídica, não o autor.
 * A LGPD pede que o titular saiba a quem cobrar, e "Israel Subira" sozinho não
 * dava isso — não há como notificar juridicamente um nome sem qualificação. Por
 * isso a identificação traz razão social, CNPJ e endereço, e o nome do autor
 * continua no texto como ponte: quem chega aqui conhece "Israel Subira", não
 * conhece a empresa, e precisa entender que são a mesma origem.
 *
 * O sufixo societário foi confirmado pelo Bruno em 2026-08-04: LTDA. A razão
 * social numa política de privacidade precisa bater com o registro, senão a
 * identificação é aproximada — e aproximada é o que ela não pode ser.
 *
 * A FINALIDADE FOI AMPLIADA EM 2026-08-04, junto com a migração da lista para um
 * provedor que também dispara e-mail. Até então o texto prometia avisar do
 * lançamento e dos livros e dizia "nada além disso"; agora declara também as
 * novidades da obra. Sob a LGPD é a finalidade DECLARADA que limita o uso, não a
 * intenção de quem coleta — mandar novidades sob a redação antiga seria uso além
 * do consentido.
 *
 * A mesma promessa vivia em `espera.apoio` (src/i18n/ui.ts), lida no instante do
 * consentimento e por isso tão determinante quanto esta página. As duas foram
 * corrigidas juntas, e é assim que devem andar daqui em diante: mudou uma, muda
 * a outra, nos quatro idiomas.
 */
import type { Idioma } from "../idiomas";

export interface Secao {
  titulo: string;
  paragrafos: string[];
  lista?: string[];
}

export interface ConteudoPrivacidade {
  titulo: string;
  descricao: string;
  rotulo: string;
  lead: string;
  atualizado: string;
  secoes: Secao[];
}

/**
 * O controlador, num lugar só, porque aparece nos quatro idiomas e um dia vai
 * mudar junto. `AUTOR` fica separado de propósito: a empresa é quem responde
 * pela lei, mas é o nome do autor que o leitor reconhece.
 */
const CONTROLADOR = {
  razaoSocial: "Boanerges Produções LTDA",
  cnpj: "53.326.867/0001-06",
  endereco: "Rua Almirante Gonçalves, 2740 — Curitiba/PR, CEP 80250-150",
  /** Sem o país: cada idioma acrescenta o nome do país na própria língua. */
  enderecoInternacional: "Rua Almirante Gonçalves 2740, Curitiba, PR 80250-150",
} as const;

const AUTOR = "Israel Subira";

export const PRIVACIDADE: Record<Idioma, ConteudoPrivacidade> = {
  pt: {
    titulo: "Política de privacidade",
    descricao: "Que dados o site de Mukō-Gawa coleta, para quê, por quanto tempo e como pedir a exclusão.",
    rotulo: "Privacidade",
    lead: "Este site coleta uma coisa só: o e-mail de quem pede para ser avisado do lançamento. Esta página explica o que acontece com ele.",
    atualizado: "Atualizada em 4 de agosto de 2026.",
    secoes: [
      {
        titulo: "Quem é responsável",
        paragrafos: [
          `O responsável pelo tratamento dos dados (o "controlador", na Lei Geral de Proteção de Dados) é ${CONTROLADOR.razaoSocial}, inscrita no CNPJ sob o nº ${CONTROLADOR.cnpj}, com sede na ${CONTROLADOR.endereco}. É a empresa de ${AUTOR}, criador de Mukō-Gawa.`,
          "Para qualquer assunto relativo a dados pessoais, incluindo os pedidos descritos abaixo, o contato é contact@mukogawa.com.",
        ],
      },
      {
        titulo: "O que é coletado",
        paragrafos: [
          "Apenas o que você digita na lista de espera:",
        ],
        lista: [
          "seu endereço de e-mail;",
          "a região que você escolhe (Brasil, Estados Unidos, Japão ou outra).",
        ],
      },
      {
        titulo: "O que não é coletado",
        paragrafos: [
          "O site não usa cookies, não tem ferramenta de analítica, não tem pixel de rede social e não compartilha nada com anunciante. Não há perfilamento, não há decisão automatizada e não se coleta nome, telefone, endereço, idade ou dado de pagamento.",
          "O navegador guarda uma única marca local, para lembrar que a abertura animada da página inicial já foi exibida nesta sessão. Ela não identifica ninguém, não sai do seu aparelho e some quando você fecha a aba.",
        ],
      },
      {
        titulo: "Para que serve",
        paragrafos: [
          "O e-mail serve para avisar você quando as vendas abrirem na sua região e para anunciar cada lançamento: o yomikiri, os volumes do mangá e os livros.",
          "Serve também para enviar novidades sobre a obra — bastidores da produção, material inédito e promoções das edições. Nada fora do universo de Mukō-Gawa.",
          "O endereço não é vendido, alugado nem cedido a terceiros. Todo envio traz um link para sair da lista, e sair vale a partir do próprio pedido.",
        ],
      },
      {
        titulo: "Com que base legal",
        paragrafos: [
          "Consentimento (art. 7º, I, da LGPD). Você fornece o e-mail espontaneamente, sabendo para quê. Pode retirar o consentimento a qualquer momento, e retirar é tão simples quanto pedir.",
        ],
      },
      {
        titulo: "Com quem é compartilhado",
        paragrafos: [
          "Com o serviço que hospeda o site e com o serviço que recebe e guarda a lista de e-mails, e apenas na medida necessária para que a mensagem chegue até você. Esses fornecedores tratam os dados por conta do controlador e não podem usá-los para finalidade própria.",
          "Os servidores podem estar fora do Brasil. Nesse caso, a transferência acontece com as garantias previstas nos artigos 33 a 36 da LGPD.",
        ],
      },
      {
        titulo: "Por quanto tempo",
        paragrafos: [
          "O e-mail fica guardado enquanto você quiser receber. Ao sair da lista, os envios param; fica apenas o registro de que você saiu, justamente para garantir que nada mais chegue. Se preferir a exclusão completa, é só pedir. Encerrado o projeto, a lista é apagada.",
        ],
      },
      {
        titulo: "Seus direitos",
        paragrafos: [
          "A LGPD garante a você, a qualquer momento e sem custo:",
        ],
        lista: [
          "saber se existe algum dado seu conosco e obter uma cópia;",
          "corrigir dado incompleto, inexato ou desatualizado;",
          "pedir a exclusão do seu e-mail da lista;",
          "retirar o consentimento;",
          "saber com quem o dado foi compartilhado;",
          "reclamar à Autoridade Nacional de Proteção de Dados.",
        ],
      },
      {
        titulo: "Como exercer",
        paragrafos: [
          "Escreva para contact@mukogawa.com. Basta dizer o que você quer; não é preciso justificar. A resposta sai em até 15 dias.",
        ],
      },
      {
        titulo: "Menores de idade",
        paragrafos: [
          "Mukō-Gawa é uma obra para leitor adulto e o site não se destina a menores de 16 anos. Se um cadastro desses chegar até nós, ele é apagado.",
        ],
      },
      {
        titulo: "Segurança",
        paragrafos: [
          "O site é servido por conexão criptografada e o acesso à lista é restrito a quem precisa operá-la. Nenhum sistema é infalível; se houver incidente que traga risco relevante, os titulares e a autoridade serão comunicados, como manda o artigo 48 da LGPD.",
        ],
      },
      {
        titulo: "Mudanças",
        paragrafos: [
          "Se esta política mudar, a data acima muda junto. Alterações que afetem a finalidade do tratamento serão comunicadas por e-mail a quem estiver na lista.",
        ],
      },
    ],
  },

  en: {
    titulo: "Privacy policy",
    descricao: "What the Mukō-Gawa site collects, what for, for how long, and how to ask for deletion.",
    rotulo: "Privacy",
    lead: "This site collects one thing: the email address of readers who ask to be notified about the release. This page explains what happens to it.",
    atualizado: "Last updated 4 August 2026.",
    secoes: [
      {
        titulo: "Who is responsible",
        paragrafos: [
          `The data controller is ${CONTROLADOR.razaoSocial}, a Brazilian company registered under CNPJ ${CONTROLADOR.cnpj}, at ${CONTROLADOR.enderecoInternacional}, Brazil. It is the company of ${AUTOR}, creator of Mukō-Gawa.`,
          "For anything concerning personal data, including the requests described below, write to contact@mukogawa.com.",
        ],
      },
      {
        titulo: "What is collected",
        paragrafos: ["Only what you type into the waiting list:"],
        lista: [
          "your email address;",
          "the region you select (Brazil, United States, Japan or other).",
        ],
      },
      {
        titulo: "What is not collected",
        paragrafos: [
          "The site sets no cookies, runs no analytics, carries no social media pixel and shares nothing with advertisers. There is no profiling, no automated decision-making, and no collection of name, phone number, address, age or payment details.",
          "Your browser keeps a single local flag, to remember that the animated opening on the home page has already played in this session. It identifies no one, never leaves your device and disappears when you close the tab.",
        ],
      },
      {
        titulo: "What it is for",
        paragrafos: [
          "The email is used to tell you when sales open in your region, and to announce each release: the yomikiri, the manga volumes and the novels.",
          "It is also used to send news about the work — material from behind the scenes, previously unpublished art and offers on the editions. Nothing outside the world of Mukō-Gawa.",
          "The address is never sold, rented or passed to third parties. Every mailing carries a link to leave the list, and leaving takes effect from the request itself.",
        ],
      },
      {
        titulo: "Legal basis",
        paragrafos: [
          "Consent. You provide the address freely, knowing what it is for, and you may withdraw that consent at any time. Withdrawing is as simple as asking.",
        ],
      },
      {
        titulo: "Who it is shared with",
        paragrafos: [
          "With the service that hosts the site and the service that receives and stores the mailing list, and only as far as needed for the message to reach you. These providers process the data on behalf of the controller and may not use it for their own purposes.",
          "Servers may be located outside your country. Where that happens, the transfer is made under the safeguards required by applicable law.",
        ],
      },
      {
        titulo: "For how long",
        paragrafos: [
          "The address is kept for as long as you wish to hear from us. When you leave the list, mailings stop; all that remains is the record that you left, precisely so that nothing further reaches you. If you would rather be erased altogether, just ask. Once the project is over, the list is erased.",
        ],
      },
      {
        titulo: "Your rights",
        paragrafos: ["At any time, and at no cost, you may:"],
        lista: [
          "ask whether we hold any data about you, and get a copy;",
          "have incomplete, inaccurate or outdated data corrected;",
          "ask for your address to be removed from the list;",
          "withdraw your consent;",
          "know who the data has been shared with;",
          "complain to the relevant data protection authority.",
        ],
      },
      {
        titulo: "How to exercise them",
        paragrafos: [
          "Write to contact@mukogawa.com. Just say what you want; no justification is needed. We answer within 15 days.",
        ],
      },
      {
        titulo: "Minors",
        paragrafos: [
          "Mukō-Gawa is written for adult readers and this site is not directed at children under 16. Any such sign-up that reaches us is deleted.",
        ],
      },
      {
        titulo: "Security",
        paragrafos: [
          "The site is served over an encrypted connection and access to the list is limited to those who need to operate it. No system is infallible; should an incident occur that poses meaningful risk, affected readers and the authority will be notified.",
        ],
      },
      {
        titulo: "Changes",
        paragrafos: [
          "If this policy changes, the date above changes with it. Changes that affect the purpose of processing will be sent by email to everyone on the list.",
        ],
      },
    ],
  },

  es: {
    titulo: "Política de privacidad",
    descricao: "Qué datos recoge el sitio de Mukō-Gawa, para qué, por cuánto tiempo y cómo pedir su eliminación.",
    rotulo: "Privacidad",
    lead: "Este sitio recoge una sola cosa: el correo de quien pide aviso del lanzamiento. Esta página explica qué ocurre con él.",
    atualizado: "Actualizada el 4 de agosto de 2026.",
    secoes: [
      {
        titulo: "Quién es responsable",
        paragrafos: [
          `El responsable del tratamiento es ${CONTROLADOR.razaoSocial}, empresa brasileña inscrita en el CNPJ n.º ${CONTROLADOR.cnpj}, con domicilio en ${CONTROLADOR.enderecoInternacional}, Brasil. Es la empresa de ${AUTOR}, creador de Mukō-Gawa.`,
          "Para cualquier asunto relativo a datos personales, incluidas las solicitudes descritas abajo, escribe a contact@mukogawa.com.",
        ],
      },
      {
        titulo: "Qué se recoge",
        paragrafos: ["Solo lo que escribes en la lista de espera:"],
        lista: [
          "tu dirección de correo;",
          "la región que eliges (Brasil, Estados Unidos, Japón u otra).",
        ],
      },
      {
        titulo: "Qué no se recoge",
        paragrafos: [
          "El sitio no usa cookies, no tiene analítica, no lleva píxel de redes sociales y no comparte nada con anunciantes. No hay perfilado ni decisiones automatizadas, y no se recogen nombre, teléfono, dirección, edad ni datos de pago.",
          "El navegador guarda una única marca local, para recordar que la apertura animada de la portada ya se mostró en esta sesión. No identifica a nadie, no sale de tu dispositivo y desaparece al cerrar la pestaña.",
        ],
      },
      {
        titulo: "Para qué sirve",
        paragrafos: [
          "El correo sirve para avisarte cuando se abran las ventas en tu región y para anunciar cada lanzamiento: el yomikiri, los volúmenes del manga y los libros.",
          "También sirve para enviarte novedades sobre la obra — material de los bastidores, arte inédito y promociones de las ediciones. Nada ajeno al universo de Mukō-Gawa.",
          "La dirección no se vende, alquila ni cede a terceros. Cada envío incluye un enlace para salir de la lista, y salir surte efecto desde la propia solicitud.",
        ],
      },
      {
        titulo: "Base legal",
        paragrafos: [
          "Consentimiento. Facilitas el correo libremente, sabiendo para qué, y puedes retirarlo en cualquier momento. Retirarlo es tan sencillo como pedirlo.",
        ],
      },
      {
        titulo: "Con quién se comparte",
        paragrafos: [
          "Con el servicio que aloja el sitio y con el que recibe y guarda la lista, y solo en la medida necesaria para que el mensaje te llegue. Estos proveedores tratan los datos por cuenta del responsable y no pueden usarlos con fines propios.",
          "Los servidores pueden estar fuera de tu país. En ese caso, la transferencia se realiza con las garantías que exige la ley aplicable.",
        ],
      },
      {
        titulo: "Por cuánto tiempo",
        paragrafos: [
          "La dirección se conserva mientras quieras recibirnos. Al salir de la lista, los envíos se detienen; solo queda el registro de que saliste, precisamente para garantizar que no te llegue nada más. Si prefieres la eliminación completa, basta con pedirla. Terminado el proyecto, la lista se borra.",
        ],
      },
      {
        titulo: "Tus derechos",
        paragrafos: ["En cualquier momento y sin costo, puedes:"],
        lista: [
          "saber si tenemos algún dato tuyo y obtener una copia;",
          "corregir datos incompletos, inexactos o desactualizados;",
          "pedir que se elimine tu correo de la lista;",
          "retirar el consentimiento;",
          "saber con quién se han compartido los datos;",
          "reclamar ante la autoridad de protección de datos competente.",
        ],
      },
      {
        titulo: "Cómo ejercerlos",
        paragrafos: [
          "Escribe a contact@mukogawa.com. Basta con decir qué quieres; no hace falta justificarlo. Respondemos en un plazo de 15 días.",
        ],
      },
      {
        titulo: "Menores",
        paragrafos: [
          "Mukō-Gawa está escrita para lector adulto y este sitio no se dirige a menores de 16 años. Cualquier registro de ese tipo que nos llegue se elimina.",
        ],
      },
      {
        titulo: "Seguridad",
        paragrafos: [
          "El sitio se sirve por conexión cifrada y el acceso a la lista se limita a quien deba operarla. Ningún sistema es infalible; si ocurriera un incidente con riesgo relevante, se comunicará a los afectados y a la autoridad.",
        ],
      },
      {
        titulo: "Cambios",
        paragrafos: [
          "Si esta política cambia, la fecha de arriba cambia con ella. Los cambios que afecten a la finalidad del tratamiento se comunicarán por correo a quienes estén en la lista.",
        ],
      },
    ],
  },

  ja: {
    titulo: "プライバシーポリシー",
    descricao: "『向こう側』のサイトが取得する情報、その目的、保存期間、削除の求め方について。",
    rotulo: "プライバシー",
    lead: "本サイトが取得するのは、発売のお知らせをご希望の方のメールアドレスのみです。その取り扱いについてご説明します。",
    atualizado: "2026年8月4日 改定。",
    secoes: [
      {
        titulo: "管理者",
        paragrafos: [
          `個人情報の管理者は、ブラジル法人 ${CONTROLADOR.razaoSocial}（CNPJ ${CONTROLADOR.cnpj}、所在地：${CONTROLADOR.enderecoInternacional}, Brazil）です。『向こう側』の作者 ${AUTOR} の法人にあたります。`,
          "個人情報に関するお問い合わせ、および下記のご請求は contact@mukogawa.com までお願いいたします。",
        ],
      },
      {
        titulo: "取得する情報",
        paragrafos: ["事前登録にご入力いただいた内容のみです。"],
        lista: [
          "メールアドレス",
          "お選びいただいた地域（ブラジル・アメリカ・日本・その他）",
        ],
      },
      {
        titulo: "取得しない情報",
        paragrafos: [
          "本サイトはクッキーを使用せず、アクセス解析も、SNSの計測タグも設置していません。広告事業者への提供もありません。プロファイリングや自動的な意思決定は行わず、氏名・電話番号・住所・年齢・決済情報は取得しません。",
          "ブラウザに保存されるのは、トップページの冒頭演出をこのセッションで再生済みかどうかを記録する印がひとつだけです。個人を識別せず、お使いの端末から出ることはなく、タブを閉じると消えます。",
        ],
      },
      {
        titulo: "利用目的",
        paragrafos: [
          "お住まいの地域で販売が始まった際のご連絡、および読み切り・単行本・小説それぞれの刊行のお知らせに使用します。",
          "あわせて、作品に関する最新情報（制作の裏側、未公開の資料、各版のご案内）の配信にも使用します。『向こう側』に関わる内容に限ります。",
          "アドレスの販売・貸与・第三者への提供は行いません。すべての配信に配信停止の導線を設けており、停止はお申し出の時点から有効です。",
        ],
      },
      {
        titulo: "法的根拠",
        paragrafos: [
          "ご本人の同意に基づきます。目的をご承知のうえで任意にご提供いただくものであり、同意はいつでも撤回できます。撤回はご一報いただくだけで完了します。",
        ],
      },
      {
        titulo: "提供先",
        paragrafos: [
          "サイトを配信する事業者、およびメール配信リストを受領・保管する事業者に対し、お知らせが届くために必要な範囲でのみ提供します。これらの事業者は管理者に代わって取り扱うものであり、自らの目的での利用はできません。",
          "サーバーが国外に所在する場合があります。その場合の移転は、適用される法令が求める保護措置のもとで行われます。",
        ],
      },
      {
        titulo: "保存期間",
        paragrafos: [
          "配信をご希望いただいている間、保存します。配信を停止された場合、送信はその時点で止まります。以後お届けしないことを確実にするため、停止された記録のみを保持します。完全な削除をご希望の場合はお申し付けください。企画が終了した時点でリストは削除します。",
        ],
      },
      {
        titulo: "ご本人の権利",
        paragrafos: ["いつでも、無償で、次のことを行えます。"],
        lista: [
          "当方が情報を保有しているかの確認と、その写しの取得",
          "不完全・不正確・古い情報の訂正",
          "リストからのアドレスの削除の請求",
          "同意の撤回",
          "提供先の確認",
          "所管の個人情報保護当局への申立て",
        ],
      },
      {
        titulo: "手続き",
        paragrafos: [
          "contact@mukogawa.com までご連絡ください。ご希望をお書きいただくだけで足り、理由は不要です。15日以内に回答いたします。",
        ],
      },
      {
        titulo: "未成年の方",
        paragrafos: [
          "『向こう側』は成人読者に向けた作品であり、本サイトは16歳未満の方を対象としていません。該当する登録が届いた場合は削除します。",
        ],
      },
      {
        titulo: "安全管理",
        paragrafos: [
          "本サイトは暗号化された通信で配信され、リストへのアクセスは運用上必要な者に限定しています。完全な仕組みは存在しません。重大な危険を伴う事故が生じた場合には、対象の方および当局へご連絡いたします。",
        ],
      },
      {
        titulo: "改定",
        paragrafos: [
          "本ポリシーを改定した場合は、上記の日付も改めます。利用目的に関わる変更については、リストにご登録の方へメールでお知らせします。",
        ],
      },
    ],
  },
};
