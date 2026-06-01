"use client";

import { useState } from "react";
import { GeoContact } from "./GeoContact";

const links = [
  { href: "mailto:binjobiz@gmail.com", label: "Email" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "GitHub" },
  { href: "#", label: "Read.cv" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("binjobiz@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="contact-section border-t border-[var(--color-line)] text-center overflow-hidden relative z-[5]"
      style={{ padding: "120px 0" }}
    >
      <GeoContact />

      <div
        className="max-w-[var(--width-maxw)] site-wrap flex flex-col items-center gap-[var(--space-10xl)]"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="flex flex-col items-center gap-[var(--space-8xl)] max-w-[621px]">
          <button
            onClick={handleCopy}
            className="bigcta group flex flex-col items-center gap-[var(--space-lg)] relative z-[2] cursor-pointer"
          >
            {/* Tooltip */}
            <div className="absolute -top-[54px] left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border-strong)] rounded-[30px] px-4 py-2 shadow-lg z-10">
              <span className="ts-pills-label text-[var(--color-text-primary)] whitespace-nowrap">
                {copied ? "Copied to clipboard!" : "Copy binjobiz@gmail.com"}
              </span>
            </div>

            <div className="ts-mono-label text-[var(--color-accent)] text-center">
              say hello
            </div>
            
            <div className="flex items-center transition-transform duration-300 group-hover:scale-[1.05]">
              <span className="ts-big-cta text-[56px] md:text-[100px] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">Let's talk</span>
              <span className="arrow inline-block transition-transform duration-300 transition-colors text-[52px] md:text-[92px] leading-none text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                ↗
              </span>
            </div>
          </button>

          <p className="ts-body text-[var(--color-text-muted)] text-center max-w-[520px] relative z-[2]">
            I&apos;m most energized by 0→1 products where I can own the loop from interface
            to implementation. Open to roles, contract work, and good conversations about hard
            problems.
          </p>
        </div>

        <div className="links flex gap-[var(--space-6xl)] justify-center flex-wrap relative z-[2]">
          {links.map(({ href, label }) => (
            label === "Email" ? (
              <button
                key={label}
                onClick={handleCopy}
                className="ts-colophon text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-[250ms] cursor-pointer relative group"
              >
                {label}
                {/* Small Tooltip for Footer Email */}
                <div className="absolute -top-[36px] left-1/2 -translate-x-1/2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border-strong)] rounded-[30px] px-3 py-1 shadow-md z-10">
                  <span className="ts-pills-label text-[var(--color-text-primary)] whitespace-nowrap text-[10px]">
                    {copied ? "Copied!" : "Copy Email"}
                  </span>
                </div>
              </button>
            ) : (
              <a
                key={label}
                href={href}
                className="ts-colophon text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-[250ms]"
              >
                {label}
              </a>
            )
          ))}
        </div>
      </div>

      <style>{`
        .bigcta:hover .arrow { transform: translate(10px,-10px) scale(1.1); }
        @media (max-width: 640px) {
          .geo-contact { width: 400px !important; height: 400px !important; }
        }
      `}</style>
    </section>
  );
}
