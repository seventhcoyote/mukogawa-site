import type { APIRoute } from "astro";

/**
 * Gerado, e não escrito à mão em public/, por dois motivos.
 *
 * 1. A linha do Sitemap precisa da URL real do deploy, que muda entre o preview
 *    da Vercel e o domínio final. Um arquivo estático apontaria para o endereço
 *    errado em um dos dois casos.
 *
 * 2. Fora do domínio definitivo, o site não deve ser indexado. O bloqueio de
 *    verdade é o `noindex` do Base.astro — e é por isso que aqui o rastreio
 *    continua liberado: um `Disallow` impediria o buscador de ler a página e,
 *    portanto, de ver o próprio `noindex`. O que se faz aqui é não anunciar o
 *    sitemap de um endereço que não é para entrar em índice nenhum.
 */
const DOMINIO_FINAL = "mukogawa.com";

export const GET: APIRoute = ({ site }) => {
  const ehDominioFinal = site?.hostname === DOMINIO_FINAL;

  const corpo = ehDominioFinal
    ? `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", site)}
`
    : `# Versão de avaliação, fora do domínio definitivo.
# As páginas trazem <meta name="robots" content="noindex">; o rastreio segue
# liberado justamente para que essa marcação possa ser lida.
User-agent: *
Allow: /
`;

  return new Response(corpo, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
