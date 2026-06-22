"use client";

import { GlowButton } from "@/components/UI/glow-button";
import { cn } from "@/lib/cn";
import type { ServiceTier } from "@/data/serviceTiers";

type ServiceTierCardProps = {
  tier: ServiceTier;
};

export function ServiceTierCard({ tier }: ServiceTierCardProps) {
  const isLight = tier.variant === "light";

  return (
    <article
      className={cn(
        "group card-hover-lift flex min-h-[580px] flex-col overflow-hidden rounded-[22px] sm:min-h-[620px] sm:rounded-[24px]",
        isLight ? "bg-[#f5f5f7]" : "bg-black",
      )}
    >
      <div className="flex flex-col items-center px-6 pt-14 text-center sm:px-8 sm:pt-16 md:pt-[3.75rem]">
        <p
          className={cn(
            "text-sm font-normal leading-none transition-colors duration-500",
            isLight ? "text-[#6e6e73]" : "text-[#a1a1a6]",
          )}
        >
          {tier.eyebrow}
        </p>

        <h3
          className={cn(
            "mt-2 max-w-[18rem] whitespace-pre-line text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.02em] transition-transform duration-500 group-hover:scale-[1.02] sm:mt-2.5 sm:max-w-none sm:text-[3rem] md:text-[3.25rem]",
            isLight ? "text-[#1d1d1f]" : "text-white",
          )}
        >
          {tier.title}
        </h3>

        <div className="mt-5 flex items-center justify-center gap-6 transition-transform duration-500 group-hover:scale-[1.03] sm:mt-6">
          <GlowButton href={tier.bookHref} label="Explore More" showIcon={false} />
        </div>
      </div>

      <div className="relative mt-10 flex flex-1 items-end justify-center px-0 sm:mt-12">
        <div className="relative flex h-[min(42vw,320px)] w-full max-w-[92%] items-end justify-center sm:h-[min(38vw,360px)] md:h-[min(34vw,380px)]">
          <img
            src={tier.image}
            alt={tier.imageAlt}
            className="image-hover-zoom max-h-full w-auto max-w-full object-contain object-bottom"
          />
        </div>
      </div>
    </article>
  );
}
