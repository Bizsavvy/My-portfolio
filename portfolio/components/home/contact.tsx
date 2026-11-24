import { ArrowUpRight } from "lucide-react";
import { links, socialLinks } from "@/lib/links";
import { CopyEmail } from "@/components/site/copy-email";

/** Contact follows the work: the point a hiring manager decides to reach out (Figma notes). */
export function Contact() {
  const outbound = [
    ...socialLinks.filter((l) => l.label !== "Email"),
    { label: "Resume", href: links.resume },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto flex max-w-[1280px] flex-col items-center px-g17 pb-g116 text-center md:px-g27 lg:px-g44">
      <h2 id="contact-heading" className="text-heading text-foreground sm:text-title-xl lg:text-display">
        Let&apos;s talk
      </h2>
      <p className="mt-g17 text-lead text-foreground-secondary">Email is the quickest way to reach me.</p>
      <div className="mt-g27">
        <CopyEmail variant="default" />
      </div>
      <ul className="mt-g27 flex flex-wrap justify-center gap-x-g27 gap-y-g10">
        {outbound.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-6 items-center gap-g4 rounded-sm text-button text-muted-foreground transition-colors duration-150 ease-standard hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {l.label}
              <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-g10 px-g17 py-g27 text-caption text-muted-foreground md:px-g27 lg:px-g44">
        <span>Haye Binjo · Design engineer</span>
        <a
          href="https://github.com/Bizsavvy/My-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-g4 rounded-sm transition-colors duration-150 ease-standard hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View source
          <ArrowUpRight aria-hidden className="size-3.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
