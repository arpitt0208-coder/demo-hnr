"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ImageGallery from "@/components/UI/image-gallery";
import {
  GALLERY_PREVIEW_COUNT,
  type GalleryLocationImage,
  type GalleryLocationSection,
  galleryLocationSections,
} from "@/data/galleryLocations";
import { cn } from "@/lib/cn";

type LocationGalleryBlockProps = {
  section: GalleryLocationSection;
};

function GalleryImageTile({
  image,
  priority = false,
  className,
}: {
  image: GalleryLocationImage;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative min-h-0 overflow-hidden rounded-2xl bg-[#E2E8F0]",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 50vw, 35vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

function GalleryPreviewGrid({ images }: { images: GalleryLocationImage[] }) {
  const [topLeft, topRight, tallRight, wideBottom, bottomLeft, bottomRight] =
    images;

  if (
    !topLeft ||
    !topRight ||
    !tallRight ||
    !wideBottom ||
    !bottomLeft ||
    !bottomRight
  ) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <GalleryImageTile
            key={image.id}
            image={image}
            priority={index < 2}
            className="aspect-[4/3]"
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {images.map((image, index) => (
          <GalleryImageTile
            key={image.id}
            image={image}
            priority={index < 2}
            className="aspect-[4/3]"
          />
        ))}
      </div>

      <div className="hidden gap-4 md:grid md:grid-cols-4 md:grid-rows-[minmax(150px,1fr)_minmax(150px,1.15fr)_minmax(130px,0.9fr)]">
        <GalleryImageTile image={topLeft} priority className="md:col-start-1 md:row-start-1" />
        <GalleryImageTile image={topRight} className="md:col-start-2 md:row-start-1" />
        <GalleryImageTile
          image={tallRight}
          className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1"
        />
        <GalleryImageTile
          image={wideBottom}
          className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-2"
        />
        <GalleryImageTile image={bottomLeft} className="md:col-start-3 md:row-start-3" />
        <GalleryImageTile image={bottomRight} className="md:col-start-4 md:row-start-3" />
      </div>
    </>
  );
}

function GalleryLightbox({
  section,
  images,
  onClose,
}: {
  section: GalleryLocationSection;
  images: GalleryLocationImage[];
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-[#0F172A]/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${section.name} gallery`}
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-[1180px] flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.28)] sm:rounded-[28px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#F1F5F9] px-5 py-5 sm:px-8 sm:py-6">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-yellow">
              Full gallery
            </p>
            <h3 className="mt-1 text-[22px] font-extrabold leading-tight text-dark-navy sm:text-[26px]">
              {section.name} in Pictures
            </h3>
            {section.description ? (
              <p className="mt-2 max-w-[640px] text-[14px] font-medium leading-[1.65] text-text-gray">
                {section.description}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#64748B] transition-colors hover:border-[#CBD5E1] hover:text-dark-navy"
            aria-label="Close gallery"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {images.map((image) => (
              <GalleryImageTile
                key={image.id}
                image={image}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationGalleryBlock({ section }: LocationGalleryBlockProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const previewImages = section.images.slice(0, GALLERY_PREVIEW_COUNT);
  const usesExpandableGallery = section.layout === "expandable";

  const openLightbox = useCallback(() => {
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  if (usesExpandableGallery) {
    return (
      <article id={section.slug} className="scroll-mt-28">
        <ImageGallery
          title={`${section.name} in Pictures`}
          description={section.description}
          images={section.images.map((image) => ({
            id: image.id,
            src: image.src,
            alt: image.alt,
          }))}
        />
      </article>
    );
  }

  return (
    <article id={section.slug} className="scroll-mt-28">
      <div className="text-center">
        <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-dark-navy sm:text-[30px]">
          {section.name} in Pictures
        </h2>
        {section.description ? (
          <p className="mx-auto mt-3 max-w-[760px] text-[14px] font-medium leading-[1.75] text-text-gray sm:text-[15px]">
            {section.description}
          </p>
        ) : null}
      </div>

      <div className="mt-8">
        <GalleryPreviewGrid images={previewImages} />
      </div>

      {section.images.length > 0 ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={openLightbox}
            className="inline-flex h-11 items-center justify-center rounded-full border border-dark-navy bg-white px-8 text-[14px] font-semibold text-dark-navy transition-colors hover:bg-[#F8FAFC]"
          >
            View more photos
          </button>
        </div>
      ) : null}

      {isLightboxOpen ? (
        <GalleryLightbox
          section={section}
          images={section.images}
          onClose={closeLightbox}
        />
      ) : null}
    </article>
  );
}

export function LocationGallerySections() {
  return (
    <section
      id="location-galleries"
      className="scroll-mt-24 bg-surface px-4 py-10 sm:px-6 sm:py-12 lg:px-16 xl:px-20"
      aria-label="Location photo galleries"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col gap-14 sm:gap-16">
          {galleryLocationSections.map((section) => (
            <LocationGalleryBlock key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
