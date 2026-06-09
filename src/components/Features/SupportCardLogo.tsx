export function SupportCardLogo() {
  return (
    <div className="flex flex-col gap-2">
      <svg
        width="56"
        height="32"
        viewBox="0 0 56 32"
        fill="none"
        aria-hidden="true"
      >
        <text
          x="0"
          y="24"
          fill="#000000"
          fontSize="24"
          fontWeight="900"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          H
        </text>
        <path
          d="M22 2 L30 24 L26 24 L24 18 L18 18 L16 24 L12 24 Z M20 14 L22 8 L24 14 Z"
          fill="#efbe3d"
        />
        <text
          x="34"
          y="24"
          fill="#000000"
          fontSize="24"
          fontWeight="900"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          R
        </text>
      </svg>

      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-extrabold uppercase leading-none tracking-[0.05em] text-black">
          Hire <span className="text-primary-yellow">n</span> Ride
        </span>
        <div className="h-px w-9 bg-primary-yellow" aria-hidden="true" />
        <span className="text-[7px] font-medium uppercase tracking-[0.16em] text-black/70">
          Ride more, worry less.
        </span>
      </div>
    </div>
  );
}
