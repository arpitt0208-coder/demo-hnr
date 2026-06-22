"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Gallery4Item } from "@/components/UI/gallery4";
import { smoothEase } from "@/lib/motion";

type FindYourRideCardProps = {
  item: Gallery4Item;
};

export function FindYourRideCard({ item }: FindYourRideCardProps) {
  const reduceMotion = useReducedMotion();
  const imageSrc =
    typeof item.image === "string" ? item.image : (item.image as StaticImageData).src;

  return (
    <motion.div
      className="h-full w-full"
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.45, ease: smoothEase }}
    >
      <Link
        href={item.href}
        aria-label={`Explore ${item.title}`}
        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl text-inherit no-underline shadow-[0_2px_16px_rgba(15,23,42,0.04)] outline-none transition-shadow duration-500 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)] focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2"
      >
        <div className="relative z-10 flex h-[min(38vw,168px)] w-full shrink-0 items-end justify-center rounded-t-2xl bg-[#f5f5f7] transition-colors duration-500 group-hover:bg-[#f0f0f2] sm:h-[188px] md:h-[204px]">
          <Image
            src={imageSrc}
            alt=""
            width={320}
            height={220}
            sizes="(max-width: 640px) 45vw, 240px"
            className="image-hover-zoom max-h-full w-auto max-w-[90%] object-contain object-bottom"
          />
        </div>

        <div className="relative -mt-9 flex min-h-[7.5rem] flex-1 flex-col justify-end rounded-b-2xl bg-[#fff] px-4 pb-4 pt-11 transition-colors duration-500 group-hover:bg-[#f0f0f2] sm:-mt-10 sm:min-h-[8rem] sm:px-5 sm:pb-5 sm:pt-12">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1 text-left">
              <h3 className="text-base font-semibold leading-snug tracking-[-0.01em] text-[#1d1d1f] sm:text-[17px]">
                {item.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-[12px] font-normal leading-[1.45] text-[#3a3a3c] sm:mt-1.5 sm:text-[13px]">
                {item.description}
              </p>
            </div>

            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-yellow shadow-[0_2px_8px_rgba(239,190,61,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_14px_rgba(239,190,61,0.45)]"
              aria-hidden="true"
            >
              <ArrowUpRight
                className="size-4 text-dark-navy transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.25}
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
