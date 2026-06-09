"use client";

import Image from "next/image";
import type { FindYourRideBike } from "@/data/findYourRide";

type FindYourRideCardProps = {
  bike: FindYourRideBike;
};

export function FindYourRideCard({ bike }: FindYourRideCardProps) {
  return (
    <article className="flex w-[188px] shrink-0 flex-col items-center rounded-[20px] bg-white px-3 pb-3.5 pt-4 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:w-[200px] sm:px-4 sm:pb-4 sm:pt-5">
      <div className="relative h-[128px] w-full sm:h-[140px]">
        <Image
          src={bike.image}
          alt={bike.name}
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 188px, 200px"
          draggable={false}
        />
      </div>

      <div className="mt-2 w-full rounded-[14px] border border-[#F1F5F9] bg-white px-2.5 py-2.5 shadow-[0_2px_10px_rgba(15,23,42,0.04)] sm:mt-2.5 sm:px-3">
        <p className="text-center text-[10px] font-bold leading-[1.35] text-dark-navy sm:text-[11px]">
          {bike.name}
        </p>
      </div>
    </article>
  );
}
