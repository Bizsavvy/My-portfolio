"use client";
import { useEffect, useState } from "react";
import { CaseStudyNavbar } from "@/components/case-study/CaseStudyNavbar";
import { runCaseStudyAnimations } from "@/animations/caseStudy";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    runCaseStudyAnimations();
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="progress"
        className="fixed top-0 left-0 h-[2px] bg-[var(--color-accent)] z-50 transition-[width_.08s_linear]"
        style={{ width: 0 }}
      />

      {/* Nav breadcrumb */}
      <CaseStudyNavbar title={title} status={status} parentLabel={parentLabel} parentHref={parentHref} />

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
      {/* Back to top */}
      <div
        style={{
          position: "fixed",
          bottom: 32,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            borderRadius: 999,
            border: "1px solid var(--color-line)",
            background: "var(--color-bg)",
            color: "var(--color-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 13, lineHeight: 1 }}>↑</span>
          Back to top
        </button>
      </div>
    </>
  );
}
