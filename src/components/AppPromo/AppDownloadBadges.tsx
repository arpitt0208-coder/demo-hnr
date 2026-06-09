function AppStoreBadge() {
  return (
    <svg
      width="132"
      height="40"
      viewBox="0 0 132 40"
      fill="none"
      aria-hidden="true"
      className="h-10 w-[132px]"
    >
      <rect width="132" height="40" rx="8" fill="#000000" />
      <rect
        x="0.5"
        y="0.5"
        width="131"
        height="39"
        rx="7.5"
        stroke="rgba(255,255,255,0.25)"
      />
      <path
        d="M24.5 20.2c0-1.5.8-2.6 2.1-3.3-.8-1.2-2.1-1.8-3.7-1.8-1.6 0-2.8.7-3.6 1.8-1 .9-1.5 2.3-1.5 4 0 1.7.7 3.2 1.8 4.2.8.8 1.8 1.2 2.9 1.2 1.5 0 2.6-.6 3.4-1.7-1.3-.7-2-1.8-2-3.4zm-1.5-5.6c.7-.8 1.2-1.9 1-3-.9.1-2 .6-2.6 1.4-.7.7-1.2 1.8-1 2.9 1 .1 2-.5 2.6-1.3z"
        fill="#ffffff"
      />
      <text
        x="38"
        y="15"
        fill="#ffffff"
        fontSize="7.5"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        Download on the
      </text>
      <text
        x="38"
        y="28"
        fill="#ffffff"
        fontSize="12"
        fontWeight="600"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        App Store
      </text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg
      width="132"
      height="40"
      viewBox="0 0 132 40"
      fill="none"
      aria-hidden="true"
      className="h-10 w-[132px]"
    >
      <rect width="132" height="40" rx="8" fill="#000000" />
      <rect
        x="0.5"
        y="0.5"
        width="131"
        height="39"
        rx="7.5"
        stroke="rgba(255,255,255,0.25)"
      />
      <path d="M15 9.5l10.5 10.5-10.5 10.5V9.5z" fill="#34A853" />
      <path d="M25.5 20l5 4.6-10.5 6 5.5-10.6z" fill="#FBBC04" />
      <path d="M25.5 20l-10.5-10.5 5.5 10.5 5-4.5z" fill="#4285F4" />
      <path d="M30.5 24.6l-5-4.6 10.5 6-5.5-1.4z" fill="#EA4335" />
      <text
        x="40"
        y="15"
        fill="#ffffff"
        fontSize="7.5"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        GET IT ON
      </text>
      <text
        x="40"
        y="28"
        fill="#ffffff"
        fontSize="12"
        fontWeight="600"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        Google Play
      </text>
    </svg>
  );
}

export function AppDownloadBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href="#download" aria-label="Download on the App Store">
        <AppStoreBadge />
      </a>
      <a href="#download" aria-label="Get it on Google Play">
        <GooglePlayBadge />
      </a>
    </div>
  );
}
