export function SupportHalftone() {
  const rows = 5;
  const cols = 9;

  return (
    <div className="pointer-events-none" aria-hidden="true">
      <div
        className="grid gap-[4px]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 4px)`,
          gridTemplateRows: `repeat(${rows}, 4px)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const opacity = Math.max(0.1, 0.85 - row * 0.16 - col * 0.07);

          return (
            <div
              key={i}
              className="size-1 rounded-full bg-primary-yellow"
              style={{ opacity }}
            />
          );
        })}
      </div>
    </div>
  );
}
