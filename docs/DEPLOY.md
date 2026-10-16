# Mukō-Gawa — publicação

Estado em 2026-08-03.

| | |
|---|---|
| **Repositório** | https://github.com/h96b/mukogawa-site — **privado** |
| **Branch** | `main` |
| **Vercel** | conectada, projeto `mukogawa-site` (equipe ignitra, plano Hobby) |
| **Preview** | https://mukogawa-site.vercel.app |
| **Domínio** | `mukogawa.com` sendo migrado (2026-08-03), a pedido do autor |
| **Índice de busca** | **travado.** Depende de `INDEXAVEL=1` — ver seção 3.5 |

> O repositório é privado e precisa continuar privado: ele carrega as artes
> originais do Bretas e do Match, de uma obra que ainda não foi publicada.

> **O plano é Hobby, cujos termos são de uso não comercial**, e já hospeda dois
> domínios de projeto. A Vercel raramente age nisso, mas se agir, cai o site
> inteiro. Não é urgente; é para não ser surpresa.

---

## 1. A Vercel (já conectada — registro de como foi)

1. Entrar em **vercel.com** com a conta GitHub `h96b`.
2. **Add New… → Project**, escolher `mukogawa-site`.
3. Não mexer em nada: a Vercel reconhece Astro sozinha e acerta os três campos.
   Confira apenas que ficaram assim:

   | Campo | Valor |
   |---|---|
   | Framework Preset | Astro |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

4. **Deploy.**

Sai uma URL do tipo `mukogawa-site.vercel.app`. É essa que vai para o Israel.

**Não é preciso configurar variável de ambiente para o preview.** O
`astro.config.mjs` já deriva o endereço de `VERCEL_URL`, então o canonical e as
imagens de compartilhamento apontam para o próprio preview — e não para o site
antigo, que é o erro que essa lógica existe para evitar.

Cada `git push` na `main` publica de novo, sozinho.

### Se um deploy aparecer como "Blocked"

Aconteceu duas vezes e a causa nunca é o código: a Vercel recusa deploy de commit
cujo autor ela não consegue casar com uma conta do GitHub. Os commits estavam
saindo com `brunomessa@MacBook-Pro-de-Bruno.local`, endereço que o git inventa
quando `user.email` não foi configurado no repositório.

Já está corrigido — o repositório usa o noreply da conta:

```bash
git config user.email "68998512+h96b@users.noreply.github.com"
git config user.name  "h96b"
```

Está no `.git/config` deste clone, e não no global. **Num clone novo, refazer**,
senão o bloqueio volta. Para destravar depois de acontecer, basta um commit novo
com a autoria certa — não é preciso reescrever o que já foi enviado.

---

## 2. O que o Israel vai encontrar

- **58 páginas**: português, inglês e japonês, mais a 404. Inclui a sala de
  imprensa e a política de privacidade, alcançáveis pelo rodapé.
- **O formulário da lista de espera se declara inativo**, com a mensagem
  "Cadastro ainda não conectado". É honesto e foi decisão do Bruno mantê-lo
  assim no preview. Para ativar, ver a seção 3.
- **O japonês está no ar.** O texto corrido é do próprio autor, colhido do site
  antigo. As exceções, anotadas no código: o FAQ (23 perguntas traduzidas por
  nós, porque o site antigo não tinha FAQ) e os epítetos curtos dos personagens.
  **Precisa de revisão por falante nativo.**
- **Espanhol não aparece.** Está escrito e desligado (`pronto: false` em
  `src/i18n/idiomas.ts`); as rotas nem são geradas.
- **A abertura toca uma vez por sessão**, só na home. Para rever, aba anônima.

Vale mandar junto o **`PAUTA-ISRAEL.md`** (há uma versão `.docx` com campos para
ele preencher): oito pedidos de acesso e material, mais catorze perguntas que só
ele pode responder — várias delas mudam o site.

---

## 3. Antes de virar o domínio

Nesta ordem, porque cada uma destrava a seguinte.

### 3.1 Endpoint da lista de espera — **trava**

É o único objetivo de conversão do site. Sem ele, o site vai ao ar com o
formulário se declarando inativo.

**Antes:** decidir para qual caixa vão os cadastros. Ver `MAPA.md`, Fase 1
— a recomendação é uma caixa própria (`lista@`), não `contact@` nem `social@`.

1. Criar conta no **Formspree** ou **Buttondown**. Se a intenção é *enviar* o
   aviso do volume 1 e dos livros para essa lista — e é, o FAQ promete isso —, o
   Buttondown resolve as duas pontas; o Formspree só encaminha.
2. Na Vercel, **Settings → Environment Variables**, adicionar:

   ```
   PUBLIC_WAITLIST_ENDPOINT = https://formspree.io/f/XXXXXXXX
   ```

3. Republicar (**Deployments → … → Redeploy**).

O formulário envia `{ email, regiao }` em JSON por POST. O modelo da variável
está em `site/.env.example`.

### 3.2 As duas caixas de e-mail — **trava**

`contact@mukogawa.com` e `social@mukogawa.com` já estão linkados no rodapé. Precisam existir antes da publicação, senão o site oferece dois
endereços que devolvem erro.

Os endereços moram em `site/src/config/site.ts`, num lugar só.

### 3.3 X e Facebook — quando os perfis existirem

Mesma arquivo, `site/src/config/site.ts`. Trocar `href: null` pela URL:

```ts
{ nome: "X", icone: "x", href: "https://x.com/..." },
```

O emblema deixa de ser lugar reservado tracejado e vira link. Nada mais a fazer.

### 3.4 O domínio

Feito em 2026-08-03, a pedido do próprio autor: o site que estava em
`mukogawa.com` era muito inferior ao novo, e deixá-lo no ar era a opção pior.
A ordem foi antecipada de propósito — a trava da seção 3.5 é o que torna isso
seguro sem os itens 3.1 e 3.2 fechados.

**O DNS fica na GoDaddy. Não trocar nameservers.** Medido antes da migração, o
domínio já servia e-mail:

```
MX   mukogawa.com → mukogawa-com.mail.protection.outlook.com
TXT  MS=ms76846132                          (verificação Microsoft)
TXT  v=spf1 include:secureserver.net -all
NS   ns39/ns40.domaincontrol.com            (GoDaddy)
```

Isso é uma caixa **Microsoft 365 comprada via GoDaddy**. A Vercel oferece dois
caminhos ao adicionar um domínio, e o de **trocar nameservers apagaria o MX e os
dois TXT** — o e-mail do domínio pararia. O caminho certo é o de **registros
A/CNAME**, mexendo só em dois registros na GoDaddy:

| Registro | Antes | Depois |
|---|---|---|
| `A` da raiz | `199.36.158.100` (Website Builder da GoDaddy) | o IP que a Vercel exibir |
| `CNAME www` | aponta para a raiz | `cname.vercel-dns.com` |

**Não tocar em MX nem nos dois TXT.** O `TXT hosting-site=mukogawa` é do Website
Builder e pode sair depois, sem pressa.

O `www` entra num **segundo** "Add Domain", aí sim como **Redirect to Another Domain**,
308 Permanent, para `mukogawa.com`. Não precisa mexer em DNS de novo: o `CNAME www` da
GoDaddy já aponta para a raiz, e a Vercel valida e emite o certificado sozinha. Sem
esse passo o `www` não dá 404 — dá **erro de certificado**, que é a pior tela possível,
porque o CNAME resolve para a Vercel e ela não responde por domínio que não conhece.

Como consequência disso, a página 404 passou a importar de verdade: todo link antigo
em circulação cai nela.

**O acesso à GoDaddy é delegado, e o caminho normal dá 403.** O domínio está na conta
do **Israel Subira**, não na do Bruno — `account.godaddy.com/products` responde 403 e o
Domain Portfolio aparece vazio, porque a conta logada não tem domínio nenhum. O caminho
é `account.godaddy.com/access` → "Accounts I can access" → **Access Now**. O nível
concedido é "Products, Domains, & Purchase", o mais alto da delegação, e edita DNS sem
restrição. Dentro da conta há **outro domínio** (`rootschurch.us`) que não é do projeto.

**Resultado medido em 2026-08-03, logo após a virada:**

```
A raiz        216.198.79.1     nos três resolvers, propagação imediata (TTL 600)
MX            mail.protection.outlook.com     intacto
SPF, MS=, DKIM selector1/2                     intactos
https://mukogawa.com          200 · Let's Encrypt · Server: Vercel (gru1)
http  → https                 308
www   → raiz                  308, com certificado próprio
14 rotas nos três idiomas     200 · rota inexistente 404
noindex em PT, EN e JA        presente · robots.txt sem sitemap
```

Os registros de e-mail que **não** podem ser tocados, para referência de quem voltar
aqui: `MX`, `TXT MS=`, `TXT v=spf1`, e os CNAMEs `autodiscover`, `email`,
`lyncdiscover`, `msoid`, `sip` e `selector1/2._domainkey`. É uma instalação
Microsoft 365 completa e **com DKIM assinando** — não é caixa esquecida, é e-mail em
uso. Por isso mesmo, criar `contact@` e `social@` deve ser adicionar aliases nesse
M365, e não contratar provedor novo, o que encolhe o item 1 da Fase 1 do `MAPA.md`.

### 3.5 A trava de índice — **`INDEXAVEL`**

Até a v4.7 a indexação era derivada só do endereço: chegar em `mukogawa.com`
bastava, e o `noindex` sumia sozinho. Isso deixou de servir quando o domínio foi
virado **antes** de os itens 3.1 a 3.3 estarem fechados — o site iria a índice com
o formulário se declarando inativo, dois e-mails no rodapé que ainda não recebem e
a política sem controlador identificado. A primeira leitura que um buscador guarda
de um domínio é cara de desfazer.

Agora são duas condições, e a segunda é ação afirmativa. A regra mora num lugar só,
em `site/src/config/indexacao.ts`.

| Onde o site está | `INDEXAVEL` | Resultado |
|---|---|---|
| `mukogawa.com` | ausente | `noindex` nas 61 páginas, `robots.txt` sem sitemap |
| `mukogawa.com` | `1` | indexável, `robots.txt` anuncia o sitemap |
| `.vercel.app` | qualquer | `noindex` — a trava do preview vale por cima |

**Para liberar**, quando a Fase 1 do `MAPA.md` estiver fechada: Vercel → Settings →
Environment Variables → `INDEXAVEL` = `1` em **Production**, e republicar. Depois,
conferir que o `noindex` sumiu do HTML e que o `robots.txt` voltou a anunciar o
sitemap.

O padrão é fechado de propósito: se fosse aberto, esquecer de fechar seria o erro
silencioso, e é esse erro que a trava existe para impedir.

**O gatilho não é o DNS, é o botão.** Medido em 2026-08-03, minutos depois de o
domínio ser adicionado ao projeto e ainda com o DNS inteiro apontando para a GoDaddy:
o canonical do **preview** já saía como `https://mukogawa.com/`. A causa é o
`astro.config.mjs`, que deriva o `site` de `VERCEL_PROJECT_PRODUCTION_URL` — e a
Vercel passa a expor o domínio novo nessa variável **no instante do "Add Domain"**.

Isso quer dizer que, na lógica antiga, `Astro.site.hostname` já valia `mukogawa.com`
e o `noindex` teria sumido no deploy seguinte, servido pelo `.vercel.app`, que é
público e não tem senha. O risco não começava na propagação do DNS, como parecia:
começava no clique. Quem for mexer nisso de novo tem que lembrar que **o endereço
que o build enxerga muda antes de qualquer registro de DNS mudar.**

---

## 4. Sem a Vercel: o pacote offline

```bash
node ferramentas/gerar-offline.mjs
```

Gera `mukogawa-offline/` e `mukogawa-offline.zip` (58 páginas), com os caminhos
reescritos para relativos. Abre-se pelo `index.html`, sem servidor e sem
internet. Testado por `file://`: as páginas, as fontes, as artes e a navegação
funcionam.

Serve como reserva e como registro datado — os snapshots ficam em `versoes/`.
Não substitui o preview para revisão do dia a dia: é um arquivo grande, não abre
bem no celular e cada revisão exige mandar um zip novo.
