"use client";

import { motion } from "framer-motion";

const dots = [
  { x: "8%", y: "18%", size: 3 },
  { x: "88%", y: "12%", size: 4 },
  { x: "22%", y: "68%", size: 3 },
  { x: "72%", y: "78%", size: 3 },
  { x: "48%", y: "8%", size: 2 },
];

export function FloatingDots() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-text-gray/25"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
