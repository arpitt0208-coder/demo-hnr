"use client";

import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { cn } from "@/lib/cn";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: 2 + (i % 3),
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  duration: 12 + (i % 6),
  delay: (i % 8) * 0.5,
}));

interface PremiumBackgroundProps {
  className?: string;
  showParticles?: boolean;
  showFog?: boolean;
}

export function PremiumBackground({
  className,
  showParticles = true,
  showFog = true,
}: PremiumBackgroundProps) {
  const { x, y } = useMouseParallax(14);

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <motion.div
        className="absolute -inset-[30%] opacity-60"
        style={{ x: x * 0.4, y: y * 0.4 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(247,203,70,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(255,107,53,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(247,203,70,0.06),transparent_45%)]" />
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ x: x * -0.2, y: y * -0.2 }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute inset-[-50%] blur-3xl"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(247,203,70,0.1), rgba(255,107,53,0.06), rgba(255,255,255,0.3), rgba(247,203,70,0.08))",
          }}
        />
      </motion.div>

      {showFog && (
        <>
          <motion.div
            className="absolute bottom-0 left-0 h-[40%] w-full bg-gradient-to-t from-white via-white/70 to-transparent"
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(247,203,70,0.05),transparent_70%)]"
            animate={{ y: [0, -8, 0], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {showParticles &&
        PARTICLES.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-[#F7CB46]/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.4)_80%)]" />
    </div>
  );
}
