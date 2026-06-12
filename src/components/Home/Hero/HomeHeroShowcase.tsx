"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { bikeImages, podium } from "@/assets/images";
import { HomeBikeCard } from "@/components/Home/BikeCard/HomeBikeCard";
import { featuredBikes } from "@/data/bikes";

type HomeHeroShowcaseProps = {
  variant?: "default" | "storm";
};

export function HomeHeroShowcase({
  variant = "default",
}: HomeHeroShowcaseProps) {
  const isStorm = variant === "storm";

  return (
    <div className="w-full min-w-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex h-[280px] w-full max-w-[680px] items-center justify-center min-[400px]:h-[320px] sm:h-[380px] md:h-[440px] lg:h-[min(620px,100%)] lg:min-h-[580px] xl:max-w-[700px]"
      >
        <div className="relative h-full w-full max-w-[640px] overflow-visible">
          {featuredBikes.map((bike) => (
            <HomeBikeCard key={bike.id} bike={bike} />
          ))}

          <div className="absolute inset-x-0 top-[38%] mx-auto w-full max-w-[min(100%,540px)] sm:top-[36%] lg:top-[32%] xl:max-w-[580px]">
            <div className="relative z-20 mx-auto aspect-[2.35/1] w-full max-w-[min(100%,500px)] lg:max-w-[540px]">
              <Image
                src={bikeImages.himalayan}
                alt="Royal Enfield Himalayan motorcycle"
                fill
                className="!top-[20px] object-contain object-bottom sm:!top-[30px]"
                priority
                sizes="(max-width: 768px) 88vw, 540px"
              />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[min(100%,580px)] lg:max-w-[620px]">
              <Image
                src={podium}
                alt=""
                className="h-auto w-full object-contain"
                priority
                sizes="(max-width: 768px) 95vw, 620px"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-5 w-full lg:hidden">
        <p
          className={`mb-3 text-center text-[11px] font-bold tracking-[0.14em] ${
            isStorm ? "text-zinc-300" : "text-[#475569]"
          }`}
        >
          EXPLORE BY LOCATION
        </p>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {featuredBikes.map((bike) => (
            <HomeBikeCard key={`mobile-${bike.id}`} bike={bike} variant="grid" />
          ))}
        </div>
      </div>
    </div>
  );
}
