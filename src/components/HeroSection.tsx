"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import ProfileCard from "./ProfileCard";

const Galaxy = dynamic(() => import("./Galaxy"), { ssr: false });

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Galaxy background */}
      <div className="absolute inset-0 z-0">
        <Galaxy paused={isPaused} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                Développeur FullStack & IA
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="block">ADJASSOHO</span>
              <span className="block text-primary">Silvère</span>
            </motion.h1>

            <motion.p
              className="text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Je crée des expériences numériques élégantes en associant l&apos;intelligence artificielle
              à des solutions techniques performantes. Basé à Calavi, Bénin.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-foreground/60">Années d&apos;expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-foreground/60">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-foreground/60">Clients satisfaits</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a href="#projects" className="px-8 py-4 bg-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                Voir mes projets
              </a>
              <a href="#contact" className="px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 text-center">
                Me contacter
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Card with 3D tilt effect */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <ProfileCard
              avatarUrl="/mon_image.jpg"
              miniAvatarUrl="/mon_image.jpg"
              name="ADJASSOHO Silvère"
              title="Développeur FullStack & IA"
              handle="silvere_dev"
              status="Disponible"
              contactText="Me contacter"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGradient={undefined}
              innerGradient={undefined}
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Custom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-current text-card"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
}