import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NawNaw: Case Study · Haye",
};

export default function NawNawPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{ background: "var(--color-ink)", padding: "120px 36px" }}
    >
      <div className="font-mono text-[12px] tracking-[.18em] uppercase text-[var(--color-accent)] mb-6">
        Concept · 0 → 1 · Quick Commerce
      </div>
      <h1
        className="font-pixel font-bold tracking-[.01em] mb-6"
        style={{ fontSize: "clamp(48px,10vw,120px)", lineHeight: 0.95 }}
      >
        NawNaw
      </h1>
      <p
        className="text-[var(--color-muted)] text-[18px] mb-10"
        style={{ maxWidth: "38ch" }}
      >
        Case study coming soon.
      </p>
      <Link
        href="/"
        className="font-mono text-[13px] tracking-[.04em] text-[var(--color-accent)] border border-[var(--color-accent)] rounded-[30px] px-6 py-3 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-all duration-[280ms]"
      >
        ← Back to home
      </Link>
    </div>
  );
}
