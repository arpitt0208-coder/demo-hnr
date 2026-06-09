export function TopographicPattern() {
  return (
    <svg
      className="pointer-events-none absolute -right-[10%] -top-[5%] h-[70%] w-[70%] opacity-[0.08]"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[...Array(16)].map((_, i) => (
        <ellipse
          key={i}
          cx={200 + (i % 4) * 350}
          cy={150 + Math.floor(i / 4) * 200}
          rx={60 + (i % 3) * 30}
          ry={40 + (i % 2) * 20}
          stroke="#94A3B8"
          strokeWidth="0.8"
          fill="none"
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <path
          key={`contour-${i}`}
          d={`M${-50 + i * 30} ${80 + i * 70} Q${300 + i * 20} ${40 + i * 70} ${700 + i * 10} ${80 + i * 70} T${1500} ${80 + i * 70}`}
          stroke="#94A3B8"
          strokeWidth="0.6"
          fill="none"
        />
      ))}
    </svg>
  );
}
