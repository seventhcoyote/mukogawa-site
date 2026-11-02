"use client";

import { useEffect } from "react";

/** The angel ([data-angel], Home and Campanha, desktop and phone) descends from heaven: over the last
 *  stretch of the page he comes down from above the top of the window (fading in) and, at the foot of
 *  the page, lands with his feet behind the rocks ([data-rocks], object-cover, object-left). The slow
 *  floating bob is CSS (transform, so it doesn't fight this translate).
 *  GROUND: the rocks' top edge (first opaque row / image height) at 49 even steps across rocks.webp.
 *  FOOT: the lowest opaque pixel of angel.webp (x, y as fractions of the image). */
const GROUND = [0.281, 0.289, 0.319, 0.369, 0.456, 0.525, 0.56, 0.476, 0.449, 0.419, 0.419, 0.44, 0.463, 0.484, 0.505, 0.532, 0.576, 0.615, 0.704, 0.71, 0.726, 0.758, 0.754, 0.722, 0.692, 0.666, 0.663, 0.637, 0.519, 0.43, 0.408, 0.39, 0.372, 0.343, 0.255, 0.224, 0.196, 0.168, 0.151, 0.142, 0.133, 0.125, 0.121, 0.127, 0.138, 0.151, 0.172, 0.269, 0.358];
const ROCKS = { w: 1900, h: 769 };
const FOOT = { x: 0.529, y: 0.959 };
const SINK = 0.1;   // how far below the rock edge the front sole ends, in angel heights
const SINK_PHONE = 0.2;

export default function AngelLand() {
  useEffect(() => {
    // desktop and phone layouts both carry an angel and rocks; use the pair that is on screen
    const visible = (sel: string) => [...document.querySelectorAll<HTMLElement>(sel)].find((e) => e.getClientRects().length > 0);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let angel: HTMLElement | undefined, rocks: HTMLElement | undefined;
    let start = 0, end = 1, top0 = 0, land = 0, h = 0;
    const measure = () => {
      if (angel) { angel.style.translate = ""; angel.style.opacity = ""; }
      angel = visible("[data-angel]"); rocks = visible("[data-rocks]");
      if (!angel || !rocks) return;
      const a = angel.getBoundingClientRect(), r = rocks.getBoundingClientRect();
      // the rocks image as drawn (cover, pinned left, centred vertically)
      const k = Math.max(r.width / ROCKS.w, r.height / ROCKS.h);
      const footX = a.left + a.width * FOOT.x - r.left;
      const t = Math.min(1, Math.max(0, footX / (ROCKS.w * k))) * (GROUND.length - 1);
      const i = Math.floor(t), g = GROUND[i] + (GROUND[Math.min(i + 1, GROUND.length - 1)] - GROUND[i]) * (t - i);
      const ground = r.top + scrollY + (r.height - ROCKS.h * k) / 2 + g * ROCKS.h * k;
      top0 = a.top + scrollY; h = a.height;
      // where he stands: the front sole a little below the rock edge (feet behind the rocks)
      // phone layout: the rocks are a shorter band, so he sinks deeper to have them cover his lower legs as
      // on desktop (2026-10-20)
      const sink = angel.closest(".mob") ? SINK_PHONE : SINK;
      const drop = ground + h * sink - (top0 + h * FOOT.y);
      end = document.documentElement.scrollHeight - innerHeight;
      land = top0 + drop - end;                          // his top on screen once landed (page at its foot)
      // the descent starts once his own slot (the clouds) is half up the window, so he comes down over the
      // sky and not over the text above it; at most the last 1.5 screens of scroll
      // …and not before the last text/form above his slot has left the top of the window (2026-10-19:
      // he must not come down over the sign-up form)
      const above = [...document.querySelectorAll<HTMLElement>("[data-rise], form")]
        .filter((e) => e.getClientRects().length && !e.closest("footer") && e.getBoundingClientRect().top + scrollY < top0 + h)
        .reduce((m, e) => Math.max(m, e.getBoundingClientRect().bottom + scrollY), 0);
      start = Math.min(end - innerHeight * 0.6, Math.max(0, end - innerHeight * 1.5, top0 - innerHeight * 0.5, above));
      frame();
    };
    const frame = () => {
      if (!angel) return;
      const p = Math.min(1, Math.max(0, (scrollY - start) / Math.max(1, end - start)));
      const e = 1 - Math.pow(1 - p, 3);                 // eases into the landing
      const screen = -h * 0.8 + (land + h * 0.8) * e;  // from above the window's top edge down to the rocks
      angel.style.translate = `0 ${(screen - (top0 - scrollY)).toFixed(1)}px`;
      angel.style.opacity = String(Math.min(1, p * 3.5));
    };
    // re-measure on resize, on crossing the phone/desktop line, and when the menu opens/closes
    const ro = new ResizeObserver(measure);
    document.querySelectorAll("[data-rocks]").forEach((e) => ro.observe(e));
    ro.observe(document.documentElement);
    addEventListener("scroll", frame, { passive: true });
    addEventListener("load", measure);
    return () => { ro.disconnect(); removeEventListener("scroll", frame); removeEventListener("load", measure); };
  }, []);
  return null;
}
