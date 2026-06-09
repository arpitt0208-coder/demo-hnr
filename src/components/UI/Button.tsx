"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  className,
  showArrow = true,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full bg-primary-yellow px-8 py-3.5 text-[15px] font-bold text-dark-navy shadow-[0_6px_24px_rgba(239,190,61,0.35)] transition-shadow hover:shadow-[0_10px_32px_rgba(239,190,61,0.45)]",
        className,
      )}
      aria-label={typeof children === "string" ? children : "Call to action"}
    >
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </motion.button>
  );
}
