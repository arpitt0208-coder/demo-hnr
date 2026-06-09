"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { bikeImages, podium } from "@/assets/images";
import { BikeCard } from "@/components/BikeCard/BikeCard";
import { featuredBikes } from "@/data/bikes";

export function FindYourRideShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex h-[300px] w-full max-w-[680px] items-center justify-center min-[400px]:h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px] xl:max-w-[700px]"
    >
      <div className="relative h-full w-full max-w-[640px]">
        {featuredBikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}

        <div className="absolute inset-x-0 top-[36%] mx-auto w-full max-w-[520px] sm:top-[34%] lg:top-[32%] xl:max-w-[560px]">
          <div className="relative z-20 mx-auto aspect-[2.35/1] w-full max-w-[480px] lg:max-w-[520px]">
            <Image
              src={bikeImages.himalayan}
              alt="Royal Enfield Himalayan motorcycle"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 88vw, 520px"
            />
          </div>

          <div className="relative z-10 -mt-[5%] mx-auto w-[106%] max-w-[560px] lg:max-w-[600px]">
            <Image
              src={podium}
              alt=""
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 95vw, 600px"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
