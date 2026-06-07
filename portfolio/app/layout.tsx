import type { Metadata } from "next";
import {
  Caveat,
  Pixelify_Sans,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-caveat",
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixel",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haye: Design Engineer",
  description:
    "Design engineer who designs and builds consumer & fintech products: from interface to infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Reads localStorage before hydration to avoid theme flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` }} />
      </head>
      <body
        className={`${caveat.variable} ${pixelifySans.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
