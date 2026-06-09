"use client";

/**
 * @author: @emerald-ui
 * @description: Shiny Button Component - A button with a shiny gradient effect
 * @version: 1.0.0
 * @date: 2026-02-11
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export default function ShinyButton({
  className,
  children = "Shiny Day",
  ...props
}: ShinyButtonProps) {
  return (
    <button
      className={cn(
        "h-12 w-max rounded-xl border-none bg-[linear-gradient(325deg,#e8c85a_0%,#f5dc88_55%,#efbe3d_90%)] bg-size-[280%_auto] px-6 py-2 font-medium text-dark-navy shadow-[0px_0px_20px_rgba(239,190,61,0.4),0px_5px_5px_-1px_rgba(220,175,60,0.22),inset_4px_4px_8px_rgba(255,240,180,0.65),inset_-4px_-4px_8px_rgba(200,155,40,0.28)] transition-[background] duration-700 hover:bg-top-right focus:ring-primary-yellow focus:ring-offset-1 focus:ring-offset-white focus:outline-none focus-visible:ring-2 dark:focus:ring-primary-yellow dark:focus:ring-offset-black",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
