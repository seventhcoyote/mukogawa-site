/**
 * Quando o site pode entrar em índice de busca.
 *
 * Até 2026-08-03 isto era derivado só do endereço: estar em mukogawa.com
 * bastava, e a marcação de `noindex` sumia sozinha na virada do domínio. A
 * regra mudou porque o domínio foi virado ANTES de o site estar pronto como
 * produto — o formulário da lista de espera ainda se declara inativo, as duas
 * caixas do rodapé ainda não recebem e a política de privacidade ainda não
 * identifica o controlador. A primeira leitura que um buscador guarda de um
 * domínio é cara de desfazer, e não vale gastá-la com a versão incompleta.
 *
 * São duas condições agora, e a segunda é ação afirmativa: além de estar no
 * domínio definitivo, alguém precisa ter escrito `INDEXAVEL=1` no ambiente.
 * Sem ela, `noindex` — em produção inclusive. O padrão é fechado de propósito:
 * se fosse aberto, esquecer de fechar seria o erro silencioso, e é exatamente
 * esse erro que esta trava existe para impedir.
 *
 * PARA LIBERAR, quando a Fase 1 do MAPA.md estiver fechada:
 * Vercel → Settings → Environment Variables → `INDEXAVEL` = `1` em Production,
 * e republicar. Confira depois que o `noindex` sumiu do HTML e que o
 * `robots.txt` voltou a anunciar o sitemap.
 */
const DOMINIO_FINAL = "mukogawa.com";

// A Vercel injeta as variáveis do painel em `process.env` durante o build; o
// Vite carrega o `.env` local em `import.meta.env`. Ler as duas faz a trava
// responder igual na Vercel e na máquina.
const LIBERADO =
  (process.env.INDEXAVEL ?? import.meta.env.INDEXAVEL) === "1";

/** True só no domínio definitivo E com a liberação explícita no ambiente. */
export function podeIndexar(site: URL | undefined): boolean {
  return site?.hostname === DOMINIO_FINAL && LIBERADO;
}
