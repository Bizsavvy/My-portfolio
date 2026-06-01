"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { buildNQRPayload, type TLVRow } from "@/lib/tlv";

type Mode = "static" | "dynamic";

export function DemoWidget() {
  const [merchant, setMerchant] = useState("ADAEZE BAKERY");
  const [city, setCity] = useState("LAGOS");
  const [mode, setMode] = useState<Mode>("static");
  const [amount, setAmount] = useState("2500.00");
  const [rows, setRows] = useState<TLVRow[]>([]);
  const [payload, setPayload] = useState("");
  const [crc, setCrc] = useState("");
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const qrCardRef = useRef<HTMLDivElement>(null);

  const renderQR = useCallback(
    async (payloadStr: string) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      try {
        const qrcode = (await import("qrcode-generator")).default;
        const qr = qrcode(0, "M");
        qr.addData(payloadStr);
        qr.make();
        const count = qr.getModuleCount();
        const margin = 4;
        const cell = Math.max(2, Math.floor(240 / (count + margin * 2)));
        const dim = cell * (count + margin * 2);
        canvas.width = dim;
        canvas.height = dim;
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#EFEBE0";
        ctx.fillRect(0, 0, dim, dim);
        ctx.fillStyle = "#0C0C0A";
        for (let r = 0; r < count; r++) {
          for (let c = 0; c < count; c++) {
            if (qr.isDark(r, c)) {
              ctx.fillRect((c + margin) * cell, (r + margin) * cell, cell, cell);
            }
          }
        }
        /* trigger scan animation */
        const card = qrCardRef.current;
        if (card) {
          card.classList.remove("scanning");
          void card.offsetWidth;
          card.classList.add("scanning");
        }
      } catch {
        /* qrcode-generator not available */
      }
    },
    []
  );

  useEffect(() => {
    const result = buildNQRPayload(merchant, city, mode, amount);
    setRows(result.rows);
    setPayload(result.payload);
    setCrc(result.crc);
    renderQR(result.payload);
  }, [merchant, city, mode, amount, renderQR]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard not available */
    }
  };

  const rawWithoutCRC = payload.slice(0, payload.length - 4);

  return (
    <div className="demo bg-[var(--color-surface)] border border-[var(--color-line-strong)] rounded-[20px] overflow-hidden mt-9 reveal">
      {/* Header */}
      <div className="demo-head px-[26px] py-5 border-b border-[var(--color-line)] flex items-center justify-between gap-4 flex-wrap">
        <span className="font-mono text-[12px] tracking-[.1em] uppercase text-[var(--color-muted)]">
          Shappay · NQR Payload Builder
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-accent)] tracking-[.1em]">
          <span
            className="w-[7px] h-[7px] rounded-full bg-[var(--color-accent)]"
            style={{ animation: "pulse 2.4s infinite" }}
          />
          EMVCo MPM · CRC-16/CCITT
        </span>
      </div>

      {/* Grid */}
      <div
        className="demo-grid"
        style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr" }}
      >
        {/* Left — inputs */}
        <div className="demo-left px-[26px] py-[30px] border-r border-[var(--color-line)]">
          <div className="field mb-[22px]">
            <label className="block font-mono text-[11px] tracking-[.1em] uppercase text-[var(--color-muted)] mb-[9px]">
              Merchant name
            </label>
            <input
              type="text"
              maxLength={25}
              value={merchant}
              onChange={(e) => setMerchant(e.target.value)}
              className="w-full bg-[var(--color-ink)] border border-[var(--color-line-strong)] text-[var(--color-text)] font-mono text-[15px] px-[14px] py-[13px] rounded-[10px] outline-none transition-[border-color_.25s,box-shadow_.25s] focus:border-[var(--color-accent)]"
              style={{}}
              onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px var(--color-accent-dim)")}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            />
          </div>

          <div className="field mb-[22px]">
            <label className="block font-mono text-[11px] tracking-[.1em] uppercase text-[var(--color-muted)] mb-[9px]">
              Merchant city
            </label>
            <input
              type="text"
              maxLength={15}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-[var(--color-ink)] border border-[var(--color-line-strong)] text-[var(--color-text)] font-mono text-[15px] px-[14px] py-[13px] rounded-[10px] outline-none transition-[border-color_.25s,box-shadow_.25s] focus:border-[var(--color-accent)]"
              onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px var(--color-accent-dim)")}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            />
          </div>

          <div className="field mb-[22px]">
            <label className="block font-mono text-[11px] tracking-[.1em] uppercase text-[var(--color-muted)] mb-[9px]">
              QR type · Point of Initiation
            </label>
            <div className="inline-flex bg-[var(--color-ink)] border border-[var(--color-line-strong)] rounded-[10px] p-1 gap-1">
              {(["static", "dynamic"] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`font-mono text-[12px] tracking-[.06em] px-4 py-[9px] border-none rounded-[7px] cursor-pointer transition-all duration-[250ms] ${
                    mode === m
                      ? "bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold"
                      : "bg-transparent text-[var(--color-muted)]"
                  }`}
                >
                  {m === "static" ? "Static · 11" : "Dynamic · 12"}
                </button>
              ))}
            </div>
          </div>

          <div className="field mb-0">
            <label className="block font-mono text-[11px] tracking-[.1em] uppercase text-[var(--color-muted)] mb-[9px]">
              Amount (₦)
            </label>
            <input
              type="number"
              min={0}
              step={0.01}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={mode === "static"}
              className="w-full bg-[var(--color-ink)] border border-[var(--color-line-strong)] text-[var(--color-text)] font-mono text-[15px] px-[14px] py-[13px] rounded-[10px] outline-none transition-[border-color_.25s,box-shadow_.25s] focus:border-[var(--color-accent)] disabled:opacity-40 disabled:cursor-not-allowed"
              onFocus={(e) => !e.currentTarget.disabled && (e.currentTarget.style.boxShadow = "0 0 0 3px var(--color-accent-dim)")}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            />
            <div className="text-[12.5px] text-[var(--color-muted)] mt-2 font-hanken">
              {mode === "static"
                ? "Static QR carries no amount — the payer types it at scan time."
                : "Dynamic QR embeds the amount — payer just confirms."}
            </div>
          </div>
        </div>

        {/* Right — QR canvas */}
        <div className="demo-right px-[26px] py-[30px] flex flex-col items-center justify-start">
          <div
            ref={qrCardRef}
            className="qr-card relative rounded-[16px] p-[18px]"
            style={{
              background: "var(--color-paper)",
              lineHeight: 0,
              boxShadow: "0 20px 60px -20px rgba(0,0,0,.6)",
              overflow: "hidden",
            }}
          >
            <span
              className="scanline absolute left-0 w-full h-9 pointer-events-none"
              style={{
                background: "linear-gradient(180deg,transparent,rgba(56,189,248,.55),transparent)",
                opacity: 0,
              }}
            />
            <canvas ref={canvasRef} width={240} height={240} style={{ display: "block", borderRadius: 4 }} />
          </div>
          <div className="font-mono text-[11px] text-[var(--color-muted)] mt-[18px] text-center tracking-[.05em] max-w-[30ch]">
            Scannable EMVCo QR · currency 566 (NGN) · country NG
          </div>
        </div>
      </div>

      {/* TLV table + raw payload */}
      <div className="payload-block bg-[var(--color-ink)] border-t border-[var(--color-line)]">
        <table className="w-full border-collapse font-mono text-[12.5px]">
          <thead>
            <tr>
              <th className="text-left text-[var(--color-muted)] font-medium text-[10.5px] tracking-[.1em] uppercase px-[26px] pb-3 pt-3 border-b border-[var(--color-line)] w-[48px]">
                Tag
              </th>
              <th className="text-left text-[var(--color-muted)] font-medium text-[10.5px] tracking-[.1em] uppercase px-[26px] pb-3 pt-3 border-b border-[var(--color-line)]">
                Field
              </th>
              <th className="text-left text-[var(--color-muted)] font-medium text-[10.5px] tracking-[.1em] uppercase px-[26px] pb-3 pt-3 border-b border-[var(--color-line)]">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`${row.tag}-${i}`}
                className="border-b border-[var(--color-line)] last:border-b-0"
                style={{ animation: `rowin .45s ${i * 35}ms both` }}
              >
                <td className="px-[26px] py-[11px] text-[var(--color-accent)] align-top">{row.tag}</td>
                <td className="px-[26px] py-[11px] text-[#D6D4C9] align-top">{row.name}</td>
                <td className="px-[26px] py-[11px] text-[var(--color-muted)] align-top break-all">{row.val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center px-[26px] py-4">
          <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[var(--color-muted)]">
            Raw payload
          </span>
          <button
            onClick={handleCopy}
            className="font-mono text-[11px] text-[var(--color-accent)] bg-transparent border border-[var(--color-line-strong)] rounded-[7px] px-3 py-[6px] cursor-pointer transition-all duration-[250ms] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-dim)]"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="font-mono text-[13px] leading-[1.9] text-[var(--color-muted)] px-[26px] pb-[22px] break-all">
          {rawWithoutCRC}
          <span className="text-[var(--color-accent)] font-semibold">{crc}</span>
        </div>
      </div>

      <style>{`
        .qr-card.scanning .scanline {
          animation: scan-line 1.1s cubic-bezier(.4,0,.2,1);
        }
        @media (max-width: 820px) {
          .demo-grid { grid-template-columns: 1fr !important; }
          .demo-left { border-right: none !important; border-bottom: 1px solid var(--color-line); }
        }
      `}</style>
    </div>
  );
}
