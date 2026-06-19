import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProblemStatement } from "@/components/case-study/ProblemStatement";
import { CoreBet } from "@/components/case-study/CoreBet";
import { VideoDemo } from "@/components/case-study/VideoDemo";
import { QrEngineDemo } from "@/components/case-study/QrEngineDemo";
import { FlowStrip } from "@/components/case-study/FlowStrip";
import { PivotSection } from "@/components/case-study/PivotSection";
import { SystemSection } from "@/components/case-study/SystemSection";
import { WhyItMatters } from "@/components/case-study/WhyItMatters";
import { MetricSection } from "@/components/case-study/MetricSection";
import { RoadmapSection } from "@/components/case-study/RoadmapSection";
import { ReflectionSection } from "@/components/case-study/ReflectionSection";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { LightboxImage } from "@/components/case-study/LightboxImage";

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
      <VideoDemo videoSrc="/assets/shappay/Shappay%20demo.mov" isMobile />

      {/* Live engine / demo */}
      <QrEngineDemo />

      {/* Annotated core flow */}
      <FlowStrip
        kicker="The core flow"
        heading="Four screens, one decision each."
        description="The whole payment loop is short on purpose. Every screen earns its place; here is what each one is doing and why."
        steps={[
          { stage: "Dashboard", annotation: "Quick overview of recent transactions and your wallet balance.", img: "/assets/shappay/Dashboard.png" },
          { stage: "Scan", annotation: "Open straight to the camera. No menu, no account number to read aloud.", img: "/assets/shappay/Scan.png" },
          { stage: "Confirm", annotation: "Surfaces the resolved merchant and amount before settling, so the payer is always in control.", img: "/assets/shappay/Confirm.png" },
          { stage: "Done", annotation: "Instant wallet debit with a receipt the payer can act on, not a spinner waiting on a bank.", img: "/assets/shappay/Payment done.png" },
        ]}
      />

      {/* App Screens */}
      <section className="relative z-[5] border-t border-[var(--color-line)]" style={{ padding: "62px 0" }}>
        <div className="cs-wrap flex flex-col gap-6">
          <div className="flex flex-col gap-6 reveal">
            <h2 className="font-mono text-[12px] tracking-[.08em] uppercase text-[var(--color-accent)]">
              App Screens
            </h2>
            <h2
              className="font-hanken font-bold tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
            >
              The full experience.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 reveal">
            {[
              "Dashboard",
              "Scan",
              "Confirm",
              "Payment done",
              "History",
              "Split bill",
              "Dashboard dark",
              "Profile",
            ].map((name) => (
              <div key={name} className="relative aspect-[416/849] w-full overflow-hidden">
                <LightboxImage
                  src={`/assets/shappay/${name}.png`}
                  alt={`${name} screen`}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
