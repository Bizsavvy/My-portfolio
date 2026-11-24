"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { id: string; label: string };

/**
 * The detailed case study's section list. Marks the section being read with
 * `aria-current` and the primary text colour; nothing moves.
 */
export function OnThisPage({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => el !== null);
    if (!headings.length) return;

    // The active section is the last heading that has passed a line 30% down the screen.
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = headings[0].id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= line) current = h.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="font-mono text-label text-muted-foreground uppercase">On this page</p>
      {/* The rail marks the current section by position as well as colour. */}
      <ul className="mt-g17 flex flex-col border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-l-2 py-g4 pl-g10 text-caption transition-colors duration-150 ease-standard hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                active === item.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
