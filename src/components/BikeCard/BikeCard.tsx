"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Bike } from "@/data/bikes";
import { cn } from "@/lib/cn";

interface BikeCardProps {
  bike: Bike;
  className?: string;
  variant?: "floating" | "grid";
}

export function BikeCard({ bike, className, variant = "floating" }: BikeCardProps) {
  const isFloating = variant === "floating";
  const isGrid = variant === "grid";
  const isFixedTransform = bike.position.transform === "none";
  const isClickable = Boolean(bike.href);
  const CardTag = isClickable ? motion.a : motion.article;

  return (
    <CardTag
      {...(isClickable
        ? {
            href: bike.href,
            "aria-label": `${bike.brand} ${bike.model} in ${bike.location}`,
          }
        : {})}
      initial={
        isFloating && !isFixedTransform ? { opacity: 0, scale: 0.9 } : { opacity: 1 }
      }
      animate={
        isFloating && !isFixedTransform
          ? { opacity: 1, scale: 1 }
          : { opacity: 1 }
      }
      transition={{ duration: 0.5, delay: bike.floatDelay + 0.6 }}
      whileHover={
        isClickable
          ? isFixedTransform || isGrid
            ? { y: -4, scale: 1.02 }
            : { y: -6, scale: 1.02 }
          : undefined
      }
      className={cn(
        "rounded-2xl border border-border/50 bg-white p-3 shadow-[0_8px_32px_rgba(15,23,42,0.08)]",
        isFloating &&
          "absolute z-20 hidden w-[140px] lg:block lg:w-[172px] xl:w-[178px]",
        isGrid && "relative w-[148px] shrink-0 sm:w-[156px]",
        !isFloating && !isGrid && "relative w-full",
        isClickable &&
          "cursor-pointer no-underline transition-shadow hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)]",
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
        <p className="text-[8px] font-bold tracking-[0.12em] text-primary-yellow sm:text-[9px]">
          {bike.brand}
        </p>
        <h3 className="text-[12px] font-bold leading-tight text-dark-navy sm:text-[13px] lg:text-[14px]">
          {bike.model}
        </h3>
        <p className="mb-2 mt-1 flex items-center gap-1">
          <MapPin
            className="size-3 shrink-0 text-primary-yellow"
            strokeWidth={2.25}
            aria-hidden="true"
          />
          <span className="truncate text-[10px] font-semibold text-[#475569]">
            {bike.location}
          </span>
        </p>
        <div
          className={cn(
            "relative w-full",
            isGrid ? "h-[64px] sm:h-[70px]" : "h-[74px] lg:h-[80px]"
          )}
        >
          <Image
            src={bike.image}
            alt={`${bike.brand} ${bike.model}`}
            fill
            className="object-contain object-bottom p-1"
            sizes={isGrid ? "156px" : "178px"}
          />
        </div>
      </div>
    </CardTag>
  );
}
