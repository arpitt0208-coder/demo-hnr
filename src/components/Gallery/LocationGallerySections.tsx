"use client";

import { useMemo } from "react";
import InteractiveBentoGallery from "@/components/UI/interactive-bento-gallery";
import {
  type GalleryLocationSection,
  galleryLocationSections,
} from "@/data/galleryLocations";
import { toBentoMediaItems } from "@/lib/galleryBentoMedia";

type LocationGalleryBlockProps = {
  section: GalleryLocationSection;
};

function LocationGalleryBlock({ section }: LocationGalleryBlockProps) {
  const mediaItems = useMemo(
    () => toBentoMediaItems(section.images, section.name),
    [section.images, section.name],
  );

  return (
    <article id={section.slug} className="scroll-mt-28">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title={`${section.name} in Pictures`}
        description={
          section.description ??
          "Drag and explore our curated collection of shots from this destination."
        }
      />
    </article>
  );
}

export function LocationGallerySections() {
  return (
    <section
      id="location-galleries"
      className="scroll-mt-24 bg-white py-10 sm:py-12"
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
