import type { Metadata } from "next";
import { asLang } from "@/content";
import { SLUGS, keyOf, type PageKey } from "@/lib/links";
import Campanha, { generateMetadata as campanhaMeta } from "@/views/Campanha";
import Autores, { generateMetadata as autoresMeta } from "@/views/Autores";
import Loja, { generateMetadata as lojaMeta } from "@/views/Loja";

/** The inner pages, at each language's own address words (lib/links.ts → SLUGS):
 *  /pt/campanha/ · /pt/autores/ · /pt/loja/ and /en/project/ · /en/authors/ · /en/store/. */
const VIEWS = { campanha: [Campanha, campanhaMeta], autores: [Autores, autoresMeta], loja: [Loja, lojaMeta] } as const;

type Props = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = ({ params }: { params: { lang: string } }) =>
  Object.values(SLUGS[asLang(params.lang)]).map((slug) => ({ slug }));

const resolve = async (params: Props["params"]) => {
  const { lang, slug } = await params;
  const key = keyOf(asLang(lang), slug) as PageKey;
  return { view: VIEWS[key], params: Promise.resolve({ lang }) };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { view, params: p } = await resolve(params);
  return view[1]({ params: p });
}

export default async function Page({ params }: Props) {
  const { view, params: p } = await resolve(params);
  const View = view[0];
  return <View params={p} />;
}
