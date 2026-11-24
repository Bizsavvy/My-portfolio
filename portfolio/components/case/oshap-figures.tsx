/**
 * Figures for the Oshap design system case study, drawn from Oshap's own token values rather
 * than screenshots, so they stay crisp. Every hex and ratio below comes from Oshap's
 * `packages/shared/src/tokens/tokens.css` at the commit named beside it.
 * They show Oshap's light mode, so they sit on their own light panels inside the dark page.
 */

import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

type Greys = {
  label: string;
  note: string;
  surface: string;
  container: string;
  text: string;
  outline: string;
  outlineRatio: string;
  callout: string;
};

// The three neutral ramps the system went through (Oshap commits c0b2158, f6c513c, dacd6b5).
const GREYS: Greys[] = [
  {
    label: "Tinted by the seed",
    note: "v3, 2 September",
    surface: "#fff8f5",
    container: "#fef1ec",
    text: "#201a18",
    outline: "#85736c",
    outlineRatio: "4.29:1",
    callout: "Greys solved from the seed carry the brand onto every page: a restaurant seeded near blue got blue-grey pages, not just blue buttons.",
  },
  {
    label: "A borrowed grey scale",
    note: "3 September",
    surface: "#fafbfc",
    container: "#f7f8f9",
    text: "#172b4d",
    outline: "#8590a2",
    outlineRatio: "3.11:1",
    callout: "The borrowed scale was not neutral: its darks were navy and blue-grey, so the warm brand colours clash with it, and the outline fell to 3.11:1.",
  },
  {
    label: "True neutral",
    note: "Shipped, 3 September",
    surface: "#fcfcfc",
    container: "#f5f5f5",
    text: "#2e2e2e",
    outline: "#747474",
    outlineRatio: "4.52:1",
    callout: "Greys built from black and white with no colour, so R = G = B. The brand reaches accents only, and the outline is back above 4.5:1.",
  },
];

/** A numbered marker on a figure, matched by number to the CalloutList under it. */
const marker = "absolute -top-g10 -right-g10 flex size-6 items-center justify-center rounded-full bg-white font-mono text-label leading-none text-zinc-950 shadow-float";

/** The explanations for a figure's numbered markers, in the style of the before and after pairs. */
function CalloutList({ items }: { items: { label: string; text: string }[] }) {
  return (
    <ol className="flex flex-col gap-g10">
      {items.map((item, i) => (
        <li key={item.label} className="flex gap-g10">
          <span aria-hidden className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-label text-background">
            {i + 1}
          </span>
          <span className="text-body text-pretty text-foreground-secondary">
            <span className="sr-only">{item.label}: </span>
            {item.text}
          </span>
        </li>
      ))}
    </ol>
  );
}

type Ladder = { label: string; note: string; page: string; card: string; well: string; control: string; steps: string; callout: string };

// The light surface ladder at each stage (tokens.css before #148, at #148 f3e09cd, and on master 081e218).
// Steps are WCAG contrast between neighbours: card on page, well on card, control on card.
// Callouts (Haye, 2026-11-21): numbered markers on each card, explained in the list below.
const LADDERS: Ladder[] = [
  {
    label: "The old ladder",
    note: "Before 16 November",
    page: "#fcfcfc",
    card: "#f5f5f5",
    well: "#eeeeee",
    control: "#e8e8e8",
    steps: "1.06 · 1.06 · 1.12",
    callout: "Each step was 1.06:1, so the card disappears into the page.",
  },
  {
    label: "Lighter is higher",
    note: "PR #148, reversed the same afternoon",
    page: "#f2f2f2",
    card: "#ffffff",
    well: "#f2f2f2",
    control: "#e8e8e8",
    steps: "1.12 · 1.12 · 1.23",
    callout: "My first fix flipped the direction: a grey page under white cards.",
  },
  {
    label: "Page lightest, wider steps",
    note: "PR #150, shipped",
    page: "#ffffff",
    card: "#f2f2f2",
    well: "#e8e8e8",
    control: "#dedede",
    steps: "1.12 · 1.09 · 1.20",
    callout: "The fix was a bigger step, not a new direction: the card sits 1.12:1 from the page, and the button 1.20:1 from the card.",
  },
];

/** One card, with a nested block and a neutral button, on each ladder, so the vanishing steps show. */
export function OshapSurfacesFigure() {
  return (
    <div className="flex flex-col gap-g27">
      <div className="grid gap-g10 md:grid-cols-3">
        {LADDERS.map((l, i) => (
          <div key={l.label} className="flex flex-col gap-g10">
            <div className="flex flex-col gap-g10 rounded-lg p-g17 text-[#2e2e2e]" style={{ background: l.page }}>
              <div className="relative flex flex-col gap-g10 rounded-md p-g17" style={{ background: l.card }}>
                <span aria-hidden className={marker}>
                  {i + 1}
                </span>
                <p className="text-body font-semibold">Table T2</p>
                <div className="flex items-center justify-between rounded-sm px-g10 py-g6 text-caption" style={{ background: l.well }}>
                  <span>Guest</span>
                  <span className="font-semibold">₦4,853.63</span>
                </div>
                <span className="inline-flex h-[32px] items-center justify-center rounded-[8px] text-caption font-semibold" style={{ background: l.control }}>
                  Take payment
                </span>
              </div>
              <p className="font-mono text-label text-[#585858]">Steps {l.steps}</p>
            </div>
            <div>
              <p className="text-body text-foreground">{l.label}</p>
              <p className="text-caption text-muted-foreground">{l.note}</p>
            </div>
          </div>
        ))}
      </div>
      <CalloutList items={LADDERS.map((l) => ({ label: l.label, text: l.callout }))} />
    </div>
  );
}

/** The same brand colours on each of the three neutral ramps, so the temperature clash shows. */
export function OshapGreysFigure() {
  return (
    <div className="flex flex-col gap-g27">
      <div className="grid gap-g10 md:grid-cols-3">
        {GREYS.map((g, i) => (
          <div key={g.label} className="flex flex-col gap-g10">
            <div className="flex flex-col gap-g10 rounded-lg p-g17" style={{ background: g.surface, color: g.text }}>
              <div className="relative flex flex-col gap-g10 rounded-md p-g17" style={{ background: g.container }}>
                <span aria-hidden className={marker}>
                  {i + 1}
                </span>
                <p className="text-body font-semibold">Your order</p>
                <div className="flex flex-wrap items-center gap-g6">
                  {/* Brand colours: identical on all three ramps (primary container and the seed). */}
                  <span className="rounded-full px-g10 py-g4 text-caption font-medium" style={{ background: "#ffdbcc", color: "#450000" }}>
                    Sent
                  </span>
                  <span className="rounded-[8px] px-g10 py-g4 text-caption font-semibold text-white" style={{ background: "#f56500" }}>
                    Place Order
                  </span>
                </div>
                <div className="rounded-sm border bg-transparent px-g10 py-g6 text-caption" style={{ borderColor: g.outline, color: g.text }}>
                  Enter your name
                </div>
              </div>
              <p className="font-mono text-label" style={{ color: g.text }}>
                Outline {g.outlineRatio}
              </p>
            </div>
            <div>
              <p className="text-body text-foreground">{g.label}</p>
              <p className="text-caption text-muted-foreground">{g.note}</p>
            </div>
          </div>
        ))}
      </div>
      <CalloutList items={GREYS.map((g) => ({ label: g.label, text: g.callout }))} />
    </div>
  );
}

/**
 * The 16px rule (Oshap Button.tsx and the Figma Button page): white on the seed #F56500 is
 * 3.11:1, enough for large text and UI components, so a filled button's label is 16px semibold
 * at every height, and a sentence in brand colour uses primary-label #A63B00 (6.16:1).
 */
export function OshapButtonRuleFigure() {
  const heights = [48, 40, 32];
  return (
    <div className="grid gap-g10 rounded-lg p-g17 text-[#2e2e2e] md:grid-cols-2 md:p-g27" style={{ background: "#fcfcfc" }}>
      <div className="flex flex-col gap-g17">
        <p className="font-mono text-label text-[#5e5e5e] uppercase">Filled button · white on #F56500 · 3.11:1</p>
        <div className="flex flex-wrap items-end gap-g10">
          {heights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center rounded-[8px] px-g17 text-[16px] leading-none font-semibold text-white"
              style={{ height: h, background: "#f56500" }}
            >
              Place Order
            </span>
          ))}
        </div>
        <p className="text-caption text-[#5e5e5e]">16px semibold at 48, 40 and 32px. The Button component pins it, and a test asserts it at all three heights.</p>
      </div>
      <div className="flex flex-col gap-g17">
        <p className="font-mono text-label text-[#5e5e5e] uppercase">A sentence in brand colour · #A63B00 · 6.16:1</p>
        <p className="text-body" style={{ color: "#a63b00" }}>
          Transfer the exact amount above using the details below.
        </p>
        <p className="text-caption text-[#5e5e5e]">Body-size brand text never sits on the seed. It moves to the darker label tone.</p>
      </div>
    </div>
  );
}

// The primary group in light mode at master 081e218 (tokens.css), for Oshap's own orange.
const ROLES = [
  { role: "primary", hex: "#f56500", on: "#ffffff", use: "Filled buttons" },
  { role: "primary-container", hex: "#ffdbcc", on: "#450000", use: "Tinted chips" },
  { role: "primary-label", hex: "#a63b00", on: null, use: "Brand text in a sentence" },
];

const STEPS: { title: string; body: string }[] = [
  { title: "One colour", body: "The restaurant gives one hex code." },
  { title: "Solved, never assumed", body: "deriveBrandPalette moves only lightness and checks every pair against WCAG contrast. It never assumes white text." },
  { title: "One group of roles", body: "The primary group: the colour, the text on it, a tinted container, and a darker tone for sentences." },
  { title: "Set on the page body", body: "Setting the group on the page body rebrands every screen, sheet and dialog at once, with no change to any screen." },
];

/**
 * How one restaurant colour becomes the guest app's colours (Oshap BrandTheme.tsx and tokens.css
 * at 081e218). What stays fixed is shown too: the staff app and the status colours.
 */
export function OshapTokenFlowFigure() {
  return (
    <div className="flex flex-col gap-g17">
      <div className="flex flex-col items-stretch gap-g6 lg:flex-row lg:items-start">
        {STEPS.map((step, i) => (
          <Fragment key={step.title}>
            {i > 0 && (
              <div aria-hidden className="flex shrink-0 items-center justify-center text-muted-foreground lg:h-[88px] lg:w-g17">
                <ArrowDown className="size-4 lg:hidden" />
                <ArrowRight className="hidden size-4 lg:block" />
              </div>
            )}
            <div className="flex min-w-0 flex-1 flex-col gap-g6 rounded-md border border-border p-g17">
              <span className="font-mono text-label text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-body font-medium text-foreground">{step.title}</p>
              {i === 0 && (
                <div className="flex items-center gap-g6">
                  <span className="size-g27 rounded-sm" style={{ background: "#f56500" }} />
                  <span className="font-mono text-label text-foreground-secondary">#F56500</span>
                </div>
              )}
              {i === 2 && (
                <div className="flex flex-col gap-g4">
                  {ROLES.map((r) => (
                    <div key={r.role} className="flex items-center gap-g6">
                      <span className="flex h-g17 w-g27 shrink-0 items-center justify-center rounded-sm text-label font-semibold" style={{ background: r.hex, color: r.on ?? "#ffffff" }}>
                        Aa
                      </span>
                      <span className="min-w-0 font-mono text-label break-words text-foreground-secondary">{r.role}</span>
                    </div>
                  ))}
                </div>
              )}
              {i === 3 && (
                <div className="flex flex-wrap items-center gap-x-g6 gap-y-g4 font-mono text-label text-foreground-secondary">
                  {["bg-primary", "--color-primary", "--ds-primary"].map((name, j) => (
                    <Fragment key={name}>
                      {j > 0 && <span aria-hidden className="text-muted-foreground">·</span>}
                      <span className="whitespace-nowrap">{name}</span>
                    </Fragment>
                  ))}
                </div>
              )}
              <p className="text-caption text-pretty text-muted-foreground">{step.body}</p>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="grid gap-g10 md:grid-cols-2">
        <div className="rounded-md bg-background p-g17">
          <p className="text-body font-medium text-foreground">The staff app stays Oshap orange</p>
          <p className="text-caption text-pretty text-muted-foreground">A group owner switches branches from its top bar. A tool that changed colour mid-shift would be disorienting.</p>
        </div>
        <div className="rounded-md bg-background p-g17">
          <p className="text-body font-medium text-foreground">Status colours never follow the brand</p>
          <p className="text-caption text-pretty text-muted-foreground">Error, warning and success keep fixed colours, so a red brand never becomes the colour of a failed payment.</p>
        </div>
      </div>
    </div>
  );
}
