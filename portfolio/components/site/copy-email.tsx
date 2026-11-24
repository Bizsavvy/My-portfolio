"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { links } from "@/lib/links";

type Props = {
  /** Secondary in the nav; primary where it's the one action in view (contact). */
  variant?: "default" | "secondary";
  /** Show only the icon below the `sm` breakpoint (the nav on phones). */
  compactOnMobile?: boolean;
  className?: string;
};

/**
 * Copies the email address. Hiring managers copy the address and open their own mail
 * app, so this copies rather than opening mailto. The label confirms "Copied" for two
 * seconds and a live region announces it.
 */
export function CopyEmail({ variant = "secondary", compactOnMobile = false, className }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
    } catch {
      // Clipboard can be blocked (insecure context, permissions). Fall back to mailto.
      window.location.href = `mailto:${links.email}`;
      return;
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  const Icon = copied ? Check : Copy;

  return (
    <>
      <Button
        type="button"
        variant={variant}
        onClick={copy}
        className={`${compactOnMobile ? "max-sm:size-11 max-sm:px-0" : ""} ${className ?? ""}`}
        aria-label={compactOnMobile ? `Copy email address, ${links.email}` : undefined}
      >
        <Icon aria-hidden />
        <span className={compactOnMobile ? "max-sm:sr-only" : undefined}>
          {copied ? "Copied" : links.email}
        </span>
      </Button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}
