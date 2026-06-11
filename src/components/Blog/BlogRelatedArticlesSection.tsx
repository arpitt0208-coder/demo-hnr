"use client";

import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import {
  blogRelatedBadge,
  blogRelatedSubtitle,
  blogRelatedTitle,
  getBlogRelatedPosts,
} from "@/data/blogPage";
import { BlogPostCard } from "./BlogPostCard";

function SectionDotGrid() {
  return (
    <div
      className="pointer-events-none absolute left-4 top-10 grid gap-[5px] opacity-50 sm:left-8 sm:top-12 md:left-12 lg:left-16"
      style={{
        gridTemplateColumns: "repeat(5, 4px)",
        gridTemplateRows: "repeat(4, 4px)",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="size-1 rounded-full bg-[#CBD5E1]"
        />
      ))}
    </div>
  );
}

function SectionArcDecor() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="pointer-events-none absolute -bottom-16 -right-8 h-[280px] w-[280px] text-[#E2E8F0] opacity-60 sm:-bottom-20 sm:-right-4 sm:h-[340px] sm:w-[340px]"
      aria-hidden="true"
    >
      <circle
        cx="240"
        cy="240"
        r="180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx="240"
        cy="240"
        r="140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx="240"
        cy="240"
        r="100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function BlogRelatedArticlesSection() {
  const relatedPosts = getBlogRelatedPosts();

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-10 lg:px-16 lg:py-16 xl:px-20"
      aria-label="Related articles"
    >
      <SectionDotGrid />
      <SectionArcDecor />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <Mountain
            className="size-6 text-primary-yellow sm:size-7"
            strokeWidth={2}
            aria-hidden="true"
          />

          <div className="mt-3 flex items-center gap-3 sm:mt-3.5">
            <span
              className="h-px w-10 bg-primary-yellow sm:w-14"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold tracking-[0.16em] text-primary-yellow sm:text-[11px]">
              {blogRelatedBadge}
            </span>
            <span
              className="h-px w-10 bg-primary-yellow sm:w-14"
              aria-hidden="true"
            />
          </div>

          <h2 className="mt-3 max-w-[760px] text-[22px] font-extrabold leading-[1.12] tracking-tight text-dark-navy min-[400px]:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px]">
            {blogRelatedTitle}
          </h2>

          <p className="mt-2.5 max-w-[620px] text-[13px] font-medium leading-[1.65] text-[#475569] sm:text-[14px]">
            {blogRelatedSubtitle}
          </p>

          <div
            className="mt-3 h-[3px] w-10 rounded-full bg-primary-yellow"
            aria-hidden="true"
          />
        </motion.div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {relatedPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
