"use client";

import Image from "next/image";
import { faqSection } from "@/assets/images";

export function HelpInfoIllustration() {
  return (
    <div className="relative mt-8 h-[280px] w-full overflow-hidden rounded-[20px] sm:mt-10 sm:h-[320px] lg:mt-12 lg:h-[360px]">
      <Image
        src={faqSection}
        alt="Scenic mountain road illustration with a help question mark"
        fill
        sizes="(max-width: 1024px) 100vw, 520px"
        className="object-contain object-left-bottom"
      />
    </div>
  );
}
