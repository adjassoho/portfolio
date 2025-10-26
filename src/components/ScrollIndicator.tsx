"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrolledPercentage = (scrollPosition / (docHeight - windowHeight)) * 100;
      setScrollY(scrolledPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-muted z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollY / 100 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ width: `${scrollY}%` }}
      />
    </motion.div>
  );
}