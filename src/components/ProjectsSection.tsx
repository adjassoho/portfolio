"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const mobileApps = [
    {
      id: 1,
      title: "Sagbo - Assistant Vocal IA Fongbé",
      description: "Assistant vocal intelligent en langue Fongbé avec reconnaissance vocale et exécution de commandes. Innovation primée avec mention excellente.",
      image: "/sagbo.jpeg",
      tags: ["Flutter", "IA", "NLP", "Fongbé"],
      links: {
        live: "#",
        github: "#"
      },
      badge: "🏆 Innovation Primée"
    },
    {
      id: 2,
      title: "Assistant Tchee",
      description: "Application de mise en relation avec les artisans locaux. Système de géolocalisation, chat direct, publications et système VIP basé sur l'influence.",
      image: "/Assistant_tchee.jpeg",
      tags: ["Flutter", "Firebase", "Geolocation", "Chat"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "MyTube - Notifications YouTube IA",
      description: "Application avec agent IA qui scrape YouTube via API pour notifier uniquement les nouvelles vidéos de vos chaînes préférées.",
      image: "/youtub_notif.jpeg",
      tags: ["Flutter", "IA", "YouTube API", "Web Scraping"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Orbis - UI Customizer",
      description: "Application Android permettant de redesigner l'interface utilisateur et regrouper les applications selon vos préférences personnalisées.",
      image: "/Obis.jpeg",
      tags: ["Flutter", "Android", "UI/UX", "Customization"],
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  const webProjects = [
    {
      id: 1,
      title: "Sagbo - Assistant Vocal IA Fongbé",
      description: "Assistant vocal intelligent en langue Fongbé avec reconnaissance vocale et exécution de commandes. Innovation primée avec mention excellente.",
      image: "/sagbo.jpeg",
      tags: ["Flutter", "IA", "NLP", "Fongbé"],
      links: {
        live: "#",
        github: "#"
      },
      featured: true,
      isCollaborative: false,
      badge: "🏆 Innovation Primée"
    },
    {
      id: 2,
      title: "Securitel v2",
      description: "Plateforme de sécurisation des téléphones portables contre le vol, la perte et les arnaques au Bénin.",
      image: "/Securitel.png",
      tags: ["Next.js", "TypeScript", "FedaPay", "Tailwind CSS"],
      links: {
        live: "https://securitel-v2.vercel.app/",
        github: "#"
      },
      featured: true,
      isCollaborative: true
    },
    {
      id: 3,
      title: "Jeunesse Généreuse",
      description: "Site de collecte de fonds pour équiper 500+ enfants en kits scolaires complets.",
      image: "/Jeunesse_genereuse.png",
      tags: ["Next.js", "Framer Motion", "FedaPay", "Tailwind CSS"],
      links: {
        live: "https://jeunesse-genereuse01.vercel.app/",
        github: "#"
      },
      featured: true,
      isCollaborative: false
    },
    {
      id: 4,
      title: "La Maison Ange Eden",
      description: "Plateforme de formations en Leadership, Savonnerie et Cosmétique avec système de gestion complet.",
      image: "/ange_eden.png",
      tags: ["Next.js", "Prisma", "MySQL", "Tailwind CSS"],
      links: {
        live: "https://ange-eden-01.vercel.app/",
        github: "#"
      },
      featured: false,
      isCollaborative: false
    },
    {
      id: 5,
      title: "IMMA - Gestion Immobilière IA",
      description: "Plateforme de gestion immobilière automatique guidée par un agent IA à Rouen.",
      image: "/Imma.png",
      tags: ["React", "TypeScript", "Vite", "IA"],
      links: {
        live: "https://imma-psi.vercel.app/",
        github: "#"
      },
      featured: false,
      isCollaborative: false
    },
    {
      id: 6,
      title: "Enseignement Catholique Lokossa",
      description: "Site institutionnel de la Direction Diocésaine de l'Enseignement Catholique de Lokossa.",
      image: "/enseignement_catholique.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://www.enseignementcatholokossa.com/",
        github: "#"
      },
      featured: false,
      isCollaborative: false
    },
    {
      id: 7,
      title: "Bon Plan CBD",
      description: "E-commerce spécialisé dans la vente de produits CBD de qualité à Rouen.",
      image: "/bonplancbd.png",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      links: {
        live: "https://bonplancbd.com/",
        github: "#"
      },
      featured: false,
      isCollaborative: false
    },
    {
      id: 8,
      title: "DLearning CED",
      description: "Plateforme e-learning collaborative pour le Centre d'Éducations à Distance.",
      image: "/ced_INE.png",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      links: {
        live: "https://dlearning-ced.vercel.app/",
        github: "#"
      },
      featured: false,
      isCollaborative: true
    },
    {
      id: 9,
      title: "ESO Rouen",
      description: "Site web institutionnel informatif et élégant pour ESO Rouen.",
      image: "/eso_rouen.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://eso-rouen.vercel.app",
        github: "#"
      },
      featured: true,
      isCollaborative: false
    },
    {
      id: 10,
      title: "Le Mojo Rouen",
      description: "Site web moderne de présentation pour le restaurant Le Mojo Rouen.",
      image: "/le_mojo_rouen.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://le-mojo-rouen.vercel.app",
        github: "#"
      },
      featured: true,
      isCollaborative: false
    },
    {
      id: 11,
      title: "Tranché Rouen",
      description: "Site web pour la boulangerie artisanale Tranché à Rouen.",
      image: "/tranche_rouen.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://tranche-rouen-restau.vercel.app",
        github: "#"
      },
      featured: true,
      isCollaborative: false
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 enhanced-gradient"></div>
        <div className="floating-particles"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/10 to-transparent"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-secondary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            Mes réalisations
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Mes <span className="text-primary">projets</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations les plus récentes et significatives
          </p>
        </motion.div>

        {/* Featured Projects - Carousel on mobile, horizontal scroll on desktop */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Projets mis en avant</h3>

          {/* Desktop: Horizontal scroll */}
          <div className="hidden md:block overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-8 min-w-max">
              {webProjects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -15 }}
                  className="w-96 flex-shrink-0 bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border"
                >
                  <div className="h-52 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {project.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                          {project.badge}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-secondary hover:text-white transition-colors shadow-md">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {project.links.github !== "#" && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                          className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-secondary hover:text-white transition-colors shadow-md">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold">{project.title}</h4>
                    </div>

                    <p className="text-foreground/80 mb-5 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.isCollaborative && (
                      <div className="flex items-center text-xs text-foreground/60">
                        <Star className="w-3 h-3 text-yellow-500 mr-1" />
                        <span>Projet collaboratif</span>
                      </div>
                    )}
                    {!project.isCollaborative && (
                      <div className="flex items-center text-xs text-primary/80">
                        <span className="font-medium">Projet individuel</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Carousel with dots */}
          <div className="md:hidden relative">
            <div className="overflow-x-auto snap-x snap-mandatory hide-scrollbar" id="featured-carousel">
              <div className="flex gap-4 px-4">
                {webProjects.filter(p => p.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="w-[85vw] flex-shrink-0 snap-center bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-border"
                  >
                    <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="85vw"
                      />
                      {project.badge && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                            {project.badge}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 flex gap-2 z-10">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                          className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-secondary hover:text-white transition-colors shadow-md">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        {project.links.github !== "#" && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                            className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-secondary hover:text-white transition-colors shadow-md">
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold">{project.title}</h4>
                      </div>

                      <p className="text-foreground/80 mb-4 text-sm line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.isCollaborative && (
                        <div className="flex items-center text-xs text-foreground/60">
                          <Star className="w-3 h-3 text-yellow-500 mr-1" />
                          <span>Projet collaboratif</span>
                        </div>
                      )}
                      {!project.isCollaborative && (
                        <div className="flex items-center text-xs text-primary/80">
                          <span className="font-medium">Projet individuel</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Carousel dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {webProjects.filter(p => p.featured).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const carousel = document.getElementById('featured-carousel');
                    if (carousel) {
                      const cardWidth = carousel.scrollWidth / webProjects.filter(p => p.featured).length;
                      carousel.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
                    }
                  }}
                  className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary transition-colors"
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Applications Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              📱 Applications <span className="text-primary">Mobiles</span>
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Innovations mobiles avec IA, géolocalisation et interfaces personnalisées
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {app.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                        {app.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2">{app.title}</h4>
                  <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{app.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {app.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Web Projects - Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              Tous les <span className="text-primary">Sites Web</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-secondary hover:text-white transition-colors shadow-md z-10">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-foreground/80 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {project.isCollaborative && (
                        <div className="flex items-center text-xs text-foreground/60">
                          <Star className="w-3 h-3 text-yellow-500 mr-1" />
                          <span>Projet collaboratif</span>
                        </div>
                      )}
                      {!project.isCollaborative && (
                        <div className="flex items-center text-xs text-primary/80">
                          <span className="font-medium">Projet individuel</span>
                        </div>
                      )}
                    </div>
                    {project.links.github !== "#" && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted hover:bg-secondary hover:text-white transition-colors">
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}