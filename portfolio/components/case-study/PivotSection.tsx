import { Kicker } from "@/components/ui/Kicker";
import { FlowCard } from "@/components/case-study/FlowCard";

const tradeoffs = [
  { badge: "↑ REGULATORY SURFACE", body: "Storing value pulls in a sponsor-bank partnership and stronger compliance controls." },
  { badge: "↑ USER TRUST",         body: "Users now trust Shappay with balances — raising the bar on security and withdrawals." },
  { badge: "↑ LEDGER WORK",        body: "Internal balance tracking, ledger consistency, and failed-transfer recovery." },
  { badge: "↑ FLOAT & SETTLEMENT", body: "Liquidity movement, settlement timing, reversals, and reconciliation." },
];

export function PivotSection() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>The pivot</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Mid-build, the architecture was wrong. So I changed it.
          </h2>
        </div>

        <p className="font-hanken text-[20px] leading-[1.58] text-[var(--color-text)] reveal">
          The original plan: scan a QR, resolve the merchant, fire a real-time transfer straight
          from the payer&apos;s linked bank. Validation proved that bet couldn&apos;t hold.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 reveal">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-hanken font-bold text-[22px] tracking-[-0.01em] text-[var(--color-text)]">
              What testing revealed
            </h3>
            <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
              Providers like Mono DirectPay handle account linking, authorization, and payment
              initiation — but not persistent, real-time orchestration across multiple banks.
              Every payment would have inherited bank uptime, latency, high fees, and redirects.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-hanken font-bold text-[22px] tracking-[-0.01em] text-[var(--color-text)]">
              The re-architecture
            </h3>
            <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-text)]">
              Separate the two flows that were wrongly fused:{" "}
              <strong className="font-semibold">funding ≠ checkout.</strong>{" "}
              Banks are touched when a user funds their wallet — not on every scan. Payments
              execute against wallet balance. For a high volume transaction startup, this
              architecture fits perfectly.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-[18px] reveal">
          <FlowCard
            variant="before"
            label="BEFORE · FRAGILE"
            chips={["Scan", "Bank auth", "External redirect", "Settlement"]}
          />
          <FlowCard
            variant="after"
            label="AFTER · INSTANT"
            chips={["Scan", "Resolve", "Wallet debit", "Settlement"]}
          />
        </div>

        <h3 className="font-hanken font-bold text-[22px] tracking-[-0.01em] text-[var(--color-text)] reveal">
          The honest tradeoffs
        </h3>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal">
          Holding balances raises the bar — naming the costs is part of owning the decision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {tradeoffs.map((card) => (
            <div
              key={card.badge}
              className="flex flex-col gap-3 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] p-[var(--space-4xl)]"
            >
              <div className="font-mono text-[10px] tracking-[.06em] uppercase text-[var(--color-accent)]">
                {card.badge}
              </div>
              <p className="text-[14px] leading-[1.4] text-[var(--color-muted)]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
