import { Kicker } from "@/components/ui/Kicker";

const metrics = [
  {
    badge: "RESOLUTION LATENCY",
    stat: "< 200ms",
    body: "QR parsed and routing decision output before the user reads the merchant name.",
  },
  {
    badge: "WALLET-TO-WALLET",
    stat: "> 99%",
    body: "Internal Anchor ledger transfers. Near-perfect reliability by bypassing bank uptime.",
  },
  {
    badge: "TIME TO CONFIRM",
    stat: "< 3 seconds",
    body: "PIN entry to merchant alert dispatch. The standard every design decision defers to.",
  },
  {
    badge: "EXTERNAL PAYOUT",
    stat: "> 95%",
    body: "Async outbound bank payouts via Anchor. Accounted for in UX with async confirmation states.",
  },
];

export function MetricSection() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Success metrics</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            What good looks like, defined up front.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal">
          Quantified targets set before build — not retrofitted after. These are the numbers the
          product is designed around.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 reveal">
          {metrics.map((card) => (
            <div
              key={card.badge}
              className="flex flex-col gap-3 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] p-[var(--space-4xl)]"
            >
              <div className="font-mono text-[10px] tracking-[.06em] text-[var(--color-accent)]">
                {card.badge}
              </div>
              <h4 className="font-hanken font-bold text-[18px] tracking-[-0.01em] text-[var(--color-text)]">
                {card.stat}
              </h4>
              <p className="text-[14px] leading-[1.4] text-[var(--color-muted)]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
