"use client";

import Image from "next/image";
import { downloadAppVideoPoster, iphoneFrame15 } from "@/assets/images";

const APP_DEMO_VIDEO =
  "https://debuggeddata.s3.amazonaws.com/projects/attachments/17745937500891774593494160844.mp4";

export function AppPhoneMockup() {
  return (
    <div className="flex justify-center md:justify-end lg:justify-center 2xl:justify-end">
      <div className="relative w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-64 xl:max-w-72">
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
              >
                <source src={APP_DEMO_VIDEO} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
