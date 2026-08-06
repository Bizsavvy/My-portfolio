import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/marquee/Marquee";
import { Sechead } from "@/components/work/Sechead";
import { ProjectCard, type ProjectCardProps } from "@/components/work/ProjectCard";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";

const projects: ProjectCardProps[] = [
  {
    title: "Shappay",
    context: "Consumer fintech · Founder",
    summary:
      "A wallet-first QR payments app on Nigeria's NIBSS NQR rails. Designed and coded end to end, including the live EMVCo payload engine.",
    status: "Pre Alpha",
    href: "/work/shappay",
    img: "/assets/shappay/landscape-shot.svg",
    imgWidth: 1920,
    imgHeight: 1080,
  },
  {
    title: "UI to JSON",
    context: "Design tooling · Figma plugin",
    summary:
      "A Figma plugin that converts UI into code-ready JSON. Live in production with a real, growing user base.",
    status: "Live",
    metric: "250+ users",
    href: "/work/ui-to-json",
    img: "/assets/ui-to-json/cover.webp",
    imgWidth: 1920,
    imgHeight: 1080,
    proofHref: "https://www.figma.com/community/plugin/1638581049555435822",
    proofLabel: "Install on Figma Community",
  },
  {
    title: "Oshap",
    context: "QR ordering · Design → front-end",
    summary:
      "Scan-to-order and pay for restaurants: no app, no login, no waiter. Built the customer app plus the full admin and kitchen dashboard.",
    status: "Shipped MVP",
    href: "/work/oshap",
    img: "/assets/oshap/Dashboard.webp",
    imgWidth: 2000,
    imgHeight: 1579,
  },
  {
    title: "NawNaw",
    context: "Quick commerce · 0 → 1",
    summary:
      "A sub-15-minute grocery delivery concept on a dark-store model for Nigerian tier-1 cities.",
    status: "Concept",
    href: "/work/nawnaw",
    img: "/assets/nawnaw/Guest-flow.webp",
    imgWidth: 2000,
    imgHeight: 1500,
  },
  {
    title: "Flow",
    context: "Brand identity · Period care",
    summary:
      "A full brand system built around Cheerful Violet and a leaf-droplet mark integrated into the wordmark, with complete guidelines.",
    status: "Identity",
    href: "/work/flow",
    img: "/assets/flow-business-card.webp",
    imgWidth: 1600,
    imgHeight: 914,
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

          {/* Plain responsive grid — no sticky stacking, no scroll hijack. */}
          <div className="pgrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div key={p.title} className="h-full">
                <ProjectCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Contact />

      <footer className="border-t border-[var(--color-line)]" style={{ padding: "34px 0" }}>
        <div className="max-w-[var(--width-maxw)] site-wrap flex justify-between items-center flex-wrap gap-x-6 gap-y-3 font-mono text-[11.5px] text-[var(--color-muted)] tracking-[.04em]">
          <span>Haye: Product Designer &amp; Engineer</span>
          <span className="hidden md:inline text-center">
            This site, built end to end with Next.js 16.2.6 · Tailwind v4 · GSAP
          </span>
          <a
            href="https://github.com/Bizsavvy/My-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition-colors duration-[250ms]"
          >
            View source ↗
          </a>
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
