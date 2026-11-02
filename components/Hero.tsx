import Link from "next/link";
import A from "./A";
import Img from "./Img";
import Rotated from "./Rotated";
import Button from "./Button";
import { Svg } from "./Ornaments";
import HeroMotion from "./HeroMotion";
import Drip from "./Drip";
import HeroMontage from "./HeroMontage";
import HeroGlitch from "./HeroGlitch";
import HeroSmoke from "./HeroSmoke";
import PressStart from "./PressStart";
import type { Dict } from "@/content";
import { home, page, type Lang } from "@/lib/links";

/** Hero elements are centred on the canvas (x 824). Figma had BLEEDING ✦ LIGHT 29px and the button
 *  12px right of centre; re-centred at Fellipe's request (2026-10-16).
 *  Torn red paper hero (Figma 245:572…245:628, shared by every page). Not shifted by the menu.
 *  `tall`: Home's taller texture crop (paper 1038 / burn 1168 instead of 998 / 1030).
 *  `intro`: Home only — blood-drop entrance and the paper rising off the video still.
 *  `calm`: a lighter, slower Home hero (Campanha): bigger logo, smoke, corner drips, a slow montage on
 *  the left half, and a gentle fade-in — with the regular button and the date. */
export default function Hero({ d, cta, href, tall, intro, calm }: { d: Dict; cta: string; href?: string; tall?: boolean; intro?: boolean; calm?: boolean }) {
  const t = d.hero, lang = d.code as Lang;
  href ??= page(lang).loja;
  return (
    <HeroMotion intro={intro} calm={calm}>
      {/* the red paper: everything that rises / is painted in by the drop */}
      <div className="hero-paper absolute inset-0">
        <Rotated x={-664} y={-447} bw={2656.42} bh={1622} w={2656.42} h={1622} transform="rotate(180deg)" figma="245:572">
          {/* Figma image filters highlights +1 / shadows +1, measured against Figma's own render */}
          <Img src="/img/header.webp" className="object-cover" style={{ filter: "contrast(0.958) brightness(1.164)" }} eager />
        </Rotated>
        {intro && (
          // Home: a second copy of the paper, shifted down by --edge (HomeScroll) and blended in below the
          // logo, so the torn edge waits just under the first screen — all red until the paper lifts.
          <div className="hero-sheet absolute inset-0" aria-hidden="true">
            <Rotated x={-664} y={-447} bw={2656.42} bh={1622} w={2656.42} h={1622} transform="rotate(180deg)">
              <Img src="/img/header.webp" className="object-cover" style={{ filter: "contrast(0.958) brightness(1.164)" }} eager />
            </Rotated>
          </div>
        )}
        {(intro || calm) && <HeroMontage burst={!!intro} />}
        {/* Figma blends the paper with LINEAR_BURN; multiply is the closest CSS blend */}
        <A x={-143} y={-41} w={1844} h={tall ? 1038 : 998} className="hero-tex tex-grain pointer-events-none overflow-hidden mix-blend-multiply" figma="245:573">
          <Img src="/img/paper.webp" className="object-cover opacity-32" eager />
        </A>
        {/* the comic drawing burned into the paper; on Home it plays in the montage first and settles
            in for good once the logo appears (hero-burn waits on data-logo) */}
        <A x={-342} y={-144} w={2185} h={tall ? 1168 : 1030} className={`hero-tex pointer-events-none mix-blend-color-burn opacity-76${intro ? " hero-burn" : ""}`} figma="245:574">
          <div className="absolute inset-0 overflow-hidden opacity-54">
            <img loading="lazy" src="/img/burn.webp" alt="" className="absolute max-w-none" style={tall
              ? { left: "-0.01%", top: "-4.06%", width: "102.76%", height: "108.13%" }
              : { left: "-0.01%", top: "-4.61%", width: "102.76%", height: "122.62%" }} />
          </div>
          <div className="absolute inset-0 mix-blend-plus-lighter" style={{ backgroundImage: "linear-gradient(219.16deg, rgba(0,0,0,0.19) 40.759%, rgba(255,255,255,0.19) 78.25%)" }} />
        </A>
        <Svg src="corner-l.svg" x={30} y={34} w={198.137} h={198.137} shift={false} transform="rotate(180deg)" />
        <Svg src="corner-r.svg" x={1409} y={34} w={198.137} h={198.137} shift={false} transform="scaleY(-1)" />
        {(intro || calm) && (
          <>
            {/* the long line of each corner ornament drips — left first, then right, longer */}
            <Drip x={42.49} y={231} len={150} end="drop" tone="white" trigger="now" delay={intro ? 2.4 : 1.6} every={intro ? 7 : 10} shift={false} />
            <Drip x={1583.98} y={231} len={230} end="drop" tone="white" trigger="now" delay={intro ? 3.6 : 3.2} every={intro ? 9 : 13} shift={false} />
          </>
        )}
        {intro && <HeroGlitch />}
      </div>

      {/* the content on the paper */}
      <div className="hero-content absolute inset-0">
        {(intro || calm) && <HeroSmoke />}
        {/* Home: the logo at 125% (800 × 317.5), centred, bottom kept clear of BLEEDING LIGHT */}
        <A as="h1" x={intro || calm ? 424 : 503} y={intro || calm ? 212 : 265} w={intro || calm ? 800 : 640} h={intro || calm ? 317.5 : 254} className="hero-in" figma="245:575">
          <span className="sr-only">{t.logoAlt} — Bleeding Light</span>
          {/* three stacked copies of the raw white logo (one image in Figma, hash 976c70), each darkened
              by Figma's image filters (all −1) → black, at 2% / 17% / 57%; the first two carry the emboss.
              (The MCP's per-layer exports have the fill opacity baked in, so they aren't used.) */}
          <Img src="/img/logo.webp" className="logo-layer logo-emboss object-cover opacity-2" eager />
          <Img src="/img/logo.webp" className="logo-layer logo-emboss object-cover opacity-17" eager />
          <Img src="/img/logo.webp" className="logo-layer object-cover opacity-57" eager />
          {/* inner pages: the big logo takes you home */}
          {!intro && <Link href={home(lang)} className="hero-home absolute inset-0" aria-label={d.alt.homeLink} />}
        </A>
        <div className="hero-in" aria-hidden="true">
          <Svg src="star-hero.svg" x={800} y={544} w={48} h={114} shift={false} />
          <A x={768} y={554} rx className="fs ls whitespace-nowrap font-pier text-right text-white" style={{ "--fs": 20, "--ls": 13.8 } as React.CSSProperties}>{t.bleeding}</A>
          <A x={880} y={554} className="fs ls whitespace-nowrap font-pier text-white" style={{ "--fs": 20, "--ls": 13.8 } as React.CSSProperties}>{t.light}</A>
        </div>
        {intro ? <PressStart label={d.alt.scroll} /> : (
          <A x={710.5} y={697} className="hero-in" figma="245:622">
            <Button href={href} w={227} inset={12.5} light>{cta}</Button>
          </A>
        )}
{!intro &&         <A as="p" x={824} y={780} cx className="hero-in fs ls whitespace-nowrap font-pier text-white" style={{ "--fs": 16, "--ls": 11.04, paddingLeft: "calc(11.04 * var(--u))" } as React.CSSProperties} figma="245:628">{t.available}</A>}
      </div>
    </HeroMotion>
  );
}
