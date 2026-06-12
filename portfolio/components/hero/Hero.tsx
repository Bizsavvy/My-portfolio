"use client";
import { useEffect } from "react";
import Link from "next/link";
import { HeroGeo } from "./HeroGeo";
import { Pill } from "@/components/ui/Pill";
import { runHomeAnimations } from "@/animations/home";

function QrMark() {
  return (
    <span
      className="obj qr inline-flex items-center justify-center align-middle rounded-[9px] mx-[.1em] transition-transform duration-300 hover:-rotate-[4deg] hover:scale-[1.08] cursor-default"
      style={{
        width: ".88em",
        height: ".88em",
        background: "var(--color-paper)",
        padding: ".1em",
        verticalAlign: "middle",
        transform: "translateY(-.08em)",
      }}
    >
      <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
        <g fill="#0C0C0A">
          <rect x="0" y="0" width="3" height="3" />
          <rect x="8" y="0" width="3" height="3" />
          <rect x="0" y="8" width="3" height="3" />
          <rect x="5" y="0" width="1" height="1" />
          <rect x="5" y="2" width="1" height="1" />
          <rect x="5" y="5" width="1" height="1" />
          <rect x="7" y="5" width="1" height="1" />
          <rect x="9" y="5" width="1" height="1" />
          <rect x="5" y="7" width="1" height="1" />
          <rect x="5" y="9" width="1" height="1" />
          <rect x="7" y="7" width="3" height="3" />
        </g>
      </svg>
    </span>
  );
}

function UIMark() {
  return (
    <span
      className="obj ui inline-flex align-middle rounded-[9px] mx-[.1em] relative overflow-hidden transition-transform duration-300 hover:-rotate-[4deg] hover:scale-[1.08] cursor-default"
      style={{
        width: "1.42em",
        height: ".88em",
        background: "linear-gradient(135deg,#2a2a1e,#15150f)",
        border: "1px solid var(--color-line-strong)",
        transform: "translateY(-.08em)",
        verticalAlign: "middle",
      }}
    >
      <span
        className="absolute rounded-full bg-[var(--color-accent)]"
        style={{ left: ".18em", top: ".2em", width: ".28em", height: ".28em" }}
      />
      <span
        className="absolute rounded-[2px] bg-[var(--color-muted)]"
        style={{ left: ".18em", bottom: ".18em", right: ".18em", height: ".13em" }}
      />
    </span>
  );
}

function CodeMark() {
  return (
    <span
      className="obj code inline-flex items-center justify-center align-middle rounded-[9px] mx-[.1em] transition-transform duration-300 hover:-rotate-[4deg] hover:scale-[1.08] cursor-default font-mono text-[var(--color-accent)]"
      style={{
        fontSize: ".46em",
        letterSpacing: 0,
        background: "var(--color-surface-2)",
        border: "1px solid var(--color-line-strong)",
        padding: ".32em .48em",
        transform: "translateY(-.08em)",
        verticalAlign: "middle",
      }}
    >
      {"</> "}
    </span>
  );
}

export function Hero() {
  useEffect(() => {
    runHomeAnimations();
  }, []);

  return (
    <header
      className="hero relative z-[5] text-center overflow-hidden"
      style={{ paddingTop: "88px", paddingBottom: "72px" }}
    >
      <HeroGeo />

      <div className="hero-inner relative z-[2] site-wrap flex flex-col items-center gap-[var(--space-10xl)]">
        {/* Identity */}
        <div className="flex flex-col items-center gap-[var(--space-8xl)]">

          {/* Eyebrow */}
          <div className="eyebrow ts-eyebrow text-[10px] md:text-[12px] text-[var(--color-accent)] inline-flex items-center justify-center text-center gap-2 md:gap-[var(--space-2xl)] whitespace-normal max-w-[90vw] text-balance">
            {/* <span className="w-5 md:w-7 h-px bg-[var(--color-accent)]" aria-hidden="true" /> */}
            Product Designer &amp; Engineer · Abuja, open to remote roles
            {/* <span className="w-5 md:w-7 h-px bg-[var(--color-accent)]" aria-hidden="true" /> */}
          </div>

          {/* Intro */}
          <div className="flex flex-col items-center gap-[var(--space-2xl)]">
            <span className="hero-label ts-handwritten text-[var(--color-muted)]">
              Hi, my name is
            </span>
            <div
              className="bigname font-pixel font-bold tracking-[.02em] text-[var(--color-text)]"
              style={{ fontSize: "clamp(60px,11.1vw,160px)", lineHeight: 1 }}
            >
              Haye
            </div>
          </div>

          {/* Statement */}
          <p
            className="statement ts-statement text-[var(--color-text)] text-center"
            style={{ fontSize: "clamp(20px,2.5vw,36px)", lineHeight: 1.32, maxWidth: "680px" }}
          >
            I design & build <CodeMark /> consumer &
            <em className="italic text-[var(--color-accent)]"> fintech</em> products from interface to infrastructure.
          </p>
        </div>

        {/* Pills */}
        <div className="herometa flex flex-wrap gap-[var(--space-md)] items-center justify-center">
          <Pill variant="go">Available for product design &amp; engineering roles</Pill>
          <Pill>Currently building Shappay</Pill>
          <Pill>Open to remote / global work</Pill>
        </div>

        {/* CTAs */}
        <div className="herocta flex gap-[var(--space-2xl)] flex-wrap justify-center">
          <Link
            href="/#contact"
            className="btn primary ts-cta-medium leading-none px-[26px] py-4 rounded-full transition-all duration-[280ms] inline-flex items-center bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:-translate-y-0.5"
            style={{ boxShadow: "none" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
              window.history.pushState(null, "", "/#contact");
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px -10px var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Let&apos;s talk →
          </Link>
          <Link
            href="/#work"
            className="btn ghost ts-cta-medium leading-none px-[26px] py-4 rounded-full transition-all duration-[280ms] inline-flex items-center border border-[var(--color-border-strong)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            See the work ↓
          </Link>
        </div>
      </div>
    </header>
  );
}
