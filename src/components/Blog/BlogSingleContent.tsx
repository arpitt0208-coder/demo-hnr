import Image from "next/image";
import type { BlogPost } from "@/data/blogPage";
import { BlogSingleSidebar } from "./BlogSingleSidebar";

interface BlogSingleContentProps {
  post: BlogPost;
}

export function BlogSingleContent({ post }: BlogSingleContentProps) {
  return (
    <section
      className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:px-10 lg:px-16 lg:pb-24 xl:px-20"
      aria-label="Article content"
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] lg:items-start lg:gap-12">
        <div className="min-w-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px] shadow-[0_8px_32px_rgba(15,23,42,0.12)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 860px"
            />
          </div>

          <article className="mt-8 sm:mt-10">
            <p className="text-[15px] font-medium leading-[1.85] text-[#475569] sm:text-[16px]">
              {post.excerpt}
            </p>

            <p className="mt-6 text-[15px] font-medium leading-[1.85] text-[#475569] sm:text-[16px]">
              Whether you are planning your first Himalayan ride or returning for
              another season on the mountain roads, this guide covers the routes,
              rentals, and local tips that help you travel with confidence. Hire N
              Ride makes it easy to pick up a bike, explore at your pace, and
              discover the stories waiting around every bend.
            </p>

            <p className="mt-6 text-[15px] font-medium leading-[1.85] text-[#475569] sm:text-[16px]">
              Ready to start your adventure? Browse our fleet, compare locations,
              and book your ride in minutes — so you can spend less time planning
              and more time on the road.
            </p>
          </article>
        </div>

        <BlogSingleSidebar currentSlug={post.slug} />
      </div>
    </section>
  );
}
