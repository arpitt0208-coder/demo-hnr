"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { bike } from "@/assets/images";


export function InsuredRidesCard() {
  return (
    <article className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:min-h-[340px] lg:min-h-0 lg:flex-row">
      <div className="relative z-10 flex w-full flex-col justify-between p-5 sm:p-6 lg:w-[48%] lg:shrink-0 lg:self-stretch lg:p-8 xl:w-[46%]">
        <div>
          <div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-[#FFF3E0]">
            <ShieldCheck
              className="size-5 text-primary-yellow"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <h3 className="text-[24px] font-extrabold leading-[1.15] tracking-tight text-black sm:text-[28px]">
            Insured Rides <span className="text-primary-yellow">Only</span>
          </h3>

          <div
            className="mt-2.5 h-[3px] w-10 rounded-full bg-primary-yellow"
            aria-hidden="true"
          />

          <p className="mt-3.5 max-w-full text-[13px] font-medium leading-[1.75] text-[#333333] sm:max-w-[360px] sm:text-[14px] lg:max-w-none">
            Every bike comes with valid government insurance. Because your
            safety matters.
          </p>
        </div>

        <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF3E0] px-4 py-2 text-[11px] font-bold text-[#333333]">
          <ShieldCheck
            className="size-4 shrink-0 text-primary-yellow"
            strokeWidth={2}
            aria-hidden="true"
          />
          100% Government Insured
        </div>
      </div>

      <div className="relative min-h-[200px] flex-[1.6] sm:min-h-[220px] lg:min-h-0">
        <div className="absolute inset-0 z-[2] flex items-end justify-center px-3 sm:px-4 lg:justify-end lg:px-0 lg:pr-0">
          <div className="relative h-[200px] w-full max-w-[420px] sm:h-[220px] sm:max-w-[500px] lg:absolute lg:inset-y-0 lg:right-[-2%] lg:h-full lg:w-[108%] lg:max-w-none xl:right-[-4%] xl:w-[112%]">
            <Image
              src={bike}
              alt=""
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 58vw, 680px"
              className="pointer-events-none object-contain object-bottom lg:object-right-bottom"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
