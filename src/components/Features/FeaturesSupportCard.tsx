"use client";

import { Headphones } from "lucide-react";
import Image from "next/image";
import { support } from "@/assets/images";
import { FeatureCardHeader } from "./FeatureCardHeader";
import { FeatureCardShell } from "./FeatureCardShell";

export function FeaturesSupportCard() {
  return (
    <FeatureCardShell
      illustration={
        <Image
          src={support}
          alt=""
          fill
          sizes="(max-width: 640px) 45vw, 220px"
          className="object-contain object-bottom px-2 pb-1"
          aria-hidden="true"
        />
      }
    >
      <FeatureCardHeader
        compact
        icon={Headphones}
        title={
          <>
            Contact Us &<br />
            Support
          </>
        }
      />

      <p className="mt-2 text-[11px] font-medium leading-[1.65] text-[#555555] sm:text-[12px]">
        Real people. Real help. Get support and route tips, whenever you need.
      </p>
    </FeatureCardShell>
  );
}
