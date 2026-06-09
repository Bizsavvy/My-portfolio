import { NowCard } from "@/components/about/NowCard";

const skills = [
  "Product Design",
  "Front-end Engineering",
  "Design Systems",
  "Prototyping",
  "User Research",
  "Motion",
];

export function About() {
  return (
    <section
      id="about"
      className="about border-t border-[var(--color-line)] relative z-[5]"
      style={{ padding: "88px 0" }}
    >
      <div
        className="max-w-[var(--width-maxw)] site-wrap aboutgrid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div className="reveal">
          <div className="font-mono text-[12.5px] tracking-[.04em] text-[var(--color-accent)] mb-[14px] flex items-center gap-[10px]">
            what&apos;s up
          </div>

          <p
            className="font-hanken font-normal text-[var(--color-text-primary)] tracking-[-0.01em]"
            style={{ fontSize: "clamp(20px,2.6vw,30px)", lineHeight: 1.48, maxWidth: "28ch" }}
          >
            I&apos;m a product designer and engineer who doesn&apos;t stop at the mockup. I take vague problems,
            design them, and ship them to working code; owning the loop from interface to
            infrastructure.
          </p>

          <p
            className="text-[var(--color-muted)] text-[15.5px] leading-[1.65] mt-[22px]"
            style={{ maxWidth: "46ch" }}
          >
            I&apos;ve built deep product expertise in Nigerian and African markets, and I work with
            ambitious teams anywhere; remotely and across borders.
          </p>

          <div className="skills mt-[38px] flex flex-wrap gap-[10px]">
            {skills.map((s) => (
              <span
                key={s}
                className="font-mono text-[12.5px] text-[var(--color-body)] border border-[var(--color-line-strong)] rounded-[30px] px-4 py-[10px]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal">
          <NowCard />
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .aboutgrid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
