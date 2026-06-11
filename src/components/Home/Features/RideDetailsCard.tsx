"use client";

import Image from "next/image";
import { Mountain } from "lucide-react";

const RIDE_DETAILS_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop";

export function RideDetailsCard() {
  return (
    <article className="relative min-h-[220px] overflow-hidden rounded-[20px] border border-[#EEF2F6] shadow-[0_2px_14px_rgba(15,23,42,0.05)] sm:min-h-[240px]">
      <Image
        src={RIDE_DETAILS_IMAGE}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 640px"
        className="object-cover object-center"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/75 to-[#1A1A1A]/20"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[220px] w-full max-w-full flex-col justify-between p-4 sm:min-h-[240px] sm:max-w-[78%] sm:p-5 md:max-w-[68%] lg:max-w-[62%]">
        <div>
          <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-primary-yellow">
            <Mountain
              className="size-4 text-dark-navy"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <h3 className="text-[18px] font-extrabold leading-[1.18] tracking-tight text-white sm:text-[20px] md:text-[22px]">
            Complete <span className="text-primary-yellow">Ride Details</span>
          </h3>

          <div
            className="mt-2 h-[2.5px] w-8 rounded-full bg-primary-yellow"
            aria-hidden="true"
          />

          <p className="mt-2.5 max-w-[300px] text-[11px] font-medium leading-[1.65] text-white/85 sm:text-[12px]">
            Check bike condition, pickup location & pricing. See everything
            before you decide. Because you shouldn&apos;t have to ask,
            &apos;Wait, where do I pick it up?&apos; after booking.
          </p>
        </div>
      </div>
    </article>
  );
}
