export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-mono text-[12px] tracking-[0] uppercase text-[var(--color-accent)]"
    >
      {children}
    </div>
  );
}
