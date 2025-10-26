"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-3xl font-bold mb-6">
              <span className="text-primary">ADJASSOHO</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-lg leading-relaxed">
              Développeur fullstack passionné par l'innovation technologique et l'intégration de l'intelligence artificielle 
              dans des solutions numériques élégantes et performantes.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/adjassoho" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:silveradjassoho@gmail.com" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projets</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/70">Calavi, Bénin</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:silveradjassoho@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  silveradjassoho@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ADJASSOHO Silvère. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/50 hover:text-foreground/80 text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-foreground/50 hover:text-foreground/80 text-sm transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}