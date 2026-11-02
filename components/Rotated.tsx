import type { CSSProperties, ReactNode } from "react";
import A from "./A";

/** Figma's rotated/flipped layers: an outer box at the layer's bounding box (x, y, bw × bh) with the
 *  unrotated layer (w × h) centred inside and transformed. */
export default function Rotated({ x, y, bw, bh, w, h, transform, shift, className = "", style, children, figma, speed }: {
  x: number; y: number; bw: number; bh: number; w: number; h: number; transform: string;
  shift?: boolean; className?: string; style?: CSSProperties; children: ReactNode; figma?: string; speed?: number;
}) {
  return (
    <A x={x} y={y} w={bw} h={bh} shift={shift} figma={figma} data-speed={speed} className={`pointer-events-none ${className}`} style={style}>
      <div className="absolute left-1/2 top-1/2" style={{ width: `calc(${w} * var(--u))`, height: `calc(${h} * var(--u))`, transform: `translate(-50%, -50%) ${transform}` }}>
        {children}
      </div>
    </A>
  );
}
