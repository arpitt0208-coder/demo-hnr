"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/UI/shadcn-button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";
import { cn } from "@/lib/utils";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string | StaticImageData;
  ctaText?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
  className?: string;
  ctaLabel?: string;
  compact?: boolean;
  showDots?: boolean;
}

function Gallery4CtaButton({
  label,
  compact,
}: {
  label: string;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#1A1A1A] font-bold text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] transition-shadow group-hover:shadow-[0_6px_20px_rgba(15,23,42,0.28)]",
        compact
          ? "w-full px-4 py-2.5 text-[11px] leading-tight"
          : "px-8 py-3 text-sm",
      )}
    >
      {label}
    </span>
  );
}

const Gallery4 = ({
  title,
  description,
  items,
  className,
  ctaLabel = "Read more",
  compact = false,
  showDots = true,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const showHeader = Boolean(title || description);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className={cn(showHeader ? "py-32" : "py-0", className)}>
      {showHeader && (
        <div className="container mx-auto">
          <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
            <div className="flex flex-col gap-4">
              {title && (
                <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-lg text-muted-foreground">{description}</p>
              )}
            </div>
            <div className="hidden shrink-0 gap-2 md:flex">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  carouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full overflow-x-clip">
        {!showHeader && (
          <div
            className={cn(
              "flex justify-end gap-2 px-4 sm:px-6",
              compact ? "mb-3" : "mb-6",
            )}
          >
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className={cn(
                "rounded-full border-border bg-white shadow-sm disabled:pointer-events-auto",
                compact ? "size-8" : "size-9",
              )}
              aria-label="Previous slide"
            >
              <ArrowLeft className={compact ? "size-3.5" : "size-4"} />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className={cn(
                "rounded-full border-border bg-white shadow-sm disabled:pointer-events-auto",
                compact ? "size-8" : "size-9",
              )}
              aria-label="Next slide"
            >
              <ArrowRight className={compact ? "size-3.5" : "size-4"} />
            </Button>
          </div>
        )}
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 pl-4 sm:pl-6">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className={cn(
                  compact
                    ? "max-w-[240px] pl-2.5 lg:max-w-[280px]"
                    : "max-w-[360px] pl-[20px] lg:max-w-[400px]",
                )}
              >
                {compact ? (
                  <a
                    href={item.href}
                    className="group block overflow-hidden rounded-xl border border-border/60 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
                  >
                    <div className="relative aspect-[5/4] bg-[#EEF2F6]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 240px, 280px"
                        className="object-contain object-center p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-3 py-2.5">
                      <div className="text-sm font-semibold leading-tight text-dark-navy">
                        {item.title}
                      </div>
                      <div className="mt-1 line-clamp-2 text-[11px] leading-snug text-text-gray">
                        {item.description}
                      </div>
                      <div className="mt-3">
                        <Gallery4CtaButton
                          label={item.ctaText ?? ctaLabel}
                          compact
                        />
                      </div>
                    </div>
                  </a>
                ) : (
                  <a href={item.href} className="group rounded-xl">
                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl bg-[#EEF2F6] md:aspect-[5/4] lg:aspect-[16/9]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 360px, 400px"
                        className="object-contain object-center p-6 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 h-full bg-gradient-to-t from-dark-navy/90 via-dark-navy/40 to-transparent mix-blend-multiply" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                        <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                          {item.title}
                        </div>
                        <div className="mb-8 line-clamp-2 text-white/90 md:mb-12 lg:mb-9">
                          {item.description}
                        </div>
                        <Gallery4CtaButton
                          label={item.ctaText ?? ctaLabel}
                        />
                      </div>
                    </div>
                  </a>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {showDots && (
          <div
            className={cn(
              "flex justify-center gap-2",
              compact ? "mt-4" : "mt-8",
            )}
          >
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  currentSlide === index ? "bg-primary" : "bg-primary/20",
                )}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Gallery4 };
