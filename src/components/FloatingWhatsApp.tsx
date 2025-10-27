"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
      
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "22955616960"; // WhatsApp: +229 55616960
    const message = encodeURIComponent("Bonjour Silvère, je souhaite discuter d'un projet avec vous.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="fixed bottom-8 right-8 z-50"
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-20 right-0 mb-2"
            >
              <div className="relative bg-card border border-primary/30 rounded-2xl shadow-2xl p-4 max-w-xs">
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-sm font-medium mb-2">💬 Besoin d'aide ?</p>
                <p className="text-xs text-foreground/70">
                  Discutons de votre projet sur WhatsApp !
                </p>
                <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-card border-r border-b border-primary/30"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
          
          {/* Button */}
          <div className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/50 transition-all duration-300">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          {/* Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
