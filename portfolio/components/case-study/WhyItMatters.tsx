import { Kicker } from "@/components/ui/Kicker";

export function WhyItMatters() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Why it matters</Kicker>
          <blockquote
            className="font-hanken font-normal tracking-[-0.01em] text-[var(--color-text)]"
            style={{ fontSize: "clamp(22px,2.8vw,30px)", lineHeight: 1.35 }}
          >
            An interoperable QR is{" "}
            <span className="text-[var(--color-accent)]">public infrastructure</span>, it bridges
            the digital divide instead of building another silo.
          </blockquote>
        </div>

        <div className="flex flex-col gap-4 reveal">
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            Interoperable QR is a form of Digital Public Infrastructure — the same pattern that
            took India&apos;s UPI from zero to billions of transactions. The CDPI specification
            is already in discussion with 30+ central banks, Nigeria among them.
          </p>
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            Shappay builds on NIBSS NQR as Nigeria&apos;s implementation and treats the design
            problem as: how do you make national-scale financial inclusion feel like scanning a
            square?
          </p>
        </div>
      </div>
    </section>
  );
}
