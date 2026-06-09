"use client";

import { Tag } from "lucide-react";
import Image from "next/image";
import { fee, mountainbg } from "@/assets/images";
import { FeatureCardShell } from "./FeatureCardShell";
import { FeatureCardHeader } from "./FeatureCardHeader";

export function PricingCard() {
  return (
    <FeatureCardShell
      className="bg-[#FFFCF7]"
      illustration={
        <div className="grid h-full grid-cols-1 grid-rows-1">
          <div className="relative col-start-1 row-start-1 flex items-end">
            <div className="relative h-[55%] w-full">
              <Image
                src={mountainbg}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 300px"
                className="object-cover object-bottom opacity-85"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="col-start-1 row-start-1 flex h-full items-end justify-center pb-1">
            <div className="relative h-[96px] w-[110px] sm:h-[104px] sm:w-[118px]">
              <Image
                src={fee}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 144px"
                className="object-contain object-bottom"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      }
    >
      <FeatureCardHeader
        compact
        icon={Tag}
        title={
          <>
            Transparent Pricing,
            <br />
            Zero Surprises
          </>
        }
      />

      <p className="mt-3 text-[12px] font-medium leading-[1.7] text-[#333333] sm:text-[13px]">
        No hidden fees. No &apos;oh, we forgot to mention&apos; charges. Just
        honest, all-inclusive rates from start to finish.
      </p>
    </FeatureCardShell>
  );
}
