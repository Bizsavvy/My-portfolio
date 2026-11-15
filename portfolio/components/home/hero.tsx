import { Button } from "@/components/shadcn/button";
import { links } from "@/lib/links";

/**
 * Centred, like the Stephen Jude reference: a bold line on what Haye does, a short
 * about, one primary action. No hero image (Figma notes).
 */
export function Hero() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center px-g17 pt-g72 pb-g72 text-center md:px-g27 lg:px-g44 lg:pt-g116">
      <p className="font-mono text-label text-balance text-muted-foreground uppercase">
        Design engineer · Abuja, open to remote roles
      </p>
      <h1 className="mt-g17 max-w-[880px] text-heading text-balance text-foreground sm:text-title-xl lg:text-display">
        I design and build payments and operations software.
      </h1>
      <p className="mt-g27 max-w-[640px] text-lead text-pretty text-foreground-secondary">
        I lead product design at Shappay, a QR payments app for Nigeria, and ship my designs
        in code. On Shappay, two rounds of usability tests decided what the redesign changed.
      </p>
      <Button asChild className="mt-g44">
        <a href={`mailto:${links.email}`}>Get in touch</a>
      </Button>
    </section>
  );
}
