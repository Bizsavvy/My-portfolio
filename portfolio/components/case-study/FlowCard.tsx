interface FlowCardProps {
  variant: "before" | "after";
  label: string;
  chips: string[];
}

export function FlowCard({ variant, label, chips }: FlowCardProps) {
  const isAfter = variant === "after";
  return (
    <div
      className={`flow border rounded-[14px] p-[18px_22px] bg-[var(--color-surface)] ${
        isAfter ? "border-[var(--color-legacy-accent)]" : "border-[var(--color-line)]"
      }`}
    >
      <span
        className={`flow-tag font-mono text-[11px] tracking-[.1em] uppercase block mb-[14px] ${
          isAfter ? "text-[var(--color-legacy-accent)]" : "text-[var(--color-text-muted)]"
        }`}
      >
        {label}
      </span>
      <div className="chips flex flex-wrap items-center gap-[8px_12px]">
        {chips.map((chip, i) => (
          <span key={i} className="flex items-center gap-[12px]">
            <span
              className={`font-mono text-[12px] px-[14px] py-2 border rounded-[8px] ${
                isAfter
                  ? "text-[var(--color-text)] border-[var(--color-legacy-accent)]"
                  : "text-[var(--color-text-muted)] border-[var(--color-line-strong)]"
              }`}
            >
              {chip}
            </span>
            {i < chips.length - 1 && (
              <span className="text-[var(--color-text-muted)] font-mono text-[12px]">→</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
