interface CaseStudyNavbarProps {
  title: string;
  status?: string;
}

export function CaseStudyNavbar({
  title,
  status = "In development · MVP",
}: CaseStudyNavbarProps) {
  return (
    <nav className="relative z-[5] py-[28px] font-mono text-[12px] tracking-[.04em]">
      <div className="max-w-[var(--width-maxw)] mx-auto px-[var(--space-16xl)] flex justify-between items-center">
        <div className="text-[var(--color-muted)]">
          Work&nbsp;&nbsp;/&nbsp;&nbsp;
          <span className="text-[var(--color-text)]">{title}</span>
        </div>
        <div className="flex items-center gap-2 text-[var(--color-muted)]">
          <span
            className="w-[7px] h-[7px] rounded-full bg-[var(--color-accent)] flex-shrink-0"
            style={{ animation: "pulse 2.4s infinite" }}
          />
          {status}
        </div>
      </div>
    </nav>
  );
}
