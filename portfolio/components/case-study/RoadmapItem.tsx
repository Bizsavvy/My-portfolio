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
      <div className="phase font-mono text-[12px] text-[var(--color-accent)] tracking-[.06em]">
        {phase}
      </div>
      <div>
        <h4 className="font-hanken font-bold text-[20px] tracking-[-0.01em] mb-[6px]">
          {title}
          {status && (
            <span
              className={`inline-block font-mono text-[10px] tracking-[.08em] uppercase px-[9px] py-[3px] rounded-[20px] border ml-[10px] align-middle ${
                status.now
                  ? "text-[var(--color-accent)] border-[var(--color-accent)]"
                  : "text-[var(--color-muted)] border-[var(--color-line-strong)]"
              }`}
            >
              {status.label}
            </span>
          )}
        </h4>
        <p className="text-[14.5px] text-[var(--color-muted)] m-0 max-w-[60ch]">{description}</p>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .road-item { grid-template-columns: 1fr !important; gap: 6px !important; }
        }
      `}</style>
    </div>
  );
}
