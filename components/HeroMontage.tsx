"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import FRAMES from "@/content/montage.json";

/** Marvel-style comic montage printed into the red paper (Home only). Frames come from
 *  scripts/montage.mjs (Fellipe's pick, 2026-10-16: pool 01–14), shown at their own proportions —
 *  never stretched — at random places, kept off the centre so the logo area stays clear.
 *  1. Burst (~4.5s): frames arrive in pairs in different places — slow, then faster — and pile up,
 *     while the paper's red heats from pale to full.
 *  2. Explosion: flash, full red, 向こう側 / BLEEDING LIGHT / the button and the paper's own drawing
 *     (frame 01) arrive; the pile sinks into the paper underneath (data-logo).
 *  3. After: frames keep surfacing on the left half, faint, about three at a time, forever.
 *  Paused while the paper is lifted; reduced motion skips it all (the logo doesn't wait). */
/** `burst={false}` (Campanha): no burst and no waiting — the slow left-half frames only. */
export default function HeroMontage({ burst = true }: { burst?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = ref.current;
    const hero = box?.closest<HTMLElement>(".hero");
    // the hidden layout's copy (desktop on a phone, or the reverse) does nothing
    if (!box || !hero || !box.getClientRects().length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (burst) hero.dataset.logo = "wait";
    const imgs = [...box.querySelectorAll<HTMLImageElement>("img")];
    let alive = true;
    const timers: number[] = [];
    const later = (ms: number, fn: () => void) => timers.push(window.setTimeout(() => alive && fn(), ms));
    const shuffle = <T,>(a: T[]) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

    // Positions. Burst: a 3×3 grid over the whole paper. After the logo: the LEFT half only (the
    // right half already carries the background drawing) — 5 spots that keep clear of the logo.
    type Zone = [number, number];
    const GRID: Zone[] = [0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => [(c + 0.5) / 3, (r + 0.5) / 3] as Zone));
    const LEFT: Zone[] = [[0.13, 0.2], [0.13, 0.5], [0.13, 0.8], [0.33, 0.14], [0.33, 0.84]];
    const busy = new Map<HTMLImageElement, Zone>();
    // Frames that must stand on the bottom edge (full figures whose heads would be cut at the top).
    const BOTTOM = new Set(["/img/montage/13.webp"]);
    const place = (img: HTMLImageElement, scale: number, zones: Zone[]) => {
      const ar = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1.4;
      const W = box.clientWidth, H = box.clientHeight;
      const left = zones === LEFT;
      let w = W * (left ? 0.3 : 0.36) * scale, h = w / ar;
      if (h > H * 0.56 * scale) { h = H * 0.56 * scale; w = h * ar; }
      const bottom = BOTTOM.has(new URL(img.src).pathname);
      const used = new Set(busy.values());
      const pool = zones.filter((z) => (!bottom || z[1] > 0.7) && !used.has(z));
      const z = shuffle(pool)[0] ?? shuffle(zones.filter((q) => !bottom || q[1] > 0.7))[0] ?? zones[0];
      busy.set(img, z);
      const cx = z[0] * W + (Math.random() - 0.5) * W * (left ? 0.06 : 0.12);
      const cy = z[1] * H + (Math.random() - 0.5) * H * 0.12;
      // never above the top edge (heads stay in); bottom-anchored frames stand on the paper's foot
      let x = Math.min(W - w * 0.8, Math.max(-w * 0.2, cx - w / 2));
      if (left) x = Math.min(x, W * 0.5 - w);
      const y = bottom ? H - h : Math.min(H - h * 0.8, Math.max(0, cy - h / 2));
      Object.assign(img.style, { left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px` });
      return x + w / 2 < W / 2;
    };
    const ENTER = (left: boolean, kind: number): Keyframe[] => [
      [{ transform: `perspective(1400px) rotateY(${left ? -70 : 70}deg)` }, { transform: "perspective(1400px) rotateY(0)" }],
      [{ transform: `translateX(${left ? -12 : 12}%)`, filter: "blur(5px)" }, { transform: "translateX(0)", filter: "blur(0)" }],
      [{ transform: "scale(1.25) rotate(-1.5deg)" }, { transform: "scale(1) rotate(0)" }],
    ][kind % 3];
    const show = (img: HTMLImageElement, dur: number, hold: number, peak: number, kind: number, scale = 1, zones: Zone[] = GRID) => {
      const left = place(img, scale, zones);
      img.style.transformOrigin = left ? "left center" : "right center";
      img.animate(ENTER(left, kind), { duration: dur, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "forwards" });
      img.animate([{ opacity: 0 }, { opacity: peak, offset: Math.min(0.9, dur / (dur + hold)) }, { opacity: peak }], { duration: dur + hold, fill: "forwards" });
      img.animate([{ translate: "0 0" }, { translate: "-8px -6px" }], { duration: dur + hold, easing: "linear", fill: "forwards" });
    };
    const fade = (img: HTMLImageElement, dur: number) => (busy.delete(img), img.animate([{ opacity: getComputedStyle(img).opacity }, { opacity: 0 }], { duration: dur, fill: "forwards" }));

    let t = 0;
    if (burst) {
      // 1 · burst: pairs in different places, slow then faster (≈ 4.5s). Nothing leaves — the frames pile
      // up, more and more, while the paper's red heats from pale to full.
      box.dataset.phase = "burst";
      const paper = hero.querySelector<HTMLElement>(".hero-paper");
      const steps: number[] = [];
      for (let i = 0; i < 18; i++) steps.push(Math.round(55 + 550 * Math.pow(0.84, i)));
      const total = steps.reduce((a, b) => a + b, 0);
      const heat = paper?.animate(
        [{ filter: "saturate(0.35) brightness(1.4)" }, { filter: "saturate(0.6) brightness(1.22)", offset: 0.6 }, { filter: "saturate(1.15) brightness(0.96)" }],
        { duration: 300 + total, easing: "cubic-bezier(0.5, 0, 0.9, 0.6)", fill: "forwards" });
      const order: HTMLImageElement[] = [];
      while (order.length < steps.length * 2) order.push(...shuffle(imgs));
      let t = 300;
      steps.forEach((gap, i) => {
        later(t, () => {
          for (const [k, img] of [order[i * 2], order[i * 2 + 1]].entries()) {
            if (k === 1 && img === order[i * 2]) continue;
            later(k * Math.round(gap * 0.35), () => {
              img.getAnimations().forEach((a) => a.cancel());
              busy.delete(img);
              show(img, Math.min(400, Math.round(gap * 0.7)), 60_000, 0.32 + 0.3 * (i / steps.length), i + k, 0.8 + Math.random() * 0.35);
            });
          }
          if (i > 9 && i % 2 === 0) flash(box, 0.25);
        });
        t += gap;
      });
      // 2 · explosion: a red-white flash, the red at full, the logo and the paper's drawing arrive,
      //     and the pile of frames sinks into the paper underneath them
      later(t, () => {
        flash(box, 0.7, 380);
        heat?.cancel();
        paper?.animate([{ filter: "saturate(1.6) brightness(1.15)" }, { filter: "none" }], { duration: 900, easing: "ease-out" });
        box.dataset.phase = "after";
        hero.dataset.logo = "go";
        imgs.forEach((im) => fade(im, 2200));
        later(2300, () => { imgs.forEach((im) => im.getAnimations().forEach((a) => a.cancel())); busy.clear(); });
      });
    } else {
      box.dataset.phase = "after";
      t = -1000;
    }

    // 3 · after: forever, on the left half; a new frame every ~2.3s, each lives ~7s → about three overlap
    let queue: HTMLImageElement[] = [];
    const ambient = () => {
      if (hero.dataset.lifted === "true" || document.hidden) return later(2000, ambient);
      if (!queue.length) queue = shuffle(imgs.filter((im) => !busy.has(im) && !im.src.endsWith("/01.webp")));
      const img = queue.shift();
      if (img && !busy.has(img)) {
        img.getAnimations().forEach((a) => a.cancel());
        show(img, 1800, 3400, 0.26, 0, 0.85 + Math.random() * 0.2, LEFT);
        later(5200, () => fade(img, 1800));
      }
      later(2300, ambient);
    };
    later(t + 2500, ambient);

    return () => { alive = false; timers.forEach(clearTimeout); hero.dataset.logo = "go"; };
  }, [burst]);

  return (
    <div ref={ref} className="montage pointer-events-none absolute" aria-hidden="true">
      {FRAMES.map((f) => (
        <img key={f.src} src={f.src} alt="" loading="lazy" decoding="async" width={f.w} height={f.h} className="montage-frame" style={{ opacity: 0 }} />
      ))}
      <span className="montage-flash absolute inset-0" />
    </div>
  );
}

function flash(box: HTMLElement, peak = 0.35, dur = 140) {
  box.querySelector<HTMLElement>(".montage-flash")?.animate([{ opacity: peak }, { opacity: 0 }], { duration: dur, easing: "ease-out" });
}
