/* eslint-disable @next/next/no-img-element -- static export */
import type { CSSProperties, ReactNode } from "react";
import Drip from "../Drip";
import type { Dict } from "@/content";
import { SOCIAL, ext } from "@/lib/links";

/** Phone layout (< 1100px) building blocks. No Figma frames: our own design (ruled 2026-10-16).
 *  Everything flows in one column; sizes are in phone design px (--u ≈ 1px on a 390-wide phone,
 *  capped at 480 so tablets get a roomier column, not giant type). Desktop is untouched: pages render
 *  both layouts and CSS shows one (.desk / .mob). */

/** The phone page: paper background, one column. */
export function Mobile({ children }: { children: ReactNode }) {
  return <div className="mob">{children}</div>;
}

export function MSection({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return <section className={`m-sec ${className}`} style={style}><div className="m-col">{children}</div></section>;
}

/** A drip hanging from a point of its positioned parent (left/top in %, or `right`). */
export function MDrip({ left, right, top, len, end = "diamond", tone = "red", every = 9, delay = 0, trigger }: {
  left?: string; right?: string; top: string; len: number; end?: "diamond" | "drop"; tone?: "red" | "white"; every?: number; delay?: number; trigger?: "view" | "now";
}) {
  return (
    <span className="m-anchor" style={{ left, right, top }}>
      <Drip x={-5.33} y={0} len={len} end={end} tone={tone} every={every} delay={delay} trigger={trigger} shift={false} />
    </span>
  );
}

/** Section title in Darkcastle with ruled lines (diamond ends) — `center` has a rule each side. */
export function MTitle({ children, as: Tag = "h2", size = 60, align = "center", drips, rules = true, anchor, className = "" }: {
  children: ReactNode; as?: "h1" | "h2" | "h3" | "p"; size?: number; align?: "center" | "left" | "right"; drips?: [number, number]; rules?: boolean; anchor?: string; className?: string;
}) {
  return (
    <div className={`m-title m-title-${align} ${className}`} data-rise data-anchor={anchor}>
      {rules && align !== "left" && (
        <span className="m-rule m-rule-l">{drips && <MDrip left="0" top="50%" len={drips[0]} />}</span>
      )}
      <Tag className="castle fs" style={{ "--fs": size } as CSSProperties}>{children}</Tag>
      {rules && align !== "right" && (
        <span className="m-rule m-rule-r">{drips && <MDrip left="100%" top="50%" len={drips[1]} delay={0.5} every={12} />}</span>
      )}
    </div>
  );
}

export function MBody({ children, size = 17, className = "", align }: { children: ReactNode; size?: number; className?: string; align?: "center" | "right" }) {
  return <div className={`m-body paras font-mincho fs ${align ? `text-${align}` : ""} ${className}`} style={{ "--fs": size } as CSSProperties} data-rise>{children}</div>;
}

/** Small red uppercase label. */
export function MLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`m-label font-barlow font-semibold uppercase ${className}`} data-rise>{children}</p>;
}

/** A photo in the red bracket frame (the desktop Brackets, scaled), blood running from the two top
 *  brackets; the photo drifts inside its window. */
export function MPhoto({ src, alt, speed = 0.06, drips = true, imgStyle }: { src: string; alt: string; speed?: number; drips?: boolean; imgStyle?: CSSProperties }) {
  return (
    <div className="m-frame">
      <img src="/svg/bracket-c.svg" alt="" className="m-br m-br-tl" />
      <img src="/svg/bracket-a.svg" alt="" className="m-br m-br-tr" />
      <img src="/svg/bracket-d.svg" alt="" className="m-br m-br-bl" />
      <img src="/svg/bracket-b.svg" alt="" className="m-br m-br-br" />
      {drips && (
        <>
          <MDrip left="2.0%" top="18.97%" len={60} end="drop" every={8} />
          <MDrip left="97.3%" top="18.97%" len={95} end="drop" every={11} />
        </>
      )}
      <div className="m-frame-photo">
        <img src={src} alt={alt} loading="lazy" decoding="async" className="m-frame-img" style={imgStyle} data-speed={speed} />
      </div>
    </div>
  );
}

/** Page foot: clouds, rocks (`data-rocks`, for AngelLand), black fade, logo, socials, rights.
 *  `children` stand between the clouds and the rocks (Campanha's angel). */
export function MFooter({ d, children, tall }: { d: Dict; children?: ReactNode; tall?: boolean }) {
  return (
    <footer className={`m-foot ${tall ? "m-foot-tall" : ""}`}>
      <img src="/img/clouds.webp" alt="" loading="lazy" className="m-clouds" />
      {children}
      <img src="/img/rocks.webp" alt="" loading="lazy" className="m-rocks" data-rocks />
      <div className="m-foot-fade" />
      <div className="m-foot-info">
        {/* no logo here (2026-10-20): the angel lands where it sat */}
        <ul className="m-socials" aria-label={d.footer.social}>
          {(["instagram", "discord", "youtube"] as const).map((k) => (
            <li key={k}><a href={SOCIAL[k]} {...ext(SOCIAL[k])} aria-label={k[0].toUpperCase() + k.slice(1)} className="social block"><img src={`/svg/icon-${k}.svg`} alt="" className="size-full" /></a></li>
          ))}
        </ul>
        <p className="m-rights font-barlow font-semibold uppercase">{d.footer.rights}</p>
      </div>
    </footer>
  );
}
