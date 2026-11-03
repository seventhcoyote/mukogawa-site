import { Fragment, type CSSProperties } from "react";
import AngelLand from "@/components/AngelLand";
import type { Metadata } from "next";
import Site from "@/components/Site";
import Canvas from "@/components/Canvas";
import A from "@/components/A";
import Img from "@/components/Img";
import Paper from "@/components/Paper";
import Drip from "@/components/Drip";
import HomeScroll from "@/components/HomeScroll";
import Hero from "@/components/Hero";
import Rail from "@/components/Rail";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { Brackets, RuleH, Svg } from "@/components/Ornaments";
import { Body, Title } from "@/components/Type";
import { asLang, getDict } from "@/content";
import { ANCHORS, CAMPAIGN_URL, page } from "@/lib/links";
import { Mobile, MSection, MTitle, MBody, MPhoto, MFooter } from "@/components/m/Mobile";
import MHero from "@/components/m/MHero";
import MRewards from "@/components/m/MRewards";
import MobileChrome from "@/components/m/MobileChrome";

/** Campanha — Figma 253:1272 "campanha-menu_lateral" (1648 × 10096). */
/** Without the rewards section (languages with other products), everything from "a jornada" down moves
 *  up by its height: from the rewards title (3964) to the jornada title (5311). */
const NO_REWARDS = 3964 - 5311 + 120;   // + room for the campaign button under the band (2026-11-03)
type Props = { params: Promise<{ lang: string }> };
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({ title: getDict((await params).lang).meta.campanha });


const arch = (bg: string, fit: "object-bottom" | "object-cover") => ({ bg, fit });

/** Blood running from the lower ends of the two top brackets of a frame (Brackets at x, y). */
function PhotoDrips({ x, y }: { x: number; y: number }) {
  return (
    <>
      <Drip x={x + 7.5} y={y + 141} len={90} end="drop" every={8} />
      <Drip x={x + 625.3} y={y + 141} len={140} end="drop" every={11} />
    </>
  );
}

export default async function Campanha({ params }: Props) {
  const lang = asLang((await params).lang);
  const d = getDict(lang), j = d.jornada;
  const m = j.more;
  const dy = d.has.rewards ? 0 : NO_REWARDS;
  const btnY = 7674 + dy + j.nasce.length * 72 + 44;   // "Conheça os autores", under "É assim que nasce"
  const end = m.text ? btnY + 330 + 450 : btnY + 60;   // where the page's content ends
  const H = end + 2278;   // then the foot: clouds with the descending angel, rocks, logo (as before 2026-11-03)
  const buy = d.has.store ? CAMPAIGN_URL : page(lang).loja;
  return (
    <Site menu="closed">
      <main>
        <div className="desk">
        <Canvas height={H} figma="253:1272">
          <Paper top={560} height={H} />
          <Hero d={d} cta={d.hero.presale} calm />

          {/* projeto */}
          <Title x={975} y={1024} rx figma="253:2074" data-rise data-anchor={ANCHORS[lang].campanha}>{d.projeto.title}</Title>
          <Drip x={943} y={1127} len={169} />
          <Body x={909} y={1187} w={766} rx className="text-right" figma="253:2075" data-rise>
            <p><strong className="font-bold text-blood-deep">{d.projeto.lead}</strong>{d.projeto.text}</p>
          </Body>
          <A x={988} y={1203} w={371} h={818} shift className="pointer-events-none overflow-hidden opacity-15" figma="253:2086" data-speed={-0.12}>
            <img loading="lazy" src="/img/sigil.webp" alt="" className="absolute max-w-none" style={{ left: "-38.42%", top: "-12.88%", width: "179.37%", height: "128.81%" }} />
          </A>
          {[
            { x: 149, y: 1983, w: 337, h: 600, src: "arch-1", speed: 0.05, ...arch("#807b7b", "object-bottom") },
            { x: 859, y: 2186, w: 337, h: 600, src: "arch-2", speed: -0.07, ...arch("#807b7b", "object-cover") },
            { x: 498, y: 1662, w: 349, h: 812, src: "arch-3", speed: 0.08, ...arch("#aba9a9", "object-bottom") },
          ].map((a) => (
            <A key={a.src} x={a.x} y={a.y} w={a.w} h={a.h} shift className="overflow-hidden rounded-t-full" style={{ background: a.bg }} data-speed={a.speed}>
              <Img src={`/img/${a.src}.webp`} className={a.fit} />
            </A>
          ))}
          <Svg src="star-100.svg" x={797} y={1897} w={100} h={100} />
          <Svg src="star-66.svg" x={453} y={2289} w={66} h={66} />
          <Svg src="star-40.svg" x={839} y={2697} w={40} h={40} />

          {/* campanha */}
          <Title x={209} y={2895} figma="253:1404" data-rise>{d.campanha.title}</Title>
          <Drip x={536} y={3018} len={170} />
          <Body x={562} y={3039} w={670} figma="253:1405" data-rise><p>{d.campanha.text}</p></Body>

          <A x={1} y={3405.88} h={380.238} bleed className="pointer-events-none" figma="253:1410">
            <Img src="/img/band.webp" className="band-img object-fill" />
          </A>
          <A as="p" x={256} y={3541.1} w={955.7} shift className="castle fs ls text-center leading-[1.5] text-white" style={{ "--fs": 28, "--ls": 1.12 } as CSSProperties} figma="253:1411" data-rise>
            {d.campanha.band}
          </A>
          {/* under the band: to the campaign (Catarse) or, where it doesn't sell, this language's store */}
          <A x={550.5} y={3836} shift data-rise><Button href={buy} w={330} inset={14}>{d.campanha.cta}</Button></A>

          {d.has.rewards && (<>
          {/* recompensas */}
          <Title x={196} y={3964} figma="253:1413" data-rise>{d.recompensas.title}</Title>
          {/* the Figma export of this rule was a grey placeholder; rebuilt red, with a gap after the title */}
          <RuleH src="rule-h-200.svg" x={763} y={4008} w={200} flip />
          <Body x={1243} y={4000} w={252} rx size={16} className="text-right text-[#d81318]" figma="253:1414" data-rise>
            <p>{d.recompensas.note[0]}</p><p>{d.recompensas.note[1]}</p>
          </Body>
          {/* the board as one image (split pieces kept in public/img/rewards/ via scripts/rewards.mjs, unused) */}
          <A x={57} y={4242} w={1326} h={746} shift className="mix-blend-multiply" figma="253:1424" data-rise>
            <Img src="/img/rewards.webp" alt={d.recompensas.alt} className="object-cover" />
          </A>
          <A x={556} y={5076} shift data-rise><Button href={CAMPAIGN_URL} w={330} inset={14}>{d.recompensas.cta}</Button></A>
          </>)}

          {/* a jornada */}
          <Title x={715.5} y={5311 + dy} cx figma="253:2127" data-rise>{j.title}</Title>
          <RuleH src="rule-h-316-l.svg" x={130} y={5373 + dy} w={316.586} />
          <RuleH src="rule-h-316-r.svg" x={983} y={5373 + dy} w={316.586} flip />
          <Body x={658} y={5550 + dy} w={535} rx className="text-right" figma="253:2128" data-rise>{j.p1.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}</Body>
          <Brackets x={754} y={5589 + dy} />
          <PhotoDrips x={754} y={5589 + dy} />
          <A x={805.88} y={5640.88 + dy} w={544.776} h={639.649} shift className="overflow-hidden" figma="253:2151">
            <img loading="lazy" src="/img/jornada.webp" alt={j.photo1} className="absolute max-w-none" style={{ left: "-29.93%", top: "-12.51%", width: "261.22%", height: "125.14%" }} />
          </A>
          <A as="p" x={383} y={6510 + dy} w={665} shift className="fs font-mincho font-bold leading-[1.5] text-center text-[#d31217]" style={{ "--fs": 24 } as CSSProperties} figma="253:2130" data-rise>{j.quote}</A>
          <RuleH src="rule-h-246-l.svg" x={73} y={6569 + dy} w={246.498} />
          <RuleH src="rule-h-246-r.svg" x={1151} y={6569 + dy} w={246.498} flip />
          <Brackets x={73} y={6777 + dy} />
          <PhotoDrips x={73} y={6777 + dy} />
          <A x={124.89} y={6828.88 + dy} w={544.776} h={639.649} shift className="overflow-hidden" figma="253:2157">
            <img loading="lazy" src="/img/jornada.webp" alt={j.photo2} className="absolute max-w-none" style={{ left: "-130.57%", top: "-12.51%", width: "260.87%", height: "125.14%" }} />
          </A>
          <Body x={835} y={6825 + dy} w={535} figma="253:2129" data-rise>{j.p2.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}</Body>

          {/* É assim que nasce */}
          <Title as="p" x={715.5} y={7674 + dy} cx size={48} className="text-center leading-[1.5] text-[#dc1319] mix-blend-normal ls" style={{ "--ls": 1.92 } as CSSProperties} figma="253:2143" data-rise>
            {j.nasce.map((l, i) => <Fragment key={l}>{i > 0 && <br />}{l}</Fragment>)}
          </Title>
          <Svg src="ornament-l.svg" x={155} y={7713 + dy} w={157} h={66} />
          <Svg src="ornament-r.svg" x={1119} y={7713 + dy} w={157} h={66} transform="rotate(180deg) scaleY(-1)" />
          {/* on to the authors, so the visit carries on (the flying cover was removed, 2026-11-03) */}
          <A x={533} y={btnY} shift className="z-[2]" data-rise><Button href={page(lang).autores} w={365} inset={15.5}>{d.campanha.authors}</Button></A>

          {/* Portuguese only: Isra's books (from 2027) and a taste of the narrative */}
          {m.text && (
            <>
              <Body x={715.5 - 380} y={btnY + 150} w={760} className="text-center" data-rise><p>{m.text}</p></Body>
              <A x={715.5 - 400} y={btnY + 330} w={800} h={450} shift className="overflow-hidden bg-black" data-rise>
                <iframe src={`https://www.youtube-nocookie.com/embed/${m.video}?rel=0`} title={m.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 size-full border-0" />
              </A>
            </>
          )}

          {/* the foot: the angel comes down through the clouds onto the rocks (back since 2026-11-03) */}
          <Footer d={d} height={H} clouds={{ y: end + 74, h: 2070 }}>
            <A x={200} y={end + 177} w={1131} h={1184} shift className="pointer-events-none" figma="253:1454" data-angel>
              <Img src="/img/angel.webp" alt={d.alt.angel} className="object-fill" />
            </A>
          </Footer>
          <Rail top={1000} height={H - 1000} />   {/* starts below the hero (the white), as on Home */}
          <HomeScroll lift={false} />
        </Canvas>
        </div>

        {/* phone */}
        <Mobile>
          <MHero d={d} />
          {/* projeto: text over the faint sigil, then the three arches */}
          <MSection className="m-stack">
            <MTitle size={44} align="right" drips={[150, 0]} anchor={ANCHORS[lang].campanha}>{d.projeto.title}</MTitle>
            {/* text and sigil side by side — the sigil never sits under the words (2026-10-19) */}
            <MBody>
              <div className="m-sigil" aria-hidden="true"><img loading="lazy" src="/img/sigil.webp" alt="" /></div>
              <p><strong className="font-bold text-blood-deep">{d.projeto.lead}</strong>{d.projeto.text}</p>
            </MBody>
            <div className="m-arches" aria-hidden="true">
              <div className="m-arch m-arch-1" style={{ background: "#807b7b" }} data-speed={0.05}><img loading="lazy" src="/img/arch-1.webp" alt="" className="object-bottom" /></div>
              <div className="m-arch m-arch-3" style={{ background: "#aba9a9" }} data-speed={0.09}><img loading="lazy" src="/img/arch-3.webp" alt="" className="object-bottom" /></div>
              <div className="m-arch m-arch-2" style={{ background: "#807b7b" }} data-speed={-0.06}><img loading="lazy" src="/img/arch-2.webp" alt="" className="object-cover" /></div>
              <img src="/svg/star-100.svg" alt="" className="m-star m-star-100" />
              <img src="/svg/star-66.svg" alt="" className="m-star m-star-66" />
              <img src="/svg/star-40.svg" alt="" className="m-star m-star-40" />
            </div>
          </MSection>
          {/* campanha + the red band */}
          <MSection className="m-stack">
            <MTitle size={44} align="left" drips={[0, 160]}>{d.campanha.title}</MTitle>
            <MBody><p>{d.campanha.text}</p></MBody>
          </MSection>
          <div className="m-band" data-rise>
            <img loading="lazy" src="/img/band.webp" alt="" />
            <p className="castle">{d.campanha.band}</p>
          </div>
          <div className="m-cta m-cta-center m-cta-after-band" data-rise><Button href={buy} w={290} inset={13}>{d.campanha.cta}</Button></div>
          {d.has.rewards && (<>
          {/* recompensas: the board's pieces in a swipe carousel */}
          <MSection className="m-stack">
            <MTitle size={44}>{d.recompensas.title}</MTitle>
            <MBody size={14} align="center" className="text-[#d81318]"><p>{d.recompensas.note[0]}</p></MBody>
            <MRewards label={d.recompensas.alt} />
            <MBody size={12} align="center" className="text-ink-soft"><p>{d.recompensas.note[1]}</p></MBody>
            <div className="m-cta m-cta-center" data-rise><Button href={CAMPAIGN_URL} w={260} inset={13}>{d.recompensas.cta}</Button></div>
          </MSection>
          </>)}
          {/* a jornada */}
          <MSection className="m-stack">
            <MTitle size={44}>{j.title}</MTitle>
            <MBody>{j.p1.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}</MBody>
            <MPhoto src="/img/jornada.webp" alt={j.photo1} speed={0} imgStyle={{ left: "-29.93%", top: "-12.51%", width: "261.22%", height: "125.14%", objectFit: "fill" }} />
          </MSection>
          <MSection className="m-stack">
            <div className="m-quote" data-rise>
              <p className="font-mincho font-bold">{j.quote}</p>
              <span className="m-rule m-rule-l" /><span className="m-rule m-rule-r" />
            </div>
            <MBody>{j.p2.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}</MBody>
            <MPhoto src="/img/jornada.webp" alt={j.photo2} speed={0} imgStyle={{ left: "-130.57%", top: "-12.51%", width: "260.87%", height: "125.14%", objectFit: "fill" }} />
          </MSection>
          {/* É assim que nasce, and on to the authors */}
          <MSection className="m-nasce">
            <p className="castle m-nasce-title" data-rise>{j.nasce.map((l, i) => <Fragment key={l}>{i > 0 && <br />}{l}</Fragment>)}</p>
            <div className="m-cta m-cta-center m-cta-after-band" data-rise><Button href={page(lang).autores} w={290} inset={13}>{d.campanha.authors}</Button></div>
          </MSection>
          {m.text && (
            <MSection className="m-stack">
              <MBody align="center"><p>{m.text}</p></MBody>
              <div className="m-yt" data-rise>
                <iframe src={`https://www.youtube-nocookie.com/embed/${m.video}?rel=0`} title={m.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            </MSection>
          )}
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
