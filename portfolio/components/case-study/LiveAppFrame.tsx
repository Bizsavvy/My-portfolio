"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Kicker } from "@/components/ui/Kicker";

const FRAME_W = 416.35;
const FRAME_H = 849.04;
const SCREEN_W = 376.76;
const SCREEN_H = 815.15;
const STATUS_BAR_H = 54;
const IFRAME_H = SCREEN_H - STATUS_BAR_H;
const OFFSET_X = (FRAME_W - SCREEN_W) / 2;
const OFFSET_Y = (FRAME_H - SCREEN_H) / 2;

export function LiveAppFrame() {
  const [active, setActive] = useState(false);
  const [shellH, setShellH] = useState(1000);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setShellH(entry.contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const s = shellH / FRAME_H;

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
            <div
              ref={shellRef}
              style={{
                position: "relative",
                height: "100%",
                aspectRatio: `${FRAME_W} / ${FRAME_H}`,
              }}
            >
              {/* Iframe wrapper - exact screen position */}
              <div
                style={{
                  position: "absolute",
                  left: OFFSET_X * s,
                  top: OFFSET_Y * s,
                  width: SCREEN_W * s,
                  height: SCREEN_H * s,
                  overflow: "hidden",
                  borderRadius: 40 * s,
                  zIndex: 1,
                  background: "#000",
                }}
              >
                <iframe
                  src="https://oshap-frontend-customer.vercel.app/menu?table=T1&theme=dark"
                  title="Oshap customer app: live"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: STATUS_BAR_H * s,
                    left: 0,
                    width: SCREEN_W,
                    height: IFRAME_H,
                    border: "none",
                    transformOrigin: "top left",
                    transform: `scale(${s})`,
                    colorScheme: "dark",
                    pointerEvents: active ? "auto" : "none",
                  }}
                />

                {/* Status Bar Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: STATUS_BAR_H * s,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: `0 ${36 * s}px`,
                    zIndex: 10,
                    pointerEvents: "none",
                    color: "#fff",
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                    fontSize: 15 * s,
                    fontWeight: 600,
                  }}
                >
                  {/* Left: Time & Moon */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6 * s }}>
                    <span>17:54</span>
                    <svg width={12 * s} height={12 * s} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.1,22c-5.1,0-9.2-4.1-9.2-9.2c0-4.1,2.7-7.7,6.6-8.9c0.2-0.1,0.5-0.1,0.7,0.1c0.2,0.2,0.2,0.5,0.1,0.7c-0.8,1.4-1,3-0.5,4.6c0.6,2.1,2.3,3.8,4.4,4.4c1.6,0.5,3.2,0.3,4.6-0.5c0.2-0.1,0.5-0.1,0.7,0.1c0.2,0.2,0.3,0.5,0.2,0.7C18.4,18.7,15.4,22,12.1,22z"/>
                    </svg>
                  </div>

                  {/* Right: Cellular, 5G, Battery */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6 * s }}>
                    <svg width={18 * s} height={12 * s} viewBox="0 0 18 12" fill="currentColor">
                      <rect x="1" y="8" width="3" height="4" rx="1" />
                      <rect x="6" y="5" width="3" height="7" rx="1" />
                      <rect x="11" y="2" width="3" height="10" rx="1" />
                      <rect x="16" y="0" width="3" height="12" rx="1" fillOpacity="0.4" />
                    </svg>
                    <span style={{ fontSize: 13 * s, fontWeight: 700, letterSpacing: "-0.5px" }}>5G</span>
                    <svg width={25 * s} height={12 * s} viewBox="0 0 25 12" fill="currentColor">
                      <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1" />
                      <rect x="2" y="2" width="6" height="8" rx="2" />
                      <path d="M23 4V8C23.6 8 24 7.6 24 7V5C24 4.4 23.6 4 23 4Z" />
                    </svg>
                  </div>
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

              {/* iPhone Image overlay */}
              <Image
                src="/assets/oshap/iPhone frame.png"
                alt="iPhone frame"
                fill
                priority
                quality={100}
                style={{ pointerEvents: "none", zIndex: 10, objectFit: "contain" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
