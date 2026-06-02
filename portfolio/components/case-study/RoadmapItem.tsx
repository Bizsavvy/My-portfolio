interface RoadmapItemProps {
  phase: string;
  title: string;
  status?: { label: string; now?: boolean };
  description: string;
}

export function RoadmapItem({ phase, title, status, description }: RoadmapItemProps) {
  return (
    <div
      className="road-item reveal"
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: 24,
        padding: "22px 0",
        borderBottom: "1px solid var(--color-line)",
        alignItems: "baseline",
      }}
    >
      <div className="font-mono text-[12px] text-[var(--color-accent)] tracking-[.04em]">
        {phase}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-[var(--space-md)]">
          <h4 className="font-hanken font-bold text-[18px] tracking-[-0.01em] text-[var(--color-text)]">
            {title}
          </h4>
          {status && (
            <span
              className={`font-mono text-[10px] tracking-[.06em] px-[9px] py-[3px] rounded-[var(--rad-2xl)] border ${
                status.now
                  ? "text-[var(--color-accent)] border-[var(--color-accent)]"
                  : "text-[var(--color-muted)] border-[var(--color-line)]"
              }`}
            >
              {status.label}
            </span>
          )}
        </div>
        <p className="text-[14px] leading-[1.4] text-[var(--color-muted)]">{description}</p>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .road-item { grid-template-columns: 1fr !important; gap: 6px !important; }
        }
      `}</style>
    </div>
  );
}
