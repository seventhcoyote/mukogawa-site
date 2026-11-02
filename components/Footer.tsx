/* eslint-disable @next/next/no-img-element -- static assets */
import type { CSSProperties, ReactNode } from "react";
import A from "./A";
import Img from "./Img";
import { pt } from "@/content/pt";
import { SOCIAL, ext } from "@/lib/links";

/** Page foot (Figma Frame 1321317079): black gradient with logo, socials and copyright.
 *  `clouds`: the cloud bank (BG2_CLOUDS) at clouds.y; rocks (BG3_ROCKS) sit 134 above the end.
 *  `children` render between the clouds and the rocks (Campanha's angel stands in the clouds). */
export default function Footer({ height, clouds, children }: { height: number; clouds?: { y: number; h: number }; children?: ReactNode }) {
  const top = height - 725;
  return (
    <footer>
      {clouds && (
        <A x={0} y={clouds.y} h={clouds.h} bleed className="pointer-events-none" figma="253:1440">
          <Img src="/img/clouds.webp" className="object-cover" />
        </A>
      )}
      {children}
      {clouds && (
        <A x={0} y={height - 134 - 591} h={591} bleed className="pointer-events-none" figma="253:1456" data-rocks>
          <Img src="/img/rocks.webp" className="object-cover object-left" />
        </A>
      )}
      <A x={-24} y={top} h={725} className="pointer-events-none" style={{ width: "calc((var(--menu-cw) + 26) * var(--u))", backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 83.138%)" } as CSSProperties} figma="250:1222" />
      <A x={195} y={top + 430} w={198} h={78} shift>
        <Img src="/img/footer-logo.webp" alt="Muko-Gawa 向こう側" className="object-cover" />
      </A>
      <A as="ul" x={1078} y={top + 449} shift className="flex" style={{ gap: "calc(24 * var(--u))" }} aria-label={pt.footer.social}>
        {(["instagram", "discord", "youtube"] as const).map((k) => (
          <li key={k}>
            <a href={SOCIAL[k]} {...ext(SOCIAL[k])} aria-label={k[0].toUpperCase() + k.slice(1)} className="social block" style={{ width: "calc(40 * var(--u))", height: "calc(40 * var(--u))" }}>
              <img src={`/svg/icon-${k}.svg`} alt="" className="size-full" />
            </a>
          </li>
        ))}
      </A>
      <A as="p" x={720.5} y={top + 575} cx shift className="fs ls font-barlow font-semibold uppercase text-white opacity-70" style={{ "--fs": 12, "--ls": 3.96, lineHeight: 1.5 } as CSSProperties}>
        {pt.footer.rights}
      </A>
    </footer>
  );
}
