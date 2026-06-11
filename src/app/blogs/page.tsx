import type { Metadata } from "next";
import {
  BlogHeroSection,
  BlogRelatedArticlesSection,
  BlogTrendingSection,
} from "@/components/Blog";
import { Footer, Navbar } from "@/components/Layout";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";

export const metadata: Metadata = {
  title: "Blogs | Hire N Ride",
  description:
    "Discover stories from the Himalayas — expert travel guides, safety tips, and adventure stories for your next mountain bike trip.",
};

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <BlogHeroSection ctaHref="#trending" />
        <BlogTrendingSection />
        <BlogRelatedArticlesSection />
        <Footer />
      </div>
    </main>
  );
}
