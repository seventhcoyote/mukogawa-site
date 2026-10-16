# Atualização do site — Bleeding Light

**Para o Israel revisar e aprovar.** Este documento traduz o pacote
`Mukogawa website updates` em consequências concretas para o site, e separa o que
é ajuste do que é decisão. Nada será executado antes das suas respostas.

Data: 16 de outubro de 2026 · Estado do site: no ar em mukogawa.com, indexado no
Google desde agosto.

---

## Em números

| | Hoje | Depois |
|---|---|---|
| Páginas no ar | 63 | ~18 |
| URLs no Google | 60 | 15 mantidas + 3 novas |
| Seções do site | 9 | 5 |
| Idiomas | 3 (PT, EN, JA) | 3 |

**A atualização remove 45 das 60 URLs que o Google já indexou — 75% do site.**
Isso não é motivo para não fazer; é motivo para fazer com os redirecionamentos
certos, que estão previstos no pacote e eu vou implementar.

---

## Como responder

Marque cada item e devolva o documento. Onde quiser mudar algo, escreva na linha
"Ajustar".

```
[ ] OK     [ ] Não     [ ] Ajustar: ______________________
```

Os itens estão em três grupos:

- **Grupo A — executo direto.** Mudanças de texto, link e conteúdo. Não há risco
  de quebrar nada, e eu as faço sem precisar de discussão.
- **Grupo B — mexem na composição.** Dentro do sistema visual existente, mas
  mudam o arranjo das páginas.
- **Grupo C — mudam a base do site.** Fonte, cor de fundo, remoção de conteúdo
  inteiro. **Preciso do seu OK explícito em cada um**, porque são irreversíveis na
  prática ou mudam a identidade do site.

---

# GRUPO A — Executo direto

Sem risco. Se você não disser nada, considero aprovados.

**A1. Logo novo** no cabeçalho (~44px) e no rodapé (~180px).
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**A2. Menu reordenado:** Início · Bleeding Light · Criadores · Loja (e os
equivalentes em EN/JA).
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**A3. "Lista de espera" vira "Newsletter"** no rodapé, e o bloco de inscrição
passa a ter o título "Fique por dentro das novidades".
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**A4. Textos novos** do hero da Início, da página Bleeding Light inteira, das
biografias dos Criadores e da Loja, conforme os arquivos de referência.
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**A5. Botões para a campanha na Catarse**, com o link e os parâmetros indicados, e
a versão desativada ("Coming soon" / "近日公開") em EN e JA.
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**A6. Especificações do livro** (14x20 cm, 144 páginas, papel avena 80g,
sobrecapa, leitura japonesa, 16+) e a nota de capa provisória.
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**A7. Loja:** entra o destaque da pré-venda na Catarse; a apostila conceitual
continua como está; EN e JA passam a mostrar só "Coming soon".
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**A8. Redirecionamentos** de todas as URLs removidas para a home do mesmo idioma,
para quem chegar por link antigo ou pelo Google não cair em página de erro.
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

---

# GRUPO B — Mexem na composição

Funcionam, mas mudam como a página se organiza. Vale você olhar com atenção.

**B1. A Início encolhe para três blocos:** hero, leitura dramatizada e newsletter.
Saem a faixa com a contagem regressiva, "O que sai primeiro", "Três formas, uma
narrativa", "A história", "Personagens" e "As Nove Classes".

A home deixa de apresentar o mundo e passa a ser uma porta para o Bleeding Light.
Quem chega sem conhecer a obra vê o hero e já tem de clicar para saber mais.
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**B2. Sai o botão "Avise-me" do cabeçalho.** Ele é hoje o único ponto de conversão
presente em todas as páginas. Sem ele, a inscrição na newsletter só acontece para
quem rolar até o fim da Início ou da Loja.

*Sugestão:* manter um botão no cabeçalho apontando para a Catarse ("Apoiar"), que
é a ação que importa durante a campanha. Custa o mesmo e não deixa o topo sem
chamada.
`[ ] OK, remover  [ ] Manter "Avise-me"  [ ] Trocar por "Apoiar"  [ ] Ajustar: ______`

**B3. Parallax de nuvens e rochas** nas páginas Bleeding Light e Criadores, com as
rochas cobrindo a base da tela. Desligado para quem pede menos movimento.
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**B4. A Loja perde a seção do yomikiri** com os cartões de Brasil, Estados Unidos e
Japão, e o aviso sobre links de venda.
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

**B5. Criadores passa a ter dois nomes** lado a lado, com retratos recortados sobre
o fundo, sem os cartões atuais.
`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

---

# GRUPO C — Mudam a base do site

**Nada aqui é executado sem o seu OK escrito.**

### C1. Fonte do site

A referência usa **Shippori Mincho B1** nos títulos e **Zen Kaku Gothic New** no
texto. O site hoje usa **Zen Old Mincho** nos títulos e **Barlow** no texto.

Trocar a fonte muda a aparência de **todas as páginas**, inclusive as que esta
atualização não toca (Imprensa, Privacidade). E há um custo técnico: a fonte
japonesa atual é carregada só com os caracteres que o site usa — 300 KB em vez de
1,9 MB. Uma fonte nova precisa do mesmo tratamento, ou as páginas em japonês ficam
pesadas.

**Minha recomendação: manter a Zen Old Mincho.** As duas são serifadas japonesas da
mesma família de desenho, a diferença entre elas é pequena na tela, e manter evita
mexer na identidade do site inteiro por causa de duas páginas novas.

`[ ] Trocar para Shippori Mincho B1  [ ] Manter Zen Old Mincho  [ ] Ajustar: ______`

### C2. Páginas de fundo branco

Bleeding Light e Criadores passam a ter **fundo branco**. O site inteiro é preto.

Isso cria um site com duas caras: Início e Loja pretas, Bleeding Light e Criadores
brancas. Pode ser intencional — a campanha é uma peça à parte — mas o leitor vai
atravessar essa fronteira clicando no menu, e a troca é brusca.

**Confirmo que é isso mesmo?** Se for, eu faço a transição ser deliberada (um corte
limpo, não um susto). A alternativa é levar as páginas novas para o preto do site.

`[ ] Sim, branco  [ ] Não, manter preto  [ ] Ajustar: ____________`

### C3. Remoção de História, A obra, Personagens e FAQ

É a maior perda do pacote. O que sai, em conteúdo já publicado:

| Seção | O que contém hoje |
|---|---|
| **História** | Os Eternos, a Hoste e os Rebeldes, as cinco eras, os quatro lugares com arte em traço e cor, Kharzul e o rival sem nome |
| **A obra** | As oito sinopses das três séries |
| **Personagens** | O índice e 11 verbetes, cada um com arte própria e imagem de compartilhamento |
| **FAQ** | 25 perguntas respondidas, incluindo as que explicam o que é um yomikiri e por que o preço não fica no site |

São 45 URLs, nos três idiomas, com texto seu e do tradutor. **O material não se
perde** — fica no histórico do repositório e pode voltar a qualquer momento —, mas
sai do ar.

**O que isso custa na prática:** o site deixa de responder a quem procura
"personagens de Mukō-Gawa" ou "história de Mukō-Gawa" no Google, e perde as
páginas que hoje trazem visitante novo. A campanha ganha foco; a obra perde
profundidade.

**Alternativa, se interessar:** manter Personagens e História no ar, fora do menu
principal, linkadas só do rodapé. Custa quase nada manter, e o Google continua
trazendo gente. Remover é fácil depois; recuperar posição no Google leva meses.

`[ ] Remover tudo  [ ] Manter Personagens e História fora do menu  [ ] Ajustar: ______`

### C4. O yomikiri sai do site

Hoje o site inteiro gira em torno do yomikiri de 1º de dezembro de 2026: a
contagem regressiva, a lista de espera, a Loja, a sala de imprensa. A atualização
troca isso pela campanha do Bleeding Light.

**Confirmo que o yomikiri deixa de ser comunicado?** Se ele continua existindo com
outra data, o site precisa dizer isso em algum lugar — hoje há gente inscrita na
lista justamente esperando esse aviso.

`[ ] Sai do site  [ ] Continua, com nova data: __________  [ ] Ajustar: ______`

### C5. Daniel Bretas sai dos créditos

A entrada dele em Criadores é removida, e o crédito do rodapé passa de "Arte de
Daniel Bretas e Guilherme Match" para "Arte de Guilherme Match".

Confirmo que é uma decisão de crédito já acertada com ele. As artes dele que
estiverem em páginas mantidas precisam sair junto, ou o crédito fica incorreto.

`[ ] OK  [ ] Não  [ ] Ajustar: ____________`

---

## Perguntas que o pacote não responde

1. **As pessoas já inscritas na lista** entraram esperando "o aviso de lançamento
   do yomikiri". A newsletter passa a falar do Bleeding Light. Quer que eu escreva
   um e-mail avisando da mudança? *(Recomendo que sim.)*
   `Resposta: ____________`

2. **A sala de imprensa** menciona o yomikiri e Daniel Bretas. Ela não está no
   pacote. Atualizo junto?
   `Resposta: ____________`

3. **O espanhol** está escrito e desligado no site. As páginas novas entram só em
   PT/EN/JA. Confirmado?
   `Resposta: ____________`

4. **A capa do yomikiri** aparece hoje na Loja e na inscrição. Sai de tudo, ou
   continua em algum lugar?
   `Resposta: ____________`

---

## Duas coisas que vou fazer sem perguntar

**Otimizar as imagens.** Os arquivos enviados somam **25 MB** — mais do que o site
inteiro pesa hoje (19 MB). Vou convertê-las para o formato que o site já usa, sem
perda visível. Sem isso, as páginas novas demorariam muito para abrir no celular.

**Baixar a imagem da campanha** que hoje está num servidor da Catarse. Se o
endereço mudar ou a campanha sair do ar, a imagem some do site. Melhor servi-la do
nosso lado.

---

## Ordem de execução, depois do OK

1. Ponto de retorno marcado no repositório, para desfazer tudo em um comando se
   preciso.
2. Grupo A inteiro, publicado e conferido.
3. Grupo B, um item por vez, com imagem de antes e depois.
4. Grupo C, só o que foi aprovado, por último.
5. Conferência final nos três idiomas, em computador e celular, e no monitor
   ultralargo.

As traduções novas de EN e JA ficam marcadas para sua revisão antes de irem ao ar,
como o próprio pacote pede.
