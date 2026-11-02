"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, type CSSProperties, type FormEvent } from "react";
import A from "./A";
import Button from "./Button";
import { useT } from "./Lang";
import { subscribe, TRAP } from "@/lib/newsletter";

/** Join the launch form (Figma Group 60). Signups go to the Google Form/Sheet (lib/newsletter.ts, 2026-10-20). */
export default function JoinForm({ x, y }: { x: number; y: number }) {
  const t = useT().join;
  const [status, setStatus] = useState<"" | "invalid" | "done">("");
  const u = (n: number) => `calc(${n} * var(--u))`;
  const field: CSSProperties = { height: u(48), borderWidth: u(2), borderRadius: u(11), paddingInline: u(12), fontSize: u(16), letterSpacing: u(0.48), lineHeight: 1.5 };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = subscribe(e.currentTarget);
    setStatus(result);
    if (result === "done") e.currentTarget.reset();
  };

  return (
    <A as="form" x={x} y={y} w={448} h={140} shift onSubmit={submit} noValidate>
      <input type="text" name={TRAP} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
      <label className="sr-only" htmlFor="email">{t.emailLabel}</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder={t.email} aria-invalid={status === "invalid" || undefined}
        className="field absolute bg-white font-mincho text-ink-soft placeholder:text-ink-soft/50" style={{ ...field, left: 0, top: 0, width: u(276) }}
        onInput={() => status === "invalid" && setStatus("")} />
      <label className="sr-only" htmlFor="country">{t.country}</label>
      <span className="absolute" style={{ left: u(292), top: 0 }}>
        <select id="country" name="country" defaultValue={t.defaultCountry} className="field appearance-none bg-white font-mincho text-ink-soft" style={{ ...field, paddingRight: u(44), cursor: "pointer" }}>
          {t.countries.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        <img src="/svg/chevron-red.svg" alt="" className="pointer-events-none absolute" style={{ right: u(14), top: u(20), width: u(16), height: u(6), transform: "rotate(180deg)" }} />
      </span>
      <span className="absolute" style={{ left: 0, top: u(61) }}>
        <Button type="submit" w={448} inset={15}>{t.cta}</Button>
      </span>
      <p role="status" aria-live="polite" className="absolute font-mincho text-blood" style={{ left: 0, top: u(132), fontSize: u(15) }}>
        {status === "invalid" ? t.invalid : status === "done" ? t.done : ""}
      </p>
      {/* LGPD: what the email is for and how to leave (2026-10-20) */}
      <p className="absolute font-mincho text-ink-soft" style={{ left: 0, top: u(166), width: u(448), fontSize: u(12), lineHeight: 1.5 }}>
        {t.privacy[0]}<a href={`mailto:${t.privacy[1]}`} className="underline">{t.privacy[1]}</a>{t.privacy[2]}
      </p>
    </A>
  );
}
