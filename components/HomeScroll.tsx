"use client";

import { useEffect } from "react";

/** Home scroll choreography (desktop, motion allowed). Renders nothing; drives the page.
 *  1. Lift: as you scroll through the video stage the red paper rises off the pinned video
 *     (Figma note 253:2563) and the video comes up to full brightness.
 *  2. Parallax: [data-speed] layers drift relative to the window centre (0 = Figma position).
 *  3. Rise: [data-rise] text fades up once as it arrives.
 *  4. Stops: one wheel notch / swipe / arrow / PageDown / Space glides to the next stop and holds.
 *  `stops`: design-pixel targets — `top` puts that y at the top of the window, `center` centres it,
 *  "pin" is the end of the video stage, "end" is the foot of the page. */
export type Stop = { top: number } | { center: number } | "pin" | "end";

export default function HomeScroll({ stops = [], stageHeight = 0, lift = true }: { stops?: Stop[]; stageHeight?: number; lift?: boolean }) {
  useEffect(() => {
    const root = document.documentElement;
    const desktop = window.matchMedia("(min-width: 1100px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canvas = document.querySelector<HTMLElement>(".canvas");
    const hero = document.querySelector<HTMLElement>(".hero");
    const paper = hero?.querySelector<HTMLElement>(".hero-paper");
    const content = hero?.querySelector<HTMLElement>(".hero-content");
    const stage = document.querySelector<HTMLElement>(".video-stage");
    if (!canvas) return;

    const u = () => canvas.offsetWidth / 1648;
    const pinEnd = () => Math.max(1, stageHeight * u() - innerHeight);

    // ── parallax bases (page-space centres measured with no offset applied) ──
    let layers: { el: HTMLElement; speed: number; base: number }[] = [];
    const measure = () => {
      layers = [...document.querySelectorAll<HTMLElement>("[data-speed]")].map((el) => {
        el.style.translate = "";
        const r = el.getBoundingClientRect();
        return { el, speed: parseFloat(el.dataset.speed || "0"), base: r.top + scrollY + r.height / 2 };
      });
    };

    const frame = () => {
      queued = false;
      const y = scrollY;
      const on = !reduce.matches;   // the lift runs at every width; stops are desktop-only

      // 1 · lift
      const p = on && lift ? Math.min(1, Math.max(0, y / pinEnd())) : 0;
      const e = p * p * (3 - 2 * p);
      // enough that the whole paper, torn edge and its fade (to design y 1000), is off-screen at the pin
      const extra = e * Math.max(180, (1010 + edge) * u() - pinEnd() + 40);
      if (hero) hero.dataset.lifted = p > 0 ? "true" : "false";
      if (paper) paper.style.transform = p > 0 ? `translate3d(0, ${(-extra).toFixed(1)}px, 0)` : "";
      if (content) {
        content.style.transform = p > 0 ? `translate3d(0, ${(-extra * 0.55).toFixed(1)}px, 0)` : "";
        content.style.opacity = p > 0 ? String(Math.max(0, 1 - e * 1.4)) : "";
      }
      stage?.style.setProperty("--lift", e.toFixed(3));

      // 2 · parallax
      const vc = y + innerHeight / 2;
      for (const l of layers) {
        if (!on) { l.el.style.translate = ""; continue; }
        const d = (vc - l.base) * l.speed;
        l.el.style.translate = `0 ${d.toFixed(1)}px`;
      }
    };
    let queued = false;
    const request = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };

    // 3 · rise
    const rise = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); rise.unobserve(en.target); }
    }), { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll("[data-rise]").forEach((el, i) => { (el as HTMLElement).style.setProperty("--rise-i", String(i % 4)); rise.observe(el); });
    if (reduce.matches) document.querySelectorAll("[data-rise]").forEach((el) => el.classList.add("is-in"));

    // 4 · stops
    const targets = () => {
      const k = u(), vh = innerHeight, max = root.scrollHeight - vh;
      return stops.map((s) => {
        const v = s === "pin" ? pinEnd() : s === "end" ? max : "top" in s ? s.top * k : s.center * k - vh / 2;
        return Math.round(Math.min(max, Math.max(0, v)));
      }).sort((a, b) => a - b);
    };
    let gliding = false, acc = 0, accTimer = 0, cooldown = 0;
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const glide = (to: number) => {
      const from = scrollY, dist = to - from;
      if (Math.abs(dist) < 2) return;
      gliding = true;
      const dur = Math.min(1400, 700 + Math.abs(dist) * 0.3), t0 = performance.now();
      root.style.scrollBehavior = "auto";
      const step = (now: number) => {
        const t = Math.min(1, (now - t0) / dur);
        scrollTo(0, from + dist * ease(t));
        frame();
        if (t < 1) requestAnimationFrame(step);
        else { gliding = false; cooldown = performance.now() + 380; root.style.scrollBehavior = ""; }
      };
      requestAnimationFrame(step);
    };
    const go = (dir: number) => {
      const list = targets(), y = scrollY;
      const next = dir > 0 ? list.find((s) => s > y + 4) : [...list].reverse().find((s) => s < y - 4);
      if (next !== undefined) glide(next);
    };
    const stepping = () => stops.length > 0 && desktop.matches && !reduce.matches;
    const onWheel = (ev: WheelEvent) => {
      if (!stepping() || ev.ctrlKey) return;
      ev.preventDefault();
      if (gliding || performance.now() < cooldown) return;
      acc += ev.deltaY;
      clearTimeout(accTimer);
      accTimer = window.setTimeout(() => (acc = 0), 180);
      if (Math.abs(acc) >= 30) { go(Math.sign(acc)); acc = 0; }
    };
    const onKey = (ev: KeyboardEvent) => {
      if (!stepping() || (ev.target as HTMLElement).closest("input, select, textarea, button, a, iframe")) return;
      const down = ["ArrowDown", "PageDown"].includes(ev.key) || (ev.key === " " && !ev.shiftKey);
      const up = ["ArrowUp", "PageUp"].includes(ev.key) || (ev.key === " " && ev.shiftKey);
      if (!down && !up) return;
      ev.preventDefault();
      if (!gliding) go(down ? 1 : -1);
    };
    let touchY: number | null = null;
    const onTouchStart = (ev: TouchEvent) => { if (stepping()) touchY = ev.touches[0].clientY; };
    const onTouchMove = (ev: TouchEvent) => { if (stepping() && touchY !== null) ev.preventDefault(); };
    const onTouchEnd = (ev: TouchEvent) => {
      if (!stepping() || touchY === null) return;
      const dy = touchY - ev.changedTouches[0].clientY; touchY = null;
      if (Math.abs(dy) > 40 && !gliding) go(Math.sign(dy));
    };

    // PRESS START: glide to the video (the end of the paper lift)
    const onStart = () => glide(Math.round(pinEnd()));
    addEventListener("mg:press-start", onStart);

    // The torn edge of the red paper sits just below the first screen (design y ~930 → push down so
    // its highest fibre (design y ~870) starts 60 design px under the window's bottom); it only shows once the paper lifts.
    let edge = 0;
    const placeEdge = () => {
      edge = Math.max(0, Math.round(innerHeight / u() - 870 + 60));
      hero?.style.setProperty("--edge", String(edge));
    };
    if (lift) placeEdge();

    const onResize = () => { if (lift) placeEdge(); measure(); request(); };
    measure();
    frame();
    addEventListener("scroll", request, { passive: true });
    addEventListener("resize", onResize);
    addEventListener("load", onResize);
    addEventListener("wheel", onWheel, { passive: false });
    addEventListener("keydown", onKey);
    addEventListener("touchstart", onTouchStart, { passive: true });
    addEventListener("touchmove", onTouchMove, { passive: false });
    addEventListener("touchend", onTouchEnd);
    return () => {
      rise.disconnect();
      removeEventListener("scroll", request);
      removeEventListener("resize", onResize);
      removeEventListener("load", onResize);
      removeEventListener("wheel", onWheel);
      removeEventListener("keydown", onKey);
      removeEventListener("touchstart", onTouchStart);
      removeEventListener("touchmove", onTouchMove);
      removeEventListener("touchend", onTouchEnd);
      removeEventListener("mg:press-start", onStart);
    };
  }, [stops, stageHeight, lift]);

  return null;
}
