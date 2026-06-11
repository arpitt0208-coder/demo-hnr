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
          <Image
            src={mountainbg}
            alt=""
            width={640}
            height={400}
            sizes="(max-width: 640px) 45vw, 220px"
            className="absolute inset-x-0 bottom-0 h-[78%] w-full object-cover object-bottom opacity-80"
            aria-hidden="true"
          />

          <Image
            src={fee}
            alt=""
            width={260}
            height={220}
            sizes="(max-width: 640px) 40vw, 120px"
            className="absolute bottom-1 left-1/2 h-[72%] w-auto max-w-[85%] -translate-x-1/2 object-contain object-bottom"
            aria-hidden="true"
          />
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

      <p className="mt-2 text-[11px] font-medium leading-[1.65] text-[#475569] sm:text-[12px]">
        No hidden fees. No &apos;oh, we forgot to mention&apos; charges. Just
        honest, all-inclusive rates from start to finish.
      </p>
    </FeatureCardShell>
  );
}
