/* Case study GSAP animations — client-only */

function showAll() {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}

function charSplit(el: HTMLElement): HTMLSpanElement[] {
  const txt = el.textContent || "";
  el.innerHTML = "";
  return txt.split("").map((ch) => {
    const s = document.createElement("span");
    s.style.display = "inline-block";
    s.textContent = ch === " " ? " " : ch;
    el.appendChild(s);
    return s;
  });
}

export async function runCaseStudyAnimations() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showAll();
    return;
  }

  const safetyTimer = setTimeout(showAll, 2000);

  try {
    const { gsap } = await import("gsap");
    clearTimeout(safetyTimer);

    const ease = "power3.out";
    const easeSoft = "power2.out";

    /* h1 char split */
    const h1Target =
      (document.querySelector("h1 .scanwrap") as HTMLElement) ||
      (document.querySelector("h1") as HTMLElement);
    if (h1Target) {
      const spans = charSplit(h1Target);
      gsap.set(spans, { opacity: 0, y: 48 });
      gsap.to(spans, { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease, delay: 0.25 });
    }

    /* eyebrow + lede */
    gsap.set(".eyebrow, .lede", { opacity: 0, y: 20 });
    gsap.to(".eyebrow, .lede", { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease, delay: 0.6 });

    /* meta tiles */
    gsap.set(".meta > div", { opacity: 0, y: 14 });
    gsap.to(".meta > div", { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease, delay: 0.85 });

    /* scroll reveal */
    function revealOnScroll() {
      const winH = window.innerHeight;
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if ((el as any)._revealed) return;
        if (el.getBoundingClientRect().top < winH * 0.91) {
          (el as any)._revealed = true;
          gsap.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.75, ease });
        }
      });
    }
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll, { passive: true });

    /* card hover lift */
    document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
      card.addEventListener("mouseenter", () => gsap.to(card, { y: -4, duration: 0.28, ease: easeSoft }));
      card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, duration: 0.38, ease: easeSoft }));
    });

    /* footer next-link letter-spacing */
    const bl = document.querySelector<HTMLElement>(".next a.big-link");
    if (bl) {
      bl.addEventListener("mouseenter", () =>
        gsap.to(bl, { letterSpacing: "0.03em", duration: 0.35, ease: easeSoft })
      );
      bl.addEventListener("mouseleave", () =>
        gsap.to(bl, { letterSpacing: "-0.02em", duration: 0.35, ease: easeSoft })
      );
    }

    /* scan beam on h1 */
    const beam = document.getElementById("beam");
    if (beam) {
      setTimeout(() => {
        beam.style.transition = "transform .6s cubic-bezier(.4,0,.2,1),opacity .3s";
        beam.style.opacity = "1";
        beam.style.transform = "scaleX(1)";
        setTimeout(() => (beam.style.opacity = "0"), 620);
      }, 500);
    }

    /* scroll progress bar glow */
    const progress = document.getElementById("progress");
    if (progress) {
      let glowTimer: ReturnType<typeof setTimeout>;
      document.addEventListener(
        "scroll",
        () => {
          progress.style.boxShadow = "0 0 8px rgba(56,189,248,.55)";
          clearTimeout(glowTimer);
          glowTimer = setTimeout(() => (progress.style.boxShadow = "none"), 300);
        },
        { passive: true }
      );
    }
  } catch (err) {
    console.warn("GSAP error:", err);
    clearTimeout(safetyTimer);
    showAll();
  }
}
