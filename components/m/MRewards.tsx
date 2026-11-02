"use client";

/* eslint-disable @next/next/no-img-element -- static export */
import { useEffect, useRef, useState } from "react";
import REWARDS from "@/content/rewards.json";
import { useT } from "../Lang";

/** Phone recompensas: the 12 pieces of the rewards board (scripts/rewards.mjs, labels baked in) as a
 *  native swipe carousel (scroll-snap). The card in the centre comes forward; the others sit back,
 *  slightly turned, like loose prints on a table. A counter shows where you are. */
export default function MRewards({ label }: { label: string }) {
  const t = useT();
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const cards = [...el.querySelectorAll<HTMLElement>(".m-rw-card")];
    let raf = 0;
    const frame = () => {
      raf = 0;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0, bestD = Infinity;
      cards.forEach((c, i) => {
        const d = (c.offsetLeft + c.offsetWidth / 2 - mid) / c.offsetWidth;   // −1 … 0 … 1 card widths
        const k = Math.min(1, Math.abs(d));
        c.style.setProperty("--k", k.toFixed(3));
        c.style.setProperty("--d", Math.max(-1, Math.min(1, d)).toFixed(3));
        if (Math.abs(d) < bestD) { bestD = Math.abs(d); best = i; }
      });
      setAt(best);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame); };
    frame();
    el.addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { el.removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const go = (dir: number) => {
    const el = track.current, card = el?.querySelector<HTMLElement>(".m-rw-card");
    if (el && card) el.scrollBy({ left: dir * card.offsetWidth, behavior: "smooth" });
  };

  return (
    <div className="m-rw" data-rise>
      <div ref={track} className="m-rw-track" role="region" aria-roledescription="carrossel" aria-label={label} tabIndex={0}>
        {REWARDS.map((r, i) => (
          <figure key={r.name} className="m-rw-card" style={{ "--tilt": `${i % 2 ? 2.2 : -2.4}deg` } as React.CSSProperties}>
            <img src={r.src} alt={r.name} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
      <div className="m-rw-nav font-barlow font-semibold">
        <button type="button" onClick={() => go(-1)} aria-label={t.alt.prev} disabled={at === 0}>‹</button>
        <span aria-live="polite">{String(at + 1).padStart(2, "0")} / {REWARDS.length}</span>
        <button type="button" onClick={() => go(1)} aria-label={t.alt.next} disabled={at === REWARDS.length - 1}>›</button>
      </div>
    </div>
  );
}
