import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { Section } from "@/components/case-study/Section";
import { Kicker } from "@/components/ui/Kicker";
import { ArchGrid } from "@/components/case-study/ArchGrid";
import { RoadmapItem } from "@/components/case-study/RoadmapItem";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";

export const metadata: Metadata = {
  title: "UI to JSON: Case Study · Haye",
  description:
    "A Figma plugin that compiles design files into AI-optimized semantic JSON: a clean intermediate representation built for AI frontend generation. Live in production with 250+ users.",
};

/* The pipeline from PRD §9, condensed to five legible stages. */
const pipeline = [
  {
    index: "PARSE",
    title: "Structural parser",
    description: "Walks the Figma node tree, preserving parent-child hierarchy and stacking order.",
  },
  {
    index: "NORMALIZE",
    title: "Semantic normalizer",
    description: "Cleans inconsistent layer names and infers meaning, not just geometry.",
  },
  {
    index: "LAYOUT",
    title: "Layout intelligence",
    description: "Reconstructs auto-layout, spacing, alignment, and relational vs. absolute intent.",
  },
  {
    index: "RESOLVE",
    title: "Tokens + components",
    description: "Extracts design tokens and maps reusable component instances, variants, and states.",
  },
  {
    index: "EMIT",
    title: "AI-optimized AST",
    description: "Outputs a compressed, deterministic JSON tree ready for an AI rendering agent.",
  },
];

/* What the engine pulls out (PRD §8). */
const extracts = [
  {
    badge: "01 / LAYOUT",
    title: "Semantic layout",
    body: "Direction, alignment, spacing, nesting, and responsive intent, captured as relationships instead of pixel coordinates.",
  },
  {
    badge: "02 / COMPONENTS",
    title: "Component identity",
    body: "Instances, variants, states, and overrides are recognised and collapsed into reusable identifiers.",
  },
  {
    badge: "03 / TOKENS",
    title: "Design tokens",
    body: "Colour, type, spacing, radius, shadow, and sizing are normalised into named token references, not raw values.",
  },
  {
    badge: "04 / NAMING",
    title: "Normalized naming",
    body: "BTN_PRIMARY, btn-primary, and “Primary Btn” all resolve to one clean, semantic identifier.",
  },
  {
    badge: "05 / CONSTRAINTS",
    title: "Constraint translation",
    body: "Raw Figma constraints become implementation-friendly responsive semantics like fill, hug, and max-width.",
  },
  {
    badge: "06 / EXPORT",
    title: "Token-efficient JSON",
    body: "A hierarchical, deterministic, low-noise tree, plus optional markdown context for UX and interaction notes.",
  },
];

/* A faithful, trimmed excerpt of a real export (Shappay QuickActionsCard).
   Child arrays are elided with … for length; the shape is unedited. */
const sampleJson = `{
  "version": "1.0.0",
  "source": { "fileName": "ShapPay User app", "selection": ["1812:16347"] },
  "tokens": {
    "colors": {
      "surface-colors-surface-container-lowest": "#FFFFFF",
      "text-colors-primary-text": "#343234",
      "success-colors-success-icon-bg": "rgba(0, 204, 136, 0.1)"
    },
    "typography": {
      "label-l1-inter-semi-bold-700": {
        "fontWeight": 600, "fontSize": 24, "lineHeight": "100%", "letterSpacing": -2
      }
    },
    "spacing": { "l": 24, "m": 16, "s": 8 },
    "radius": { "m": 16, "radius-100": 100 }
  },
  "components": [
    { "name": "QuickActionsCard", "variants": ["Price=Visible"], "instances": 1 },
    { "name": "IconFund", "variants": [], "instances": 1 }
  ],
  "root": {
    "kind": "screen",
    "name": "QuickActionsCard",
    "component": "QuickActionsCard",
    "variant": { "Price": "Visible" },
    "position": "relational",
    "layout": { "direction": "vertical", "gap": "l", "padding": "m", "alignItems": "center" },
    "style": { "background": "surface-colors-surface-container-lowest", "borderRadius": "m" },
    "children": [
      {
        "kind": "container",
        "name": "WalletBalance",
        "layout": { "direction": "vertical", "gap": "s" },
        "responsive": { "height": "hug" },
        "children": [ … ]
      },
      {
        "kind": "button",
        "name": "QuickActionsButtons",
        "semanticRole": "interactive",
        "layout": { "direction": "horizontal", "gap": "s", "alignItems": "center" },
        "children": [ … ]
      }
    ]
  }
}`;

export default function UItoJSONPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      {/* ── Hero ── */}
      <CaseStudyHero
        eyebrow="Production tool · Figma plugin · AI tooling"
        title="UI to JSON"
        lede={
          <>
            A Figma plugin that compiles design files into{" "}
            <em className="italic text-[var(--color-accent)]">
              AI-optimized semantic JSON
            </em>
            : a clean intermediate representation built for AI frontend
            generation, not noisy CSS export.
          </>
        }
        meta={[
          { label: "Role",     value: "Designer & Engineer" },
          { label: "Scope",    value: "Concept → plugin → production" },
          { label: "Users",    value: "250+ and growing" },
          { label: "Stack",    value: "React · TypeScript · Figma API" },
          { label: "Surface",  value: "Figma Plugin" },
          { label: "Year",     value: "2026" },
        ]}
        status="Live in production"
      />

      {/* ── Cover ── */}
      <div className="cs-wrap reveal flex flex-col items-start gap-10" style={{ paddingBlock: "62px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/ui-to-json/cover.png"
          alt="UI to JSON: turn Figma designs into AI-ready semantic JSON"
          className="w-full h-auto rounded-[16px] border border-[var(--color-line)]"
          style={{ display: "block" }}
        />
        <a
          href="https://www.figma.com/community/plugin/1638581049555435822"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[13px] tracking-[.04em] text-[var(--color-accent)] border border-[var(--color-accent)] rounded-[30px] px-5 py-3 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-all duration-[280ms]"
        >
          Try it on Figma Community →
        </a>
      </div>

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

      {/* ── Live: design → JSON ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>From design to AST</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            One frame in. One clean tree out.
          </h2>
        </div>
        {/* The plugin in Figma: select a frame, get the semantic JSON. */}
        <div className="mt-8 reveal rounded-[16px] border border-[var(--color-line)] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/ui-to-json/screenshot.png"
            alt="UI to JSON plugin panel in Figma, showing a Shappay frame and its extracted semantic JSON"
            className="w-full h-auto"
            style={{ display: "block" }}
          />
        </div>

        <p className="font-mono text-[12px] text-[var(--color-muted)] tracking-[.04em] mt-8 mb-2 reveal">
          Excerpt from a real export · child nodes trimmed for length
        </p>
        <div className="reveal rounded-[16px] border border-[var(--color-line)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-surface)] border-b border-[var(--color-line)]">
            <span className="w-3 h-3 rounded-full bg-[var(--color-line-strong)]" />
            <span className="w-3 h-3 rounded-full bg-[var(--color-line-strong)]" />
            <span className="w-3 h-3 rounded-full bg-[var(--color-line-strong)]" />
            <span className="font-mono text-[12px] text-[var(--color-muted)] ml-2">
              ShapPay-user-app.fig → export.json
            </span>
          </div>
          <pre
            className="m-0 overflow-x-auto p-6 font-mono text-[13px] leading-[1.6] text-[var(--color-body)]"
            style={{ background: "var(--color-bg)" }}
          >
            <code>{sampleJson}</code>
          </pre>
        </div>
      </Section>

      {/* ── What it extracts ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>What the engine extracts</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Six passes between a node tree and a usable spec.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 reveal">
          {extracts.map((card) => (
            <div
              key={card.badge}
              className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-[3px] hover:bg-[var(--color-surface-2)]"
            >
              <div className="font-mono text-[10px] tracking-[.06em] uppercase text-[var(--color-accent)]">
                {card.badge}
              </div>
              <h3 className="font-hanken font-bold text-[18px] tracking-[-0.01em] text-[var(--color-text)]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.5] text-[var(--color-muted)]">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Architecture ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Architecture</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            A semantic compiler layer between Figma and the agent.
          </h2>
        </div>
        <ArchGrid nodes={pipeline} note="Figma nodes → semantic JSON AST → AI rendering agent → frontend code" />
      </Section>

      {/* ── Metrics ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>In production</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Not a concept. A tool people use.
          </h2>
        </div>
        <p className="text-[var(--color-body)] text-[17px] leading-[1.65] mt-6 reveal" style={{ maxWidth: 760 }}>
          Launched on the Figma Community on 20 May 2026, with no paid distribution.
          250+ people have reached the tool across Community installs and shared files;
          119 of those are direct Community installs to date.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 reveal">
          {[
            { stat: "250+", label: "Users reached, and growing" },
            { stat: "119", label: "Figma Community installs" },
            { stat: "42", label: "Community likes" },
          ].map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-2 p-7 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)]"
            >
              <span
                className="font-hanken font-bold text-[var(--color-accent)]"
                style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1 }}
              >
                {m.stat}
              </span>
              <span className="text-[14px] text-[var(--color-muted)]">{m.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Reception ── */}
      <Section>
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Reception</Kicker>
          <blockquote
            className="font-hanken font-normal tracking-[-0.01em] text-[var(--color-text)]"
            style={{ fontSize: "clamp(22px,2.8vw,30px)", lineHeight: 1.35, maxWidth: "20ch" }}
          >
            “This will definitely save tons of tokens. Great plugin.”
          </blockquote>
          <div className="font-mono text-[12px] tracking-[.04em] text-[var(--color-muted)]">
            Pradeep Prakash · @ku2design
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          <p className="text-[var(--color-body)] text-[17px] leading-[1.65] reveal" style={{ maxWidth: 760 }}>
            I shipped UI to JSON with a single launch post: a full walkthrough going
            from Figma to code with no MCPs and no screenshots burning tokens, just a
            semantic JSON export. It reached 40K views and 586 likes, and the
            response was immediate: this solved a real cost-and-quality problem people
            were already feeling in their AI workflows.
          </p>
          <div className="reveal rounded-[16px] border border-[var(--color-line)] overflow-hidden w-full max-w-[460px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/ui-to-json/testimonial.jpeg"
              alt="Launch post on X for UI to JSON with 40K views and 586 likes, and a reply praising the plugin"
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>
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

      {/* ── Footer ── */}
      <CaseStudyFooter
        nextHref="/work/oshap"
        nextLabel="Oshap"
        stat="250+ users in production"
        colophonLeft="UI to JSON: Design tooling case study"
      />
    </div>
  );
}
