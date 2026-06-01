const items = [
  "Next.js", "React", "TypeScript", "Figma", "Tailwind", "Vite",
  "EMVCo / NQR", "Design Systems", "0 → 1 Product",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="marquee border-t border-b border-[var(--color-line)] py-[22px] overflow-hidden whitespace-nowrap relative z-[5]"
      style={{ WebkitMaskImage: "none" }}
    >
      <div
        className="track inline-flex"
        style={{ animation: "scroll-marquee 36s linear infinite", willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-pixel text-[20px] text-[var(--color-muted)] px-7 inline-flex items-center gap-7 after:content-['✦'] after:text-[var(--color-accent)] after:text-[13px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
