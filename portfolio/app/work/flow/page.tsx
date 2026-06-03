import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";

export const metadata: Metadata = {
  title: "Flow — Brand Identity · Haye",
  description:
    "A complete brand identity system for a modern period care brand — built on vibrant colour, warm personality, and dignified design.",
};

const VIOLET = "#8A4BEB";

const guidelines = [
  { src: "/assets/flow/guidelines/01-cover-slide.svg",       alt: "Flow Brand Guidelines — Cover" },
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

export default function FlowPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      {/* ── Hero ── */}
      <CaseStudyHero
        eyebrow="Brand Identity System · Period Care"
        title="Flow"
        lede={
          <>
            A{" "}
            <em className="italic" style={{ color: VIOLET }}>
              complete brand identity system
            </em>{" "}
            for a modern period care brand — built on vibrant colour, warm
            personality, and dignified design.
          </>
        }
        meta={[
          { label: "Role",         value: "Brand Identity Designer" },
          { label: "Scope",        value: "Strategy → Identity → Packaging → Digital" },
          { label: "Deliverables", value: "Logo · Colour · Type · Packaging · Digital" },
          { label: "Platform",     value: "Print · Packaging · App" },
          { label: "Tools",        value: "Figma" },
          { label: "Year",         value: "April 2026" },
        ]}
        status="Ready for handoff"
      />

      {/* ── The Challenge ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="cs-wrap">
          <div
            className="font-mono text-[11px] tracking-[.18em] uppercase mb-5"
            style={{ color: VIOLET }}
          >
            01 — The Challenge
          </div>
          <h2
            className="font-hanken font-bold tracking-[-0.02em] mb-10"
            style={{ fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.05, maxWidth: "18ch" }}
          >
            Periods are universal. The brands haven't been.
          </h2>
          <div className="grid md:grid-cols-2 gap-10" style={{ maxWidth: 900 }}>
            <p className="text-[var(--color-body)] text-[17px] leading-[1.65]">
              Most period care brands default to one of two scripts — clinical blue
              that signals medical necessity, or bubblegum pink that signals something
              to be ashamed of. Flow needed neither.
            </p>
            <p className="text-[var(--color-body)] text-[17px] leading-[1.65]">
              The brief: build a brand that treats the body with dignity and genuine
              joy — one that speaks directly, without medical euphemism or forced
              cuteness. Direct. Warm. Joyful. Bold.
            </p>
          </div>
        </div>
      </section>

      {/* ── Brand Guidelines ── */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {guidelines.map(({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={alt}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ))}
      </div>

      {/* ── Footer ── */}
      <CaseStudyFooter
        nextHref="/work/shappay"
        nextLabel="Shappay"
        stat="Brand Guideline v1.0 · 18 sections"
        colophonLeft="Flow — Brand Identity case study"
      />
    </div>
  );
}
