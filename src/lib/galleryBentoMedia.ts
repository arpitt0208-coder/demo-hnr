import type { MediaItemType } from "@/components/Gallery/GalleryBentoGallery";
import type { GalleryLocationImage } from "@/data/galleryLocations";

const BENTO_SPAN_PATTERNS = [
  "row-span-2 md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  "row-span-2 md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  "row-span-3 md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  "row-span-2 md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  "row-span-2 md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  "row-span-2 md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  "row-span-2 md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  "row-span-3 md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
] as const;

export function toBentoMediaItems(
  images: GalleryLocationImage[],
  locationName: string,
): MediaItemType[] {
  return images.map((image, index) => ({
    id: index + 1,
    type: "image",
    title: locationName,
    desc: image.alt,
    url: image.src,
    span: BENTO_SPAN_PATTERNS[index % BENTO_SPAN_PATTERNS.length],
  }));
}
