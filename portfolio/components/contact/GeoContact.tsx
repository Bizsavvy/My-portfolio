export function GeoContact() {
  return (
    <svg
      className="geo-contact absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        width: 820,
        height: 820,
        pointerEvents: "none",
        zIndex: 0,
      }}
      viewBox="0 0 820 820"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#38BDF8">
        <rect x="60"  y="60"  width="700" height="700" rx="24" strokeOpacity=".09" />
        <rect x="160" y="160" width="500" height="500" rx="18" strokeOpacity=".07" />
        <rect x="260" y="260" width="300" height="300" rx="14" strokeOpacity=".10" />
        <rect x="350" y="350" width="120" height="120" rx="10" strokeOpacity=".14" />
      </g>
      <g stroke="#ECEAE0">
        <rect x="110" y="110" width="600" height="600" rx="22" strokeOpacity=".05" />
        <rect x="210" y="210" width="400" height="400" rx="16" strokeOpacity=".04" />
      </g>
      <g stroke="#38BDF8" strokeOpacity=".18">
        <line x1="410" y1="60"  x2="410" y2="760" />
        <line x1="60"  y1="410" x2="760" y2="410" />
      </g>
    </svg>
  );
}
