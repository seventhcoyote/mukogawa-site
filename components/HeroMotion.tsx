"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Hero motion (first version, for the design team to react to).
 *  - Intro (Home): a drop of blood falls onto the page and spreads, painting in the red paper and
 *    the image (Figma note on 253:2564); then the logo, tagline and button rise in.
 *  The scroll rise of the paper over the video lives in HomeScroll.
 *  Reduced motion: no intro. */
export default function HeroMotion({ intro, calm, children }: { intro?: boolean; calm?: boolean; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!intro || reduce) { el.dataset.state = "done"; return; }

    let seen = false;
    try { seen = sessionStorage.getItem("mg-drop") === "1"; sessionStorage.setItem("mg-drop", "1"); } catch {}
    el.dataset.state = seen ? "quick" : "drop";
    const t = setTimeout(() => (el.dataset.state = "done"), seen ? 900 : 2600);

    return () => clearTimeout(t);
  }, [intro]);

  return (
    <div ref={ref} className="hero absolute inset-x-0 top-0" data-state={intro ? "idle" : "done"} data-calm={calm || undefined} style={{ height: "calc(1000 * var(--u))" }}>
      {intro && (
        <svg className="hero-drop" viewBox="0 0 100 100" aria-hidden="true">
          <path className="drop-fall" d="M50 6 C50 6 44 16 44 20 a6 6 0 0 0 12 0 C56 16 50 6 50 6Z" />
        </svg>
      )}
      {children}
    </div>
  );
}
