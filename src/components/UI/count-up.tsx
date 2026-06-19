"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/cn";

interface CountUpTextProps {
  value: string;
  className?: string;
}

export function CountUpText({ value, className }: CountUpTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const display = useCountUp(value, inView);

  return (
    <span
      ref={ref}
      className={cn(
        "tabular-nums transition-[text-shadow] duration-500",
        inView && "text-shadow-glow",
        className,
      )}
    >
      {display}
    </span>
  );
}
