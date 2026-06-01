"use client";
import Link from "next/link";
import { useClock } from "@/hooks/useClock";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#lab", label: "Playground" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const time = useClock();

  return (
    <nav
      className="sticky top-0 z-40 border-b border-[var(--color-line)]"
      style={{ backdropFilter: "blur(14px)", background: "rgba(12,12,10,.7)" }}
    >
      <div
        className="max-w-[var(--width-maxw)] site-wrap flex items-center justify-between"
        style={{ height: 66 }}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-[10px] font-pixel font-bold text-[20px] tracking-[.02em]">
          <span
            className="w-[11px] h-[11px] rounded-[3px] bg-[var(--color-accent)]"
            style={{ boxShadow: "0 0 14px var(--color-accent)" }}
          />
          Hb8
        </Link>

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
    </nav>
  );
}
