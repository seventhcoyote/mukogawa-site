import { pt } from "@/content/pt";

// Newsletter signups → Google Form "Muko-Gawa — newsletter" → its linked Google Sheet (2026-10-20).
// The site keeps its own form; this posts the two fields to the Form's formResponse endpoint.
// Google answers without CORS headers, so the response is opaque: we can't read success, only send.
const FORM = "https://docs.google.com/forms/d/e/1FAIpQLSfyRzYQ8bLdejsuUVd7ISorGdQXXdWU1dm-PGayW0bOnzrlqw/formResponse";
const FIELD = { email: "entry.1989706573", country: "entry.301962649" };

/** Spam trap: a field people never see; bots fill it. A filled trap is "accepted" and dropped. */
export const TRAP = "website";

export function subscribe(form: HTMLFormElement): "invalid" | "done" {
  const data = new FormData(form);
  const email = data.get("email")?.toString().trim() ?? "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "invalid";
  if (data.get(TRAP)) return "done";
  // the country's Portuguese name, whatever the page's language, so the Sheet keeps one spelling
  const code = data.get("country")?.toString() ?? "";
  const country = pt.join.countries.find(([v]) => v === code)?.[1] ?? code;
  const body = new URLSearchParams({ [FIELD.email]: email, [FIELD.country]: country });
  fetch(FORM, { method: "POST", mode: "no-cors", body }).catch(() => {});
  return "done";
}
