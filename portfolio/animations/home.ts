/* Home page GSAP animations — client-only */

export function charSplit(el: HTMLElement): HTMLSpanElement[] {
  const txt = el.textContent || "";
  el.innerHTML = "";
  return txt.split("").map((ch) => {
    const s = document.createElement("span");
    s.style.display = "inline-block";
    s.textContent = ch === " " ? " " : ch;
    el.appendChild(s);
    return s;
  });
}

function showAll() {
  document
    .querySelectorAll(
      ".reveal, .hero-label, .bigname, .statement, .herometa, .herocta, nav, .folder, .sechead, .aboutgrid > div, .nowcard, .bigcta, .contact-section p, .links a, .links button, .marquee, .geo-contact rect"
    )
    .forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
    });
}

export async function runHomeAnimations() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showAll();
    return;
  }

  const safetyTimer = setTimeout(showAll, 2000);

  try {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    clearTimeout(safetyTimer);

    const ease = "power3.out";
    const easeSoft = "power2.out";

    gsap.registerPlugin(ScrollTrigger);

    /* 1. initial states */
    gsap.set(".hero-label", { opacity: 0, y: 16 });
    const bignameEl = document.querySelector(".bigname") as HTMLElement | null;
    const chars = bignameEl ? charSplit(bignameEl) : [];
    if (chars.length) gsap.set(chars, { opacity: 0, y: 40 });
    gsap.set(".statement", { opacity: 0, y: 20 });
    gsap.set(".herometa .pill", { opacity: 0, y: 14 });
    gsap.set(".herocta .btn", { opacity: 0, y: 12 });
    gsap.set("nav", { opacity: 0, y: -20 });

    /* 1b. initial states for scroll reveals (prevents glitching) */
    gsap.set(
      ".sechead, .aboutgrid > div, .nowcard, .folder, .marquee, .geo-contact rect, .bigcta, .contact-section p, .links a, .links button",
      { opacity: 0 }
    );

    /* 2. Hero timeline */
    const heroTl = gsap.timeline({ defaults: { ease } });
    heroTl.to("nav", { opacity: 1, y: 0, duration: 0.6 });
    heroTl.to(".hero-label", { opacity: 1, y: 0, duration: 0.65 }, "-=0.3");
    if (chars.length) {
      heroTl.to(chars, { opacity: 1, y: 0, duration: 0.55, stagger: 0.05 }, "-=0.3");
    }
    heroTl.to(".statement", { opacity: 1, y: 0, duration: 0.6 }, "-=0.25");
    heroTl.to(".herometa .pill", { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, "-=0.3");
    heroTl.to(".herocta .btn", { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.25");

    /* 3. Hero geo parallax */
    gsap.to(".hero-geo svg", {
      y: 70,
      ease: "none",
      scrollTrigger: {
        trigger: "header.hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.6,
      },
    });

    /* 4. Scroll reveals — driven by ScrollTrigger so fast scrolling can't
       snap an already-visible element back to its start state. */
    gsap.utils
      .toArray<HTMLElement>(".sechead, .aboutgrid > div, .nowcard")
      .forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });

    gsap.utils.toArray<HTMLElement>(".folder").forEach((folder) => {
      gsap.fromTo(
        folder,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease,
          scrollTrigger: { trigger: folder, start: "top 92%", once: true },
        }
      );
    });

    const mq = document.querySelector<HTMLElement>(".marquee");
    if (mq) {
      gsap.fromTo(
        mq,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          ease: easeSoft,
          scrollTrigger: { trigger: mq, start: "top 100%", once: true },
        }
      );
    }

    const ct = document.querySelector<HTMLElement>(".contact-section");
    if (ct) {
      const ctTl = gsap.timeline({
        scrollTrigger: { trigger: ct, start: "top 88%", once: true },
      });
      ctTl.fromTo(
        ".geo-contact rect",
        { scale: 0.7, opacity: 0, transformOrigin: "center center" },
        { scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: easeSoft }
      );
      ctTl.fromTo(
        ".bigcta",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, ease },
        0.2
      );
      ctTl.fromTo(
        ".contact-section p, .links a, .links button",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: easeSoft },
        0.4
      );
    }

    /* 5. Magnetic primary CTA */
    document.querySelectorAll<HTMLElement>(".btn.primary").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        gsap.to(btn, { x: (e.clientX - cx) * 0.22, y: (e.clientY - cy) * 0.22, duration: 0.35, ease: easeSoft });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: "power2.out" });
      });
    });

    /* 6. Folder tab number scale */
    document.querySelectorAll<HTMLElement>(".folder").forEach((folder) => {
      const no = folder.querySelector<HTMLElement>(".no");
      if (!no) return;
      folder.addEventListener("mouseenter", () => gsap.to(no, { scale: 1.1, duration: 0.22, ease: easeSoft }));
      folder.addEventListener("mouseleave", () => gsap.to(no, { scale: 1, duration: 0.32, ease: easeSoft }));
    });

    /* 7. bigcta letter-spacing breathe */
    const bigcta = document.querySelector<HTMLElement>(".bigcta");
    if (bigcta) {
      bigcta.addEventListener("mouseenter", () =>
        gsap.to(bigcta, { letterSpacing: "0.04em", duration: 0.38, ease: easeSoft })
      );
      bigcta.addEventListener("mouseleave", () =>
        gsap.to(bigcta, { letterSpacing: "0.01em", duration: 0.38, ease: easeSoft })
      );
    }
  } catch (err) {
    console.warn("GSAP animation error:", err);
    clearTimeout(safetyTimer);
    showAll();
  }
}
