# Os e-mails da lista de espera

Textos prontos para colar no painel do Beehiiv. Escritos em 2026-08-04, revistos
no mesmo dia para puxar mais para a história.

## A regra que rege estes textos

`VOZ.md` vale aqui como no site: **as duas vozes não se misturam.** O que mudou na
revisão não foi a regra, foi a proporção. A voz do mundo agora **abre** o e-mail e
ocupa um bloco inteiro — épico, litúrgico, sem "você" — e a voz da casa entra
depois do separador, seca, para dizer o que aconteceu e o que fazer.

Elas não se encostam. O bloco de cima narra; o de baixo informa. É a mesma
arquitetura da home, onde a lore e o formulário convivem sem que um contamine o
outro.

**Nada de lore foi inventado aqui.** Cada imagem vem do texto que já está no site:
os Eternos convocados em legiões, o tempo que não os gasta, a guerra que passa ao
lado dos homens sem ser vista, a recusa que partiu a Hoste em duas, o avesso da
ordem. Se um dia o autor mudar esses fatos, estes e-mails mudam junto.

**O japonês não foi revisado por falante nativo** — decisão do Bruno, a mesma do
resto do site.

---

# 0. Como dar cara de Mukō-Gawa aos e-mails

O texto resolve metade. A outra metade é o visual, e ele é editável — o e-mail de
confirmação sai no template branco padrão do Beehiiv porque ninguém mexeu nele
ainda, não porque não dê.

**O caminho, que não é óbvio:** Settings → Emails → seção `Preset Emails` → em
*Double Opt in Email*, clique em **`View opt in email`** → e então em
**`Edit Email`, no canto superior direito**. Sem esse segundo clique você só
visualiza.

Dentro do editor há três abas:

| Aba | O que controla |
|---|---|
| **Details** | assunto, *preview text*, autor |
| **Write** | o corpo |
| **Style** | cores, fontes, fundo |

**O `Preview text` é o campo mais esquecido e o mais visível:** é a linha que
aparece na caixa de entrada ao lado do assunto, antes de a pessoa abrir. Deixado
vazio, o cliente de e-mail preenche com o começo do corpo, o que costuma dar
resultado feio. Preencha.

## O SITE É PRETO. OS E-MAILS SÃO CLAROS.

Isto não é incoerência de marca: é a diferença entre um meio que a gente controla
e um que o cliente de e-mail reescreve.

**Foi tentado o e-mail escuro, com as cores exatas do site, e quebrou no celular**
(2026-08-04). No Gmail do telefone o fundo virou branco e o vermelho saiu
deturpado. O motivo é conhecido: **o Gmail sabe escurecer um e-mail claro, mas não
sabe lidar bem com um já escuro** — ao encontrar fundo escuro declarado, ele
frequentemente força o claro e inverte cores por conta própria. Fundo claro é o
único que sobrevive aos dois temas, porque quem usa tema escuro recebe uma versão
escurecida pelo próprio Gmail, feita direito.

**A identidade se sustenta por outros três meios**, não pelo fundo: a logo, o
vermelho da marca e a tipografia.

### As cores dos e-mails

| Campo no Beehiiv | Cor |
|---|---|
| Canvas / Outside Background | `#F5F5F6` |
| Post Background | `#FFFFFF` |
| Post Border | `#FFFFFF` |
| Text On Background | `#1A1A21` |
| Primary (fundo do botão) | `#D21C26` |
| Text on primary | `#FFFFFF` |
| Links | `#D21C26` |
| Footer background | `#F5F5F6` |

Contraste medido: `#D21C26` sobre branco dá **5,3:1** e sobre `#F5F5F6` dá
**4,5:1** — os dois passam em AA. **Aqui o vermelho PODE virar texto e link**, ao
contrário do site, onde o fundo preto obriga a usar `#ff4d55`.

**A COR DO TÍTULO MORA EM OUTRO LUGAR.** Mexer em `Text On Background` não muda o
heading — ele fica em **`Style` → aba `Advanced` → seção `Body`**, que vem
recolhida. Foi meia hora perdida nisso. O valor é o mesmo `#1A1A21`.

**Texto colado carrega a cor de origem.** O título ficou cinza claro depois da
troca de tema porque trazia `#ECECEE` gravado do tempo em que o fundo era escuro,
e cor inline vence a cor do tema. Se acontecer: apague a linha e **digite** de
novo, não cole.

### A logo

`capturas/email/logo-email-600-clara.png` — traço **preto** sobre branco puro,
600px, que é a largura útil padrão de e-mail. Funde com o `Post` sem desenhar
retângulo, porque o branco dela é exatamente o branco do fundo.

As outras duas versões em `capturas/email/` são de fundo escuro e **não servem
mais** — sobraram da tentativa que falhou.

Para gerar de novo, a ordem das operações importa: achatar sobre PRETO primeiro e
só então inverter. Inverter antes destrói o canal alpha e devolve um retângulo
chapado.

```
sharp(logo).resize({width:600}).flatten({background:'#000'}).negate()
```

### Tipografia

Se o Beehiiv oferecer serifada, use serifada nos títulos e sem serifa no corpo — é
a divisão do site (Zen Old Mincho no display, Barlow no texto). Não force a Zen Old
Mincho por webfont: cliente de e-mail costuma ignorar, e o fallback sai pior que
uma serifada honesta.

### Sempre testar no aparelho

O preview do editor não prova nada sobre o celular. **Cadastre um alias novo a cada
teste** (`+t01`, `+t02`): além de o Gmail agrupar mensagens iguais numa conversa só
— o que já fez parecer que os e-mails tinham parado de chegar —, muitos envios
idênticos para o mesmo destinatário é o padrão que filtro de spam aprende a punir.

---

# 1. E-mail de confirmação (double opt-in)

**Onde:** Settings → Emails → `Preset Emails` → *Double Opt in Email* →
`View opt in email` → **`Edit Email`** (canto superior direito).

**Por que é trilíngue:** é um preset do Beehiiv, um texto só para todo mundo, e
dispara **antes** de qualquer automação poder olhar o campo `idioma`. Como é o
único e-mail que todo assinante recebe obrigatoriamente, deixá-lo no inglês padrão
significa quebrar a língua justamente no momento mais frágil do fluxo.

Aqui o épico é uma linha só, de propósito: é um e-mail de ação, e ação se pede
seco. A história espera o próximo.

### Assunto

```
Confirme seu e-mail · Confirm your email · メールアドレスのご確認
```

### Preview text

A linha que aparece na caixa de entrada, antes de abrir. Curta, porque cliente de
e-mail corta por volta de 90 caracteres:

```
Um passo e você entra na lista do yomikiri.
```

### Corpo

```
Antes da humanidade, uma civilização entrou em guerra pela forma da realidade.

Falta um passo para acompanhá-la. Confirme que este endereço é seu e você entra
na lista de espera. Você será avisado quando as vendas abrirem na sua região.

—

Before humanity, a civilization went to war over the shape of reality.

One step left to follow it. Confirm this address is yours to join the waiting
list. We will let you know when sales open in your region.

—

人類より前に、ひとつの文明が現実の形をめぐって戦った。

その物語を追うには、あと一歩です。このメールアドレスをご確認いただくと事前登録が
完了します。お住まいの地域で販売が始まった際にお知らせします。
```

### Botão

```
Confirmar · Confirm · 確認する
```

### Abaixo do botão

```
Não foi você? Ignore esta mensagem: sem a confirmação, nada é enviado.
Not you? Ignore this message — without the confirmation, nothing is sent.
お心当たりのない場合は破棄してください。確認がなければ配信は行われません。
```

---

# 2. E-mail de boas-vindas

**Onde:** Settings → Emails → `Welcome email`, ou como automação segmentada
(ver o fim desta seção).

Sai depois da confirmação, para quem já disse sim duas vezes. É a primeira vez que
a obra fala com o leitor sem ele ter pedido nada — então precisa **entregar** o
mundo, não agradecer por ele.

## Português

### Assunto

```
A guerra que passa ao lado dos homens
```

### Corpo

```
Antes da humanidade, uma civilização entrou em guerra pela forma da realidade.

Não por território, não por ouro, não por trono. Os Eternos não se multiplicam
como os homens: são convocados em legiões, e o tempo não os gasta. Percorrem a
criação, guardam-na, cultivam-na. Cada um descobre em si um chamado — ao serviço,
à sabedoria, à beleza, à força — e do chamado endurecido nascem as nove classes.

Então veio a recusa, e a recusa partiu a Hoste em duas. Do que permaneceu,
ergueu-se a ordem que jurou guardar o Altíssimo. Do que caiu, ergueu-se o avesso
dela: espelho torto daquilo que deixaram. A Hoste os chama de Profanadores. Eles
não se chamam assim — é nome vindo da boca do inimigo, e carrega o que o inimigo
pensa deles.

E nada disso é visto. O Eterno atravessa o mundo dos homens sem ser percebido, e a
guerra que decide o destino deles passa ao lado deles.

Do outro lado está o que eles não veem.

———

Seu e-mail está confirmado. Daqui em diante você recebe o aviso quando as vendas
abrirem na sua região, e o que for saindo da obra no caminho até lá.

O QUE VEM PRIMEIRO

1º de dezembro de 2026 — o yomikiri, o piloto do mangá, com o título
Mukō-Gawa: Por isso Lutamos.

Depois dele: o volume 1, a série de livros a partir de 2027, e o arco principal
em cinco temporadas.

POR ONDE ENTRAR

A história, do começo: mukogawa.com/historia
Os onze personagens: mukogawa.com/personagens
As oito obras: mukogawa.com/obra

Edições, preços e frete são responsabilidade do varejista de cada região. As datas
seguem o calendário atual da editora e podem mudar.

Para sair da lista, o link está no rodapé deste e-mail. Sair vale a partir do
próprio pedido.
```

## English

### Assunto

```
The war that passes beside men
```

### Corpo

```
Before humanity, a civilization went to war over the shape of reality.

Not for territory, not for gold, not for a throne. The Eternals do not multiply as
men do: they are summoned in legions, and time does not wear them down. They walk
creation, guard it, cultivate it. Each finds a calling within — to service, to
wisdom, to beauty, to strength — and from the hardened calling come the nine
classes.

Then came the refusal, and the refusal split the Host in two. From what remained
rose the order sworn to keep the Almighty. From what fell rose its reverse: a
crooked mirror of what they had left behind. The Host calls them the Defiled. They
do not call themselves so — it is a name from the enemy's mouth, and it carries
what the enemy thinks of them.

And none of it is seen. The Eternal crosses the world of men unnoticed, and the war
that decides their fate passes beside them.

On the other side is what they do not see.

———

Your email is confirmed. From here on you get the word when sales open in your
region, and whatever comes out of the work along the way.

WHAT COMES FIRST

1 December 2026 — the yomikiri, the manga pilot, titled
Mukō-Gawa: Why We Fight.

After it: volume 1, the novels from 2027 onwards, and the main arc across five
seasons.

WHERE TO BEGIN

The story, from the start: mukogawa.com/en/story
The eleven characters: mukogawa.com/en/characters
The eight works: mukogawa.com/en/work

Editions, pricing and shipping are handled by the retailer for each region. Dates
shown are the current publisher schedule and may change.

To leave the list, the link is in the footer of this email. Leaving takes effect
from the request itself.
```

## 日本語

### Assunto

```
人の傍らを過ぎてゆく戦い
```

### Corpo

```
人類より前に、ひとつの文明が現実の形をめぐって戦った。

領土のためでも、黄金のためでも、王座のためでもない。永遠者は人のように増えること
はなく、軍団として召び出され、時に朽ちることがない。創造を巡り、守り、育てる。
おのおのが内に呼び声を見いだし——奉仕に、知恵に、美に、力に——固まった呼び声から
九つの階級が生まれる。

やがて拒絶が起こり、その拒絶が天軍を二つに裂いた。留まった側からは、至高者を守る
と誓った秩序が立った。堕ちた側からは、その裏返しが立った。捨てたものの歪んだ鏡で
ある。天軍は彼らを「汚す者」と呼ぶ。彼ら自身はそう名乗らない。敵の口から出た名で
あり、敵が彼らをどう見ているかを負っている。

そして、そのいずれも見られることがない。永遠者は人の世を気づかれぬまま渡り、人の
運命を決する戦いは、人の傍らを過ぎてゆく。

向こう側にあるのは、彼らに見えぬものである。

———

メールアドレスの確認が完了しました。以後、お住まいの地域で販売が始まった際のご連絡
と、それまでの作品の最新情報をお届けします。

まず公開されるもの

2026年12月1日 — 読み切り『向こう側 ─ 我らが戦う理由』。

その後、単行本第1巻、2027年からの小説シリーズ、そして五期にわたる本編へ。

どこから入るか

物語をはじめから：mukogawa.com/ja/story
十一人の登場人物：mukogawa.com/ja/characters
八つの作品：mukogawa.com/ja/work

各版の仕様・価格・送料は地域ごとの販売元が定めます。日程は現時点の刊行予定であり、
変更となる場合があります。

配信停止は本メール下部のリンクから行えます。停止はお申し出の時点から有効です。
```

## Como mandar cada um na sua língua

O `Welcome email` do painel é **um texto só**, como o de confirmação. Mas o
boas-vindas dispara **depois** do cadastro — e aí o campo `idioma` já existe no
assinante. Então dá para fazer o que a confirmação não permite:

**Três automações, cada uma com a condição `idioma = pt`, `en` ou `ja`.** É
exatamente para isto que aquele campo foi criado no passo 3 do
`SETUP-BEEHIIV.md`.

Se preferir começar simples, use o `Welcome email` único com a versão em
português — a maior parte da lista virá do Brasil. Mas então o leitor japonês
recebe português, o que é pior do que o inglês que ele recebia antes.

---

# 3. Primeiro e-mail de conteúdo

**Por que ele existe:** a lista foi aberta em agosto e o lançamento é 1º de
dezembro. São quatro meses. Uma lista que recebe o boas-vindas e depois silencia
até o dia da venda chega em dezembro fria: o leitor esqueceu quem é o remetente,
não reconhece o nome na caixa de entrada, e marca como spam — o que derruba a
entrega justamente no e-mail que importa.

**Escrito só em português por ora, de propósito.** Traduzo para inglês e japonês
quando você aprovar o texto — assim uma mudança sua não custa três reescritas.

### Assunto

```
O nome que um lado deu ao outro
```

### Corpo

```
Há um detalhe na guerra de Mukō-Gawa que diz mais sobre ela do que qualquer
batalha.

A Hoste chama os Rebeldes de Profanadores.

Eles não se chamam assim.

É nome vindo da boca do inimigo, e carrega o que o inimigo pensa deles. Nenhum dos
dois lados usa o nome que o outro usa, e nenhum dos dois está descrevendo o mesmo
povo: cada um descreve o que precisa que o outro seja para que a guerra faça
sentido.

As duas ordens ergueram-se de uma mesma feitura. Foram legiões da mesma convocação,
percorreram a mesma criação, descobriram os mesmos nove chamados. Uma recusa as
separou — e depois da recusa cada uma passou a contar a história de um jeito em que
apenas ela podia estar certa.

É por isso que o site tem duas cores e não uma. O aço é da Hoste. O sangue é dos
Rebeldes. Onde as duas aparecem lado a lado, não há legenda dizendo qual está certa,
porque a obra não tem essa legenda.

Quem lê escolhe. E é aí que Mukō-Gawa começa.

———

Os dois lados, na página da história: mukogawa.com/historia

O yomikiri sai em 1º de dezembro de 2026.
```

---

# 4. Preference center

**Onde:** Subscribers → `Preference center`. É a página que o assinante vê ao
clicar em "gerenciar preferências" no rodapé — uma página sua, que o leitor
visita, e que hoje está no texto padrão do Beehiiv.

O visual segue o tema do Website Builder, então ela nunca vai ficar idêntica ao
site. O que dá para controlar é o texto:

### Título

```
Suas preferências
```

### Descrição

```
Escolha o que quer receber de Mukō-Gawa. Você pode mudar de ideia a qualquer
momento, e sair também é uma escolha legítima: o link está em todo e-mail.
```

### Preferências sugeridas

Duas, não mais. Lista de espera não é jornal, e oferecer dez opções a quem só quer
saber a data de lançamento é fazer o leitor trabalhar.

```
Aviso de lançamento
Só o essencial: quando as vendas abrirem na sua região.

Novidades da obra
Bastidores da produção, material inédito e as edições, no caminho até lá.
```

---

# 5. O rodapé dos e-mails

**Endereço: resolvido em 2026-08-04.** Antes o Beehiiv preenchia com o endereço
deles (`228 Park Ave S, New York`) — o e-mail declarava que Mukō-Gawa fica em Nova
York enquanto a política de privacidade dizia Curitiba. O correto, e que agora está
lá, é o da empresa:

```
Boanerges Produções LTDA
Rua Almirante Gonçalves, 2740 — Curitiba/PR, CEP 80250-150, Brasil
```

**O remetente ainda é `mukogawa-newsletter@mail.beehiiv.com`.** Sair como
`@mukogawa.com` exige DKIM/SPF no mesmo DNS que serve o Microsoft 365 do domínio.
Pendente por decisão do Bruno. Ver `DEPLOY.md` 3.4.

**"Powered by beehiiv"** some nos planos pagos. Como o trial do Max vence por volta
de 18 de agosto e o destino é o gratuito, não vale contar com isso: tirar agora
significa vê-lo voltar no downgrade.
