"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import A from "./A";
import { pt } from "@/content/pt";
import { useT } from "./Lang";

/** The video under the red paper (Figma image 305 + 49% black + play mark 245:703).
 *  A stage from the top of the page to the end of the video block (y 0 → 1646). Inside it the video
 *  is pinned to the window and plays muted on a loop behind the paper; as the paper lifts, the video
 *  is uncovered. Clicking plays it with sound from the start and the red button goes away (ruled
 *  2026-10-16: then it's just the video); clicking the video again pauses it and the button comes back;
 *  the next click carries on from there. Leaving the section goes back to the silent loop. */
const ID = pt.video.id;
const SRC = `https://www.youtube-nocookie.com/embed/${ID}?autoplay=1&mute=1&loop=1&playlist=${ID}&controls=0&playsinline=1&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3&enablejsapi=1`;

const DESK = "(min-width: 1100px)";
const onDeskChange = (cb: () => void) => { const m = matchMedia(DESK); m.addEventListener("change", cb); return () => m.removeEventListener("change", cb); };

/** `still`: no video (languages without one yet): the battle drawing on the paper instead, with
 *  "welcome to MUKŌ·GAWA" over it, fading out as the page scrolls on past it. */
export default function Video({ still }: { still?: boolean }) {
  // phones get their own full-screen player (components/m/MVideo); don't load this one there
  const desk = useSyncExternalStore(onDeskChange, () => matchMedia(DESK).matches, () => false);
  const t = pt.video, d = useT();
  const frame = useRef<HTMLIFrameElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [sound, setSound] = useState(false);
  const [paused, setPaused] = useState(false);   // paused by the viewer after playing with sound

  const cmd = (func: string, args: unknown[] = []) =>
    frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");

  const soundOn = () => { cmd("seekTo", [0, true]); cmd("unMute"); cmd("setVolume", [100]); cmd("playVideo"); setSound(true); setPaused(false); };
  const toggle = () => {
    if (sound) { cmd("pauseVideo"); setSound(false); setPaused(true); return; }
    if (paused) { cmd("unMute"); cmd("playVideo"); setSound(true); setPaused(false); return; }
    soundOn();
  };

  // PRESS START on the hero: play from the start with sound (the click is the user gesture).
  useEffect(() => {
    const on = () => soundOn();
    addEventListener("mg:press-start", on);
    return () => removeEventListener("mg:press-start", on);
  });

  // still: the title fades out over the first 35% of a screen after the paper has fully lifted
  const title = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = title.current, box = stage.current?.parentElement;
    if (!still || !el || !box || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const set = () => {
      raf = 0;
      const pinEnd = box.offsetHeight - innerHeight, past = -box.getBoundingClientRect().top - pinEnd;
      el.style.opacity = String(1 - Math.min(1, Math.max(0, past / (innerHeight * 0.35))));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(set); };
    set();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, [still]);

  // Out of view → back to silent.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting && (sound || paused)) { cmd("mute"); cmd("playVideo"); setSound(false); setPaused(false); }
    }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, [sound, paused]);

  return (
    <A x={0} y={0} w={1648} h={1646} figma="245:701">
      <div ref={stage} id="video" className={`video-stage sticky top-0 h-screen w-full overflow-hidden ${still ? "video-art" : "bg-black"}`}>
        {!still && <iframe ref={frame} src={desk ? SRC : undefined} title={t.title} allow="autoplay; encrypted-media; picture-in-picture" tabIndex={-1}
          className="video-frame pointer-events-none absolute border-0" onLoad={() => setTimeout(() => setReady(true), 900)} />}
        {still ? (
          <>
            {/* the battle drawing printed on the paper: darken at 80% over the page's paper texture */}
            <img loading="lazy" src="/img/battle.webp" alt="" className="video-art-img absolute inset-0 size-full object-cover" />
            <img ref={title} src={d.welcome} alt={d.alt.welcome} className="video-title absolute left-1/2 top-1/2" data-lang={d.code} />
          </>
        ) : (
          <>
            <img loading="lazy" src="/img/hero-still.webp" alt="" className="video-poster absolute inset-0 size-full object-cover" data-hidden={ready} />
            <span className="video-shade absolute inset-0 bg-black" />
          </>
        )}
        {!still && <button type="button" onClick={toggle} aria-pressed={sound} aria-label={sound ? t.pause : t.unmute}
          className="video-hit absolute inset-0 size-full cursor-pointer border-0 bg-transparent p-0">
          <span className="video-cta absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" data-sound={sound}>
            <img src="/svg/play.svg" alt="" className="video-play" style={{ width: "calc(138 * var(--u))", height: "calc(138 * var(--u))" }} />
            <span className="video-label font-barlow font-semibold uppercase text-white">{t.unmute}</span>
          </span>
        </button>}
      </div>
    </A>
  );
}
