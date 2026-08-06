"use client";
import { useEffect, useState } from "react";
import { CaseStudyNavbar } from "@/components/case-study/CaseStudyNavbar";
import { runCaseStudyAnimations } from "@/animations/caseStudy";

interface CaseStudyChromeProps {
  title: string;
  status?: string;
  parentLabel?: string;
  parentHref?: string;
}

/**
 * Shared page furniture for every case study: scroll progress bar, breadcrumb
 * navbar, back-to-top, and the GSAP kickoff. Used by both CaseHeader (the
 * scannable executive-summary header) and CaseStudyHero (the long-form header).
 */
export function CaseStudyChrome({
  title,
  status = "In development · MVP",
  parentLabel,
  parentHref,
}: CaseStudyChromeProps) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    runCaseStudyAnimations();
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
        setVisible(window.scrollY > 400);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="progress"
        className="fixed top-0 left-0 h-[2px] bg-[var(--color-accent)] z-50"
        style={{ width: `${progress}%`, transition: "width .08s linear" }}
      />

      <CaseStudyNavbar
        title={title}
        status={status}
        parentLabel={parentLabel}
        parentHref={parentHref}
      />

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
