"use client";

import Image from "next/image";
import { ArrowRight, Mountain } from "lucide-react";

const RIDE_DETAILS_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop";

export function RideDetailsCard() {
  return (
    <article className="relative min-h-[300px] overflow-hidden rounded-[24px] sm:min-h-[340px]">
      <Image
        src={RIDE_DETAILS_IMAGE}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 640px"
        className="object-cover object-center"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/72 to-[#1A1A1A]/15"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[300px] w-full max-w-full flex-col justify-between p-5 sm:min-h-[340px] sm:max-w-[75%] sm:p-6 md:max-w-[65%] lg:max-w-[58%]">
        <div>
          <div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-primary-yellow">
            <Mountain
              className="size-5 text-dark-navy"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <h3 className="text-[22px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[24px] md:text-[28px]">
            Complete <span className="text-primary-yellow">Ride Details</span>
          </h3>

          <p className="mt-3 max-w-[320px] text-[13px] font-medium leading-[1.75] text-white/85 sm:text-[14px]">
            Check bike condition, pickup location & pricing. See everything
            before you decide. Because you shouldn&apos;t have to ask,
            &apos;Wait, where do I pick it up?&apos; after booking.
          </p>
        </div>

        <button
          type="button"
          className="group mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-primary-yellow px-5 py-2.5 text-[13px] font-bold text-dark-navy transition-shadow hover:shadow-[0_8px_24px_rgba(239,190,61,0.35)]"
          aria-label="Know More"
        >
          Know More
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
