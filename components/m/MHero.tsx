/* eslint-disable @next/next/no-img-element -- static export */
import Link from "next/link";
import Img from "../Img";
import Button from "../Button";
import HeroMontage from "../HeroMontage";
import HeroGlitch from "../HeroGlitch";
import { MDrip } from "./Mobile";
import { pt } from "@/content/pt";
import { STORE_URL } from "@/lib/links";

/** The calm hero, recomposed for a phone: one screen of torn red paper (the same photo, grain and
 *  burned drawing as desktop), the slow comic frames, smoke, the corner ornaments with their white
 *  drips, logo, BLEEDING ✦ LIGHT, the button and the date. `.hero` + data-calm reuse the desktop
 *  fade-in and HeroMontage. `intro` (Home): the comic burst before the logo, the TV glitch, and
 *  `children` in place of the button and date (PRESS START). */
export default function MHero({ cta = pt.hero.presale, href = STORE_URL, intro, children }: { cta?: string; href?: string; intro?: boolean; children?: React.ReactNode }) {
  const t = pt.hero;
  return (
    <header className="hero m-hero" data-calm={intro ? undefined : ""} data-state="done">
      <span className="m-hero-red" aria-hidden="true" />
      <div className="m-hero-paper">
        <img src="/img/header.webp" alt="" className="m-hero-photo" />
        <HeroMontage burst={!!intro} />
        <img src="/img/paper.webp" alt="" className="m-hero-grain" />
        <img loading="lazy" src="/img/burn-m.webp" alt="" className="m-hero-burn" />
        <img src="/svg/corner-l.svg" alt="" className="m-corner m-corner-l" />
        <img src="/svg/corner-r.svg" alt="" className="m-corner m-corner-r" />
        <MDrip left="calc(21.5 * var(--u))" top="calc(117 * var(--u))" len={90} end="drop" tone="white" trigger="now" delay={intro ? 2.4 : 1.6} every={10} />
        <MDrip right="calc(17 * var(--u))" top="calc(117 * var(--u))" len={140} end="drop" tone="white" trigger="now" delay={intro ? 3.6 : 3.2} every={13} />
        {intro && <HeroGlitch />}
      </div>
      <div className="m-hero-content">
        <div className="m-smoke" aria-hidden="true">
          <img src="/svg/smoke.svg" alt="" className="smoke-wisp smoke-a" />
          <img src="/svg/smoke.svg" alt="" className="smoke-wisp smoke-b" />
          <img src="/svg/smoke.svg" alt="" className="smoke-wisp smoke-c" />
        </div>
        <h1 className="hero-in m-logo">
          <span className="sr-only">{t.logoAlt} — Bleeding Light</span>
          <Img src="/img/logo.webp" className="logo-layer logo-emboss object-cover opacity-2" eager />
          <Img src="/img/logo.webp" className="logo-layer logo-emboss object-cover opacity-17" eager />
          <Img src="/img/logo.webp" className="logo-layer object-cover opacity-57" eager />
          {/* inner pages: the big logo takes you home */}
          {!intro && <Link href="/" className="hero-home absolute inset-0" aria-label="Muko-Gawa — Início" />}
        </h1>
        <p className="hero-in m-bl font-pier" aria-hidden="true">
          <span>{t.bleeding}</span><img src="/svg/star-hero.svg" alt="" /><span>{t.light}</span>
        </p>
        {children ?? (
          <>
            <div className="hero-in"><Button href={href} w={210} inset={11} light>{cta}</Button></div>
            <p className="hero-in m-date font-pier">{t.available}</p>
          </>
        )}
      </div>
    </header>
  );
}
