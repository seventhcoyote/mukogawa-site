import type { Metadata } from "next";
import Site from "@/components/Site";
import Canvas from "@/components/Canvas";
import A from "@/components/A";
import Img from "@/components/Img";
import Rotated from "@/components/Rotated";
import Paper from "@/components/Paper";
import Hero from "@/components/Hero";
import Rail from "@/components/Rail";
import Footer from "@/components/Footer";
import Drip from "@/components/Drip";
import HomeScroll from "@/components/HomeScroll";
import { RuleH, Svg } from "@/components/Ornaments";
import { Body, Title } from "@/components/Type";
import { asLang, getDict } from "@/content";
import { ANCHORS, page } from "@/lib/links";
import Button from "@/components/Button";
import { Mobile, MSection, MTitle, MBody, MFooter } from "@/components/m/Mobile";
import MHero from "@/components/m/MHero";
import MobileChrome from "@/components/m/MobileChrome";
import AngelLand from "@/components/AngelLand";

/** Autores — Figma 253:1458 "autores-menu_lateral" (open) / 253:2481 (closed), 1648 × 4328.
 *  Same treatment as Campanha: menu closed, calm hero, blood drips, parallax, rise-in, free scroll. */
const H = 4328;
type Props = { params: Promise<{ lang: string }> };
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({ title: getDict((await params).lang).meta.autores });

export default async function Autores({ params }: Props) {
  const lang = asLang((await params).lang), d = getDict(lang), t = d.autores;
  return (
    <Site menu="closed">
      <main>
        <div className="desk">
        <Canvas height={H} figma="253:1458">
          <Paper top={560} height={H} />
          <Hero d={d} cta={d.hero.presale} calm />
          <Footer d={d} height={H} clouds={{ y: 2128, h: 2066 }}>
            <A x={200} y={H - 2101} w={1131} h={1184} shift className="pointer-events-none" data-angel>
              <Img src="/img/angel.webp" alt={d.alt.angel} className="object-fill" />
            </A>
          </Footer>

          <Title x={741} y={1024} cx figma="253:1573" data-rise data-anchor={ANCHORS[lang].autores}>{t.title}</Title>
          <RuleH src="rule-h-316-l.svg" x={156} y={1086} w={316.586} />
          <RuleH src="rule-h-316-r.svg" x={1009} y={1086} w={316.586} flip />
          {/* blood runs from the outer diamonds of the title rules */}
          <Drip x={156} y={1086} len={130} every={9} />
          <Drip x={1315} y={1086} len={190} every={12} delay={0.6} />

          {/* o escritor */}
          <Rotated x={277} y={1277} bw={528.269} bh={621.149} w={458.193} h={566.107} transform="rotate(7.51deg)" shift className="mix-blend-multiply" figma="253:1572" speed={0.1}>
            <Img src="/img/portrait-isra.webp" alt={t.israAlt} className="object-cover" />
          </Rotated>
          <Title as="h3" x={817} y={1337} size={64} figma="253:1574" data-rise>{t.escritor}</Title>
          <Svg src="star-66b.svg" x={666} y={1350} w={66} h={66} />
          <RuleH src="rule-h-90.svg" x={699} y={1378} w={90.586} flip />
          <Body x={817} y={1458} w={509} figma="253:1576" data-rise>
            <p><strong className="font-bold text-[#e11319]">{t.escritorName}</strong>{t.escritorText[0]}</p>
            <p>{t.escritorText[1]}</p>
          </Body>

          {/* o ilustrador */}
          <A x={736.95} y={1997.65} w={505.949} h={625.11} shift className="pointer-events-none" figma="253:1571" data-speed={-0.08}
            style={{ WebkitMaskImage: "url(/svg/portrait-match-mask.svg)", maskImage: "url(/svg/portrait-match-mask.svg)", WebkitMaskPosition: "calc(4.047 * var(--u)) calc(29.354 * var(--u))", maskPosition: "calc(4.047 * var(--u)) calc(29.354 * var(--u))", WebkitMaskSize: "calc(498.148 * var(--u)) calc(554 * var(--u))", maskSize: "calc(498.148 * var(--u)) calc(554 * var(--u))", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }}>
            <Img src="/img/portrait-match.webp" alt={t.matchAlt} className="object-cover" />
          </A>
          <Title as="h3" x={673} y={2053} rx size={64} className="text-right" figma="253:1575" data-rise>{t.ilustrador}</Title>
          <Svg src="ornament-l.svg" x={704} y={2062} w={157} h={66} />
          <Body x={673} y={2174} w={509} rx className="text-right" figma="253:1577" data-rise>
            <p>{t.ilustradorText[0]}</p><p>{t.ilustradorText[1]}</p>
          </Body>
          {/* on to the project page, so the visit carries on */}
          <A x={673} y={2720} rx shift className="z-[2]" data-rise><Button href={page(lang).campanha} w={365} inset={15.5}>{t.cta}</Button></A>
          {/* and, to its right, the store */}
          <A x={697} y={2720} shift className="z-[2]" data-rise><Button href={page(lang).loja} w={200} inset={15.5}>{d.nav.loja}</Button></A>

          <Rail top={1000} height={H - 1000} />   {/* starts below the hero (the white), as on Home */}
          <HomeScroll lift={false} />
        </Canvas>
        </div>

        {/* phone */}
        <Mobile>
          <MHero d={d} />
          <MSection>
            <MTitle size={44} drips={[110, 170]} anchor={ANCHORS[lang].autores}>{t.title}</MTitle>
          </MSection>
          <MSection className="m-stack">
            <div className="m-portrait m-portrait-isra" data-speed={0.05}>
              <img src="/img/portrait-isra.webp" alt={t.israAlt} loading="lazy" />
            </div>
            <MTitle as="h3" size={32} align="left">{t.escritor}</MTitle>
            <MBody>
              <p><strong className="font-bold text-[#e11319]">{t.escritorName}</strong>{t.escritorText[0]}</p>
              <p>{t.escritorText[1]}</p>
            </MBody>
          </MSection>
          <MSection className="m-stack">
            <div className="m-portrait m-portrait-match" data-speed={-0.05}>
              <div className="m-portrait-mask"><img src="/img/portrait-match.webp" alt={t.matchAlt} loading="lazy" /></div>
            </div>
            <MTitle as="h3" size={32} align="right">{t.ilustrador}</MTitle>
            <MBody align="right"><p>{t.ilustradorText[0]}</p><p>{t.ilustradorText[1]}</p></MBody>
            <div className="m-cta m-cta-right m-cta-pair" data-rise>
              <Button href={page(lang).campanha} w={330} inset={13}>{t.cta}</Button>
              <Button href={page(lang).loja} w={160} inset={13}>{d.nav.loja}</Button>
            </div>
          </MSection>
          <MFooter d={d} tall>
            <img src="/img/angel.webp" alt={d.alt.angel} loading="lazy" className="m-angel" data-angel />
          </MFooter>
        </Mobile>
        <AngelLand />
        <MobileChrome />
      </main>
    </Site>
  );
}
