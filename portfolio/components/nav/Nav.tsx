"use client";
import Link from "next/link";
import { useState } from "react";
import { useClock } from "@/hooks/useClock";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#lab", label: "Playground" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const time = useClock();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40 border-b border-[var(--color-line)]"
      style={{ backdropFilter: "blur(14px)", background: "rgba(12,12,10,.7)" }}
    >
      <div
        className="max-w-[var(--width-maxw)] site-wrap flex items-center justify-between relative"
        style={{ height: 66 }}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-[10px] font-pixel font-bold text-[20px] tracking-[.02em]" onClick={() => setMobileMenuOpen(false)}>
          <span
            className="w-[11px] h-[11px] rounded-[3px] bg-[var(--color-accent)]"
            style={{ boxShadow: "0 0 14px var(--color-accent)" }}
          />
          Hb8
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors p-2 -mr-2 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex gap-8 font-mono text-[12px] tracking-[.04em]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-[250ms] relative group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[var(--color-accent)] transition-[width] duration-[280ms] group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Clock — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[12px] text-[var(--color-muted)]">
          <span className="live-dot" />
          <span>{time}</span>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-0 w-full border-b border-[var(--color-line)] bg-[#0C0C0A] transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[240px] opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
        style={{ top: "66px", zIndex: 30 }}
      >
        <div className="site-wrap flex flex-col gap-4 py-6 font-mono text-[14px] tracking-[.04em]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {label}
            </Link>
          ))}
          {/* Mobile Clock */}
          <div className="flex items-center gap-2 text-[var(--color-muted)] pt-2 border-t border-[var(--color-border)]">
            <span className="live-dot" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
