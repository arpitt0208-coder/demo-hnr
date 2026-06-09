"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { bike } from "@/assets/images";


export function InsuredRidesCard() {
  return (
    <article className="relative flex min-h-[220px] flex-col overflow-hidden rounded-[20px] border border-[#EEF2F6] bg-white shadow-[0_2px_14px_rgba(15,23,42,0.05)] sm:min-h-[240px] lg:min-h-0 lg:flex-row">
      <div className="relative z-10 flex w-full flex-col justify-between p-4 sm:p-5 lg:w-[50%] lg:shrink-0 lg:self-stretch lg:p-5 xl:w-[48%]">
        <div>
          <div className="mb-2.5 flex size-8 items-center justify-center rounded-full bg-[#FFF3E0]">
            <ShieldCheck
              className="size-4 text-primary-yellow"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <h3 className="text-[18px] font-extrabold leading-[1.18] tracking-tight text-black sm:text-[20px]">
            Insured Rides <span className="text-primary-yellow">Only</span>
          </h3>

          <div
            className="mt-2 h-[2.5px] w-8 rounded-full bg-primary-yellow"
            aria-hidden="true"
          />

          <p className="mt-2.5 max-w-full text-[11px] font-medium leading-[1.65] text-[#555555] sm:max-w-[320px] sm:text-[12px] lg:max-w-none">
            Every bike comes with valid government insurance. Because your
            safety matters.
          </p>
        </div>

        <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FFF3E0] px-3 py-1.5 text-[10px] font-bold text-[#333333] sm:text-[11px]">
          <ShieldCheck
            className="size-3.5 shrink-0 text-primary-yellow"
            strokeWidth={2}
            aria-hidden="true"
          />
          100% Government Insured
        </div>
      </div>

      <div className="relative min-h-[140px] flex-1 sm:min-h-[150px] lg:min-h-0">
        <div className="absolute inset-0 z-[2] flex items-end justify-center px-2 pb-1 sm:px-3 lg:justify-end lg:px-0 lg:pb-0">
          <div className="relative h-[140px] w-full max-w-[320px] sm:h-[150px] sm:max-w-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-full lg:max-w-none">
            <Image
              src={bike}
              alt=""
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 400px"
              className="pointer-events-none object-contain object-bottom lg:object-right-bottom"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
