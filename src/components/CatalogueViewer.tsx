import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, AlertCircle, Smartphone } from 'lucide-react';

interface CatalogueViewerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'fr' | 'en';
  pdfUrl: string;
}

export const CatalogueViewer: React.FC<CatalogueViewerProps> = ({
  isOpen,
  onClose,
  lang,
  pdfUrl,
}) => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

   const t = {
    fr: {
      title: "Catalogue des Exposants - Biashara Afrika 2026",
      subtitle: "Consultez ou téléchargez la brochure officielle des exposants",
      download: "Télécharger le catalogue",
      viewOnline: "Ouvrir dans un onglet",
      close: "Fermer",
      mobileTitle: "Catalogue Mobile",
      mobileNotice: "Pour une expérience de lecture optimale sur votre mobile, vous pouvez ouvrir le catalogue des exposants directement dans un nouvel onglet ou lancer le téléchargement de la brochure.",
      loadingText: "Chargement du catalogue...",
      infoTitle: "Brochure Exposants",
      features: [
        "Fiches d'informations pays de la ZLECAf",
        "Programme exhaustif du Forum à Lomé",
        "Profils des intervenants & exposants",
        "Opportunités et connexions d'affaires"
      ]
    },
    en: {
      title: "Exhibitors Catalogue - Biashara Afrika 2026",
      subtitle: "View or download the official exhibitors catalogue",
      download: "Download the catalogue",
      viewOnline: "Open in new tab",
      close: "Close",
      mobileTitle: "Mobile Catalogue",
      mobileNotice: "For an optimal reading experience on mobile devices, you can open the exhibitors catalogue directly in a new tab or download the direct PDF brochure.",
      loadingText: "Loading catalogue...",
      infoTitle: "Exhibitors Brochure",
      features: [
        "AfCFTA country information sheets",
        "Exhaustive Lomé Forum program",
        "Profiles of speakers & exhibitors",
        "Business opportunities & networking"
      ]
    }
  };

  const currentTranslation = t[lang] || t.fr;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden">
          {/* Backdrop Blur Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Core Panel Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full h-full md:max-w-6xl md:h-[90vh] bg-[#FCFBFA] md:rounded-[1.5rem] shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Elegant Header */}
            <header className="px-6 py-4 md:px-8 border-b border-black/5 bg-white/70 backdrop-blur-md flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-gold/10 text-brand-gold rounded-xl">
                  <FileText className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h1 className="text-sm md:text-lg font-bold font-display text-black leading-tight flex items-center gap-2">
                    {currentTranslation.title}
                    <span className="hidden sm:inline-block px-2 py-0.5 bg-brand-green/10 text-brand-green text-[10px] font-black uppercase rounded-sm tracking-widest border border-brand-green/20">
                      ZLECAf 2026
                    </span>
                  </h1>
                  <p className="text-xs text-black/40 mt-0.5 hidden sm:block">
                    {currentTranslation.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Desktop view-online action */}
                {!isMobile && (
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-105 hover:bg-slate-200 text-black/80 hover:text-black font-semibold text-xs uppercase duration-200 transition-all flex items-center gap-2 rounded-md border border-black/5"
                    title={currentTranslation.viewOnline}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{currentTranslation.viewOnline}</span>
                  </a>
                )}

                {/* Direct Download Button */}
                <a
                  href={pdfUrl}
                  download="CATALOGUE_BIASHARA_AFRIKA_2026.pdf"
                  className="px-4 py-2 bg-brand-green hover:bg-brand-gold hover:text-brand-green text-white font-bold text-xs uppercase tracking-wider duration-200 transition-all shadow-md flex items-center gap-2 rounded-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{currentTranslation.download}</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-red-50 hover:text-red-500 text-black/50 hover:shadow-sm border border-transparent hover:border-red-100 duration-200 transition-all rounded-lg ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </header>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto bg-slate-50 flex items-center justify-center relative p-4 md:p-8">
              {isMobile ? (
                /* Mobile optimized layout to bypass typical mobile iframe limitations */
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-md w-full bg-white rounded-3xl p-6 shadow-xl border border-black/5 text-center flex flex-col gap-6"
                >
                  <div className="inline-flex w-16 h-16 bg-brand-green/10 text-brand-green rounded-full items-center justify-center self-center">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="font-display font-black text-xl text-black">
                      {currentTranslation.mobileTitle}
                    </h3>
                    <p className="text-sm text-black/60 mt-3 leading-relaxed">
                      {currentTranslation.mobileNotice}
                    </p>
                  </div>

                  <div className="bg-brand-light/40 rounded-2xl p-4 text-left border border-black/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-3 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-brand-gold" />
                      {currentTranslation.infoTitle}
                    </h4>
                    <ul className="space-y-2">
                      {currentTranslation.features.map((feature, i) => (
                        <li key={i} className="text-xs text-black/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green block shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex py-4 bg-brand-gold hover:bg-[#D4AF37] text-white font-black uppercase text-xs tracking-widest justify-center items-center gap-2 rounded-xl shadow-md transition-all sm:w-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {currentTranslation.viewOnline}
                    </a>
                    
                    <a
                      href={pdfUrl}
                      download="CATALOGUE_BIASHARA_AFRIKA_2026.pdf"
                      className="w-full inline-flex py-4 bg-brand-green text-white font-black uppercase text-xs tracking-widest justify-center items-center gap-2 rounded-xl transition-all shadow-md sm:w-auto hover:brightness-110"
                    >
                      <Download className="w-4 h-4" />
                      {currentTranslation.download}
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* Desktop embedded interactive viewer using native iframe representation */
                <div className="w-full h-full relative flex items-center justify-center">
                  {loading && (
                    <div className="absolute inset-0 z-0 bg-slate-50 flex flex-col items-center justify-center gap-3">
                      <div className="w-10 h-10 border-4 border-brand-green border-t-transparent rounded-full animate-spin" />
                      <span className="text-xs text-black/40 font-mono">
                        {currentTranslation.loadingText}
                      </span>
                    </div>
                  )}

                  <iframe
                    src={`${pdfUrl}#toolbar=1&navpanes=0`}
                    className="w-full h-full rounded-2xl border border-black/10 bg-white shadow-lg relative z-10"
                    onLoad={() => setLoading(false)}
                    title={currentTranslation.title}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
