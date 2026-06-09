"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function TravelRoutePath() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <motion.path
          d="M120 180 C280 120, 420 100, 560 200 S760 320, 920 260 S1100 340, 1280 300"
          stroke="#efbe3d"
          strokeWidth="2"
          strokeDasharray="3 14"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 2 }}
        className="absolute flex items-start gap-2"
        style={{ left: "64%", top: "14%" }}
      >
        <MapPin className="h-4 w-4 shrink-0 fill-primary-yellow text-primary-yellow" />
        <div className="text-left">
          <p className="text-[9px] font-bold tracking-[0.2em] text-primary-yellow">
            EXPLORE
          </p>
          <p className="mt-[2px] text-[10px] font-bold tracking-wider text-dark-navy">
            THE HIMALAYAS
          </p>
          <div
            className="mt-[3px] h-[2px] w-[46px] rounded-full bg-primary-yellow"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </div>
  );
}
