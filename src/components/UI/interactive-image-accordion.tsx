"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { GalleryAccordionItem } from "@/data/gallery";

export type AccordionItemData = GalleryAccordionItem;

const panelSpring = {
  type: "spring" as const,
  stiffness: 220,
  damping: 28,
  mass: 0.9,
};

const labelSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 34,
  mass: 0.75,
};

type AccordionItemProps = {
  item: AccordionItemData;
  isActive: boolean;
  onActivate: () => void;
};

function AccordionItem({ item, isActive, onActivate }: AccordionItemProps) {
  return (
    <motion.button
      type="button"
      layout
      aria-expanded={isActive}
      aria-label={item.title}
      transition={panelSpring}
      className={cn(
        "relative h-[300px] min-w-0 cursor-pointer overflow-hidden rounded-2xl border-0 p-0 sm:h-[360px] lg:h-[420px]",
        isActive ? "flex-[4]" : "flex-[0.38] max-w-[56px] sm:max-w-[64px]",
      )}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="relative h-full w-full"
          animate={{ scale: isActive ? 1 : 1.02 }}
          transition={panelSpring}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority={isActive}
            quality={90}
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 560px"
            className="object-cover"
            style={{ objectPosition: item.objectPosition ?? "center center" }}
          />
        </motion.div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out",
          isActive
            ? "bg-gradient-to-t from-black/50 via-black/10 to-transparent"
            : "bg-gradient-to-t from-black/45 via-black/20 to-black/5",
        )}
        aria-hidden="true"
      />

      <motion.span
        layout="position"
        className={cn(
          "pointer-events-none absolute left-1/2 z-10 max-w-[calc(100%-1rem)] truncate text-base font-semibold text-white sm:text-lg",
          isActive
            ? "bottom-6 -translate-x-1/2"
            : "bottom-[5.5rem] w-max max-w-none -translate-x-1/2 origin-center",
        )}
        animate={{
          rotate: isActive ? 0 : 90,
          opacity: isActive ? 1 : 0.92,
        }}
        transition={labelSpring}
      >
        {item.title}
      </motion.span>
    </motion.button>
  );
}

export type GalleryImageAccordionProps = {
  items: AccordionItemData[];
  title: React.ReactNode;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  defaultActiveIndex?: number;
  className?: string;
};

export function GalleryImageAccordion({
  items,
  title,
  description,
  ctaLabel = "Explore bikes",
  ctaHref = "#featured-rides",
  defaultActiveIndex = 0,
  className,
}: GalleryImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(
    Math.min(defaultActiveIndex, Math.max(items.length - 1, 0)),
  );

  return (
    <section
      className={cn("relative font-sans", className)}
      aria-label="Gallery hero"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex min-w-0 flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h1 className="text-[28px] font-extrabold leading-[1.08] tracking-tight text-dark-navy min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px]">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[14px] font-medium leading-[1.75] text-[#475569] lg:mx-0 lg:text-[15px]">
              {description}
            </p>
            <div className="mt-7">
              <Link
                href={ctaHref}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-8 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] transition-shadow hover:shadow-[0_6px_20px_rgba(15,23,42,0.28)]"
              >
                {ctaLabel}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="w-full min-w-0 lg:w-1/2">
            <motion.div
              layout
              className="flex w-full max-w-full flex-row items-stretch justify-center gap-2 overflow-hidden p-2 sm:gap-3 sm:p-4"
            >
              {items.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onActivate={() => setActiveIndex(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** @deprecated Use GalleryImageAccordion — kept for demo compatibility */
export const LandingAccordionItem = GalleryImageAccordion;
