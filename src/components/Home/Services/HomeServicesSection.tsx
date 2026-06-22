"use client";

import { serviceTiers } from "@/data/serviceTiers";
import { StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
import { ServiceTierCard } from "./ServiceTierCard";

export function HomeServicesSection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-white px-3 pb-3 pt-14 sm:px-4 sm:pb-4 sm:pt-16 md:pt-[4.5rem]"
      aria-label="Premium ride services"
    >
      <StaggerReveal
        className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
        stagger={0.14}
      >
        {serviceTiers.map((tier, index) => (
          <StaggerItem
            key={tier.id}
            variant={index === 0 ? "slide-left" : "slide-right"}
          >
            <ServiceTierCard tier={tier} />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
