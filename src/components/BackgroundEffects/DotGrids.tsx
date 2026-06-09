const dotClusters = [
  { left: "4%", top: "28%", cols: 4, rows: 3 },
  { left: "78%", top: "18%", cols: 5, rows: 4 },
  { left: "88%", top: "62%", cols: 3, rows: 3 },
  { left: "12%", top: "72%", cols: 4, rows: 2 },
  { left: "62%", top: "52%", cols: 3, rows: 2 },
];

export function DotGrids() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {dotClusters.map((cluster, ci) => (
        <div
          key={ci}
          className="absolute grid gap-[6px]"
          style={{
            left: cluster.left,
            top: cluster.top,
            gridTemplateColumns: `repeat(${cluster.cols}, 3px)`,
            gridTemplateRows: `repeat(${cluster.rows}, 3px)`,
          }}
        >
          {Array.from({ length: cluster.cols * cluster.rows }).map((_, i) => (
            <div
              key={i}
              className="h-[3px] w-[3px] rounded-full bg-text-gray/25"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
