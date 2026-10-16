# Mukō-Gawa — o que falta para o site ficar 100%

Aberto em **2026-08-03**. Este documento existe para responder uma pergunta só:
**o que ainda precisa ser decidido para o site estar pronto de verdade.**

Ele é diferente dos outros três:

- **`PENDENCIAS.md`** é o diário do que foi feito e do que está aberto no dia a dia.
- **`PAUTA-ISRAEL.md`** é o documento escrito **para o Israel ler**, com as perguntas
  na voz dele.
- **`DEPLOY.md`** é a ordem das coisas antes de publicar.
- **Este aqui** é o mapa de decisões: quem decide, o que trava, e o que muda no site
  conforme a resposta. Serve para a conversa, não para a execução.

Legenda: **TRAVA** = o site não pode ir ao ar assim · **CUSTA** = dá para publicar,
mas o site fica pior · **ABRE** = destrava algo que hoje não existe.

---

# Checklist da call — tudo que falta, numerado

**Ordenado por quanto muda o site, não por facilidade.** Cada linha diz quem decide e
onde está o detalhe. Nada aqui está resolvido; o que já foi decidido saiu da lista.

## Bloco 1 — muda o que o leitor entende (Israel)

| # | Decisão | Detalhe |
|---|---|---|
| 1 | **"Povo proto-humano" ou "os Eternos"?** A mesma página diz as duas coisas | pauta 22 · seção 4-B, item W |
| 2 | **Quem é o protagonista da Saga?** O site tem antagonista e não tem herói | pauta 23 · seção 4-B, item X |
| 3 | **Thaevi tem arte além da capa?** E aprovar a frase que escrevemos para ele | pauta 24 · seção 2.2, G e H |
| 4 | **"Plano interdimensional" fica sem explicação?** | seção 4-B, item Y |

## Bloco 2 — muda texto em todas as páginas (Israel)

| # | Decisão | Detalhe |
|---|---|---|
| 5 | **O inglês é britânico de propósito?** Custo cresce com o tempo | pauta 25 · seção 2.1, item A |
| 6 | **"Suposição ficcional" fica na primeira frase em português?** | pauta 2 |
| 7 | **Fonte Profana, Poço Profanado ou Fontes Profanas** — qual fica | pauta 5 |
| 8 | **Arauto/Arautos e Arconte/Arcontes** nos rótulos | pauta 6 |
| 9 | **"Rebelde" e "Rebeldes"** são a mesma palavra de propósito? | pauta 7 |
| 10 | **Amunet e Satis** são descritos de fora do mundo. Fica assim? | pauta 3 |
| 11 | **Como dizer que Protogenesis e Desvelar existem** se o anime não tem produção | pauta 4 |
| 12 | **Os nove kanji das classes** não vieram dele. Servem? | pauta 14 |
| 13 | **O título do volume em japonês** está bom? | pauta 12 |

## Bloco 3 — abre coisa que hoje não existe (Israel)

| # | Decisão | Detalhe |
|---|---|---|
| 14 | **Página da Língua**: imagens do alfabeto e quanto revelar | pauta 10 · seção 2.2, item K |
| 15 | **Os quatro nomes que sumiram** voltam? | pauta 9 |
| 16 | **A escrita dos Eternos** pode virar ornamento do site? | pauta 11 |

## Bloco 4 — dados de publicação (Israel)

| # | Decisão | Detalhe |
|---|---|---|
| 17 | **Preço** por região | pauta 13 · seção 2.3, item L |
| 18 | **Editora, ISBN e classificação** | pauta 13 · seção 2.3, item M |
| 19 | **Material da sala de imprensa** para baixar | pauta, Parte 1 · seção 2.3, item N |

## Bloco 5 — travam a publicação (Bruno, não dependem do Israel)

| # | Decisão | Detalhe |
|---|---|---|
| 20 | **Criar `contact@` e `social@`** | seção 1 |
| 21 | **Qual caixa recebe os cadastros** | seção 1 |
| 22 | **Conta do formulário e `PUBLIC_WAITLIST_ENDPOINT`** | seção 1 — o único objetivo de conversão do site |
| 23 | **Identificação legal do controlador** para a LGPD | seção 1 |

## Bloco 6 — decisões de produto (Bruno) e terceiros

| # | Decisão | Detalhe |
|---|---|---|
| 24 | **Vercel Analytics** (exige corrigir a política junto) | seção 4, item S |
| 25 | **Revisão do japonês por nativo** | seção 3, item P |
| 26 | **Perfis de X e Facebook** | seção 2.3, item O |
| 27 | **Ligar o espanhol** (depois do lançamento) | seção 4, item T |
| 28 | **Virar o domínio** — só depois do aval do Israel | `DEPLOY.md`, seção 3.4 |

**São 28 decisões: 19 do Israel, 9 do Bruno.** Se a call for curta, os quatro do Bloco 1
valem mais que os vinte e quatro seguintes somados.

---

## 1. Decisões do Bruno, operacionais — **TRAVAM a publicação**

Nenhuma depende do Israel. São as quatro que impedem o site de ser publicado como
produto, e não como apresentação.

| # | O que | Por que trava |
|---|---|---|
| 1 | **Criar `contact@` e `social@`** | Os dois endereços já estão impressos no rodapé e na sala de imprensa. Publicar com e-mail que não existe é pior que não ter e-mail |
| 2 | **Decidir qual caixa recebe os cadastros** | Recomendação registrada: caixa própria (`lista@`), separada desde o primeiro cadastro |
| 3 | **Criar a conta do formulário e preencher `PUBLIC_WAITLIST_ENDPOINT`** | Sem isso o site vai ao ar com o formulário **se declarando inativo** — e ele é o **único objetivo de conversão do site inteiro** |
| 4 | **Identificação legal do controlador** | Política de privacidade sem controlador identificável não cumpre a LGPD |

**Sobre o item 3, o mais importante da lista:** o Formspree só encaminha, não dispara.
Como o FAQ promete avisar sobre o volume 1 e sobre os livros, o Buttondown resolve as
duas pontas e evita migrar a base depois.

---

## 2. Decisões do Israel — obra e texto

### 2.1 Terminologia e voz

| # | Pergunta | Estado | Impacto |
|---|---|---|---|
| A | **O inglês é britânico ou americano?** | **novo, ver abaixo** | CUSTA |
| B | Fonte Profana, Poço Profanado ou Fontes Profanas — qual fica? | pauta, pergunta 5 | CUSTA |
| C | "Rebelde" (título do Helel) e "Rebeldes" (facção) são a mesma palavra de propósito? | pauta, pergunta 7 | CUSTA |
| D | Arautos/Arauto e Arcontes/Arconte: singular e plural inconsistentes nos rótulos | pauta, pergunta 6 | CUSTA |
| E | "Suposição ficcional" fica na primeira frase em português? | pauta, pergunta 2 | CUSTA |

#### A. O inglês do autor é britânico, mas a edição em inglês é vendida nos EUA

**Medido no texto que está no ar:** o autor escreve `centre`, `colour`, `favourite`,
`honours`, `unravelling`. É **inglês britânico**, consistentemente.

**Mas a loja diz outra coisa:** a edição em inglês é vendida na **Amazon dos Estados
Unidos**, e o site descreve essa região como "English editions in print and digital,
fulfilled by Amazon".

**As duas coisas não se contradizem tecnicamente** — livro britânico se vende nos EUA
todos os dias. Mas há três lugares onde a escolha importa:

1. **O texto do site**, que hoje é britânico e ficaria estranho para o leitor
   americano em palavras como *honours*.
2. **A edição impressa**, que precisa de uma variante só: revisão americana ou
   britânica, não as duas.
3. **Qualquer ideia de bandeira ou ícone de país** no seletor de idioma — foi
   proposta e recusada justamente porque nenhuma das duas bandeiras estaria certa.

**A pergunta ao Israel:** o inglês da obra é britânico por escolha, ou é só o inglês
que ele escreve naturalmente? Se for escolha, o site mantém e a edição americana
assume isso. Se não for, vale uniformizar para americano, que é o mercado.

**Custo de mudar:** é revisão de texto em todas as páginas em inglês, não é troca de
uma palavra. Quanto antes decidir, mais barato.

### 2.2 Conteúdo que falta

| # | O que falta | Estado | Impacto |
|---|---|---|---|
| F | **Termo em português para *starlings*** | **respondido: Estrelídeos** — e decidido que **não entram no site** | resolvido |
| G | **A frase que nomeia Thaevi** na sinopse do yomikiri | escrita por nós, **aguarda aval** | CUSTA |
| H | **Thaevi tem arte própria?** | não perguntado | ABRE — se tiver, entra no elenco |
| I | **Os quatro nomes que sumiram** (Zorphael, Prince of Babylon, Veritas, Onyx Shard) | pauta, pergunta 9 | ABRE |
| J | **A escrita dos Eternos como ornamento** | pauta, pergunta 11 | ABRE |
| K | **Página da Língua**: imagens do alfabeto e escopo | pauta, item H | ABRE — é o maior diferencial do projeto |

### 2.3 Publicação

| # | O que falta | Impacto |
|---|---|---|
| L | **Preço** por região | CUSTA — o FAQ diz "ainda não definido" |
| M | **Editora, ISBN e classificação indicativa** | CUSTA — a ficha da sala de imprensa tem três "a definir" |
| N | **Material para baixar da sala de imprensa** (capa em alta, artes, logo) | CUSTA — a página existe e cada item diz "em breve" |
| O | **Perfis de X e Facebook** | ACABA — uma linha em `config/site.ts` acende o link sozinho |

---

## 3. O que precisa de terceiros, não do Israel

| # | O que | Quem | Impacto |
|---|---|---|---|
| P | **Revisão do japonês por falante nativo** | tradutor | **TRAVA o japonês**, não o site. Hoje o JA no ar é tradução nossa, e nunca passou por nativo |
| Q | **Revisão do espanhol** | tradutor | não trava: o ES está escrito e **desligado** |
| R | **Rótulos curtos de epíteto em japonês** | Israel + nativo | o site antigo deixou vários em inglês (`HERALD // COHORT`); lista em `conteudo/JA-SITE-MODELO.md` |

**Sobre o japonês, com franqueza:** ele está publicado e é a única das três línguas em
que ninguém do projeto consegue julgar a qualidade do que está no ar. As páginas do
autor vieram do site antigo e são dele; o FAQ, os rótulos de interface e tudo que
escrevemos nesta série de sessões são **tradução nossa**. Antes de o domínio virar,
isso merece um par de olhos nativos.

---

## 4. Decisões de produto que ninguém tomou ainda

Não são do Israel nem travam nada, mas o site fica melhor com elas resolvidas.

| # | O que | Recomendação |
|---|---|---|
| S | **Vercel Analytics** | Entrar. Sem cookie, uma linha, e hoje **não há como saber se a lista de espera converte**. Exige corrigir a política de privacidade junto, nos quatro idiomas, **antes** de ligar |
| T | **Ligar o espanhol** | Depois do lançamento. São quatro coisas: chave, rotas, `personagens-es.ts` e o hreflang do sitemap |
| U | **Navegação, quando a Página da Língua entrar** | Serão oito destinos e não há item redundante para trocar. Antes de agrupar em dropdown, reduzir a densidade tipográfica: medido, com tracking menor os oito cabem em menos espaço que os seis de hoje |
| V | **Imagem de compartilhamento no corte quadrado** | Ver abaixo |

#### V. A imagem de compartilhamento

**O que está certo:** ela existe, pesa 123 KB, declara `og:image:width/height`,
`twitter:card: summary_large_image` e agora também `og:image:alt`. No preview de link
do WhatsApp, que usa a proporção 1.91:1, ela aparece inteira e correta. Conferido no
site publicado.

**O que pode melhorar:** alguns clientes cortam a imagem em **quadrado**. Nesse corte,
a nossa perde a marca (fica "う側") e a tarja da data pela metade, porque a composição
põe a marca à esquerda e a figura à direita, deixando o centro vazio.

**Recomendação:** não é urgente e não afeta o WhatsApp. Se for mexer, o caminho é
compor com uma **zona segura quadrada** no centro — marca e data dentro dela, figura
sangrando para os lados. Custa uma reescrita do `ferramentas/gerar-og-principal.mjs`.

---

## 4-B. Pontas soltas de narrativa — achadas na revisão de 2026-08-03

O site já responde **o que é**, **quem luta**, **em que ordem aconteceu** e **o que sai
primeiro**. Antes desta semana não respondia nenhuma delas. Sobraram três buracos, e o
primeiro é o mais sério.

### W. "Povo proto-humano" briga com "raça angélica" — **na mesma página**

A abertura da História diz que Mukō-Gawa acompanha *"uma guerra civil entre um povo
**proto-humano** que disputa um plano interdimensional"*. Duas seções abaixo, "Os
Eternos" diz que eles são *"a **raça angélica**, os filhos do céu"*.

Não é erro de fato — "proto-human" provavelmente quer dizer *anterior ao humano*, e os
Eternos são isso. **É erro de leitura.** Quem chega lê "proto-humano" e pensa em
hominídeo, pré-história, evolução; depois lê "anjos" e não liga uma coisa na outra.
É exatamente o *"confuso e ruim de entender de primeira"* que o Bruno relatou, e que
sobreviveu porque a frase veio do site antigo e nunca foi revista.

Aparece em **quatro arquivos**: `inicio.ts`, `historia.ts`, `faq.ts` e `imprensa.ts`.

**Recomendação:** agora que o site define os Eternos, a descrição de alto nível pode
simplesmente nomeá-los. "Uma guerra civil entre os Eternos" é mais curto, mais claro e
não contradiz nada. **É texto do autor, então é decisão dele.**

### X. O site tem antagonista e não tem protagonista

Helel aparece com epíteto ("Rei dos Rebeldes"), com fala em destaque e com o rosto ao
fundo de uma seção inteira. É uma presença forte e bem construída.

**Do outro lado não há ninguém equivalente.** Os onze do elenco são apresentados lado
a lado, sem hierarquia narrativa: o leitor não sabe por quem vai acompanhar a história.
Miguel é citado como general na seção dos dois lados, mas no elenco é só mais um card.

E o protagonista do que sai primeiro — **Thaevi** — não está no elenco.

**Impacto:** um leitor de mangá decide acompanhar uma série por um personagem, não por
uma cosmologia. Hoje o site vende muito bem o mundo e não oferece ninguém para seguir.

**Recomendação:** perguntar ao Israel quem é o ponto de vista do leitor na Saga, e dar a
esse personagem o mesmo peso que Helel já tem. Custa pouco: é um bloco de destaque, não
uma página nova.

### Y. "Plano interdimensional" nunca é explicado

O termo aparece na home, na História, no FAQ e na sala de imprensa, sempre como *"a
dobra entre o que é e o que foi prometido"*, que é bonito e não explica. As seções novas
resolveram Eternos, Hoste, Rebeldes e eras, mas não esta.

**Recomendação:** ou uma linha que aterrisse o termo, ou tirá-lo da descrição de alto
nível e deixá-lo para a lore. Menor que os dois anteriores.

---

## 4-C. Resolvido em 2026-08-03, para não reabrir

- **Bandeiras no seletor de idioma:** propostas e recusadas. Ver o argumento em
  `HANDOFF.md` — o decisivo é que o texto em inglês é britânico e a loja é americana,
  então nenhuma das duas bandeiras estaria certa. O seletor ganhou o código curto
  (PT/EN/JA) ao lado do nome.
- **Botões:** ir para outra página passou a ser botão em toda parte. O link de texto
  não se anunciava como clicável no celular.
- **Hero:** zoom out, arte inteira em qualquer largura, e o botão secundário com fundo
  próprio para não sumir na asa branca.

---

## 5. Roteiro sugerido

**Para publicar de verdade:** os quatro itens da seção 1. Nada mais trava.

**Para a próxima conversa com o Israel**, em ordem de retorno:

1. **W e X (proto-humano, e quem é o protagonista)** — são os dois que mudam o quanto
   um leitor novo entende e se importa. Valem mais que todo o resto desta lista
2. **A (inglês britânico ou americano)** — quanto antes, mais barato
3. **G e H (Thaevi)** — ele é a capa e o protagonista do que sai primeiro, e ainda é
   um nome sem rosto no site
4. **L, M, N (preço, editora, ISBN, material de imprensa)** — são os "a definir" que
   um jornalista encontra
5. **K (Página da Língua)** — o maior diferencial do projeto, e o que exige mais
   material dele
6. **B, C, D, E, Y (terminologia)** — fecham pontas, não abrem nada

**Para o Bruno decidir sozinho:** S (analytics, com a política junto) e P (contratar a
revisão do japonês).
