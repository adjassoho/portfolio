"use client";

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = ['/mon_image.jpg'];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize scroll performance
    const optimizeScrolling = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Update scroll indicator or other scroll-dependent elements
        ticking = false;
      };
      
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };
      
      window.addEventListener('scroll', onScroll, { passive: true });
      
      return () => window.removeEventListener('scroll', onScroll);
    };

    // Reduce motion for users who prefer it
    const respectMotionPreferences = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
      }
    };

    preloadCriticalResources();
    const cleanupScroll = optimizeScrolling();
    respectMotionPreferences();

    return cleanupScroll;
  }, []);

  return null;
}