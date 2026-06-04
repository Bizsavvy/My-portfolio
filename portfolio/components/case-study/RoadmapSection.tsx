import { Kicker } from "@/components/ui/Kicker";
import { RoadmapItem } from "@/components/case-study/RoadmapItem";

export function RoadmapSection() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Roadmap</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            From a printed square to a payments platform.
          </h2>
        </div>

        <div>
          <RoadmapItem
            phase="NOW"
            title="Wallet-first MVP"
            status={{ label: "IN BUILD", now: true }}
            description="Link banks, fund wallet, pay by scanning a QR or typing name@shappay, settling to wallet or bank."
          />
          <RoadmapItem
            phase="NEXT"
            title="Dynamic QR"
            status={{ label: "ROADMAP" }}
            description="Amount embedded in the code for point-of-sale and one-tap checkout."
          />
          <RoadmapItem
            phase="THEN"
            title="Merchant tools · POS · Invoice QR"
            status={{ label: "ROADMAP" }}
            description="Payment links, invoice-bound codes, and a merchant dashboard with analytics."
          />
          <RoadmapItem
            phase="LATERAL"
            title="AI powered QR Soundbox"
            status={{ label: "ROADMAP" }}
            description="An AI powered QR Soundbox that reads out payment received, available in multiple Nigerian languages. Can also respond with transaction summary."
          />
        </div>
      </div>
    </section>
  );
}
