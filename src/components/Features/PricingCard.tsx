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
        <div className="relative h-full w-full">
          <div className="absolute inset-x-0 bottom-0 h-[62%]">
            <Image
              src={mountainbg}
              alt=""
              fill
              sizes="(max-width: 640px) 45vw, 220px"
              className="object-cover object-bottom opacity-80"
              aria-hidden="true"
            />
          </div>

          <div className="absolute inset-x-0 bottom-1 flex justify-center">
            <div className="relative h-[76px] w-[92px] sm:h-[84px] sm:w-[100px]">
              <Image
                src={fee}
                alt=""
                fill
                sizes="(max-width: 640px) 40vw, 120px"
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

      <p className="mt-2 text-[11px] font-medium leading-[1.65] text-[#555555] sm:text-[12px]">
        No hidden fees. No &apos;oh, we forgot to mention&apos; charges. Just
        honest, all-inclusive rates from start to finish.
      </p>
    </FeatureCardShell>
  );
}
