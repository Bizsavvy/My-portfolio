import { Kicker } from "@/components/ui/Kicker";
import { DemoWidget } from "@/components/case-study/DemoWidget";

export function QrEngineDemo() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="max-w-[var(--width-maxw)] mx-auto px-[var(--space-16xl)] flex flex-col gap-6">
        <div className="reveal">
          <Kicker>Live · The engine</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            This is the payload, built in real time.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal">
          Every NQR code is an EMVCo TLV string — a chain of Tag · Length · Value triplets sealed
          with a CRC-16 checksum. In the live build this regenerates as you type; here is the
          engine&apos;s output for a static merchant code.
        </p>

        <DemoWidget />
      </div>
    </section>
  );
}
