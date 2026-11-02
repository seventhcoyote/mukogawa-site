import type { CSSProperties, ReactNode } from "react";

/** One page of the design: a 1648-wide canvas, `height` design pixels tall. */
export default function Canvas({ height, children, figma }: { height: number; children: ReactNode; figma: string }) {
  return <div className="canvas" style={{ "--h": height } as CSSProperties} data-figma={figma}>{children}</div>;
}
