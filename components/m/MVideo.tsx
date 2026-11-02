"use client";

/* eslint-disable @next/next/no-img-element -- static export */
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { pt } from "@/content/pt";

/** Phone video: the portrait Short "Anúncio Pré-Campanha" (Fellipe, 2026-10-16), full screen inside the
 *  page — no system fullscreen hand-off, so on an iPhone it stays seamless: a black sheet, the 9:16
 *  player filling the screen, playing inline, a close button. PRESS START and the card dispatch
 *  "mg:m-video". The player starts loading as soon as the page is idle, so the tap opens it instantly. */
export const openVideo = () => dispatchEvent(new Event("mg:m-video"));
const ID = pt.video.shortId;
const SRC = `https://www.youtube-nocookie.com/embed/${ID}?playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1&controls=1`;

export default function MVideo() {
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const box = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [open, setOpen] = useState(false);
  const [warm, setWarm] = useState(false);   // the player is mounted (hidden) ahead of the tap
  const cmd = (func: string, args: unknown[] = []) =>
    frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");

  useEffect(() => {
    // phones only: warm the player up once the page is idle
    if (!matchMedia("(max-width: 1099.98px)").matches) return;
    const idle = (window.requestIdleCallback ?? ((f: () => void) => setTimeout(f, 1500)))(() => setWarm(true));
    const on = () => {
      setWarm(true);
      setOpen(true);
      // inside the tap: start it with sound (if the player isn't ready yet, YouTube shows its play button)
      cmd("seekTo", [0, true]); cmd("unMute"); cmd("setVolume", [100]); cmd("playVideo");
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("mg:m-video", on);
    addEventListener("keydown", onKey);
    return () => { removeEventListener("mg:m-video", on); removeEventListener("keydown", onKey); if (typeof idle === "number") clearTimeout(idle); };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) cmd("pauseVideo");
  }, [open]);

  if (!mounted) return null;
  return createPortal(
    <div className="m-fixed">
      <div ref={box} className="m-video" data-open={open} role="dialog" aria-modal="true" aria-label={pt.video.shortTitle} inert={!open}>
        {warm && <iframe ref={frame} src={SRC} title={pt.video.shortTitle} allow="autoplay; encrypted-media; picture-in-picture" className="m-video-frame" />}
        <button type="button" className="m-video-x" onClick={() => setOpen(false)} aria-label={pt.video.close}>
          <img src="/svg/rail-close.svg" alt="" />
        </button>
      </div>
    </div>,
    document.body,
  );
}

/** The scroll hint on the phone hero (replaced PRESS START, 2026-10-19): bobs to say "scroll"; a tap
 *  glides down to the video card. */
export function MPressStart({ label = "Role para baixo" }: { label?: string }) {
  const go = () => document.querySelector(".mob .m-video-sec")?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <button type="button" className="hero-in scroll-hint m-press" onClick={go} aria-label={label}>
      <img src="/img/scroll-hint.webp" alt="" />
    </button>
  );
}

/** The video as a card in the page: the still, the play mark; a tap opens it full screen. */
export function MVideoCard() {
  return (
    <button type="button" className="m-video-card" onClick={openVideo} aria-label={pt.video.watch} data-rise>
      <img src="/img/hero-still.webp" alt="" loading="lazy" />
      <span className="m-video-shade" />
      <span className="m-video-cta">
        <img src="/svg/play.svg" alt="" />
        <span className="font-barlow font-semibold uppercase">{pt.video.watch}</span>
      </span>
    </button>
  );
}
