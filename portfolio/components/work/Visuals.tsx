"use client";
import { useEffect, useRef } from "react";

/* ── Shappay: animated QR grid ── */
export function VisualQR() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || grid.children.length > 0) return;
    let seed = 11;
    const rnd = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
    const fnd = (r: number, c: number) =>
      (r < 3 && c < 3) || (r < 3 && c > 7) || (r > 7 && c < 3);
    for (let r = 0; r < 11; r++) {
      for (let c = 0; c < 11; c++) {
        const cel = document.createElement("i");
        const on = fnd(r, c)
          ? r === 0 || r === 2 || c === 0 || c === 2 || (r === 1 && c === 1)
            ? true
            : (r % 2 + c % 2) === 0
          : rnd() > 0.52;
        cel.style.background = on ? "#0C0C0A" : "transparent";
        cel.style.borderRadius = "1px";
        grid.appendChild(cel);
      }
    }
  }, []);

  return (
    <div className="v-qr absolute inset-0 flex items-center justify-center">
      <div
        className="relative"
        style={{
          width: 160,
          height: 160,
          background: "var(--color-paper)",
          borderRadius: 14,
          padding: 16,
          display: "grid",
        }}
      >
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(11,1fr)",
            gap: 3,
            width: "100%",
            height: "100%",
          }}
        />
        {/* scan beam */}
        <div
          className="absolute left-0 right-0"
          style={{
            width: "110%",
            left: "-5%",
            height: 3,
            background: "var(--color-accent)",
            boxShadow: "0 0 18px var(--color-accent)",
            top: "50%",
            animation: "beam-scan 2.6s cubic-bezier(.5,0,.5,1) infinite",
          }}
        />
      </div>
      <div
        className="v-tag absolute bottom-[18px] right-[18px] font-mono text-[11px] text-[var(--color-muted)] tracking-[.05em]"
      >
        EMVCo · TLV · CRC-16
      </div>
    </div>
  );
}

/* ── UI to JSON: code block ── */
export function VisualJSON() {
  return (
    <div className="v-json absolute inset-0 px-9 py-[34px] font-mono text-[12px] md:text-[20px] leading-[1.9] text-[var(--color-muted)]">
      <span className="text-[var(--color-accent)]">&quot;layout&quot;</span>: {"{"}<br />
      &nbsp;&nbsp;<span className="text-[var(--color-accent)]">&quot;direction&quot;</span>:{" "}
      <span className="text-[var(--color-body)]">&quot;vertical&quot;</span>,<br />
      &nbsp;&nbsp;<span className="text-[var(--color-accent)]">&quot;padding&quot;</span>: {"{"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--color-accent)]">&quot;top&quot;</span>:{" "}
      <span className="text-[var(--color-body)]">88</span>,{" "}
      <span className="text-[var(--color-accent)]">&quot;right&quot;</span>:{" "}
      <span className="text-[var(--color-body)]">200</span>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--color-accent)]">&quot;bottom&quot;</span>:{" "}
      <span className="text-[var(--color-body)]">72</span>,{" "}
      <span className="text-[var(--color-accent)]">&quot;left&quot;</span>:{" "}
      <span className="text-[var(--color-body)]">200</span><br />
      &nbsp;&nbsp;{"}"},{" "}<br />
      &nbsp;&nbsp;<span className="text-[var(--color-accent)]">&quot;alignItems&quot;</span>:{" "}
      <span className="text-[var(--color-body)]">&quot;center&quot;</span><br />
      {"}"}
      <div
        className="absolute bottom-5 right-5 font-mono text-[11.5px] font-semibold tracking-[.02em] px-[13px] py-[7px] rounded-[20px]"
        style={{ background: "var(--color-accent)", color: "var(--color-ink)" }}
      >
        170+ installs
      </div>
    </div>
  );
}

/* ── Oshap: order status chain ── */
export function VisualOshap() {
  return (
    <div className="v-oshap absolute inset-0 flex flex-col items-center justify-center gap-[18px]">
      <div className="chain flex items-center gap-[10px]">
        {(["CREATED", "PREPARING", "READY"] as const).map((label, i) => (
          <span key={label} className="flex items-center gap-[10px]">
            <span
              className="st font-mono text-[11px] tracking-[.05em] px-3 py-2 border border-[var(--color-line-strong)] rounded-[8px] text-[var(--color-muted)]"
              style={{ animation: `stage-pulse 3.6s infinite ${i * 1.2}s` }}
            >
              {label}
            </span>
            {i < 2 && <span className="text-[var(--color-muted)] text-[12px]">→</span>}
          </span>
        ))}
      </div>
      <div className="tag font-mono text-[11px] text-[var(--color-muted)] tracking-[.05em]">
        scan · table T12 · pay by transfer
      </div>
    </div>
  );
}

/* ── NawNaw: spinning ring ── */
export function VisualNawNaw() {
  return (
    <div className="v-naw absolute inset-0 flex flex-col items-center justify-center gap-3">
      <div
        className="ring relative flex items-center justify-center"
        style={{
          width: 108,
          height: 108,
          borderRadius: "50%",
          border: "2px solid var(--color-line-strong)",
        }}
      >
        <div
          className="absolute inset-[-2px] rounded-full border-2 border-transparent"
          style={{
            borderTopColor: "var(--color-accent)",
            borderRightColor: "var(--color-accent)",
            animation: "spin 3s linear infinite",
          }}
        />
      </div>
      <div className="font-pixel text-[24px] text-[var(--color-text)] tracking-[.02em]">&lt; 15 min</div>
      <div className="font-mono text-[11px] text-[var(--color-muted)] tracking-[.08em]">DARK STORE MODEL</div>
    </div>
  );
}

/* ── Flow: violet droplet ── */
export function VisualFlow() {
  return (
    <div className="v-flow absolute inset-0">
      <img
        src="/assets/Flow-Business card mockup.jpg"
        alt="Flow Business Card"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
