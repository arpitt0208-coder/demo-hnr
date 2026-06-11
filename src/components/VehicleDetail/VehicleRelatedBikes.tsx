"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Star } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { locationLabels } from "@/data/vehicles";
import { Button } from "@/components/UI/shadcn-button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";

type VehicleRelatedBikesProps = {
  vehicles: Vehicle[];
};

function formatPrice(price: number) {
  return price.toLocaleString("en-IN");
}

export function VehicleRelatedBikes({ vehicles }: VehicleRelatedBikesProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  if (vehicles.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-[#EEF2F6] pt-10 sm:mt-14 sm:pt-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-[22px] font-extrabold tracking-tight text-dark-navy sm:text-[26px]">
          More bikes you&apos;ll love
        </h2>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="size-9 rounded-full border-[#E2E8F0] bg-white shadow-sm disabled:pointer-events-auto"
            aria-label="Previous bikes"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="size-9 rounded-full border-[#E2E8F0] bg-white shadow-sm disabled:pointer-events-auto"
            aria-label="Next bikes"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="relative mt-6">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 sm:-ml-4">
            {vehicles.map((vehicle) => (
              <CarouselItem
                key={vehicle.id}
                className="basis-[85%] pl-3 sm:basis-[48%] sm:pl-4 lg:basis-[32%] xl:basis-[24%]"
              >
                <Link
                  href={`/explore/${vehicle.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8ECF0] bg-white shadow-[0_2px_14px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary-yellow/35 hover:shadow-[0_12px_32px_rgba(239,190,61,0.12)]"
                >
                  <div className="relative bg-[#EEF2F6] px-3 pb-4 pt-3">
                    <div className="relative mx-auto h-[120px] w-full sm:h-[132px]">
                      <Image
                        src={vehicle.images[0]}
                        alt={vehicle.shortTitle}
                        fill
                        sizes="(max-width: 768px) 85vw, 320px"
                        className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-bold text-dark-navy shadow-[0_2px_8px_rgba(15,23,42,0.08)]">
                      <Star
                        className="size-3 fill-primary-yellow text-primary-yellow"
                        aria-hidden="true"
                      />
                      {vehicle.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                    <h3 className="text-[11px] font-extrabold uppercase leading-[1.35] tracking-[0.01em] text-dark-navy sm:text-[12px]">
                      {vehicle.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-1 text-[12px] font-medium leading-snug text-[#94A3B8]">
                      {vehicle.description}
                    </p>
                    <p className="mt-3 flex items-center gap-1 text-[11px] font-medium text-[#64748B]">
                      <MapPin
                        className="size-3 shrink-0 text-[#94A3B8]"
                        strokeWidth={2.25}
                        aria-hidden="true"
                      />
                      {locationLabels[vehicle.location] ?? vehicle.location}
                    </p>
                    <div className="mt-4 flex items-end justify-between gap-3 border-t border-[#EEF2F6] pt-4">
                      <p className="text-[18px] font-extrabold leading-none text-dark-navy">
                        <span>₹ {formatPrice(vehicle.price)}</span>
                        <span className="text-[13px] font-medium text-[#64748B]"> / day</span>
                      </p>
                      <span className="shrink-0 text-[13px] font-bold text-primary-yellow">
                        More details →
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
