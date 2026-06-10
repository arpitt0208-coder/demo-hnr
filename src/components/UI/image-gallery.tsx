"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type ImageGalleryItem = {
  src: string | StaticImageData;
  alt: string;
  id?: string;
};

export type ImageGalleryProps = {
  title: string;
  description?: string;
  images: ImageGalleryItem[];
  className?: string;
  galleryClassName?: string;
  /** Images shown in the top horizontal strip. Defaults to 6. */
  stripCount?: number;
};

const DEFAULT_STRIP_COUNT = 6;
const COLLAPSED_WIDTH = "3.75rem";

function chunkImages<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function ImagePreviewLightbox({
  images,
  activeIndex,
  onClose,
  onChangeIndex,
}: {
  images: ImageGalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}) {
  const activeImage = images[activeIndex];
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < images.length - 1;

  const goPrev = useCallback(() => {
    if (canGoPrev) {
      onChangeIndex(activeIndex - 1);
    }
  }, [activeIndex, canGoPrev, onChangeIndex]);

  const goNext = useCallback(() => {
    if (canGoNext) {
      onChangeIndex(activeIndex + 1);
    }
  }, [activeIndex, canGoNext, onChangeIndex]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        goPrev();
      }
      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goNext, goPrev, onClose]);

  if (!activeImage) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0F172A]/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-5xl flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex items-center justify-center">
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-2 right-0 z-10 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:-top-4"
            aria-label="Close preview"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          {canGoPrev ? (
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 z-10 flex size-11 -translate-x-1 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:-translate-x-4"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>
          ) : null}

          <div className="relative aspect-[4/3] w-full max-h-[62vh] overflow-hidden rounded-2xl bg-[#1E293B]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 95vw, 900px"
              className="object-contain"
            />
          </div>

          {canGoNext ? (
            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 z-10 flex size-11 translate-x-1 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:translate-x-4"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <p className="mt-4 text-center text-sm font-medium text-white/80">
          {activeImage.alt}
        </p>

        <div className="mt-4 flex justify-center gap-2 overflow-x-auto px-2 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, index) => (
            <button
              key={image.id ?? `${image.alt}-${index}`}
              type="button"
              onClick={() => onChangeIndex(index)}
              className={cn(
                "relative size-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:size-[72px]",
                index === activeIndex
                  ? "border-primary-yellow ring-2 ring-primary-yellow/40"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
              aria-label={`View image ${index + 1}`}
              aria-current={index === activeIndex}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="72px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

type AccordionImageStripProps = {
  images: ImageGalleryItem[];
  startIndex: number;
  onImageClick: (index: number) => void;
  defaultActiveIndex?: number;
  className?: string;
};

function AccordionImageStrip({
  images,
  startIndex,
  onImageClick,
  defaultActiveIndex,
  className,
}: AccordionImageStripProps) {
  const initialActiveIndex =
    defaultActiveIndex ?? Math.min(Math.floor(images.length / 2), images.length - 1);

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex h-[280px] w-full max-w-5xl items-stretch gap-2 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:h-[360px] md:h-[400px] md:overflow-hidden [&::-webkit-scrollbar]:hidden",
        className,
      )}
      onMouseLeave={() => setActiveIndex(initialActiveIndex)}
    >
      {images.map((image, index) => {
        const isActive = activeIndex === index;
        const globalIndex = startIndex + index;

        return (
          <button
            key={image.id ?? `${image.alt}-${globalIndex}`}
            type="button"
            onClick={() => onImageClick(globalIndex)}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            style={!isActive ? { width: COLLAPSED_WIDTH } : undefined}
            className={cn(
              "group relative h-full shrink-0 overflow-hidden rounded-2xl bg-[#E2E8F0] transition-all duration-500 ease-out",
              isActive
                ? "min-w-[45%] flex-[6] sm:min-w-[280px] md:min-w-[360px]"
                : "flex-none opacity-90 hover:opacity-100",
            )}
            aria-label={`Preview ${image.alt}`}
            aria-expanded={isActive}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={isActive ? "(max-width: 768px) 80vw, 50vw" : "60px"}
              className={cn(
                "object-cover object-center transition-transform duration-500",
                isActive ? "scale-100" : "scale-[1.35]",
              )}
            />

            <span
              className={cn(
                "pointer-events-none absolute inset-0 transition-opacity duration-300",
                isActive
                  ? "bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent opacity-100"
                  : "bg-[#0F172A]/55 opacity-100",
              )}
            />

            {!isActive ? (
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-1">
                <span className="max-h-[88%] rotate-180 overflow-hidden text-ellipsis text-[10px] font-semibold leading-tight text-white [writing-mode:vertical-rl] sm:text-[11px]">
                  {image.alt}
                </span>
              </span>
            ) : (
              <span className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4 pt-10 text-left text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
                {image.alt}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function ImageGallery({
  title,
  description,
  images,
  className,
  galleryClassName,
  stripCount = DEFAULT_STRIP_COUNT,
}: ImageGalleryProps) {
  const [showAllImages, setShowAllImages] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const stripImages = images.slice(0, stripCount);
  const extraImages = images.slice(stripCount);
  const extraImageRows = chunkImages(extraImages, stripCount);
  const hasExtraImages = extraImages.length > 0;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  return (
    <section
      className={cn(
        "flex w-full flex-col items-center justify-start",
        className,
      )}
    >
      <div className="max-w-3xl px-4 text-center">
        <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-dark-navy sm:text-[30px]">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-3 max-w-[760px] text-[14px] font-medium leading-[1.75] text-text-gray sm:text-[15px]">
            {description}
          </p>
        ) : null}
      </div>

      <AccordionImageStrip
        images={stripImages}
        startIndex={0}
        onImageClick={openLightbox}
        className={cn("mt-8", galleryClassName)}
      />

      {showAllImages && hasExtraImages
        ? extraImageRows.map((rowImages, rowIndex) => {
            const rowStartIndex = stripCount + rowIndex * stripCount;

            return (
              <AccordionImageStrip
                key={`extra-row-${rowStartIndex}`}
                images={rowImages}
                startIndex={rowStartIndex}
                onImageClick={openLightbox}
                defaultActiveIndex={Math.min(
                  Math.floor(rowImages.length / 2),
                  rowImages.length - 1,
                )}
                className="mt-6"
              />
            );
          })
        : null}

      {hasExtraImages ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllImages((current) => !current)}
            className="inline-flex h-11 items-center justify-center rounded-full border border-dark-navy bg-white px-8 text-[14px] font-semibold text-dark-navy transition-colors hover:bg-[#F8FAFC]"
          >
            {showAllImages ? "View less images" : "View more photos"}
          </button>
        </div>
      ) : null}

      {lightboxIndex !== null ? (
        <ImagePreviewLightbox
          images={images}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onChangeIndex={setLightboxIndex}
        />
      ) : null}
    </section>
  );
}

export default ImageGallery;
