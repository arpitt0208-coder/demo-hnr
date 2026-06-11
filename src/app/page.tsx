import {
  HomeAppPromoSection,
  HomeFeaturesSection,
  HomeFindYourRideSection,
  HomeHelpInfoSection,
  HomeHero,
  HomeHowItWorksSection,
  HomeLocationsMapSection,
  HomeSocialProofSection,
} from "@/components/Home";
import { Footer, Navbar } from "@/components/Layout";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <HomeHero />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] overflow-x-clip px-0">
          <HomeLocationsMapSection />
          <HomeHowItWorksSection />
          <HomeFindYourRideSection />
        </div>
        <HomeSocialProofSection />
        <HomeFeaturesSection />
        <HomeAppPromoSection />
        <HomeHelpInfoSection />
        <Footer />
      </div>
    </main>
  );
}
