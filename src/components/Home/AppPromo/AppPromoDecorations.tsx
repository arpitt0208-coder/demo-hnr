"use client";

function DotCluster({ className }: { className?: string }) {
  const dots = [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
    [0, 2],
    [3, 0],
    [3, 1],
    [4, 1],
    [4, 2],
    [3, 2],
    [2, 3],
    [3, 3],
    [4, 3],
    [1, 3],
    [0, 3],
    [4, 0],
  ];

  return (
    <div className={className} aria-hidden="true">
      <div
        className="grid gap-[5px] opacity-70"
        style={{
          gridTemplateColumns: "repeat(5, 5px)",
          gridTemplateRows: "repeat(4, 5px)",
        }}
      >
        {dots.map(([col, row], i) => (
          <div
            key={i}
            className="size-[5px] rounded-full bg-primary-yellow"
            style={{ gridColumn: col + 1, gridRow: row + 1 }}
          />
        ))}
      </div>
    </div>
  );
}

export function AppPromoDotDecorations() {
  return (
    <>
      <DotCluster className="pointer-events-none absolute left-5 top-8 z-[1] sm:left-10 sm:top-10" />
      <DotCluster className="pointer-events-none absolute bottom-20 right-6 z-[1] sm:bottom-24 sm:right-12" />
    </>
  );
}
