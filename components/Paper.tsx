import type { CSSProperties } from "react";

/** The crumpled paper behind every page (Figma image 296/300/302…, 32%, LINEAR_BURN → multiply, the
 *  closest CSS blend). Figma stacks separate sheets; their ends differ in brightness, so stacked
 *  copies always showed a line where they met (2026-10-19). Instead: ONE background from `top` to the
 *  foot, tiled with paper-d.webp — the sheet turned to portrait whose last 700 px crossfade into its
 *  first, so the tile wraps onto itself with no line and no mirror pattern (a mirrored tile left a
 *  visible "inkblot" stripe). Tile width 1866 (the old sheets' width). */
// Inner pages start the paper over the red hero (design y 560): fade its top in over 240 design px,
// so it doesn't draw a hard darker line above BLEEDING LIGHT.
const FADE_MASK = "linear-gradient(transparent, #000 calc(240 * var(--u)))";
const FADE = { WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK, WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" };

export default function Paper({ top, height }: { top: number; height: number }) {
  return (
    <div aria-hidden="true" className="paper-bg pointer-events-none absolute left-0 w-full mix-blend-multiply"
      style={{ top: `calc(${top} * var(--u))`, height: `calc(${height - top} * var(--u))`, ...(top < 900 ? FADE : {}) } as CSSProperties} />
  );
}
