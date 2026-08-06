import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { CaseStudyChrome } from "@/components/case-study/CaseStudyChrome";

export interface CaseHeaderMeta {
  label: string;
  value: string;
}

interface CaseHeaderProps {
  eyebrow: string;
  title: string;
  /** One-line positioning statement under the title. */
  tagline: React.ReactNode;
  /** The constraint, in about two lines. Answers "why did this need doing?". */
  problem: React.ReactNode;
  /**
   * What actually came of it. Give `stat` a number wherever one exists —
   * these are the first things a recruiter reads.
   */
  outcomes: { stat: string; label: string }[];
  /** Role / Timeline / Team / Tools. Rendered as a compact definition list. */
  meta: CaseHeaderMeta[];
  status?: string;
  statusVariant?: "accent" | "violet" | "neutral";
  parentLabel?: string;
  parentHref?: string;
  /** Optional full-width banner above the title. */
  banner?: { src: string; alt: string; width: number; height: number };
  /** Link to the full written version, when the prose lives on /articles. */
  readMoreHref?: string;
  readMoreLabel?: string;
}

/**
 * Standardised case study header: a five-second read of the whole project.
 * Problem on the left, quantified outcome on the right, metadata underneath.
 * Everything below this block is elaboration — a recruiter who stops here
 * should still know what was built, why, and what it produced.
 */
export function CaseHeader({
  eyebrow,
  title,
  tagline,
  problem,
  outcomes,
  meta,
  status = "In development · MVP",
  statusVariant = "accent",
  parentLabel,
  parentHref,
  banner,
  readMoreHref,
  readMoreLabel = "Read the full write-up",
}: CaseHeaderProps) {
  return (
    <>
      <CaseStudyChrome
        title={title}
        status={status}
        parentLabel={parentLabel}
        parentHref={parentHref}
      />

      <header className="relative z-[5] overflow-hidden" style={{ padding: "28px 0 56px" }}>
        <div className="cs-wrap flex flex-col gap-[var(--space-8xl)]">
          {/* Title block */}
          <div className="flex flex-col gap-5">
            <div className="eyebrow font-mono text-[12px] uppercase text-[var(--color-accent)]">
              {eyebrow}
            </div>

            <h1
              className="font-pixel font-bold tracking-[.02em]"
              style={{ fontSize: "clamp(48px,9vw,104px)", lineHeight: 0.95 }}
            >
              <span className="scanwrap relative inline-block">
                {title}
                <span
                  id="beam"
                  className="absolute"
                  style={{
                    left: "-4%",
                    width: "108%",
                    height: 5,
                    background: "var(--color-accent)",
                    top: "50%",
                    boxShadow: "0 0 22px 2px var(--color-accent)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    opacity: 0,
                  }}
                />
              </span>
            </h1>

            <p
              className="lede font-hanken text-[var(--color-text)] tracking-[-0.01em]"
              style={{ fontSize: "clamp(19px,2.2vw,26px)", lineHeight: 1.38, maxWidth: 660 }}
            >
              {tagline}
            </p>
          </div>

          {/* Banner */}
          {banner && (
            <div
              /* Unframed — banner artwork supplies its own background. */
              className="reveal relative w-full overflow-hidden"
              style={{ aspectRatio: `${banner.width} / ${banner.height}` }}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                width={banner.width}
                height={banner.height}
                priority
                sizes="(max-width: 900px) 100vw, 900px"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
            </div>
          )}

          {/* Executive summary: problem | outcome */}
          <div
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-px rounded-[var(--rad-xl)] overflow-hidden"
            style={{ background: "var(--color-line)" }}
          >
            <div className="bg-[var(--color-bg)] p-[26px] flex flex-col gap-3">
              <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[var(--color-muted)]">
                The problem
              </span>
              <p className="font-hanken text-[15.5px] leading-[1.6] text-[var(--color-body)]">
                {problem}
              </p>
            </div>

            <div className="bg-[var(--color-bg)] p-[26px] flex flex-col gap-4">
              <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[var(--color-muted)]">
                The outcome
              </span>
              <div className="flex flex-col gap-[14px]">
                {outcomes.map((o) => (
                  <div key={o.label} className="flex items-baseline gap-3">
                    <span
                      className="font-pixel font-bold text-[var(--color-accent)] leading-none shrink-0"
                      style={{ fontSize: "clamp(22px,2.4vw,30px)" }}
                    >
                      {o.stat}
                    </span>
                    <span className="font-hanken text-[14px] leading-[1.45] text-[var(--color-body)]">
                      {o.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metadata */}
          <div className="flex flex-col gap-5">
            <dl
              className="meta grid grid-cols-2 md:grid-cols-4 gap-px rounded-[var(--rad-lg)] overflow-hidden"
              style={{ background: "var(--color-line)" }}
            >
              {meta.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-[var(--color-bg)] px-5 py-[16px] flex flex-col gap-[6px]"
                >
                  <dt className="font-mono text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)]">
                    {label}
                  </dt>
                  <dd className="text-[13.5px] font-medium leading-[1.4]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="reveal flex items-center gap-4 flex-wrap">
              <Badge variant={statusVariant}>{status}</Badge>
              {readMoreHref && (
                <a
                  href={readMoreHref}
                  className="font-mono text-[12px] tracking-[.04em] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-[250ms]"
                >
                  {readMoreLabel} →
                </a>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
