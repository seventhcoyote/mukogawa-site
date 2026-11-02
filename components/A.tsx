import type { CSSProperties, ElementType, ReactNode } from "react";

/** An element placed at its Figma geometry on the 1648-wide canvas (design pixels).
 *  `shift`: page content that re-centres when the side menu closes.
 *  `bleed`: spans the page content width (1463 open / 1648 closed) instead of `w`.
 *  `cx` / `rx`: x is the centre / right edge (Figma centre- and right-aligned text). */
type Props = {
  x?: number; y?: number; w?: number; h?: number;
  shift?: boolean; bleed?: boolean; cx?: boolean; rx?: boolean;
  as?: ElementType; className?: string; style?: CSSProperties; children?: ReactNode;
  figma?: string;
} & Record<string, unknown>;

export default function A({ x = 0, y = 0, w, h, shift, bleed, cx, rx, as: Tag = "div", className = "", style, children, figma, ...rest }: Props) {
  // Unset sizes are reset to `initial` (guaranteed-invalid), otherwise they'd inherit the canvas height.
  const vars = { "--x": x, "--y": y, "--w": w ?? "initial", "--h": h ?? "initial" } as CSSProperties;
  const cls = ["abs", shift && "shift", bleed && "bleed", cx && "cx", rx && "rx", className].filter(Boolean).join(" ");
  return <Tag className={cls} style={{ ...vars, ...style }} data-figma={figma} {...rest}>{children}</Tag>;
}
