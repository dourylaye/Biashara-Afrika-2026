import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, FileText } from 'lucide-react';
import { Language } from '../../types';

interface NavigationProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (val: boolean) => void;
  lang: Language;
  toggleLang: () => void;
  scrollToSection: (id: string) => void;
  translations: any;
  openCatalogue: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  lang,
  toggleLang,
  scrollToSection,
  translations,
  openCatalogue
}) => {
  const t = translations[lang];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-green/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={`font-display font-bold text-xl tracking-wider ${scrolled || mobileMenuOpen ? 'text-white' : 'text-black'}`}>
              BIASHARA AFRIKA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'program', 'speakers', 'village', 'gallery', 'practical'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium tracking-wide transition-colors ${scrolled ? 'text-white/80 hover:text-brand-gold' : 'text-black/80 hover:text-brand-gold'}`}
              >
                {t.nav[item]}
              </button>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <button 
                onClick={toggleLang}
                className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all ${scrolled ? 'border-white/20 text-white hover:bg-white/10 dark:border-white/30' : 'border-black/20 text-black hover:bg-black/5'}`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{lang}</span>
              </button>
              
              <button 
                onClick={openCatalogue}
                className={`font-semibold text-xs uppercase px-5 py-2.5 rounded-sm duration-200 transition-all shadow-md flex items-center justify-center gap-2 border cursor-pointer ${scrolled ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white' : 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white'}`}
              >
                <FileText className="w-3.5 h-3.5" />
                {t.nav.catalogue}
              </button>


            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${scrolled || mobileMenuOpen ? 'text-white' : 'text-black'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-brand-green flex flex-col items-center justify-center gap-8"
          >
            {['about', 'program', 'speakers', 'village', 'gallery', 'practical'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-2xl font-display text-white hover:text-brand-gold transition-colors"
              >
                {t.nav[item]}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCatalogue();
              }}
              className="text-2xl font-display text-brand-gold hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-6 h-6" />
              {t.nav.catalogue}
            </button>
            <button 
              onClick={toggleLang}
              className="text-white/60 font-bold uppercase p-2 border border-white/20 rounded-lg"
            >
              Change Language: {lang === 'fr' ? 'English' : 'Français'}
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

