import { Kicker } from "@/components/ui/Kicker";

export interface FlowStep {
  /** Short stage label, e.g. "Scan" or "First attempt". */
  stage: string;
  /** One line on what this screen does or what changed and why. */
  annotation: string;
  /** Screen image. Omit to render a labelled placeholder tile. */
  img?: string;
}

interface FlowStripProps {
  kicker?: string;
  heading?: string;
  description?: string;
  steps: FlowStep[];
}

// Horizontal strip of screens with a one-line annotation between each.
// Works for a user flow (Scan → Resolve → Confirm) or one screen across
// stages (first attempt → what testing revealed → final).
export function FlowStrip({
  kicker = "The flow",
  heading,
  description,
  steps,
}: FlowStripProps) {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>{kicker}</Kicker>
          {heading && (
            <h2
              className="font-hanken font-bold tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
            >
              {heading}
            </h2>
          )}
        </div>

        {description && (
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal">
            {description}
          </p>
        )}

        <div className="reveal flex gap-4 md:gap-3 overflow-x-auto pb-3 -mx-1 px-1">
          {steps.map((step, i) => (
            <div key={step.stage} className="flex items-stretch gap-4 md:gap-3 shrink-0">
              <figure className="flex flex-col gap-4 w-[210px] shrink-0">
                {step.img ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={step.img}
                    alt={`${step.stage} screen`}
                    className="w-full rounded-[18px] border border-[var(--color-line)] bg-[var(--color-surface)]"
                    style={{ aspectRatio: "9 / 19", objectFit: "cover", display: "block" }}
                  />
                ) : (
                  <div
                    className="flex items-center justify-center w-full rounded-[18px] border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)]"
                    style={{ aspectRatio: "9 / 19" }}
                  >
                    <span className="font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-muted)]">
                      {step.stage}
                    </span>
                  </div>
                )}
                <figcaption className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")} · {step.stage}
                  </span>
                  <span className="font-hanken text-[13px] leading-[1.5] text-[var(--color-body)]">
                    {step.annotation}
                  </span>
                </figcaption>
              </figure>

              {i < steps.length - 1 && (
                <div className="flex items-center pt-[20%] text-[var(--color-muted)] font-mono text-[16px]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
