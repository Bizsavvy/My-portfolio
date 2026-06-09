import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { DecisionLog, decisionCount } from "@/components/decisions/DecisionLog";

export const metadata: Metadata = {
  title: "Decision Log · Haye",
  description:
    "The hard calls behind five products, and the site you're reading: the constraint, and what I chose.",
};

export default function DecisionsPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseStudyHero
        parentLabel="Home"
        parentHref="/"
        eyebrow="How I think · across every project"
        title="Decisions"
        status="Living document"
        lede={
          <>
            The hard calls behind five products, and the site you&apos;re reading. Each one in two
            lines: <em className="italic text-[var(--color-accent)]">the constraint, and what I chose.</em>
          </>
        }
        meta={[
          { label: "Entries", value: `${decisionCount}` },
          { label: "Projects", value: "5 + this site" },
          { label: "Read time", value: "~45 sec" },
        ]}
      />

      <DecisionLog />

      <CaseStudyFooter
        nextHref="/#work"
        nextLabel="Back to the work"
        stat={`${decisionCount} decisions on record`}
        colophonLeft="Decision Log: how I think"
      />
    </div>
  );
}
