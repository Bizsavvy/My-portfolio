export function HeroGeo() {
  return (
    <div className="hero-geo absolute inset-0 pointer-events-none z-0">
<svg
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        {/* concentric rings */}
        <circle cx="720" cy="320" r="180" stroke="#38BDF8" strokeOpacity=".07" strokeWidth="1" />
        <circle cx="720" cy="320" r="290" stroke="#38BDF8" strokeOpacity=".05" strokeWidth="1" />
        <circle cx="720" cy="320" r="410" stroke="#ECEAE0" strokeOpacity=".04" strokeWidth="1" />
        <circle cx="720" cy="320" r="540" stroke="#ECEAE0" strokeOpacity=".03" strokeWidth="1" />
        {/* corner tick marks */}
        <line x1="60"   y1="60"  x2="90"   y2="60"  stroke="#38BDF8" strokeOpacity=".18" strokeWidth="1" />
        <line x1="60"   y1="60"  x2="60"   y2="90"  stroke="#38BDF8" strokeOpacity=".18" strokeWidth="1" />
        <line x1="1380" y1="60"  x2="1350" y2="60"  stroke="#38BDF8" strokeOpacity=".18" strokeWidth="1" />
        <line x1="1380" y1="60"  x2="1380" y2="90"  stroke="#38BDF8" strokeOpacity=".18" strokeWidth="1" />
        <line x1="60"   y1="620" x2="90"   y2="620" stroke="#38BDF8" strokeOpacity=".18" strokeWidth="1" />
        <line x1="60"   y1="620" x2="60"   y2="590" stroke="#38BDF8" strokeOpacity=".18" strokeWidth="1" />
        <line x1="1380" y1="620" x2="1350" y2="620" stroke="#38BDF8" strokeOpacity=".18" strokeWidth="1" />
        <line x1="1380" y1="620" x2="1380" y2="590" stroke="#38BDF8" strokeOpacity=".18" strokeWidth="1" />
        {/* crosshair dashes */}
        <line x1="720" y1="0"    x2="720"  y2="680" stroke="#ECEAE0" strokeOpacity=".04" strokeWidth="1" strokeDasharray="4 10" />
        <line x1="0"   y1="320"  x2="1440" y2="320" stroke="#ECEAE0" strokeOpacity=".04" strokeWidth="1" strokeDasharray="4 10" />
        {/* plus marks */}
        <g stroke="#38BDF8" strokeOpacity=".12" strokeWidth="1">
          <line x1="200"  y1="140" x2="200"  y2="156" /><line x1="192"  y1="148" x2="208"  y2="148" />
          <line x1="1240" y1="180" x2="1240" y2="196" /><line x1="1232" y1="188" x2="1248" y2="188" />
          <line x1="340"  y1="500" x2="340"  y2="516" /><line x1="332"  y1="508" x2="348"  y2="508" />
          <line x1="1100" y1="460" x2="1100" y2="476" /><line x1="1092" y1="468" x2="1108" y2="468" />
          <line x1="560"  y1="80"  x2="560"  y2="96"  /><line x1="552"  y1="88"  x2="568"  y2="88"  />
          <line x1="880"  y1="580" x2="880"  y2="596" /><line x1="872"  y1="588" x2="888"  y2="588" />
        </g>
      </svg>
    </div>
  );
}
