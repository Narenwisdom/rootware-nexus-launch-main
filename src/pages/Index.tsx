
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DevelopersSection from "@/components/DevelopersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NowBuildersSection from "@/components/NowBuildersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Rootware Data IT Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DevelopersSection />
        <TestimonialsSection />
        <NowBuildersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
