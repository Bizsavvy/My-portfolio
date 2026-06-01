import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "violet" | "neutral";
}

export function Badge({ children, variant = "accent" }: BadgeProps) {
  const base =
    "font-mono text-[10px] tracking-[.06em] uppercase border rounded-[20px] px-[9px] py-[3px]";
  const variants = {
    accent: "text-[var(--color-accent)] border-[var(--color-accent)]",
    violet: "text-[var(--color-violet)] border-[var(--color-violet)]",
    neutral: "text-[var(--color-body)] border-[var(--color-line-strong)]",
  };
  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}
