import { Badge } from "@/components/ui/Badge";

interface Decision {
  project: string;
  title: string;
  constraint: string;
  call: string;
  cost?: string;
}

// Mined from the case studies. Two lines each: the constraint, and the call.
const decisions: Decision[] = [
  {
    project: "Shappay",
    title: "Funding is not checkout",
    constraint:
      "Firing a real-time bank transfer on every scan inherited bank uptime, latency, fees, and redirects. Validation proved that bet couldn't hold mid-build.",
    call: "Decoupled funding from checkout. Banks are touched only when a user tops up their wallet; payments clear instantly against wallet balance.",
    cost: "Holding balances raises regulatory surface, ledger consistency work, and settlement complexity. Naming those costs is part of owning the call.",
  },
  {
    project: "Shappay",
    title: "Static QR first",
    constraint:
      "Dynamic QR infrastructure is expensive to build and operate, and an MVP doesn't need it to prove the loop.",
    call: "Ship a static merchant QR where the payer enters the amount. Print it once, accept money forever.",
  },
  {
    project: "Shappay",
    title: "Two addressing modes, one engine",
    constraint:
      "A QR-only model breaks peer-to-peer payments, where there is nothing physical to scan.",
    call: "Every user gets a name@shappay virtual address. QR codes and typed addresses resolve through the same engine.",
  },
  {
    project: "UI to JSON",
    title: "Optimize for what to discard",
    constraint:
      "Every export tool optimizes for completeness, producing noisy output that burns AI tokens and confuses the model.",
    call: "Built the opposite bet: a semantic representation defined by what it confidently throws away.",
  },
  {
    project: "UI to JSON",
    title: "Ship a plugin, not a demo",
    constraint:
      "A clean export only proves itself against messy, real files made by people who never expected a machine to read them.",
    call: "Shipped to the Figma Community so the output had to survive contact with files it was never designed around.",
  },
  {
    project: "Oshap",
    title: "No app, no login, no waiter",
    constraint:
      "Any download or sign-in step kills conversion at the table, where a hungry customer has zero patience.",
    call: "The QR opens a web app deep-linked to the table. Scan, browse, order, and pay by transfer, with nothing to install.",
  },
  {
    project: "Oshap",
    title: "Order together, like a real table",
    constraint:
      "People arrive in groups, read the menu at the same time, and hand the waiter one combined order. A separate cart per phone breaks that ritual.",
    call: "A shared table session: everyone at the table adds to one synced order and it is placed together, mirroring how groups actually order.",
  },
  {
    project: "Oshap",
    title: "One role-gated admin app over separate dashboards",
    constraint:
      "Staff cannot juggle several different tools per shift while the floor is busy.",
    call: "A single role-gated admin app spans kitchen, floor, and management, showing each person only what their role needs.",
  },
  {
    project: "NawNaw",
    title: "A separate model for tier-2 entry",
    constraint:
      "Sub-15-minute delivery economics do not transfer cleanly from tier-1 to tier-2 cities; the dark-store math changes.",
    call: "Designed a distinct market-entry approach for tier-2 instead of copy-pasting the tier-1 model into a market it doesn't fit.",
  },
  {
    project: "Flow",
    title: "The mark lives inside the wordmark",
    constraint:
      "Period-care branding defaults to either clinical or overly cute, and neither earns trust.",
    call: "A single leaf-droplet mark built into the wordmark around Cheerful Violet, carrying the system without leaning either way.",
  },
  {
    project: "This site",
    title: "The site is the proof",
    constraint:
      "Claiming to be a product designer and engineer is cheap; anyone can write it on a page.",
    call: "Hand-coded this site end to end (Next.js, Tailwind, GSAP) and labeled the stack, so the container is itself the evidence.",
  },
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <span className="font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-muted)]">
        {label}
      </span>
      <p className="font-hanken text-[15px] leading-[1.55] text-[var(--color-body)]">
        {children}
      </p>
    </div>
  );
}

export function DecisionLog() {
  return (
    <section className="relative z-[5]" style={{ padding: "8px 0 24px" }}>
      <div className="cs-wrap flex flex-col gap-5">
        {decisions.map((d, i) => (
          <article
            key={d.title}
            className="reveal flex flex-col gap-5 p-7 md:p-8 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-[3px] hover:bg-[var(--color-surface-2)]"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] tracking-[.06em] text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")} / DECISION
              </span>
              <Badge variant="neutral">{d.project}</Badge>
            </div>

            <h2
              className="font-hanken font-bold tracking-[-0.01em] text-[var(--color-text)]"
              style={{ fontSize: "clamp(20px,2.4vw,26px)", lineHeight: 1.18 }}
            >
              {d.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              <Field label="The constraint">{d.constraint}</Field>
              <Field label="The call">{d.call}</Field>
            </div>

            {d.cost && (
              <div className="pt-1 border-t border-[var(--color-line)]">
                <div className="pt-4">
                  <Field label="What it cost">{d.cost}</Field>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export const decisionCount = decisions.length;
