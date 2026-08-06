import type { Metadata } from "next";
import { CaseHeader } from "@/components/case-study/CaseHeader";
import { Section } from "@/components/case-study/Section";
import { Kicker } from "@/components/ui/Kicker";
import { ArchGrid } from "@/components/case-study/ArchGrid";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { LightboxImage } from "@/components/case-study/LightboxImage";

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
      <CaseHeader
        eyebrow="Production tool · Figma plugin · AI tooling"
        title="UI to JSON"
        status="Live in production"
        tagline={
          <>
            A Figma plugin that compiles design files into{" "}
            <em className="italic text-[var(--color-accent)]">
              AI-optimized semantic JSON
            </em>
            : a clean intermediate representation built for AI frontend generation, not
            noisy CSS export.
          </>
        }
        problem={
          <>
            Figma-to-code tools emit noisy exports with broken hierarchy and absolute
            positioning. Feed that to an AI agent and you get hallucinated code — the
            bottleneck is the representation, not the model.
          </>
        }
        outcomes={[
          { stat: "250+", label: "users reached, and growing" },
          { stat: "119", label: "Figma Community installs" },
          { stat: "40K", label: "views on the launch post, 586 likes" },
        ]}
        meta={[
          { label: "Role", value: "Designer & Engineer" },
          { label: "Timeline", value: "2026 · shipped 20 May" },
          { label: "Team", value: "Solo" },
          { label: "Tools", value: "React · TypeScript · Figma API" },
        ]}
        banner={{
          src: "/assets/ui-to-json/cover.webp",
          alt: "UI to JSON: turn Figma designs into AI-ready semantic JSON",
          width: 1920,
          height: 1080,
        }}
        readMoreHref="/articles/ui-to-json"
        readMoreLabel="Read the full case study"
      />

      {/* Outbound proof, high on the page. */}
      <div className="cs-wrap reveal" style={{ paddingBottom: "48px" }}>
        <a
          href="https://www.figma.com/community/plugin/1638581049555435822"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[13px] tracking-[.04em] text-[var(--color-accent)] border border-[var(--color-accent)] rounded-[30px] px-5 py-3 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-all duration-[280ms]"
        >
          Try it on Figma Community →
        </a>
      </div>

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
          <LightboxImage
            src="/assets/ui-to-json/screenshot.webp"
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
            <LightboxImage
              src="/assets/ui-to-json/testimonial.webp"
              alt="Launch post on X for UI to JSON with 40K views and 586 likes, and a reply praising the plugin"
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </Section>

      <CaseStudyFooter
        nextHref="/articles/ui-to-json"
        nextLabel="Read the full write-up"
        stat="250+ users in production"
        colophonLeft="UI to JSON: Design tooling case study"
      />
    </div>
  );
}
