"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/cn";

type VehicleImageGalleryProps = {
  images: StaticImageData[];
  title: string;
  isPopular?: boolean;
};

export function VehicleImageGallery({
  images,
  title,
  isPopular,
}: VehicleImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-[#E8ECF0] bg-[#EEF2F6]">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
          <Image
            src={images[activeIndex]}
            alt={`${title} - photo ${activeIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-contain object-center p-4 sm:p-6"
          />

          {isPopular && (
            <span className="absolute left-3 top-3 rounded-full bg-primary-yellow px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-dark-navy shadow-[0_2px_8px_rgba(239,190,61,0.35)] sm:left-4 sm:top-4 sm:text-[12px]">
              Most Popular
            </span>
          )}

          <div className="absolute right-3 top-3 flex items-center gap-2 sm:right-4 sm:top-4">
            <button
              type="button"
              aria-label="Share this bike"
              className="flex size-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/95 text-[#64748B] shadow-sm transition-colors hover:text-dark-navy"
            >
              <Share2 className="size-4" strokeWidth={2.25} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
              onClick={() => setIsFavorite((value) => !value)}
              className="flex size-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/95 text-[#64748B] shadow-sm transition-colors hover:text-dark-navy"
            >
              <Heart
                className={cn(
                  "size-4",
                  isFavorite && "fill-primary-yellow text-primary-yellow",
                )}
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </button>
          </div>

          <button
            type="button"
            className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-dark-navy shadow-sm backdrop-blur-sm sm:bottom-4 sm:left-4 sm:text-[12px]"
          >
            View photos ({images.length})
          </button>
        </div>
      </div>

      <div className="relative flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={goToPrevious}
          className="absolute -left-1 z-10 flex size-8 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#64748B] shadow-sm transition-colors hover:text-dark-navy sm:-left-3 sm:size-9"
        >
          <ArrowLeft className="size-4" strokeWidth={2.25} aria-hidden="true" />
        </button>

        <div className="grid flex-1 grid-cols-4 gap-2 px-6 sm:gap-2.5 sm:px-8">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View photo ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-xl border bg-[#EEF2F6] transition-all",
                index === activeIndex
                  ? "border-primary-yellow ring-2 ring-primary-yellow/30"
                  : "border-[#E8ECF0] hover:border-[#CBD5E1]",
              )}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="120px"
                className="object-contain object-center p-1"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next photo"
          onClick={goToNext}
          className="absolute -right-1 z-10 flex size-8 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#64748B] shadow-sm transition-colors hover:text-dark-navy sm:-right-3 sm:size-9"
        >
          <ArrowRight className="size-4" strokeWidth={2.25} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
