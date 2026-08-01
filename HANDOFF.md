# Mukō-Gawa — handoff

**Estado: v2, entregue e validada. Ainda NÃO publicado.**
Última sessão: 2026-08-01 (madrugada).

Site de apresentação de **Mukō-Gawa**, dark fantasy sobre mitologia cristã, que
sai primeiro como **mangá, volume 1 em dezembro de 2026**, depois como série de
livros a partir de 2027, e um anime que é o sonho por trás do projeto mas ainda
não tem produção.

Documentos que mandam mais que este:
- **`PENDENCIAS.md`** — tudo que está aberto, organizado por quem decide. É de lá
  que sai a pauta da conversa com o Israel.
- **`V1.md`** — o que a v1 entregou e como voltar para ela.
- **`conteudo/VOZ.md`** — a regra de escrita. Duas vozes que nunca se misturam.

---

## Como rodar

```bash
npm run dev --prefix /Users/brunomessa/CLAUDE/01-projetos/mukogawa/site   # porta 4331
npm run build --prefix /Users/brunomessa/CLAUDE/01-projetos/mukogawa/site
```

Astro 5 estático, Node 24. Registrado em `.claude/launch.json` como `mukogawa`.

**Acompanhar é ao vivo**, sempre: `open http://localhost:4331/`. O pacote offline
é snapshot de arquivo, não o meio de revisão do dia a dia. Se a 4331 estiver
ocupada por outro chat, reaproveite o servidor que já está rodando — é o mesmo
projeto.

## Versões

| Tag | O que é |
|---|---|
| `v1` | versão congelada e validada, antes dos experimentos de identidade |
| `v2` | **estado atual do `main`**: v1 + tipografia Mincho, losango, botão de topo |
| `tipografia-cinzel-barlow` | ponto de retorno para o par de fontes antigo |

```bash
git -C site checkout v1          # volta à versão congelada
git -C site checkout v1 -- src/  # só os fontes
```

Snapshots datados de build e fonte em `versoes/`.

## Estado: o que está pronto

**34 páginas: 17 em português e 17 em inglês.**
Início, História, Personagens (índice + 11 verbetes), Criadores, Loja e FAQ.

- **Dois idiomas no ar**, com seletor no cabeçalho, slugs traduzidos
  (`/en/story`, `/en/characters`) e `hreflang` por idioma. O inglês é o texto do
  **próprio autor**, colhido do site antigo — não é retradução.
- **ES e JA escritos e desligados** (`pronto: false` em `src/i18n/idiomas.ts`).
  Não entram no seletor nem no hreflang, e as rotas não são geradas.
- **FAQ com 23 perguntas** e JSON-LD `FAQPage` gerado da mesma fonte do HTML.
- **Capa do volume 1 em vídeo**, colorida, na Loja e na lista de espera.
- **Imagem de compartilhamento por personagem**, 11 arquivos 1200×630.
- **Movimento**: revelação ao rolar, linhas de velocidade na fala do Helel,
  selos que acendem, contador com brasa e contagem crescente.

## Decisões de design que não devem ser desfeitas

**Duas cores com significado.** Aço para a Hoste, sangue para os Rebeldes.
`--lado` troca sozinho via `[data-lado]`.

**O vermelho nunca vira texto pequeno.** `--sangue` (#d21c26) é preenchimento.
Para texto existe `--sangue-vivo` (#ff4d55), que passa em AA.

**`mix-blend-mode` é frágil.** Qualquer `transform`, `filter`, `opacity < 1` ou
`z-index` num ancestral cria contexto de empilhamento e mata o blend. Já quebrou
três vezes neste projeto. O auditor verifica isso automaticamente.

**Rótulos com `//`** são assinatura tipográfica. **Losango** é a marca de seção.

**Nada de imagem "colada".** Retângulo visível em volta de uma arte é defeito.

**Tipografia (v2):** display é **Zen Old Mincho**, texto é Barlow, interface é
Barlow Condensed. Cinzel saiu porque não tem CJK — os kanji caíam num fallback
sans-serif, diferente em cada máquina. O CJK vai subsetado com apenas os
caracteres usados: 1,9 MB → 150 KB. **Regerar com
`node ferramentas/gerar-fonte-kanji.mjs` sempre que entrar um kanji novo.**

**Header e footer:** a moldura de arte sangrando no topo e na base foi tentada
duas vezes — com forma geométrica e com ilustração — e **arquivada por decisão do
Bruno**. Pode voltar mais adiante, com outra abordagem.

## Ferramentas versionadas

| Script | O que faz |
|---|---|
| `ferramentas/gerar-offline.mjs` | pacote offline: caminhos relativos, valida referências, zipa |
| `ferramentas/gerar-og.mjs` | imagem de compartilhamento por personagem, 1200×630 |
| `ferramentas/normalizar-estudos.mjs` | zera o fundo das artes de estudo e grava PNG sem perda |
| `ferramentas/gerar-fonte-kanji.mjs` | subseta a fonte japonesa para os caracteres usados |

## Tratamento de imagem (importante)

**Artes de personagem** (card e splash): geradas de
`assets-originais/personagens/` por um pipeline que apaga o rótulo e a
assinatura, normaliza o fundo para preto puro e encaixa numa moldura 4:5.

**Artes de estudo** ("Do caderno"): caminho diferente, por um motivo medido. Elas
mantêm as escritas do Bretas **de propósito** (decisão do Bruno), e são servidas
como **PNG sem perda direto de `public/estudos/`**, fora do pipeline do Astro —
porque o WebP gerado por ele reintroduzia 11% a 17% de ruído entre 1 e 29 no
fundo, e sobre a seção preta isso fazia a arte virar um retângulo mais claro. A
seção `.galeria-bloco` tem fundo preto puro e as artes **não usam blend**.

Os painéis de mangá do Match (`satis`, `satis-busto`, `satis-estudo`) continuam
no pipeline: têm fundo claro e não sofrem disso.

## Como verificar antes de entregar

Medir precisa de rigor. Caminhos que já falharam, registrados para não repetir:

1. **Iframe + `--dump-dom` não funciona.** O virtual-time do Chrome não espera o
   iframe carregar e o dump sai vazio.
2. **Nenhum headless chega a 375px.** O macOS trava a janela em ~500px, nos dois
   modos. O painel também não chegou (devolveu 461px). Medição que diga `@ 500px`
   **não é** medição de mobile.
3. **Página inteira com `--window-size` gigante distorce** qualquer layout com
   `100dvh` — o hero estica e o screenshot vira só as asas.
4. **Aba oculta quebra validação.** `requestAnimationFrame`,
   `IntersectionObserver` e transições CSS não rodam com
   `visibilityState: hidden`, que é o estado do painel. Já causou dois
   diagnósticos errados.
5. **Validar o arquivo de origem não é validar o que o navegador recebe.** Foi o
   erro que fez as artes de estudo voltarem quebradas três vezes seguidas.
   **Meça o pixel renderizado.**

O que funciona: auditor em `public/_auditoria.js`, incluído pelo `Base.astro`
atrás de `import.meta.env.DEV`, medindo a própria página. Larguras grandes por
Chrome headless com `--dump-dom`; 375px real dentro de um `<iframe>` de 375px
pelo painel. **Apagar o arquivo e o gancho antes do build final.**

Ele mede: corte de imagem, contraste contra o piso de AA, vazamento horizontal,
alvo de toque e **`mix-blend-mode` morto**.

**Último resultado (v2, 7 rotas a 1440px, PT e EN):** contraste 0, vazamento 0,
alvo de toque 0, blend morto 0. Nas 11 páginas de personagem, degrau de fundo dos
estudos entre 0,34 e 1,04 — nenhum retângulo.

## Onde está o quê

```
01-projetos/mukogawa/
├── site/                          projeto Astro — é aqui que se trabalha
│   ├── src/data/personagens.ts    estrutura dos 11: slug, lado, classe, kanji
│   ├── src/i18n/                  idiomas, rotas, strings de UI, conteúdo por idioma
│   ├── src/paginas/               corpo das páginas, parametrizado por idioma
│   ├── src/pages/                 rotas finas: PT na raiz, EN em /en/
│   ├── src/styles/global.css      sistema visual inteiro
│   └── public/estudos/            artes de estudo em PNG sem perda
├── ferramentas/                   os quatro scripts acima
├── conteudo/                      VOZ.md, GLOSSARIO-EN.md, EN-SITE-MODELO.md,
│                                  JA-SITE-MODELO.md
├── assets-originais/              artes originais — não mexer
├── versoes/                       snapshots datados
├── PENDENCIAS.md                  pauta para a conversa com o Israel
└── V1.md                          o que a v1 entregou
```

## O site antigo como fonte

`mukogawa.com` ainda serve o site antigo, que tem **EN, PT e JA**. O inglês de lá
é a voz do autor. As rotas são client-side e o idioma vive em
`localStorage["mukogawa.prefs"]` (`{lang, region}`) — forçando esse valor e
navegando pela SPA dá para ler as páginas internas nos três idiomas. Tudo o que
foi colhido está em `conteudo/EN-SITE-MODELO.md` e `conteudo/JA-SITE-MODELO.md`.

**Terminologia que muda de propósito entre idiomas** (não uniformizar):

| PT-BR | EN | JA |
|---|---|---|
| Rebeldes | the Guest | 客人 |
| Hoste | the Host | 天軍 |
| Protogenesis | Genesis | Genesis |
| Desvelar | Unveiled | Unveiled |
| Fontes Profanas / Poço Profanado | the Defiled Well | 汚された井戸 |

## Voz

`conteudo/VOZ.md` é a regra. O essencial: **duas vozes que nunca se misturam.** A
voz do mundo é épica (léxico bíblico, inversão sintática, ritmo ternário,
antítese no fecho). A voz da casa é seca (botões, avisos, datas). O épico nunca
invade a interface: o botão diz "Quero ser avisado", não "Ergue tua voz".

## Próxima rodada sugerida

1. **Destravar a publicação** — endpoint da lista de espera, e-mails, repositório
   remoto e Vercel. Ver `PENDENCIAS.md`, seção 3.
2. **Conversa com o Israel** — a pauta inteira está em `PENDENCIAS.md`, seção 1.
3. **Página da Língua** — o maior diferencial do projeto, ainda sem página.
   Depende dos arquivos do alfabeto e do nome do linguista.
4. **Revisão de ES e JA**, para poder ligar `pronto: true`.
5. **Vídeo do hero colorizado**, se o Bruno gerar. O personagem do hero tem 31%
   de pixels com cor e o da capa tem 91% — a cor não existe no arquivo atual,
   não é questão de filtro.

## Histórico das revisões (para não refazer trabalho)

1–11. Reconstrução completa em Astro: hero sem corte, personagens, história,
      classes, lista de espera, molduras de scan aparadas, escritas removidas.
12. FAQ com 23 perguntas; tagline virou "um conto do outro lado"; arquitetura de
    idiomas e versão em inglês completa, com o texto do próprio autor.
13. Ponto de rollback de tipografia; artes da História acompanhando a leitura;
    OG por personagem; credenciais na home; movimento.
14. Capa do volume 1 na Loja e na lista de espera; estudos com as escritas.
15. Capa animada (25 MB → 832 KB); disposição da Loja e da lista de espera.
16. Estudos sem blend; capas retas; hero com o véu aberto e a cor recuperada.
17. Estudos em PNG sem perda, fora do pipeline — a correção que finalmente pegou.
18. Artes de correção do Bruno; capa reta também na home.
**v1.** Alinhamento dos formatos por subgrid. Versão congelada.
**v2.** Tipografia Zen Old Mincho com CJK nativo e subsetado; losango; botão de
    topo ancorado. Moldura de arte no header e footer: tentada e arquivada.
