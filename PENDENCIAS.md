# Mukō-Gawa — pendências

Atualizado em 2026-08-01 (fim da sessão da madrugada). Organizado por **quem decide**, para servir de pauta
na conversa com o Israel sem virar lista de tarefas embaralhada.

Legenda de impacto:
**trava** = bloqueia trabalho ou põe informação errada no ar ·
**abre** = destrava algo novo · **acaba** = fecha uma ponta solta.

---

## 1. Para o Israel — o que muda o site se a resposta for outra

### 1.1 O que sai primeiro: o volume 1 ou o yomikiri? — **trava**

O site inteiro está construído em torno de "o primeiro volume do mangá chega em
dezembro de 2026": hero, anúncio, contador regressivo, loja nas três regiões,
lista de espera e FAQ. São treze pontos no código.

Existe um anúncio do Israel dizendo outra coisa: a **primeira obra publicada é
um yomikiri**, one-shot spin-off ilustrado pelo Match, que se passa **antes** dos
eventos da Saga, no **último bimestre de 2026**. São três diferenças, não uma:
obra diferente, natureza diferente e janela mais larga que "dezembro".

O Bruno avaliou que esse anúncio é anterior ao plano atual, e o site antigo
concorda com o site novo ("The first manga volume arrives December 2026"). Vale
confirmar na boca do Israel, porque se estiver errado o site está anunciando o
produto errado com a data errada.

Se o yomikiri entrar, decidir também: ele substitui o volume 1 no anúncio, ou os
dois convivem? E o contador aponta para qual data?

### 1.2 "Suposição ficcional" no hero — **trava a primeira frase**

É tradução literal de *supposal*, termo do C.S. Lewis (ele recusava chamar
Nárnia de alegoria). **Em inglês funciona** e está no site: "The supposal
fictional narrative". Em português não significa nada para o leitor comum, e é a
primeira frase que ele lê.

Três saídas:
1. trocar por algo que funcione em PT sem perder o conceito;
2. manter e **explicar** numa seção — o argumento "isto não é alegoria" é forte e
   posiciona a obra numa frase;
3. manter só no inglês e usar outra formulação no PT.

### 1.3 Amunet e Satis quebram o ponto de vista — **acaba**

Nove verbetes são escritos de dentro do mundo. Dois não: Amunet ("é um dos
personagens visualmente mais marcantes **da série**") e Satis ("Satis
impressiona:"). São os dois verbetes do Match, descritos como design em vez de
como lore.

Importante: **não é erro da nossa versão.** O inglês do site antigo diz o mesmo
("the series' most visually distinctive characters"). Veio assim do original.

Ou os dois sobem para a voz do mundo, ou viram uma seção separada e assumida
("Notas de design").

### 1.4 Terminologia solta em português — **acaba**

| Termo | Situação | Em inglês |
|---|---|---|
| Fonte Profana / Poço Profanado / Fontes Profanas | três formas para a mesma coisa | uma só: *the Defiled Well* |
| Arautos (classe) vs Arauto (epíteto de Amunet) | singular/plural inconsistente | *Cohort* / *Cohorts* |
| Arcontes vs Arconte (epíteto de Satis) | mesma inconsistência | *Archon* / *Archons* |
| Rebelde (título de Helel) vs Rebeldes (facção) | ambíguo | *the Guest* |

O inglês resolveu o caso do Poço com uma forma única. O português pode fazer o
mesmo.

### 1.5 Confirmar que Host / Guest é intencional — **acaba**

O inglês chama a facção rebelde de **the Guest**, em oposição a **the Host**, de
forma consistente no texto corrido ("the eternal conflict between the Host and
the Guest"). O japonês acompanha (天軍 / 客人). O português diz "Rebeldes".

Isso está mantido como escolha autoral, no mesmo padrão de Protogenesis/Genesis
e Desvelar/Unveiled. Vale só um "sim, é de propósito" do Israel, porque neste
projeto o lado carrega informação narrativa e define a cor.

### 1.6 Nomes que sumiram na reconstrução — **abre**

Existem no site antigo e não aparecem no site novo:

- **Zorphael** — o forjador da Hoste, que faz as armas Rasga-Fenda
- **Veritas** — a lança de Miguel, primeira arma tirada da forja
- **Onyx Shard** — a lâmina que Satis carrega nas costas
- **Prince of Babylon** — quem rebaixou Kharzul a batedor

São detalhes concretos, do tipo que o VOZ.md aponta como o que sustenta o épico.
Vale decidir se voltam.

### 1.7 A Página da Língua — **abre**

O maior diferencial do projeto e não aparece em lugar nenhum. Já temos material:
escrita, fonologia e gramática feitas por um linguista; sons fricativos, aerados
e ingressivos; escrita baseada em símbolos de tradições místicas, desenhada para
ser gravada em espadas. O gancho já existe no verbete do Orthrax ("Ophanix").

Falta:
- **os arquivos de imagem do alfabeto** (as fotos existem, mas não em disco aqui)
- **o nome do linguista**, para o crédito

### 1.8 Como comunicar Protogenesis e Desvelar — **acaba**

A História descreve os dois como "longa-metragem e livro", e a home diz que o
anime "ainda não tem produção". Um leitor atento pergunta como existem dois
longas se não há produção de anime.

O FAQ hoje contorna dizendo que são livros que, no plano da adaptação, seriam
longas. Vale alinhar como o Israel prefere dizer isso.

---

## 2. Informação que falta para o FAQ responder — **acaba**

O FAQ hoje diz honestamente "ainda não foi definido" nestes pontos. Cada resposta
obtida vira uma linha a mais:

- **Preço** das edições
- **Dia exato** de dezembro de 2026
- **Versão digital no Brasil** — o site declara impressa e digital para EUA e
  Japão; para o Brasil só diz impressa, e não está claro se é omissão ou decisão
- **Edição em espanhol** — o site vai ter versão ES, mas a loja lista só BR, US e
  JP. Um leitor hispanofalante vai perguntar onde compra

---

## 3. Operacional do Bruno

| Item | Estado | Impacto |
|---|---|---|
| **Endpoint da lista de espera** | falta criar conta (Formspree/Buttondown) e preencher `PUBLIC_WAITLIST_ENDPOINT` no `.env` | **trava a publicação** — sem isso o site vai ao ar com o formulário se declarando inativo, e ele é o único objetivo de conversão |
| **E-mails** `contato@mukogawa.com` e `imprensa@mukogawa.com` | precisam existir; já estão linkados no rodapé | trava |
| **Perfis de X e Facebook** | lugar reservado no rodapé, inertes e marcados "em breve"; falta preencher o `href` em `Rodape.astro` | acaba |
| **Publicação** | sem repositório remoto nem deploy. `astro.config.mjs` já deriva a URL de `SITE_URL`/`VERCEL_URL`, então o preview não aponta para o site antigo | abre |
| **Domínio** `mukogawa.com` | serve o site antigo. Migrar só depois de aprovar o que estiver no ar | abre |

---

## 4. Revisão de idioma

- **Inglês** — pronto e no ar em `/en/`. O texto é do próprio autor, colhido do
  site antigo; o FAQ e alguns rótulos de interface são escritos por nós e
  merecem o olho do Israel.
- **Espanhol** — escrito (tradução do português), **desligado**. Não existe
  espanhol no site antigo, então não há original do autor para comparar.
- **Japonês** — escrito a partir do site antigo, **desligado**. As páginas
  internas de lá estão completas e consistentes; o que falta são os rótulos
  curtos de epíteto, que o próprio site antigo deixou em inglês
  (`HERALD // COHORT`, `THE WARMONGER // ARCHON` e outros). A lista completa está
  em `conteudo/JA-SITE-MODELO.md`. **Precisa de alguém que leia japonês** antes
  de ir ao ar — não inventamos japonês de lore.

---

## 5. Coisas que já foram resolvidas (para não reabrir)

- A tagline foi alinhada: PT passou a dizer "um conto do outro lado", que é a
  tradução de "a tale from the other side", o título do próprio site antigo.
  Antes as duas versões diziam coisas diferentes.
- "Sete livros" esclarecido: cinco da Saga mais Protogenesis e Desvelar. Bate com
  as cinco temporadas e dois filmes.
- As seções "Mitologia cristã" e "Aviso" (conteúdo adulto) **já existem** no site
  novo, com as palavras do autor. Chegaram a ser dadas como perdidas por engano.
- O corte de 2,6% na foto do Israel, na página de criadores, é de design: a
  moldura é `4/5` e o arquivo é 1000×1217. Não afeta as artes dos personagens,
  que seguem em zero corte.

---

## 6. Arquivado — pode voltar, mas com outra abordagem

- **Moldura de arte no header e no footer.** Tentada duas vezes na v2: primeiro
  com forma geométrica (dentes gerados em CSS), depois com ilustração sangrando
  (a legião da Guerra pela Humanidade). Nenhuma das duas convenceu, e a do topo
  ainda cortava a arte do hero com uma barra escura. Arquivada por decisão do
  Bruno. Se voltar, provavelmente precisa de arte feita para essa função, não
  reaproveitada de outra seção.
- **Navegação em massa**, no estilo portal de obra da referência japonesa. Só faz
  sentido quando houver mais destinos — Página da Língua, códex, notícias. Hoje
  seriam os mesmos 6 links espalhados em três linhas, o que é pior que o atual.
- **Escrita dos Eternos como ornamento.** O Bruno preferiu reservá-la e alinhar
  o uso com o Israel antes. Enquanto isso, a marca de seção é o losango.
