import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  onContactClick: () => void;
  lang: 'fr' | 'en';
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onContactClick, lang }) => {
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
        {/* Contact Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactClick}
          className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all group relative"
          title={lang === 'fr' ? "Nous écrire" : "Contact us"}
        >
          <MessageSquare className="w-6 h-6" />
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-4 px-4 py-2 bg-brand-green text-white text-[10px] uppercase font-black tracking-widest rounded-lg pointer-events-none whitespace-nowrap hidden md:block"
          >
            {lang === 'fr' ? "Nous écrire" : "Contact us"}
          </motion.div>
        </motion.button>

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
