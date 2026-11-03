"use client";

/* eslint-disable @next/next/no-img-element -- static export */
import { useT } from "../Lang";

/** Phone, languages without a video (English, Japanese): the battle drawing on the paper (darken 80%)
 *  with the language's welcome title over it, in place of the video card. It waits under the hero and
 *  zooms out as the hero scrolls away (components/m/MReveal.tsx). */
export default function MArt() {
  const d = useT();
  return (
    <section className="m-art">
      <img src="/img/battle.webp" alt="" className="m-art-img" />
      <img src={d.welcome} alt={d.alt.welcome} className="m-art-title" data-lang={d.code} />
    </section>
  );
}
