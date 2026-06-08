import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { LiveAppFrame } from "@/components/case-study/LiveAppFrame";
import { RoadmapItem } from "@/components/case-study/RoadmapItem";
import { Kicker } from "@/components/ui/Kicker";
import { LightboxImage } from "@/components/case-study/LightboxImage";

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
}: {
  src: string;
  label: string;
  rounded?: number;
}) {
  return (
    <div
      style={{
        borderRadius: rounded,
        overflow: "hidden",
        border: "1px solid var(--color-line)",
        background: "var(--color-surface)",
      }}
    >
      <LightboxImage
        src={src}
        alt={`Oshap ${label}`}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
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

// ── State machine diagram ─────────────────────────────────────────────────────
function StateDiagram({ title, diagram }: { title: string; diagram: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-mono text-[11px] tracking-[.1em] uppercase text-[var(--color-muted)]">
        {title}
      </div>
      <pre
        className="font-mono text-[13px] text-[var(--color-body)]"
        style={{
          lineHeight: 1.75,
          padding: "22px 24px",
          background: "var(--color-surface)",
          border: "1px solid var(--color-line)",
          borderRadius: 12,
          overflowX: "auto",
        }}
      >
        {diagram}
      </pre>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function OshapPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>

      {/* ── 1 · Hero ── */}
      <CaseStudyHero
        eyebrow="QR Ordering & Payments · Restaurants & Bars"
        title="Oshap"
        lede={
          <>
            A{" "}
            <em className="italic text-[var(--color-accent)]">
              QR-first ordering and payment platform
            </em>{" "}
            : customers scan, browse, order, and pay; staff manage the full
            operation through a role-gated admin app; and Oshap operators
            onboard venues through a separate platform portal.
          </>
        }
        meta={[
          { label: "Role",     value: "Design Engineer & Founder" },
          { label: "Scope",    value: "Product design → frontend" },
          { label: "Apps",     value: "Customer Web App · Admin PWA · Platform Portal" },
          { label: "Stack",    value: "Vite 6 · React 19 · Tailwind v4 · Vitest" },
          { label: "Platform", value: "Web · Mobile-first" },
          { label: "Year",     value: "2025–present" },
        ]}
        status="MVP shipped · Backend handoff"
      />

      {/* ── 2 · The Problem ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>The problem</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Restaurants run on shouting, paper, and lost revenue.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3 reveal">
          {[
            {
              who: "Guest",
              items: [
                "Waits to catch a waiter's eye",
                "Repeats the order aloud",
                "Has no idea where it is in the kitchen",
                "Chases the bill at the end, sometimes twice",
              ],
            },
            {
              who: "Merchant",
              items: [
                "Order errors from manual capture",
                "Payment leakages: unclaimed bills, disputed cash",
                "No live visibility into active tables",
                "Kitchen and front-of-house running on shouting",
              ],
            },
          ].map(({ who, items }) => (
            <div
              key={who}
              className="flex flex-col gap-4 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)]"
            >
              <div className="font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-accent)]">
                {who}
              </div>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-[1.45] text-[var(--color-body)]"
                  >
                    <span className="text-[var(--color-muted)] mt-[2px] flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </S>

      {/* ── 3 · The Bet ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>The core bet</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Faster than calling a waiter.
          </h2>
        </div>

        <p className="font-hanken text-[20px] leading-[1.58] text-[var(--color-text)] reveal">
          That is the entire success criterion, defined before a single screen was
          designed. Every UX decision, every state machine, every architectural
          trade-off defers to this rule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 reveal">
          {[
            {
              badge: "01 / DECISION",
              title: "QR-first entry",
              body: "No app download, no login, no account. The table QR is the entry point. Scan → menu in under two seconds on 3G.",
            },
            {
              badge: "02 / DECISION",
              title: "Zero-auth guest",
              body: "Customers are anonymous. A UUID device_token in sessionStorage scopes cart and orders per browser tab. Zero friction, zero forms.",
            },
            {
              badge: "03 / DECISION",
              title: "One staff surface",
              body: "Individual logins (email & password) created by the Owner. Role-based access: Owner, Manager, Cashier, Waiter, Kitchen, Bartender, each scoped to what they need.",
            },
          ].map((card) => (
            <div
              key={card.badge}
              className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)] transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-[3px] hover:bg-[var(--color-surface-2)]"
            >
              <div className="font-mono text-[10px] tracking-[.06em] uppercase text-[var(--color-accent)]">
                {card.badge}
              </div>
              <h3 className="font-hanken font-bold text-[18px] tracking-[-0.01em] text-[var(--color-text)]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.4] text-[var(--color-muted)]">{card.body}</p>
            </div>
          ))}
        </div>
      </S>

      {/* ── 4 · Live Demo ── */}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <Shot src="/assets/oshap/Menu.png" label="Menu" />
            <Shot src="/assets/oshap/Cart-drawer.png" label="Cart drawer" />
            <Shot src="/assets/oshap/Pay-transfer.png" label="Pay: transfer" />
            <Shot src="/assets/oshap/Order-together.png" label="Order Together" />
            <Shot src="/assets/oshap/My-orders.png" label="My Orders" />
            <Shot src="/assets/oshap/Notification.png" label="Notification center" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Shot src="/assets/oshap/Dashboard.png" label="Dashboard" rounded={12} />
            <Shot src="/assets/oshap/Kitchen.png" label="Kitchen" rounded={12} />
            <Shot src="/assets/oshap/History.png" label="History" rounded={12} />
            <Shot src="/assets/oshap/Menu-admin.png" label="Menu + Inventory" rounded={12} />
            <Shot src="/assets/oshap/Analytics.png" label="Analytics" rounded={12} />
            <Shot src="/assets/oshap/Settings.png" label="Settings" rounded={12} />
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

      {/* ── 7 · State Machines ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Systems & lifecycles</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Three state machines under the surface.
          </h2>
        </div>

        <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal" style={{ maxWidth: "60ch" }}>
          Order integrity is the hard constraint. No duplicate orders, no lost orders,
          no terminal states you can&apos;t recover from. Every state has a single owner and
          a defined transition trigger.
        </p>

        <div className="flex flex-col gap-6 reveal">
          <StateDiagram
            title="Order lifecycle"
            diagram={`CREATED ──► PREPARING ──► READY
   │                               │
   │   (customer claims payment)   │
   └────────► PAYMENT_PENDING ◄───┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      CONFIRMED           CANCELLED
   (admin verified)    (abandoned / force-close)`}
          />

          <StateDiagram
            title="Payment lifecycle"
            diagram={`NOT_PAID ──► CLAIMED ──► VERIFIED   (admin manual verify)
                    │
                    └──► CONFIRMED  (auto on order confirm)`}
          />

          <StateDiagram
            title="Session lifecycle"
            diagram={`ACTIVE ──► CLOSED
           (admin closes table, or all session orders are paid)`}
          />
        </div>

        <div className="flex flex-col gap-2 reveal">
          <div className="font-mono text-[11px] tracking-[.08em] uppercase text-[var(--color-muted)]">
            Reference format
          </div>
          <code
            className="font-mono text-[14px] text-[var(--color-text)]"
            style={{
              padding: "14px 18px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-line)",
              borderRadius: 10,
              display: "block",
            }}
          >
            OSHAP-{"{tableId}"}-{"{4-digit-random}"}
            <span className="text-[var(--color-muted)] text-[12px] ml-4">
              ; order ref · bank-transfer reconciliation ref · one and the same
            </span>
          </code>
        </div>
      </S>

      {/* ── 8 · Real-time, honestly ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Real-time, honestly</Kicker>
          <blockquote
            className="font-hanken font-normal tracking-[-0.01em] text-[var(--color-text)]"
            style={{ fontSize: "clamp(22px,2.8vw,30px)", lineHeight: 1.35 }}
          >
            True real-time via{" "}
            <span className="text-[var(--color-accent)]">SSE + push</span>: instant
            updates without the overhead of WebSockets.
          </blockquote>
        </div>

        <div className="flex flex-col gap-4 reveal">
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            Live screens (the waiter dashboard, the pay page, My Orders) subscribe to
            a server-sent events stream. State changes push instantly from the backend the
            moment they happen, with no client polling loop.
          </p>
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            FCM push covers the instants that feel urgent: new order, waiter called,
            POS requested. When the admin tab is hidden the service worker shows OS
            notifications. When it&apos;s open the{" "}
            <code className="font-mono text-[14px] text-[var(--color-text)]">AlertCenter</code>{" "}
            fires a chime and queues a toast.
          </p>
        </div>
      </S>

      {/* ── 9 · Tech & Design System ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Stack</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            Three apps. One shared package. One token source.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal">
          {[
            {
              item: "Vite 6 + React 19 + TypeScript",
              note: "Modern SPA build per app inside an npm workspaces monorepo: `apps/customer`, `apps/admin`, `apps/platform`, `packages/shared`.",
            },
            {
              item: "Tailwind CSS v4",
              note: "CSS-first `@theme` block in `packages/shared/src/tokens/tokens.css`; single design token source. Semantic utilities auto-swap on OS dark-mode preference.",
            },
            {
              item: "TanStack Query v5 + SSE",
              note: "Server-sent events for live screens: instant push from backend, no polling. Typed `fetch` wrappers in `packages/shared`. Optimistic cart updates.",
            },
            {
              item: "Firebase Cloud Messaging",
              note: "Admin web push, foreground + background. Seven trigger types. Web Audio two-tone chime; no asset file.",
            },
            {
              item: "React Router v7",
              note: "SPA routing per app. `vercel.json` SPA fallback handles deep links on Vercel static deploy.",
            },
            {
              item: "Admin PWA",
              note: "Installable to home screen: `display: standalone`, manifest, maskable icon, iOS apple-touch-icon. No offline data cache (dashboard needs live state).",
            },
            {
              item: "Vitest + jsdom",
              note: "Data-layer test suite covering mock-API handlers, shared utilities, and TanStack Query integration. Tree-shaken from production builds.",
            },
          ].map(({ item, note }) => (
            <div
              key={item}
              className="flex flex-col gap-2 p-5 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[var(--rad-lg)]"
            >
              <div className="font-hanken font-bold text-[15px] text-[var(--color-text)]">
                {item}
              </div>
              <p className="text-[13px] leading-[1.5] text-[var(--color-muted)]">{note}</p>
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

      {/* ── 11 · Roadmap ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Roadmap</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            From a printed QR to a restaurant OS.
          </h2>
        </div>

        <div>
          <RoadmapItem
            phase="NOW"
            title="Extended MVP shipped"
            status={{ label: "BACKEND HANDOFF", now: true }}
            description="Customer app (with notification center), admin PWA (six modules: dashboard, kitchen, history, menu + inventory, analytics, settings), platform portal, shared package, OpenAPI contract, DDL: all shipped. Backend team wires FastAPI against the spec."
          />
          <RoadmapItem
            phase="NEXT"
            title="Pilot venues"
            status={{ label: "ROADMAP" }}
            description="Deploy to 1–2 restaurants. Monitor scan-to-order conversion, verification latency, kitchen throughput, and payment completion rate."
          />
          <RoadmapItem
            phase="THEN"
            title="Payment gateways"
            status={{ label: "ROADMAP" }}
            description="Paystack or Flutterwave card payments and a tip flow. No separate payment flow on the backend — same verify handler."
          />
          <RoadmapItem
            phase="LATER"
            title="CRM · Loyalty · Reservations · Native"
            status={{ label: "ROADMAP" }}
            description="Loyalty system, customer profiles, repeat-order recommendations, pre-ordering, reservations, and optional native mobile wrappers."
          />
        </div>
      </S>

      {/* ── 12 · Reflection ── */}
      <S>
        <div className="flex flex-col gap-4 reveal">
          <Kicker>Reflection</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            What designing for a venue taught me.
          </h2>
        </div>

        <div className="flex flex-col gap-4 reveal">
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            The temptation in hospitality tech is to solve for the happy path:
            customer who knows what they want, places their order in thirty seconds, and
            pays immediately. That customer is maybe 20% of a restaurant. The other 80%
            are groups negotiating, people who order in rounds, customers who need to
            flag a waiter mid-meal, tables that share a bill and split it unevenly.
          </p>
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            Order Together, Request-a-POS, and the service bell exist because I refused
            to design only for the happy path. The state machines exist because payment
            integrity is non-negotiable: a missing CONFIRMED state or a duplicate order
            means real money lost by a real business.
          </p>
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]">
            The hardest constraint was the zero-auth guest. Every session-management
            pattern I reached for assumed an authenticated user. Designing around a
            disposable UUID that lives in sessionStorage; making group ordering
            work on top of that changed how I think about identity at the boundary
            between anonymous public access and shared real-time state.
          </p>
        </div>
      </S>

      {/* ── 13 · Footer ── */}
      <CaseStudyFooter
        nextHref="/work/nawnaw"
        nextLabel="NawNaw"
        stat="3 apps · 1 shared package · backend pending"
        colophonLeft="Oshap: Design Engineering case study"
      />
    </div>
  );
}
