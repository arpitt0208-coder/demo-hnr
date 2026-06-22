import {
  HomeAppPromoSection,
  HomeFeaturesSection,
  HomeFindYourRideSection,
  HomeHelpInfoSection,
  HomeHero,
  // HomeHowItWorksSection,
  HomeLocationsMapSection,
  HomeReviewsSection,
  HomeServicesSection,
  HomeSocialProofSection,
} from "@/components/Home";
import { HomePremiumProvider } from "@/components/Home/HomePremiumProvider";
import { Footer, Navbar } from "@/components/Layout";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";

export default function Home() {
  return (
    <HomePremiumProvider>
      <main className="home-premium relative min-h-screen overflow-x-clip">
        <Navbar variant="premium" />
        <WhatsAppContactButton />
        <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
          <HomeHero />
          <HomeServicesSection />
          <HomeLocationsMapSection />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] overflow-x-clip px-0">
            {/* <HomeHowItWorksSection /> */}
            <HomeFindYourRideSection />
          </div>
          <HomeFeaturesSection />
          <HomeReviewsSection />
          <HomeSocialProofSection />
          <HomeAppPromoSection />
          <HomeHelpInfoSection />
          <Footer />
        </div>
      </main>
    </HomePremiumProvider>
  );
}
