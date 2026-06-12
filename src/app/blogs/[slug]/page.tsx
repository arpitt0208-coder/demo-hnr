import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Navbar } from "@/components/Layout";
import { BlogSingleContent } from "@/components/Blog/BlogSingleContent";
import { BlogSingleHero } from "@/components/Blog/BlogSingleHero";
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
        <BlogSingleHero post={post} />
        <BlogSingleContent post={post} />
        <Footer />
      </div>
    </main>
  );
}
