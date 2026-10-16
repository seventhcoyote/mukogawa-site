/**
 * Dados da casa: contatos e perfis oficiais da obra.
 *
 * Existe para que preencher um perfil novo ou trocar um e-mail seja mexer numa
 * linha, e não caçar string espalhada por componente. Os perfis pessoais dos
 * criadores NÃO moram aqui — eles são de pessoa, não da obra, e continuam em
 * `paginas/Criadores.astro`.
 *
 * `href: null` é estado de espera, não erro: o lugar aparece na composição,
 * marcado "em breve", mas não finge ser um link. Link morto é pior que ausência
 * assumida. Para acender, troque o null pela URL.
 */

export interface Rede {
  nome: string;
  /** chave do desenho do emblema no Rodape */
  icone: "instagram" | "x" | "facebook" | "discord";
  /** null = ainda não existe. Preencher acende o link sozinho. */
  href: string | null;
}

export const REDES: Rede[] = [
  { nome: "Instagram", icone: "instagram", href: "https://www.instagram.com/mukogawaverse/" },
  { nome: "X",         icone: "x",         href: "https://x.com/mukogawaverse" },
  { nome: "Facebook",  icone: "facebook",  href: "https://facebook.com/mukogawaverse" },
  // Convite permanente: sem limite de usos e sem data de expiração.
  { nome: "Discord",   icone: "discord",   href: "https://discord.gg/xjXtrfGPZx" },
];

/**
 * As duas caixas ainda precisam existir no provedor de e-mail antes da
 * publicação — estão linkadas no rodapé desde a v1. Ver PENDENCIAS.md, seção 3.
 */
export const EMAILS = {
  contato: "contact@mukogawa.com",
  imprensa: "social@mukogawa.com",
} as const;

/**
 * Onde se compra, quando já dá para comprar.
 *
 * Mesma regra do `href: null` acima: enquanto o link não existe, o lugar aparece
 * marcado como em espera e não finge ser link.
 *
 * A APOSTILA É O PRIMEIRO ITEM COMPRÁVEL DO PROJETO (2026-08-04). Todo o resto
 * do site fala no futuro — "chega em 1º de dezembro" — e ela é a única coisa que
 * o leitor pode ter hoje. É por isso que ganhou bloco próprio na Loja em vez de
 * entrar como mais uma linha entre cartões que dizem "aguarde".
 *
 * Vendida pela Orvalho, em português, com envio dentro do Brasil. O preço vive
 * lá e não entra no site — decisão do Bruno, reafirmada em 2026-08-04: a obra
 * não se mistura com monetização, e o FAQ diz isso com todas as letras.
 */
export const VENDAS = {
  apostila: "https://loja.orvalho.com/livros/muko-gawa-apostila-conceitual-israel-subira",
  /**
   * A campanha de Bleeding Light. ABRE EM 03/11/2026 — até lá o Catarse só
   * aceita "seguir o projeto", não apoiar, e por isso os botões do site dizem
   * SEGUIR e não APOIAR. Decidido com o Bruno em 2026-10-16: botão que promete
   * uma ação que a página de destino não oferece queima o clique, e quem volta
   * frustrado não retorna na abertura. Em 03/11 troca-se o rótulo em `ui.ts`
   * (`catarse.seguir` -> `catarse.apoiar`) e nada mais.
   *
   * O utm é nosso, para medir quanto tráfego o site manda — não é rastreador de
   * rede social, e a política de privacidade continua verdadeira.
   */
  catarse: "https://www.catarse.com.br/muko-gawa?utm_source=mukogawaverse&utm_medium=site&utm_campaign=pre-campanha",
} as const;
