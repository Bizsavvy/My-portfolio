import type { Metadata } from "next";
import { Pixelify_Sans, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl, siteName } from "@/lib/site";
import "./globals.css";

// Self-hosted: loading this one through next/font/google failed the Vercel build
// with "next/font/google queries have exactly one entry".
const caveat = localFont({
  src: "./fonts/Caveat-latin.woff2",
  weight: "400 700",
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

const title = "Haye: Product Designer & Engineer";
const description =
  "Product designer and engineer who designs and builds consumer & fintech products: from interface to infrastructure.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    url: "/",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Dark is the default (Docs/Design-System.md). The `dark` class drives the new
    // system and shadcn; `data-theme` still drives the legacy pages until they're rebuilt.
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${caveat.variable} ${pixelifySans.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Reads localStorage before hydration to avoid theme flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);document.documentElement.classList.toggle('dark',t==='dark')}}catch(e){}})()` }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
