# Mukō-Gawa — painel

**Este é o único documento que você precisa abrir.** Ele lista o que falta, quem
decide cada coisa e em que ordem. Atualizado em **2026-08-04**.

| | |
|---|---|
| Site | **https://mukogawa.com** — no ar, HTTPS, servido pela Vercel |
| Busca | **liberado.** O Google já pode indexar as 60 URLs |
| Lista de espera | **no Beehiiv**, com confirmação por e-mail, testada de ponta a ponta |
| Estado do código | 61 páginas · três idiomas · auditor em zero defeitos |
| O que falta | 3 coisas suas · 3 materiais do autor. **Nada bloqueia** |

> **Nada trava mais a publicação.** O site é um produto completo: entra em busca,
> coleta cadastro, tem política de privacidade com controlador identificado e
> quatro canais sociais no ar. O que resta abaixo melhora, não destrava.

**O histórico do que foi feito vive nos commits do repositório**, com o motivo de
cada decisão registrado. Este painel só olha para a frente.

---

## Os documentos, e para que serve cada um

| Documento | Para quem | Quando abrir |
|---|---|---|
| **`MAPA.md`** *(este)* | você | sempre. É o painel |
| **`SETUP-BEEHIIV.md`** | você | agora: é o que destrava a lista nova |
| **`DEPLOY.md`** | quem mexer em infraestrutura | domínio, DNS, e-mail, trava de índice |
| **`HANDOFF.md`** | quem mexer no código | ao retomar o trabalho técnico |
| **`conteudo/VOZ.md`** | quem escrever texto | antes de escrever qualquer texto novo |
| `arquivo/` | ninguém, por ora | histórico e pautas já respondidas |

**Não mande este painel ao autor.** Ele fala de LGPD, CNPJ e custos; o
`arquivo/SINOPSES.md` tem notas críticas sobre o texto **dele**.

---

# PARTE 0 — Concluída em 2026-08-04

**A lista de espera está no Beehiiv e funcionando.** Testada de ponta a ponta no
site em produção, com o JavaScript real:

| O que | Resultado |
|---|---|
| E-mail inválido | barra na hora, sem nem chamar o servidor |
| E-mail válido | entra no Beehiiv e o site diz "Quase lá: confirme no e-mail" |
| Confirmação por e-mail | ligada — o assinante fica `Pending` até confirmar |
| Região e idioma | chegam no assinante (`regiao=JP`, `idioma=ja`, conferidos no painel) |
| Formspree | não recebe mais nada |

**O que ainda falta, e é rápido:**

1. **Endereço no rodapé do e-mail.** Em Settings → Emails → *Email footer details*
   está "No Address Set". Todo e-mail de marketing precisa de endereço físico do
   remetente: é exigência da lei americana e os EUA são um dos seus três mercados.
   A ausência também derruba entregabilidade, porque provedor de e-mail lê isso
   como sinal de spam. Use o da empresa, o mesmo da política:
   *Boanerges Produções LTDA, Rua Almirante Gonçalves, 2740 — Curitiba/PR,
   CEP 80250-150, Brasil*.
2. **E-mail de boas-vindas**, hoje desligado. Era o motivo principal de sair do
   Formspree. Me peça e eu escrevo nos três idiomas, na voz da casa.
3. **Apagar os assinantes de teste** que eu criei: `brnf4il@gmail.com` e os quatro
   com `+teste-doi`, `+teste2`, `+teste3` e `+form`. O `social@mukogawa.com` é seu,
   fica.

---

# Histórico da Parte 0 — como a decisão foi tomada

**A decisão saiu: opção B.** O formulário do site continua exatamente como está e
uma função guarda o token no servidor. O código está pronto e testado; o site
**continua 100% estático** (a função vive fora do Astro, e isso corrige o que
estava escrito aqui antes).

**O que falta é o setup da conta, e é ação sua.** O roteiro passo a passo está em
**`SETUP-BEEHIIV.md`**: criar conta, criar a publicação, criar dois campos
personalizados, decidir o double opt-in, montar o e-mail de boas-vindas, e colar
três variáveis na Vercel. Uns vinte minutos.

**Dois avisos que valem antes de você começar:**

- **Não pule os campos personalizados.** A API do Beehiiv só aceita campos que já
  existem. Se `regiao` e `idioma` não estiverem criados, o cadastro entra sem erro
  nenhum e o dado é descartado em silêncio — você só descobriria em dezembro, na
  hora de avisar o Japão.
- **A chave de API não passa por mim.** Ela vai do painel do Beehiiv direto para o
  painel da Vercel. Se aparecer numa conversa, gere outra.

**Já resolvido nesta sessão:** a política de privacidade foi ampliada nos quatro
idiomas, e com ela mais dois lugares que repetiam a promessa antiga — o texto do
próprio formulário e uma resposta do FAQ. A mensagem de sucesso agora se ajusta
sozinha: se você ligar o double opt-in, o site passa a dizer "confirme no e-mail"
em vez de "pronto", sem precisar mexer em texto nenhum.

**Respondido em 2026-08-04:** o Formspree só recebeu seus testes, sem cadastro
real. Então não há base antiga para avisar, e a finalidade nova entra limpa.

---

# PARTE 1 — Suas pendências

| # | O que | Por que importa |
|---|---|---|
| 1 | **Material da sala de imprensa para baixar** | A página lista capa em alta, artes e logo como "em breve". Agora que o site entra em busca, um jornalista pode chegar sozinho e não levar nada. **É o mais urgente da lista** |
| 2 | **A linha no rodapé do hero, no celular** | Não consegui reproduzir em nenhum iPhone emulado, nem no dev nem no build: as três caixas coincidem ao milésimo. Para atacar preciso de três respostas suas: acontece **sempre** ou só na primeira visita da sessão? Quanto tempo dura? Some **sozinha** ou só depois que você rola? |
| 3 | **Google Search Console** *(opcional)* | Acelera a indexação e mostra por quais buscas o site aparece. Uns dez minutos, de graça. Me peça o passo a passo quando quiser |

## Para saber, não para fazer agora

- **A conta da Vercel está no plano Hobby**, cujos termos são de uso não
  comercial, e já hospeda dois domínios de projeto. A Vercel raramente age nisso,
  mas se agir, cai o site inteiro.
- **O acesso à GoDaddy é delegado** e o caminho normal dá 403. Para voltar lá:
  `account.godaddy.com/access` → "Accounts I can access" → Access Now.
- **O japonês nunca foi revisado por falante nativo.** É a única língua do site
  que ninguém do projeto lê, e isso já cobrou preço: duas páginas de personagem
  em japonês estavam sem o texto da classe, e ninguém teria notado.
- **A arte da Ariel está 8,3% fora do centro**, o mesmo defeito que o Helel tinha
  (−11,9%, já corrigido). É um comando; me diga se quer.
- **O endereço da lista é `social@mukogawa.com`**, no singular, confirmado em
  2026-08-04. É o mesmo que o site publica.
- **A operação da lista está dividida:** os cadastros chegam na caixa social, mas
  a política de privacidade manda pedidos de exclusão para `contact@`. Não é
  problema legal — é para quem operar saber onde a lista mora.

---

# PARTE 2 — O que depende do Israel

## Esperando material dele

| O que | O que falta chegar |
|---|---|
| **Página da Língua** | Imagens do alfabeto e um texto dele sobre o desenvolvimento da língua. **É o maior diferencial do projeto** e hoje não existe no site |
| **Escrita dos Eternos como ornamento** | Ele topou e vai desenhar os rabiscos |
| **Dados de publicação** | Editora, ISBN e classificação indicativa |

**Não há pergunta pendente com ele.** Tudo o que estava em aberto foi respondido
e aplicado. O histórico está em `arquivo/PERGUNTAS-TERMINOLOGIA.md`.

## Decidido, não perguntar de novo

- **Preço não vai ao site.** A obra não se mistura com monetização: a loja leva
  ao varejista e é lá que o valor vive. O FAQ já explica isso.
- **Thaevi não entra no elenco.** Ele é a capa e protagoniza o que sai primeiro,
  e o mistério é proposital. Não é falta de arte, é decisão narrativa.
- **O rival do Kharzul não tem nome porque é surpresa**, e o site usa isso como
  gancho em vez de esconder.
- **O inglês é britânico de propósito.** Fantasia usa palavras mais antigas.

> **Peça a ele para revisar direto de `mukogawa.com`.** Em rodadas anteriores,
> cerca de 90% do que ele mandou já estava publicado — ele revisava uma cópia
> antiga. Isso custa tempo dele e nosso.

---

# PARTE 3 — Procedimentos

## Como o site é atualizado

Mudança no código → `git push` → a Vercel publica sozinha em cerca de um minuto,
com HTTPS e CDN. Sem FTP, sem painel, sem upload. Você não cuida de servidor.

## Se precisar tirar o site do índice de novo

Vercel → Settings → Environment Variables → apagar `INDEXAVEL` (ou trocar para
`0`) → Redeploy. O `noindex` volta às 61 páginas e o `robots.txt` para de
anunciar o sitemap.

Vale saber que **sair do índice não é imediato**: o Google leva dias para
reprocessar. Tirar do ar é rápido; tirar da busca não é.

## Onde mexer em quê

| Quero mudar | Onde |
|---|---|
| e-mails e redes sociais | `site/src/config/site.ts` |
| texto de qualquer página | `site/src/i18n/conteudo/` |
| endereço da lista de espera | variável `PUBLIC_WAITLIST_ENDPOINT`, na Vercel |
| entrar ou sair da busca | variável `INDEXAVEL`, na Vercel |

---

# PARTE 4 — Depois do lançamento

| O que | Quando e por quê |
|---|---|
| **Vercel Analytics** | Sem cookie, uma linha. Hoje não há como saber se a lista converte. Exige corrigir a política de privacidade **antes** de ligar, nos quatro idiomas |
| **Revisão do japonês por nativo** | Contratar. É a única língua em que ninguém do projeto julga a qualidade |
| **Ligar o espanhol** | Já está escrito. São quatro coisas: chave, rotas, `personagens-es.ts` e o hreflang do sitemap |
| **Logo em vetor** | O autor não vai vetorizar. Dá para vetorizar a partir do PNG, ou a imprensa fica só com os formatos raster |

---

# Resumo de uma tela

**Agora:** endereço no rodapé do e-mail e o texto de boas-vindas — os dois últimos
fios soltos da lista. Depois, monte o material da sala de imprensa: o site já pode
ser encontrado por um jornalista, e hoje ele não leva nada.

**Quando o Israel mandar:** a Página da Língua é o maior diferencial do projeto e
a única coisa grande que ainda não existe no site.

**Antes de dezembro:** migrar a lista para uma ferramenta que também envia.
