"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary-yellow bg-white px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-primary-yellow",
        className
      )}
    >
      <Star className="h-3.5 w-3.5 fill-primary-yellow text-primary-yellow" />
      {children}
    </motion.span>
  );
}
