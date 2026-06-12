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
  variant?: "floating" | "grid" | "showcase";
}

export function HomeBikeCard({ bike, className, variant = "floating" }: BikeCardProps) {
  const isFloating = variant === "floating";
  const isGrid = variant === "grid";
  const isShowcase = variant === "showcase";
  const isFixedTransform = bike.position.transform === "none";
  const isClickable = Boolean(bike.href);
  const CardTag = motion.article;
  const locationHref = locationExplorePath(bike.locationSlug);

  const cardContent = (
    <>
      {isGrid && !isShowcase ? (
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
        <div
          className={cn(
            "flex h-full flex-col",
            isShowcase ? "p-3.5 sm:p-4" : "p-3.5 lg:p-4",
          )}
        >
          <Link
            href={bike.href}
            className="no-underline text-inherit"
            aria-label={`${bike.brand} ${bike.model}`}
          >
            <div className="space-y-1.5">
              <p
                className={cn(
                  "font-bold tracking-[0.12em] text-primary-yellow",
                  isShowcase
                    ? "text-[8px] min-[400px]:text-[9px]"
                    : "text-[8px] lg:text-[9px]",
                )}
              >
                {bike.brand}
              </p>
              <h3
                className={cn(
                  "font-bold leading-snug text-dark-navy",
                  isShowcase
                    ? "text-[12px] min-[400px]:text-[13px]"
                    : "text-[12px] lg:text-[14px]",
                )}
              >
                {bike.model}
              </h3>
            </div>
          </Link>
          <HomeBikeCardLocationBadge
            label={bike.location}
            href={locationHref}
            size={isShowcase ? "xs" : "sm"}
            className="mt-1.5"
          />
          <Link href={bike.href} className="no-underline text-inherit">
            <div
              className={cn(
                "relative mt-3 w-full",
                isShowcase
                  ? "h-[68px] min-[400px]:h-[74px] sm:h-[80px]"
                  : "h-[72px] lg:mt-4 lg:h-[78px]",
              )}
            >
              <Image
                src={bike.image}
                alt={`${bike.brand} ${bike.model}`}
                fill
                className="object-contain object-center"
                sizes={
                  isShowcase
                    ? "(max-width: 640px) 42vw, 188px"
                    : "(max-width: 1280px) 160px, 192px"
                }
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
    isShowcase && "relative w-full",
    isGrid && "relative flex min-w-0 w-full flex-col p-3 sm:p-3.5",
    !isFloating && !isGrid && !isShowcase && "relative w-full p-4",
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
          isFixedTransform || isGrid || isShowcase
            ? { y: -4, scale: 1.02 }
            : { y: -6, scale: 1.02 }
        }
        whileTap={isGrid || isShowcase ? { scale: 0.98 } : undefined}
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
