import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { Section } from "@/components/case-study/Section";
import { DemoWidget } from "@/components/case-study/DemoWidget";
import { FlowCard } from "@/components/case-study/FlowCard";
import { ArchGrid } from "@/components/case-study/ArchGrid";
import { RoadmapItem } from "@/components/case-study/RoadmapItem";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Shappay — Case Study · Haye",
  description: "A wallet-first QR payments app on Nigeria's NIBSS NQR rails.",
};

export default function ShappayPage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseStudyHero
        eyebrow="Consumer fintech · QR payments · Nigeria"
        title="Shappay"
        lede={
          <>
            A{" "}
            <em className="italic text-[var(--color-accent)]">
              QR-driven payment resolution engine
            </em>{" "}
            that selects the correct financial rail — wallet, bank, or external network — based on
            merchant and user preferences.
          </>
        }
        meta={[
          { label: "Role",     value: "Design Engineer" },
          { label: "Scope",    value: "Product design → front-end" },
          { label: "Model",    value: "Wallet-first QR" },
          { label: "Rails",    value: "NIBSS NQR · EMVCo" },
          { label: "Platform", value: "React Native · Mobile" },
          { label: "Year",     value: "2025 — present" },
        ]}
      />

      {/* Problem */}
      <Section>
        <div className="grid gap-12" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="reveal">
            <Kicker>The problem</Kicker>
            <h2
              className="font-hanken font-bold tracking-[-0.02em] mb-[26px]"
              style={{ fontSize: "clamp(28px,4.5vw,48px)", lineHeight: 1.06, maxWidth: "20ch" }}
            >
              Sending money should not require memorising a bank.
            </h2>
          </div>
          <div className="reveal">
            <p
              className="font-hanken text-[20px] leading-[1.58] text-[var(--color-text)] tracking-[-0.01em] mb-5"
              style={{ maxWidth: "48ch" }}
            >
              Most Nigerians hold multiple bank accounts across different banks. Every transfer
              means typing a 10-digit account number, choosing the right bank from a growing list,
              and hoping you got it right — multiplied across every account you own.
            </p>
            <p className="text-[#D6D4C9] mb-5" style={{ maxWidth: "62ch" }}>
              It is the single most error-prone, anxiety-inducing moment in everyday payments —
              and it scales terribly to small merchants, who have no card terminal and no way to
              get paid except by dictating account details out loud. The rails to fix this already
              exist.{" "}
              <strong className="text-[var(--color-text)] font-semibold">NIBSS NQR</strong> is
              Nigeria&apos;s national interoperable QR standard, built on the same{" "}
              <strong className="text-[var(--color-text)] font-semibold">EMVCo</strong> spec that
              powers India&apos;s UPI QR and the global push for Digital Public Infrastructure.
              The standard was there. The consumer experience was not.
            </p>
          </div>
        </div>
      </Section>

      {/* Core bet */}
      <Section>
        <div className="reveal">
          <Kicker>The core bet</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em] mb-[26px]"
            style={{ fontSize: "clamp(28px,4.5vw,48px)", lineHeight: 1.06, maxWidth: "20ch" }}
          >
            One scan replaces the entire account-entry ritual.
          </h2>
          <p
            className="font-hanken text-[20px] leading-[1.58] text-[var(--color-text)] tracking-[-0.01em] mb-8"
            style={{ maxWidth: "48ch" }}
          >
            Shappay&apos;s central design decision:{" "}
            <span className="text-[var(--color-accent)]">remove manual entry completely.</span>{" "}
            The QR <em>is</em> the recipient. Scan it and the app already knows who to pay and
            on which rail.
          </p>
        </div>

        <div className="grid gap-4 mt-[30px]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {[
            {
              num: "01 / Decision",
              title: "Static QR first",
              body: "The MVP ships a static merchant QR where the payer enters the amount. It's the cheapest possible path to a working loop — print it once, accept money forever — and it mirrors how UPI actually reached scale.",
            },
            {
              num: "02 / Decision",
              title: "Two addressing modes",
              body: (
                <>
                  Every user gets a{" "}
                  <strong className="text-[var(--color-text)] font-semibold">name@shappay</strong>{" "}
                  virtual address — so P2P payments work by typing an ID, not scanning a code. QR
                  and VPA resolve through the same engine, hitting the same rail. One resolution
                  layer, two entry points.
                </>
              ),
            },
            {
              num: "03 / Decision",
              title: "Wallet-first execution",
              body: "Funding and checkout are decoupled. Banks are touched once — topping up from up to four linked accounts via Mono — not on every payment. Checkout clears against wallet balance on Anchor, instant and never hostage to bank uptime.",
            },
          ].map((card) => (
            <div
              key={card.num}
              className="card bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[14px] p-6 transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-[3px] hover:bg-[var(--color-surface-2)] reveal"
            >
              <div className="font-mono text-[12px] text-[var(--color-accent)] mb-[14px]">{card.num}</div>
              <h3 className="font-hanken font-bold text-[18px] tracking-[-0.01em] mb-[10px]">{card.title}</h3>
              <p className="text-[15px] text-[var(--color-muted)] m-0">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Live engine / demo */}
      <Section>
        <div className="reveal">
          <Kicker>Live · The engine</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em] mb-[26px]"
            style={{ fontSize: "clamp(28px,4.5vw,48px)", lineHeight: 1.06, maxWidth: "20ch" }}
          >
            This is the payload, built in real time.
          </h2>
          <p className="text-[#D6D4C9] mb-0" style={{ maxWidth: "62ch" }}>
            Every NQR code is an EMVCo{" "}
            <strong className="text-[var(--color-text)] font-semibold">TLV</strong> string — a
            chain of Tag · Length · Value triplets, sealed with a CRC-16 checksum. Below is the
            actual builder logic from Shappay&apos;s QR engine, running in your browser. Edit the
            merchant, switch the QR type, and watch the standard-compliant payload — and a real,
            scannable code — regenerate.
          </p>
        </div>

        <DemoWidget />

        <p className="reveal mt-[26px] text-[14.5px] text-[var(--color-muted)]">
          The GUID shown represents the NIBSS-PLC account-information template; production values
          are issued per merchant. CRC is computed over the full payload including the{" "}
          <code className="text-[var(--color-accent)] font-mono">6304</code> tag — exactly as a
          compliant scanner verifies it.
        </p>
      </Section>

      {/* The pivot */}
      <Section>
        <div className="reveal">
          <Kicker>The pivot</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em] mb-[26px]"
            style={{ fontSize: "clamp(28px,4.5vw,48px)", lineHeight: 1.06, maxWidth: "20ch" }}
          >
            Mid-build, the architecture was wrong. So I changed it.
          </h2>
          <p
            className="font-hanken text-[20px] leading-[1.58] text-[var(--color-text)] tracking-[-0.01em] mb-2"
            style={{ maxWidth: "48ch" }}
          >
            The original plan: scan a QR, resolve the merchant, fire a real-time transfer
            straight from the payer&apos;s linked bank. Validation proved that bet couldn&apos;t
            hold.
          </p>
        </div>

        <div className="grid gap-12 mt-2" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="reveal">
            <h3 className="font-hanken font-bold text-[22px] tracking-[-0.01em] mb-[10px]">
              What testing revealed
            </h3>
            <p className="text-[#D6D4C9]" style={{ maxWidth: "62ch" }}>
              Providers like Mono DirectPay handle account linking, authorization, and payment
              initiation — but not persistent, real-time orchestration across multiple banks at
              the moment of checkout. And no accessible Nigerian provider exposes a clean,
              developer-ready stack for universal bank-to-bank QR routing. Every payment would
              have inherited bank uptime, authorization latency, redirect flows, and per-bank
              quirks. A checkout that fragile isn&apos;t a product.
            </p>
          </div>
          <div className="reveal">
            <h3 className="font-hanken font-bold text-[22px] tracking-[-0.01em] mb-[10px]">
              The re-architecture
            </h3>
            <p className="text-[#D6D4C9]" style={{ maxWidth: "62ch" }}>
              Separate the two flows that were wrongly fused:{" "}
              <strong className="text-[var(--color-text)] font-semibold">funding ≠ checkout.</strong>{" "}
              Banks are now touched when a user funds their wallet — linking up to four accounts —
              not on every scan. Payments execute against wallet balance, and both merchants and
              users choose where money lands:{" "}
              <strong className="text-[var(--color-text)] font-semibold">
                Shappay wallet or direct to bank.
              </strong>{" "}
              The QR strategy is untouched; the wallet simply becomes the execution and settlement
              layer beneath the same EMVCo/NQR engine.
            </p>
          </div>
        </div>

        <div className="flows mt-[42px] flex flex-col gap-[14px] reveal">
          <FlowCard
            variant="before"
            label="Before · fragile"
            chips={["Scan", "Bank auth", "External redirect", "Settlement"]}
          />
          <FlowCard
            variant="after"
            label="After · instant"
            chips={["Scan", "Resolve", "Wallet debit", "Settlement"]}
          />
        </div>

        <div className="reveal">
          <h3 className="font-hanken font-bold text-[22px] tracking-[-0.01em] mb-[10px] mt-12">
            The honest tradeoffs
          </h3>
          <p className="text-[#D6D4C9] mb-0" style={{ maxWidth: "62ch" }}>
            Holding balances raises the bar — and pretending it doesn&apos;t is the tell of
            someone who hasn&apos;t shipped. Naming them is part of owning the decision.
          </p>
        </div>

        <div className="grid gap-4 mt-[30px]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {[
            { num: "↑ Regulatory surface", body: "Storing value pulls in a sponsor-bank partnership and stronger compliance controls." },
            { num: "↑ User trust",          body: "Users now trust Shappay with balances — raising the bar on security and withdrawals." },
            { num: "↑ Ledger work",         body: "Internal balance tracking, ledger consistency, and failed-transfer recovery." },
            { num: "↑ Float & settlement",  body: "Liquidity movement, settlement timing, reversals, and reconciliation." },
          ].map((card) => (
            <div
              key={card.num}
              className="card bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[14px] p-6 transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-[3px] hover:bg-[var(--color-surface-2)] reveal"
            >
              <div className="font-mono text-[12px] text-[var(--color-accent)] mb-[14px]">{card.num}</div>
              <p className="text-[15px] text-[var(--color-muted)] m-0">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Systems */}
      <Section>
        <div className="reveal">
          <Kicker>Systems</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em] mb-[26px]"
            style={{ fontSize: "clamp(28px,4.5vw,48px)", lineHeight: 1.06, maxWidth: "20ch" }}
          >
            Three layers, one loop.
          </h2>
          <p className="text-[#D6D4C9]" style={{ maxWidth: "62ch" }}>
            The pivot resolved into a clean separation of concerns. Being able to build each layer
            is what let me design the UX around its real constraints — and decide, deliberately,
            where Shappay should and shouldn&apos;t sit.
          </p>
        </div>

        <ArchGrid
          nodes={[
            {
              index: "01",
              title: "Identity Layer",
              description: (
                <>
                  EMVCo / NQR payload generation and parsing, plus{" "}
                  <strong className="text-[var(--color-text)] font-semibold">name@shappay</strong>{" "}
                  VPA addressing — two ways to identify any payment destination.
                </>
              ),
            },
            { index: "02", title: "Resolution Layer",  description: "Merchant and account resolution, settlement-preference routing, and rail selection." },
            { index: "03", title: "Execution Layer",   description: "Wallet infrastructure, bank transfer rails, and settlement execution beneath it all." },
          ]}
          note="scan / VPA  →  resolve  →  wallet debit  →  settlement"
        />

        <p className="reveal mt-[18px] text-[14px] text-[var(--color-muted)]">
          Funding via Mono DirectPay. Wallet, ledger, and outbound payouts via Anchor. NQR
          interoperability carries through every layer.
        </p>

        <div className="reveal mt-[42px]">
          <h3 className="font-hanken font-bold text-[22px] tracking-[-0.01em] mb-[10px]">
            Routing rules
          </h3>
          <p className="text-[#D6D4C9] mb-0" style={{ maxWidth: "62ch" }}>
            The resolution engine outputs a routing decision on every transaction. Three cases,
            evaluated in order:
          </p>
        </div>

        <div className="grid gap-4 mt-5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {[
            {
              num: "Case A · Fast path",
              title: "Shappay → Shappay",
              body: "Destination has a Shappay wallet. Execute instant ledger transfer on Anchor — wallet to wallet. Highest success rate, lowest latency.",
            },
            {
              num: "Case B · Payout path",
              title: "Shappay → External bank",
              body: "Destination is an external merchant. Debit customer wallet on Anchor, trigger async outbound payout to merchant's bank account via Anchor's payout rail.",
            },
            {
              num: "Case C · Fallback",
              title: "Unsupported QR scheme",
              body: "QR payload cannot be resolved. Surface manual bank transfer entry screen — always a path forward, never a dead end.",
            },
          ].map((card) => (
            <div
              key={card.num}
              className="card bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[14px] p-6 transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-[3px] hover:bg-[var(--color-surface-2)] reveal"
            >
              <div className="font-mono text-[12px] text-[var(--color-accent)] mb-[14px]">{card.num}</div>
              <h3 className="font-hanken font-bold text-[17px] tracking-[-0.01em] mb-[10px]">{card.title}</h3>
              <p className="text-[14.5px] text-[var(--color-muted)] m-0">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why it matters */}
      <Section>
        <div className="grid gap-12" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="reveal">
            <Kicker>Why it matters</Kicker>
            <blockquote
              className="font-hanken font-normal italic tracking-[-0.01em] text-[var(--color-text)] my-[10px]"
              style={{ fontSize: "clamp(22px,3.6vw,36px)", lineHeight: 1.28, maxWidth: "24ch" }}
            >
              An interoperable QR is{" "}
              <span className="not-italic text-[var(--color-accent)]">public infrastructure</span>{" "}
              — it bridges the digital divide instead of building another silo.
            </blockquote>
          </div>
          <div className="reveal">
            <p className="text-[#D6D4C9] mb-5" style={{ maxWidth: "62ch" }}>
              This is the part of Shappay I care about most. Interoperable QR is a form of{" "}
              <strong className="text-[var(--color-text)] font-semibold">
                Digital Public Infrastructure
              </strong>{" "}
              — the same pattern that took India&apos;s UPI from zero to billions of transactions.
              The global reference, the{" "}
              <strong className="text-[var(--color-text)] font-semibold">CDPI</strong> specification,
              is already in discussion with 30+ central banks, Nigeria among them.
            </p>
            <p className="text-[#D6D4C9] mb-0" style={{ maxWidth: "62ch" }}>
              Shappay isn&apos;t trying to reinvent that layer. It builds on{" "}
              <strong className="text-[var(--color-text)] font-semibold">
                NIBSS NQR as Nigeria&apos;s implementation of it
              </strong>{" "}
              — and treats the design problem as: how do you make national-scale financial
              inclusion feel like scanning a square? When the rail is shared, a small tailor in
              Aba and a diaspora sender in London get the same frictionless loop. That&apos;s the
              brief.
            </p>
          </div>
        </div>
      </Section>

      {/* Success metrics */}
      <Section>
        <div className="reveal">
          <Kicker>Success metrics</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em] mb-[26px]"
            style={{ fontSize: "clamp(28px,4.5vw,48px)", lineHeight: 1.06, maxWidth: "20ch" }}
          >
            What good looks like, defined up front.
          </h2>
          <p className="text-[#D6D4C9] mb-0" style={{ maxWidth: "62ch" }}>
            Quantified targets set before build — not retrofitted after. These are the numbers the
            product is designed around.
          </p>
        </div>

        <div className="grid gap-4 mt-7" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {[
            {
              num: "Resolution latency",
              title: "< 200ms",
              body: "QR payload parsed and routing decision output before the user finishes reading the merchant name.",
            },
            {
              num: "Wallet-to-wallet success",
              title: "> 99%",
              body: "Internal Anchor ledger transfers. Near-perfect reliability by bypassing bank uptime entirely.",
            },
            {
              num: "Time to confirmation",
              title: "< 3 seconds",
              body: "PIN entry to merchant alert dispatch. Wallet-to-wallet path only — the standard every design decision defers to.",
            },
            {
              num: "External payout success",
              title: "> 95%",
              body: "Async outbound bank payouts via Anchor. Lower floor than internal transfers, accounted for in UX with async confirmation states.",
            },
          ].map((card) => (
            <div
              key={card.num}
              className="card bg-[var(--color-surface)] border border-[var(--color-line)] rounded-[14px] p-6 transition-all duration-300 hover:border-[var(--color-line-strong)] hover:-translate-y-[3px] hover:bg-[var(--color-surface-2)] reveal"
            >
              <div className="font-mono text-[12px] text-[var(--color-accent)] mb-[14px]">{card.num}</div>
              <h3 className="font-hanken font-bold text-[17px] tracking-[-0.01em] mb-[10px]">{card.title}</h3>
              <p className="text-[14.5px] text-[var(--color-muted)] m-0">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section>
        <div className="reveal">
          <Kicker>Roadmap</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em] mb-[26px]"
            style={{ fontSize: "clamp(28px,4.5vw,48px)", lineHeight: 1.06, maxWidth: "20ch" }}
          >
            From a printed square to a payments platform.
          </h2>
        </div>
        <div className="road flex flex-col">
          <RoadmapItem
            phase="NOW"
            title="Wallet-first MVP"
            status={{ label: "In build", now: true }}
            description="Link up to four banks, fund a Shappay wallet, and pay by scanning a static QR — settling to wallet or bank. The smallest complete loop that proves the model."
          />
          <RoadmapItem
            phase="NEXT"
            title="Dynamic QR"
            status={{ label: "Roadmap" }}
            description="Amount embedded in the code for point-of-sale and one-tap checkout — no typing, no mistakes."
          />
          <RoadmapItem
            phase="THEN"
            title="Merchant tools · POS · Invoice QR"
            status={{ label: "Roadmap" }}
            description="Payment links, invoice-bound codes, and a merchant dashboard with analytics on top of the same rail."
          />
          <RoadmapItem
            phase="LATERAL"
            title="QR-powered product verification"
            status={{ label: "Exploration" }}
            description="A point-of-sale check that reads a product's NAFDAC registration to flag counterfeits — the scan engine, pointed at trust instead of payment."
          />
        </div>
      </Section>

      {/* Reflection */}
      <Section>
        <div className="grid gap-12" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="reveal">
            <Kicker>Reflection</Kicker>
            <h2
              className="font-hanken font-bold tracking-[-0.02em] mb-[26px]"
              style={{ fontSize: "clamp(28px,4.5vw,48px)", lineHeight: 1.06, maxWidth: "20ch" }}
            >
              What designing the engine taught me.
            </h2>
          </div>
          <div className="reveal">
            <p className="text-[#D6D4C9] mb-5" style={{ maxWidth: "62ch" }}>
              The temptation in fintech is to design the screens and treat the rails as someone
              else&apos;s problem. Shappay only works because I refused that split. Understanding
              the TLV format changed the product:{" "}
              <strong className="text-[var(--color-text)] font-semibold">static-first</strong>{" "}
              stopped being a compromise and became the obvious wedge once I&apos;d built the
              payload by hand and seen how little it needed to be useful.
            </p>
            <p className="text-[#D6D4C9] mb-0" style={{ maxWidth: "62ch" }}>
              The hardest decisions weren&apos;t visual — and the most important was admitting the
              first architecture was wrong. Re-drawing the line between funding and checkout,
              choosing to hold a wallet, deciding where settlement lands: those are architecture
              calls a designer who builds will reach for, and they&apos;re what turned a fragile
              demo into something shippable, lawful, and fast.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative z-[5] border-t border-[var(--color-line)]" style={{ padding: "70px 0 90px" }}>
        <div className="max-w-[1080px] site-wrap">
          <div className="next flex justify-between items-end flex-wrap gap-6">
            <div>
              <div className="font-mono text-[11px] tracking-[.12em] uppercase text-[var(--color-muted)] mb-[10px]">
                Next project
              </div>
              <Link
                href="/work/ui-to-json"
                className="big-link font-hanken font-bold tracking-[-0.02em] leading-none text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                style={{ fontSize: "clamp(32px,5.5vw,62px)" }}
              >
                UI to JSON{" "}
                <span className="arrow inline-block transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="text-right">
              <div className="font-mono text-[11px] tracking-[.12em] uppercase text-[var(--color-muted)]">
                170+ users in production
              </div>
            </div>
          </div>
          <div className="colophon mt-[60px] font-mono text-[11.5px] text-[var(--color-muted)] tracking-[.04em] flex justify-between flex-wrap gap-3">
            <span>Shappay — Design Engineering case study</span>
            <span>Designed &amp; built end to end · {new Date().getFullYear()}</span>
          </div>
        </div>
        <style>{`
          .next a.big-link:hover .arrow { transform: translateX(8px); }
        `}</style>
      </footer>
    </div>
  );
}
