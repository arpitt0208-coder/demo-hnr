"use client";

import { motion } from "framer-motion";
import { trustItems } from "@/data/trust";
import { cn } from "@/lib/cn";
import { smoothEase } from "@/lib/motion";

interface HomeTrustBarProps {
  className?: string;
}

export function HomeTrustBar({ className }: HomeTrustBarProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.75, ease: smoothEase }}
      className={cn("relative z-30 w-full", className)}
      aria-label="Trust indicators"
    >
      <div className="rounded-[20px] border border-[#eaeaea] bg-white px-3 py-3.5 shadow-[0_12px_48px_rgba(15,23,42,0.14)] sm:rounded-[32px] sm:px-5 sm:py-4 md:rounded-[48px] md:px-8 md:py-5 lg:rounded-[60px] lg:px-10">
        <div className="grid grid-cols-2 gap-x-2 gap-y-3.5 sm:gap-x-4 sm:gap-y-5 md:flex md:items-center md:justify-between md:gap-0">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + index * 0.07, duration: 0.75, ease: smoothEase }}
                whileHover={{ y: -2 }}
                className="group relative flex min-w-0 items-center gap-2 sm:gap-3 md:flex-1 md:justify-center md:px-4"
              >
                {index > 0 && (
                  <div
                    className="absolute -left-2 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-[#eaeaea] md:block"
                    aria-hidden="true"
                  />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-yellow/20 transition-transform duration-500 group-hover:scale-110">
                  <Icon
                    className="icon-pulse-soft h-5 w-5 text-[#c9971a]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <p className="min-w-0 text-[11px] font-bold leading-snug text-[#0f172a] min-[400px]:text-xs sm:text-[13px] md:text-sm">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
