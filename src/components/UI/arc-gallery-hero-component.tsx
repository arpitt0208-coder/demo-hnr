"use client";

import Image, { type StaticImageData } from "next/image";
import React, { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ArcGalleryImage = string | StaticImageData;

type ArcGalleryHeroProps = {
  images: ArcGalleryImage[];
  children?: ReactNode;
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
  contentClassName?: string;
  imageAltPrefix?: string;
  imageFit?: "cover" | "contain";
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  children,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = "",
  contentClassName = "",
  imageAltPrefix = "Gallery",
  imageFit = "cover",
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col overflow-hidden bg-white text-dark-navy",
        className,
      )}
    >
      <div
        className="relative mx-auto w-full"
        style={{
          height: dimensions.radius * 1.2,
        }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {images.map((src, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;

            return (
              <div
                key={i}
                className="absolute opacity-0 animate-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: "translate(-50%, 50%)",
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: "forwards",
                  zIndex: count - i,
                }}
              >
                <div
                  className="h-full w-full overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-border/80 transition-transform hover:scale-105"
                  style={{ transform: `rotate(${angle / 4}deg)` }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`${imageAltPrefix} ${i + 1}`}
                      fill
                      sizes={`${dimensions.cardSize}px`}
                      className={cn(
                        "block",
                        imageFit === "contain" ? "object-contain p-1.5" : "object-cover",
                      )}
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={cn(
          "relative z-10 -mt-40 flex flex-1 items-center justify-center px-6 md:-mt-52 lg:-mt-64",
          contentClassName,
        )}
      >
        <div
          className="w-full max-w-2xl px-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};