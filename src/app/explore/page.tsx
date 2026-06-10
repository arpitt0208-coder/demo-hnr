import type { Metadata } from "next";
import { ExploreBikeModelsSection } from "@/components/Explore/ExploreBikeModelsSection";
import { ExploreHeroSection } from "@/components/Explore/ExploreHeroSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";

export const metadata: Metadata = {
  title: "Explore Bike Models | Hire N Ride",
  description:
    "Browse our trusted fleet of Himalayan bikes. Well maintained, locally guided, and ready to book in minutes.",
};

export default function ExplorePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <ExploreHeroSection ctaHref="#bike-models" />
        <ExploreBikeModelsSection />
        <Footer />
      </div>
    </main>
  );
}
