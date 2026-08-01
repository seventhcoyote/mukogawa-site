import type { APIRoute } from "astro";

/**
 * Gerado, e não escrito à mão em public/, porque a linha do Sitemap precisa da
 * URL real do deploy — que muda entre preview da Vercel e o domínio final. Um
 * arquivo estático apontaria para o endereço errado em um dos dois casos.
 */
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", site)}
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
