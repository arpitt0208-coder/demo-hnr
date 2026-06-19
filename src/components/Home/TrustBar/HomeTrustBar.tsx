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
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay: 1.1, ease: smoothEase }}
      className={cn("relative z-30 w-full", className)}
      aria-label="Trust indicators"
    >
      <div className="glass-card rounded-[20px] px-3 py-3.5 shadow-[0_10px_44px_rgba(15,23,42,0.08)] sm:rounded-[32px] sm:px-5 sm:py-4 md:rounded-[48px] md:px-8 md:py-5 lg:rounded-[60px] lg:px-10">
        <div className="grid grid-cols-2 gap-x-2 gap-y-3.5 sm:gap-x-4 sm:gap-y-5 md:flex md:items-center md:justify-between md:gap-0">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.07, duration: 0.75, ease: smoothEase }}
                className="relative flex min-w-0 items-center gap-2 sm:gap-3 md:flex-1 md:justify-center md:px-4"
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
                <p className="min-w-0 text-[10px] font-bold leading-tight text-dark-navy min-[400px]:text-[11px] sm:text-[12px] md:text-sm">
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
