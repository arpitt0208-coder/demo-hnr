"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { GalleryLocationImage } from "@/data/galleryLocations";
import { cn } from "@/lib/cn";

type GalleryImageViewerProps = {
  images: GalleryLocationImage[];
  activeIndex: number;
  locationName: string;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
};

export function GalleryImageViewer({
  images,
  activeIndex,
  locationName,
  onClose,
  onSelectIndex,
}: GalleryImageViewerProps) {
  const thumbnailRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const activeImage = images[activeIndex];
  const hasPrevious = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  const goToPrevious = useCallback(() => {
    if (hasPrevious) {
      onSelectIndex(activeIndex - 1);
    }
  }, [activeIndex, hasPrevious, onSelectIndex]);

  const goToNext = useCallback(() => {
    if (hasNext) {
      onSelectIndex(activeIndex + 1);
    }
  }, [activeIndex, hasNext, onSelectIndex]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, onClose]);

  useEffect(() => {
    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  if (!activeImage) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col bg-[#0F172A]/92 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${locationName} photo preview`}
      onClick={onClose}
    >
      <div
        className="relative flex min-h-0 flex-1 flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <p className="text-sm font-semibold text-white/90 sm:text-base">
            {locationName} · {activeIndex + 1} / {images.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close preview"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-10">
          {hasPrevious ? (
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-2 z-10 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4 sm:size-11"
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-5 sm:size-6" aria-hidden="true" />
            </button>
          ) : null}

          <div className="relative h-full w-full max-h-[min(68vh,720px)] max-w-[1100px] overflow-hidden rounded-2xl bg-black/40">
            <Image
              key={activeImage.id}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-contain"
            />
          </div>

          {hasNext ? (
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 z-10 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4 sm:size-11"
              aria-label="Next photo"
            >
              <ChevronRight className="size-5 sm:size-6" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <div className="shrink-0 border-t border-white/10 bg-[#0F172A]/60 px-4 py-4 sm:px-6">
          <div
            role="tablist"
            aria-label="Photo thumbnails"
            className="mx-auto flex max-w-[1100px] gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3"
          >
            {images.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={image.id}
                  ref={(node) => {
                    thumbnailRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`View photo ${index + 1}`}
                  onClick={() => onSelectIndex(index)}
                  className={cn(
                    "relative size-[68px] shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:size-[76px]",
                    isActive
                      ? "border-primary-yellow opacity-100 shadow-[0_0_0_2px_rgba(239,190,61,0.35)]"
                      : "border-transparent opacity-60 hover:border-white/30 hover:opacity-100",
                  )}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="76px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
