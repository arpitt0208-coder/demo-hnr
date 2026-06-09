"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Bike } from "@/data/bikes";
import { cn } from "@/lib/cn";

interface BikeCardProps {
  bike: Bike;
  className?: string;
  variant?: "floating" | "grid";
}

export function BikeCard({ bike, className, variant = "floating" }: BikeCardProps) {
  const isFloating = variant === "floating";
  const isFixedTransform = bike.position.transform === "none";

  return (
    <motion.article
      initial={isFixedTransform ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
      animate={isFixedTransform ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: bike.floatDelay + 0.6 }}
      whileHover={isFixedTransform ? { y: -6 } : { y: -6, scale: 1.02 }}
      className={cn(
        "z-20 rounded-2xl border border-border/50 bg-white p-3 shadow-[0_8px_32px_rgba(15,23,42,0.08)]",
        isFloating
          ? "absolute hidden w-[162px] md:block lg:w-[172px]"
          : "relative w-full",
        className
      )}
      style={
        isFloating
          ? {
              top: bike.position.top,
              right: bike.position.right,
              bottom: bike.position.bottom,
              left: bike.position.left,
              marginBottom: bike.position.marginBottom,
              opacity: bike.position.opacity,
              transform: bike.position.transform,
            }
          : undefined
      }
    >
      <div>
        <p className="text-[9px] font-bold tracking-[0.12em] text-primary-yellow">
          {bike.brand}
        </p>
        <h3 className="mb-2 text-[13px] font-bold leading-tight text-dark-navy lg:text-[14px]">
          {bike.model}
        </h3>
        <div className="relative h-[74px] w-full lg:h-[80px]">
          <Image
            src={bike.image}
            alt={`${bike.brand} ${bike.model}`}
            fill
            className="object-contain object-bottom p-1"
            sizes="178px"
          />
        </div>
      </div>
    </motion.article>
  );
}
