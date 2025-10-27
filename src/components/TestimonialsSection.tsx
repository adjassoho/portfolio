"use client";

import { motion } from "framer-motion";
import { Quote, Star, Sparkles, Award, TrendingUp, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Ares GNIMAGNON",
      role: "Commerçant",
      company: "IMMA",
      content: "Silvère a transformé ma vision en une plateforme robuste et sécurisée. Son expertise en Next.js et son approche méthodique a fait toute la différence. Un développeur exceptionnel qui comprend vraiment les enjeux business.Je le recommande fortement",
      rating: 5,
      project: "IMMA",
      color: "from-primary/20 to-accent/20",
      avatar: "/Ares.jpeg",
      hasRealImage: true
    },
    {
      id: 2,
      name: "BonPlanCBD",
      role: "Fondateur",
      company: "BonPlanCBD",
      content: "Notre e-commerce a dépassé toutes nos attentes ! L'intégration Stripe est fluide, le design est moderne et les performances sont excellentes. Silvère a livré un travail de qualité professionnelle dans les délais.",
      rating: 5,
      project: "E-commerce CBD",
      color: "from-secondary/20 to-primary/20",
      avatar: null,
      hasRealImage: false
    },
    {
      id: 3,
      name: "Direction CED",
      role: "Responsable Innovation",
      company: "Centre d'Éducation à Distance",
      content: "La plateforme e-learning développée par Silvère et son équipe a révolutionné notre approche pédagogique. Interface intuitive, fonctionnalités avancées et support réactif. Un partenaire de confiance pour nos projets digitaux.",
      rating: 5,
      project: "DLearning CED",
      color: "from-accent/20 to-secondary/20",
      avatar: null,
      hasRealImage: false
    },
    {
      id: 4,
      name: "Maison Ange Eden",
      role: "Directrice Générale",
      company: "Ange Eden Formation",
      content: "Silvère a créé une plateforme complète qui gère nos formations, inscriptions et paiements. Son professionnalisme et sa capacité à comprendre nos besoins spécifiques sont remarquables. Résultat au-delà de nos espérances !",
      rating: 5,
      project: "Plateforme Formation",
      color: "from-primary/20 to-secondary/20",
      avatar: null,
      hasRealImage: false
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 enhanced-gradient"></div>
        <div className="floating-particles"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-medium mb-6 border border-primary/30">
              <Sparkles className="w-4 h-4" />
              Ce qu'ils disent de moi
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Témoignages <span className="text-primary">Clients</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <div className="w-12 h-1 bg-secondary rounded-full"></div>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de mes clients est ma priorité absolue
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-primary">5.0</div>
                <div className="text-sm text-foreground/70">Note moyenne</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-sm text-foreground/70">Clients satisfaits</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-foreground/70">Recommandations</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(testimonial.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              <div className={`relative h-full bg-gradient-to-br ${testimonial.color} backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 transition-all duration-500 ${hoveredId === testimonial.id ? 'shadow-2xl shadow-primary/20 scale-105' : 'shadow-lg'
                }`}>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-24 h-24 text-primary" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-secondary text-secondary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 bg-gradient-to-br from-primary/20 to-accent/20">
                        {testimonial.hasRealImage && testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <User className="w-8 h-8 text-primary/50" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div>
                        <div className="font-bold text-lg text-foreground mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-foreground/70">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-primary font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-foreground/80 mb-8">
            Prêt à rejoindre mes clients satisfaits ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            Démarrons votre projet
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
