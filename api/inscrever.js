/**
 * Lista de espera — a ponte entre o formulário do site e o Beehiiv.
 *
 * POR QUE ESTA FUNÇÃO EXISTE
 *
 * A API do Beehiiv exige token E bloqueia CORS: não dá para chamá-la do
 * navegador. As duas saídas eram usar o formulário embutido deles (e perder o
 * campo de região, a validação nos quatro idiomas, as mensagens na voz da casa e
 * o corte diagonal nos campos) ou guardar o token num servidor. Esta é a
 * segunda.
 *
 * O SITE CONTINUA ESTÁTICO. Esta pasta `api/` fica FORA do Astro: a Vercel a
 * reconhece sozinha e a transforma em função, sem adapter e sem tocar no build
 * das 61 páginas. Se um dia o projeto sair da Vercel, é este arquivo — e só ele
 * — que precisa ser recriado no destino.
 *
 * A CHAVE NUNCA VAI AO NAVEGADOR. `BEEHIIV_API_KEY` não leva o prefixo `PUBLIC_`
 * de propósito: variável `PUBLIC_` do Astro é embutida no HTML e qualquer
 * visitante lê. O que o site publica é só o caminho `/api/inscrever`.
 */

const BEEHIIV = "https://api.beehiiv.com/v2";

/** As mesmas quatro do <select>. Fechada de propósito: o que não estiver aqui
 *  não passa, porque o campo do Beehiiv é texto livre e aceitaria qualquer coisa
 *  que um robô mandasse. */
const REGIOES = new Set(["BR", "US", "JP", "OUTRO"]);

/** ES está escrito mas desligado (`pronto: false` em src/i18n/idiomas.ts). Fica
 *  aceito aqui para o dia em que ligar não depender de mexer nesta função. */
const IDIOMAS = new Set(["pt", "en", "ja", "es"]);

/** Não é validação de e-mail "de verdade" — essa não existe sem enviar uma
 *  mensagem, e é o que o double opt-in faz. Serve para recusar o obviamente
 *  quebrado antes de gastar uma chamada de API. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Freio de rajada, honesto sobre o que é: a memória morre com a instância e a
 * Vercel roda várias em paralelo, então isto NÃO é limite de taxa de verdade —
 * segura o mesmo IP martelando a mesma instância e nada além disso. O limite que
 * conta é o do próprio Beehiiv, tratado como 429 mais abaixo.
 */
const RAJADA = new Map();
const JANELA_MS = 60_000;
const MAX_POR_JANELA = 8;

function rajada(ip) {
  const agora = Date.now();
  const marcas = (RAJADA.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  marcas.push(agora);
  RAJADA.set(ip, marcas);
  if (RAJADA.size > 5000) RAJADA.clear(); // teto de memória, não precisão
  return marcas.length > MAX_POR_JANELA;
}

/** Sobe a cada mudança de comportamento desta função. Existe para responder, do
 *  lado de fora, "o deploy já chegou?" — sem precisar criar um assinante de
 *  teste a cada tentativa, que foi o que atrapalhou a verificação em
 *  2026-08-04. Aparece no header de toda resposta e no GET, que não grava nada. */
const VERSAO = 2;

export default async function handler(req, res) {
  res.setHeader("X-Inscrever-Versao", String(VERSAO));

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ erro: "metodo", versao: VERSAO });
  }

  const chave = process.env.BEEHIIV_API_KEY;
  const publicacao = process.env.BEEHIIV_PUBLICATION_ID;

  // Sem credencial a função não finge que gravou — mesma regra que o formulário
  // já seguia quando não havia endpoint. O recado no site é "cadastro ainda não
  // conectado", e não um "pronto" falso.
  if (!chave || !publicacao) {
    console.error("inscrever: falta BEEHIIV_API_KEY ou BEEHIIV_PUBLICATION_ID");
    return res.status(503).json({ erro: "desligado" });
  }

  const ip =
    (req.headers["x-forwarded-for"] ?? "").split(",")[0].trim() || "desconhecido";
  if (rajada(ip)) return res.status(429).json({ erro: "muitas" });

  const corpo =
    typeof req.body === "string" ? seguroJSON(req.body) : req.body ?? {};

  // A armadilha contra robô. O formulário do site nem chega a enviar quando ela
  // está preenchida; aqui é a segunda linha, para quem posta direto.
  // Responde 200 de propósito: dizer "recusado" ensina o robô a tentar de novo
  // sem o campo.
  if (typeof corpo.empresa === "string" && corpo.empresa.trim()) {
    return res.status(200).json({ ok: true, pendente: false });
  }

  const email = String(corpo.email ?? "").trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL.test(email)) {
    return res.status(400).json({ erro: "email" });
  }

  const regiao = String(corpo.regiao ?? "").trim().toUpperCase();
  const idioma = String(corpo.idioma ?? "").trim().toLowerCase();

  // Os campos personalizados precisam EXISTIR na publicação do Beehiiv com estes
  // nomes exatos. Se não existirem, a API aceita o cadastro e descarta o valor
  // sem erro nenhum — o dado some em silêncio. Ver SETUP-BEEHIIV.md, passo 3.
  const camposExtras = [];
  if (REGIOES.has(regiao)) camposExtras.push({ name: "regiao", value: regiao });
  if (IDIOMAS.has(idioma)) camposExtras.push({ name: "idioma", value: idioma });

  try {
    const resposta = await fetch(
      `${BEEHIIV}/publications/${encodeURIComponent(publicacao)}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${chave}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          // Quem se descadastrou e volta a preencher o formulário está pedindo
          // para entrar de novo: é ato afirmativo do titular, não reinscrição
          // por nossa conta.
          reactivate_existing: true,
          send_welcome_email: true,
          // A CONFIRMAÇÃO É DECLARADA AQUI, e não deixada a cargo do painel.
          //
          // Era "not_set" até 2026-08-04, para o painel mandar sem exigir novo
          // deploy. Medido em produção, isso não funcionava: com a confirmação
          // ligada no Beehiiv, a criação devolve "validating" — não "pending" —
          // e só depois o assinante migra para pendente. O site, lendo a
          // resposta imediata, dizia "Pronto. Você será avisado." para quem
          // ainda precisava confirmar. Exatamente a mentira que esta lógica
          // existe para impedir.
          //
          // Declarando "on", o par fica determinístico: o Beehiiv sempre pede
          // confirmação e o site sempre pode dizer que ela foi pedida.
          // EM TROCA: desligar a confirmação no painel deixou de bastar — quem
          // decide é esta linha, e mudá-la exige publicar o site.
          double_opt_override: "on",
          utm_source: "mukogawa.com",
          utm_medium: "lista-de-espera",
          referring_site: "https://mukogawa.com",
          ...(camposExtras.length ? { custom_fields: camposExtras } : {}),
        }),
      }
    );

    if (!resposta.ok) {
      // O texto do Beehiiv fica no log e NÃO vai para o navegador: mensagem de
      // erro de API é lugar clássico de vazar detalhe de conta.
      console.error("inscrever: beehiiv", resposta.status, await texto(resposta));
      if (resposta.status === 429) return res.status(429).json({ erro: "muitas" });
      if (resposta.status === 400) return res.status(400).json({ erro: "email" });
      return res.status(502).json({ erro: "provedor" });
    }

    const dados = await resposta.json().catch(() => ({}));
    const situacao = dados?.data?.status ?? "";

    // "invalid" é o Beehiiv dizendo que o endereço não existe. Para quem digitou
    // errado, isso é erro de e-mail, não falha do site.
    if (situacao === "invalid") return res.status(400).json({ erro: "email" });

    // "pending" E "validating" contam como pendência do leitor. Medido em
    // produção com a confirmação ligada: a criação devolve "validating" e o
    // assinante só aparece como Pending no painel um instante depois. Tratar
    // "validating" como resolvido fazia o site prometer o que não tinha
    // acontecido — era o defeito, não um detalhe de nomenclatura.
    //
    // "active" só volta para quem já estava na lista e se reinscreveu; aí não
    // há o que confirmar, e a mensagem curta é a verdadeira.
    const pendente = situacao === "pending" || situacao === "validating";
    return res.status(200).json({ ok: true, pendente });
  } catch (erro) {
    console.error("inscrever: falha na chamada", erro);
    return res.status(502).json({ erro: "provedor" });
  }
}

function seguroJSON(texto) {
  try {
    return JSON.parse(texto);
  } catch {
    return {};
  }
}

async function texto(resposta) {
  try {
    return (await resposta.text()).slice(0, 500);
  } catch {
    return "(sem corpo)";
  }
}
