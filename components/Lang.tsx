"use client";

import { createContext, useContext, type ReactNode } from "react";
import { getDict, type Dict } from "@/content";
import type { Lang } from "@/lib/links";

/** The page's language, for the parts of the page that run in the browser (menus, forms, video).
 *  Set once per language in app/[lang]/layout.tsx. */
const LangContext = createContext<Lang>("pt");
export const LangProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
export const useLang = () => useContext(LangContext);
export const useT = (): Dict => getDict(useContext(LangContext));
