"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import A from "./A";

/** A line that drips like blood: a bead swells, runs `len` design px down (hesitates, runs, slows),
 *  the tip settles (into a diamond, or stays a drop), then every `every` seconds a droplet gathers
 *  under it and falls. The drip is 10.657 wide (the Figma rule's diamond); its line is 1px, centred.
 *  `trigger`: "view" plays when scrolled into view, "now" plays after `delay` seconds.
 *  Reduced motion shows the finished line. */
export default function Drip({ x, y, len, end = "diamond", tone = "red", delay = 0, every = 6, trigger = "view", shift = true }: {
  x: number; y: number; len: number; end?: "diamond" | "drop"; tone?: "red" | "white";
  delay?: number; every?: number; trigger?: "view" | "now"; shift?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.dataset.drip = "done"; return; }
    if (trigger === "now") { el.dataset.drip = "run"; return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.dataset.drip = "run";
      io.disconnect();
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  const H = len + 16;
  const id = `drip-${tone}`;
  const c = (x: number) => 5.33 + x;    // x offset from the centre line
  const vars = { "--len": len, "--d": `${delay}s`, "--every": `${every}s` } as CSSProperties;
  return (
    <A x={x} y={y} w={10.657} h={H} shift={shift} className="pointer-events-none" aria-hidden="true">
      <svg ref={ref} className={`drip drip-${end}`} data-drip="idle" style={vars} viewBox={`0 0 10.657 ${H}`} preserveAspectRatio="none" overflow="visible" width="100%" height="100%">
        <defs>
          {tone === "red" ? (
            <radialGradient id={id} cx="38%" cy="32%" r="75%">
              <stop offset="0" stopColor="#f0232a" /><stop offset="0.55" stopColor="#d91318" /><stop offset="1" stopColor="#8e0a0e" />
            </radialGradient>
          ) : (
            <radialGradient id={id} cx="38%" cy="32%" r="75%">
              <stop offset="0" stopColor="#ffffff" /><stop offset="0.6" stopColor="#f3eeee" /><stop offset="1" stopColor="#c9bcbc" />
            </radialGradient>
          )}
        </defs>
        <path className="drip-trail" d={`M${c(-1.43)} 0 H${c(1.42)} L${c(0.33)} ${Math.min(30, len / 3)} L${c(0.31)} ${len + 2} H${c(-0.69)} L${c(-0.71)} ${Math.min(30, len / 3)} Z`} fill={`url(#${id})`} />
        <ellipse className="drip-bead" cx={c(-0.13)} cy="0.6" rx="2.1" ry="1.5" fill={`url(#${id})`} />
        <path className="drip-head" d={`M${c(-0.19)} -3.6 C${c(0.57)} -1.6 ${c(1.77)} -0.4 ${c(1.77)} 1.1 A1.96 1.96 0 0 1 ${c(-2.15)} 1.1 C${c(-2.15)} -0.4 ${c(-0.95)} -1.6 ${c(-0.19)} -3.6 Z`} fill={`url(#${id})`} />
        {end === "diamond" && <path className="drip-diamond" d={`M5.33 ${len} L10.66 ${len + 8.04} L5.33 ${len + 16.08} L0 ${len + 8.04} Z`} fill={`url(#${id})`} />}
        <path className="drip-drop" d={`M5.33 ${len + (end === "diamond" ? 12 : 0)} C6.3 ${len + (end === "diamond" ? 14.6 : 2.6)} 7.7 ${len + (end === "diamond" ? 16 : 4)} 7.7 ${len + (end === "diamond" ? 17.9 : 5.9)} A2.37 2.37 0 0 1 2.96 ${len + (end === "diamond" ? 17.9 : 5.9)} C2.96 ${len + (end === "diamond" ? 16 : 4)} 4.36 ${len + (end === "diamond" ? 14.6 : 2.6)} 5.33 ${len + (end === "diamond" ? 12 : 0)} Z`} fill={`url(#${id})`} />
      </svg>
    </A>
  );
}
