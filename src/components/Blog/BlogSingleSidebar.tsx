import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, FolderOpen, Link2, Newspaper } from "lucide-react";
import {
  blogPopularLinks,
  getBlogCategories,
  getBlogRecentPosts,
} from "@/data/blogPage";

interface BlogSingleSidebarProps {
  currentSlug: string;
}

function SidebarSection({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof FolderOpen;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-[16px] border border-[#E8ECF0] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-yellow shadow-[0_2px_10px_rgba(239,190,61,0.3)]">
          <Icon className="size-[18px] text-dark-navy" strokeWidth={2.25} aria-hidden="true" />
        </span>
        <h2 className="text-[15px] font-extrabold text-dark-navy">{title}</h2>
      </div>
      <div className="mt-3 h-[3px] w-12 rounded-full bg-primary-yellow" aria-hidden="true" />
      <div className="mt-4">{children}</div>
    </aside>
  );
}

function formatCategory(category: string) {
  return category
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function BlogSingleSidebar({ currentSlug }: BlogSingleSidebarProps) {
  const categories = getBlogCategories();
  const recentPosts = getBlogRecentPosts(currentSlug, 4);

  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:gap-7">
      <SidebarSection title="Categories" icon={FolderOpen}>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href="/blogs#trending"
                className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-[#FFFBF0]"
              >
                <span className="text-[13px] font-semibold text-[#475569] transition-colors group-hover:text-dark-navy">
                  {formatCategory(category.name)}
                </span>
                <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[10px] font-bold text-[#64748B] transition-colors group-hover:bg-primary-yellow/20 group-hover:text-dark-navy">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarSection>

      <SidebarSection title="Recent Posts" icon={Newspaper}>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blogs/${post.slug}`}
                className="group flex gap-3 rounded-lg transition-opacity hover:opacity-90"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-[10px] bg-[#F1F5F9] sm:size-[72px]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="72px"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="line-clamp-2 text-[13px] font-bold leading-snug text-dark-navy transition-colors group-hover:text-primary-yellow">
                    {post.title}
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-[#94A3B8]">
                    {post.publishedAt}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarSection>

      <SidebarSection title="Popular Links" icon={Link2}>
        <ul className="space-y-1">
          {blogPopularLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center gap-2 rounded-lg px-2 py-2.5 transition-colors hover:bg-[#FFFBF0]"
              >
                <ChevronRight
                  className="size-3.5 shrink-0 text-primary-yellow transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span className="text-[13px] font-medium text-[#475569] transition-colors group-hover:text-dark-navy">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarSection>
    </div>
  );
}
