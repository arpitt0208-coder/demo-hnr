"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { blogHeroImage } from "@/data/blogPage";
import { BlogHeroLeft } from "./BlogHeroLeft";
import { BlogHeroOverlay } from "./BlogHeroOverlay";

interface BlogHeroSectionProps {
  ctaHref?: string;
}

export function BlogHeroSection({ ctaHref }: BlogHeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[460px] overflow-x-clip px-4 pb-6 pt-20 sm:min-h-[500px] sm:px-6 sm:pb-8 sm:pt-24 md:px-10 lg:min-h-[540px] lg:px-16 lg:pb-10 lg:pt-28 xl:px-20"
      aria-label="Blogs hero"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={blogHeroImage}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[60%_center] lg:object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF5] from-0% via-[#FFFBF5]/95 via-45% to-transparent to-100% max-lg:via-[#FFFBF5]/88 max-lg:via-70%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF5]/30 via-transparent to-transparent lg:hidden" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-[1320px] flex-col justify-center py-2 sm:py-4 xl:min-h-[480px]">
        <div className="lg:max-w-[54%] xl:max-w-[580px]">
          <BlogHeroLeft ctaHref={ctaHref} />
        </div>

        <div className="mt-5 flex justify-center sm:mt-6 xl:absolute xl:bottom-8 xl:right-12 xl:mt-0 xl:justify-end">
          <BlogHeroOverlay />
        </div>
      </div>
    </motion.section>
  );
}
