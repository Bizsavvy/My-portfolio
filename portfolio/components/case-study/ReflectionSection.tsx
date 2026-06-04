import { Kicker } from "@/components/ui/Kicker";

export function ReflectionSection() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>Reflection</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            What designing the engine taught me.
          </h2>
        </div>

        <div className="flex flex-col gap-4 reveal">
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            The temptation in fintech is to design the screens and treat the rails as someone
            else&apos;s problem. Shappay only works because I refused that split. Understanding
            the TLV format changed the product: static-first stopped being a compromise and became
            the obvious wedge.
          </p>
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            The hardest decisions weren&apos;t visual; the most important was admitting the
            first architecture was wrong. Re-drawing the line between funding and checkout,
            choosing to hold a wallet, deciding where settlement lands: those are the calls that
            turned a fragile demo into something shippable.
          </p>
        </div>
      </div>
    </section>
  );
}
