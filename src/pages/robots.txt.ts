import type { APIRoute } from "astro";
import { podeIndexar } from "../config/indexacao";

/**
 * Gerado, e não escrito à mão em public/, por dois motivos.
 *
 * 1. A linha do Sitemap precisa da URL real do deploy, que muda entre o preview
 *    da Vercel e o domínio final. Um arquivo estático apontaria para o endereço
 *    errado em um dos dois casos.
 *
 * 2. Enquanto o site não estiver liberado para índice, não se anuncia sitemap.
 *    O bloqueio de verdade é o `noindex` do Base.astro — e é por isso que aqui
 *    o rastreio continua liberado: um `Disallow` impediria o buscador de ler a
 *    página e, portanto, de ver o próprio `noindex`. O que se faz aqui é não
 *    entregar de bandeja a lista das 61 URLs.
 *
 * Quem decide os dois casos é `config/indexacao.ts`, num lugar só.
 */
export const GET: APIRoute = ({ site }) => {
  const corpo = podeIndexar(site)
    ? `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", site)}
`
    : `# Versão de avaliação, ainda não liberada para índice.
# As páginas trazem <meta name="robots" content="noindex">; o rastreio segue
# liberado justamente para que essa marcação possa ser lida.
User-agent: *
Allow: /
`;

  return new Response(corpo, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
