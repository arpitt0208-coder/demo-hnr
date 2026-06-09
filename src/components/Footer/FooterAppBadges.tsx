function AppStoreBadge() {
  return (
    <svg
      width="120"
      height="36"
      viewBox="0 0 120 36"
      fill="none"
      aria-hidden="true"
    >
      <rect width="120" height="36" rx="6" fill="#000000" />
      <rect
        x="0.5"
        y="0.5"
        width="119"
        height="35"
        rx="5.5"
        stroke="rgba(255,255,255,0.25)"
      />
      <path
        d="M22.5 18.2c0-1.5.8-2.6 2.1-3.3-.8-1.2-2.1-1.8-3.7-1.8-1.6 0-2.8.7-3.6 1.8-1 .9-1.5 2.3-1.5 4 0 1.7.7 3.2 1.8 4.2.8.8 1.8 1.2 2.9 1.2 1.5 0 2.6-.6 3.4-1.7-1.3-.7-2-1.8-2-3.4zm-1.5-5.6c.7-.8 1.2-1.9 1-3-.9.1-2 .6-2.6 1.4-.7.7-1.2 1.8-1 2.9 1 .1 2-.5 2.6-1.3z"
        fill="#ffffff"
      />
      <text
        x="34"
        y="13"
        fill="#ffffff"
        fontSize="7"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        Download on the
      </text>
      <text
        x="34"
        y="25"
        fill="#ffffff"
        fontSize="11"
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
      width="120"
      height="36"
      viewBox="0 0 120 36"
      fill="none"
      aria-hidden="true"
    >
      <rect width="120" height="36" rx="6" fill="#000000" />
      <rect
        x="0.5"
        y="0.5"
        width="119"
        height="35"
        rx="5.5"
        stroke="rgba(255,255,255,0.25)"
      />
      <path d="M14 8.5l9.5 9.5-9.5 9.5V8.5z" fill="#34A853" />
      <path d="M23.5 18l4.5 4.1-9.5 5.4 5-9.5z" fill="#FBBC04" />
      <path d="M23.5 18l-9.5-9.5 5 9.5 4.5-4.5z" fill="#4285F4" />
      <path d="M28 22.1l-4.5-4.1 9.5 5.4-5-1.3z" fill="#EA4335" />
      <text
        x="36"
        y="13"
        fill="#ffffff"
        fontSize="7"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        GET IT ON
      </text>
      <text
        x="36"
        y="25"
        fill="#ffffff"
        fontSize="11"
        fontWeight="600"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        Google Play
      </text>
    </svg>
  );
}

function QrCode() {
  const cells = [
    "11100111",
    "10100101",
    "11100111",
    "00011000",
    "10111010",
    "11010111",
    "10101010",
    "11100111",
  ];

  return (
    <div
      className="grid size-[72px] shrink-0 grid-cols-8 gap-[2px] rounded-[4px] bg-white p-1.5 sm:size-[80px]"
      aria-hidden="true"
    >
      {cells.flatMap((row, rowIndex) =>
        row.split("").map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={cell === "1" ? "bg-black" : "bg-white"}
          />
        ))
      )}
    </div>
  );
}

export function FooterAppBadges() {
  return (
    <div className="flex items-center gap-4">
      <QrCode />
      <div className="flex flex-col gap-2">
        <AppStoreBadge />
        <GooglePlayBadge />
      </div>
    </div>
  );
}
