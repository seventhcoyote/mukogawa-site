import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Site from "@/components/Site";
import Canvas from "@/components/Canvas";
import A from "@/components/A";
import Paper from "@/components/Paper";
import Drip from "@/components/Drip";
import HomeScroll from "@/components/HomeScroll";
import Hero from "@/components/Hero";
import Rail from "@/components/Rail";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { Brackets, RuleH } from "@/components/Ornaments";
import { Body, Title } from "@/components/Type";
import { asLang, getDict, type Dict } from "@/content";
import { ANCHORS, CAMPAIGN_URL, ORVALHO_URL, page, type Lang } from "@/lib/links";
import JoinForm from "@/components/JoinForm";
import MJoin from "@/components/m/MJoin";
import { Mobile, MSection, MTitle, MBody, MLabel, MPhoto, MFooter } from "@/components/m/Mobile";
import MHero from "@/components/m/MHero";
import MobileChrome from "@/components/m/MobileChrome";
import AngelLand from "@/components/AngelLand";

/** Loja — the content of mukogawa.com/loja (Catarse pre-sale + the Orvalho kit; no newsletter) in our
 *  layout. No Figma frame: built from Campanha's pieces (calm hero, bracketed photos with drips,
 *  parallax, rise-in, free scroll). */
const H = 4000;
type Props = { params: Promise<{ lang: string }> };
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({ title: getDict((await params).lang).meta.loja });

/** Blood running from the lower ends of the two top brackets of a frame (Brackets at x, y). */
function PhotoDrips({ x, y }: { x: number; y: number }) {
  return (
    <>
      <Drip x={x + 7.5} y={y + 141} len={90} end="drop" every={8} />
      <Drip x={x + 625.3} y={y + 141} len={140} end="drop" every={11} />
    </>
  );
}

/** Small red uppercase label (the store's "eyebrows"). */
function Label({ x, y, children, rx, cx }: { x: number; y: number; children: string; rx?: boolean; cx?: boolean }) {
  return (
    <A as="p" x={x} y={y} rx={rx} cx={cx} shift className={`fs ls whitespace-nowrap font-barlow font-semibold uppercase text-[#d31217] ${rx ? "text-right" : ""}`} style={{ "--fs": 15, "--ls": 3.6, lineHeight: 1.5 } as CSSProperties} data-rise>
      {children}
    </A>
  );
}

/** Photo in its bracket frame: the 544.776 × 639.649 window 51.88 in from the brackets. */
function Framed({ x, y, src, alt, speed }: { x: number; y: number; src: string; alt: string; speed: number }) {
  return (
    <>
      <Brackets x={x} y={y} />
      <PhotoDrips x={x} y={y} />
      <A x={x + 51.88} y={y + 51.88} w={544.776} h={639.649} shift className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
        <img loading="lazy" src={src} alt={alt} className="absolute inset-x-0 max-w-none object-cover" style={{ width: "100%", height: "116%", top: "-8%" }} data-speed={speed} />
      </A>
    </>
  );
}

export default async function Loja({ params }: Props) {
  const lang = asLang((await params).lang), d = getDict(lang);
  if (!d.has.store) return <Soon d={d} lang={lang} />;
  const t = d.loja, c = t.campanha, k = t.kit;
  return (
    <Site menu="closed">
      <main>
        <div className="desk">
        <Canvas height={H} figma="none (mukogawa.com/loja)">
          <Paper top={560} height={H} />
          <Hero d={d} cta={d.hero.presale} href={CAMPAIGN_URL} calm />
          <Footer d={d} height={H} clouds={{ y: 3000, h: H - 3000 }} />

          {/* onde comprar · pré-venda */}
          <Label x={715.5} y={990} cx>{t.eyebrow}</Label>
          <Title x={715.5} y={1024} cx data-rise data-anchor={ANCHORS[lang].loja}>{t.title}</Title>
          <RuleH src="rule-h-316-l.svg" x={130} y={1086} w={316.586} />
          <RuleH src="rule-h-316-r.svg" x={983} y={1086} w={316.586} flip />

          {/* the Catarse campaign: text left (right-aligned), photo right */}
          <Label x={658} y={1340} rx>{c.label}</Label>
          <Title as="h3" x={658} y={1380} rx size={56} className="text-right" data-rise>{c.title}</Title>
          <Body x={658} y={1490} w={535} rx className="text-right" data-rise>{c.text.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}</Body>
          <A x={658} y={1900} rx shift data-rise><Button href={CAMPAIGN_URL} w={330} inset={14}>{c.cta}</Button></A>
          <Body x={658} y={1985} w={430} rx size={16} className="text-right text-ink-soft" data-rise><p>{c.note}</p></Body>
          <Framed x={754} y={1290} src="/img/loja-campanha.webp" alt={c.alt} speed={-0.06} />

          {/* the Orvalho kit: photo left, text right */}
          <Framed x={73} y={2240} src="/img/loja-kit.webp" alt={k.alt} speed={0.06} />
          <Label x={835} y={2290}>{k.label}</Label>
          <Title as="h3" x={835} y={2335} size={48} data-rise>{k.title}</Title>
          <Body x={835} y={2440} w={535} data-rise><p>{k.text}</p></Body>
          <A as="ul" x={835} y={2830} shift className="fs ls flex font-barlow font-semibold uppercase text-ink-soft" style={{ "--fs": 13, "--ls": 3, gap: "calc(28 * var(--u))" } as CSSProperties} data-rise>
            {k.meta.map((m) => <li key={m}>{m}</li>)}
          </A>
          <A x={835} y={2885} shift data-rise><Button href={ORVALHO_URL} w={400} inset={14}>{k.cta}</Button></A>
          <Body x={835} y={2970} w={430} size={16} className="text-ink-soft" data-rise><p>{k.note}</p></Body>

          {/* the retailers' disclaimer */}
          <Body x={715.5} y={3160} w={760} cx size={14} className="text-center text-ink-soft" data-rise><p>{t.disclaimer}</p></Body>

          <Rail top={1000} height={H - 1000} />   {/* starts below the hero (the white), as on Home */}
          <HomeScroll lift={false} />
        </Canvas>
        </div>

        {/* phone */}
        <Mobile>
          <MHero d={d} href={CAMPAIGN_URL} />
          <MSection className="m-stack">
            <MLabel className="text-center">{t.eyebrow}</MLabel>
            <MTitle size={44} anchor={ANCHORS[lang].loja}>{t.title}</MTitle>
          </MSection>
          {/* campanha: centred title block (Muko-Gawa / ── BLEEDING LIGHT ── / label in two lines), then photo,
              text, button — layout from Fellipe's mockup, 2026-10-19; font sizes unchanged */}
          <MSection className="m-stack">
            <div className="m-prod-head" data-rise>
              <h3 className="castle fs m-prod-title" style={{ "--fs": 32 } as CSSProperties}>{c.title.split(": ")[0]}</h3>
              <p className="m-prod-sub font-barlow font-semibold uppercase"><span className="m-rule m-rule-l" />{c.title.split(": ")[1]}<span className="m-rule m-rule-r" /></p>
              <p className="m-label m-label-stack text-center">{c.label.split(" // ").map((l) => <span key={l}>{l}</span>)}</p>
            </div>
            <MPhoto src="/img/loja-campanha.webp" alt={c.alt} speed={-0.05} imgStyle={{ objectPosition: "62% 50%" }} />
            <MBody>{c.text.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}</MBody>
            <div className="m-cta" data-rise><Button href={CAMPAIGN_URL} w={270} inset={13}>{c.cta}</Button></div>
            <MBody size={13} className="text-ink-soft"><p>{c.note}</p></MBody>
          </MSection>
          {/* kit: photo, title, label in two lines, text, the facts stacked, button */}
          <MSection className="m-stack">
            <MPhoto src="/img/loja-kit.webp" alt={k.alt} speed={0.05} />
            <MTitle as="h3" size={32} align="left" rules={false}>{k.title}</MTitle>
            <p className="m-label m-label-stack" data-rise>{k.label.split(" // ").map((l) => <span key={l}>{l}</span>)}</p>
            <MBody>{k.text.split(/(?<=estudo\.) /).map((p) => <p key={p.slice(0, 12)}>{p}</p>)}</MBody>
            <ul className="m-meta m-meta-stack font-barlow font-semibold uppercase" data-rise>{k.meta.map((m) => <li key={m}>{m}</li>)}</ul>
            <div className="m-cta" data-rise><Button href={ORVALHO_URL} w={300} inset={13}>{k.cta}</Button></div>
            <MBody size={13} className="text-ink-soft"><p>{k.note}</p></MBody>
          </MSection>
          <MSection>
            <span className="m-mini-rule" aria-hidden="true" />
            <MBody size={12} className="m-disclaimer"><p>{t.disclaimer}</p></MBody>
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

/** Languages without a store yet: "coming soon" and the launch e-mail list (same form as Home). */
const HS = 2700;
function Soon({ d, lang }: { d: Dict; lang: Lang }) {
  const t = d.loja;
  return (
    <Site menu="closed">
      <main>
        <div className="desk">
        <Canvas height={HS} figma="none">
          <Paper top={560} height={HS} />
          <Hero d={d} cta={d.hero.presale} href={page(lang).loja} calm />
          <Footer d={d} height={HS} clouds={{ y: 1700, h: HS - 1700 }} />

          <Label x={715.5} y={990} cx>{t.eyebrow}</Label>
          <Title x={715.5} y={1024} cx data-rise data-anchor={ANCHORS[lang].loja}>{t.soon.title}</Title>
          <RuleH src="rule-h-316-l.svg" x={130} y={1086} w={316.586} />
          <RuleH src="rule-h-316-r.svg" x={983} y={1086} w={316.586} flip />
          <Body x={715.5} y={1250} w={620} cx className="text-center" data-rise><p>{t.soon.text}</p></Body>
          <JoinForm x={715.5 - 224} y={1420} />

          <Rail top={1000} height={HS - 1000} />
          <HomeScroll lift={false} />
        </Canvas>
        </div>

        {/* phone */}
        <Mobile>
          <MHero d={d} href={page(lang).loja} />
          <MSection className="m-stack">
            <MLabel className="text-center">{t.eyebrow}</MLabel>
            <MTitle size={44} anchor={ANCHORS[lang].loja}>{t.soon.title}</MTitle>
            <MBody align="center"><p>{t.soon.text}</p></MBody>
            <MJoin />
          </MSection>
          <MFooter d={d} tall>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
            <img src="/img/angel.webp" alt={d.alt.angel} loading="lazy" className="m-angel" data-angel />
          </MFooter>
        </Mobile>
        <AngelLand />
        <MobileChrome />
      </main>
    </Site>
  );
}
