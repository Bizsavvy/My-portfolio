import Link from "next/link";

interface CaseStudyFooterProps {
  nextHref: string;
  nextLabel: string;
  stat: string;
  colophonLeft: string;
}

export function CaseStudyFooter({
  nextHref,
  nextLabel,
  stat,
  colophonLeft,
}: CaseStudyFooterProps) {
  return (
    <footer
      className="relative z-[5] border-t border-[var(--color-line)] flex flex-col gap-[var(--space-12xl)]"
      style={{ padding: "70px 0 90px" }}
    >
      <div className="max-w-[var(--width-maxw)] mx-auto px-[var(--space-16xl)] w-full flex flex-col gap-[var(--space-12xl)]">
        <div className="flex justify-between items-end flex-wrap gap-6">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[12px] tracking-[.08em] uppercase text-[var(--color-muted)]">
              Next project
            </div>
            <Link
              href={nextHref}
              className="big-link font-hanken font-bold tracking-[-0.02em] leading-[1.1] text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)] flex items-center gap-4"
              style={{ fontSize: "clamp(32px,5vw,48px)" }}
            >
              {nextLabel}
              <span className="arrow inline-block transition-transform duration-300">→</span>
            </Link>
          </div>
          <div className="font-mono text-[12px] tracking-[.08em] uppercase text-[var(--color-muted)]">
            {stat}
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-3 font-mono text-[12px] tracking-[.04em] text-[var(--color-muted)]">
          <span>{colophonLeft}</span>
          <span>Designed &amp; built end to end · {new Date().getFullYear()}</span>
        </div>
      </div>

      <style>{`
        footer a.big-link:hover .arrow { transform: translateX(8px); }
      `}</style>
    </footer>
  );
}
