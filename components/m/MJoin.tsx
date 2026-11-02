"use client";

/* eslint-disable @next/next/no-img-element -- static export */
import { useState, type FormEvent } from "react";
import Button from "../Button";
import { pt } from "@/content/pt";
import { subscribe, TRAP } from "@/lib/newsletter";

/** Join the launch, phone version of JoinForm (same copy; signups go to the Google Form/Sheet,
 *  lib/newsletter.ts). Inputs at 16px so iOS doesn't zoom in on focus. */
export default function MJoin() {
  const t = pt.join;
  const [status, setStatus] = useState<"" | "invalid" | "done">("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = subscribe(e.currentTarget);
    setStatus(result);
    if (result === "done") e.currentTarget.reset();
  };
  return (
    <form className="m-join-form" onSubmit={submit} noValidate data-rise>
      <input type="text" name={TRAP} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
      <label className="sr-only" htmlFor="m-email">{t.emailLabel}</label>
      <input id="m-email" name="email" type="email" autoComplete="email" placeholder={t.email} aria-invalid={status === "invalid" || undefined}
        className="m-field font-mincho" onInput={() => status === "invalid" && setStatus("")} />
      <label className="sr-only" htmlFor="m-country">{t.country}</label>
      <span className="m-select">
        <select id="m-country" name="country" defaultValue="BR" className="m-field font-mincho">
          {t.countries.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        <img src="/svg/chevron-red.svg" alt="" />
      </span>
      <div className="m-cta m-cta-center m-btn-sm"><Button type="submit" w={320} inset={13}>{t.cta}</Button></div>
      <p role="status" aria-live="polite" className="m-join-status font-mincho">{status === "invalid" ? t.invalid : status === "done" ? t.done : ""}</p>
      {/* LGPD: what the email is for and how to leave (2026-10-20) */}
      <p className="m-join-privacy font-mincho">{t.privacy[0]}<a href={`mailto:${t.privacy[1]}`}>{t.privacy[1]}</a>{t.privacy[2]}</p>
    </form>
  );
}
