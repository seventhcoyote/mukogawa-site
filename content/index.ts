import { pt } from "./pt";
import { en } from "./en";
import type { Lang } from "@/lib/links";

/** The same shape as the Portuguese file, with any text in place of its exact words. */
type Loose<T> = T extends string ? string : T extends boolean ? boolean : T extends readonly (infer U)[] ? readonly Loose<U>[] : { readonly [K in keyof T]: Loose<T[K]> };
export type Dict = Loose<typeof pt>;

const DICTS: Record<Lang, Dict> = { pt, en };
/** The page language from its address (/pt/…, /en/…). */
export const asLang = (s: string): Lang => (s in DICTS ? (s as Lang) : "pt");
export const getDict = (lang: string): Dict => DICTS[asLang(lang)];
