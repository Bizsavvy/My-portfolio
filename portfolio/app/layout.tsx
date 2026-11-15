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
    // Dark only for now (Haye, 2026-11-15): no toggle, and a saved light choice is ignored.
    // The `dark` class drives the new system and shadcn; `data-theme` the legacy pages.
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`dark ${caveat.variable} ${pixelifySans.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
