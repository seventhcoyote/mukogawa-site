import type { Metadata } from "next";
import localFont from "next/font/local";
import { IM_Fell_Double_Pica_SC, Barlow } from "next/font/google";
import "./globals.css";

// Darkcastle: personal-use file for the review build (client buying the commercial licence).
// Subset to Latin from design/fonts/darkcastle.otf with pyftsubset, all layout features kept (ss05).
const darkcastle = localFont({ src: "./fonts/darkcastle.woff2", variable: "--font-darkcastle", display: "block" });
const pier = localFont({ src: "./fonts/pier-sans-bold.woff2", weight: "700", variable: "--font-pier-sans", display: "block" });
// Shippori Mincho (OFL), self-hosted and subset to Latin + Latin-1/Ext-A + 向こう側 via Google Fonts' text= API
// (2026-10-19): next/font/google preloaded ~248 CJK slices (7.8 MB) on every page.
const shippori = localFont({
  src: [
    { path: "./fonts/shippori-400.woff2", weight: "400" },
    { path: "./fonts/shippori-600.woff2", weight: "600" },
    { path: "./fonts/shippori-700.woff2", weight: "700" },
  ],
  variable: "--font-shippori", display: "swap",
});
const fell = IM_Fell_Double_Pica_SC({ weight: "400", subsets: ["latin"], variable: "--font-im-fell", display: "block" });
const barlow = Barlow({ weight: "600", subsets: ["latin"], variable: "--font-barlow-v", display: "block" });

export const metadata: Metadata = {
  title: "Muko-Gawa: Bleeding Light",
  description: "Bleeding Light é um mangá de dark fantasy baseado em literatura bíblica, onde anjos e demônios travam uma guerra oculta aos olhos humanos.",
  metadataBase: new URL("https://mukogawa.web.app"),
  openGraph: { title: "Muko-Gawa: Bleeding Light", description: "Um mangá de dark fantasy baseado em literatura bíblica. Disponível em 1º de dezembro.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${darkcastle.variable} ${pier.variable} ${shippori.variable} ${fell.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
