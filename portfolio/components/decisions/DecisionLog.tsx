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
    title: "Serve the affluent customer, by arithmetic not taste",
    constraint:
      "In Nigeria's big cities, operating cost (rent, power, overhead) runs higher than India's while shopper spending power runs lower. Mass-market baskets are too small to support 15-minute delivery economics.",
    call: "Target the tier-1, convenience-paying customer who already values twenty minutes over a few hundred naira. The choice of who to serve fell straight out of the economics, and quietly decided everything downstream.",
  },
  {
    project: "NawNaw",
    title: "Sell time and convenience, not price",
    constraint:
      "The moment you teach this customer to hunt for discounts, you start a fight the margins can't win.",
    call: "Lead with speed and proximity everywhere; the home screen's top line shows the delivery time and store distance, not a sale banner. The customer is paying for speed, so the product talks about speed.",
  },
  {
    project: "NawNaw",
    title: "Surface the want; don't make people hunt",
    constraint:
      "For the youngest, most frequent shoppers most orders are unplanned. They open the app because they remembered they're out of something, not with a list, so an empty search box is the wrong tool.",
    call: "The home screen shows aisles, not products: each aisle a 2x2 peek of what's inside. You read the whole store in a glance and tap straight to it, while the catalog gently tempts the impulse buyer.",
  },
  {
    project: "NawNaw",
    title: "Optimize for monthly customer value, not the biggest basket",
    constraint:
      "The easy way to lift average order value is to discourage small orders, but small frequent orders are exactly the habit that keeps a customer coming back. Push too hard and you win the order while losing the customer.",
    call: "Design toward what a customer is worth over a month, order size and frequency together. The cart nudges baskets upward gently instead of bullying them.",
  },
  {
    project: "NawNaw",
    title: "Offer an account, never force one",
    constraint:
      "Asking who someone is should never stand between them and the thing they came to buy. A sign-up wall at the door kills speed.",
    call: "Guests shop straight past the sign-up screen. Identity is collected only at the one moment it matters, placing the order, and only the minimum a delivery needs (phone, name, address), as a sheet over checkout so no one loses their place.",
  },
  {
    project: "NawNaw",
    title: "The wait is part of the product",
    constraint:
      "The fifteen minutes between paying and opening the door is where the promise either feels kept or doesn't. It is not dead time to hide behind a spinner.",
    call: "Show the order moving through real stages (accepted, packed, on the way) with a live countdown on screen, making the brand's whole claim visible and accountable.",
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
