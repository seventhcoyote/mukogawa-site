import type { CSSProperties, ReactNode } from "react";
import A from "./A";

type Pos = { x: number; y: number; w?: number; cx?: boolean; rx?: boolean; figma?: string } & Record<`data-${string}`, string | boolean | undefined>;

/** Section title in Darkcastle (Figma: 96 / 64 / 48, #e7141a, multiply). */
export function Title({ children, size = 96, as = "h2", className = "", style, ...pos }: Pos & { children: ReactNode; size?: number; as?: "h1" | "h2" | "h3" | "p"; className?: string; style?: CSSProperties }) {
  return (
    <A {...pos} as={as} shift className={`castle fs whitespace-nowrap text-blood mix-blend-multiply ${className}`} style={{ "--fs": size, ...style } as CSSProperties}>
      {children}
    </A>
  );
}

/** Body copy: Shippori Mincho, 1.5 line height, paragraphs separated by one blank line. */
export function Body({ children, size = 24, className = "", style, ...pos }: Pos & { children: ReactNode; size?: number; className?: string; style?: CSSProperties }) {
  return (
    <A {...pos} shift className={`paras fs font-mincho leading-[1.5] ${className}`} style={{ "--fs": size, ...style } as CSSProperties}>
      {children}
    </A>
  );
}
