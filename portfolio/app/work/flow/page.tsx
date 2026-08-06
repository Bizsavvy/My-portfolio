import type { Metadata } from "next";
import { CaseHeader } from "@/components/case-study/CaseHeader";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { LightboxImage } from "@/components/case-study/LightboxImage";

export const metadata: Metadata = {
  title: "Flow: Brand Identity · Haye",
  description:
    "A complete brand identity system for a modern period care brand: built on vibrant colour, warm personality, and dignified design.",
};

const ACCENT = "var(--color-accent)";

const guidelines = [
  { src: "/assets/flow/guidelines/01-cover-slide.svg",       alt: "Flow Brand Guidelines: Cover" },
  { src: "/assets/flow/guidelines/02-table-of-contents.svg", alt: "Table of Contents" },
  { src: "/assets/flow/guidelines/03-wordmark.svg",          alt: "Flow Wordmark" },
  { src: "/assets/flow/guidelines/04-wordmark-1.svg",        alt: "Wordmark on Backgrounds" },
  { src: "/assets/flow/guidelines/05-wordmark-2.svg",        alt: "Wordmark Clear Space & Sizing" },
  { src: "/assets/flow/guidelines/06-icon-mark.svg",         alt: "Icon Mark" },
  { src: "/assets/flow/guidelines/07-icon-mark-on-bg.svg",   alt: "Icon Mark on Backgrounds" },
  { src: "/assets/flow/guidelines/08-icon-mark-sizes.svg",   alt: "Icon Mark Sizes" },
  { src: "/assets/flow/guidelines/09-color-system.svg",      alt: "Colour System" },
  { src: "/assets/flow/guidelines/10-color-tint-scale.svg",  alt: "Colour Tint Scale" },
  { src: "/assets/flow/guidelines/11-typography.svg",        alt: "Typography" },
  { src: "/assets/flow/guidelines/12-type-scale.svg",        alt: "Type Scale" },
  { src: "/assets/flow/guidelines/13-packaging.svg",         alt: "Packaging System" },
  { src: "/assets/flow/guidelines/14-individual-wrapper.svg",alt: "Individual Wrapper" },
  { src: "/assets/flow/guidelines/15-ui-components.svg",     alt: "UI Components" },
  { src: "/assets/flow/guidelines/16-patterns-texture.svg",  alt: "Patterns & Texture" },
  { src: "/assets/flow/guidelines/17-motion-principles.svg", alt: "Motion Principles" },
  { src: "/assets/flow/guidelines/18-dos-and-donts.svg",     alt: "Do's & Don'ts" },
];

/* A run of full-bleed brand slides. */
function Slides({ items }: { items: typeof guidelines }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map(({ src, alt }) => (
        <LightboxImage
          key={src}
          src={src}
          alt={alt}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      ))}
    </div>
  );
}

/**
 * A one-line marker before a run of slides. The reasoning behind each section
 * lives in the essay at /articles/flow — this page is the system itself.
 */
function SlideMarker({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section style={{ padding: "72px 0 36px" }}>
      <div className="cs-wrap">
        <div
          className="font-mono text-[11px] tracking-[.18em] uppercase mb-4 reveal"
          style={{ color: ACCENT }}
        >
          {eyebrow}
        </div>
        <h2
          className="font-hanken font-bold tracking-[-0.02em] reveal"
          style={{ fontSize: "clamp(24px,3.4vw,38px)", lineHeight: 1.08, maxWidth: "22ch" }}
        >
          {title}
        </h2>
      </div>
    </section>
  );
}

export default function FlowPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseHeader
        eyebrow="Brand Identity System · Period Care"
        title="Flow"
        status="Identity"
        statusVariant="violet"
        tagline={
          <>
            A{" "}
            <em className="italic" style={{ color: ACCENT }}>
              complete brand identity system
            </em>{" "}
            for a modern period care brand: built on vibrant colour, warm personality,
            and dignified design.
          </>
        }
        problem={
          <>
            Period care branding defaults to clinical blue that signals illness or
            bubblegum pink that signals shame. Flow needed a system that read as
            dignified and genuinely joyful without either script.
          </>
        }
        outcomes={[
          { stat: "18", label: "section brand guideline, ready for handoff" },
          { stat: "4", label: "surfaces covered: print, packaging, app, motion" },
          { stat: "1", label: "mark that holds from a full box to a single wrapper" },
        ]}
        meta={[
          { label: "Role", value: "Brand Identity Designer" },
          { label: "Timeline", value: "April 2026" },
          { label: "Team", value: "Solo" },
          { label: "Tools", value: "Figma" },
        ]}
        banner={{
          src: "/assets/flow-business-card.webp",
          alt: "Flow business card mockup",
          width: 1600,
          height: 914,
        }}
        readMoreHref="/articles/flow"
        readMoreLabel="Read the design essay"
      />

      {/* Cover + table of contents */}
      <Slides items={guidelines.slice(0, 2)} />

      <SlideMarker eyebrow="02: The Identity" title="A mark that speaks plainly." />
      <Slides items={guidelines.slice(2, 8)} />

      <SlideMarker eyebrow="03: Colour & Type" title="Colour does the emotional work." />
      <Slides items={guidelines.slice(8, 12)} />

      <SlideMarker eyebrow="04: Packaging" title="The most personal surface." />
      <Slides items={guidelines.slice(12, 14)} />

      <SlideMarker eyebrow="05: The System in Use" title="A living system, not a logo." />
      <Slides items={guidelines.slice(14, 18)} />

      <CaseStudyFooter
        nextHref="/articles/flow"
        nextLabel="Read the design essay"
        stat="Brand Guideline v1.0 · 18 sections"
        colophonLeft="Flow: Brand Identity case study"
      />
    </div>
  );
}
