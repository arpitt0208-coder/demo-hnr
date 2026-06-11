"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { HowItWorksSlide } from "@/data/howItWorks";

type HowItWorksCardProps = {
  slide: HowItWorksSlide;
  isActive: boolean;
  instant?: boolean;
  slideWidth?: number;
};

const CARD_H_ACTIVE = 300;
const CARD_H_INACTIVE = 260;
const TEXT_WIDTH = "38%";
const CURVE_OVERLAP = 28;

const CURVE_OUTER =
  "M100 0 C40 80 40 180 90 260 C140 340 140 440 80 520 C50 560 40 580 40 600 L0 600 L0 0 Z";
const CURVE_INNER =
  "M110 0 C55 80 55 180 100 260 C145 340 145 440 90 520 C65 560 55 580 55 600 L0 600 L0 0 Z";
const CURVE_EDGE =
  "M110 0 C55 80 55 180 100 260 C145 340 145 440 90 520 C65 560 55 580 55 600";

function CurveDivider() {
  return (
    <svg
      className="pointer-events-none absolute inset-y-0 z-20 hidden h-full w-[250px] max-w-[46%] md:block"
      style={{ left: `calc(${TEXT_WIDTH} - ${CURVE_OVERLAP}px)` }}
      viewBox="0 0 220 600"
      fill="none"
      preserveAspectRatio="none"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
    >
      <path d={CURVE_OUTER} fill="#F8C537" />
      <path d={CURVE_INNER} fill="#fff" />
      <path
        d={CURVE_EDGE}
        fill="none"
        stroke="#F8C537"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeHowItWorksCard({
  slide,
  isActive,
  instant = false,
  slideWidth = 720,
}: HowItWorksCardProps) {
  const Icon = slide.icon;
  const isCompact = slideWidth < 520;
  const cardHeight = isCompact
    ? isActive
      ? 360
      : 320
    : isActive
      ? CARD_H_ACTIVE
      : CARD_H_INACTIVE;

  return (
    <article
      className={cn(
        "relative flex w-full select-none overflow-hidden rounded-[24px] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.07)] sm:rounded-[32px]",
        isCompact ? "flex-col" : "flex-row"
      )}
      style={{ height: cardHeight }}
    >
      <div
        className={cn(
          "relative z-10 flex min-w-0 shrink-0 flex-col justify-start bg-white",
          isCompact
            ? "w-full px-4 py-4 sm:px-5 sm:py-4"
            : isActive
              ? "w-[38%] px-5 py-5 lg:px-7 lg:py-6"
              : "w-[38%] px-4 py-4 lg:px-6 lg:py-5"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-primary-yellow",
            isActive ? "size-9 sm:size-10" : "size-8"
          )}
        >
          <Icon
            className={cn("text-dark-navy", isActive ? "size-4 sm:size-5" : "size-4")}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>

        <p
          className={cn(
            "mt-2 font-bold tracking-[0.16em] text-[#6B7280] uppercase",
            isActive ? "text-[10px] sm:text-[11px]" : "text-[10px]"
          )}
        >
          How it works
        </p>

        <h3
          className={cn(
            "mt-1 font-extrabold leading-[1.15] text-dark-navy",
            isActive
              ? "text-[20px] sm:text-[24px] lg:text-[28px]"
              : "text-[17px] sm:text-[20px]"
          )}
        >
          {slide.title}
        </h3>

        <div
          className={cn(
            "mt-2 rounded-full bg-primary-yellow",
            isActive ? "h-[3px] w-10 sm:w-12" : "h-[3px] w-9"
          )}
          aria-hidden="true"
        />

        <p
          className={cn(
            "mt-2 max-w-full leading-[1.55] font-medium text-[#374151] sm:max-w-[280px]",
            isActive
              ? "text-[12px] sm:text-[14px]"
              : "line-clamp-2 text-[12px] sm:text-[13px]"
          )}
        >
          {slide.description}
        </p>
      </div>

      <div
        className={cn(
          "relative z-0 min-w-0 flex-1 overflow-hidden",
          !isCompact && "-ml-7"
        )}
      >
        <motion.img
          src={slide.image}
          alt=""
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className={cn(
            "pointer-events-none h-full w-full object-cover",
            isCompact ? "min-h-[180px]" : ""
          )}
          animate={{ scale: isActive ? 1.03 : 1.05 }}
          transition={
            instant
              ? { duration: 0 }
              : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          }
        />
      </div>

      {!isCompact && <CurveDivider />}
    </article>
  );
}
