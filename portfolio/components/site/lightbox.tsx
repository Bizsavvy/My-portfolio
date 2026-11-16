"use client";

import { useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { cn } from "@/lib/utils";

type Props = {
  /** Names what opens, e.g. "Oshap · Kitchen"; read out on the trigger and shown under the large view. */
  label: string;
  /** The large view, rendered only while open so a second video doesn't load with the page. */
  children: ReactNode;
  className?: string;
};

/**
 * A tap target laid over a picture-only card: it opens the picture or clip larger in a modal
 * dialog (Haye, 2026-11-16). The native <dialog> traps focus, closes on Esc and hands focus back
 * to the card. A tap outside the picture closes it too. No zoom on hover, only the zoom cursor.
 * Place it inside a positioned card, after the card's visual; controls that must stay usable
 * (a video's pause button) sit above it with z-10.
 */
export function Lightbox({ label, children, className }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
    dialog.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        aria-label={`Open ${label} larger`}
        className={cn(
          "absolute inset-0 cursor-zoom-in rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
          className
        )}
      />
      <dialog
        ref={dialog}
        aria-label={label}
        onClose={() => {
          setOpen(false);
          document.documentElement.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none flex-col items-center justify-center gap-g10 bg-transparent p-g17 text-foreground backdrop:bg-black/85 backdrop:backdrop-blur-sm open:flex md:p-g44"
      >
        {open && children}
        <p className="pointer-events-none font-mono text-label text-white/70 uppercase">{label}</p>
        <Button type="button" variant="secondary" size="icon" onClick={close} aria-label="Close" className="absolute top-g17 right-g17 md:top-g27 md:right-g27">
          <X aria-hidden />
        </Button>
      </dialog>
    </>
  );
}
