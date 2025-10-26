"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Securitel v2",
      description: "Plateforme de sécurisation des téléphones portables contre le vol, la perte et les arnaques au Bénin.",
      image: "securitel",
      tags: ["Next.js", "TypeScript", "FedaPay", "Tailwind CSS"],
      links: {
        live: "https://securitel-v2.vercel.app/",
        github: "#"
      },
      featured: true
    },
    {
      id: 2,
      title: "Jeunesse Généreuse",
      description: "Site de collecte de fonds pour équiper 500+ enfants en kits scolaires complets.",
      image: "jeunesse",
      tags: ["Next.js", "Framer Motion", "FedaPay", "Tailwind CSS"],
      links: {
        live: "https://jeunesse-genereuse01.vercel.app/",
        github: "#"
      },
      featured: true
    },
    {
      id: 3,
      title: "Enseignement Catholique Lokossa",
      description: "Site institutionnel de la Direction Diocésaine de l'Enseignement Catholique de Lokossa.",
      image: "enseignement",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://www.enseignementcatholokossa.com/",
        github: "#"
      },
      featured: false
    },
    {
      id: 4,
      title: "Bon Plan CBD",
      description: "E-commerce spécialisé dans la vente de produits CBD de qualité à Rouen.",
      image: "bonplan",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      links: {
        live: "https://bonplancbd.com/",
        github: "#"
      },
      featured: false
    },
    {
      id: 5,
      title: "DLearning CED",
      description: "Plateforme e-learning collaborative pour le Centre d'Études Diplomatiques.",
      image: "dlearning",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      links: {
        live: "https://dlearning-ced.vercel.app/",
        github: "#"
      },
      featured: false
    },
    {
      id: 6,
      title: "YouTube Clone",
      description: "Application mobile de clone YouTube avec notifications personnalisées.",
      image: "youtube",
      tags: ["Flutter", "Firebase", "API YouTube"],
      links: {
        live: "#",
        github: "#"
      },
      featured: false
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-secondary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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

        {/* Featured Projects - Horizontal scroll */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Projets mis en avant</h3>
          
          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-8 min-w-max">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -15 }}
                  className="w-96 flex-shrink-0 bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border"
                >
                  <div className="h-52 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center relative">
                    <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                      {project.image}
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
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
                    
                    <div className="flex items-center text-xs text-foreground/60">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span>Projet collaboratif</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* All Projects - Masonry grid */}
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center">Tous mes projets</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center relative">
                  <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    {project.image}
                  </div>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" 
                     className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-secondary hover:text-white transition-colors shadow-md">
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
                    <div className="flex items-center text-xs text-foreground/60">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span>Projet collaboratif</span>
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