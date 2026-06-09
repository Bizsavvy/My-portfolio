import Link from "next/link";

interface CaseStudyNavbarProps {
  title: string;
  status?: string;
  parentLabel?: string;
  parentHref?: string;
}

export function CaseStudyNavbar({
  title,
  status = "In development · MVP",
  parentLabel = "Work",
  parentHref = "/#work",
}: CaseStudyNavbarProps) {
  return (
    <nav className="relative z-[5] py-[28px] font-mono text-[12px] tracking-[.04em]">
      <div className="cs-wrap flex justify-between items-center">
        <div className="text-[var(--color-muted)]">
          <Link
            href={parentHref}
            className="hover:text-[var(--color-accent)] transition-colors duration-[250ms]"
          >
            {parentLabel}
          </Link>
          &nbsp;&nbsp;/&nbsp;&nbsp;
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
