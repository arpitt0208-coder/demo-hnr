"use client";

import { motion } from "framer-motion";
import { trustItems } from "@/data/trust";

type HomeTrustBarProps = {
  theme?: "default" | "storm";
};

export function HomeTrustBar({ theme = "default" }: HomeTrustBarProps) {
  const isStorm = theme === "storm";

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 mx-auto mt-6 w-full max-w-[1080px] sm:mt-8 md:mt-12 lg:mt-14"
      aria-label="Trust indicators"
    >
      <div
        className={`rounded-[20px] border px-3 py-3.5 sm:rounded-[32px] sm:px-5 sm:py-4 md:rounded-[48px] md:px-8 md:py-5 lg:rounded-[60px] lg:px-10 ${
          isStorm
            ? "border-white/10 bg-zinc-900/80 shadow-[0_10px_44px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            : "border-border/50 bg-white shadow-[0_10px_44px_rgba(15,23,42,0.08)]"
        }`}
      >
        <div className="grid grid-cols-2 gap-x-2 gap-y-3.5 sm:gap-x-4 sm:gap-y-5 md:flex md:items-center md:justify-between md:gap-0">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative flex min-w-0 items-center gap-2 sm:gap-3 md:flex-1 md:justify-center md:px-4"
              >
                {index > 0 && (
                  <div
                    className={`absolute -left-2 top-1/2 hidden h-9 w-px -translate-y-1/2 md:block ${isStorm ? "bg-white/15" : "bg-border/80"}`}
                    aria-hidden="true"
                  />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-yellow/15">
                  <Icon
                    className="h-5 w-5 text-primary-yellow"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <p
                  className={`min-w-0 text-[10px] font-bold leading-tight min-[400px]:text-[11px] sm:text-[12px] md:text-sm ${isStorm ? "text-zinc-200" : "text-dark-navy"}`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
