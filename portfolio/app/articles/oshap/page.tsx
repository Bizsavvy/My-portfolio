import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";
import { RoadmapItem } from "@/components/case-study/RoadmapItem";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "No app, no login, no waiter · Haye",
  description:
    "The written version of Oshap: the three-surface problem, the order and payment state machines, and what shipping an MVP without a backend team actually cost.",
};

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

export default function OshapArticlePage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseStudyHero
        parentLabel="Articles"
        parentHref="/articles"
        eyebrow="Case study · written version"
        title="Oshap"
        status="2025 – present"
        lede={
          <>
            Three surfaces — a customer app, a kitchen view, and an admin dashboard —
            that all had to{" "}
            <em className="italic text-[var(--color-accent)]">agree about one order</em>.
          </>
        }
        meta={[
          { label: "Role", value: "Product Designer & Engineer · Founder" },
          { label: "Read time", value: "~12 min" },
          { label: "See it working", value: "/work/oshap" },
        ]}
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
      <CaseStudyFooter
        nextHref="/work/oshap"
        nextLabel="See the three apps"
        stat="Written version · 7 sections"
        colophonLeft="Oshap: the written case study"
      />
    </div>
  );
}
