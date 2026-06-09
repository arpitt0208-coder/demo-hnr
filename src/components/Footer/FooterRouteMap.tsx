import { footerRouteStops } from "@/data/footer";

const routePoints = [
  { x: 80, y: 118 },
  { x: 220, y: 88 },
  { x: 360, y: 108 },
  { x: 500, y: 72 },
  { x: 620, y: 96 },
  { x: 820, y: 82 },
  { x: 1040, y: 98 },
];

export function FooterRouteMap() {
  const pathD = `M ${routePoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`;

  return (
    <div
      className="relative h-[220px] w-full overflow-hidden sm:h-[220px]"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 130"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M0 170 L120 155 L260 140 L420 148 L580 132 L760 138 L920 128 L1080 142 L1200 136 L1200 190 L0 190 Z"
          fill="#111111"
        />
        <path
          d="M0 155 L100 148 L240 128 L400 136 L560 118 L740 124 L900 112 L1060 122 L1200 116 L1200 190 L0 190 Z"
          fill="#0d0d0d"
        />
        <path
          d="M0 142 L80 132 L200 118 L360 126 L520 108 L700 114 L860 104 L1020 112 L1200 106 L1200 190 L0 190 Z"
          fill="#080808"
        />

        <path
          d={pathD}
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeLinecap="round"
        />

        {routePoints.map((point, i) => (
          <g key={footerRouteStops[i].label}>
            <circle
              cx={point.x}
              cy={point.y}
              r="7"
              fill="#efbe3d"
              opacity="0.25"
            />
            <circle cx={point.x} cy={point.y} r="4.5" fill="#efbe3d" />
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-3">
        {routePoints.map((point, i) => (
          <span
            key={footerRouteStops[i].label}
            className="absolute -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-white/85 sm:text-[11px]"
            style={{ left: `${(point.x / 1200) * 100}%` }}
          >
            {footerRouteStops[i].label}
          </span>
        ))}
      </div>
    </div>
  );
}
