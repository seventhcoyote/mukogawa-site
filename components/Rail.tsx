"use client";

/* eslint-disable @next/next/no-img-element -- static SVG/WebP from Figma */
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import A from "./A";
import { useState } from "react";
import { useMenu } from "./Site";
import { useLang, useT } from "./Lang";
import type { Dict } from "@/content";
import { CAMPAIGN_URL, LANGS, LANG_NAMES, ext, home, inLang, page, pathOf, rememberLang, type Lang } from "@/lib/links";

/** Menu entries in the page's language; `path` marks the current page. */
export const navItems = (t: Dict, lang: Lang) => [
  { href: home(lang), path: `/${lang}/`, label: t.nav.home },
  { href: page(lang).campanha, path: pathOf(lang, "campanha"), label: t.nav.campanha },
  { href: page(lang).autores, path: pathOf(lang, "autores"), label: t.nav.autores },
  { href: page(lang).loja, path: pathOf(lang, "loja"), label: t.nav.loja },
];
/** Where the menu's red button goes: the campaign, or this language's store page. */
export const ctaHref = (t: Dict, lang: Lang) => (t.has.store ? CAMPAIGN_URL : page(lang).loja);

/** Side menu (Figma Frame 1321317072, 185 wide) from the end of the hero to the foot of the page.
 *  Its contents stay pinned while the page scrolls. Closed: the 144px menu button (Figma 253:2548). */
export default function Rail({ top, height }: { top: number; height: number }) {
  const { open, setOpen } = useMenu();
  const t = useT(), lang = useLang();
  const [langOpen, setLangOpen] = useState(false);
  const path = usePathname() ?? `/${lang}/`;
  const ITEMS = navItems(t, lang), cta = ctaHref(t, lang);
  const u = (n: number) => `calc(${n} * var(--u))`;

  return (
    <A x={1463} y={top} w={185} h={height} className="z-10">
      <div className="rail-pin sticky top-0 h-screen">
        <nav aria-label={t.nav.main} className="rail absolute inset-y-0 left-0 bg-rail text-white" data-open={open} style={{ width: u(185) }}>
          <button type="button" onClick={() => setOpen(false)} aria-label={t.nav.close} className="rail-x absolute" style={{ left: u(78), top: u(82), width: u(28), height: u(28) }}>
            <img src="/svg/rail-close.svg" alt="" className="absolute" style={{ left: u(5), top: u(5), width: u(17.485), height: u(18.484) }} />
          </button>
          <Link href={home(lang)} aria-label={t.alt.homeLink} className="rail-logo absolute" style={{ left: u(22), top: u(175), width: u(140), height: u(56) }}>
            <img src="/img/rail-logo.webp" alt="" className="size-full object-cover" />
          </Link>
          {/* language: the current one; a click shows the others just below */}
          <div className="rail-lang absolute font-barlow font-semibold" style={{ left: u(68), top: u(262), fontSize: u(12), letterSpacing: u(3.96), lineHeight: 1.5 }}>
            <button type="button" className="flex items-center" style={{ gap: u(16) }} onClick={() => setLangOpen(!langOpen)} aria-expanded={langOpen} aria-label={`${t.nav.language}: ${t.nav.current}`}>
              {t.nav.current}<img src="/svg/rail-chevron.svg" alt="" style={{ width: u(12), height: u(4), transform: langOpen ? "none" : "rotate(180deg)" }} />
            </button>
            {langOpen && (
              <ul className="rail-lang-list absolute" style={{ left: 0, top: "100%", paddingTop: u(8) }}>
                {LANGS.filter((l) => l !== lang).map((l) => (
                  <li key={l}><a href={inLang(path, l)} hrefLang={l} onClick={() => rememberLang(l)} className="rail-link block">{LANG_NAMES[l]}</a></li>
                ))}
              </ul>
            )}
          </div>
          <ul className="absolute flex flex-col items-center" style={{ left: u(47), top: u(505), width: u(90), gap: u(48) }}>
            {ITEMS.map((it) => {
              const active = it.path === `/${lang}/` ? path === it.path : path.startsWith(it.path);
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
          <a href={cta} {...ext(cta)} className="rail-btn absolute" style={{ left: u(21), bottom: u(56), width: u(146), height: u(48) }}>
            <span className="rail-btn-body">{t.hero.presale}</span>
          </a>
        </nav>
        {/* closed: just the three lines (no box), in the page's red */}
        <button type="button" onClick={() => setOpen(true)} aria-label={t.nav.menu} aria-expanded={open} className="menu-btn absolute" data-open={open}
          style={{ left: u(110), top: u(70), width: u(56), height: u(44) }}>
          <span /><span /><span />
        </button>
      </div>
    </A>
  );
}
