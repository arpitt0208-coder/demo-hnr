"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import { card } from "@/assets/images";
import { FeatureCardHeader } from "./FeatureCardHeader";
import { FeatureCardShell } from "./FeatureCardShell";

export function CommunityCard() {
  return (
    <FeatureCardShell
      illustration={
        <Image
          src={card}
          alt="Riders high-fiving beside a motorcycle in the mountains"
          width={640}
          height={400}
          sizes="(max-width: 640px) 45vw, 220px"
          className="absolute inset-0 h-full w-full object-cover object-center"
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

      <p className="mt-2 text-[11px] font-medium leading-[1.65] text-[#555555] sm:text-[12px]">
        Join riders who share tips, photos, and stories. You&apos;re never just
        a number.
      </p>
    </FeatureCardShell>
  );
}
