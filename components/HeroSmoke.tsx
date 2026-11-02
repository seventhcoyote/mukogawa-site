/* eslint-disable @next/next/no-img-element */
import A from "./A";

/** Home hero: a few wisps of dark smoke drifting slowly around the logo. Pre-rendered once
 *  (public/svg/smoke.svg); the page only moves them. Very low opacity — atmosphere, not weather. */
const WISPS = [
  { x: 280, y: 140, w: 560, h: 380, cls: "smoke-a" },
  { x: 820, y: 170, w: 600, h: 400, cls: "smoke-b" },
  { x: 470, y: 330, w: 720, h: 420, cls: "smoke-c" },
  { x: 380, y: 60, w: 520, h: 340, cls: "smoke-d" },
];

export default function HeroSmoke() {
  return (
    <div className="smoke pointer-events-none" aria-hidden="true">
      {WISPS.map((s) => (
        <A key={s.cls} x={s.x} y={s.y} w={s.w} h={s.h} className={`smoke-wisp ${s.cls}`}>
          <img src="/svg/smoke.svg" alt="" className="size-full" />
        </A>
      ))}
    </div>
  );
}
