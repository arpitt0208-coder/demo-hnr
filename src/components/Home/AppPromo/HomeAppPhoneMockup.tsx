"use client";

import Image from "next/image";
import { downloadAppVideoPoster, iphoneFrame15 } from "@/assets/images";

const APP_DEMO_VIDEO =
  "https://debuggeddata.s3.amazonaws.com/projects/attachments/17745937500891774593494160844.mp4";

export function HomeAppPhoneMockup() {
  return (
    <div className="flex justify-center drop-shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
      <div className="relative w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[260px] xl:max-w-[280px]">
        <div className="relative aspect-[9/20] w-full">
          <Image
            src={iphoneFrame15}
            alt="iPhone Frame"
            fill
            className="pointer-events-none z-10 object-contain"
            sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 240px, (max-width: 1280px) 256px, 288px"
            priority
          />
          <div className="absolute inset-x-[3.6%] inset-y-[4.9%] overflow-hidden rounded-[1.85rem] sm:rounded-[2.05rem] md:rounded-[2.2rem] lg:rounded-[2.4rem]">
            <div className="relative h-full w-full overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={downloadAppVideoPoster.src}
                className="h-full w-full object-cover"
                src={APP_DEMO_VIDEO}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
