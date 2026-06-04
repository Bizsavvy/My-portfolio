const rows = [
  { k: "Building", v: "Shappay: wallet-first QR" },
  { k: "Shipping", v: "UI to JSON · 170+ users" },
  { k: "Based in", v: "Abuja, NG · remote-friendly" },
  { k: "Open to",  v: "Roles · contract · worldwide" },
];

export function NowCard() {
  return (
    <div
      className="nowcard w-full max-w-full md:max-w-[360px] h-full flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--rad-xl)] p-[var(--space-6xl)]"
    >
      <div className="flex items-center gap-[var(--space-sm)] ts-mono-label text-[var(--color-text-muted)] mb-[var(--space-3xl)]">
        <span
          className="inline-block rounded-[var(--rad-xs)] bg-[var(--color-accent)]"
          style={{ width: 8, height: 8 }}
        />
        CURRENTLY
      </div>

      <div className="flex flex-col">
        {rows.map(({ k, v }) => (
          <div
            key={k}
            className="nowrow flex justify-between gap-4 py-[13px] border-b border-[var(--color-border)] last:border-b-0"
          >
            <span className="ts-caption text-[var(--color-text-muted)]">{k}</span>
            <span className="ts-caption-medium text-[var(--color-text-primary)] text-right">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
