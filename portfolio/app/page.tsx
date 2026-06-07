import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/marquee/Marquee";
import { Sechead } from "@/components/work/Sechead";
import { FolderCard } from "@/components/work/FolderCard";
import {
  VisualQR,
  VisualJSON,
  VisualOshap,
  VisualNawNaw,
  VisualFlow,
} from "@/components/work/Visuals";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";

const projects = [
  {
    index: 1,
    tab: "Flagship · Fintech",
    title: "Shappay",
    badge: { label: "Anchor", variant: "accent" as const },
    hook: "A wallet-first QR payments app on Nigeria's NIBSS NQR rails. Pay anyone by scanning a square: no account numbers, no bank silos. Designed and coded end to end, including the live EMVCo payload engine.",
    tags: ["Consumer Fintech", "EMVCo / NQR", "Design → Front-end"],
    href: "/work/shappay",
    visual: <VisualQR />,
  },
  {
    index: 2,
    tab: "Production Tool",
    title: "UI to JSON",
    badge: { label: "250+ users", variant: "accent" as const },
    hook: "A Figma plugin that converts UI into code-ready JSON. Live in production with a real, growing user base: a tool built for designers who think in systems.",
    tags: ["Figma Plugin", "Design Tooling", "TypeScript"],
    href: "/work/ui-to-json",
    visual: <VisualJSON />,
  },
  {
    index: 3,
    tab: "Shipped MVP",
    title: "Oshap",
    badge: { label: "Shipped MVP", variant: "accent" as const },
    hook: "A QR table-ordering and payment system for restaurants and bars. Scan, order, pay by transfer: no app, no login, no waiter. Designed and built the customer app and the full admin and kitchen dashboard.",
    tags: ["QR Ordering", "Design → Front-end", "React 19 · Vite"],
    href: "/work/oshap",
    visual: <VisualOshap />,
  },
  {
    index: 4,
    tab: "Concept · 0 → 1",
    title: "NawNaw",
    hook: "Quick-commerce grocery delivery concept: a sub-15-minute experience built on a dark-store model for Nigerian tier-1 cities, with a distinct approach for tier-2 market entry.",
    tags: ["Quick Commerce", "0 → 1", "Consumer App"],
    href: "/work/nawnaw",
    visual: <VisualNawNaw />,
  },
  {
    index: 5,
    tab: "Brand Identity",
    title: "Flow",
    badge: { label: "Identity", variant: "accent" as const },
    hook: "A full brand system for a period-care brand: built around Cheerful Violet and a leaf-droplet mark integrated into the wordmark, with complete brand guidelines.",
    tags: ["Branding", "Identity System", "Guidelines"],
    href: "/work/flow",
    ctaLabel: "View the system →",
    visual: <VisualFlow />,
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />

      {/* Work */}
      <section id="work" className="relative z-[5]" style={{ padding: "88px 0" }}>
        <div className="max-w-[var(--width-maxw)] site-wrap">
          <div className="mb-[52px] reveal">
            <Sechead />
          </div>

          <div className="folders">
            {projects.map((p, i) => (
              <div
                key={p.title}
                style={{
                  position: "sticky",
                  top: `calc(68px + ${i} * 42px)`,
                  zIndex: i + 1,
                  marginTop: i > 0 ? "var(--space-8xl)" : 0,
                }}
              >
                <FolderCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Contact />

      <footer className="border-t border-[var(--color-line)]" style={{ padding: "34px 0" }}>
        <div className="max-w-[var(--width-maxw)] site-wrap flex justify-between flex-wrap gap-3 font-mono text-[11.5px] text-[var(--color-muted)] tracking-[.04em]">
          <span>Haye: Design Engineer</span>
          <span>Designed &amp; built end to end · {new Date().getFullYear()}</span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 680px) {
          .sechead p { text-align: left !important; }
        }
        @media (max-width: 640px) {
          section { padding: 60px 0 !important; }
        }
      `}</style>
    </>
  );
}
