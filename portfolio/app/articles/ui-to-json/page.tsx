import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { Section } from "@/components/case-study/Section";
import { Kicker } from "@/components/ui/Kicker";
import { RoadmapItem } from "@/components/case-study/RoadmapItem";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";

export const metadata: Metadata = {
  title: "A plugin for designers who think in systems · Haye",
  description:
    "The written version of UI to JSON: why the bottleneck in AI frontend generation is the intermediate representation, and what the engine deliberately throws away.",
};

export default function UiToJsonArticlePage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseStudyHero
        parentLabel="Articles"
        parentHref="/articles"
        eyebrow="Case study · written version"
        title="UI to JSON"
        status="2026"
        lede={
          <>
            The bottleneck in AI frontend generation isn&apos;t the model. It&apos;s the
            quality of the{" "}
            <em className="italic text-[var(--color-accent)]">
              intermediate representation
            </em>{" "}
            you hand it.
          </>
        }
        meta={[
          { label: "Role", value: "Designer & Engineer" },
          { label: "Read time", value: "~9 min" },
          { label: "See it working", value: "/work/ui-to-json" },
        ]}
      />

      {/* ── Problem ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>01: The problem</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.08, maxWidth: "20ch" }}
          >
            AI doesn&apos;t struggle to write code. It struggles to read design.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8" style={{ maxWidth: 900 }}>
          <p className="text-[var(--color-body)] text-[17px] leading-[1.65] reveal">
            Figma-to-code tools optimise for the wrong thing: CSS extraction, HTML
            generation, developer handoff. They emit noisy exports with broken
            hierarchy, absolute positioning everywhere, and metadata that has nothing
            to do with how a UI is actually built.
          </p>
          <p className="text-[var(--color-body)] text-[17px] leading-[1.65] reveal">
            Feed that to an AI agent and you get hallucinated, inconsistent code. The
            real bottleneck in AI frontend generation isn&apos;t the model. It&apos;s the
            quality of the intermediate representation you hand it.
          </p>
        </div>
      </Section>

      {/* ── The bet / philosophy ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>The core bet</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Compile intent, not pixels.
          </h2>
        </div>
        <p className="font-hanken text-[20px] leading-[1.58] text-[var(--color-text)] reveal mt-6">
          UI to JSON treats a design like source code for a compiler. It extracts the
          semantic structure a developer would infer by eye, then normalises it into a
          UI Abstract Syntax Tree built specifically for machine reasoning.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 reveal">
          {[
            ["Intent", "Geometry"],
            ["Structure", "Pixels"],
            ["Relationships", "Coordinates"],
            ["Semantics", "Raw nodes"],
          ].map(([keep, drop]) => (
            <div
              key={keep}
              className="flex flex-col gap-1 p-5 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)]"
            >
              <span className="font-hanken font-bold text-[18px] text-[var(--color-text)]">
                {keep}
              </span>
              <span className="font-mono text-[12px] text-[var(--color-muted)] line-through decoration-[var(--color-accent)]">
                {drop}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Reflection ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Reflection</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            The interesting problem was deciding what to throw away.
          </h2>
        </div>
        <div className="flex flex-col gap-4 mt-6 reveal" style={{ maxWidth: 760 }}>
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            Every export tool I&apos;d used optimised for completeness: capture every
            property, every pixel, every node. UI to JSON is the opposite bet. The value
            isn&apos;t in what it records, it&apos;s in what it confidently discards.
            Deciding which visual details carry meaning, and which are noise, was the
            whole design problem.
          </p>
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            The insight that landed with people was practical: you don&apos;t need MCP
            servers or screenshots that burn tokens to get an AI from design to code. A
            small, clean, semantic representation does more than a large noisy one.
            Building it as a shipped plugin, not a demo, forced that to survive contact
            with messy real files made by people who never expected a machine to read
            them. That constraint is what makes the output trustworthy.
          </p>
        </div>
      </Section>

      {/* ── Roadmap ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Roadmap</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            From extraction layer to AI-native workflow.
          </h2>
        </div>
        <div className="mt-4">
          <RoadmapItem
            phase="NOW"
            title="Semantic export engine"
            status={{ label: "IN PRODUCTION", now: true }}
            description="Layout, component, token, naming, and constraint extraction into AI-optimized JSON, with optional markdown context."
          />
          <RoadmapItem
            phase="NEXT"
            title="Direct AI agent integration"
            status={{ label: "ROADMAP" }}
            description="Code-generation adapters and multi-framework output so the AST flows straight into a coding agent."
          />
          <RoadmapItem
            phase="THEN"
            title="Responsive + animation intelligence"
            status={{ label: "ROADMAP" }}
            description="Breakpoint inference, animation extraction, and accessibility recommendations layered onto the spec."
          />
          <RoadmapItem
            phase="LATER"
            title="Design system sync"
            status={{ label: "ROADMAP" }}
            description="Semantic diffing, live code preview, and feedback loops between design systems and generated code."
          />
        </div>
      </Section>

      <CaseStudyFooter
        nextHref="/work/ui-to-json"
        nextLabel="See the plugin"
        stat="Written version · 4 sections"
        colophonLeft="UI to JSON: the written case study"
      />
    </div>
  );
}
