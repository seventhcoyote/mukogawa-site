# Entrega do projeto — o que transferir, e em que ordem

Checklist para passar o site de Mukō-Gawa para o Israel operar da máquina dele.
São **seis contas** e um repositório. Nada aqui tem pressa, mas a ordem importa:
o domínio é o passo mais delicado e vem por último.

**Quem transfere:** Bruno. **Quem recebe:** Israel.

---

## 1. O repositório — github.com/h96b/mukogawa-site

Hoje é **privado** e pertence à conta `h96b`.

**Duas formas, e a escolha muda o resto:**

| | O que acontece | Quando escolher |
|---|---|---|
| **Transferir a propriedade** | o repositório passa para a conta do Israel; o Bruno sai, ou fica como colaborador | o projeto é dele daqui em diante |
| **Adicionar como colaborador** | o Bruno continua dono; o Israel ganha acesso de escrita | os dois vão trabalhar juntos por um tempo |

Transferir: **Settings → General → Danger Zone → Transfer ownership**. O Israel
precisa aceitar o convite.

**Se transferir, a Vercel precisa ser reconectada** ao repositório no novo dono —
a integração não acompanha a mudança sozinha.

**Tudo que o projeto precisa já está dentro do repositório** (feito em
16/10/2026): documentação, ferramentas, artes originais e o `CLAUDE.md` que
ensina o Claude Code a trabalhar aqui. Clonar é suficiente para continuar.

Não está no repositório, por serem grandes e dispensáveis: a pasta `versoes/`
(467 MB de snapshots) e `capturas/`. Se quiser entregar, mande por outro meio.

---

## 2. A Vercel — hospedagem

O projeto `mukogawa-site`. É aqui que o site é publicado a cada `git push`.

**Transferir:** Vercel → Project Settings → **Transfer Project**, para a conta ou
time do Israel. As variáveis de ambiente **não vão junto** — precisam ser
recriadas à mão.

### As variáveis (recriar todas)

| Variável | Valor | Observação |
|---|---|---|
| `INDEXAVEL` | `1` | sem ela, as páginas pedem `noindex` e o site sai do Google |
| `PUBLIC_WAITLIST_ENDPOINT` | `/api/inscrever` | lida no BUILD: mudar exige republicar |
| `BEEHIIV_API_KEY` | a chave do Beehiiv | marcar **Sensitive** |
| `BEEHIIV_PUBLICATION_ID` | `pub_…` | |

**A chave do Beehiiv não deve ser copiada de um lado para o outro por mensagem.**
O certo é o Israel gerar uma nova no painel do Beehiiv e colar direto na Vercel.
Uma chave já foi trocada neste projeto por ter passado por conversa.

### Duas coisas para o Israel saber

**O plano Hobby tem termos de uso não comercial.** O projeto está nele hoje. A
Vercel raramente age nisso, mas se agir, o site sai do ar — e um site que vende
está no limite do que o plano permite. Avaliar o plano pago.

**O root directory do projeto é a raiz do repositório** e o build é
`npm run build`. Não mexer sem necessidade.

---

## 3. O Beehiiv — newsletter

Conta criada em agosto de 2026, publicação **Mukō-Gawa**.

- **Transferir:** convidar o Israel como Owner/Admin do workspace e depois o
  Bruno sair. Beehiiv não tem botão de "transferir conta".
- **A chave de API** usada pelo site vive na Vercel. Ao trocar de dono, gerar
  chave nova e substituir lá.
- **Os campos personalizados `regiao` e `idioma` precisam continuar existindo**,
  com esses nomes exatos. A API aceita só campos já criados: se sumirem, o
  cadastro entra e o dado é descartado sem erro nenhum.
- O plano estava em teste do Max. Confirmar em que plano está hoje e o que
  acontece no vencimento.

Passo a passo completo do que existe: `docs/SETUP-BEEHIIV.md`.

---

## 4. O domínio e o DNS — **o passo mais delicado**

`mukogawa.com` está registrado na **GoDaddy**, e o DNS continua lá: a Vercel só
recebe o apontamento.

**Antes de qualquer coisa, leia `docs/DEPLOY.md`.** O resumo do risco:

> O domínio serve uma caixa **Microsoft 365** comprada junto com ele. Os
> registros `MX`, o `TXT` de verificação e o `SPF` são do e-mail. **Trocar os
> nameservers para a Vercel apaga os três e derruba o e-mail do domínio.**
> Só os registros `A` da raiz e `CNAME` do `www` pertencem ao site.

Há também um detalhe de painel: o checkbox **"Redirect apex domains to www"**
precisa ficar **desmarcado**. O canônico do site é a raiz, e forçar o www faria a
trava de indexação nunca liberar, sem erro visível.

**O acesso à GoDaddy hoje é delegado.** O caminho normal dá 403; entra-se por
`account.godaddy.com/access` → "Accounts I can access" → Access Now. Para passar
o domínio ao Israel é preciso resolver a titularidade na própria GoDaddy, com
quem é o titular da conta.

---

## 5. Contas de terceiros — só acesso, não transferência

**Catarse** — a campanha `catarse.com.br/muko-gawa`, que abre em 03/11/2026. É do
Israel; o site só aponta para lá. **Lembrete: no dia 03/11 o botão do site deve
deixar de dizer "Siga a campanha" e passar a "Apoie agora"** — é uma linha em
`src/i18n/ui.ts` (`catarse.seguir`) e um deploy.

**Orvalho** — vende a apostila conceitual. O site só linka. Duas correções
pendentes com eles: a página descreve a obra como "anime", que o site não
afirma, e escreve "Muko-Gawa" sem o macron.

**Google Search Console** — se tiver sido criado, adicionar o Israel como
proprietário. Se não existir, vale criar: é de graça e mostra por quais buscas o
site aparece. Relevante agora, porque 45 URLs foram removidas em 16/10 e os
redirecionamentos precisam ser acompanhados.

---

## 6. Depois de transferir, conferir junto

Com o Israel na máquina dele:

- [ ] `git clone` e `npm install` funcionam
- [ ] `npm run dev` abre o site
- [ ] `npm run build` termina sem erro, com 22 páginas
- [ ] `npm run auditar -- --larguras 1440,768,375 --rotas /,/bleeding-light` roda
- [ ] `node ferramentas/gerar-fonte-kanji.mjs` roda (se reclamar do Python, o
      próprio erro diz como reconstruir o ambiente)
- [ ] um `git push` de teste publica na Vercel
- [ ] o formulário da newsletter cadastra de verdade (testar com um alias novo)

---

## O que o Israel deve ler, nesta ordem

1. **`CLAUDE.md`**, na raiz — o Claude Code dele lê sozinho, mas vale ler também.
2. **`docs/HANDOFF.md`** — o estado do projeto e as decisões que não devem ser
   desfeitas. É o documento mais importante.
3. **`docs/MAPA.md`** — o que falta fazer.
4. **`docs/conteudo/VOZ.md`** — antes de escrever qualquer texto novo.
5. **`docs/DEPLOY.md`** — só quando for mexer em domínio, DNS ou e-mail.
