import type { Metadata } from "next";
import { CaseHeader } from "@/components/case-study/CaseHeader";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { LiveAppFrame } from "@/components/case-study/LiveAppFrame";
import { Kicker } from "@/components/ui/Kicker";
import { LightboxImage } from "@/components/case-study/LightboxImage";
import { ImageCallouts } from "@/components/case-study/ImageCallouts";

export const metadata: Metadata = {
  title: "Oshap: Case Study · Haye",
  description:
    "A QR-first ordering and payment platform for restaurants and bars: designed and built end to end.",
};

// ── Screenshot tile ───────────────────────────────────────────────────────────
function Shot({
  src,
  label,
  rounded = 28,
  annotation,
}: {
  src: string;
  label: string;
  rounded?: number;
  annotation?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div
        style={{
          borderRadius: rounded,
          overflow: "hidden",
        }}
      >
        <LightboxImage
          src={src}
          alt={`Oshap ${label}`}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      {annotation && <ImageCallouts items={[annotation]} />}
    </div>
  );
}

// ── Inline section wrapper ────────────────────────────────────────────────────
function S({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">{children}</div>
    </section>
  );
}

export default function OshapPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseHeader
        eyebrow="QR Ordering & Payments · Restaurants & Bars"
        title="Oshap"
        status="Shipped MVP"
        tagline={
          <>
            A{" "}
            <em className="italic text-[var(--color-accent)]">
              QR-first ordering and payment platform
            </em>{" "}
            : customers scan, browse, order, and pay; staff manage the full operation
            through a role-gated admin app.
          </>
        }
        problem={
          <>
            Ordering in a busy bar means waiting for a waiter who is already carrying
            three tables. The venue loses covers to the queue, and the customer loses
            the round they would have bought.
          </>
        }
        outcomes={[
          { stat: "3", label: "shipped surfaces: customer web, admin PWA, platform portal" },
          { stat: "0", label: "app installs or logins required to order" },
          { stat: "MVP", label: "shipped and handed off to a backend team" },
        ]}
        meta={[
          { label: "Role", value: "Product Designer & Engineer · Founder" },
          { label: "Timeline", value: "2025 – present" },
          { label: "Team", value: "Solo: design → front-end" },
          { label: "Tools", value: "Vite 6 · React 19 · Tailwind v4" },
        ]}
        readMoreHref="/articles/oshap"
        readMoreLabel="Read the full case study"
      />

      {/* The live app, before any narrative. */}
      <LiveAppFrame />

      {/* ── 5 · Customer Journey ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Customer journey</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Scan → Browse → Order → Pay → Track.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal" style={{ maxWidth: "60ch" }}>
          The customer flow is five steps with no account creation, no redirects, and
          no dependency on staff to proceed. Three signature moves and a persistent
          notification center make it memorable.
        </p>

        {/* Signature moves */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 reveal">
          {[
            {
              label: "Order Together",
              tag: "GROUP ORDERING",
              body: "Any guest starts a shared table session; the backend generates a 4-digit PIN. Others join and merge their carts. The whole table sees one live tab and can pay individually or jointly.",
            },
            {
              label: "Call a Waiter",
              tag: "SERVICE BELL",
              body: "A persistent bell icon in every header. One tap fires a POST to /call-waiter → FCM push + audio chime on every admin device. The backend dedupes within 30 seconds so it never spams.",
            },
            {
              label: "Request a POS",
              tag: "CARD PAYMENT",
              body: "An alternative CTA on the pay screen. One tap → FCM push to staff; POS comes to the table. Uses the same admin verify handler as bank transfer; no separate flow on the backend.",
            },
          ].map((move) => (
            <div
              key={move.label}
              className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)]"
            >
              <div className="font-mono text-[10px] tracking-[.08em] uppercase text-[var(--color-accent)]">
                {move.tag}
              </div>
              <div className="font-hanken font-bold text-[16px] text-[var(--color-text)]">
                {move.label}
              </div>
              <p className="text-[14px] leading-[1.5] text-[var(--color-muted)]">{move.body}</p>
            </div>
          ))}
        </div>

        {/* Notification center callout */}
        <div
          className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] reveal"
        >
          <div className="font-mono text-[10px] tracking-[.08em] uppercase text-[var(--color-accent)]">
            Notification Center
          </div>
          <p className="text-[14px] leading-[1.5] text-[var(--color-body)]">
            A persistent bell icon in every customer header opens a notification feed backed by{" "}
            <code className="font-mono text-[13px] text-[var(--color-text)]">localStorage</code>{" "}
            (keyed per table). Every toast also writes an entry to the feed. Unread badge,
            mark-as-read, and clear-all. Survives page refresh within the same session.
          </p>
        </div>

        {/* Customer screen placeholders */}
        <div className="flex flex-col gap-3 reveal">
          <div className="font-mono text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)]">
            Customer screens
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Shot src="/assets/oshap/Menu.webp" label="Menu" annotation="Scan lands straight here — browse and add with no login between the guest and the food." />
            <Shot src="/assets/oshap/Cart-drawer.webp" label="Cart drawer" annotation="The cart is a drawer, not a page — you adjust the order without ever leaving the menu." />
            <Shot src="/assets/oshap/Pay-transfer.webp" label="Pay: transfer" annotation="Transfer-first, because that is how Nigerians actually pay — with a POS request one tap away." />
            <Shot src="/assets/oshap/Order-together.webp" label="Order Together" annotation="One shared tab on a 4-digit PIN — the table merges carts yet can still pay separately." />
            <Shot src="/assets/oshap/My-orders.webp" label="My Orders" annotation="The kitchen's live state, mirrored to the guest — no asking a waiter where the order is." />
            <Shot src="/assets/oshap/Notification.webp" label="Notification center" annotation="A per-table feed that survives refresh — every toast is kept, not lost the moment it fades." />
          </div>
        </div>
      </S>

      {/* ── 6 · Admin Surface ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Admin surface</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Individual logins. Six modules. Full visibility.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal" style={{ maxWidth: "60ch" }}>
          The admin app is a PWA, installable to the home screen; works on any tablet or
          phone a restaurant already owns. The Owner creates individual accounts for each
          staff member; access is scoped to their role. Multi-branch owners get a branch
          switcher in the nav — selecting a branch scopes all reads to that location.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal">
          {[
            {
              module: "Waiter Dashboard",
              route: "/",
              body: "Live table list updated in real time via SSE. Per-table: unpaid total, pending-payment total, Verify and Clear Table actions. Surfaces a low-stock chip when inventory is critical.",
            },
            {
              module: "Kitchen / Bar",
              route: "/kitchen",
              body: "All active orders in CREATED, PREPARING, READY. One tap moves an order forward. Customers see the same state change on their My Orders tab in real time.",
            },
            {
              module: "History",
              route: "/history",
              body: "Paginated CONFIRMED and CANCELLED orders. Per-page summary: confirmed count, cancelled count, page revenue. Filterable by table and date.",
            },
            {
              module: "Menu + Inventory",
              route: "/menu",
              body: "Add, edit, and remove menu items: name, price, category, description, image, availability, sort order. Inventory: per-item stock count and low-stock threshold; inline editor; auto-disable at zero stock.",
            },
            {
              module: "Analytics",
              route: "/analytics",
              body: "Revenue over time, popular items, peak hours, table performance, staff activity; date-range picker; CSV export. Owner only. Group view aggregates revenue across branches.",
            },
            {
              module: "Settings",
              route: "/settings",
              body: "General: restaurant info, operating hours, bank details, logo upload. Tables: add or remove. Staff (Owner only): create accounts, assign roles, edit, remove.",
            },
          ].map((mod) => (
            <div
              key={mod.module}
              className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)]"
            >
              <div className="flex items-center gap-3">
                <span className="font-hanken font-bold text-[16px] text-[var(--color-text)]">
                  {mod.module}
                </span>
                <span className="font-mono text-[10px] tracking-[.06em] text-[var(--color-muted)] border border-[var(--color-line)] rounded-full px-2 py-[2px]">
                  {mod.route}
                </span>
              </div>
              <p className="text-[14px] leading-[1.5] text-[var(--color-muted)]">{mod.body}</p>
            </div>
          ))}
        </div>

        {/* Push + PWA callout */}
        <div
          className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] reveal"
        >
          <div className="font-mono text-[10px] tracking-[.08em] uppercase text-[var(--color-accent)]">
            FCM Push + PWA
          </div>
          <p className="text-[14px] leading-[1.5] text-[var(--color-body)]">
            Seven push trigger types: new order, order ready, payment claimed, payment verified,
            table closed, waiter called, POS requested. When the admin app is open, an{" "}
            <code className="font-mono text-[13px] text-[var(--color-text)]">AlertCenter</code>{" "}
            intercepts FCM messages, plays a two-tone Web Audio chime (no asset file), and queues
            a toast. Service worker handles background OS notifications when the tab is hidden.
            The app is installable to home screen with{" "}
            <code className="font-mono text-[13px] text-[var(--color-text)]">display: standalone</code>.
          </p>
        </div>

        {/* Admin screen placeholders */}
        <div className="flex flex-col gap-3 reveal">
          <div className="font-mono text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)]">
            Admin screens
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Shot src="/assets/oshap/Dashboard.webp" label="Dashboard" rounded={12} annotation="Every active table live via SSE — unpaid and pending totals visible without refreshing." />
            <Shot src="/assets/oshap/Kitchen.webp" label="Kitchen" rounded={12} annotation="One tap moves an order forward, and the guest sees that same state change in real time." />
            <Shot src="/assets/oshap/History.webp" label="History" rounded={12} annotation="Settled orders with per-page revenue — the day's takings reconcile without a spreadsheet." />
            <Shot src="/assets/oshap/Menu-admin.webp" label="Menu + Inventory" rounded={12} annotation="Stock counts auto-disable an item at zero, so the menu can never sell what the kitchen lacks." />
            <Shot src="/assets/oshap/Analytics.webp" label="Analytics" rounded={12} annotation="Owner-only revenue, peak hours, and top items — the numbers that decide what to stock and staff." />
            <Shot src="/assets/oshap/Settings.webp" label="Settings" rounded={12} annotation="Role-gated controls: only the Owner creates accounts and assigns who can see what." />
          </div>
        </div>
      </S>

      {/* ── 6b · Platform Portal ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Platform portal</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            The third app: Oshap&apos;s own back-office.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal" style={{ maxWidth: "60ch" }}>
          Internal Oshap operators onboard tenant restaurants, manage subscription tiers,
          and monitor system health through a separate portal. Access is gated by an{" "}
          <code className="font-mono text-[13px] text-[var(--color-text)]">x-platform-token</code>{" "}
          header. The client gate is UX only; the backend must enforce it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 reveal">
          {[
            {
              module: "Dashboard",
              body: "Tenant overview and quick-onboard entry point. At-a-glance health across all restaurants on the platform.",
            },
            {
              module: "Restaurants",
              body: "Searchable, filterable tenant list. Each row links to a detail view for managing a single restaurant.",
            },
            {
              module: "Onboard",
              body: "Two-step wizard creating a new tenant via POST /platform/restaurants. Sets name, email, tier, and table count.",
            },
            {
              module: "Restaurant detail",
              body: "View tenant data; change subscription tier; activate or deactivate the restaurant.",
            },
            {
              module: "Subscriptions",
              body: "Tier and billing overview: FREE, STARTER, PRO, ENTERPRISE.",
            },
            {
              module: "Health",
              body: "System metrics: uptime, latency, error rate, active sessions via GET /platform/health.",
            },
          ].map((mod) => (
            <div
              key={mod.module}
              className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)]"
            >
              <span className="font-hanken font-bold text-[16px] text-[var(--color-text)]">
                {mod.module}
              </span>
              <p className="text-[14px] leading-[1.5] text-[var(--color-muted)]">{mod.body}</p>
            </div>
          ))}
        </div>
      </S>

      {/* ── 10 · Success Metrics ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Success metrics</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            One rule. Six measurements.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal" style={{ maxWidth: "60ch" }}>
          The headline metric is qualitative: faster than a waiter. These six
          measurements make it falsifiable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 reveal">
          {[
            {
              badge: "HEADLINE",
              stat: "Scan → order",
              body: "Time from QR scan to first order placed. The number Oshap is designed around.",
            },
            {
              badge: "CONVERSION",
              stat: "Scan → order rate",
              body: "Percentage of QR scans that result in at least one order placed: the funnel health metric.",
            },
            {
              badge: "PAYMENT",
              stat: "CLAIMED → CONFIRMED",
              body: "Verification latency for bank-transfer claims. How long customers wait after tapping 'I've sent the money'.",
            },
            {
              badge: "KITCHEN",
              stat: "CREATED → READY",
              body: "Kitchen throughput time. Measured per order; averaged per shift. The merchant's half of the speed promise.",
            },
            {
              badge: "REVENUE",
              stat: "Payment completion",
              body: "Percentage of PAYMENT_PENDING orders that reach CONFIRMED: the leakage metric.",
            },
            {
              badge: "VOLUME",
              stat: "Orders per table",
              body: "Average orders per table per day. Proxy for how deeply Oshap is embedded in the venue's operations.",
            },
          ].map((card) => (
            <div
              key={card.badge}
              className="flex flex-col gap-3 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] p-[var(--space-4xl)]"
            >
              <div className="font-mono text-[10px] tracking-[.06em] text-[var(--color-accent)]">
                {card.badge}
              </div>
              <h4 className="font-hanken font-bold text-[18px] tracking-[-0.01em] text-[var(--color-text)]">
                {card.stat}
              </h4>
              <p className="text-[14px] leading-[1.4] text-[var(--color-muted)]">{card.body}</p>
            </div>
          ))}
        </div>
      </S>
      <CaseStudyFooter
        nextHref="/articles/oshap"
        nextLabel="Read the full write-up"
        stat="MVP shipped · Backend handoff"
        colophonLeft="Oshap: Product Design & Engineering case study"
      />
    </div>
  );
}
