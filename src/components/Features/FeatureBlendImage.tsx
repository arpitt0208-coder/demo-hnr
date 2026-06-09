"use client";

import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

type FeatureBlendImageProps = {
  src: StaticImageData;
  alt?: string;
  className?: string;
  sizes?: string;
};

export function FeatureBlendImage({
  src,
  alt = "",
  className,
  sizes = "(max-width: 640px) 50vw, 300px",
}: FeatureBlendImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={cn("mix-blend-screen", className)}
    />
  );
}
