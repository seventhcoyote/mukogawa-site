"use client";

/* eslint-disable @next/next/no-img-element -- static export */
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang, useT } from "../Lang";
import { navItems, ctaHref } from "../Rail";
import { LANGS, LANG_NAMES, ext, home, inLang, rememberLang } from "@/lib/links";


/** Phone chrome, portalled to <body> (.site is a size container, which would trap `fixed`):
 *  - the hamburger: white over the red hero, red on the paper;
 *  - the menu: a torn sheet of the red paper that drops from the top, big Darkcastle links.
 *  (A floating Pré-venda button was tried and removed, 2026-10-16.) */
export default function MobileChrome() {
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const [open, setOpen] = useState(false);
  const [onRed, setOnRed] = useState(true);
  const t = useT(), lang = useLang();
  const path = usePathname() ?? `/${lang}/`;
  const ITEMS = navItems(t, lang), cta = ctaHref(t, lang);

  // what is under the button: white while over the red of the hero
  useEffect(() => {
    const red = document.querySelector(".mob .m-hero-red");
    if (!red) return;
    const top = new IntersectionObserver(([e]) => setOnRed(e.isIntersecting), { rootMargin: "0px 0px -94% 0px" });
    top.observe(red);   // reports its first state straight away
    return () => top.disconnect();
  }, [mounted]);

  // menu: lock the page, Esc closes, close on navigation
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.mmenu = open ? "open" : "closed";
    root.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => { removeEventListener("keydown", onKey); root.style.overflow = ""; };
  }, [open]);

  if (!mounted) return null;
  return createPortal(
    <div className="m-fixed">
      <button type="button" className="m-burger" data-red={onRed && !open} data-open={open} aria-label={open ? t.nav.close : t.nav.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>

      <div className="m-menu" data-open={open} inert={!open}>
        <div className="m-menu-dim" onClick={() => setOpen(false)} />
        <nav className="m-menu-sheet" aria-label={t.nav.main}>
          <img loading="lazy" src="/img/header.webp" alt="" className="m-menu-photo" />
          <img loading="lazy" src="/img/paper.webp" alt="" className="m-menu-grain" />
          <div className="m-menu-in">
            <Link href={home(lang)} className="m-menu-logo" aria-label={t.alt.homeLink}><img src="/img/rail-logo.webp" alt="" /></Link>
            <ul>
              {ITEMS.map((it, i) => {
                const active = it.path === `/${lang}/` ? path === it.path : path.startsWith(it.path);
                return (
                  <li key={it.href} style={{ "--i": i } as React.CSSProperties}>
                    <Link href={it.href} aria-current={active ? "page" : undefined} className="castle" onClick={() => setOpen(false)}>{it.label.toLowerCase()}</Link>
                  </li>
                );
              })}
            </ul>
            {/* language: all of them in a row, the current one marked */}
            <ul className="m-menu-lang font-barlow font-semibold" aria-label={t.nav.language}>
              {LANGS.map((l) => (
                <li key={l}><a href={inLang(path, l)} hrefLang={l} aria-current={l === lang ? "true" : undefined} onClick={() => rememberLang(l)}>{LANG_NAMES[l]}</a></li>
              ))}
            </ul>
            <a href={cta} {...ext(cta)} className="rail-btn m-menu-cta"><span className="rail-btn-body">{t.hero.presale}</span></a>
          </div>
        </nav>
      </div>

    </div>,
    document.body,
  );
}
