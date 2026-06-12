"use client";

import { motion } from "framer-motion";
import { Bike, Calendar, Clock, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogPage";
import { HoverBorderGradient } from "@/components/UI/hover-border-gradient";
import { ReadMoreButton } from "@/components/UI/read-more-button";

interface BlogPostCardProps {
  post: BlogPost;
  index?: number;
}

function formatCategory(category: string) {
  return category
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
  const href = `/blogs/${post.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-40px",
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full overflow-visible"
    >
      <HoverBorderGradient
        as="article"
        duration={1.2}
        highlight="radial-gradient(75% 181% at 50% 50%, #efbe3d 0%, rgba(255, 255, 255, 0) 100%)"
        containerClassName="group/card h-full w-full cursor-pointer rounded-[16px] border-transparent bg-transparent shadow-[0_4px_24px_rgba(15,23,42,0.08)] hover:bg-transparent"
        className="flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-white p-0 text-inherit"
        maskClassName="bg-white"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover/card:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {post.featured ? (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-primary-yellow px-2.5 py-1 text-[10px] font-bold text-dark-navy shadow-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[11px]">
              <Star
                className="size-3 fill-dark-navy"
                strokeWidth={0}
                aria-hidden="true"
              />
              Featured
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-yellow px-2.5 py-1 text-[9px] font-bold text-dark-navy sm:text-[10px]">
              <Bike
                className="size-3 shrink-0"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              {formatCategory(post.category)}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-medium text-[#94A3B8] sm:text-[11px]">
              <Clock
                className="size-3 shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              {post.readTime}
            </span>
          </div>

          <h3 className="mt-3 text-[15px] font-extrabold leading-[1.3] tracking-tight text-dark-navy transition-colors duration-300 group-hover/card:text-primary-yellow sm:text-[16px]">
            <Link href={href} className="line-clamp-2">
              {post.title}
            </Link>
          </h3>

          <p className="mt-2 line-clamp-2 flex-1 text-[12px] font-medium leading-[1.65] text-[#64748B] sm:text-[13px]">
            {post.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium text-[#94A3B8] sm:text-[11px]">
            <span className="inline-flex items-center gap-1.5">
              <User
                className="size-3 shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar
                className="size-3 shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              {post.publishedAt}
            </span>
          </div>

          <ReadMoreButton href={href} className="mt-5" />
        </div>
      </HoverBorderGradient>
    </motion.div>
  );
}
