import React from "react";
import Link from "next/link";
import Image from "next/image";

export type ProjectStatus =
  | "Live"
  | "Shipped MVP"
  | "Pre Alpha"
  | "Concept"
  | "Identity";

export interface ProjectCardProps {
  /** Project name. */
  title: string;
  /** Context line: who it was for and when. e.g. "Founder · 2025". */
  context: string;
  /** Two lines, max. What you built plus the impact, quantified if possible. */
  summary: string;
  status: ProjectStatus;
  /** Quantified signal shown next to the status, e.g. "250+ users". */
  metric?: string;
  href: string;
  /** Preview still. Falls back to `visual` when absent. */
  img?: string;
  imgWidth?: number;
  imgHeight?: number;
  /** Rendered when there is no `img` — the existing SVG/canvas visuals. */
  visual?: React.ReactNode;
  /** External proof: a store listing, live URL, or release note. */
  proofHref?: string;
  proofLabel?: string;
}

/* Status drives colour so the grid reads at a glance without a legend. */
const STATUS_STYLE: Record<ProjectStatus, string> = {
  Live: "text-[var(--color-accent)] border-[var(--color-accent)]",
  "Shipped MVP": "text-[var(--color-accent)] border-[var(--color-accent)]",
  "Pre Alpha": "text-[var(--color-violet)] border-[var(--color-violet)]",
  Concept: "text-[var(--color-muted)] border-[var(--color-line-strong)]",
  Identity: "text-[var(--color-violet)] border-[var(--color-violet)]",
};

/**
 * Visual-first project preview for the home grid: image on top, then status,
 * title, and a two-line impact summary. Replaces the folder-tab card and its
 * sticky-stack layout — this one tiles into a plain responsive grid.
 */
export function ProjectCard({
  title,
  context,
  summary,
  status,
  metric,
  href,
  img,
  imgWidth = 1920,
  imgHeight = 1080,
  visual,
  proofHref,
  proofLabel = "See it live",
}: ProjectCardProps) {
  return (
    <article className="pcard group relative flex flex-col h-full rounded-[var(--rad-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-1">
      <Link href={href} className="flex flex-col flex-1" aria-label={`${title} case study`}>
        {/* Preview */}
        <div
          className="relative w-full overflow-hidden bg-[var(--color-ink)]"
          style={{ aspectRatio: "16 / 10" }}
        >
          {img ? (
            <Image
              src={img}
              alt={`${title} preview`}
              width={imgWidth}
              height={imgHeight}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[450ms] group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0">{visual}</div>
          )}

          {/* Status overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
            <span
              className={`font-mono text-[10px] tracking-[.06em] uppercase border rounded-[20px] px-[9px] py-[3px] backdrop-blur-[6px] bg-[var(--color-nav-bg)] ${STATUS_STYLE[status]}`}
            >
              {status}
            </span>
            {metric && (
              <span className="font-mono text-[10px] tracking-[.06em] uppercase border border-[var(--color-line-strong)] text-[var(--color-body)] rounded-[20px] px-[9px] py-[3px] backdrop-blur-[6px] bg-[var(--color-nav-bg)]">
                {metric}
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-2.5 p-5 flex-1">
          <span className="font-mono text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)]">
            {context}
          </span>
          <h3 className="ts-card-title text-[var(--color-text)] leading-[1.15]">{title}</h3>
          <p className="font-hanken text-[14px] leading-[1.55] text-[var(--color-body)]">
            {summary}
          </p>
          <span className="mt-auto pt-2 font-mono text-[12px] tracking-[.04em] text-[var(--color-text)] inline-flex items-center gap-2 transition-all duration-[280ms] group-hover:text-[var(--color-accent)] group-hover:gap-3">
            View case study →
          </span>
        </div>
      </Link>

      {/* Outbound proof sits outside the card link so it stays its own target. */}
      {proofHref && (
        <a
          href={proofHref}
          target="_blank"
          rel="noopener noreferrer"
          className="border-t border-[var(--color-line)] px-5 py-3 font-mono text-[11px] tracking-[.06em] uppercase text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-[250ms]"
        >
          {proofLabel} ↗
        </a>
      )}
    </article>
  );
}
