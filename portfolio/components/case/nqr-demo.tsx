"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { buildNQRPayload } from "@/lib/tlv";
import { cn } from "@/lib/utils";

type Mode = "static" | "dynamic";

const field =
  "h-11 w-full rounded-md border border-input bg-background px-g10 font-mono text-body text-foreground outline-none transition-colors duration-150 ease-standard focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Builds an NQR payload (EMVCo merchant-presented QR, NIBSS fields) as you type, and draws
 * a scannable code from it. Rebuilt on the design system from the old case study's
 * DemoWidget; the payload logic is unchanged (lib/tlv.ts). Nothing animates.
 */
export function NqrDemo() {
  const id = useId();
  const [merchant, setMerchant] = useState("ADAEZE BAKERY");
  const [city, setCity] = useState("LAGOS");
  const [mode, setMode] = useState<Mode>("static");
  const [amount, setAmount] = useState("2500.00");
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { payload, crc, rows } = useMemo(() => buildNQRPayload(merchant, city, mode, amount), [merchant, city, mode, amount]);

  // Dark modules on white in both themes: phone scanners expect that contrast.
  useEffect(() => {
    let cancelled = false;
    import("qrcode-generator").then(({ default: qrcode }) => {
      const canvas = canvasRef.current;
      if (cancelled || !canvas) return;
      const qr = qrcode(0, "M");
      qr.addData(payload);
      qr.make();
      const count = qr.getModuleCount();
      const margin = 4;
      const cell = Math.max(2, Math.floor(480 / (count + margin * 2)));
      const dim = cell * (count + margin * 2);
      canvas.width = dim;
      canvas.height = dim;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, dim, dim);
      ctx.fillStyle = "#09090b";
      for (let r = 0; r < count; r++) {
        for (let c = 0; c < count; c++) {
          if (qr.isDark(r, c)) ctx.fillRect((c + margin) * cell, (r + margin) * cell, cell, cell);
        }
      }
    });
    return () => {
      cancelled = true;
    };
  }, [payload]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
    } catch {
      /* Clipboard blocked; the payload stays selectable below. */
    }
  };

  return (
    <figure className="flex flex-col overflow-hidden rounded-lg bg-card">
      <figcaption className="flex flex-wrap items-center justify-between gap-g10 px-g17 pt-g17 md:px-g27 md:pt-g27">
        <span className="font-mono text-label text-muted-foreground uppercase">NQR payload demo</span>
        <span className="font-mono text-label text-muted-foreground uppercase">EMVCo MPM · CRC-16/CCITT</span>
      </figcaption>

      <div className="grid gap-g27 p-g17 md:grid-cols-[minmax(0,1fr)_auto] md:p-g27">
        <div className="flex flex-col gap-g17">
          <div className="flex flex-col gap-g6">
            <label htmlFor={`${id}-merchant`} className="font-mono text-label text-muted-foreground uppercase">
              Merchant name
            </label>
            <input id={`${id}-merchant`} className={field} maxLength={25} value={merchant} onChange={(e) => setMerchant(e.target.value)} />
          </div>
          <div className="flex flex-col gap-g6">
            <label htmlFor={`${id}-city`} className="font-mono text-label text-muted-foreground uppercase">
              Merchant city
            </label>
            <input id={`${id}-city`} className={field} maxLength={15} value={city} onChange={(e) => setCity(e.target.value)} />
          </div>

          <fieldset className="flex flex-col gap-g6">
            <legend className="mb-g6 font-mono text-label text-muted-foreground uppercase">QR type</legend>
            <div className="inline-flex w-fit gap-g4 rounded-full bg-background p-g4">
              {(["static", "dynamic"] as Mode[]).map((m) => (
                <label
                  key={m}
                  className={cn(
                    "flex h-9 cursor-pointer items-center rounded-full px-g17 text-button transition-colors duration-150 ease-standard has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring",
                    mode === m ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <input type="radio" name={`${id}-mode`} value={m} checked={mode === m} onChange={() => setMode(m)} className="sr-only" />
                  {m === "static" ? "Static" : "Dynamic"}
                </label>
              ))}
            </div>
            <p className="text-caption text-muted-foreground">
              {mode === "static"
                ? "A static code carries no amount; the payer types it when they scan."
                : "A dynamic code carries the amount; the payer only confirms it."}
            </p>
          </fieldset>

          {mode === "dynamic" && (
            <div className="flex flex-col gap-g6">
              <label htmlFor={`${id}-amount`} className="font-mono text-label text-muted-foreground uppercase">
                Amount (₦)
              </label>
              <input
                id={`${id}-amount`}
                className={field}
                type="number"
                inputMode="decimal"
                min={0}
                step={0.01}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-g10">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={`QR code for ${merchant || "the merchant"}, ${mode === "static" ? "no amount" : `₦${amount}`}`}
            className="size-[240px] rounded-md bg-white"
          />
          <p className="max-w-[240px] text-center text-caption text-muted-foreground">Scannable. Currency 566 (naira), country NG.</p>
        </div>
      </div>

      <div className="border-t border-border px-g17 py-g17 md:px-g27">
        <div>
          <table className="w-full border-collapse text-left font-mono text-caption">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="w-g44 pb-g6 font-medium text-muted-foreground uppercase">Tag</th>
                <th scope="col" className="pb-g6 font-medium text-muted-foreground uppercase">Field</th>
                <th scope="col" className="pb-g6 font-medium text-muted-foreground uppercase">Value</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.tag} className="border-b border-border last:border-b-0">
                  <td className="py-g6 pr-g10 text-brand-text">{row.tag}</td>
                  <td className="py-g6 pr-g10 text-foreground-secondary">{row.name}</td>
                  <td className="py-g6 break-all text-foreground">{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-g10 border-t border-border px-g17 py-g17 md:px-g27">
        <div className="flex items-center justify-between gap-g10">
          <span className="font-mono text-label text-muted-foreground uppercase">Raw payload</span>
          <Button variant="secondary" onClick={copy}>
            {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
            {copied ? "Copied" : "Copy payload"}
          </Button>
        </div>
        <p className="font-mono text-caption break-all text-muted-foreground">
          {payload.slice(0, -4)}
          <span className="text-brand-text">{crc}</span>
        </p>
        <span aria-live="polite" className="sr-only">
          {copied ? "Payload copied" : ""}
        </span>
      </div>
    </figure>
  );
}
