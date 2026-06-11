"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/UI/pagination";
import {
  BLOG_POSTS_PER_PAGE,
  blogPosts,
  blogSearchPlaceholder,
  blogTrendingSubtitle,
  blogTrendingTitle,
} from "@/data/blogPage";
import { BlogPostCard } from "./BlogPostCard";

function getVisiblePages(
  currentPage: number,
  totalPages: number,
): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "ellipsis",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}

export function BlogTrendingSection() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return blogPosts;

    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.category.toLowerCase().includes(normalized),
    );
  }, [query]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / BLOG_POSTS_PER_PAGE),
  );

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + BLOG_POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const visiblePages = getVisiblePages(currentPage, totalPages);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    if (currentPage > totalPages) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="trending"
      className="bg-[#F9F9F9] px-4 py-12 sm:px-6 sm:py-14 md:px-10 lg:px-16 lg:py-16 xl:px-20"
      aria-label="Trending blog articles"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="max-w-[760px] text-[22px] font-extrabold leading-[1.12] tracking-tight text-dark-navy min-[400px]:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px]">
            {blogTrendingTitle}
          </h2>
          <p className="mt-2.5 max-w-[620px] text-[13px] font-medium leading-[1.65] text-[#475569] sm:text-[14px]">
            {blogTrendingSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 w-full max-w-[720px] sm:mt-10"
        >
          <label htmlFor="blog-search" className="sr-only">
            Search blog articles
          </label>
          <div className="flex items-center gap-3 rounded-full border border-[#E8ECF0] bg-white px-5 py-3.5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:px-6 sm:py-4">
            <Search
              className="size-4 shrink-0 text-[#94A3B8] sm:size-[18px]"
              strokeWidth={2}
              aria-hidden="true"
            />
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={blogSearchPlaceholder}
              className="min-w-0 flex-1 bg-transparent text-[13px] font-medium text-dark-navy placeholder:text-[#94A3B8] focus:outline-none sm:text-[14px]"
            />
          </div>
        </motion.div>

        {filteredPosts.length > 0 ? (
          <>
            <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {paginatedPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>

            {totalPages > 1 ? (
              <Pagination className="mt-10 sm:mt-12">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      className={
                        currentPage <= 1
                          ? "pointer-events-none opacity-50"
                          : undefined
                      }
                      onClick={(event) => {
                        event.preventDefault();
                        if (currentPage > 1) goToPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>

                  {visiblePages.map((page, index) =>
                    page === "ellipsis" ? (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === page}
                          onClick={(event) => {
                            event.preventDefault();
                            goToPage(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      className={
                        currentPage >= totalPages
                          ? "pointer-events-none opacity-50"
                          : undefined
                      }
                      onClick={(event) => {
                        event.preventDefault();
                        if (currentPage < totalPages) goToPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            ) : null}
          </>
        ) : (
          <p className="mt-10 text-center text-[14px] font-medium text-[#64748B] sm:mt-12">
            No articles match your search. Try different keywords.
          </p>
        )}
      </div>
    </section>
  );
}
