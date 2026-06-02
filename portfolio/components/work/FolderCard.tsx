import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

interface FolderCardProps {
  index: number;
  tab: string;
  title: string;
  badge?: { label: string; variant?: "accent" | "violet" | "neutral" };
  hook: string;
  tags: string[];
  href: string;
  ctaLabel?: string;
  visual: React.ReactNode;
}

export function FolderCard({
  index,
  tab,
  title,
  badge,
  hook,
  tags,
  href,
  ctaLabel = "View case study →",
  visual,
}: FolderCardProps) {
  const isOdd = index % 2 !== 0;

  const tabRowClass = isOdd ? "flex" : "flex justify-end";
  const bodyRadius = isOdd
    ? "0 var(--rad-xl) var(--rad-xl) var(--rad-xl)"
    : "var(--rad-xl) 0 var(--rad-xl) var(--rad-xl)";

  return (
    <Link className={`folder ${isOdd ? "odd" : "even"} block w-full reveal`} href={href}>
      {/* Tab */}
      <div className={tabRowClass}>
        <span
          className="tab inline-flex items-center gap-[8px] bg-[var(--color-surface)] px-[22px] py-[10px] border border-b-0 border-[var(--color-border)] relative transition-colors duration-300"
          style={{ borderRadius: "var(--rad-lg) var(--rad-lg) 0 0", top: 1 }}
        >
          <span className="no ts-mono-label-md text-[var(--color-accent)] transition-[text-shadow] duration-300">
            {String(index).padStart(2, "0")}
          </span>
          <span className="tab-label font-mono text-[12px] tracking-[0.08em] text-[var(--color-muted)] transition-colors duration-300">
            {tab}
          </span>
        </span>
      </div>

      {/* Body */}
      <div
        className="fbody bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden grid min-h-[480px] transition-all duration-[350ms]"
        style={{ gridTemplateColumns: "1fr 1fr", borderRadius: bodyRadius }}
      >
        {/* Info pane */}
        <div className={`finfo p-[44px] flex flex-col justify-between ${isOdd ? "order-1" : "order-2"}`}>

          {/* Top: title + hook */}
          <div className="flex flex-col gap-[var(--space-lg)]">
            <div className="ctitle flex items-center gap-[var(--space-lg)] flex-wrap">
              <span className="ts-card-title text-[var(--color-text)] leading-[1.2]">
                {title}
              </span>
              {badge && <Badge variant={badge.variant}>{badge.label}</Badge>}
            </div>
            <p className="chook ts-body text-[var(--color-body)] leading-[1.65] max-w-[46ch]">
              {hook}
            </p>
          </div>

          {/* Bottom: tags + CTA */}
          <div className="flex flex-col gap-[var(--space-5xl)]">
            <div className="ctags flex gap-[var(--space-sm)] flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-[var(--color-muted)] border border-[var(--color-border)] rounded-[var(--rad-2xl)] px-[12px] py-[8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="cgo ts-cta text-[var(--color-text)] inline-flex items-center gap-[9px] transition-all duration-[280ms]">
              {ctaLabel}
            </span>
          </div>
        </div>

        {/* Visual pane */}
        <div
          className={`doc relative overflow-hidden bg-[var(--color-ink)] ${isOdd ? "order-2" : "order-1"}`}
          style={{ minHeight: 320 }}
        >
          {visual}
        </div>
      </div>

      <style>{`
        .folder:hover .fbody {
          border-color: var(--color-line-strong);
          transform: translateY(-4px);
          box-shadow: 0 28px 64px -28px rgba(0,0,0,.8);
        }
        .folder:hover .tab { border-color: var(--color-line-strong); }
        .folder:hover .tab-label { color: var(--color-text); }
        .folder:hover .no { text-shadow: 0 0 12px var(--color-accent); }
        .folder:hover .cgo { color: var(--color-accent); gap: 14px; }
        @media (max-width: 760px) {
          .fbody { grid-template-columns: 1fr !important; }
          .finfo { order: 2 !important; }
          .doc   { order: 1 !important; }
          .odd .fbody, .even .fbody { border-radius: 0 var(--rad-xl) var(--rad-xl) var(--rad-xl) !important; }
        }
      `}</style>
    </Link>
  );
}
