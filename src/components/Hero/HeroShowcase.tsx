"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { bikeImages, podium } from "@/assets/images";
import { BikeCard } from "@/components/BikeCard/BikeCard";
import { featuredBikes } from "@/data/bikes";

export function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex h-[320px] w-full max-w-[680px] items-center justify-center min-[400px]:h-[360px] sm:h-[440px] md:h-[500px] lg:h-[min(620px,100%)] lg:min-h-[580px] xl:max-w-[700px]"
    >
      <div className="relative h-full w-full max-w-[640px]">
        {featuredBikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}

        <div className="absolute inset-x-0 top-[36%] mx-auto w-full max-w-[540px] sm:top-[34%] lg:top-[32%] xl:max-w-[580px]">
          <div className="relative z-20 mx-auto aspect-[2.35/1] w-full max-w-[500px] lg:max-w-[540px]">
            <Image
              src={bikeImages.himalayan}
              alt="Royal Enfield Himalayan motorcycle"
              fill
              className="!top-[30px] object-contain object-bottom"
              priority
              sizes="(max-width: 768px) 88vw, 540px"
            />
          </div>

          <div className="relative z-10 -mt-[5%] mx-auto w-[106%] max-w-[580px] lg:max-w-[620px]">
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
  );
}
