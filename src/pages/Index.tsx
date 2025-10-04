import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HackathonBrowse from "@/components/HackathonBrowse";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HackathonBrowse />
      <SponsorsSection />
    </div>
  );
};

export default Index;
