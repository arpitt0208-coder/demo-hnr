import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bike, Calendar, Clock } from "lucide-react";
import { Footer, Navbar } from "@/components/Layout";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";
import { blogPosts } from "@/data/blogPage";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Article Not Found | Hire N Ride" };
  }

  return {
    title: `${post.title} | Hire N Ride`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <article className="px-4 pb-24 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto w-full max-w-[800px]">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#64748B] transition-colors hover:text-dark-navy"
            >
              <ArrowLeft className="size-4" strokeWidth={2} aria-hidden="true" />
              Back to blogs
            </Link>

            <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary-yellow px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-dark-navy">
              <Bike className="size-3 shrink-0" strokeWidth={2.25} aria-hidden="true" />
              {post.category}
            </span>

            <h1 className="mt-4 text-[26px] font-extrabold leading-[1.12] tracking-tight text-dark-navy sm:text-[32px] md:text-[38px]">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-[#94A3B8]">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex size-5 items-center justify-center rounded-full bg-dark-navy text-[7px] font-extrabold text-primary-yellow">
                  H
                </span>
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="size-3 shrink-0" strokeWidth={2} aria-hidden="true" />
                {post.publishedAt}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3 shrink-0" strokeWidth={2} aria-hidden="true" />
                {post.readTime}
              </span>
            </div>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[16px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>

            <p className="mt-8 text-[15px] font-medium leading-[1.75] text-[#475569]">
              {post.excerpt}
            </p>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  );
}
