"use client";

/* eslint-disable @next/next/no-img-element -- static export */
import { useEffect, useRef } from "react";
import { useT } from "../Lang";

/** Phone, languages without a video (English): the battle drawing on the paper (darken 80%) with
 *  "welcome to MUKŌ·GAWA" over it, in place of the video card. The title fades out as the drawing
 *  scrolls up out of the screen (same as the computer layout's still, components/Video.tsx). */
export default function MArt() {
  const d = useT();
  const box = useRef<HTMLElement>(null);
  const title = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = title.current, sec = box.current;
    if (!el || !sec || !sec.getClientRects().length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const set = () => {
      raf = 0;
      const r = sec.getBoundingClientRect();
      // fully visible while the drawing's top is on screen; gone once half of it has scrolled past the top
      el.style.opacity = String(1 - Math.min(1, Math.max(0, -r.top / (r.height * 0.5))));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(set); };
    set();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section ref={box} className="m-art">
      <img src="/img/battle.webp" alt="" loading="lazy" className="m-art-img" />
      <img ref={title} src={d.welcome} alt={d.alt.welcome} className="m-art-title" data-lang={d.code} />
    </section>
  );
}
