"use client";
import { useState, useEffect, useRef } from "react";
import { Kicker } from "@/components/ui/Kicker";

// iPhone 14 Pro Max logical pixels
const IFRAME_W = 430;
const IFRAME_H = 932;
const NOTCH = 44;
const HOME = 34;
const PHONE_H = NOTCH + IFRAME_H + HOME; // 1010
const SCROLLBAR_W = 16; // widen the iframe by this so its native scrollbar is clipped out of view

export function LiveAppFrame() {
  const [active, setActive] = useState(false);
  const [scale, setScale] = useState(1);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.height / PHONE_H);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const s = scale;

  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}
    >
      <div className="cs-wrap w-full py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6 reveal">
            <Kicker>Live demo</Kicker>
            <h2
              className="font-hanken font-bold tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
            >
              The real thing. Right here.
            </h2>
            <p
              className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)]"
              style={{ maxWidth: "44ch" }}
            >
              Not a prototype. The live customer app: browse the menu, add to
              cart, see the pay flow. Table T1 is active.
            </p>
            <a
              href="https://oshap-frontend-customer.vercel.app/menu?table=T1"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start font-mono text-[12px] tracking-[.06em] uppercase text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              Open full app ↗
            </a>
          </div>

          {/* Right — phone frame */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "calc(100svh - 80px)",
            }}
          >
            {/*
              Shell has NO border — content box = exactly IFRAME_W*s × PHONE_H*s.
              The bezel is overlaid as a pointer-events:none div so it never
              creates a gap between the iframe and the container edge.
            */}
            <div
              ref={shellRef}
              style={{
                position: "relative",
                height: "100%",
                aspectRatio: `${IFRAME_W} / ${PHONE_H}`,
                borderRadius: 55 * s,
                background: "#000",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.07)",
              }}
            >
              {/* Bezel overlay — purely visual */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 55 * s,
                  border: `${10 * s}px solid var(--color-surface)`,
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              />

              {/* Dynamic island */}
              <div
                style={{
                  flexShrink: 0,
                  height: NOTCH * s,
                  background: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 126 * s,
                    height: 34 * s,
                    background: "#111",
                    borderRadius: 20 * s,
                  }}
                />
              </div>

              {/* Iframe — renders at 430×932, scaled to fill shell */}
              <div
                style={{
                  flexShrink: 0,
                  width: "100%",
                  height: IFRAME_H * s,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <iframe
                  src="https://oshap-frontend-customer.vercel.app/menu?table=T1"
                  title="Oshap customer app: live"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: IFRAME_W + SCROLLBAR_W,
                    height: IFRAME_H,
                    border: "none",
                    transformOrigin: "top left",
                    transform: `scale(${s})`,
                    pointerEvents: active ? "auto" : "none",
                  }}
                />
              </div>

              {/* Home indicator */}
              <div
                style={{
                  flexShrink: 0,
                  height: HOME * s,
                  background: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 134 * s,
                    height: 5 * s,
                    background: "rgba(255,255,255,0.25)",
                    borderRadius: 3 * s,
                  }}
                />
              </div>

              {/* Tap-to-interact overlay */}
              {!active && (
                <button
                  onClick={() => setActive(true)}
                  aria-label="Tap to interact with the live app"
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 20,
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(2px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12 * s,
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  <div
                    style={{
                      width: 52 * s,
                      height: 52 * s,
                      borderRadius: "50%",
                      border: `${1.5 * s}px solid rgba(255,255,255,0.4)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width={20 * s} height={20 * s} viewBox="0 0 24 24">
                      <path d="M10 8l6 4-6 4V8z" fill="rgba(255,255,255,0.85)" />
                    </svg>
                  </div>
                  <span
                    className="font-mono tracking-[.1em] uppercase"
                    style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 * s }}
                  >
                    Tap to interact
                  </span>
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
