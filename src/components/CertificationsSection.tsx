"use client";

import { motion } from "framer-motion";
import { Download, Award, Calendar, FileText, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

export default function CertificationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: "ChatGPT for Product Management & Innovation",
      issuer: "OpenAI / Product Management",
      date: "2025",
      description: "Utilisation avancée de ChatGPT pour la gestion de produits et l'innovation",
      icon: <Sparkles className="w-6 h-6" />,
      file: "/ADJASSOHO Silvère  - ChatGPT for Product Management and Innovation Course - Certificate.pdf",
      image: "/ADJASSOHO Silvère  - ChatGPT for Product Management and Innovation Course - Certificate.pdf"
    },
    {
      id: 2,
      title: "Flutter Development",
      issuer: "Google / Mobile Development",
      date: "2025",
      description: "Développement d'applications mobiles cross-platform avec Flutter",
      icon: <Award className="w-6 h-6" />,
      file: "/certificat_flutter.png",
      image: "/certificat_flutter.png"
    },
    {
      id: 3,
      title: "Clonage de Voix avec IA",
      issuer: "Intelligence Artificielle",
      date: "2025",
      description: "Techniques avancées de synthèse vocale et clonage de voix par IA",
      icon: <Award className="w-6 h-6" />,
      file: "/clonage_de_voix_avec_ia_certificat.jpg",
      image: "/clonage_de_voix_avec_ia_certificat.jpg"
    },
    {
      id: 4,
      title: "Big Data Analytics",
      issuer: "Data Science",
      date: "2025",
      description: "Analyse et traitement de données massives avec les technologies Big Data",
      icon: <Award className="w-6 h-6" />,
      file: "/Big_data_certificat.jpeg",
      image: "/Big_data_certificat.jpeg"
    },
    {
      id: 5,
      title: "Java Programming",
      issuer: "Oracle / Programmation Orientée Objet",
      date: "2024",
      description: "Maîtrise du langage Java et développement d'applications enterprise",
      icon: <Award className="w-6 h-6" />,
      file: "/java_certificat.jpg",
      image: "/java_certificat.jpg"
    },
    {
      id: 6,
      title: "PHP Web Development",
      issuer: "Développement Web Backend",
      date: "2024",
      description: "Développement d'applications web dynamiques avec PHP et MySQL",
      icon: <Award className="w-6 h-6" />,
      file: "/php_certificat.jpg",
      image: "/php_certificat.jpg"
    },
    {
      id: 7,
      title: "Winsurf IDE",
      issuer: "Développement Web",
      date: "2025",
      description: "Maîtrise de l'IDE Winsurf pour le codage agentique",
      icon: <Award className="w-6 h-6" />,
      file: "/winsurf_certificat.jpg",
      image: "/winsurf_certificat.jpg"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 enhanced-gradient"></div>
        <div className="floating-particles"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
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
              <Award className="w-4 h-4" />
              Mes qualifications professionnelles
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Certifications <span className="text-primary">Premium</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <div className="w-12 h-1 bg-secondary rounded-full"></div>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Un parcours de formation continue pour rester à la pointe de la technologie
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(cert.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              <div className={`relative h-full bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary/20 transition-all duration-500 ${hoveredId === cert.id ? 'shadow-2xl shadow-primary/30 scale-105 border-primary/50' : 'shadow-lg'
                }`}>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Certificate preview */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-6 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <div className="text-primary transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {cert.icon}
                        <Award className="w-16 h-16" />
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-foreground/70 font-medium mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Action button */}
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-300 group/link"
                  >
                    <span>Voir le certificat</span>
                    <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary/30 shadow-2xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 animate-pulse"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Info */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 border border-primary/30">
                    <FileText className="w-4 h-4" />
                    Curriculum Vitae
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Téléchargez mon <span className="text-primary">CV complet</span>
                  </h3>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Découvrez l&apos;ensemble de mon parcours professionnel, mes compétences techniques
                    et mes réalisations dans le développement web et mobile.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">7+</div>
                        <div className="text-sm text-foreground/70">Certifications</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">3+</div>
                        <div className="text-sm text-foreground/70">Années d&apos;exp.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Download button */}
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <a
                      href="/CV_Silvère_ADJASSOHO (1).pdf"
                      download="CV_Silvere_ADJASSOHO.pdf"
                      className="group relative w-full py-6 px-8 bg-primary text-white font-bold rounded-2xl shadow-2xl hover:shadow-primary/50 hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      <Download className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
                      <span className="relative z-10 text-lg">Télécharger mon CV</span>
                    </a>
                  </motion.div>

                  <div className="mt-4 flex items-center gap-4 text-sm text-foreground/60">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      Format PDF
                    </span>
                    <span>•</span>
                    <span>2.4 MB</span>
                    <span>•</span>
                    <span className="text-primary">Mis à jour 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}