"use client";

import Image from "next/image";
import type { GalleryLocationImage } from "@/data/galleryLocations";
import { cn } from "@/lib/cn";

/** Uniform gutter — keeps the collage tight and even */
const GALLERY_GAP = "gap-2.5 sm:gap-3";

type GalleryImageTileProps = {
  image: GalleryLocationImage;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
};

export function GalleryImageTile({
  image,
  priority = false,
  className,
  onClick,
}: GalleryImageTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative block h-full w-full min-h-0 overflow-hidden rounded-xl bg-[#E2E8F0] text-left",
        "cursor-zoom-in transition-shadow hover:shadow-[0_6px_20px_rgba(15,23,42,0.1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2",
        className,
      )}
      aria-label={`Open ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </button>
  );
}

type GalleryBentoGridProps = {
  images: GalleryLocationImage[];
  onImageClick?: (index: number) => void;
  /** Offset into the parent images array for click indexing */
  startIndex?: number;
};

function GalleryCompactGrid({
  images,
  onImageClick,
  startIndex,
  className,
}: GalleryBentoGridProps & { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2",
        images.length === 1 && "grid-cols-1",
        GALLERY_GAP,
        className,
      )}
    >
      {images.map((image, index) => (
        <GalleryImageTile
          key={image.id}
          image={image}
          priority={index < 2}
          className="aspect-[4/3]"
          onClick={() => onImageClick?.((startIndex ?? 0) + index)}
        />
      ))}
    </div>
  );
}

export function GalleryBentoGrid({
  images,
  onImageClick,
  startIndex = 0,
}: GalleryBentoGridProps) {
  const [img1, img2, img3, img4, img5, img6] = images;
  const isFullBento = images.length >= 6;

  if (!img1) {
    return null;
  }

  const click = (offset: number) => onImageClick?.((startIndex ?? 0) + offset);

  if (!isFullBento) {
    return (
      <GalleryCompactGrid
        images={images}
        onImageClick={onImageClick}
        startIndex={startIndex}
      />
    );
  }

  return (
    <>
      {/* Mobile — stacked 2-col rows, consistent aspects */}
      <div className={cn("grid md:hidden", GALLERY_GAP)}>
        <div className={cn("grid grid-cols-2", GALLERY_GAP)}>
          <GalleryImageTile
            image={img1}
            priority
            className="aspect-[4/3]"
            onClick={() => click(0)}
          />
          {img2 ? (
            <GalleryImageTile
              image={img2}
              priority
              className="aspect-[4/3]"
              onClick={() => click(1)}
            />
          ) : null}
        </div>

        {img3 ? (
          <GalleryImageTile
            image={img3}
            className="aspect-[4/3]"
            onClick={() => click(2)}
          />
        ) : null}

        {img4 ? (
          <GalleryImageTile
            image={img4}
            className="aspect-[16/9]"
            onClick={() => click(3)}
          />
        ) : null}

        {img5 || img6 ? (
          <div
            className={cn(
              "grid",
              GALLERY_GAP,
              img5 && img6 ? "grid-cols-2" : "grid-cols-1",
            )}
          >
            {img5 ? (
              <GalleryImageTile
                image={img5}
                className="aspect-[4/3]"
                onClick={() => click(4)}
              />
            ) : null}
            {img6 ? (
              <GalleryImageTile
                image={img6}
                className="aspect-[4/3]"
                onClick={() => click(5)}
              />
            ) : null}
          </div>
        ) : null}
      </div>

      {/* Desktop — 2:1 bento; shared height locks bottom edges */}
      <div
        className={cn(
          "hidden w-full md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-stretch",
          "md:aspect-[16/10] md:max-h-[520px]",
          GALLERY_GAP,
        )}
      >
        {/* Left: top pair + wide bottom */}
        <div
          className={cn(
            "grid min-h-0",
            img4 ? "grid-rows-[auto_1fr]" : "grid-rows-[auto]",
            GALLERY_GAP,
          )}
        >
          <div className={cn("grid min-h-0 grid-cols-2", GALLERY_GAP)}>
            <GalleryImageTile
              image={img1}
              priority
              className="aspect-[4/3]"
              onClick={() => click(0)}
            />
            {img2 ? (
              <GalleryImageTile
                image={img2}
                priority
                className="aspect-[4/3]"
                onClick={() => click(1)}
              />
            ) : (
              <div aria-hidden="true" />
            )}
          </div>

          {img4 ? (
            <GalleryImageTile
              image={img4}
              className="min-h-0"
              onClick={() => click(3)}
            />
          ) : null}
        </div>

        {/* Right: tall top + thumb pair */}
        {img3 || img5 || img6 ? (
        <div
          className={cn(
            "grid min-h-0",
            img3 ? "grid-rows-[1fr_auto]" : "grid-rows-[auto]",
            GALLERY_GAP,
          )}
        >
          {img3 ? (
            <GalleryImageTile
              image={img3}
              className="min-h-0"
              onClick={() => click(2)}
            />
          ) : null}

          {img5 || img6 ? (
            <div
              className={cn(
                "grid min-h-0",
                GALLERY_GAP,
                img5 && img6 ? "grid-cols-2" : "grid-cols-1",
              )}
            >
              {img5 ? (
                <GalleryImageTile
                  image={img5}
                  className="aspect-[4/3]"
                  onClick={() => click(4)}
                />
              ) : null}
              {img6 ? (
                <GalleryImageTile
                  image={img6}
                  className="aspect-[4/3]"
                  onClick={() => click(5)}
                />
              ) : null}
            </div>
          ) : null}
        </div>
        ) : null}
      </div>
    </>
  );
}

export function chunkGalleryImages(
  images: GalleryLocationImage[],
  size: number,
): GalleryLocationImage[][] {
  const chunks: GalleryLocationImage[][] = [];

  for (let index = 0; index < images.length; index += size) {
    chunks.push(images.slice(index, index + size));
  }

  return chunks;
}
