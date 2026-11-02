import type { CSSProperties, ReactNode } from "react";
import { ext } from "@/lib/links";

/** Red button (Figma Group 41/47/57): a body over two chamfered caps (Polygon 9/10, 59 × 39 turned
 *  into 39 × 59). Caps sit at the ends; the body is inset `inset` px. `light`: hero version (white
 *  border, white caps). Size in design pixels; parent positions it. */
export default function Button({ children, href, w, inset = 15, light, type, className = "", onClick }: {
  children: ReactNode; href?: string; w: number; inset?: number; light?: boolean; type?: "submit"; className?: string; onClick?: () => void;
}) {
  const style = { "--bw": w, "--bi": inset } as CSSProperties;
  const cls = `btn group ${light ? "btn-light" : ""} ${className}`;
  const inner = <span className="btn-body">{children}</span>;
  return href
    ? <a href={href} {...ext(href)} className={cls} style={style} onClick={onClick}>{inner}</a>
    : <button type={type ?? "button"} className={cls} style={style} onClick={onClick}>{inner}</button>;
}
