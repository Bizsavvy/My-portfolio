import { Kicker } from "@/components/ui/Kicker";
import { DemoWidget } from "@/components/case-study/DemoWidget";

export function QrEngineDemo() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Demo · The format</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            This is the payload, built in real time.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal">
          Every NQR code is an EMVCo TLV string: a chain of Tag · Length · Value triplets sealed
          with a CRC-16 checksum. This demo builds one as you type, so you can read the format.
          It runs on this page. NQR support in the Shappay app is planned.
        </p>

        <DemoWidget />
      </div>
    </section>
  );
}
