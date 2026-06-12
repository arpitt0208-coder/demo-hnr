import Image from "next/image";
import { Bike, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogPage";

interface BlogSingleHeroProps {
  post: BlogPost;
}

function formatCategory(category: string) {
  return category
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function BlogSingleHero({ post }: BlogSingleHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-dark-navy px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:px-10 lg:px-16 lg:pb-20 lg:pt-36 xl:px-20"
      aria-label="Article header"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/95 via-dark-navy/90 to-dark-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,190,61,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-yellow px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] text-dark-navy sm:text-[11px]">
          <Bike className="size-3 shrink-0" strokeWidth={2.25} aria-hidden="true" />
          {formatCategory(post.category)}
        </span>

        <h1 className="mt-5 max-w-[920px] text-[28px] font-extrabold leading-[1.1] tracking-tight text-white min-[400px]:text-[32px] sm:mt-6 sm:text-[38px] md:text-[44px] lg:text-[48px]">
          {post.title}
        </h1>

        <p className="mt-4 max-w-[760px] text-[14px] font-medium leading-[1.75] text-[#CBD5E1] sm:mt-5 sm:text-[15px] md:text-[16px]">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-[11px] font-medium text-[#94A3B8] sm:text-[12px]">
          <span className="inline-flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary-yellow text-[8px] font-extrabold text-dark-navy">
              H
            </span>
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5 shrink-0 text-primary-yellow" strokeWidth={2} aria-hidden="true" />
            {post.publishedAt}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 shrink-0 text-primary-yellow" strokeWidth={2} aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
      </div>
    </section>
  );
}
