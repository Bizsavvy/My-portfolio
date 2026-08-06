import type { Metadata } from "next";
import { CaseHeader } from "@/components/case-study/CaseHeader";
import { SolutionAtAGlance } from "@/components/case-study/SolutionAtAGlance";
import { Section } from "@/components/case-study/Section";
import { Kicker } from "@/components/ui/Kicker";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { LightboxImage } from "@/components/case-study/LightboxImage";
import { ImageCallouts } from "@/components/case-study/ImageCallouts";
import { VideoDemo } from "@/components/case-study/VideoDemo";

export const metadata: Metadata = {
  title: "NawNaw: Case Study · Haye",
  description: "Designing Nigeria’s 15-Minute Essentials Run",
};

export default function NawNawPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseHeader
        eyebrow="Quick commerce · Delivery · Concept"
        title="NawNaw"
        status="Concept"
        statusVariant="neutral"
        tagline={
          <>
            A quick-commerce app named after its own promise, with every screen traced
            back to a person who was simply{" "}
            <em className="italic text-[var(--color-accent)]">out of time</em>.
          </>
        }
        problem={
          <>
            Sometimes the shops aren&apos;t open yet. Sometimes they are and you still
            can&apos;t get there, because what you&apos;re short of is time, not access.
            Next-day delivery is no use to someone who needs it in twenty minutes.
          </>
        }
        outcomes={[
          { stat: "15 min", label: "delivery promise, made accountable on screen" },
          { stat: "₦10,000", label: "target basket the whole store is designed around" },
          { stat: "90/day", label: "orders to break even per dark store" },
        ]}
        meta={[
          { label: "Role", value: "Product Designer & Frontend Engineer" },
          { label: "Timeline", value: "June 2–16, 2026" },
          { label: "Team", value: "Solo" },
          { label: "Tools", value: "Figma · React Native/Expo" },
        ]}
        readMoreHref="/articles/nawnaw"
        readMoreLabel="Read the full case study"
      />

      {/* The whole idea in one screen, before any reasoning. */}
      <Section>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 reveal">
            <Kicker>The whole idea, in one screen</Kicker>
            <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] max-w-[68ch]">
              A store you can read in a glance, leading with time instead of price.
              Everything else is in service of this.
            </p>
          </div>

          <div className="flex flex-col gap-3 reveal items-center">
            <LightboxImage
              src="/assets/nawnaw/Dashboard-User.webp"
              alt="Home Screen"
              loading="eager"
              className="max-w-full max-h-[60vh] w-auto object-contain"
            />
            <div className="w-full max-w-[480px]">
              <ImageCallouts
                items={[
                  <>ETA sits where a discount banner would — <strong className="text-[var(--color-text)] font-medium">you sell time, not price</strong>.</>,
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <VideoDemo
        kicker="Experience"
        heading="See it in motion."
        description="A quick walkthrough of the core NawNaw shopping experience, from browsing an aisle to tracking a 15-minute delivery."
        flowCaption="Home → Aisle → Cart → Checkout → Track Order"
        videoSrc="/assets/nawnaw/nawnaw-demo.mp4"
        poster="/assets/nawnaw/nawnaw-demo-poster.webp"
        isMobile
      />

      {/* The decisions worth seeing, one line each. */}
      <SolutionAtAGlance
        kicker="The screens that carry it"
        heading="Six decisions you can see."
        description="Each screen solves one thing. The reasoning behind every call is in the written version."
        items={[
          {
            label: "Sensitive items",
            blurb: "One toggle reshapes the catalog — the shop bends to the shopper.",
            img: "/assets/nawnaw/Profile-HSI.webp",
          },
          {
            label: "Cart maths",
            blurb: "“Add ₦400 to skip the fee” — framed as avoidable, never a punishment.",
            img: "/assets/nawnaw/Cart states.webp",
          },
          {
            label: "Guest checkout",
            blurb: "Auth deferred to the one moment it matters: placing the order.",
            img: "/assets/nawnaw/Guest-flow.webp",
          },
          {
            label: "Address by landmark",
            blurb: "The typed landmark is the real instruction, not the map pin.",
            img: "/assets/nawnaw/Address confirmation.webp",
          },
          {
            label: "Live tracking",
            blurb: "A countdown makes the 15-minute promise accountable on screen.",
            img: "/assets/nawnaw/Order tracking.webp",
          },
          {
            label: "Product page",
            blurb: "The calm end of the app, without slowing the impulse buys.",
            img: "/assets/nawnaw/Product details page.webp",
          },
        ]}
      />

      <CaseStudyFooter
        nextHref="/articles/nawnaw"
        nextLabel="Read the full write-up"
        stat="Concept · fully designed and built"
        colophonLeft="NawNaw: Product Design & Engineering Concept"
      />
    </div>
  );
}
