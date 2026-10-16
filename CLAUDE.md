# Mukō-Gawa — instruções do projeto

Site da obra, no ar em **https://mukogawa.com**. Astro 5 estático, três idiomas
(PT na raiz, EN em `/en/`, JA em `/ja/`), publicado na Vercel a cada `git push`.

**Leia `docs/HANDOFF.md` antes de mexer em qualquer coisa.** Ele tem o estado
atual, as decisões que não devem ser desfeitas e as armadilhas já pagas. O que
está abaixo é o resumo operacional.

---

## Como rodar

```bash
npm install
npm run dev        # porta 4331; se estiver ocupada, o Astro sobe em outra — confira a saída
npm run build      # 22 páginas
npm run auditar -- --larguras 1440,768,375 --rotas /,/bleeding-light
```

---

## Regras que não se negociam

Cada uma delas foi paga com um defeito real. Estão detalhadas no HANDOFF.

- **Nenhuma imagem pode ser cortada.** Cabeça, asa, arma e chifre nunca. Se
  precisar cortar, o corte sai da BASE.
- **Nada de imagem "colada".** Retângulo visível em volta de uma arte é defeito.
  Arte com fundo claro sobre seção escura precisa de tratamento de objeto
  (sombra e fio de luz), não de colagem.
- **O vermelho `--sangue` (#d21c26) nunca vira texto pequeno.** Para texto existe
  `--sangue-vivo`. No tema claro, `#c23a2c` — medido, 5,34:1 sobre branco.
- **Aço é a Hoste, sangue são os Rebeldes.** A cor carrega informação narrativa;
  não misture as duas numa página de interface só porque fica bonito.
- **`mix-blend-mode` é frágil.** Qualquer `transform`, `filter`, `opacity < 1` ou
  `z-index` num ancestral cria contexto de empilhamento e mata o blend. Já
  quebrou quatro vezes.
- **As duas vozes nunca se misturam.** A voz do mundo é épica; a da casa é seca.
  O épico não invade botão, aviso nem formulário. Ver `docs/conteudo/VOZ.md`.
- **Preço não entra no site.** O valor vive no varejista.
- **Texto novo escrito direto no `.astro` é dívida.** Tudo em `src/i18n/`.

---

## Como verificar antes de entregar

**Meça. Não confie no que parece certo.** Este projeto já perdeu horas com
medições que mentiam.

1. **O auditor exige o dev server.** `npm run build` remove o `_auditoria.js` do
   `dist/`, então apontar o auditor para `npm run preview` devolve "zero
   defeitos" sem ter medido nada. Zero vazio parece aprovação.
2. **Se uma medição contradiz o CSS escrito, desconfie do instrumento.** O HMR do
   Astro serve estilo velho; reinicie o dev server antes de corrigir o site.
3. **O Astro cacheia imagem por NOME.** Mudou o conteúdo e não o nome? Apague
   `.astro/assets` e `node_modules/.astro`.
4. **Contraste sobre imagem o auditor não mede** — ele compara com o fundo CSS.
   Meça o pixel, e **esconda o texto antes**: com ele visível, a amostragem lê as
   próprias letras brancas e devolve 1,00:1 sempre.
5. **O headless é `en-US`.** Páginas que reencaminham por idioma nunca são
   medidas em português sem `--lang=pt-BR`.
6. **Mobile de verdade é por CDP.** O macOS trava a janela em ~500px, então
   captura a 375px pela janela não serve. O auditor já usa CDP.

---

## Onde está cada coisa

```
src/config/site.ts        contatos, redes, links de venda (Catarse, Orvalho)
src/i18n/idiomas.ts       idiomas e rotas traduzidas
src/i18n/ui.ts            strings de interface, nos 4 idiomas
src/i18n/conteudo/        o texto de cada página
src/paginas/              o corpo das páginas, parametrizado por idioma
src/pages/                rotas finas: PT na raiz, EN e JA em /en/ e /ja/
src/styles/global.css     o sistema visual, incluindo o tema claro
api/inscrever.js          a função que fala com o Beehiiv (fora do Astro)
ferramentas/              auditor, gerador de fonte, geradores de imagem
docs/                     HANDOFF, MAPA, DEPLOY, VOZ e o histórico
```

**A fonte japonesa é subsetada:** 1,9 MB viram ~160 KB porque só os caracteres
usados entram. **Rode `node ferramentas/gerar-fonte-kanji.mjs` sempre que
acrescentar texto em japonês**, inclusive ao criar página nova. O script usa um
ambiente Python em `ferramentas/.venv`, que não vai para o git — se sumir, o
próprio erro diz como reconstruir.

---

## Publicar

`git push` na `main` e a Vercel publica em cerca de um minuto. Não há FTP nem
painel de upload. Antes de publicar: `npm run build` sem erro e o auditor em zero.
