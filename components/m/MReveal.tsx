"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Phone Home: what follows the red hero (the video card, or the battle drawing) is tucked under the
 *  hero's torn edge, so it comes up right under the paper as you scroll — no empty paper between them
 *  (2026-11-03; a pinned version left gaps). `zoom`: the drawing starts close up and zooms out as the
 *  hero scrolls away. */
export default function MReveal({ hero, children, zoom }: { hero: ReactNode; children: ReactNode; zoom?: boolean }) {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = box.current;
    if (!zoom || !el || !el.getClientRects().length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const set = () => {
      raf = 0;
      const top = el.querySelector<HTMLElement>(".m-reveal-top");
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / Math.max(1, top?.offsetHeight ?? innerHeight)));
      el.style.setProperty("--z", String(1 + (1 - p) * 0.9));   // 1.9× close up → 1× when the hero has gone
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(set); };
    set();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, [zoom]);
  return (
    <div ref={box} className="m-reveal" data-zoom={zoom ? "" : undefined}>
      <div className="m-reveal-top">{hero}</div>
      <div className="m-reveal-under">{children}</div>
    </div>
  );
}
