"use client";

import { useCallback, useState } from "react";
import {
  GALLERY_PREVIEW_COUNT,
  type GalleryLocationSection,
  galleryLocationSections,
} from "@/data/galleryLocations";
import { cn } from "@/lib/cn";
import {
  chunkGalleryImages,
  GalleryBentoGrid,
} from "./GalleryBentoGrid";
import { GalleryImageViewer } from "./GalleryImageViewer";

type LocationGalleryBlockProps = {
  section: GalleryLocationSection;
};

function LocationGalleryBlock({ section }: LocationGalleryBlockProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const previewImages = section.images.slice(0, GALLERY_PREVIEW_COUNT);
  const remainingImages = section.images.slice(GALLERY_PREVIEW_COUNT);
  const hasMoreImages = remainingImages.length > 0;
  const remainingChunks = chunkGalleryImages(
    remainingImages,
    GALLERY_PREVIEW_COUNT,
  );

  const openViewer = useCallback((index: number) => {
    setViewerIndex(index);
  }, []);

  const closeViewer = useCallback(() => {
    setViewerIndex(null);
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAllPhotos((current) => !current);
  }, []);

  return (
    <article id={section.slug} className="scroll-mt-28">
      <div className="text-center">
        <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-dark-navy sm:text-[32px]">
          {section.name} in Pictures
        </h2>
        {section.description ? (
          <p className="mx-auto mt-3 max-w-[640px] text-[14px] font-normal leading-[1.7] text-[#64748B] sm:text-[15px]">
            {section.description}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-4 md:mt-8">
        <GalleryBentoGrid
          images={previewImages}
          startIndex={0}
          onImageClick={openViewer}
        />

        {showAllPhotos && hasMoreImages
          ? remainingChunks.map((chunk, chunkIndex) => (
              <GalleryBentoGrid
                key={`${section.slug}-more-${chunkIndex}`}
                images={chunk}
                startIndex={
                  GALLERY_PREVIEW_COUNT + chunkIndex * GALLERY_PREVIEW_COUNT
                }
                onImageClick={openViewer}
              />
            ))
          : null}

        {hasMoreImages ? (
          <div className="flex justify-center pt-1">
            <button
              type="button"
              onClick={toggleShowAll}
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-full border border-dark-navy bg-white px-8 text-[14px] font-semibold text-dark-navy transition-colors hover:bg-[#FAFAFA]",
              )}
              aria-expanded={showAllPhotos}
            >
              {showAllPhotos ? "Show fewer photos" : "View more photos"}
            </button>
          </div>
        ) : null}
      </div>

      {viewerIndex !== null ? (
        <GalleryImageViewer
          images={section.images}
          activeIndex={viewerIndex}
          locationName={section.name}
          onClose={closeViewer}
          onSelectIndex={setViewerIndex}
        />
      ) : null}
    </article>
  );
}

export function LocationGallerySections() {
  return (
    <section
      id="location-galleries"
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-16 xl:px-20"
      aria-label="Location photo galleries"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex flex-col gap-14 sm:gap-16 md:gap-20">
          {galleryLocationSections.map((section) => (
            <LocationGalleryBlock key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
