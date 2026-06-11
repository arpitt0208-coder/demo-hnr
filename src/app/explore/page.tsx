import type { Metadata } from "next";
import { BrowseVehiclesSection } from "@/components/Explore/BrowseVehiclesSection";
import { ExploreHeroSection } from "@/components/Explore/ExploreHeroSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";
import { browseVehicles } from "@/data/vehicles";

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
        <ExploreHeroSection />

        <section
          id="bike-models"
          className="scroll-mt-24 bg-[#F9FAFB] px-4 py-10 sm:px-6 sm:py-12 lg:px-16 xl:px-20"
          aria-label="Browse available vehicles"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="text-center">
              <h2 className="text-[28px] font-extrabold leading-[1.12] tracking-tight text-dark-navy sm:text-[32px]">
                Browse Available Vehicles
              </h2>
              <p className="mx-auto mt-3 max-w-[640px] text-[15px] font-medium leading-[1.7] text-[#64748B]">
                Choose from our wide range of well-maintained bikes and scooters
              </p>
            </div>

            <BrowseVehiclesSection vehicles={browseVehicles} />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
