'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

interface ArcGalleryHeroImageObject {
  src: string;
  alt: string;
}

type ArcGalleryHeroImage = string | ArcGalleryHeroImageObject;

type ArcGalleryHeroProps = {
  images: ArcGalleryHeroImage[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
};

interface ArcGalleryCardImageProps {
  src: string;
  alt: string;
  cardSizePx: number;
}

function ArcGalleryCardImage({ src, alt, cardSizePx }: ArcGalleryCardImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={`${cardSizePx}px`}
      className="object-cover"
      draggable={false}
      onError={() => {
        setImageSrc('/images/gallery-fallback.svg');
      }}
    />
  );
}

export function ArcGalleryHero({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = '',
  title = 'Rediscover Your Memories with AI',
  description = 'Our intelligent platform finds, organizes, and brings your most cherished moments back to life.',
  primaryCtaLabel = 'Explore Your Past',
  secondaryCtaLabel,
  primaryCtaHref,
  secondaryCtaHref,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: ArcGalleryHeroProps) {
  const primaryCtaClassName =
    'w-full transform rounded-full bg-primary-yellow px-6 py-3 text-[14px] font-bold text-dark-navy shadow-[0_6px_24px_rgba(239,190,61,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(239,190,61,0.45)] sm:w-auto';
  const secondaryCtaClassName =
    'w-full rounded-full border border-border px-6 py-3 text-dark-navy transition-all duration-200 hover:bg-muted sm:w-auto';
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [
    radiusLg,
    radiusMd,
    radiusSm,
    cardSizeLg,
    cardSizeMd,
    cardSizeSm,
  ]);

  const arcHeight = `${dimensions.radius * 1.2}px`;
  const cardSize = `${dimensions.cardSize}px`;

  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  const resolveImage = (image: ArcGalleryHeroImage, index: number) => {
    if (typeof image === 'string') {
      return { src: image, alt: `Gallery image ${index + 1}` };
    }

    return image;
  };

  return (
    <section
      className={cn(
        'relative flex min-h-screen flex-col overflow-hidden bg-background pt-24 text-dark-navy sm:pt-28 md:pt-32 lg:pt-36',
        className,
      )}
    >
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          height: arcHeight,
        }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {images.map((image, i) => {
            const { src, alt } = resolveImage(image, i);
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;

            return (
              <div
                key={`${src}-${i}`}
                className="arc-gallery-fade-in-up absolute opacity-0"
                style={{
                  width: cardSize,
                  height: cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: 'translate(-50%, 50%)',
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'forwards',
                  zIndex: count - i,
                }}
              >
                <div
                  className="relative h-full w-full overflow-hidden rounded-2xl bg-card shadow-xl ring-1 ring-border transition-transform hover:scale-105"
                  style={{ transform: `rotate(${angle / 4}deg)` }}
                >
                  <ArcGalleryCardImage
                    src={src}
                    alt={alt}
                    cardSizePx={dimensions.cardSize}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 -mt-40 flex flex-1 items-center justify-center px-6 md:-mt-52 lg:-mt-64">
        <div
          className="arc-gallery-fade-in max-w-2xl px-6 text-center opacity-0"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-dark-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-text-gray">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCtaHref ? (
              <a href={primaryCtaHref} className={primaryCtaClassName}>
                {primaryCtaLabel}
              </a>
            ) : (
              <button
                type="button"
                onClick={onPrimaryCtaClick}
                className={primaryCtaClassName}
              >
                {primaryCtaLabel}
              </button>
            )}
            {secondaryCtaLabel &&
              (secondaryCtaHref ? (
                <a href={secondaryCtaHref} className={secondaryCtaClassName}>
                  {secondaryCtaLabel}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onSecondaryCtaClick}
                  className={secondaryCtaClassName}
                >
                  {secondaryCtaLabel}
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}