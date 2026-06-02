import { Kicker } from "@/components/ui/Kicker";

const cards = [
  {
    badge: "01 / DECISION",
    title: "Static QR first",
    body: "The MVP ships a static merchant QR where the payer enters the amount. The cheapest path to a working loop; print it once, accept money forever.",
  },
  {
    badge: "02 / DECISION",
    title: "Two addressing modes",
    body: "Every user gets a name@shappay virtual address — so P2P payments work by typing an ID, not only scanning. QR and VPA resolve through the same engine.",
  },
  {
    badge: "03 / DECISION",
    title: "Wallet-first execution",
    body: "Funding and checkout are decoupled. Banks are touched once, topping up via Mono not on every payment. Checkout clears against wallet balance.",
  },
];

export function CoreBet() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>The core bet</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            One scan or one ID replaces the entire ritual.
          </h2>
        </div>

        <p className="font-hanken text-[20px] leading-[1.58] text-[var(--color-text)] reveal">
          Shappay&apos;s central design decision: remove manual entry completely. Scan a QR or
          type a name@shappay address, and the resolution engine already knows who to pay and on
          which rail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 reveal">
          {cards.map((card) => (
            <div
              key={card.badge}
              className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-[3px] hover:bg-[var(--color-surface-2)]"
            >
              <div className="font-mono text-[10px] tracking-[.06em] uppercase text-[var(--color-accent)]">
                {card.badge}
              </div>
              <h3 className="font-hanken font-bold text-[18px] tracking-[-0.01em] text-[var(--color-text)]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.4] text-[var(--color-muted)]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
