import { CaseStudyChrome } from "@/components/case-study/CaseStudyChrome";

interface MetaItem {
  label: string;
  value: string;
}

interface CaseStudyHeroProps {
  eyebrow: string;
  title: string;
  lede: React.ReactNode;
  meta: MetaItem[];
  status?: string;
  parentLabel?: string;
  parentHref?: string;
}

export function CaseStudyHero({ eyebrow, title, lede, meta, status = "In development · MVP", parentLabel, parentHref }: CaseStudyHeroProps) {
  return (
    <>
      <CaseStudyChrome title={title} status={status} parentLabel={parentLabel} parentHref={parentHref} />

      {/* Hero */}
      <header className="relative z-[5] overflow-hidden" style={{ padding: "36px 0 72px" }}>
        <div className="cs-wrap flex flex-col gap-6">
          {/* Eyebrow + title */}
          <div className="flex flex-col gap-4">
            <div className="eyebrow font-mono text-[12px] tracking-[0] uppercase text-[var(--color-accent)]">
              {eyebrow}
            </div>

            <h1
              className="font-pixel font-bold tracking-[.02em]"
              style={{ fontSize: "clamp(56px,11vw,120px)", lineHeight: 0.95 }}
            >
              <span className="scanwrap relative inline-block">
                {title}
                <span
                  id="beam"
                  className="absolute"
                  style={{
                    left: "-4%",
                    width: "108%",
                    height: 5,
                    background: "var(--color-accent)",
                    top: "50%",
                    boxShadow: "0 0 22px 2px var(--color-accent)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    opacity: 0,
                  }}
                />
              </span>
            </h1>
          </div>

          <p
            className="lede font-hanken font-normal text-[var(--color-text)] tracking-[-0.01em]"
            style={{ fontSize: "clamp(20px,2.5vw,28px)", lineHeight: 1.38, maxWidth: 660 }}
          >
            {lede}
          </p>

          <dl
            className="meta grid grid-cols-1 md:grid-cols-3 gap-px rounded-[14px] overflow-hidden reveal"
            style={{ background: "var(--color-line)" }}
          >
            {meta.map(({ label, value }) => (
              <div key={label} className="bg-[var(--color-bg)] px-5 py-[18px] flex flex-col gap-[7px]">
                <dt className="font-mono text-[12px] tracking-[.08em] uppercase text-[var(--color-muted)]">
                  {label}
                </dt>
                <dd className="text-[14px] font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>
    </>
  );
}
