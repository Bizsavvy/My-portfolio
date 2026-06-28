import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
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

/* A short framing block that sits before a group of slides and explains the thinking. */
function Intro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "100px 0 48px" }}>
      <div className="cs-wrap">
        <div
          className="font-mono text-[11px] tracking-[.18em] uppercase mb-5"
          style={{ color: ACCENT }}
        >
          {eyebrow}
        </div>
        <h2
          className="font-hanken font-bold tracking-[-0.02em] mb-8"
          style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.06, maxWidth: "20ch" }}
        >
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-10" style={{ maxWidth: 900 }}>
          {children}
        </div>
      </div>
    </section>
  );
}

const P = "text-[var(--color-body)] text-[17px] leading-[1.65]";

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
            <em className="italic" style={{ color: ACCENT }}>
              complete brand identity system
            </em>{" "}
            for a modern period care brand: built on vibrant colour, warm
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
            style={{ color: ACCENT }}
          >
            01: The Challenge
          </div>
          <h2
            className="font-hanken font-bold tracking-[-0.02em] mb-10"
            style={{ fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.05, maxWidth: "18ch" }}
          >
            Periods are universal. The brands haven&apos;t been.
          </h2>
          <div className="grid md:grid-cols-2 gap-10" style={{ maxWidth: 900 }}>
            <p className="text-[var(--color-body)] text-[17px] leading-[1.65]">
              Most period care brands default to one of two scripts: clinical blue
              that signals medical necessity, or bubblegum pink that signals something
              to be ashamed of. Flow needed neither.
            </p>
            <p className="text-[var(--color-body)] text-[17px] leading-[1.65]">
              The brief: build a brand that treats the body with dignity and genuine
              joy, one that speaks directly, without medical euphemism or forced
              cuteness. Direct. Warm. Joyful. Bold.
            </p>
          </div>
        </div>
      </section>

      {/* ── Brand Guidelines ── */}
      {/* Cover + table of contents */}
      <Slides items={guidelines.slice(0, 2)} />

      {/* 02 · The Identity — wordmark + icon mark */}
      <Intro eyebrow="02: The Identity" title="A mark that speaks plainly.">
        <p className={P}>
          The wordmark had one job: to sound like a brand that talks to you, not
          down at you. No medical serif, no winking lowercase cuteness, just a
          confident, direct letterform that carries warmth without apology.
        </p>
        <p className={P}>
          The icon mark distils that into a single shape that survives being shrunk
          to an app tile or pressed onto a wrapper. It stays legible and
          recognisably Flow at any size, on any background.
        </p>
      </Intro>
      <Slides items={guidelines.slice(2, 8)} />

      {/* 03 · Colour & Type */}
      <Intro eyebrow="03: Colour & Type" title="Colour does the emotional work.">
        <p className={P}>
          This is where the brand refuses both defaults at once. Clinical blue
          signals illness; bubblegum pink signals shame. Flow&apos;s palette is built
          to signal neither: vivid and warm, dignified without being sterile,
          joyful without being juvenile.
        </p>
        <p className={P}>
          Type carries the voice the same way. A confident display presence pairs
          with a calm, readable body, so the brand can be bold on a pack and gentle
          in a paragraph without ever feeling like two different brands.
        </p>
      </Intro>
      <Slides items={guidelines.slice(8, 12)} />

      {/* 04 · Packaging */}
      <Intro eyebrow="04: Packaging" title="The most personal surface.">
        <p className={P}>
          Packaging is where a period care brand is actually held: carried in a
          bag, seen in a bathroom, reached for in a hurry. It is the most intimate,
          most physical moment of the whole system, and it had to feel like
          something you would not mind being seen with.
        </p>
        <p className={P}>
          The packaging system and the individual wrapper carry the identity down
          to the smallest unit, so the promise holds whether you are looking at a
          full box or a single product in your hand.
        </p>
      </Intro>
      <Slides items={guidelines.slice(12, 14)} />

      {/* 05 · The System in Use */}
      <Intro eyebrow="05: The System in Use" title="A living system, not a logo.">
        <p className={P}>
          An identity is only as good as its weakest application. The UI
          components, patterns, and motion principles exist so Flow behaves
          consistently in the places a static logo never reaches: on screen, in
          motion, in the hands of whoever builds with it next.
        </p>
        <p className={P}>
          The do&apos;s and don&apos;ts close the system by drawing its edges. The
          clearest way to keep a brand intact is to be explicit about what would
          break it.
        </p>
      </Intro>
      <Slides items={guidelines.slice(14, 18)} />

      {/* ── Footer ── */}
      <CaseStudyFooter
        nextHref="/work/shappay"
        nextLabel="Shappay"
        stat="Brand Guideline v1.0 · 18 sections"
        colophonLeft="Flow: Brand Identity case study"
      />
    </div>
  );
}
