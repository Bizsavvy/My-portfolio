import { Kicker } from "@/components/ui/Kicker";

export function ProblemStatement() {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>The problem</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Sending money should not require typing 10-digits all the time.
          </h2>
        </div>

        <div className="flex flex-col gap-4 reveal">
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-text)]">
            Most Nigerians hold multiple bank accounts across different banks. Every transfer
            means typing a 10-digit account number, choosing the right bank from a growing list,
            and hoping you got it right — multiplied across every account you own.
          </p>
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-text)]">
            It is the single most error-prone moment in everyday payments and it scales terribly
            to merchants, who have no terminal and no way to get paid except by dictating account
            details out loud. The rails to fix this already exist. NIBSS NQR is Nigeria&apos;s
            national interoperable QR standard, built on the same EMVCo spec that powers
            India&apos;s UPI QR. The standard was there. The experience and the resolution engine
            beneath it was not.
          </p>
        </div>
      </div>
    </section>
  );
}
