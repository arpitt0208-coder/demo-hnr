"use client";

import Image from "next/image";
import { faqsec } from "@/assets/images";

export function HelpInfoIllustration() {
  return (
    <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-[20px] sm:mt-8 sm:h-[280px] md:h-[320px] lg:mt-12 lg:h-[360px]">
      <Image
        src={faqsec}
        alt="Help and support illustration with search, FAQ, live support, and booking help"
        fill
        sizes="(max-width: 1024px) 100vw, 520px"
        className="object-contain object-left-bottom"
      />
    </div>
  );
}
