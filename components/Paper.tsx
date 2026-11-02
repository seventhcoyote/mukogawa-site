import type { CSSProperties } from "react";

/** The crumpled paper behind every page (Figma image 296/300/302…, 32%, LINEAR_BURN → multiply, the
 *  closest CSS blend). Figma stacks separate sheets; their ends differ in brightness, so stacked
 *  copies always showed a line where they met (2026-10-19). Instead: ONE background from `top` to the
 *  foot, tiled with paper-d.webp — the sheet turned to portrait whose last 700 px crossfade into its
 *  first, so the tile wraps onto itself with no line and no mirror pattern (a mirrored tile left a
 *  visible "inkblot" stripe). Tile width 1866 (the old sheets' width). */
export default function Paper({ top, height }: { top: number; height: number }) {
  return (
    <div aria-hidden="true" className="paper-bg pointer-events-none absolute left-0 w-full mix-blend-multiply"
      style={{ top: `calc(${top} * var(--u))`, height: `calc(${height - top} * var(--u))` } as CSSProperties} />
  );
}
