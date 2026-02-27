import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="h-screen bg-background" />,
});
const CertificationsSection = dynamic(() => import("@/components/CertificationsSection"), {
  loading: () => <div className="h-screen bg-background" />,
});
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <div className="h-screen bg-background" />,
});
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  loading: () => <div className="h-screen bg-background" />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="h-screen bg-background" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32 bg-background" />,
});

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

      <div id="about">
        <AboutSection />
      </div>

      <div id="certifications">
        <CertificationsSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}