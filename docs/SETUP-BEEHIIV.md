# Setup do Beehiiv — o que você faz no painel

Roteiro para tirar a lista de espera do Formspree. **O que está aqui é ação sua**:
criar conta e digitar credencial são coisas que eu não faço por você. O lado do
código eu deixo pronto em paralelo.

**Caminho escolhido: opção B.** Uma função em `mukogawa.com/api/inscrever` guarda o
token no servidor, e o formulário do site continua exatamente como está — campo de
região, validação nos quatro idiomas, mensagens na voz da casa, o corte diagonal nos
campos. Uma correção ao que o `HANDOFF.md` registrava: **o site continua 100%
estático**. A função vive fora do Astro, numa pasta `api/` que a Vercel reconhece
sozinha; não entra adapter, e o build das 61 páginas não muda em nada.

**A função já está publicada e respondendo** (verificado em 2026-08-04, logo após o
deploy). Hoje ela devolve `503 {"erro":"desligado"}` porque as credenciais ainda não
existem — é o comportamento projetado: sem token ela recusa em vez de fingir que
gravou. Quando você terminar o passo 7, esse 503 vira cadastro de verdade.

---

## Regra que vale para o roteiro inteiro

**A chave de API nunca vem para o chat e nunca entra em arquivo do repositório.**
Ela vai direto do painel do Beehiiv para o painel da Vercel, e eu não preciso vê-la
em momento nenhum. Se ela aparecer numa conversa, considere-a vazada e gere outra.

---

## 0. A verificação de identidade vem antes de tudo — descoberto em 2026-08-04

**O Beehiiv só libera API key e Publication ID depois da verificação de conta por
Stripe Identity.** Sem ela a opção B não liga, e é o passo de maior latência porque
depende da análise deles. **Dispare primeiro e faça o resto enquanto processa.**
Pede documento de identidade; é ação sua.

## 1. A conta — feita em 2026-08-04, com uma ressalva

**O cadastro entrou no trial do plano Max, não no gratuito** (o painel mostrava
"Max trial — Day 1 / 14"). Vence por volta de **18 de agosto de 2026**, e então ou
vira cobrança ou cai para o Launch.

Não trava nada, mas **não configure recurso exclusivo do Max**: o que for montado
em cima dele some no downgrade. A lista de espera não precisa de nenhum — o Launch
atende até 2.500 assinantes com automação.

Se a conta tiver sido aberta com endereço pessoal, vale trocar para
`contact@mukogawa.com` ou `social@mukogawa.com`: a conta é da empresa, e quem
operar a lista depois precisa assumi-la sem depender de você.

**A publicação nasceu como "Bruno's Newsletter" e precisa virar "Mukō-Gawa"** — é o
nome que o leitor vê no remetente e no rodapé de todo e-mail.

## 2. A publicação

Nome: **Mukō-Gawa**.

**Uma publicação só, não uma por idioma.** A separação por língua se resolve no
campo do passo 3, e o plano gratuito conta assinantes — dividir em três publicações
não multiplicaria o limite, só triplicaria o trabalho de operar.

**Os "Subscribe forms" do Beehiiv NÃO são usados, e não devem ser configurados.**
Foi essa a decisão da opção B: o formulário é o do site, com campo de região,
validação nos quatro idiomas, mensagens na voz da casa e o corte diagonal nos
campos. Do Beehiiv o site só quer o lugar onde guardar o cadastro.

## 3. Criar os dois campos personalizados — **não pule este passo**

**Audience → Subscribers → aba `Custom Fields` → criar**

Crie dois campos de texto (string), com o nome exatamente assim — **o Beehiiv
diferencia maiúscula de minúscula nos nomes de campo**:

| Nome do campo | O que guarda |
|---|---|
| `regiao` | BR, US, JP ou OUTRO — o que a pessoa escolhe no formulário |
| `idioma` | pt, en ou ja — a língua da página em que ela se cadastrou |

Tudo minúsculo e sem acento, exatamente assim. `Regiao` ou `região` não casam com o
que a função envia.

**Por que isso é obrigatório:** a API do Beehiiv só aceita campos personalizados que
**já existem** na publicação. Se o campo não estiver criado, o cadastro entra do
mesmo jeito, sem erro nenhum, e a região é descartada em silêncio. Você só
descobriria em dezembro, na hora de avisar o Japão.

O campo `idioma` é ganho novo: o Formspree não tinha como saber em que língua a
pessoa chegou. Com ele, o aviso de lançamento sai na língua certa.

## 4. O double opt-in — **feito em 2026-08-04, e agora mora no código**

**Settings → Emails → seção `Preset Emails` → `Double Opt-in Email`**, com
`Opt-in Redirect URL` = `https://mukogawa.com/`. Ligado e verificado.

**Atenção para o futuro:** desligar isso no painel **não basta mais**. A função
declara `double_opt_override: "on"` e continuaria pedindo confirmação. Foi decisão
tomada depois de medir: o Beehiiv cria o assinante em `validating` e só depois o
move para `Pending`, então a resposta imediata era ambígua e o site chegou a dizer
"Pronto, você será avisado" para quem ainda precisava confirmar. Se um dia quiser
desligar, me peça — é uma linha em `api/inscrever.js` e um deploy.

**Recomendo ligado.** Um formulário público ligado a 1 milhão de seguidores recebe
erro de digitação e robô por padrão, e lista suja derruba a entregabilidade de todo
mundo — que é exatamente o que você não pode perder no dia 1º de dezembro.

O custo é real e tem duas partes: quem não confirma não entra, e **a mensagem de
sucesso do site vira mentira**. Hoje ela diz "Pronto. Você será avisado."; com
confirmação pendente o certo é algo como "Quase lá: confirme no e-mail que
enviamos". Se você ligar, eu troco nos quatro idiomas — é um comando.

## 5. Montar o e-mail de boas-vindas

É o motivo de sair do Formspree, que só encaminhava e não disparava nada. Procure
por *Automations* e crie o fluxo de boas-vindas.

Não escreva o texto na pressa: ele é a primeira coisa que o leitor recebe da obra, e
precisa passar pela `conteudo/VOZ.md` — voz da casa, seca, sem invadir o épico. Me
peça e eu escrevo nos três idiomas.

## 6. Pegar as duas credenciais

| O que | Onde | Formato |
|---|---|---|
| **API Key** | **Settings → Workspace Settings → API** → Create New API Key | copiável **uma única vez** |
| **Publication ID** | mesma página, rolando abaixo das chaves | começa com `pub_` |

Exige papel de **Owner ou Admin** no workspace, e a verificação do passo 0 concluída.

Ao criar a chave, dê a ela **apenas escopo de escrita em assinaturas**
(`subscriptions:write`). Se o painel só oferecer chave com acesso total, use assim
mesmo e me avise — muda o que a função pode fazer se um dia a chave vazar.

## 7. Colar as três variáveis na Vercel

Projeto `mukogawa` → Settings → Environment Variables:

| Variável | Valor | Observação |
|---|---|---|
| `BEEHIIV_API_KEY` | a chave do passo 6 | marque como **Sensitive**, se o painel oferecer |
| `BEEHIIV_PUBLICATION_ID` | `pub_...` | |
| `PUBLIC_WAITLIST_ENDPOINT` | `/api/inscrever` | substitui a URL do Formspree |

**Republicar é obrigatório.** `PUBLIC_WAITLIST_ENDPOINT` é lida no *build*, não em
tempo de execução: trocar o valor no painel não muda nada até sair um deploy novo.
As duas primeiras são lidas pela função a cada requisição e não têm essa amarra.

## 8. O que me dizer quando terminar

Só isto, em uma linha:

> conta criada · publicação criada · campos `regiao` e `idioma` criados · double
> opt-in ligado/desligado · três variáveis coladas

Aí eu testo de ponta a ponta, do mesmo jeito que o Formspree foi testado: POST
direto na função, depois o formulário na página real, com e-mail inválido e com
e-mail válido, e conferindo se a região e o idioma chegaram no assinante.

---

## Antes do primeiro cadastro sob a regra nova

**A política de privacidade precisa mudar, nos quatro idiomas.** Hoje ela promete
avisar do lançamento e dos livros e diz "**nada além disso**". Você quer mandar
novidades e promoções, e sob a LGPD é a finalidade declarada que vale — não a
intenção. Isso é trabalho meu e está na fila; só não pode ficar para depois do
primeiro e-mail que entrar na lista.

## Achado na conferência de 2026-08-04: falta o endereço no rodapé

Em **Settings → Emails → `Email footer details` → Address** está **"No Address
Set"**. Todo e-mail de marketing precisa trazer endereço físico do remetente —
é exigência da lei americana (CAN-SPAM), e os Estados Unidos são um dos três
mercados da lista. Sem isso o risco é duplo: multa e queda de entregabilidade,
porque provedor de e-mail lê a ausência como sinal de spam.

O endereço já está na política de privacidade, e é o da empresa:

```
Boanerges Produções LTDA
Rua Almirante Gonçalves, 2740 — Curitiba/PR, CEP 80250-150, Brasil
```

**O e-mail de boas-vindas também está desligado** (`Welcome email`, na mesma
tela). Ele é a primeira coisa que o leitor recebe da obra; o texto precisa passar
pela `conteudo/VOZ.md` e sair nos três idiomas. Me peça e eu escrevo.

## Fica para depois

**Enviar de `@mukogawa.com`** (registros DKIM/SPF). Mexe no mesmo DNS que serve o
Microsoft 365 do domínio, com o mesmo cuidado da migração: só tocar no que precisa.
Confira antes se o domínio de envio próprio é recurso pago no seu plano — se for,
os e-mails saem de um domínio do Beehiiv até valer a pena pagar. Ver `DEPLOY.md` 3.4.
