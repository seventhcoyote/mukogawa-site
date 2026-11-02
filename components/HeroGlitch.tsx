"use client";

import { useEffect, useRef } from "react";

/** Home hero: every 7–16s (random) the red paper glitches like an old TV losing signal for a
 *  fraction of a second — static, scanlines, rolling band, horizontal jitter, a colour split.
 *  If the visitor has already interacted with the page (browsers block sound before that), a short,
 *  quiet burst of radio static plays with it, unless the video's sound is on.
 *  Only after the logo has arrived; never while the paper is lifted; off with reduced motion. */
export default function HeroGlitch() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const hero = el?.closest<HTMLElement>(".hero");
    const paper = hero?.querySelector<HTMLElement>(".hero-paper, .m-hero-paper");
    if (!el || !hero || !paper || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: AudioContext | null = null, interacted = false;
    const markInteracted = () => { interacted = true; };
    addEventListener("pointerdown", markInteracted, { once: true });
    addEventListener("keydown", markInteracted, { once: true });

    const crackle = (ms: number) => {
      if (!interacted || document.querySelector('.video-hit[aria-pressed="true"]')) return;
      try {
        ctx ??= new AudioContext();
        const n = Math.floor(ctx.sampleRate * ms / 1000), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (Math.random() < 0.08 ? 1 : 0.35);   // static with pops
        const src = ctx.createBufferSource(); src.buffer = buf;
        const band = ctx.createBiquadFilter(); band.type = "bandpass"; band.frequency.value = 1800; band.Q.value = 0.7;
        const gain = ctx.createGain(); const t = ctx.currentTime;
        gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(0.06, t + 0.02); gain.gain.exponentialRampToValueAtTime(0.001, t + ms / 1000);
        src.connect(band).connect(gain).connect(ctx.destination); src.start();
      } catch { /* no audio: fine */ }
    };

    let timer = 0, alive = true;
    const glitch = () => {
      if (!alive) return;
      const ready = el.getClientRects().length > 0 && hero.dataset.logo !== "wait" && hero.dataset.lifted !== "true" && !document.hidden;
      if (ready) {
        const ms = 280 + Math.random() * 420;
        el.dataset.on = "1";
        el.style.setProperty("--g-dur", `${ms}ms`);
        paper.animate([
          { translate: "0 0", filter: "none" },
          { translate: "-14px 0", filter: "contrast(1.4) saturate(1.5) hue-rotate(-8deg)", offset: 0.12 },
          { translate: "9px 2px", filter: "contrast(1.2) brightness(1.25)", offset: 0.28 },
          { translate: "-4px -1px", filter: "none", offset: 0.44 },
          { translate: "18px 0", filter: "contrast(1.5) saturate(0.6) brightness(0.85)", offset: 0.62 },
          { translate: "-6px 0", filter: "brightness(1.15)", offset: 0.8 },
          { translate: "0 0", filter: "none" },
        ], { duration: ms, easing: "steps(1, end)" });
        crackle(ms);
        window.setTimeout(() => delete el.dataset.on, ms);
      }
      timer = window.setTimeout(glitch, 7000 + Math.random() * 9000);
    };
    timer = window.setTimeout(glitch, 6000 + Math.random() * 4000);
    return () => { alive = false; clearTimeout(timer); removeEventListener("pointerdown", markInteracted); removeEventListener("keydown", markInteracted); ctx?.close(); };
  }, []);

  return (
    <div ref={ref} className="glitch pointer-events-none absolute" aria-hidden="true">
      <span className="glitch-static" />
      <span className="glitch-lines" />
      <span className="glitch-roll" />
    </div>
  );
}
