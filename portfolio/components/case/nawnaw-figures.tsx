/**
 * Figures for the NawNaw case study, drawn from the numbers in the NawNaw-App repo:
 * CartContext.tsx (fee rules) and docs/decision-log.md D-020 (the recalibration), at commit 2c6a714.
 */

const MAX = 12000;
const pct = (n: number) => `${(n / MAX) * 100}%`;

const BANDS = [
  // Text colours keep 4.5:1 or more on each band.
  { from: 0, to: 3000, label: "Small-cart fee", note: "₦700 + ₦600 delivery", color: "#f4b740", ink: "#14210f" },
  { from: 3000, to: 9000, label: "Delivery fee", note: "₦600", color: "#9aa79a", ink: "#14210f" },
  { from: 9000, to: 12000, label: "Free delivery", note: "₦0", color: "#2f5f2b", ink: "#ffffff" },
];

const MARKS = [
  { at: 5700, label: "Floor ₦5,700" },
  { at: 9000, label: "Target ₦9,000" },
  { at: 12000, label: "Stretch ₦12,000" },
];

// Haye's wording (Docs/case-studies/nawnaw.md).
const ROWS = [
  ["Small-cart fee applies below", "₦2,000", "₦3,000", "Below ₦3,000, a 20% margin cannot cover the order's ₦600 delivery and packaging cost"],
  ["Small-cart fee", "₦700", "₦700", "Brings thin baskets closer to the ₦1,200 target contribution"],
  ["Delivery fee", "₦600", "₦600", "Covers the direct delivery and packaging cost"],
  ["Free delivery from", "₦5,000", "₦9,000", "Matches the target basket: even after covering delivery, the order still earns ₦1,200"],
];

/** The basket scale with the three cart states, the basket ladder, and the old free-delivery point. */
export function NawnawFeeLadderFigure() {
  return (
    <div className="flex flex-col gap-g27">
      <div className="flex flex-col gap-g10">
        <p className="font-mono text-label text-muted-foreground uppercase">Basket size, ₦0 to ₦12,000</p>
        {/* Bands: the three cart states. */}
        <div className="relative pt-g44">
          {/* The old free-delivery point, below the floor. */}
          <div className="absolute top-0 flex -translate-x-1/2 flex-col items-center" style={{ left: pct(5000) }}>
            <span className="rounded-full bg-[#b3261e] px-g6 py-px font-mono text-label whitespace-nowrap text-white">Old free delivery ₦5,000</span>
            <span aria-hidden className="h-g17 border-l-2 border-dashed border-[#b3261e]" />
          </div>
          <div className="flex h-g44 overflow-hidden rounded-md">
            {BANDS.map((b) => (
              <div key={b.label} className="flex min-w-0 flex-col justify-center px-g6" style={{ width: pct(b.to - b.from), background: b.color, color: b.ink }}>
                <span className="truncate text-caption font-semibold">{b.label}</span>
                <span className="truncate font-mono text-label">{b.note}</span>
              </div>
            ))}
          </div>
          {/* The basket ladder from the economics model. */}
          <div className="relative h-g44">
            {MARKS.map((m) => (
              <div
                key={m.label}
                className="absolute top-0 flex flex-col items-center"
                style={{ left: pct(m.at), transform: m.at === MAX ? "translateX(-100%)" : "translateX(-50%)" }}
              >
                <span aria-hidden className="h-g10 border-l-2 border-foreground" />
                <span className="font-mono text-label whitespace-nowrap text-foreground">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-body">
        <caption className="sr-only">The cart&apos;s fee rules, before and after the recalibration</caption>
        <thead>
          <tr className="border-b border-border font-mono text-label text-muted-foreground uppercase">
            <th className="py-g6 pr-g17 font-normal">Rule</th>
            <th className="py-g6 pr-g17 text-right font-normal">Was</th>
            <th className="py-g6 pr-g17 text-right font-normal">Now</th>
            <th className="py-g6 font-normal">Why</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([rule, was, now, why]) => (
            <tr key={rule} className="border-b border-border/60 align-top">
              <td className="py-g6 pr-g17 text-foreground-secondary">{rule}</td>
              <td className={`py-g6 pr-g17 text-right tabular-nums ${was !== now ? "text-muted-foreground line-through" : "text-foreground-secondary"}`}>{was}</td>
              <td className="py-g6 pr-g17 text-right font-medium tabular-nums text-foreground">{now}</td>
              <td className="py-g6 text-caption text-pretty text-foreground-secondary">{why}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
