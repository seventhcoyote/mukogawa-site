"use client";

/* eslint-disable @next/next/no-img-element -- static SVG/WebP from Figma */
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import A from "./A";
import { useMenu } from "./Site";
import { pt } from "@/content/pt";
import { CAMPAIGN_URL, PAGE, ext } from "@/lib/links";

const ITEMS = [
  { href: "/", path: "/", label: pt.nav.home },
  { href: PAGE.campanha, path: "/campanha/", label: pt.nav.campanha },
  { href: PAGE.autores, path: "/autores/", label: pt.nav.autores },
  { href: PAGE.loja, path: "/loja/", label: pt.nav.loja },
];

/** Side menu (Figma Frame 1321317072, 185 wide) from the end of the hero to the foot of the page.
 *  Its contents stay pinned while the page scrolls. Closed: the 144px menu button (Figma 253:2548). */
export default function Rail({ top, height }: { top: number; height: number }) {
  const { open, setOpen } = useMenu();
  const path = usePathname();
  const u = (n: number) => `calc(${n} * var(--u))`;

  return (
    <A x={1463} y={top} w={185} h={height} className="z-10">
      <div className="rail-pin sticky top-0 h-screen">
        <nav aria-label="Principal" className="rail absolute inset-y-0 left-0 bg-rail text-white" data-open={open} style={{ width: u(185) }}>
          <button type="button" onClick={() => setOpen(false)} aria-label={pt.nav.close} className="rail-x absolute" style={{ left: u(78), top: u(82), width: u(28), height: u(28) }}>
            <img src="/svg/rail-close.svg" alt="" className="absolute" style={{ left: u(5), top: u(5), width: u(17.485), height: u(18.484) }} />
          </button>
          <Link href="/" aria-label="Muko-Gawa — Início" className="rail-logo absolute" style={{ left: u(22), top: u(175), width: u(140), height: u(56) }}>
            <img src="/img/rail-logo.webp" alt="" className="size-full object-cover" />
          </Link>
          <span className="rail-lang absolute flex items-center font-barlow font-semibold" title={pt.nav.language}
            style={{ left: u(68), top: u(262), gap: u(16), fontSize: u(12), letterSpacing: u(3.96), lineHeight: 1.5 }}>
            {pt.nav.current}<img src="/svg/rail-chevron.svg" alt="" style={{ width: u(12), height: u(4), transform: "rotate(180deg)" }} />
          </span>
          <ul className="absolute flex flex-col items-center" style={{ left: u(47), top: u(505), width: u(90), gap: u(48) }}>
            {ITEMS.map((it) => {
              const active = it.path === "/" ? path === "/" : path?.startsWith(it.path.replace(/\/$/, ""));
              return (
                <li key={it.href} className="relative">
                  <Link href={it.href} aria-current={active ? "page" : undefined}
                    className="rail-link block whitespace-nowrap font-barlow font-semibold uppercase"
                    style={{ fontSize: u(12), letterSpacing: u(3.96), lineHeight: 1.5 } as CSSProperties}>
                    {it.label}
                  </Link>
                  {active && <img src="/svg/rail-active.svg" alt="" className="absolute" style={{ left: `calc(50% + ${u(70)})`, top: "50%", width: u(36.6), height: u(9.6), transform: "translate(-50%, -50%) rotate(90deg)" }} />}
                </li>
              );
            })}
          </ul>
          <a href={CAMPAIGN_URL} {...ext(CAMPAIGN_URL)} className="rail-btn absolute" style={{ left: u(21), bottom: u(56), width: u(146), height: u(48) }}>
            <span className="rail-btn-body">{pt.hero.presale}</span>
          </a>
        </nav>
        {/* closed: just the three lines (no box), in the page's red */}
        <button type="button" onClick={() => setOpen(true)} aria-label={pt.nav.menu} aria-expanded={open} className="menu-btn absolute" data-open={open}
          style={{ left: u(110), top: u(70), width: u(56), height: u(44) }}>
          <span /><span /><span />
        </button>
      </div>
    </A>
  );
}
