import React from "react";

interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "go";
}

export function Pill({ children, variant = "default" }: PillProps) {
  const base =
    "font-mono text-[12px] tracking-[0] px-4 py-3 border rounded-[30px] inline-flex items-center justify-center gap-2 max-w-full text-center whitespace-normal leading-snug";
  const variants = {
    default: "border-[var(--color-line-strong)] text-[var(--color-body)]",
    go: "border-[var(--color-accent)] text-[var(--color-accent)]",
  };
  return (
    <span className={`${base} ${variants[variant]} pill`}>
      {variant === "go" && <span className="live-dot" />}
      {children}
    </span>
  );
}
