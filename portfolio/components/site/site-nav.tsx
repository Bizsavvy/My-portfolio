import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/links";
import { CopyEmail } from "@/components/site/copy-email";
import { ThemeToggle } from "@/components/site/theme-toggle";

/**
 * Sticky nav: photo and name, two links, the email pill and the theme toggle
 * (Figma reference notes; Docs/Design-System.md). A 44px control row with 17px above
 * and below. The bar is the page colour, translucent with a blur, so the email pill
 * (raised) is the element that stands out.
 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1280px] items-center justify-between gap-g17 px-g17 py-g17 md:px-g27 lg:px-g44"
      >
        <Link
          href="/"
          className="flex items-center gap-g10 rounded-full text-button text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src="/Haye-Headshot.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full object-cover"
            priority
          />
          Haye Binjo
        </Link>

        <ul className="hidden items-center gap-g27 sm:flex">
          <li>
            <Link href="/#work" className="text-button text-muted-foreground transition-colors duration-150 ease-standard hover:text-foreground">
              Work
            </Link>
          </li>
          <li>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-g4 text-button text-muted-foreground transition-colors duration-150 ease-standard hover:text-foreground"
            >
              Resume
              <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-g6">
          <CopyEmail variant="secondary" compactOnMobile />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
