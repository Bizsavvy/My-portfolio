import React from "react";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-mono text-[12px] tracking-[.16em] uppercase text-[var(--color-accent)] mb-5 flex items-center gap-3"
      style={{ "--kicker-line": "26px" } as React.CSSProperties}
    >
      <span
        className="inline-block h-px bg-[var(--color-accent)]"
        style={{ width: 26 }}
      />
      {children}
    </div>
  );
}
