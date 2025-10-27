import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PerformanceOptimizer />
      <ScrollIndicator />
      <FloatingWhatsApp />
      <Navbar />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <div id="about">
          <AboutSection />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <div id="certifications">
          <CertificationsSection />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <div id="projects">
          <ProjectsSection />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <div id="contact">
          <ContactSection />
        </div>
      </Suspense>
      
      <Footer />
    </main>
  );
}