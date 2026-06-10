"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type HeroFeature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

interface HeroFeatureCardProps {
  feature: HeroFeature;
  className?: string;
}

export function HeroFeatureCard({ feature, className }: HeroFeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col rounded-2xl border border-border/40 bg-white px-3.5 py-4 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:px-4 sm:py-4.5",
        className,
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-yellow/15">
        <Icon
          className="size-4 text-primary-yellow"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-3 text-[13px] font-bold leading-tight text-dark-navy sm:text-[14px]">
        {feature.title}
      </h3>
      <p className="mt-1.5 text-[11px] font-medium leading-[1.55] text-[#475569] sm:text-[12px]">
        {feature.description}
      </p>
    </article>
  );
}
