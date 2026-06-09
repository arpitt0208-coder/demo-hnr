"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import { card } from "@/assets/images";
import { FeatureCardHeader } from "./FeatureCardHeader";
import { FeatureCardShell } from "./FeatureCardShell";

export function CommunityCard() {
  return (
    <FeatureCardShell
      illustrationClassName="h-auto"
      illustration={
        <Image
          src={card}
          alt="Riders high-fiving beside a motorcycle in the mountains"
          width={600}
          height={460}
          sizes="(max-width: 1024px) 90vw, 320px"
          className="h-auto w-full"
        />
      }
    >
      <FeatureCardHeader
        compact
        icon={Users}
        title={
          <>
            Community, Not Just
            <br />
            Customers
          </>
        }
        iconBgClassName="rounded-full bg-primary-yellow/15"
      />

      <p className="mt-3 text-[12px] font-medium leading-[1.7] text-[#333333] sm:text-[13px]">
        Join riders who share tips, photos, and stories. You&apos;re never just
        a number.
      </p>
    </FeatureCardShell>
  );
}
