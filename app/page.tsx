/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import Site from "@/components/Site";
import Canvas from "@/components/Canvas";
import A from "@/components/A";
import Img from "@/components/Img";
import Rotated from "@/components/Rotated";
import Paper from "@/components/Paper";
import Hero from "@/components/Hero";
import Rail from "@/components/Rail";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";
import Video from "@/components/Video";
import Drip from "@/components/Drip";
import HomeScroll from "@/components/HomeScroll";
import { RuleH, RuleV } from "@/components/Ornaments";
import { Body, Title } from "@/components/Type";
import { pt } from "@/content/pt";
import { PAGE } from "@/lib/links";
import { Mobile, MSection, MTitle, MBody, MFooter } from "@/components/m/Mobile";
import MHero from "@/components/m/MHero";
import MJoin from "@/components/m/MJoin";
import MVideo, { MPressStart, MVideoCard } from "@/components/m/MVideo";
import MobileChrome from "@/components/m/MobileChrome";
import AngelLand from "@/components/AngelLand";

/** Home — started from Figma 245:562 "home-menu_lateral"; from 2026-10-16 the layout below the
 *  video departs from Figma on purpose (centred campanha, band with its own CTA,
 *  join section sized as a closing screen). */
const H = 7500;   // 6340 + a closing stretch below "participe do lançamento" for the angel (2026-10-19)
/** The closing screen sits on the footer: everything is placed relative to the page foot. */
const J = 5460;

export default function Home() {
  return (
    <Site menu="closed">
      <main>
        <div className="desk">
        <Canvas height={H} figma="245:562">

          <Paper top={957} height={H} />
          {/* the video stage: pinned, playing muted behind the red paper */}
          <Video />

          <Hero cta={pt.hero.shop} tall intro />

          {/* the open manga — rises into place from below; drawn under the sinopse button */}
          <Rotated x={-132} y={2566} bw={1374.98} bh={1071.196} w={1263.089} h={907.537} transform="rotate(-7.83deg)" shift figma="245:715" speed={-0.14}>
            <Img src="/img/manga-open.webp" alt="Páginas abertas do mangá Bleeding Light" className="object-cover" />
          </Rotated>

          {/* tagline between dashed ornaments (moved up 70 so the sinopse fits one screen) */}
          <A as="p" x={719.5} y={1725} cx shift className="fs font-mincho font-semibold leading-[1.5] text-center text-blood" style={{ "--fs": 24 } as CSSProperties} figma="245:603" data-rise>
            {pt.tagline[0]}<br />{pt.tagline[1]}
          </A>
          <RuleH src="dash-56-l.svg" x={196} y={1757.37} w={56.137} t={6.629} />
          <RuleH src="dash-56-r.svg" x={1187} y={1757.37} w={56.137} t={6.629} flip />
          <RuleH src="dash-45-l.svg" x={214} y={1746} w={45.137} t={6.629} />
          <RuleH src="dash-45-r.svg" x={1180} y={1746} w={45.137} t={6.629} flip />
          <RuleH src="dash-45-l.svg" x={214} y={1768.37} w={45.137} t={6.629} />
          <RuleH src="dash-45-r.svg" x={1180} y={1768.37} w={45.137} t={6.629} flip />

          {/* sinopse (moved up 92) */}
          <Title x={279} y={1880} figma="245:710" data-rise>{pt.sinopse.title}</Title>
          {/* the rule under the title drips like blood */}
          <Drip x={525.17} y={1978} len={169} />
          <Body x={573} y={2024} w={670} figma="245:711" data-rise><p>{pt.sinopse.text}</p></Body>
          <A x={573} y={2360} shift className="z-[2]" data-rise><Button href={PAGE.campanha} w={365} inset={15.5}>{pt.sinopse.cta}</Button></A>

          {/* campanha — centred, on its own screen */}
          <Title x={731.5} y={3700} cx figma="245:717" data-rise>{pt.campanha.title}</Title>
          <RuleH src="rule-h-316-l.svg" x={168} y={3762} w={316.586} />
          <RuleH src="rule-h-316-r.svg" x={979} y={3762} w={316.586} flip />
          <Body x={351.5} y={3860} w={760} className="text-center" figma="245:718" data-rise><p>{pt.campanha.text}</p></Body>
          <A x={549} y={4120} shift data-rise><Button href={PAGE.autores} w={365} inset={16}>{pt.campanha.cta}</Button></A>

          {/* torn red band */}
          <A x={1} y={4520} h={379.978} bleed className="pointer-events-none" figma="245:722">
            <Img src="/img/band.webp" className="band-img object-fill" />
          </A>
          <A as="p" x={256} y={4655} w={955} shift className="castle fs ls text-center leading-[1.5] text-white" style={{ "--fs": 28, "--ls": 1.12 } as CSSProperties} figma="245:723" data-rise>
            {pt.campanha.band}
          </A>

          {/* join the launch — a closing screen on the footer */}
          <A x={681} y={J - 399} w={829} h={1001} shift className="pointer-events-none mix-blend-multiply opacity-15" figma="245:806" data-speed={-0.1}>
            <Img src="/img/join-sketch.webp" className="object-bottom" style={{ transform: "scaleX(-1)" }} />
          </A>
          <Title x={187} y={J} size={64} figma="245:802" data-rise>{pt.join.title}</Title>
          <Body x={187} y={J + 106} w={432} size={16} className="text-ink-soft" style={{ letterSpacing: "calc(0.48 * var(--u))" }} figma="245:787" data-rise><p>{pt.join.text}</p></Body>
          <A as="p" x={187} y={J + 233} shift className="fs ls whitespace-nowrap font-pier text-red-launch" style={{ "--fs": 16, "--ls": 11.04 } as CSSProperties} figma="245:803" data-rise>{pt.join.available}</A>
          <JoinForm x={820} y={J + 129} />

          <Footer height={H} clouds={{ y: H - 2204, h: 2070 }}>
            <A x={200} y={H - 2101} w={1131} h={1184} shift className="pointer-events-none" data-angel>
              <Img src="/img/angel.webp" alt="O anjo Thaevi com asas abertas e espada" className="object-fill" />
            </A>
          </Footer>
          <Rail top={1646} height={H - 1646} />
          <HomeScroll stageHeight={1646} />
        </Canvas>
        </div>

        {/* phone: the same story in one column; the video opens full screen */}
        <Mobile>
          <MHero intro><MPressStart /></MHero>
          <section className="m-video-sec"><MVideoCard /></section>
          <MSection>
            <p className="m-tagline font-mincho font-semibold" data-rise>{pt.tagline[0]} {pt.tagline[1]}</p>
          </MSection>
          <MSection className="m-stack">
            <MTitle size={44} align="left" drips={[0, 160]}>{pt.sinopse.title}</MTitle>
            <MBody><p>{pt.sinopse.text}</p></MBody>
            <div className="m-cta" data-rise><Button href={PAGE.campanha} w={290} inset={13}>{pt.sinopse.cta}</Button></div>
          </MSection>
          <div className="m-manga" data-speed={-0.08} aria-hidden="true"><img src="/img/manga-open.webp" alt="" loading="lazy" /></div>
          <MSection className="m-stack">
            <MTitle size={44} drips={[110, 170]}>{pt.campanha.title}</MTitle>
            <MBody align="center"><p>{pt.campanha.text}</p></MBody>
            <div className="m-cta m-cta-center" data-rise><Button href={PAGE.autores} w={290} inset={13}>{pt.campanha.cta}</Button></div>
          </MSection>
          <div className="m-band" data-rise>
            <img loading="lazy" src="/img/band.webp" alt="" />
            <p className="castle">{pt.campanha.band}</p>
          </div>
          <MSection className="m-stack m-join">
            <div className="m-join-sketch" data-speed={-0.08} aria-hidden="true"><img src="/img/join-sketch.webp" alt="" loading="lazy" /></div>
            <MTitle size={44} align="left" rules={false}>{pt.join.title}</MTitle>
            <MBody size={15} className="text-ink-soft"><p>{pt.join.text}</p></MBody>
            <p className="m-available font-pier" data-rise>{pt.join.available}</p>
            <MJoin />
          </MSection>
          <MFooter tall>
            <img src="/img/angel.webp" alt="O anjo Thaevi com asas abertas e espada" loading="lazy" className="m-angel" data-angel />
          </MFooter>
        </Mobile>
        <AngelLand />
        <MobileChrome />
        <MVideo />
      </main>
    </Site>
  );
}
