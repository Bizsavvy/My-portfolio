import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProblemStatement } from "@/components/case-study/ProblemStatement";
import { CoreBet } from "@/components/case-study/CoreBet";
import { VideoDemo } from "@/components/case-study/VideoDemo";
import { QrEngineDemo } from "@/components/case-study/QrEngineDemo";
import { PivotSection } from "@/components/case-study/PivotSection";
import { SystemSection } from "@/components/case-study/SystemSection";
import { WhyItMatters } from "@/components/case-study/WhyItMatters";
import { MetricSection } from "@/components/case-study/MetricSection";
import { RoadmapSection } from "@/components/case-study/RoadmapSection";
import { ReflectionSection } from "@/components/case-study/ReflectionSection";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";

export const metadata: Metadata = {
  title: "Shappay: Case Study · Haye",
  description: "A wallet-first QR payments app on Nigeria's NIBSS NQR rails.",
};

export default function ShappayPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseStudyHero
        eyebrow="Consumer fintech · QR payments · Nigeria"
        title="Shappay"
        lede={
          <>
            A{" "}
            <em className="italic text-[var(--color-accent)]">
              QR-driven payment resolution engine
            </em>{" "}
            that selects the correct financial rail (wallet, bank, or external network) based on
            merchant and user preferences.
          </>
        }
        meta={[
          { label: "Role",     value: "Product Designer & Engineer · Founder" },
          { label: "Scope",    value: "Product design → front-end" },
          { label: "Model",    value: "Wallet-first QR" },
          { label: "Rails",    value: "NIBSS NQR · EMVCo" },
          { label: "Platform", value: "React Native · Mobile" },
          { label: "Year",     value: "2025–present" },
        ]}
      />

      {/* Problem */}
      <ProblemStatement />

      {/* Core bet */}
      <CoreBet />

      {/* Video demo */}
      <VideoDemo />

      {/* Live engine / demo */}
      <QrEngineDemo />

      {/* The pivot */}
      <PivotSection />

      {/* Systems */}
      <SystemSection />

      {/* Why it matters */}
      <WhyItMatters />

      {/* Success metrics */}
      <MetricSection />

      {/* Roadmap */}
      <RoadmapSection />

      {/* Reflection */}
      <ReflectionSection />

      {/* Footer */}
      <CaseStudyFooter
        nextHref="/work/ui-to-json"
        nextLabel="UI to JSON"
        stat="250+ users in production"
        colophonLeft="Shappay: Product Design & Engineering case study"
      />
    </div>
  );
}
