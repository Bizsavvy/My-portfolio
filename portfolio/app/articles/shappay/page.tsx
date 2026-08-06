import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProblemStatement } from "@/components/case-study/ProblemStatement";
import { CoreBet } from "@/components/case-study/CoreBet";
import { PivotSection } from "@/components/case-study/PivotSection";
import { SystemSection } from "@/components/case-study/SystemSection";
import { WhyItMatters } from "@/components/case-study/WhyItMatters";
import { RoadmapSection } from "@/components/case-study/RoadmapSection";
import { ReflectionSection } from "@/components/case-study/ReflectionSection";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";

export const metadata: Metadata = {
  title: "Paying by square: QR rails for Nigerian merchants · Haye",
  description:
    "The full written case study behind Shappay: why an interoperable QR is public infrastructure, the pivot into holding balances, and the compliance surface that came with it.",
};

export default function ShappayArticlePage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseStudyHero
        parentLabel="Articles"
        parentHref="/articles"
        eyebrow="Case study · written version"
        title="Shappay"
        status="2025 – present"
        lede={
          <>
            The long version: why an interoperable QR is{" "}
            <em className="italic text-[var(--color-accent)]">public infrastructure</em> rather
            than another silo, and what it cost to decide to hold balances.
          </>
        }
        meta={[
          { label: "Role", value: "Product Designer & Engineer · Founder" },
          { label: "Read time", value: "~11 min" },
          { label: "See it working", value: "/work/shappay" },
        ]}
      />

      <ProblemStatement />
      <CoreBet />
      <PivotSection />
      <SystemSection />
      <WhyItMatters />
      <RoadmapSection />
      <ReflectionSection />

      <CaseStudyFooter
        nextHref="/work/shappay"
        nextLabel="See the product"
        stat="Written version · 7 sections"
        colophonLeft="Shappay: the written case study"
      />
    </div>
  );
}
