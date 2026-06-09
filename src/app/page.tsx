import { AppPromoSection } from "@/components/AppPromo";
import { HelpInfoSection } from "@/components/HelpInfo";
import { FeaturesSection } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero/Hero";
import { FindYourRideSection } from "@/components/FindYourRide";
import { HowItWorksSection } from "@/components/HowItWorks";
import { LocationsMapSection } from "@/components/Locations";
import { Navbar } from "@/components/Navbar/Navbar";
import { SocialProofSection } from "@/components/SocialProof";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <Hero />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] overflow-x-clip px-0">
          <LocationsMapSection />
          <HowItWorksSection />
          <FindYourRideSection />
        </div>
        <SocialProofSection />
        <FeaturesSection />
        <AppPromoSection />
        <HelpInfoSection />
        <Footer />
      </div>
    </main>
  );
}
