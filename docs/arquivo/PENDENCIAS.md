# Mukō-Gawa — pendências

Atualizado em **2026-08-02**, fim da sessão da v4. Organizado por **quem decide**.

Legenda de impacto:
**trava** = bloqueia trabalho ou põe informação errada no ar ·
**abre** = destrava algo novo · **acaba** = fecha uma ponta solta.

> As perguntas para o Israel saíram deste arquivo e viraram um documento próprio,
> escrito para ele ler: **`PAUTA-ISRAEL.md`**. Aqui fica só o que a resposta dele
> muda no código.

---

## 1. Roteiro do próximo dia

Na ordem em que faz sentido atacar.

| # | O que fazer | Onde | Estado |
|---|---|---|---|
| 1 | **Criar as duas caixas de e-mail** `contact@` e `social@` | provedor do domínio | trava a publicação |
| 2 | **Definir para qual caixa vão os cadastros da lista de espera** | decisão do Bruno — ver abaixo | trava a publicação |
| 3 | **Criar a conta do formulário** (Formspree ou Buttondown) e preencher `PUBLIC_WAITLIST_ENDPOINT` no `.env` | `site/.env` | trava a publicação |
| 4 | **Colar as URLs de X e Facebook** quando os perfis existirem | `site/src/config/site.ts` — uma linha cada | acaba |
| 5 | **Levar a pauta ao Israel** | `PAUTA-ISRAEL.md` | abre o resto |
| 6 | **Virar o domínio** — só depois de o Israel aprovar o preview | `DEPLOY.md`, seção 3.4 | abre |

**O item 4 já está preparado:** os três perfis moram em `site/src/config/site.ts`.
Trocar `href: null` pela URL acende o link sozinho — o emblema deixa de ser um lugar
reservado tracejado e vira link de verdade, sem tocar em mais nada. Enquanto for
`null`, o lugar aparece marcado "em breve", que é honesto; link morto seria pior.

**Os e-mails** também estão nesse arquivo (`EMAILS.contato` e `EMAILS.imprensa`), não
mais espalhados pelo rodapé. Se o endereço mudar, muda num lugar só.

### Para onde vão os cadastros da lista de espera — **decisão pendente**

O formulário manda `{ email, regiao }` para o `PUBLIC_WAITLIST_ENDPOINT`. Falta
decidir **qual caixa recebe isso**, e a escolha não é só administrativa:

- **`contact@mukogawa.com`** — é o endereço público do rodapé. Simples, mas mistura
  cadastro de lançamento com mensagem de leitor, e na hora de disparar o aviso do
  volume 1 alguém vai ter que separar as duas coisas na mão.
- **`social@mukogawa.com`** — hoje é o endereço de imprensa. Mesma mistura, com
  agravante: é o canal que jornalista usa, e ele não deveria encher de cadastro.
- **Uma caixa própria**, tipo `lista@` ou `newsletter@` — é o que eu recomendo.
  Mantém a lista separada desde o primeiro cadastro, e quando a lista virar
  disparo de e-mail (que é o objetivo dela) já está no lugar certo.

Vale lembrar que o Formspree só encaminha; ele não é ferramenta de disparo. Se a
intenção é **enviar** o aviso do volume 1 e dos livros para essa lista — e é,
está dito no FAQ —, o Buttondown resolve as duas pontas de uma vez e evita migrar
a base depois.

**Decisão do Bruno:**

### Vercel Analytics — **sugestão do Bruno**

O Bruno levantou o ponto: o site **já está hospedado na Vercel**, então a
analítica dela é uma linha de código e nenhuma conta nova. Melhor ainda, ela não
usa cookie — logo, não puxa banner de consentimento nem obriga a reescrever a
política de privacidade.

Isso importa porque hoje **não há como saber se a lista de espera funciona**.
Publicar o site sem medir é não saber quantas pessoas chegaram, de onde vieram e
quantas se cadastraram — num site cujo objetivo inteiro é capturar e-mail.

O Bruno também observou que, estando o projeto já na Vercel, **o ideal é só
apontar o domínio `mukogawa.com` para lá**, em vez de montar hospedagem nova. A
Vercel cuida de certificado e CDN, e o site já é servido de São Paulo.

**Se entrar, a política de privacidade muda junto** — hoje ela afirma, com todas
as letras, que o site não tem ferramenta de analítica. É uma linha a corrigir em
`src/i18n/conteudo/privacidade.ts`, nos quatro idiomas, e precisa ser feita antes
de a analítica ir ao ar, não depois.

---

## 2. Operacional do Bruno

| Item | Estado | Impacto |
|---|---|---|
| **Caixa que recebe os cadastros** | não definida. Ver a seção acima | **trava a publicação** |
| **Endpoint da lista de espera** | falta criar conta e preencher `PUBLIC_WAITLIST_ENDPOINT` | **trava a publicação** — sem isso o site vai ao ar com o formulário se declarando inativo, e ele é o único objetivo de conversão |
| **E-mails** `contact@` e `social@` | precisam existir; já linkados no rodapé | trava |
| **Perfis de X e Facebook** | lugar reservado, inerte, marcado "em breve" | acaba — uma linha em `config/site.ts` |
| **Publicação** | **feita**: repositório privado no ar e Vercel conectada. Cada push publica sozinho. O preview tem `noindex` até o domínio virar | resolvido |
| **Domínio** `mukogawa.com` | serve o site antigo. Como o projeto já está na Vercel, migrar é apontar o DNS — ver `DEPLOY.md`, seção 3.4. Só depois de o Israel aprovar | abre |
| **Vercel Analytics** | sugerido pelo Bruno; sem cookie, uma linha. **Exige corrigir a política de privacidade junto** | abre — hoje não há como medir conversão |
| **Controlador da política de privacidade** | falta identificação jurídica real (nome completo ou razão social, CNPJ se houver, endereço) | **trava a publicação** — política sem controlador identificável não cumpre a LGPD |
| **Material da sala de imprensa** | a página existe e está estruturada; os arquivos não. Cada item aparece como "em breve" | acaba |
| **Página da Língua** | o Bruno vai discutir com o Israel e coletar o material. Falta: imagens do alfabeto e definição do escopo. O linguista já tem nome — Pedro Vizioli | abre — é o maior diferencial do projeto |

---

## 3. O que a resposta do Israel muda no código

Referência cruzada com `PAUTA-ISRAEL.md`. Serve para dimensionar o retrabalho antes
de perguntar, não para adiantar decisão.

### Pergunta 1 — volume 1 ou yomikiri — **RESPONDIDA E JÁ APLICADA NO SITE**

**2026-08-02, fim da sessão:** as três decisões que faltavam vieram e a troca está
feita, em **64 pontos** nos quatro idiomas. O yomikiri **substitui** o volume 1 como
lançamento; a data é **1º de dezembro de 2026** (o alvo do contador já era esse); o
título é *This Is Why We Fight*, traduzido em cada idioma. O volume 1 passou a ser
mencionado como obra futura.

O que está abaixo é o registro de como se chegou aqui.

---


**2026-08-02:** o autor confirmou que o mangá será uma série de vários volumes, todos
contando a mesma história dos livros em estilo mangá, e que **o que sai agora é um
yomikiri** — o piloto, "episódio zero", para aquecer os motores.

**O site anuncia a obra errada.** Ele afirma, em 40 lugares nos quatro idiomas, que o
primeiro volume do mangá chega em dezembro de 2026, e o contador regressivo conta para
essa data.

**Três decisões faltam antes de tocar em qualquer um dos 40 lugares:**

1. O yomikiri **substitui** o volume 1 no anúncio, ou os dois convivem?
2. **Qual data?** O site diz dezembro de 2026; o anúncio anterior do autor dizia
   "último bimestre de 2026". O contador precisa de um alvo.
3. **O yomikiri tem título?** Hoje o site trata "This Is Why We Fight" como título do
   volume 1.

O levantamento dos 40 lugares continua valendo:

**Medido nesta sessão: a data de lançamento aparece em 40 lugares**, distribuídos
assim:

| Arquivo | Ocorrências | O que é |
|---|---|---|
| `src/i18n/conteudo/loja.ts` | 16 | as três regiões, nos quatro idiomas |
| `src/i18n/conteudo/inicio.ts` | 14 | descrição, anúncio e o bloco dos formatos |
| `src/i18n/ui.ts` | 6 | título e rótulo da lista de espera |
| `src/i18n/conteudo/faq.ts` | 3 | resposta do dia exato e duas descrições |
| `src/components/Anuncio.astro` | 1 | `ALVO`, o alvo do contador regressivo |

São **quatro idiomas**, então PT e EN valem por dois cada em quase tudo. Trocar a
obra anunciada é maior que trocar a data: mexe em texto, não só em número.

O documento anterior falava em "treze pontos". Era subcontagem — provavelmente só o
português. O número medido é 40.

### Perguntas 2 a 8 — texto

Terminologia e voz. Mudança de texto nos arquivos de `src/i18n/conteudo/`. Sem efeito
em layout, exceto a 8: **Hoste e Rebeldes definem a cor** (`--lado` troca via
`[data-lado]`, aço para a Hoste e sangue para os Rebeldes). Renomear a facção é
texto; trocar quem é Hoste e quem é Rebelde repinta o site.

### Pergunta 9 — os quatro nomes

Entram como texto novo nos verbetes. Zorphael e Prince of Babylon não têm arte;
Veritas e Onyx Shard são objetos de personagens que já têm página.

### Pergunta 10 — Página da Língua (**abre**)

É a única que exige página nova. O nome do linguista já veio — **Pedro Vizioli** —,
e o FAQ credita os dois. Falta o material: as imagens do alfabeto e a decisão de
quanto revelar. Sem elas dá para montar estrutura e texto, mas a página fica
esperando a arte, que é justamente o que a justifica.

---

## 4. Revisão de idioma

- **Inglês** — pronto e no ar em `/en/`. O texto é do próprio autor, colhido do site
  antigo; o FAQ e alguns rótulos de interface são escritos por nós e merecem o olho
  do Israel.
- **Espanhol** — escrito (tradução do português), **desligado**. Não existe espanhol
  no site antigo, então não há original do autor para comparar.
- **Japonês** — **no ar** desde a v3, com rotas próprias, verbetes do autor e FAQ
  traduzido (esta linha dizia "desligado" até 2026-08-02; era resto da v2). O que
  continua aberto: os rótulos curtos de epíteto, que o próprio site antigo deixou em
  inglês (`HERALD // COHORT`, `THE WARMONGER // ARCHON` e outros), listados em
  `conteudo/JA-SITE-MODELO.md`; e o fato de que **nenhum falante nativo revisou** o
  que está publicado. Não inventamos japonês de lore, mas traduzimos o FAQ, e é isso
  que precisa de olho de nativo.

Para ligar qualquer um dos dois: `pronto: true` em `src/i18n/idiomas.ts`. Eles entram
sozinhos no seletor, no `hreflang` e na geração de rotas.

---

## 5. Resolvido — não reabrir

**Sessão de 2026-08-03, oitava rodada — acabamento e varredura (v4.6):**

- **Hero com zoom out**, a pedido do Bruno. A arte deixou de sangrar de lado a lado e
  passou a ocupar 78% encostada à direita, com a caixa em `aspect-ratio: 16/9`. Aparece
  inteira em qualquer largura. **Mas o zoom out sozinho piorou o defeito que motivou o
  pedido**: o botão "Ler a história" tinha texto branco sobre a pena branca (25,4% de
  pixels claros atrás dele, que viraram 38,9% depois do zoom). Ele ganhou fundo próprio.
- **Regressão minha, corrigida no mesmo dia:** o bloco mobile do hero não sobrescrevia
  a largura nem as máscaras, então a 375px a arte ficava com 293px e sobravam 83px de
  faixa preta à esquerda. No mobile ela volta a 100%, sem margem e sem máscara.
- **"Início" voltou ao menu.** Eu o tinha removido alegando que a marca leva à home; a
  convenção é real, mas aqui a marca é kanji, sem afordância de link. Pior: medi depois
  e **sete itens sempre couberam** — o estouro que eu vira a 1024px acontecia com seis
  também. O hambúrguer subiu para 1180px.
- **Bandeiras no seletor de idioma: propostas e recusadas.** O argumento decisivo é do
  próprio projeto: o texto em inglês é britânico e a loja em inglês é a Amazon
  americana, então nenhuma das duas bandeiras estaria certa. Entrou o código curto.
- **Ir para outra página virou botão** em toda parte. O `.link-varre` tinha o filete em
  `scaleX(0)`, visível só no hover — no celular não se anunciava como clicável nunca.
- **Varredura de fatos completa.** Cruzou tudo que o site afirma sobre a obra com os
  dados, nas 60 páginas. Achou **um** erro, e era meu: Protogenesis era "02" na História
  e "01" na página A obra. Confirmou certos os 11 personagens, 9 classes, 3 Escalões,
  5 temporadas, 7 livros, 3 séries, 8 obras e 4 eras, com os três idiomas afirmando os
  mesmos números e zero links quebrados.
- **Os onze não são "um por classe"** — o FAQ afirmava isso e é falso: Arautos e
  Arcontes têm dois cada. Corrigido nos três idiomas.
- **`PARA-100.md` criado**: o mapa das 28 decisões, com checklist no topo para a call.

**Sessão de 2026-08-03, sétima rodada — a página A obra:**

- **Página nova `/obra`, `/en/work`, `/ja/work`**, com as oito sinopses. Escolhida
  contra a alternativa de pôr tudo na História por dois motivos medidos: as sinopses
  sozinhas têm **1.214 palavras** contra **1.146** da página História inteira, que já
  media 11.207px no celular; e da **Saga III em diante o texto conta o rumo**, com
  Desvelar entregando o desfecho. Numa página que se rola, o leitor toparia com o fim
  sem escolher.
- **As quatro últimas ficam recolhidas** atrás de um aviso ("Revela o rumo da
  história"), em `<details>`, que funciona sem JavaScript. Alvo de toque de 48px.
- **A ordem é a cronologia da história**, não a de leitura — que é outra e vive no
  FAQ. A página diz isso e linka para lá.
- **Sinopse do yomikiri na home**, logo abaixo do anúncio, com os dois primeiros
  parágrafos e link para a página. O fecho fica só lá, senão não há motivo para clicar.
- **"Início" chegou a sair do menu e VOLTOU no mesmo dia.** O argumento para tirá-lo
  era a convenção de que a marca leva à home. A convenção é real, mas falhou no teste:
  aqui a marca é **kanji**, sem afordância visual de link, e o Bruno, que conhece o
  site, sentiu falta. Visitante novo sentiria mais.
- **E a vaga que se "abriu" nem era necessária.** Medido depois: sete itens cabem com
  folga (sobram 251px a 1440, 100px a 1180). O estouro que existia a 1024px acontecia
  com **seis** itens também — a causa era a largura da janela, não a quantidade de
  destinos. A remoção foi correção de um problema mal diagnosticado.
- **O hambúrguer passou a começar em 1180px** (era 920). Varrido de 960 a 1200px nos
  três idiomas com os sete itens: a 1200 cabe em PT, EN e JA; a 1120 estoura 28px em PT
  e 15px em EN. Parece alto, e é de propósito: o hero já empilha abaixo de 1280, então
  nessa faixa a página inteira está em modo estreito.
- **Fica registrado para quando a Página da Língua entrar:** serão oito destinos, e não
  há outro item redundante para trocar. Aí a navegação precisa ser repensada inteira,
  não item a item. Agrupar destinos num dropdown é a saída óbvia e é a que eu evitaria
  primeiro: esconder "Personagens" atrás de um menu custa descoberta justamente no item
  que mais atrai o público de mangá.
- **Títulos das temporadas ficam traduzidos**, por consistência com o título do
  yomikiri, que já aparece traduzido em cada idioma.
- **ES e JA das sinopses são tradução nossa**, pendentes de revisão nativa, como o
  resto do que escrevemos nesses idiomas.

**Sessão de 2026-08-03, sexta rodada — o mundo entrou na História, e foi ao ar:**

- **Publicado.** Commit `c0262cc`, tag **v4.4**, no ar em mukogawa-site.vercel.app.
  Conferido no site publicado, não só no build local: a data nova nos três idiomas, os
  Escalões na home, as três seções da História e a pergunta do yomikiri no FAQ. Os
  MP4 do hero respondem 404, como esperado.

- **A contradição dos Estrelídeos foi resolvida pelo autor**, e com uma taxonomia de
  três, não de duas: **Eterno = espírito. Estrelídeo = alma. Homem = espírito E alma,
  abrigados num corpo.** Estrelídeos são fauna angélica, não humanos. Nem Eternos nem
  Estrelídeos são vistos ou percebidos pelos homens.
- **Os Estrelídeos ficam FORA do site**, por decisão do Bruno. Não aparecem em lugar
  nenhum, não têm arte, e uma quarta categoria sem contexto só somaria ruído. O
  contraste que o site precisa é **Eterno × homem**, e é esse que está escrito.
- **Três seções novas na História**, nos quatro idiomas: *Os Eternos* (a definição que
  faltava — a palavra aparecia dezenas de vezes sem nunca ser explicada), *A Hoste e os
  Rebeldes* e *O tempo desta história* (a linha do tempo das eras).
- **As nove classes agora aparecem em três Escalões** na home. A numeração 01–09 **já
  era** essa hierarquia, do mais baixo ao mais alto; a lista plana escondia isso e a
  ordem parecia arbitrária. Só o Primeiro Escalão leva nota, porque só dele existe
  informação do autor — inventar caracterização para os outros dois seria preencher
  buraco com invenção.
- **"Três séries" desceu na página.** A História passou a abrir com o MUNDO e só depois
  dizer em que formatos ele chega. Antes o leitor topava com "cinco temporadas e dois
  longas" antes de saber quem luta contra quem.
- **"Os dois lados" usa a cor, não arte.** Aço para a Hoste, sangue para os Rebeldes,
  via `[data-lado]`. Não há ilustração para a Hoste, e dar uma só aos Rebeldes faria um
  lado parecer mais importante.
- **A inversão zombeteira Host/Guest está escrita só em EN e JA.** Em PT a facção é
  "Rebeldes" por adaptação deliberada, e o trocadilho não existe; lá o texto diz
  "espelho torto daquela que deixaram", que carrega a ideia sem depender do jogo.

**Sessão de 2026-08-02, quinta rodada — o hero perdeu o vídeo:**

- **Vídeo do hero removido** por decisão do Bruno. Ficou a arte parada, que é o
  **primeiro quadro** do vídeo, extraído em 1920×1080. Não o último: o quadro final
  fechava o enquadramento a ponto de decepar as pontas das asas, e este projeto não
  corta asa. Saíram 4,7 MB de MP4 e pôster; o `dist` caiu de **24 MB para 19 MB** e o
  **LCP da home foi de ~3,7s para 508ms**. O script que controlava o vídeo sumiu junto.
- **Um defeito antigo apareceu junto, e não era regressão.** O auditor varre `img` e
  **nunca varreu `video`** — então o corte do hero era invisível havia sessões. Medido
  agora: a 1024×900, `cover` escalava a arte pela altura e **30% da largura ficava
  fora da tela**; a 1200, 19%. Pior que o corte: a figura inflava e invadia a coluna
  do texto, com o botão secundário caindo sobre a armadura.
- **Correção:** o layout empilhado (arte em bloco próprio, texto abaixo) passou a
  começar em **1280px**, e não mais em 860. Testadas e descartadas duas saídas piores:
  ancorar a arte à direita (a figura ia para o meio do texto) e `object-fit: contain`
  (arte inteira, mas a asa cruzava o botão e a base deixava aresta dura).
- **Corte residual medido:** 1,6% a 1440px e 6,7% a 1366px, os dois **de nuvem**, com
  as asas íntegras — conferido na captura, não só no número. Abaixo de 1280 o corte é
  zero, porque a arte aparece inteira.
- **Sinopse do yomikiri trocada** a pedido do autor: a anterior entregava quem é o
  homem, qual o luto e que a guerra se decide na oração de uma criança.
- **O yomikiri é leitura opcional** e fica entre Protogenesis e a Primeira Temporada.
  Está no FAQ, nos três idiomas, em duas perguntas.

**Sessão de 2026-08-02, quarta rodada — o yomikiri entra no ar:**

- **Troca de lançamento aplicada**, 64 pontos em quatro idiomas: `ui.ts`,
  `inicio.ts`, `loja.ts`, `imprensa.ts`, `faq.ts`, `Anuncio.astro`, `CapaVolume.astro`
  e o gerador da imagem de compartilhamento. Auditado em 11 rotas × três larguras:
  zero defeito.
- **A capa que está no site é a do yomikiri**, não a do volume 1. Fecha com a resposta
  19: Thaevi, o Arauto da capa, é o protagonista do yomikiri.
- **"(piloto)" como glosa**, em PT, EN e ES. **Não em japonês:** 読み切り é palavra
  corrente lá, e glosá-la seria explicar o óbvio na língua de origem.
- **FAQ: 24 → 25 perguntas**, com "O que é um yomikiri?".
- **A tarja da imagem de compartilhamento quebrou em duas linhas** com o texto novo, e
  o fundo vermelho não acompanhou. Encurtada para "Yomikiri · 1º de dezembro de 2026":
  a peça foi desenhada para uma linha e o meio já é dito pela arte.
- **O anúncio da home cresceu para quatro linhas** e desequilibrou o bloco. A copy foi
  encurtada para a forma com parênteses e voltou a três.
- ***Genesis* virou *Protogenesis* em EN e JA**, por decisão do autor. Encerra uma das
  inconsistências que a `VOZ.md` listava. Os `*-SITE-MODELO.md` não foram tocados: são
  registro do site antigo.
- **Tom das sinopses ajustado**: vocabulário devocional genérico deu lugar ao léxico do
  mundo (Altíssimo, Altos Céus), para o site alcançar quem não é cristão sem esconder a
  base. Regra registrada: **o site nunca declara que a Saga é a narrativa bíblica** —
  o reconhecimento é do leitor.

**Sessão de 2026-08-02, terceira rodada — respostas do autor:**

- **Seis das sete perguntas novas foram respondidas** (15 a 20); a 21, fichas de
  personagem, foi descartada pelo Bruno. Registradas em `PAUTA-ISRAEL.md`.
- **`arquivo/SINOPSES.md` criado**: as oito sinopses do autor (Protogenesis, o
  Yomikiri, as cinco Sagas e Desvelar), revisadas contra a `VOZ.md` em PT e EN. É a
  primeira vez que as cinco temporadas aparecem **com título**. Aguarda aprovação: o
  arquivo não está publicado.
- **Starlings = Estrelídeos**, mas com uma contradição aberta: o primeiro material os
  descrevia como "seres mortais portadores de alma, como os humanos" e o segundo como
  "feras selvagens almáticas", fauna da Expansão, domadas pelos Eternos. Ou os humanos
  são um tipo de Estrelídeo, ou são outra coisa. Muda em que seção a palavra entra.
- **"Rebeldes" fica**, é adaptação deliberada para o PT-BR. Consequência registrada: a
  inversão zombeteira Host/Guest só pode ser explicada em EN e, em parte, em JA.
- **Profanador é exônimo**: é como a Hoste os chama, não como se chamam. A palavra
  carrega ponto de vista e só deve aparecer onde o narrador está do lado da Hoste.
- **Thaevi**, um Arauto, é o personagem da capa e protagonista do yomikiri.
- **As sinopses expõem que a Saga segue a Bíblia livro a livro** (patriarca, Êxodo,
  as coroas, o exílio, a paixão, o Apocalipse). O site nunca disse isso. Publicar é
  mudança de posicionamento e é decisão do autor. Recomendação registrada em
  `SINOPSES.md`: publicar, porque é o que resolve o leitor leigo perdido.

**Sessão de 2026-08-02, segunda rodada:**

- **Seletor de idiomas quebrado no mobile.** Medido a 375px com o menu aberto: o
  painel vazava **66,2px para fora da tela pela esquerda** e ainda era **cortado em
  37px** embaixo. Quando o seletor virou `<details>` na v3.1, o CSS do mobile não
  acompanhou: o painel de 148px herdou o `right: -1px` do desktop, onde o seletor
  encosta na direita da barra, mas no mobile ele fica ancorado à **esquerda** da
  coluna, num bloco de 61,8px — daí o x = -66,2. No mobile o painel agora abre **em
  fluxo**, empurrando o CTA, e o menu rola. Vazamento e corte em zero.
- **"Influências" saiu da História.** A informação já vivia no FAQ e não valia o
  destaque de seção; a página passa a focar no mundo. As cinco obras (Castlevania,
  Jujutsu Kaisen, Elden Ring, Sandman e Deuses Americanos) viraram **uma pergunta
  só** do FAQ, nos três idiomas no ar. Gaiman era citado em dois lugares com
  propósitos diferentes; agora a resposta sobre "obra cristã" fica com Lewis e
  Peretti, que é a linhagem dela. FAQ: 23 → **24 perguntas**, JSON-LD junto.
- **Sete perguntas novas na `PAUTA-ISRAEL.md`** (15 a 21), vindas do material de
  contexto do autor: termo em português para *starlings*, Rebeldes ou Hóspedes,
  Profanadores = Rebeldes, nomes das eras e onde o volume 1 começa, quem é o
  personagem da capa, a sinopse do mangá e quais atributos de ficha são canônicos.
  A **pergunta 8 já está respondida** pelo material: Host/Guest é escolha autoral.
- **O `.docx` da pauta ficou defasado** — ele é de 2026-08-02, 01h47, e não tem as
  sete perguntas novas. Regerar antes de mandar ao Israel.

**Sessão de 2026-08-01, segunda rodada:**

- **Sete strings de interface apareciam em português na versão inglesa** — "A
  ordem", "O Eterno", "Do caderno", "Anterior", "Próximo", "Por classe" e o
  rótulo acessível do índice. Estavam escritas direto no template. Foram para
  `ROTULOS_PERSONAGENS` nos quatro idiomas. A varredura foi refeita e não sobrou
  nenhuma; comparando o texto que o navegador recebe em PT e EN, o que ainda
  coincide é só nome próprio, marca, título de obra e o nome dos idiomas.
- **"This Is Why We Fight" fica em inglês nos dois idiomas**, por ora: é o título
  do volume e está impresso na linha de crédito da própria arte da capa. Traduzir
  o texto ao lado divergiria da imagem logo acima. Virou a pergunta 12 da pauta.
- **Página 404, `sitemap-index.xml` e `robots.txt` não existiam.** Agora existem.
  O 404 importa mais do que parece: quando a migração de domínio acontecer, todo
  link antigo em circulação vai cair nele.
- **Fonte de display com `preload`.** Ela só era descoberta depois do CSS baixar e
  ser processado: medido, CSS em 56ms e fonte em 101ms. Agora as duas começam
  juntas, em 62ms, e terminam em 70ms em vez de 146ms.
- **Seção "Três formas" compactada** — ver histórico do HANDOFF.

**Sessão de 2026-08-01, primeira rodada:**

- **Espaço morto no fim da página.** Não era resto do header/footer arquivado, como
  se suspeitou: era a `.faixa-ao-topo`, criada na v2, uma faixa de **154px** depois
  do rodapé para abrigar um botão de **78px**. O botão passou para a linha de base do
  rodapé. A página encurtou 132px e o botão continua ancorado, não flutuante.
- **A brasa atrás do contador saiu.** Eram dois gradientes radiais pulsando por trás
  do número. Não liam como fogo, liam como borrão. O número se segura sozinho: 4,4rem
  em display sobre o vermelho dá **5,3:1**, acima do piso de AA.
- **Retângulo em volta da arte dos personagens — defeito real, corrigido.** O
  `z-index: 1` na `.grade` da página de personagem criava contexto de empilhamento e
  matava o `mix-blend-mode: screen` do retrato. A arte voltava a pintar o próprio
  preto (0,0,0) sobre a `--tinta` (6,6,8) do fundo: **degrau 6,0**, seis vezes o pior
  caso que o projeto tolera. Removido o `z-index`, o degrau caiu para **0,21 no pior
  dos 11 personagens**, e a aura do lado agora passa por trás da arte em vez de ser
  tapada. Foi a **quarta** vez que esse padrão quebrou o blend neste projeto.
- **Três pacotes de fonte órfãos removidos** (`cinzel`, `cormorant-garamond`,
  `shippori-mincho-b1`), sobras da troca de tipografia da v2. Sem efeito no site —
  nenhum era importado. Voltar à tag `tipografia-cinzel-barlow` agora exige
  `npm install`.
- **Contatos e perfis centralizados** em `src/config/site.ts`.

**De sessões anteriores:**

- A tagline foi alinhada: PT passou a dizer "um conto do outro lado", tradução de "a
  tale from the other side", título do próprio site antigo. Antes as duas versões
  diziam coisas diferentes.
- "Sete livros" esclarecido: cinco da Saga mais Protogenesis e Desvelar. Bate com as
  cinco temporadas e dois filmes.
- As seções "Mitologia cristã" e "Aviso" (conteúdo adulto) **já existem** no site
  novo, com as palavras do autor. Chegaram a ser dadas como perdidas por engano.
- O corte de 2,6% na foto do Israel, na página de criadores, é de design: a moldura é
  `4/5` e o arquivo é 1000×1217. É o **único** corte que o auditor acusa em todo o
  site, e é intencional. Não afeta as artes dos personagens, que seguem em zero corte.

---

## 6. Arquivado — pode voltar, mas com outra abordagem

- **Moldura de arte no header e no footer.** Tentada duas vezes na v2: primeiro com
  forma geométrica (dentes gerados em CSS), depois com ilustração sangrando (a legião
  da Guerra pela Humanidade). Nenhuma convenceu, e a do topo ainda cortava a arte do
  hero com uma barra escura. Arquivada por decisão do Bruno. Se voltar, provavelmente
  precisa de arte feita para essa função, não reaproveitada de outra seção.
- **Navegação em massa**, no estilo portal de obra da referência japonesa. Só faz
  sentido quando houver mais destinos — Página da Língua, códex, notícias. Hoje
  seriam os mesmos 6 links espalhados em três linhas, o que é pior que o atual.
- **Escrita dos Eternos como ornamento.** Reservada até alinhar com o Israel
  (pergunta 11 da pauta). Enquanto isso, a marca de seção é o losango.
