"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Bike } from "@/data/bikes";
import { locationExplorePath } from "@/lib/location-routes";
import { cn } from "@/lib/cn";
import { HomeBikeCardLocationBadge } from "./HomeBikeCardLocationBadge";

interface BikeCardProps {
  bike: Bike;
  className?: string;
  variant?: "floating" | "grid";
}

export function HomeBikeCard({ bike, className, variant = "floating" }: BikeCardProps) {
  const isFloating = variant === "floating";
  const isGrid = variant === "grid";
  const isFixedTransform = bike.position.transform === "none";
  const isClickable = Boolean(bike.href);
  const CardTag = motion.article;
  const locationHref = locationExplorePath(bike.locationSlug);

  const cardContent = (
    <>
      {isGrid ? (
        <div className="flex min-h-0 flex-1 items-stretch gap-2.5 sm:gap-3">
          <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
            <Link
              href={bike.href}
              className="no-underline text-inherit"
              aria-label={`${bike.brand} ${bike.model}`}
            >
              <div className="space-y-1">
                <p className="text-[7px] font-bold tracking-[0.1em] text-primary-yellow min-[400px]:text-[8px]">
                  {bike.brand}
                </p>
                <h3 className="line-clamp-2 text-[11px] font-bold leading-snug text-dark-navy min-[400px]:text-[12px]">
                  {bike.model}
                </h3>
              </div>
            </Link>
            <HomeBikeCardLocationBadge
              label={bike.location}
              href={locationHref}
              size="xs"
            />
          </div>
          <Link
            href={bike.href}
            className="relative h-[56px] w-[60px] shrink-0 self-end min-[400px]:h-[62px] min-[400px]:w-[66px] sm:h-[68px] sm:w-[72px]"
            aria-hidden="true"
            tabIndex={-1}
          >
            <Image
              src={bike.image}
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 640px) 30vw, 72px"
            />
          </Link>
        </div>
      ) : (
        <div className="flex h-full flex-col p-3.5 lg:p-4">
          <Link
            href={bike.href}
            className="no-underline text-inherit"
            aria-label={`${bike.brand} ${bike.model}`}
          >
            <div className="space-y-1.5">
              <p className="text-[8px] font-bold tracking-[0.12em] text-primary-yellow lg:text-[9px]">
                {bike.brand}
              </p>
              <h3 className="text-[12px] font-bold leading-snug text-dark-navy lg:text-[14px]">
                {bike.model}
              </h3>
            </div>
          </Link>
          <HomeBikeCardLocationBadge
            label={bike.location}
            href={locationHref}
            size="sm"
            className="mt-1.5"
          />
          <Link href={bike.href} className="no-underline text-inherit">
            <div className="relative mt-3 h-[72px] w-full lg:mt-4 lg:h-[78px]">
              <Image
                src={bike.image}
                alt={`${bike.brand} ${bike.model}`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1280px) 160px, 192px"
              />
            </div>
          </Link>
        </div>
      )}
    </>
  );

  const cardClassName = cn(
    "rounded-2xl border border-border/50 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.08)]",
    isFloating &&
      "absolute z-20 hidden w-[156px] lg:block lg:w-[184px] xl:w-[192px]",
    isGrid && "relative flex min-w-0 w-full flex-col p-3 sm:p-3.5",
    !isFloating && !isGrid && "relative w-full p-4",
    isClickable &&
      "transition-shadow hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)] active:shadow-[0_6px_24px_rgba(15,23,42,0.1)]",
    className,
  );

  const cardStyle = isFloating
    ? {
        top: bike.position.top,
        right: bike.position.right,
        bottom: bike.position.bottom,
        left: bike.position.left,
        marginBottom: bike.position.marginBottom,
        opacity: bike.position.opacity,
        transform: bike.position.transform,
      }
    : undefined;

  if (isClickable) {
    return (
      <motion.div
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
          isFixedTransform || isGrid ? { y: -4, scale: 1.02 } : { y: -6, scale: 1.02 }
        }
        whileTap={isGrid ? { scale: 0.98 } : undefined}
        className={cardClassName}
        style={cardStyle}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <CardTag
      initial={
        isFloating && !isFixedTransform ? { opacity: 0, scale: 0.9 } : { opacity: 1 }
      }
      animate={
        isFloating && !isFixedTransform
          ? { opacity: 1, scale: 1 }
          : { opacity: 1 }
      }
      transition={{ duration: 0.5, delay: bike.floatDelay + 0.6 }}
      className={cardClassName}
      style={cardStyle}
    >
      {cardContent}
    </CardTag>
  );
}
