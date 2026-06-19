"use client";

import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  by?: "char" | "word";
}

export function SplitText({
  children,
  className,
  as: Tag = "span",
  delay = 0,
  by = "char",
}: SplitTextProps) {
  const reduceMotion = useReducedMotion();
  const units =
    by === "word"
      ? children.split(" ").map((word, i, arr) => (i < arr.length - 1 ? `${word} ` : word))
      : children.split("");

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={cn("inline", className)} aria-label={children}>
      {units.map((unit, index) => (
        <motion.span
          key={`${unit}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + index * (by === "char" ? 0.02 : 0.05),
            duration: 0.75,
            ease: smoothEase,
          }}
          aria-hidden="true"
        >
          {unit === " " ? "\u00A0" : unit}
        </motion.span>
      ))}
    </Tag>
  );
}
