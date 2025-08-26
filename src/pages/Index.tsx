import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import ThreeCardsSection from "@/components/ThreeCardsSection";
import AgentStackSection from "@/components/AgentStackSection";
import UseCasesSection from "@/components/UseCasesSection";
import PowerStackSection from "@/components/PowerStackSection";
import InspirationSection from "@/components/InspirationSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LogosSection />
      <ThreeCardsSection />
      <AgentStackSection />
      <UseCasesSection />
      <PowerStackSection />
      <InspirationSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;