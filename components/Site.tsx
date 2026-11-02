"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Menu = { open: boolean; setOpen: (v: boolean) => void };
const MenuContext = createContext<Menu>({ open: true, setOpen: () => {} });
export const useMenu = () => useContext(MenuContext);

/** Page wrapper: owns the side-menu state. `menu`: initial state (Home starts closed, 2026-10-16);
 *  closing it re-centres the page content on the full canvas (Figma 253:2481). */
export default function Site({ children, menu = "open" }: { children: ReactNode; menu?: "open" | "closed" }) {
  const [open, setOpen] = useState(menu === "open");
  // #hash → the visible [data-anchor] (desktop and phone layouts both carry one, so ids can't be used)
  useEffect(() => {
    const go = (e?: Event) => {
      // no #hash: a fresh visit to an inner page also opens on its section (not the hero), desktop and
      // phone alike (Fellipe, 2026-10-16) — unless the browser restored a scroll position (reload, back)
      const key = decodeURIComponent(location.hash.slice(1));
      if (!key && (e || scrollY > 10)) return;
      const sel = key ? `[data-anchor="${key}"]` : "[data-anchor]";
      const el = [...document.querySelectorAll<HTMLElement>(sel)].find((e) => e.getClientRects().length > 0);
      if (!el) return;
      const y = el.getBoundingClientRect().top + scrollY - innerHeight * 0.1;
      document.documentElement.style.scrollBehavior = "auto";
      scrollTo(0, Math.max(0, y));
      document.documentElement.style.scrollBehavior = "";
    };
    const t = setTimeout(() => go(), 60);   // after the router's own scroll
    addEventListener("hashchange", go);
    return () => { clearTimeout(t); removeEventListener("hashchange", go); };
  }, []);
  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <div className="site" data-menu={open ? "open" : "closed"}>{children}</div>
    </MenuContext.Provider>
  );
}
