import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface FloatingActionsProps {
  lang: 'fr' | 'en';
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150] flex flex-col gap-4">
      <AnimatePresence>
        {/* Back to Top */}
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-white text-black border border-black/5 rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-50 transition-all group"
            title={lang === 'fr' ? "Retour en haut" : "Back to top"}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
