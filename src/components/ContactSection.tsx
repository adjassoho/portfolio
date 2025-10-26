"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez intégrer votre service d'envoi d'email
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Je vous répondrai dès que possible.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      content: "Calavi, Bénin"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "silveradjassoho@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      content: "+229 XX XX XX XX"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
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
            Restons connectés
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Me <span className="text-primary">contacter</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info - Left column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card rounded-3xl shadow-xl p-8 h-full border border-border">
              <h3 className="text-2xl font-bold mb-8">
                Restons en <span className="text-primary">contact</span>
              </h3>
              
              <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
                Intéressé par mon travail ? Vous avez un projet en tête ? N'hésitez pas à me contacter, 
                je suis toujours ouvert aux nouvelles opportunités et collaborations.
              </p>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-primary/20 text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                      <p className="text-foreground/80">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-6">Suivez-moi</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/adjassoho" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all duration-300 group">
                    <Github className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all duration-300 group">
                    <Linkedin className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                  </a>
                  <a href="mailto:silveradjassoho@gmail.com" className="p-3 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all duration-300 group">
                    <Mail className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card rounded-3xl shadow-xl p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}