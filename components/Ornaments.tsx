/* eslint-disable @next/next/no-img-element -- static SVG ornaments from Figma */
import A from "./A";

/** Figma vector ornaments (red rules with diamonds, stars, corner brackets), placed as-is. */
export function Svg({ src, x, y, w, h, shift = true, transform, className = "" }: { src: string; x: number; y: number; w: number; h: number; shift?: boolean; transform?: string; className?: string }) {
  return (
    <A x={x} y={y} w={w} h={h} shift={shift} className={`pointer-events-none ${className}`} aria-hidden="true">
      <img src={`/svg/${src}`} alt="" className="size-full" style={transform ? { transform } : undefined} />
    </A>
  );
}

/** Vertical rule beside a section's text (Union, 10.657 × ~186). */
export function RuleV({ x, y, h = 186, src = "rule-v-186.svg" }: { x: number; y: number; h?: number; src?: string }) {
  return <Svg src={src} x={x} y={y} w={10.657} h={h} transform="scaleY(-1)" />;
}

/** Horizontal rule (Union turned 90°); `flip` mirrors it so the diamond end points the other way. */
export function RuleH({ x, y, w, src, flip, t = 10.657 }: { x: number; y: number; w: number; src: string; flip?: boolean; t?: number }) {
  return (
    <A x={x} y={y} w={w} h={t} shift className="pointer-events-none" aria-hidden="true">
      <img src={`/svg/${src}`} alt="" className="absolute left-1/2 top-1/2"
        style={{ width: `calc(${t} * var(--u))`, height: `calc(${w} * var(--u))`, transform: `translate(-50%, -50%) rotate(-90deg)${flip ? " scaleY(-1)" : ""}` }} />
    </A>
  );
}

/** Photo frame corners (Union 146.857², four placements around a 544.776 × 639.649 photo). */
export function Brackets({ x, y }: { x: number; y: number }) {
  const s = 146.858, dx = 496.6, dy = 598.13;
  return (
    <>
      <Svg src="bracket-c.svg" x={x} y={y} w={s} h={s} transform="rotate(180deg)" />
      <Svg src="bracket-a.svg" x={x + dx} y={y} w={s} h={s} transform="scaleY(-1)" />
      <Svg src="bracket-d.svg" x={x} y={y + dy} w={s} h={s} transform="rotate(180deg) scaleY(-1)" />
      <Svg src="bracket-b.svg" x={x + dx} y={y + dy} w={s} h={s} />
    </>
  );
}
