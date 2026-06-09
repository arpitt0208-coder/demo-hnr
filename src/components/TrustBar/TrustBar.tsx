"use client";

import { motion } from "framer-motion";
import { trustItems } from "@/data/trust";

export function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 mx-auto mt-8 w-full max-w-[1080px] sm:mt-10 md:mt-14"
      aria-label="Trust indicators"
    >
      <div className="rounded-[28px] border border-border/50 bg-white px-4 py-4 shadow-[0_10px_44px_rgba(15,23,42,0.08)] sm:rounded-[40px] sm:px-6 sm:py-5 md:rounded-[60px] md:px-10">
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-5 md:flex md:items-center md:justify-between md:gap-0">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative flex items-center gap-3 md:flex-1 md:justify-center md:px-4"
              >
                {index > 0 && (
                  <div
                    className="absolute -left-2 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-border/80 md:block"
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
                <p className="text-[11px] font-bold leading-tight text-dark-navy min-[400px]:text-[12px] sm:text-[13px] md:text-sm">
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
