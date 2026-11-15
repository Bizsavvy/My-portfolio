import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/home/hero";
import { Work } from "@/components/home/work";
import { Contact, SiteFooter } from "@/components/home/contact";

/**
 * Home, per the Figma reference notes and Docs/Design-System.md: hero, work (bento grid
 * with Everything and Case studies tabs), contact. No resume section; the nav links to it.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Work />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
