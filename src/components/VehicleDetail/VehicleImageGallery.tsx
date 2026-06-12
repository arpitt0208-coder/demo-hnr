"use client";

import { useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Camera, ChevronLeft, ChevronRight, Heart, Share2, Star } from "lucide-react";
import {
  GalleryModal,
  type MediaItemType,
} from "@/components/Gallery/GalleryModal";
import { toGalleryMediaItems } from "@/lib/galleryBentoMedia";
import { cn } from "@/lib/cn";

type VehicleImageGalleryProps = {
  images: StaticImageData[];
  title: string;
  isPopular?: boolean;
  className?: string;
};

export function VehicleImageGallery({
  images,
  title,
  isPopular,
  className,
}: VehicleImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

  const mediaItems = useMemo(
    () => toGalleryMediaItems(images, title),
    [images, title],
  );

  const goToPrevious = () => {
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const goToNext = () => {
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="relative overflow-hidden rounded-2xl bg-[#F0F0F0]">
        <div className="relative aspect-[16/10] w-full">
          <button
            type="button"
            onClick={() => setSelectedItem(mediaItems[activeIndex])}
            aria-label={`Open photo ${activeIndex + 1} preview`}
            className="absolute inset-0 z-0 cursor-zoom-in"
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} - photo ${activeIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-contain object-center p-4"
            />
          </button>

          {isPopular && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-dark-navy shadow-[0_1px_4px_rgba(15,23,42,0.08)]">
              <Star
                className="size-3 fill-primary-yellow text-primary-yellow"
                aria-hidden="true"
              />
              Most Popular
            </span>
          )}

          <div className="absolute right-3 top-3 flex items-center gap-2">
            <button
              type="button"
              aria-label="Share this bike"
              className="flex size-8 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#9CA3AF] shadow-[0_1px_4px_rgba(15,23,42,0.06)] transition-colors hover:text-dark-navy"
            >
              <Share2
                className="size-3.5 shrink-0"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
              onClick={() => setIsFavorite((value) => !value)}
              className="flex size-8 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#9CA3AF] shadow-[0_1px_4px_rgba(15,23,42,0.06)] transition-colors hover:text-dark-navy"
            >
              <Heart
                className={cn(
                  "size-3.5",
                  isFavorite && "fill-primary-yellow text-primary-yellow",
                )}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#9CA3AF] shadow-[0_1px_4px_rgba(15,23,42,0.06)] transition-colors hover:text-dark-navy sm:left-3 sm:size-8"
          >
            <ChevronLeft className="size-4" strokeWidth={2} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#9CA3AF] shadow-[0_1px_4px_rgba(15,23,42,0.06)] transition-colors hover:text-dark-navy sm:right-3 sm:size-8"
          >
            <ChevronRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-medium leading-none text-dark-navy shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
          >
            <Camera
              className="size-3 shrink-0 text-[#6B7280]"
              strokeWidth={2}
              aria-hidden="true"
            />
            View photos ({images.length})
          </button>
        </div>
      </div>

      <div
        className="flex flex-wrap items-center gap-2.5"
        role="tablist"
        aria-label={`${title} photos`}
      >
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`View photo ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative h-[60px] w-[76px] shrink-0 overflow-hidden rounded-lg bg-[#F0F0F0] transition-colors sm:h-[64px] sm:w-[80px]",
              index === activeIndex
                ? "border-2 border-primary-yellow"
                : "border border-[#E5E7EB] hover:border-[#D1D5DB]",
            )}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              fill
              sizes="80px"
              className="object-contain object-center p-1"
            />
          </button>
        ))}
      </div>

      {selectedItem ? (
        <GalleryModal
          selectedItem={selectedItem}
          isOpen={true}
          onClose={() => setSelectedItem(null)}
          setSelectedItem={setSelectedItem}
          mediaItems={mediaItems}
        />
      ) : null}
    </div>
  );
}
