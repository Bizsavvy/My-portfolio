export function Sechead() {
  return (
    <div className="sechead flex justify-between items-end gap-6 flex-wrap">
      <div className="flex flex-col gap-[var(--space-lg)]">
        <span className="ts-mono-label text-[var(--color-accent)] leading-[1.4]">
          selected work
        </span>
        <h2 className="ts-project-name-sm text-[var(--color-text)] text-[clamp(26px,3.33vw,48px)] leading-[1.1]">
          Things I designed,
          <br />
          then shipped.
        </h2>
      </div>
      <p className="ts-body text-[var(--color-muted)] text-right leading-[1.6] max-w-[320px]">
        Not static mockups; products designed, coded, and made ready for backend integration.
      </p>
    </div>
  );
}
