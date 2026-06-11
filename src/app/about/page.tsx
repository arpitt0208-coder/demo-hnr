import type { Metadata } from "next";
import {
  AboutCoreValuesSection,
  AboutCustomerRatingSection,
  AboutHeroSection,
  AboutOurStorySection,
  AboutWhatWeDoSection,
  AboutWhyChooseSection,
} from "@/components/About";
import { Footer, Navbar } from "@/components/Layout";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";

export const metadata: Metadata = {
  title: "About Us | Hire N Ride",
  description:
    "Learn about Hire N Ride — your trusted bike rental in Manali and across the Himalayas. Premium bikes, multi-location service, and 24/7 local support.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <AboutHeroSection ctaHref="/explore" />
        <AboutWhatWeDoSection />
        <AboutOurStorySection />
        <AboutCoreValuesSection />
        <AboutWhyChooseSection />
        <AboutCustomerRatingSection />
        <Footer />
      </div>
    </main>
  );
}
