import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { sortedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles · Haye",
  description:
    "Long-form case studies, design essays, and the decision log: the reasoning behind the work, for anyone who wants more than the highlight reel.",
};

const KIND_COLOR: Record<string, string> = {
  "Case study": "text-[var(--color-accent)] border-[var(--color-accent)]",
  "Design essay": "text-[var(--color-violet)] border-[var(--color-violet)]",
  "Decision log": "text-[var(--color-body)] border-[var(--color-line-strong)]",
};

export default function ArticlesPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseStudyHero
        parentLabel="Home"
        parentHref="/"
        eyebrow="Long-form · written work"
        title="Articles"
        status="Updated as things ship"
        lede={
          <>
            The projects page shows what got built. This is{" "}
            <em className="italic text-[var(--color-accent)]">why</em> — full write-ups,
            design essays, and the decisions I&apos;d defend in a review.
          </>
        }
        meta={[
          { label: "Pieces", value: `${sortedArticles.length}` },
          { label: "Format", value: "Case studies · essays" },
          { label: "Read time", value: "6–14 min each" },
        ]}
      />

      <section
        className="relative z-[5] border-t border-[var(--color-line)]"
        style={{ padding: "62px 0" }}
      >
        <div className="cs-wrap flex flex-col">
          {sortedArticles.map((a, i) => (
            <article
              key={a.href}
              className="reveal group border-b border-[var(--color-line)] first:border-t"
            >
              <Link
                href={a.href}
                className="flex flex-col gap-3 py-7 transition-colors duration-[250ms]"
              >
                {/* Meta row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`font-mono text-[10px] tracking-[.06em] uppercase border rounded-[20px] px-[9px] py-[3px] ${
                      KIND_COLOR[a.kind] ?? KIND_COLOR["Decision log"]
                    }`}
                  >
                    {a.kind}
                  </span>
                  <span className="font-mono text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)]">
                    {a.date}
                  </span>
                  {a.projectLabel && (
                    <>
                      <span className="text-[var(--color-line-strong)]">·</span>
                      <span className="font-mono text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)]">
                        {a.projectLabel}
                      </span>
                    </>
                  )}
                </div>

                {/* Title + arrow */}
                <div className="flex items-start justify-between gap-6">
                  <h2
                    className="font-hanken font-bold tracking-[-0.02em] text-[var(--color-text)] transition-colors duration-[250ms] group-hover:text-[var(--color-accent)]"
                    style={{ fontSize: "clamp(22px,2.8vw,30px)", lineHeight: 1.15 }}
                  >
                    {a.title}
                  </h2>
                  <span
                    className="font-mono text-[18px] text-[var(--color-muted)] shrink-0 pt-1 transition-all duration-[280ms] group-hover:text-[var(--color-accent)] group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <p className="font-hanken text-[15px] leading-[1.6] text-[var(--color-body)] max-w-[68ch]">
                  {a.abstract}
                </p>
              </Link>

              {/* Index is 1-based purely for display. */}
              <span className="sr-only">{`Entry ${i + 1}`}</span>
            </article>
          ))}
        </div>
      </section>

      <CaseStudyFooter
        nextHref="/#work"
        nextLabel="Back to the work"
        stat={`${sortedArticles.length} pieces on record`}
        colophonLeft="Articles: the long version"
      />
    </div>
  );
}
