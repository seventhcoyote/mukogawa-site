# 2. Contas e acessos — do zero

Este é o único documento que precisa ser feito **junto com o Bruno**, porque
metade dos passos é dele e metade é sua. Reserve uma hora.

**A ordem importa.** O domínio vem por último de propósito: ele só pode estar
num projeto da Vercel por vez, e é o único passo em que o site pode sair do ar
por alguns minutos.

---

## Antes de começar

| O que é | Hoje está com | Vai para |
|---|---|---|
| Repositório (o código) | GitHub do Bruno (`h96b`) | sua conta do GitHub |
| Hospedagem | Vercel do Bruno | sua conta da Vercel |
| Domínio `mukogawa.com` | GoDaddy, acesso delegado | resolver com o Bruno |
| Newsletter | Beehiiv | sua conta |

---

# PARTE 1 — Suas contas (você sozinho, ~15 min)

## 1.1 GitHub

Crie em **github.com**. Use um e-mail que você vá manter — se possível
`contact@mukogawa.com`, porque a conta é do projeto, não sua pessoa.

Ative a **verificação em duas etapas** quando ele pedir. O GitHub exige, e sem
isso você perde o acesso depois.

**Me mande seu nome de usuário** — o Bruno precisa dele para transferir.

## 1.2 Vercel

Crie em **vercel.com** e escolha **"Continue with GitHub"**. Logar com o GitHub
evita ter duas contas para lembrar e já conecta as duas coisas.

Escolha o plano **Hobby** (gratuito) por enquanto. Leia a observação sobre plano
no fim deste documento antes de decidir se fica nele.

## 1.3 Beehiiv

Se o Bruno for passar a conta existente, você não cria nada — ele te convida
como Owner. Se preferir começar do zero, o passo a passo está em
`docs/SETUP-BEEHIIV.md`, dentro do projeto.

---

# PARTE 2 — Receber o código (Bruno + você, ~10 min)

## 2.1 O Bruno transfere o repositório

No GitHub dele: **Settings → General → Danger Zone → Transfer ownership**,
digitando seu nome de usuário.

## 2.2 Você aceita

Chega um e-mail do GitHub. Aceite. O repositório passa a aparecer na sua conta,
em `github.com/SEU-USUARIO/mukogawa-site`.

## 2.3 Baixe o projeto

```bash
git clone https://github.com/SEU-USUARIO/mukogawa-site.git
cd mukogawa-site
npm install
npm run build
```

Tem de terminar com **22 pages built**. Se terminar, o código está inteiro na
sua máquina e você já poderia trabalhar nele — falta só publicar.

---

# PARTE 3 — A hospedagem (você, ~15 min)

## 3.1 Importar o projeto

Na Vercel: **Add New → Project**, escolha `mukogawa-site` na lista, e **Import**.

Ela reconhece que é Astro sozinha. **Não mude nada** em Framework Preset, Build
Command ou Output Directory.

## 3.2 As quatro variáveis — antes do primeiro deploy

Ainda na tela de importação, abra **Environment Variables** e crie as quatro.
Se publicar sem elas, o site sobe quebrado.

| Nome | Valor |
|---|---|
| `INDEXAVEL` | `1` |
| `PUBLIC_WAITLIST_ENDPOINT` | `/api/inscrever` |
| `BEEHIIV_PUBLICATION_ID` | `pub_…` (o Bruno te passa) |
| `BEEHIIV_API_KEY` | **gere uma nova** (ver abaixo) |

**A chave do Beehiiv não deve ser copiada do Bruno por mensagem.** Entre no
painel do Beehiiv, em **Settings → Workspace Settings → API**, apague a chave
antiga e crie outra. Cole a nova direto aqui. Uma chave já foi trocada neste
projeto por ter passado por conversa — chave que circula em mensagem é chave
vazada.

O que cada uma faz:

- **`INDEXAVEL`** libera o site para o Google. Sem ela, todas as páginas pedem
  para não serem indexadas e o site some da busca em alguns dias, sem nenhum
  aviso visível.
- **`PUBLIC_WAITLIST_ENDPOINT`** diz ao formulário para onde enviar. É lida no
  momento em que o site é construído: mudar o valor não tem efeito até sair uma
  publicação nova.
- As duas do **Beehiiv** ficam no servidor e nunca chegam ao navegador de quem
  visita. É por isso que elas não levam `PUBLIC_` no nome.

## 3.3 Publique e confira

Clique em **Deploy**. Em um ou dois minutos a Vercel te dá um endereço do tipo
`mukogawa-site-xxxx.vercel.app`. Abra e confira:

- [ ] a home abre com "Mukō-Gawa: Bleeding Light"
- [ ] o menu tem Início · Bleeding Light · Criadores · Loja
- [ ] a página Bleeding Light abre e rola até o fim
- [ ] `/en/` e `/ja/` abrem
- [ ] o formulário da newsletter aceita um e-mail de teste

**Enquanto isso, o site oficial continua no ar normalmente**, servido pelo
projeto do Bruno. Você está testando em paralelo.

---

# PARTE 4 — O domínio (Bruno + você, por último)

É o passo delicado. **Só faça depois que a Parte 3 estiver funcionando.**

## 4.1 Leia o aviso antes

> O `mukogawa.com` serve também uma **caixa de e-mail Microsoft 365**, comprada
> junto com o domínio na GoDaddy. Os registros `MX`, o `TXT` de verificação e o
> `SPF` pertencem ao e-mail, não ao site.
>
> **Trocar os nameservers do domínio para a Vercel apaga os três e derruba o
> e-mail.** Só os registros `A` da raiz e `CNAME` do `www` são do site.

O detalhamento está em `docs/DEPLOY.md`, dentro do projeto. Leia antes.

## 4.2 A sequência que não derruba o site

1. **O Bruno remove o domínio** do projeto antigo na Vercel. A partir daqui, e
   só por alguns minutos, `mukogawa.com` pode ficar fora do ar.
2. **Você adiciona** `mukogawa.com` ao seu projeto: **Settings → Domains → Add**.
3. A Vercel mostra os registros a configurar. **Mantenha os nameservers na
   GoDaddy** e altere apenas o `A` e o `CNAME` — é o que a Vercel chama de
   configuração por registros, não por nameservers.
4. No painel da GoDaddy, o checkbox **"Redirect apex domains to www"** precisa
   ficar **desmarcado**. O endereço oficial do site é a raiz; forçar o www faz a
   trava de indexação nunca liberar, e isso não dá erro visível.
5. Espere a Vercel marcar o domínio como válido e abra `https://mukogawa.com`.
6. **Confira o e-mail**: mande uma mensagem para `contact@mukogawa.com` de outro
   endereço e veja se chega. É a prova de que o Microsoft 365 sobreviveu.

## 4.3 Acesso à GoDaddy

Hoje o acesso é **delegado**: o caminho normal dá erro 403, e entra-se por
`account.godaddy.com/access` → "Accounts I can access" → Access Now.

Para o domínio ficar realmente seu, é preciso resolver a titularidade dentro da
GoDaddy com quem é o dono da conta. Enquanto isso não acontece, você depende do
Bruno para mexer em DNS — o que é aceitável, porque DNS se mexe uma vez por ano.

---

# PARTE 5 — Depois que tudo estiver no seu nome

- [ ] `git push` seu publica no seu projeto da Vercel
- [ ] `https://mukogawa.com` abre a versão nova
- [ ] o e-mail `contact@mukogawa.com` continua recebendo
- [ ] o formulário da newsletter cadastra de verdade (teste com um alias novo,
      tipo `seunome+teste1@gmail.com`)
- [ ] o Bruno pode sair do repositório e da Vercel

---

## Uma decisão que vale tomar com calma

**O plano Hobby da Vercel tem termos de uso não comercial.** O site tem loja e
campanha de financiamento, o que fica no limite do que o plano permite. A Vercel
raramente age nisso, mas se agir, o site sai do ar sem aviso.

Não é urgente. Mas antes do lançamento de dezembro, vale subir para o plano pago
— é a diferença entre um risco pequeno e um risco pequeno **no pior dia
possível**.
