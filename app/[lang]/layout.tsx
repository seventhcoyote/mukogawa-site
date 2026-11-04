import type { Metadata } from "next";
import localFont from "next/font/local";
import { IM_Fell_Double_Pica_SC, Barlow } from "next/font/google";
import "../globals.css";
import { asLang, getDict } from "@/content";
import { LangProvider } from "@/components/Lang";
import { LANGS } from "@/lib/links";

// Darkcastle: personal-use file for the review build (client buying the commercial licence).
// Subset to Latin from design/fonts/darkcastle.otf with pyftsubset, all layout features kept (ss05).
const darkcastle = localFont({ src: "../fonts/darkcastle.woff2", variable: "--font-darkcastle", display: "block" });
const pier = localFont({ src: "../fonts/pier-sans-bold.woff2", weight: "700", variable: "--font-pier-sans", display: "block" });
// Shippori Mincho (OFL), self-hosted and subset to Latin + Latin-1/Ext-A + 向こう側 via Google Fonts' text= API
// (2026-10-19): next/font/google preloaded ~248 CJK slices (7.8 MB) on every page.
const shippori = localFont({
  src: [
    { path: "../fonts/shippori-400.woff2", weight: "400" },
    { path: "../fonts/shippori-600.woff2", weight: "600" },
    { path: "../fonts/shippori-700.woff2", weight: "700" },
  ],
  variable: "--font-shippori", display: "swap",
});
// Japanese pages (/ja/): Shippori Mincho for text and Yuji Boku for titles, subset to the characters in
// content/ja.ts (npm run fonts:ja). Not preloaded: only /ja/ pages, which use them, download them.
const shipporiJa = localFont({
  src: [
    { path: "../fonts/shippori-ja-400.woff2", weight: "400" },
    { path: "../fonts/shippori-ja-600.woff2", weight: "600" },
    { path: "../fonts/shippori-ja-700.woff2", weight: "700" },
  ],
  variable: "--font-shippori-ja", display: "swap", preload: false,
});
const yuji = localFont({ src: "../fonts/yuji-boku-ja.woff2", variable: "--font-yuji", display: "swap", preload: false });
const fell = IM_Fell_Double_Pica_SC({ weight: "400", subsets: ["latin"], variable: "--font-im-fell", display: "block" });
const barlow = Barlow({ weight: "600", subsets: ["latin"], variable: "--font-barlow-v", display: "block" });

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = getDict((await params).lang).meta;
  return {
    title: m.title,
    description: m.description,
    metadataBase: new URL("https://mukogawa.com"),
    // the battle drawing in red with the white BLEEDING LIGHT title (public/og-bleeding-light-v2.jpg, 1200 × 630,
    // 2026-11-03) when a link is shared in a chat
    openGraph: { title: m.title, description: m.share, locale: m.locale, type: "website", images: [{ url: "/og-bleeding-light-v2.jpg", width: 1200, height: 630, alt: m.title }] },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({ children, params }: Props & { children: React.ReactNode }) {
  const lang = asLang((await params).lang);
  return (
    <html lang={getDict(lang).lang} className={`${darkcastle.variable} ${pier.variable} ${shippori.variable} ${fell.variable} ${barlow.variable} ${shipporiJa.variable} ${yuji.variable}`}>
      <body><LangProvider lang={lang}>{children}</LangProvider></body>
    </html>
  );
}
