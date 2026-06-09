import { NowCard } from "./NowCard";

const skills = [
  "Product Design",
  "Front-end Engineering",
  "Design Systems",
  "Prototyping",
  "User Research",
];

export function About() {
  return (
    <section
      id="about"
      className="about border-t border-[var(--color-line)] relative z-[5]"
      style={{ padding: "88px 0" }}
    >
      <div
        className="max-w-[var(--width-maxw)] site-wrap aboutflex"
      >
        <div className="reveal flex flex-col gap-[var(--space-5xl)]" style={{ maxWidth: 814 }}>
          <div className="ts-mono-label text-[var(--color-accent)]">
            what's up
          </div>

          <p className="ts-about text-[var(--color-text-primary)]">
            I'm a product designer and engineer who doesn't stop at the mockup.
            I take vague problems, design them, and{" "}
            <span className="text-[var(--color-accent)]">ship them to working code</span>;
            owning the loop from interface to infrastructure.
          </p>

          <p className="ts-body text-[var(--color-text-muted)]">
            I&apos;ve built deep product expertise in Nigerian and African markets, and I work with ambitious teams anywhere; remotely and across borders.
          </p>

          <div className="skills flex flex-wrap gap-[var(--space-md)]">
            {skills.map((s) => (
              <span
                key={s}
                className="ts-pills-label text-[var(--color-text-secondary)] border border-[var(--color-border-strong)] rounded-[30px] px-4 py-[10px]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal flex self-stretch w-full max-w-full md:max-w-[360px]">
          <NowCard />
        </div>
      </div>

      <style>{`
        .aboutflex {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
        }
        @media (max-width: 760px) {
          .aboutflex { flex-direction: column; gap: 36px; }
        }
      `}</style>
    </section>
  );
}
