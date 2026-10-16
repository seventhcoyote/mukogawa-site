# Mukō-Gawa — handoff

**Estado: v5. Publicado em mukogawa.com, indexado, com a lista de espera no ar.**

| | |
|---|---|
| Site | **https://mukogawa.com** — HTTPS, Vercel, **indexável** (`INDEXAVEL=1`) |
| Repositório | https://github.com/h96b/mukogawa-site — **privado** |
| Local | `npm run dev --prefix site` → **4331, mas cai para 4322 se ocupada** |
| Última sessão | 2026-08-04 — **lista migrada para o Beehiiv**, testada de ponta a ponta |
| Lista de espera | Beehiiv, com confirmação por e-mail. O Formspree saiu |
| Painel | **`MAPA.md`** — o que falta, quem decide, em que ordem |

Site de apresentação de **Mukō-Gawa**, dark fantasy sobre mitologia cristã. O que
sai primeiro é o **yomikiri — o piloto do mangá — em 1º de dezembro de 2026**, com o
título *Mukō-Gawa: Por isso Lutamos*. O volume 1 vem depois, a série de livros começa em 2027, e
o anime é o sonho por trás do projeto mas ainda não tem produção.

## O que está em aberto — leia antes de agir

**A lista saiu do Formspree e está no Beehiiv, funcionando.** Concluída em
2026-08-04, pela **opção B**: `site/api/inscrever.js` guarda o token no servidor e
o formulário do site continua igual. **Correção ao que este handoff dizia: o site
NÃO deixou de ser estático.** A pasta `api/` fica fora do Astro, a Vercel a
reconhece sozinha sem `vercel.json` nem adapter, e o build das 61 páginas não mudou.

Provado no site em produção, com o JavaScript real:

```
e-mail inválido   "Confira o e-mail digitado."  — sem nem chamar o servidor
e-mail válido     "Quase lá: confirme no e-mail que enviamos."
rota              POST /api/inscrever   ·   nenhuma chamada ao Formspree
no painel         regiao=JP  idioma=ja  ·  status Pending
```

**Os campos personalizados existem e recebem valor** — conferidos no perfil do
assinante. Eles precisam continuar existindo com os nomes exatos `regiao` e
`idioma`: a API aceita apenas campos já criados, e sem eles o cadastro entra sem
erro e o valor é descartado em silêncio.

**O que falta na lista, e não é código:** o endereço físico no rodapé do e-mail
(está "No Address Set", e é exigência da lei americana além de fator de
entregabilidade) e o texto de boas-vindas, hoje desligado. Ver `MAPA.md`, Parte 0.

**A finalidade foi ampliada nesta sessão, nos quatro idiomas** — e a promessa antiga
vivia em **três** lugares, não em um: a política de privacidade, o texto de apoio do
formulário (`espera.apoio`, lido no instante do consentimento) e uma resposta do FAQ.
Varredura do `dist` confirma zero resquícios. **Se a lista voltar a ter finalidade
única, os três encolhem juntos.**

**A base antiga não é problema: o Bruno confirmou em 2026-08-04 que o Formspree só
recebeu os testes dele, sem nenhum cadastro real.** Ninguém consentiu com a
redação antiga, então a finalidade nova entra sem dívida — não há base a migrar
nem aviso de mudança a enviar. Se um dia houver base sob uma redação e ela mudar,
aí sim o aviso é obrigatório.

---

**Documentos que mandam mais que este:**

- **`MAPA.md`** — **comece por aqui.** O painel único até a produção: o que falta, quem
  decide cada coisa e em que ordem fazer. Substituiu o `PARA-100.md`.
- **`SETUP-BEEHIIV.md`** — o roteiro de painel do Bruno para ligar a lista nova.
  Enquanto ele não terminar, a lista continua no Formspree.
- **`PAUTA-ISRAEL.md`** — **histórico.** Todas as perguntas foram respondidas e
  aplicadas até 2026-08-04. Não reenviar ao autor. O que ele decidiu está em
  `arquivo/PERGUNTAS-TERMINOLOGIA.md`.
- **`arquivo/`** — histórico, não é para consultar no dia a dia: o diário de sessões
  (`PENDENCIAS.md`), a v1 congelada, as sinopses com as notas editoriais e o antigo
  `PARA-100.md`.
- **`DEPLOY.md`** — Vercel, domínio e a ordem das coisas antes de publicar.
- **`conteudo/VOZ.md`** — a regra de escrita. Duas vozes que nunca se misturam.

---

## O projeto mudou de forma em 2026-10-16

**Tudo que o projeto precisa agora vive DENTRO do repositório.** Antes, a
documentação, as ferramentas e as artes originais ficavam na pasta acima do
repo — quem clonasse recebia o site sem o auditor, sem o gerador de fonte e sem
nenhum destes documentos, e o `npm run auditar` apontava para um caminho que não
existia na máquina dele.

```
CLAUDE.md            as regras, que o Claude Code lê sozinho
docs/                este arquivo, MAPA, DEPLOY, ENTREGA, VOZ, EMAILS, arquivo/
ferramentas/         auditor, fonte, OG, offline  (venv do Python ignorado)
assets-originais/    as artes de origem
src/ api/ public/    o site
```

Ficaram de fora, por tamanho: `versoes/` (467 MB de snapshots) e `capturas/`.

**Para entregar o projeto a outra pessoa, siga `docs/ENTREGA.md`.**

## Como rodar

```bash
npm run dev   --prefix site     # porta 4331
npm run build --prefix site     # 61 páginas
```

Astro 5 estático, Node 24. Registrado em `.claude/launch.json` como `mukogawa`.
**Acompanhar é ao vivo**: `open http://localhost:4331/`. Se a 4331 já estiver
ocupada por outro chat, reaproveite — é o mesmo projeto.

**A porta pode não ser a 4331.** Ao reiniciar o servidor, a 4331 costuma ficar em
TIME_WAIT e o Astro sobe na 4322. Confira a porta na saída antes de auditar, e
passe `BASE=http://localhost:PORTA` para o `auditar.mjs`.

O servidor cai junto com a sessão que o iniciou. Se o site "sumir", é isso;
suba de novo.

## Versões

| Tag | O que é |
|---|---|
| `v1` | primeira versão congelada e validada |
| `v2` | tipografia Zen Old Mincho, losango, botão de topo |
| `v2.1` | revisão geral: espaço morto, blend do retrato, auditor por CDP |
| `entrega-israel-1` | o que foi publicado para o Israel avaliar |
| `v3` | rodada de feedback + japonês no ar |
| `v3.1` | classes que abrem, menu de idiomas, imprensa e privacidade |
| `v3.2-estavel` | ponto de retorno antes da revisão de código |
| `v4` | revisão de código: WebP sem perda, CSS morto, varredura de erro |
| `v4.1` | seletor de idiomas no mobile; influências saem da História |
| `v4.2` | **o yomikiri virou o lançamento**, em 64 pontos nos quatro idiomas |
| `v4.3` | hero sem vídeo: arte parada, `dist` 24 MB → 19 MB, LCP 3,7s → 508ms |
| `v4.4` | o mundo entrou na História: Eternos, os dois lados, as eras, Escalões |
| `v4.5` | página **A obra** com as oito sinopses |
| `v4.6` | hero com zoom out, botões padronizados, varredura de fatos |
| `v4.7` | primeira rodada de feedback do autor sobre o site novo |
| `v5` | **estado atual do `main`** — publicado em mukogawa.com, indexado, lista de espera no ar, quatro lugares na História, artes em traço com cor no hover |

```bash
git -C site checkout v3.2-estavel      # volta ao ponto anterior à revisão
git -C site checkout v1 -- src/        # só os fontes de uma versão antiga
```

Snapshots datados de build e fonte em `versoes/`.

---

## O que está pronto

**61 páginas: 20 em português, 20 em inglês, 20 em japonês, mais a 404.**
Início, História, **A obra**, Personagens (índice + 11 verbetes), Criadores, Loja,
FAQ, Imprensa e Privacidade — as duas últimas alcançáveis só pelo rodapé.

- **Três idiomas no ar**, com menu no cabeçalho, slugs traduzidos e `hreflang`.
  Inglês e japonês são **texto do próprio autor**, colhido do site antigo.
- **ES escrito e desligado** (`pronto: false` em `src/i18n/idiomas.ts`).
- **FAQ com 25 perguntas** e JSON-LD `FAQPage` da mesma fonte do HTML.
- **Hero de arte parada.** O vídeo saiu na v4.3.
- **As nove classes abrem** na home e explicam o que cada uma é.
- **Sala de imprensa** com ficha técnica, sinopses, regras de uso e créditos.
  Os arquivos para baixar ainda não existem e aparecem como "em breve".
- **Política de privacidade** nos quatro idiomas.
- **Movimento**: abertura da home (uma vez por sessão), hero em loop de 6s,
  revelação ao rolar, contador subindo até o número real.
- **Imagem de compartilhamento** por personagem (11) e a da home, gerada.
- **Domínio próprio, indexado.** `mukogawa.com` na Vercel, DNS na GoDaddy, com o
  Microsoft 365 do domínio preservado inteiro. `INDEXAVEL=1` liberou a busca.
- **Lista de espera funcionando**, hoje no Formspree — ver "O que está em aberto".
- **Quatro canais sociais no ar**: Instagram, X, Facebook e Discord.
- **Seção "Os lugares"** na História, com as quatro artes em traço e cor no hover.
- **Seção "Os dois"**, com Kharzul e o rival sem nome.

---

## Decisões de design que não devem ser desfeitas

**Duas cores com significado.** Aço para a Hoste, sangue para os Rebeldes.
`--lado` troca sozinho via `[data-lado]`. Na seção "Os dois lados" da História a cor
é a única coisa que separa os blocos — não há arte ali de propósito, porque não existe
ilustração da Hoste e dar uma só aos Rebeldes desequilibraria a leitura.

**A taxonomia do mundo tem três naturezas, e o site só mostra duas.** Eterno é
espírito; Estrelídeo é alma; homem é espírito **e** alma, abrigados num corpo. Os
**Estrelídeos ficam fora do site** por decisão do Bruno (2026-08-03): são fauna
angélica, não aparecem em nenhuma página e não têm arte. O contraste escrito é
Eterno × homem. Se um dia entrarem, entram como bestiário, não como definição.

**O vermelho nunca vira texto pequeno.** `--sangue` (#d21c26) é preenchimento.
Para texto existe `--sangue-vivo` (#ff4d55), que passa em AA.

**`mix-blend-mode` é frágil.** Qualquer `transform`, `filter`, `opacity < 1` ou
`z-index` num ancestral cria contexto de empilhamento e mata o blend. Já quebrou
**quatro** vezes — a última na `.grade` da página de personagem, onde um
`z-index: 1` fazia a arte pintar o próprio preto e virar retângulo. O auditor
verifica sozinho.

**`isolation: isolate` não é a mesma coisa.** Também cria contexto, mas está
escrito de propósito (no `.palco` dos cards, na `.moldura`) para **conter** o
blend. O auditor separa: `blend-morto` é defeito, `blend-contido` é informativo.
Não "corrija" um `isolation` sem medir o degrau de pixel antes.

**Nada de imagem "colada".** Retângulo visível em volta de uma arte é defeito.
**Nenhuma imagem pode ser cortada** — cabeça, asa, arma e chifre nunca. Se cortar,
o corte sai da base.

**A abertura toca uma vez por sessão, e só na home.** `components/Intro.astro`.
Cinco regras que não devem ser afrouxadas: só na home; o conteúdo carrega por
baixo e nunca espera; o script que decide é síncrono e fica no topo do `<body>`,
senão dá flash; dá para pular com clique ou tecla, e quem pede menos movimento
não vê; e há um temporizador de segurança porque **animação não roda em aba
oculta** — sem ele, abrir em aba de segundo plano deixaria uma tela preta
permanente. Medido: não custa carregamento (LCP 3748ms sem, 3732ms com).

**Rótulos com `//`** são assinatura tipográfica. **Losango** é a marca de seção.

**Entrar em índice de busca é ação afirmativa.** `src/config/indexacao.ts` exige
domínio final **E** `INDEXAVEL=1` no ambiente. O padrão é fechado de propósito: com
o padrão aberto, o erro silencioso seria esquecer de fechar. Descoberto que o
gatilho não é o DNS — a Vercel preenche `VERCEL_PROJECT_PRODUCTION_URL` no clique
do "Add Domain", então `Astro.site` muda antes de qualquer registro propagar.

**O rival do Kharzul não tem nome, e isso é conteúdo.** Na seção "Os dois", o bloco
dele **não leva `data-lado`** — a cor carrega informação narrativa neste site, e de
que lado ele está é justamente o que não se sabe. Leva filete tracejado, a mesma
linguagem que o rodapé usava para perfil social inexistente. Não "conserte" isso
pondo aço.

**Ofanim, Querubim e Serafim são ANTIGOS, não Eternos.** `ehAntigo()` em
`data/personagens.ts` decide pelo número da classe (07, 08, 09), e não por posição
na lista — quem manda é o escalão. O rótulo do bloco troca sozinho.

**As artes dos lugares têm duas versões, e as duas ficam no repositório.** A de
traço (`-gravura.jpg`) é o repouso; a colorida aparece no hover, empilhada com
`opacity`. Não dá para fazer com `filter`: o traço está gravado no arquivo
(CLAHE + janela tonal estreita + inversão nas duas cenas claras). A colorida fica
com `display: none` fora do media query de hover — sem isso, o celular baixaria
uma arte que nunca vai mostrar.

**E esse `display: none` PRECISA do prefixo `.lugar`.** Corrigido em 2026-08-04,
a partir de uma foto do Bruno: sem o prefixo a regra pesa 0,3,0 e perde para
`.lugar .arte--lugar img` (0,4,1), que vem depois no arquivo e aplica
`display: block`. O resultado no celular era as duas artes **empilhadas, uma sob
a outra** — e o telefone ainda baixava a colorida, o oposto do que a regra
existia para fazer. Medido em A/B a 393px com hover desligado de verdade:

```
sem a correção   display=block · as 4 coloridas BAIXADAS
com a correção   display=none  · nenhuma baixada · hover do desktop intacto
```

**As artes de personagem são centradas ao pixel.** Nove das onze sempre estiveram;
o Helel foi corrigido em 2026-08-04 (estava -11,9%), recompondo sobre canvas preto
puro — que o `mix-blend-mode: screen` faz sumir, então não vira retângulo. **A Ariel
segue a -8,3%** e ainda não foi corrigida.

**Preço não entra no site.** Decisão do Bruno: a obra não se mistura com
monetização. A loja leva ao varejista e o FAQ diz isso com todas as letras.
**Reconfirmada em 2026-08-04**, quando a apostila (R$ 50) entrou na Loja: abrir
exceção obrigaria a reescrever a resposta do FAQ que promete o contrário.

**A APOSTILA É O PRIMEIRO ITEM COMPRÁVEL DO PROJETO** (2026-08-04). Vendida pela
Orvalho, em português, com envio dentro do Brasil. O link vive em
`config/site.ts` (`VENDAS.apostila`) e o texto em `i18n/conteudo/loja.ts`
(`disponivel`), nos quatro idiomas.

Três decisões dela que não devem ser desfeitas:

- **Bloco próprio e no topo da Loja.** O resto da página fala no futuro, e um
  item comprável perdido entre três cartões de "aguarde" não seria encontrado.
- **"Tiragem limitada" sem número.** A página do varejista não afirma nada sobre
  tiragem; quem confirmou foi o Bruno, e sem quantidade. Se um dia houver número,
  ele entra — inventar um seria afirmar o que não se sabe.
- **A palavra "anime" fica FORA.** A página do varejista descreve a obra como
  anime, mas o site afirma que o anime é o horizonte do projeto e ainda não tem
  produção. Repetir o termo numa página de venda prometeria o que não existe.
  **Pendente com o Bruno: pedir a correção ao varejista.**

A imagem do produto tem **fundo branco**, ao contrário das artes de estudo (fundo
preto, que podem sangrar). Ela é tratada como OBJETO — sombra funda e fio de luz
no topo, a mesma solução da capa do volume. Chapada sobre o preto viraria o
retângulo colado que o projeto recusa.

**Thaevi não entra no elenco.** Ele é a capa e protagoniza o yomikiri, e o mistério
é proposital. Não é falta de arte.

**Ir para outra página é BOTÃO, não link de texto.** Padronizado em 2026-08-03. O
`.link-varre` tinha o filete em `scaleX(0)`, visível só no hover: em repouso era texto
em caixa alta, sem sublinhado nem borda, idêntico a um rótulo — e **no celular, onde
não há hover, nunca aparecia nada**. Os quatro destinos da home ("Ler a história", "As
oito obras", "Saber mais", "Todos os personagens") e o da História usam
`.botao--fantasma`. O `.link-varre` ficou para link **dentro de texto corrido**, e
ganhou filete permanente que só troca de cor no hover.

**Bandeira não representa idioma — proposto e recusado em 2026-08-03.** Bandeira é
país. Português é de Brasil, Portugal, Angola e mais; escolher uma exclui as outras.
E o caso do inglês é pior aqui: **o texto do autor é britânico** (`centre`, `colour`,
`favourite`, `honours`) mas **a edição em inglês é vendida na Amazon dos Estados
Unidos** — qualquer das duas bandeiras informa errado. Some a isso que o seletor
fechado ocupa 62px de uma barra de 1360 (4,6%) e o painel FLUTUA, então não havia
espaço a ganhar. Fica o nome na própria língua, com o código curto como assinatura.

**`gap` num grid com subgrid precisa ser declarado por eixo.** Um `gap` único
vale também para as linhas herdadas, e o espaçamento interno vira gap + margin
somados — foi o que esparramou os "Três formas" (57px onde se queria 18). E o
subgrid deve declarar o **próprio `row-gap`**.

**A Zen Old Mincho reserva caixa de linha de fonte CJK**, então a linha de um
título sobra ~13px além do texto. Margin não tira essa folga, só escolhe de que
lado ela cai; `align-self` é o controle real.

**Entrar em índice de busca é ação afirmativa, não consequência do endereço.**
Mudado em 2026-08-03, quando o domínio foi virado antes de o site estar pronto como
produto. Antes, chegar em `mukogawa.com` bastava e o `noindex` sumia sozinho — o que
teria posto em índice um site com o formulário se declarando inativo, dois e-mails no
rodapé que não recebem e a política sem controlador. Agora a regra mora em
`src/config/indexacao.ts` e exige **domínio final E `INDEXAVEL=1` no ambiente**. O
padrão é fechado de propósito: com o padrão aberto, o erro silencioso seria esquecer
de fechar. Medido nos três cenários — apex sem a variável: 61/61 com `noindex`; apex
com ela: 0/61 e sitemap anunciado; preview com ela: 61/61, porque a trava do domínio
vale por cima.

**O endereço que o build enxerga muda no "Add Domain", não na propagação do DNS.**
Medido logo depois de adicionar o domínio ao projeto, com o DNS ainda inteiro na
GoDaddy: o canonical do preview já saía como `https://mukogawa.com/`. O
`astro.config.mjs` deriva o `site` de `VERCEL_PROJECT_PRODUCTION_URL`, e a Vercel
preenche essa variável no instante do clique. Sob a lógica antiga o `noindex` teria
sumido ali, servido pelo `.vercel.app`, que é público. A janela de risco era mais
curta do que parecia.

**O DNS do domínio fica na GoDaddy, e trocar nameservers quebraria o e-mail.**
`mukogawa.com` já servia uma caixa **Microsoft 365 comprada via GoDaddy** antes da
migração (MX para `mail.protection.outlook.com`, TXT `MS=` de verificação e SPF
`secureserver.net`). O caminho de nameservers que a Vercel oferece apagaria os três.
Só os registros `A` da raiz e `CNAME` do `www` mudam. Detalhe do painel: o checkbox
"Redirect apex domains to www" precisa ficar **desmarcado** — o canônico é a raiz em
`astro.config.mjs` e em `indexacao.ts`, e forçar o www faria a trava de índice nunca
liberar, sem erro visível.

**A política de privacidade descreve o que o site faz, não o que é praxe.** Ela
afirma que não há cookie, analítica nem rastreador — verificado no código.
**Qualquer coleta nova muda esse texto antes de ir ao ar**, nos quatro idiomas.

**Header e footer com moldura de arte:** tentado duas vezes e **arquivado por
decisão do Bruno**. Pode voltar, com outra abordagem.

---

## Tipografia e imagem

**Display é Zen Old Mincho**, texto é Barlow, interface é Barlow Condensed.
Cinzel saiu porque não tem CJK. O CJK vai subsetado com apenas os caracteres
usados: 1,9 MB → 261 KB. **Regerar com `node ferramentas/gerar-fonte-kanji.mjs`
sempre que entrar caractere novo** — inclusive ao criar página nova.

**O SUBSETTER DEPENDE DE UM VENV EM `/tmp`, E `/tmp` É APAGADO.** O script chama
`/tmp/fontenv/bin/pyftsubset`, e em 2026-08-04 ele já não existia — o macOS
limpou. O erro é um `spawnSync ENOENT` no meio de um despejo enorme de argumentos,
e não se parece nada com "faltou instalar uma dependência". Para reconstruir:

```bash
rm -rf /tmp/fontenv && python3 -m venv --clear /tmp/fontenv
/tmp/fontenv/bin/python3 -m ensurepip --upgrade
/tmp/fontenv/bin/pip install fonttools brotli
```

Cuidado com um detalhe: `python3 -m venv` sozinho pode criar o ambiente **sem
pip** (aconteceu aqui, com Python 3.14 do Homebrew), e aí `pip install` falha com
uma mensagem confusa sobre módulo. O `ensurepip` acima resolve. **Se um dia valer
a pena, mover o venv para dentro do projeto acaba com esse problema.**

**Artes de personagem** (card e splash): geradas de `assets-originais/` por um
pipeline que apaga rótulo e assinatura, normaliza o fundo para preto puro e
encaixa numa moldura 4:5.

**Artes de estudo** ("Do caderno"): caminho diferente, por motivo medido. Mantêm
as escritas do Bretas **de propósito** e são servidas de `public/estudos/` como
**WebP sem perda**, fora do pipeline do Astro. A distinção importa: o que
estragava estas artes era o WebP **com perda**, que reintroduzia ruído entre 1 e
29 no fundo e fazia a arte virar retângulo sobre a seção preta. O **sem perda** é
bit-a-bit idêntico ao PNG — verificado nos 14 arquivos — e pesa 38,8% menos.

Os painéis de mangá do Match (`satis`, `satis-busto`, `satis-estudo`) continuam
no pipeline: têm fundo claro e não sofrem disso.

**"Yomikiri" leva a glosa "(piloto)" em PT, EN e ES, e NÃO em japonês.** 読み切り é
palavra corrente para o leitor japonês; glosar seria explicar o óbvio na língua de
origem. A glosa existe porque o site fala com quem nunca leu mangá.

**O hero não tem mais vídeo** (v4.3, 2026-08-02). É `src/assets/hero/hero.png`, o
primeiro quadro do vídeo antigo extraído em 1920×1080, servido pelo pipeline do Astro.
Se algum dia voltar a haver vídeo ali, a receita que funcionava era: H.264 high, CRF 23
no 1080p e 24 no 720p, `+faststart`, sem áudio — 29 MB viravam 2,8 MB e 1,3 MB.

**O auditor varre `img` e não varre `video`.** Isso escondeu por sessões um corte de
30% no hero. Qualquer arte que entre como `<video>`, `background-image` ou `<canvas>`
está fora da medição e precisa de conferência à mão.

**A imagem de compartilhamento é renderizada no navegador**, não composta por
sharp+SVG — `ferramentas/gerar-og-principal.mjs`. O motivo é a fonte: por SVG a
Mincho cairia num fallback do sistema. **Regerar sempre que a logo ou a data
mudarem.**

---

## Ferramentas

| Script | O que faz |
|---|---|
| `ferramentas/auditar.mjs` | audita rotas por CDP, em qualquer largura, e captura |
| `ferramentas/gerar-offline.mjs` | pacote offline: caminhos relativos, valida, zipa |
| `ferramentas/gerar-og.mjs` | imagem de compartilhamento por personagem |
| `ferramentas/gerar-og-principal.mjs` | o og.jpg da home |
| `ferramentas/normalizar-estudos.mjs` | zera o fundo das artes de estudo, grava WebP sem perda |
| `ferramentas/gerar-fonte-kanji.mjs` | subseta a fonte japonesa |

---

## Como verificar antes de entregar

```bash
npm run auditar -- --larguras 1440,768,375 --rotas /,/faq
node ferramentas/auditar.mjs --tiro /personagens/helel --so .retrato   # captura
```

`auditar.mjs` conversa com o Chrome pelo **CDP**, o que derruba duas limitações:
**375px é medível de verdade** (`Emulation.setDeviceMetricsOverride` ignora o
limite de janela do macOS, e o script grita `MEDIÇÃO INVÁLIDA` se a largura não
bater) e **captura de área rolada funciona**.

O auditor de página é `site/public/_auditoria.js`, incluído pelo `Base.astro`
atrás de `import.meta.env.DEV`. Mede corte, contraste, vazamento, alvo de toque,
`blend-morto` e `blend-contido`. **Não precisa ser apagado à mão**: o gancho é
inerte em produção e o `npm run build` remove o arquivo do `dist/`.
`?so=<seletor>` isola um elemento no topo para captura.

**`str.replace()` em Python não avisa quando não encontra.** Dois ajustes de
breakpoint foram dados como feitos e não tinham sido: o script imprimiu "ok" e o
arquivo continuou igual, e só a CAPTURA pegou. Em edição de arquivo por script,
sempre conferir a contagem antes de trocar, ou usar uma ferramenta que falhe.

**O dev server pode servir CSS velho.** Achado em 2026-08-03: o HMR do Astro não
aplicou uma regra nova de `<style>` e o auditor mediu a cor errada — acusou um defeito
que não existia no build. **Se uma medição de estilo contradisser o CSS que está
escrito, reinicie o dev server antes de sair corrigindo.** É primo do item 6 abaixo,
pelo avesso: ali o arquivo de origem mentia sobre o navegador; aqui o navegador mentia
sobre o arquivo.

**TRÊS ARMADILHAS DE CACHE, todas encontradas em 2026-08-04, e todas fizeram uma
medição mentir.** Custaram mais tempo que qualquer defeito real desta sessão:

1. **O Astro cacheia imagem por NOME DE ARQUIVO.** Reprocessei as quatro artes dos
   lugares três vezes com tratamentos diferentes e a captura saiu **idêntica** nas
   três. Eu estava julgando a versão anterior. Se o conteúdo de um arquivo mudou
   mas o nome não, apague `site/.astro/assets` e `site/node_modules/.astro`.
2. **O dev server segura CSS e imagem mesmo depois disso.** O HMR não aplicou um
   `<style>` novo e o navegador jurava que a regra não existia — ela estava no
   build. **Reinicie o dev server** antes de concluir qualquer coisa sobre estilo.
3. **O painel de navegador devolveu `innerWidth: 0`.** Viewport zerado, layout
   degenerado, medidas sem sentido. É o defeito que o protocolo já mandava
   desconfiar. **Não use o painel para medir.**

**A prova que vale é o artefato de build**, ou o Chrome headless com viewport
imposto. Para verificar interação (hover, foco), o caminho é CDP com
`Input.dispatchMouseEvent` — foi assim que o hover das artes foi provado:

```
antes do hover        Altos Céus=0 | Haven=0 | Deserto=0 | Veilstrand=0
mouse sobre o Haven   Altos Céus=0 | Haven=1 | Deserto=0 | Veilstrand=0
```

**O EMULADOR DE CELULAR DO CDP É CEGO PARA HOVER — descoberto em 2026-08-04, e
custou três medições erradas seguidas.** `Emulation.setDeviceMetricsOverride
({mobile: true})` muda largura, densidade e user-agent, mas **não** muda as media
features `hover` e `pointer`: `matchMedia('(hover: hover)')` continua `true`, e
qualquer `@media (hover: hover)` casa num "celular" de 393px.
`Emulation.setEmulatedMedia({features:[{name:'hover',...}]})` **também não
funciona** — medido, não surte efeito nenhum. O que funciona é flag do Blink:

```
--blink-settings=primaryHoverType=1,availableHoverTypes=1,primaryPointerType=1,availablePointerTypes=1
```

Com ela `matchMedia('(hover: hover) and (pointer: fine)')` passa a devolver
`false`, e aí sim o que se mede é celular. O modo desktop não precisa de flag: o
headless padrão já é `hover: hover` / `pointer: fine`.

**`Input.dispatchMouseEvent` não produz `:hover` neste headless.** Prova por A/B:
o resultado foi idêntico com e sem a correção, nos dois casos sem acender nada. O
caminho que funciona é `CSS.forcePseudoState` com `DOM.querySelectorAll` —
exige `DOM.enable` e `CSS.enable`:

```
em repouso                 Céus=0 | Haven=0 | Mesopotâmia=0 | Véu=0
hover forçado no 2º lugar  Céus=0 | Haven=1 | Mesopotâmia=0 | Véu=0
```

**A lição maior: quando uma medição contraria o CSS que está escrito, desconfie
do INSTRUMENTO antes de mexer no site.** Aqui o CSS do build estava certo e o
medidor é que mentia. O teste que resolve é sempre o A/B — reverter só o arquivo
suspeito (`git stash push -- <arquivo>`), medir de novo, comparar. Se o "defeito"
aparece nos dois estados, ele é do medidor.

**O BEEHIIV CRIA O ASSINANTE EM `validating`, NÃO EM `pending`.** Medido em
produção em 2026-08-04, com a confirmação já ligada no painel: a criação devolve
`validating`, e só um instante depois o assinante aparece como Pending. Quem lê a
resposta imediata e trata `validating` como "sem pendência" faz o site prometer o
que não aconteceu — foi o defeito, e ele passou pela bateria de testes porque os
testes usavam o significado que a documentação sugere, não o medido.

Por isso `api/inscrever.js` declara `double_opt_override: "on"` em vez de
`not_set`: com `not_set`, o mesmo `validating` significa coisas diferentes
conforme uma configuração que o código não enxerga. **O preço é que desligar a
confirmação no painel não basta mais** — quem manda é a linha no arquivo, e
mudá-la exige publicar o site.

**A função carrega `X-Inscrever-Versao` e responde ao GET com 405 + o número.**
Existe porque verificar um deploy dela custava um POST, e todo POST cria
assinante de verdade: um `pendente: false` tanto podia ser defeito quanto código
velho ainda no ar. **Suba a versão a cada mudança de comportamento**, senão a
próxima verificação volta a ser ambígua.

```
curl -s -D - -o /dev/null https://mukogawa.com/api/inscrever | grep -i versao
```

**O AUDITOR NUNCA VÊ A PÁGINA `/confirmado` EM PORTUGUÊS.** O Chrome headless é
`en-US`, e o reencaminho por idioma dela manda o auditor para `/en/confirmed` —
então o PT, que é o caso mais apertado por ter os rótulos mais longos das três
línguas, ficava fora de toda medição. Para medir a versão portuguesa é preciso
subir o Chrome com `--lang=pt-BR --accept-lang=pt-BR,pt`. Vale para qualquer
página que venha a reencaminhar por idioma.

**AUDITAR CONTRA O PREVIEW DO BUILD NÃO MEDE NADA.** `npm run build` remove o
`_auditoria.js` do `dist/`, então `auditar.mjs` apontado para `npm run preview`
devolve "TOTAL DE DEFEITOS: 0" sem ter medido coisa alguma. Um zero vazio é pior
que um erro, porque parece aprovação. **Auditor exige dev server**; o build serve
para conferir HTML e CSS gerados, e para captura.

**CSS scoped do Astro: cuidado com a ordem no arquivo.** Escrevi duas regras que
NUNCA valeram, porque `.arte :global(img)` e `.arte .cantos` vêm depois no arquivo
com a mesma especificidade e vencem na cascata. Só apareceu porque a variante
colorida saiu idêntica à preto e branco. E ao conferir no CSS do build, cuidado
com grep: um padrão que começa a casar no meio do seletor esconde o `:hover` que
vem antes.

**Caminhos que já falharam — não repetir:**

1. **Iframe + `--dump-dom` não funciona.** O virtual-time não espera o iframe.
2. **`--window-size` não chega a 375px.** O macOS trava em ~500px. Use o CDP.
3. **`--screenshot` com rolagem devolve preto.** O compositor não repinta a área
   que estava fora da tela. Use `?so=` ou `captureBeyondViewport`.
4. **`--window-size` gigante distorce** layout com `100dvh`.
5. **Aba oculta quebra validação.** `requestAnimationFrame`,
   `IntersectionObserver` e transições não rodam com `visibilityState: hidden`.
6. **Validar o arquivo de origem não é validar o que o navegador recebe.**
   Meça o pixel renderizado.
7. **CSS não prova blend.** O que decide é o degrau de pixel medido na captura.
8. **Grep ingênuo não prova que um asset é órfão.** Caminho construído
   (`/og/${slug}.jpg`) e URL absoluta em metatag não aparecem numa busca
   literal. Cruze com o HTML **gerado**.

**Último resultado (v4):** 12 rotas × 1440/768/375px, três idiomas — corte,
contraste, vazamento, alvo de toque e blend morto em zero. Único corte no site:
2,6% na foto do Israel, que é de design. 30 rotas varridas por erro de console,
exceção e requisição falha: zero. Testado com JavaScript desligado: o site
inteiro funciona.

---

## Onde está o quê

```
01-projetos/mukogawa/
├── site/                          projeto Astro — é aqui que se trabalha
│   ├── src/config/site.ts         contatos e perfis oficiais, num lugar só
│   ├── src/data/personagens.ts    os 11: slug, lado, classe, kanji, descrição
│   ├── src/i18n/                  idiomas, rotas, strings de UI, conteúdo
│   ├── src/paginas/               corpo das páginas, parametrizado por idioma
│   ├── src/i18n/conteudo/obra.ts  as oito sinopses, com as 4 últimas recolhidas
│   ├── src/pages/                 rotas finas: PT na raiz, EN e JA em /en/ e /ja/
│   ├── src/styles/global.css      sistema visual inteiro
│   └── public/estudos/            artes de estudo em WebP sem perda
├── ferramentas/                   os seis scripts acima
├── conteudo/                      VOZ.md, GLOSSARIO-EN.md, modelos do site antigo
├── assets-originais/              artes originais — não mexer
├── versoes/                       snapshots datados
├── arquivo/                       histórico: PENDENCIAS, V1, SINOPSES, PARA-100
├── MAPA.md                        o painel até a produção — comece por aqui
├── PAUTA-ISRAEL.md · DEPLOY.md
└── Pauta-Israel-Mukogawa.docx     a pauta em Word — DEFASADA, usar o markdown
```

---

## Voz

`conteudo/VOZ.md` é a regra. O essencial: **duas vozes que nunca se misturam.** A
voz do mundo é épica (léxico bíblico, inversão sintática, ritmo ternário,
antítese no fecho). A voz da casa é seca (botões, avisos, datas). O épico nunca
invade a interface: o botão diz "Quero ser avisado", não "Ergue tua voz".

**Terminologia que muda de propósito entre idiomas** (não uniformizar):

| PT-BR | EN | JA |
|---|---|---|
| Rebeldes | the Guest | 客人 |
| Hoste | the Host | 天軍 |
| Protogenesis | Protogenesis | Protogenesis |
| Desvelar | Unveiled | Unveiled |
| Fontes Profanas | the Defiled Well | 汚された井戸 |

**Texto novo em template é dívida.** Sete strings já vazaram para o inglês por
estarem escritas direto no `.astro`. Antes de entregar:

```bash
grep -rnoE '>[^<>{}]*[A-Za-zÀ-ÿ]{3}[^<>{}]*<' site/src/**/*.astro
```

A prova final é comparar o texto que o navegador recebe em PT e EN: o que
coincidir deve ser só nome próprio, marca, título de obra e nome de idioma.

---

## Próxima rodada

A lista está pronta. O que sobrou dela é do Bruno (endereço no rodapé) ou espera
um pedido dele:

1. **Escrever o e-mail de boas-vindas** nos três idiomas, na voz da casa. É a
   primeira coisa que o leitor recebe da obra, e hoje não recebe nada.
2. **Registros DNS de envio** (DKIM/SPF) para o e-mail sair como `@mukogawa.com`,
   em vez de `mukogawa-newsletter@mail.beehiiv.com`. Mexe no mesmo DNS do
   Microsoft 365 — mesmo cuidado da migração do domínio. Ver `DEPLOY.md` 3.4.
3. **Apagar os assinantes de teste**: `brnf4il@gmail.com` e os quatro com
   `+teste-doi`, `+teste2`, `+teste3`, `+form`.
4. **Material da sala de imprensa** — o mais urgente do `MAPA.md`, e independente
   de tudo isto.
   Mexe no mesmo DNS do Microsoft 365 — mesmo cuidado da migração do domínio: só
   tocar no que precisa. Ver `DEPLOY.md` 3.4.

**Em aberto, sem reprodução: uma linha na base do hero, no celular do Bruno.**
Relatada em 2026-08-04 com foto, em `mukogawa-site.vercel.app`, com a
observação de que **some depois de um tempo**. Não reproduziu em nenhuma
tentativa, nem no dev nem no build:

| aparelho | palco | img | véu | divergência |
|---|---|---|---|---|
| SE/8 375@2 | 287,938 | 287,938 | 287,938 | 0,000px |
| 13/14 390@3 | 296,375 | 296,375 | 296,375 | 0,000px |
| 15/16 393@3 | 298,063 | 298,063 | 298,063 | 0,000px |
| Plus/Max 430@3 | 318,875 | 318,875 | 318,875 | 0,000px |

As três caixas coincidem ao milésimo e a base desce suave (rgb 13,13,13 → 0,0,0),
maior degrau entre linhas 0,9 — nada que se veja. Descartados: `Revelar` (o hero
não passa por ele, e ele já solta o `will-change`), a abertura (é overlay preto de
tela cheia, sai por opacidade) e divergência de subpixel. **Sobra o compositor do
Safari iOS, que o Chrome headless não replica.** Para atacar isso é preciso do
Bruno: se acontece sempre ou só na primeira visita da sessão, quanto tempo dura, e
se some sozinha ou ao rolar. Sem isso, mexer no hero é apostar — e o hero já tem
quatro decisões medidas em cima dele.

**Pendências independentes disso**, em `MAPA.md`:

- **Material da sala de imprensa para baixar.** É o mais urgente: o site já é
  indexável e um jornalista pode chegar sozinho, e a página só oferece "em breve".
- **A arte da Ariel a -8,3% do centro**, mesmo defeito já corrigido no Helel.
- **Página da Língua** — o maior diferencial do projeto, esperando material do autor.

**O autor não tem pergunta pendente.** Tudo foi respondido e aplicado em
2026-08-04. Peça a ele para revisar direto de `mukogawa.com`: em rodadas
anteriores cerca de 90% do que mandava já estava publicado, porque revisava uma
cópia antiga.

---

## Histórico

**v5 (2026-08-04) — 14 publicações.** Domínio `mukogawa.com` migrado da GoDaddy
para a Vercel preservando o Microsoft 365; trava de índice criada e depois
liberada; controlador legal na política (Boanerges Produções LTDA); formulário da
lista de espera ligado e testado; duas páginas de personagem em japonês estavam
sem o texto da classe; a mesma era tinha três nomes em português; os Antigos eram
chamados de Eternos; "linhagem" virou "feitura" em 15 pontos; seções novas de
**Os dois** e **Os lugares** na História, esta com quatro artes em traço e cor no
hover; Dominions nas três línguas; Fonte Profana no singular; Amunet e Satis
reescritos pelo autor; Discord no rodapé; X e Facebook acesos; Helel recentrado.


1–11. Reconstrução completa em Astro.
12. FAQ com 23 perguntas; arquitetura de idiomas e versão em inglês.
13. Rollback de tipografia; OG por personagem; movimento.
14–18. Capa do volume 1; estudos com as escritas; hero com o véu aberto.
**v1.** Alinhamento dos formatos por subgrid. Versão congelada.
**v2.** Zen Old Mincho com CJK subsetado; losango; botão de topo.
**v2.1.** Fim da página sem espaço morto (faixa de 154px para um botão de 78px);
    brasa do contador removida; **retângulo em volta da arte corrigido** (degrau
    6,0 → 0,21, um `z-index` matando o blend pela quarta vez); auditor por CDP;
    contatos centralizados; três pacotes de fonte órfãos removidos; "Três formas"
    compactados (57/59/49 → 18/16/18); sete strings de interface traduzidas;
    404, sitemap, robots; preload da fonte.
**v3.** Feedback do Israel: logo nova; hero de 6,04s em loop; "Quem está por
    trás" removida; capa animada trocada pela arte impressa; contatos oficiais;
    copy das classes e do elenco; sete respostas do FAQ; título do volume
    traduzido; **japonês no ar** com rotas, verbetes do autor e FAQ traduzido.
**v3.1.** Classes que abrem e explicam; idiomas viraram menu (129px → 62px);
    sala de imprensa e política de privacidade; imagem e texto de
    compartilhamento refeitos.
**v4.** Revisão de código: estudos em WebP sem perda (build 31 MB → 24 MB), CSS
    morto, varredura de erro em 30 rotas, teste sem JavaScript.
**v4.7.** Primeira rodada de feedback do autor sobre o site novo. A frase de abertura
    virou "Antes da humanidade... pela forma da realidade" (14 pontos em quatro
    arquivos); a linha do tempo perdeu "A queda no jardim", ganhou lead e a era **O
    Ajuste de Contas**; a sinopse do yomikiri foi reescrita pelo autor, que incorporou
    a frase-ponte que eu tinha escrito; a leitura dramatizada passou a creditar os
    dubladores brasileiros.
**v4.6.** Hero com zoom out (arte inteira em qualquer largura) e o botão secundário
    com fundo próprio, porque sumia na asa branca — medido, 25,4% de pixels claros
    atrás dele. "Início" voltou ao menu e o hambúrguer subiu para 1180px. Seletor de
    idioma com o código curto (bandeiras foram propostas e recusadas). Ir para outra
    página virou botão em toda parte. **Varredura de fatos**: cruzou tudo que o site
    afirma com os dados e achou uma numeração que dizia duas coisas.
**v4.5.** Página **A obra**: as oito sinopses, nos quatro idiomas, com as quatro
    últimas recolhidas atrás de um aviso — da Saga III em diante o texto conta o rumo
    e Desvelar entrega o desfecho. A sinopse do yomikiri também entrou na home, logo
    abaixo do anúncio. O menu ficou com **sete destinos** e o hambúrguer passou a
    começar em 1180px.
**v4.4.** O mundo entrou na História: seções novas de *Os Eternos*, *A Hoste e os
    Rebeldes* e a linha do tempo das eras, nos quatro idiomas. As nove classes passaram
    a aparecer em três Escalões na home. "Três séries" desceu, para a página abrir pelo
    mundo e só depois pelos formatos.
**v4.3.** Vídeo do hero removido: fica a arte parada, o primeiro quadro em 1920×1080.
    `dist` 24 MB → 19 MB, LCP ~3,7s → 508ms. Junto veio um defeito que estava
    escondido desde sempre — o auditor nunca varreu `video`, e o hero cortava 30% da
    largura a 1024px. O layout empilhado passou a começar em 1280px.
**v4.2.** **O yomikiri virou o lançamento.** O autor confirmou que o que sai
    primeiro é o yomikiri (o piloto), não o volume 1, em **1º de dezembro de 2026**,
    com o título *Mukō-Gawa: Por isso Lutamos*. Trocado em **64 pontos** nos quatro idiomas:
    interface, home, anúncio, contador, loja, imprensa e FAQ, mais a imagem de
    compartilhamento. *Genesis* virou **Protogenesis** também em EN e JA. FAQ: 24 →
    25, com "O que é um yomikiri?". Sinopses das oito obras revisadas em
    `arquivo/SINOPSES.md`.
**v4.1.** Seletor de idiomas consertado no mobile (vazava 66,2px para fora da tela
    e era cortado em 37px: herdava a âncora do desktop; agora abre em fluxo);
    "Influências" saiu da História e virou pergunta do FAQ, com as cinco obras
    consolidadas num lugar só; sete perguntas novas na pauta do Israel, vindas do
    material de contexto que ele mandou.
