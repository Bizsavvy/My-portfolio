import type { Metadata } from "next";
import { CaseHeader } from "@/components/case-study/CaseHeader";
import { SolutionAtAGlance } from "@/components/case-study/SolutionAtAGlance";
import { VideoDemo } from "@/components/case-study/VideoDemo";
import { QrEngineDemo } from "@/components/case-study/QrEngineDemo";
import { FlowStrip } from "@/components/case-study/FlowStrip";
import { MetricSection } from "@/components/case-study/MetricSection";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";

export const metadata: Metadata = {
  title: "Shappay: Case Study · Haye",
  description: "A wallet-first QR payments app on Nigeria's NIBSS NQR rails.",
};

export default function ShappayPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseHeader
        eyebrow="Consumer fintech · QR payments · Nigeria"
        title="Shappay"
        status="Pre Alpha"
        statusVariant="violet"
        tagline={
          <>
            A{" "}
            <em className="italic text-[var(--color-accent)]">
              QR-driven payment resolution engine
            </em>{" "}
            that picks the right financial rail — wallet, bank, or external network — from the
            merchant and user preferences.
          </>
        }
        problem={
          <>
            Nigerian transfers still run on 10-digit account numbers read aloud, mistyped, and
            trapped inside individual banks. There is no shared way for a small merchant to be
            paid without giving out their account details.
          </>
        }
        outcomes={[
          { stat: "4", label: "screens end to end, one decision each" },
          { stat: "NQR", label: "live EMVCo payload engine on NIBSS rails" },
          { stat: "2", label: "addressing modes: QR scan and name@shappay" },
        ]}
        meta={[
          { label: "Role", value: "Product Designer & Engineer · Founder" },
          { label: "Timeline", value: "2025 – present" },
          { label: "Team", value: "Solo: design → front-end" },
          { label: "Tools", value: "Figma · React Native · Expo" },
        ]}
        readMoreHref="/articles/shappay"
        readMoreLabel="Read the full case study"
      />

      {/* The working product, before any process narrative. */}
      <SolutionAtAGlance
        description="Four screens carry the whole payment loop. Each one makes a single decision, so the path from opening the app to a settled payment stays short on purpose."
        hero={{
          src: "/assets/shappay/landscape-shot.svg",
          alt: "Shappay across four screens: phone-number login, wallet dashboard, receive-money QR, and the scan-to-pay camera",
          width: 1920,
          height: 1080,
        }}
        items={[
          {
            label: "Phone-number login",
            blurb: "No email, no password — a number and a code, and the account exists.",
          },
          {
            label: "Wallet dashboard",
            blurb: "Balance, quick actions, and recent transactions in one view.",
          },
          {
            label: "Receive by QR",
            blurb: "A shareable code and a name@shappay address, both resolving through one engine.",
          },
          {
            label: "Scan to pay",
            blurb: "Opens straight to the camera — no menu, no account number.",
          },
        ]}
      />

      <VideoDemo
        videoSrc="/assets/shappay/shappay-demo.mp4"
        poster="/assets/shappay/shappay-demo-poster.webp"
        isMobile
      />

      {/* Live engine — the part that is genuinely hard to fake. */}
      <QrEngineDemo />

      <FlowStrip
        kicker="The core flow"
        heading="Four screens, one decision each."
        description="The whole payment loop is short on purpose. Every screen earns its place; here is what each one is doing and why."
        steps={[
          { stage: "Dashboard", annotation: "Quick overview of recent transactions and your wallet balance.", img: "/assets/shappay/Dashboard.svg", imgWidth: 418, imgHeight: 850 },
          { stage: "Scan", annotation: "Open straight to the camera. No menu, no account number to read aloud.", img: "/assets/shappay/Scan.webp" },
          { stage: "Confirm", annotation: "Surfaces the resolved merchant and amount before settling, so the payer is always in control.", img: "/assets/shappay/Confirm.webp" },
          { stage: "Done", annotation: "Instant wallet debit with a receipt the payer can act on, not a spinner waiting on a bank.", img: "/assets/shappay/Payment done.webp" },
        ]}
      />

      <MetricSection />

      <CaseStudyFooter
        nextHref="/articles/shappay"
        nextLabel="Read the full write-up"
        stat="The reasoning, in full"
        colophonLeft="Shappay: Product Design & Engineering case study"
      />
    </div>
  );
}
