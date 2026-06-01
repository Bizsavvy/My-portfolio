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

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText("binjobiz@gmail.com").catch(() => fallbackCopy("binjobiz@gmail.com"));
    } else {
      fallbackCopy("binjobiz@gmail.com");
    }
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
            
            <div className="flex flex-nowrap items-center transition-transform duration-300 group-hover:scale-[1.05]">
              <span className="ts-big-cta whitespace-nowrap text-[56px] md:text-[100px] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">Let's talk</span>
              <span className="arrow shrink-0 inline-block transition-transform duration-300 transition-colors w-[52px] h-[52px] md:w-[92px] md:h-[92px] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                <svg width="100%" height="100%" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M37.0798 19.4082C36.5478 19.5958 36.0672 19.9056 35.6768 20.3128C35.3093 20.6568 35.0162 21.0725 34.8157 21.5342C34.6152 21.9959 34.5116 22.4939 34.5112 22.9973C34.5109 23.5006 34.6138 23.9987 34.8136 24.4608C35.0135 24.9228 35.3059 25.3389 35.673 25.6833C36.8613 26.8678 36.455 26.8333 48.8252 26.8333H59.7233L40.4455 46.115C25.3882 61.18 21.1063 65.5462 20.8648 66.0867C20.5542 66.7961 20.4613 67.5818 20.5978 68.3441C20.7343 69.1064 21.094 69.811 21.6315 70.3685C22.1891 70.906 22.8937 71.2658 23.656 71.4023C24.4183 71.5387 25.2039 71.4458 25.9133 71.1352C26.4538 70.8937 30.82 66.6118 45.885 51.5545L65.1667 32.2767V43.2515C65.1667 55.6562 65.1207 55.1272 66.3397 56.35C67.0297 57.0362 68.0953 57.5 69 57.5C70.541 57.5 72.1702 56.304 72.5995 54.855C72.9522 53.6743 72.9522 22.9923 72.5995 21.8117C72.4099 21.2515 72.0937 20.7426 71.6755 20.3245C71.2574 19.9063 70.7485 19.5902 70.1883 19.4005C69.0422 19.0593 38.1877 19.067 37.0798 19.4082Z" fill="currentColor"/>
                </svg>
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
