"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Brain, Code, Globe, Zap } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "Next.js", level: 95 },
    { name: "Flutter", level: 90 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Firebase", level: 80 },
  ];

  const expertise = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement FullStack",
      description: "Applications web et mobiles performantes avec les dernières technologies"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intégration IA",
      description: "Solutions intelligentes qui automatisent et optimisent vos processus"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Sites rapides et optimisés pour une expérience utilisateur exceptionnelle"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Approche Globale",
      description: "De l'idée à la réalisation, avec documentation et maintenance"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-secondary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - Title and intro */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                À propos de moi
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Transformez vos idées en <span className="text-primary">réalité numérique</span>
              </h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Avec 3 ans d'expérience en développement fullstack, je combine expertise technique 
              et créativité pour créer des solutions numériques innovantes. Mon approche unique 
              intègre l'intelligence artificielle pour des résultats plus professionnels et efficaces.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <BadgeCheck className="w-8 h-8 text-secondary" />
              <span className="text-xl font-semibold">Certifié en Vibe Coding & Gestion de Projet</span>
            </div>
          </motion.div>

          {/* Middle column - Expertise */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Mon approche</h3>
            
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Mes compétences</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}