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
          sizes="(max-width: 640px) 90vw, 320px"
          className="object-contain object-bottom"
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

      <p className="mt-3 text-[12px] font-medium leading-[1.7] text-[#333333] sm:text-[13px]">
        Real people. Real help. Get support and route tips, whenever you need.
      </p>
    </FeatureCardShell>
  );
}
