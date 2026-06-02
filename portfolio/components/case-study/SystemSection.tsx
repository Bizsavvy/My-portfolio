import { Kicker } from "@/components/ui/Kicker";

const archNodes = [
  {
    index: "→ 01",
    title: "Identity Layer",
    body: "EMVCo / NQR payload generation and parsing, plus name@shappay VPA addressing — two ways to identify any destination.",
  },
  {
    index: "→ 02",
    title: "Resolution Layer",
    body: "Merchant and account resolution, settlement-preference routing, and rail selection.",
  },
  {
    index: "→ 03",
    title: "Execution Layer",
    body: "Wallet infrastructure, bank transfer rails, and settlement execution.",
  },
];

const routingCards = [
  {
    badge: "CASE A · FAST PATH",
    title: "Shappay → Shappay",
    body: "Destination has a Shappay wallet. Execute instant ledger transfer on Anchor — wallet to wallet. Highest success rate, lowest latency.",
  },
  {
    badge: "CASE B · PAYOUT PATH",
    title: "Shappay → External bank",
    body: "Destination is an external merchant. Debit customer wallet on Anchor, trigger async outbound payout to merchant's bank account.",
  },
  {
    badge: "CASE C · FALLBACK",
    title: "Unsupported QR scheme",
    body: "QR payload cannot be resolved. Surface manual bank transfer entry screen — always a path forward, never a dead end.",
  },
];

export function SystemSection() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="max-w-[var(--width-maxw)] mx-auto px-[var(--space-16xl)] flex flex-col gap-6">
        <div className="reveal">
          <Kicker>Systems</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Three layers, one loop.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal">
          The pivot resolved into a clean separation of concerns. Being able to build each layer
          is what let me design the UX around its real constraints.
        </p>

        <div className="flex rounded-[var(--rad-xl)] border border-[var(--color-line)] overflow-hidden reveal">
          {archNodes.map((node, i) => (
            <div
              key={node.index}
              className={`flex-1 flex flex-col gap-3 py-[26px] px-[22px] bg-[var(--color-surface)] ${
                i < archNodes.length - 1 ? "border-r border-[var(--color-line)]" : ""
              }`}
            >
              <div className="font-mono text-[10px] tracking-[.05em] text-[var(--color-accent)]">
                {node.index}
              </div>
              <h4 className="font-hanken font-bold text-[18px] tracking-[-0.01em] text-[var(--color-text)]">
                {node.title}
              </h4>
              <p className="text-[14px] leading-[1.4] text-[var(--color-muted)]">{node.body}</p>
            </div>
          ))}
        </div>

        <p className="font-mono text-[12px] tracking-[.04em] text-center text-[var(--color-muted)] reveal">
          scan / VPA → resolve → wallet debit → settlement
        </p>

        <p className="font-hanken text-[14px] leading-[1.6] text-[var(--color-muted)] reveal">
          Funding via Mono DirectPay. Wallet, ledger, and outbound payouts via Anchor.
        </p>

        <h3 className="font-hanken font-bold text-[22px] tracking-[-0.01em] text-[var(--color-text)] reveal">
          Routing rules
        </h3>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal">
          The resolution engine outputs a routing decision on every transaction. Three cases,
          evaluated in order:
        </p>

        <div className="flex gap-3 reveal">
          {routingCards.map((card) => (
            <div
              key={card.badge}
              className="flex-1 flex flex-col gap-3 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] p-[var(--space-4xl)]"
            >
              <div className="font-mono text-[10px] tracking-[.06em] text-[var(--color-accent)]">
                {card.badge}
              </div>
              <h4 className="font-hanken font-bold text-[18px] tracking-[-0.01em] text-[var(--color-text)]">
                {card.title}
              </h4>
              <p className="text-[14px] leading-[1.4] text-[var(--color-muted)]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
