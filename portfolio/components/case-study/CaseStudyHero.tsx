"use client";
import { useEffect } from "react";
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
}

export function CaseStudyHero({ eyebrow, title, lede, meta, status = "In development · MVP" }: CaseStudyHeroProps) {
  useEffect(() => {
    runCaseStudyAnimations();
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
      <nav className="relative z-[5] py-[26px] font-mono text-[12.5px] tracking-[.04em]">
        <div className="max-w-[1080px] site-wrap flex justify-between items-center">
          <div className="text-[var(--color-muted)]">
            Work&nbsp;&nbsp;/&nbsp;&nbsp;
            <strong className="text-[var(--color-text)] font-medium">{title}</strong>
          </div>
          <div className="flex items-center gap-2 text-[var(--color-muted)]">
            <span
              className="w-[7px] h-[7px] rounded-full bg-[var(--color-accent)]"
              style={{ boxShadow: "0 0 0 0 var(--color-accent)", animation: "pulse 2.4s infinite" }}
            />
            {status}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-[5] overflow-hidden" style={{ padding: "64px 0 80px" }}>
        <div className="max-w-[1080px] site-wrap">
          <div className="eyebrow font-mono text-[12.5px] tracking-[.18em] uppercase text-[var(--color-accent)] mb-[26px]">
            {eyebrow}
          </div>

          <h1
            className="font-pixel font-bold tracking-[.02em] mb-7"
            style={{ fontSize: "clamp(56px,11vw,148px)", lineHeight: 0.95 }}
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

          <p
            className="lede font-hanken font-normal text-[var(--color-text)] tracking-[-0.02em]"
            style={{ fontSize: "clamp(20px,3vw,32px)", lineHeight: 1.35, maxWidth: "20ch" }}
          >
            {lede}
          </p>

          <dl
            className="meta mt-[54px] grid border border-[var(--color-line)] rounded-[14px] overflow-hidden reveal"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: 1,
              background: "var(--color-line)",
            }}
          >
            {meta.map(({ label, value }) => (
              <div key={label} className="bg-[var(--color-ink)] px-5 py-[18px]">
                <dt className="font-mono text-[11px] tracking-[.12em] uppercase text-[var(--color-muted)] mb-[7px]">
                  {label}
                </dt>
                <dd className="text-[15.5px] font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>
    </>
  );
}
