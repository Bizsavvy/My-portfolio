import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flow — Brand Identity · Haye",
};

export default function FlowPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{ background: "var(--color-ink)", padding: "120px 36px" }}
    >
      <div className="font-mono text-[12px] tracking-[.18em] uppercase mb-6" style={{ color: "#8A4BEB" }}>
        Brand Identity · Identity System
      </div>
      <h1
        className="font-pixel font-bold tracking-[.01em] mb-6"
        style={{ fontSize: "clamp(48px,10vw,120px)", lineHeight: 0.95 }}
      >
        Flow
      </h1>
      <p
        className="text-[var(--color-muted)] text-[18px] mb-10"
        style={{ maxWidth: "38ch" }}
      >
        Brand guidelines coming soon.
      </p>
      <Link
        href="/"
        className="font-mono text-[13px] tracking-[.04em] border rounded-[30px] px-6 py-3 transition-all duration-[280ms]"
        style={{ color: "#8A4BEB", borderColor: "#8A4BEB" }}
      >
        ← Back to home
      </Link>
    </div>
  );
}
