"use client";

import { useTilt } from "@/hooks/use-tilt";
import { cn } from "@/lib/cn";
import type { CSSProperties, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glow?: boolean;
}

export function TiltCard({ children, className, style, glow = true }: TiltCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(12);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className={cn(
        "group relative transition-[box-shadow] duration-500",
        glow &&
          "before:pointer-events-none before:absolute before:-inset-px before:rounded-[inherit] before:bg-gradient-to-br before:from-[#F7CB46]/40 before:via-transparent before:to-[#FF6B35]/30 before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100",
        className,
      )}
      data-cursor-hover
    >
      {children}
    </div>
  );
}
