"use client";

import { useState } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";

export type BrowseVehicle = {
  id: string;
  title: string;
  description: string;
  images: StaticImageData[];
  rating: number;
  capacity: number;
  category: string;
  location: string;
  distance: string;
  age: string;
  price: number;
  href: string;
};

function formatPrice(price: number) {
  return price.toLocaleString("en-IN");
}

export function VehicleCard({ vehicle }: { vehicle: BrowseVehicle }) {
  const imageCount = vehicle.images.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const goToPrevious = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveImageIndex((current) =>
      current === 0 ? imageCount - 1 : current - 1,
    );
  };

  const goToNext = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveImageIndex((current) =>
      current === imageCount - 1 ? 0 : current + 1,
    );
  };

  const goToImage = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveImageIndex(index);
  };

  return (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8ECF0] bg-white shadow-[0_2px_14px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary-yellow/30 hover:shadow-[0_12px_32px_rgba(239,190,61,0.1)]">
      <Link
        href={vehicle.href}
        className="relative block bg-[#EEF2F6] px-3 pb-6 pt-3 no-underline"
        aria-label={`View details for ${vehicle.title}`}
      >
        <div className="relative mx-auto h-[148px] w-full sm:h-[156px]">
          <Image
            src={vehicle.images[activeImageIndex]}
            alt={`${vehicle.title} - image ${activeImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center transition-transform duration-500 group-hover/card:scale-[1.02]"
          />

          <button
            type="button"
            aria-label="Previous image"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/95 text-[#64748B] shadow-sm transition-colors hover:bg-white hover:text-dark-navy"
          >
            <ArrowLeft className="size-3.5" strokeWidth={2.25} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#E2E8F0] bg-white/95 text-[#64748B] shadow-sm transition-colors hover:bg-white hover:text-dark-navy"
          >
            <ArrowRight className="size-3.5" strokeWidth={2.25} aria-hidden="true" />
          </button>

          <span className="absolute right-0 top-0 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-bold text-dark-navy shadow-[0_2px_8px_rgba(15,23,42,0.08)]">
            <Star
              className="size-3 fill-primary-yellow text-primary-yellow"
              aria-hidden="true"
            />
            {vehicle.rating.toFixed(1)}
          </span>

          <span className="absolute bottom-0 left-0 inline-flex items-center gap-1 rounded-full bg-[#334155]/85 px-2 py-1 text-[11px] font-semibold text-white">
            <Users className="size-3" strokeWidth={2.25} aria-hidden="true" />
            {vehicle.capacity}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
          {vehicle.images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to image ${index + 1}`}
              onClick={(event) => goToImage(event, index)}
              className={
                index === activeImageIndex
                  ? "size-1.5 rounded-full bg-[#334155]"
                  : "size-1.5 rounded-full bg-[#CBD5E1]"
              }
            />
          ))}
        </div>
      </Link>

      <Link
        href={vehicle.href}
        className="flex flex-1 flex-col px-4 pb-4 pt-4 no-underline sm:px-5 sm:pb-5 sm:pt-4"
      >
        <h3 className="text-[11px] font-extrabold uppercase leading-[1.35] tracking-[0.01em] text-dark-navy sm:text-[12px]">
          {vehicle.title}
        </h3>
        <p className="mt-1.5 line-clamp-1 text-[12px] font-medium leading-snug text-[#94A3B8]">
          {vehicle.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium text-[#64748B]">
          <span className="inline-flex min-w-0 items-center gap-1">
            <MapPin
              className="size-3 shrink-0 text-[#94A3B8]"
              strokeWidth={2.25}
              aria-hidden="true"
            />
            <span className="truncate">{vehicle.distance}</span>
          </span>
          <span className="text-[#CBD5E1]" aria-hidden="true">
            |
          </span>
          <span className="inline-flex items-center gap-1">
            <Shield
              className="size-3 shrink-0 text-[#94A3B8]"
              strokeWidth={2.25}
              aria-hidden="true"
            />
            {vehicle.age}
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-[#EEF2F6] pt-4">
          <p className="text-[18px] font-extrabold leading-none text-dark-navy">
            <span>₹ {formatPrice(vehicle.price)}</span>
            <span className="text-[13px] font-medium text-[#64748B]"> / day</span>
          </p>
          <span className="shrink-0 text-[13px] font-bold text-primary-yellow transition-opacity group-hover/card:opacity-80">
            More details →
          </span>
        </div>
      </Link>
    </article>
  );
}
