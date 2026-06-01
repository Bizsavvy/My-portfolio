import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`relative z-[5] border-t border-[var(--color-line)] ${className}`}
      style={{ padding: "62px 0" }}
    >
      <div className="max-w-[1080px] site-wrap">{children}</div>
    </section>
  );
}
