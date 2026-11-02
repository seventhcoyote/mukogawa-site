/* eslint-disable @next/next/no-img-element -- static export; images are pre-sized WebP (scripts/assets.mjs) */
import type { CSSProperties } from "react";

/** A decorative or content image filling its positioned parent. */
export default function Img({ src, alt = "", className = "", style, eager }: { src: string; alt?: string; className?: string; style?: CSSProperties; eager?: boolean }) {
  return <img src={src} alt={alt} className={`absolute inset-0 size-full ${className}`} style={style} loading={eager ? "eager" : "lazy"} decoding="async" draggable={false} />;
}
