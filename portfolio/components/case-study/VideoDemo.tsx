import { Kicker } from "@/components/ui/Kicker";

export function VideoDemo() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Experience</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            See it in motion.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal">
          A 90-second walkthrough of the core payment loop — scan, resolve, and settle. Running
          on the actual React Native build.
        </p>

        <div className="flex items-center justify-center rounded-[var(--rad-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] h-[300px] md:h-[520px] reveal">
          <button
            className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[var(--color-accent)] transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Play demo video"
          >
            <svg width="24" height="28" viewBox="0 0 24 28" aria-hidden="true">
              <polygon points="2,0 24,14 2,28" fill="var(--color-on-accent)" />
            </svg>
          </button>
        </div>

        <p className="font-mono text-[10px] tracking-[.05em] text-[var(--color-muted)] reveal">
          Scan → Resolve → Wallet debit → Confirmation
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-[10px] reveal">
          <a
            href="#"
            className="inline-flex items-center justify-center px-[26px] py-[14px] rounded-full bg-[var(--color-accent)] font-mono font-medium text-[14px] tracking-[.04em] text-[var(--color-on-accent)] transition-all duration-[280ms] hover:-translate-y-0.5 whitespace-nowrap"
          >
            Try the live demo →
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-[26px] py-[14px] rounded-full border border-[var(--color-border-strong)] font-mono text-[12px] text-[var(--color-text)] transition-colors duration-[250ms] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] whitespace-nowrap"
          >
            Open in Expo Go
          </a>
          <span className="font-hanken text-[14px] leading-[1.6] text-[var(--color-muted)]">
            Scan the QR with Expo Go to run the real app on your phone
          </span>
        </div>
      </div>
    </section>
  );
}
