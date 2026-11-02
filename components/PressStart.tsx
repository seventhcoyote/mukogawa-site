"use client";

/* eslint-disable @next/next/no-img-element -- static export */

import { useEffect } from "react";
import A from "./A";

/** Home hero: a scroll hint (the client's mouse + chevrons image, 2026-10-19; it replaced "PRESS START",
 *  which they didn't like). It bobs up and down to say "scroll"; a click (or Enter on the hero) glides
 *  down to the video and plays it from the start with sound (event "mg:press-start", handled by
 *  HomeScroll and Video). */
export const pressStart = () => dispatchEvent(new Event("mg:press-start"));

export default function PressStart({ label }: { label: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || scrollY > innerHeight * 0.5 || (e.target as HTMLElement).closest("input, select, textarea, button, a")) return;
      e.preventDefault();
      pressStart();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <A x={824} y={760} cx className="hero-in">
      <a href="#video" className="scroll-hint" aria-label={label} onClick={(e) => { e.preventDefault(); pressStart(); }}>
        <img src="/img/scroll-hint.webp" alt="" style={{ width: "calc(32.2 * var(--u))", height: "calc(70 * var(--u))" }} />
      </a>
    </A>
  );
}
