"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-primary/10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-secondary/10 to-transparent"></div>
        
        {/* Floating shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
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
              Je crée des expériences numériques élégantes en associant l'intelligence artificielle 
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
                <div className="text-foreground/60">Années d'expérience</div>
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
              <button className="px-8 py-4 bg-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Voir mes projets
              </button>
              <button className="px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
                Me contacter
              </button>
            </motion.div>
          </motion.div>

          {/* Profile section with unique design */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary/20 blur-2xl animate-pulse-custom"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-secondary/20 blur-2xl animate-pulse-custom"></div>
              
              {/* Profile container with unique shape */}
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative">
                    {/* Hexagonal frame */}
                    <div className="hexagon-frame w-full h-96 bg-gradient-to-br from-primary/30 to-secondary/30 p-1 rounded-2xl">
                      <div className="hexagon-content w-full h-full bg-card rounded-2xl flex items-center justify-center">
                        <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl w-64 h-64 flex items-center justify-center text-gray-400">
                          Photo de profil
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating badges */}
                    <motion.div 
                      className="absolute -top-6 -right-6 bg-card rounded-full p-4 shadow-xl border border-border"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold">IA</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -bottom-6 -left-6 bg-card rounded-full p-4 shadow-xl border border-border"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">3+</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
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