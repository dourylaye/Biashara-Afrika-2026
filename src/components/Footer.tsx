import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Language } from '../../types';

interface FooterProps {
  lang: Language;
  translations: any;
  Logo: string;
  scrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  translations,
  Logo,
  scrollToSection
}) => {
  const t = translations[lang];

  return (
    <footer className="bg-brand-green text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16">
          <div className="max-w-md">
            <div className="mb-8">
              <img src={Logo} alt="Biashara Afrika Logo" className="h-24 md:h-28 w-auto object-contain" />
            </div>
            <p className="text-white/40 mb-8 leading-relaxed font-light">
              Biashara Afrika 2026 : Le rendez-vous stratégique pour le commerce intra-africain et la réussite de la ZLECAf.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { id: 'facebook', icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/CommercegouvTg?_rdc=1&_rdr#" },
                { id: 'twitter', icon: <Twitter className="w-5 h-5" />, url: "https://x.com/CommercegouvTg" },
                { id: 'linkedin', icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/company/minist%C3%A8re-d%C3%A9l%C3%A9gu%C3%A9-charg%C3%A9-du-commerce-et-du-contr%C3%B4le-de-la-qualit%C3%A9/posts/?feedView=all" },
                { id: 'whatsapp', icon: <MessageCircle className="w-5 h-5" />, url: "https://wa.me/22892545408" }
              ].map(s => (
                <motion.a 
                  key={s.id} 
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3, opacity: 0.9 }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer shadow-lg"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <div className="w-full md:max-w-xs">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-8 md:text-right">Navigation</h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-4 text-white/60 text-sm md:text-right">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">{t.nav.about}</button></li>
                <li><button onClick={() => scrollToSection('program')} className="hover:text-white transition-colors">{t.nav.program}</button></li>
                <li><button onClick={() => scrollToSection('speakers')} className="hover:text-white transition-colors">{t.nav.speakers}</button></li>
                <li><button onClick={() => scrollToSection('village')} className="hover:text-white transition-colors">{t.nav.village}</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">{t.nav.gallery}</button></li>
                <li><button onClick={() => scrollToSection('practical')} className="hover:text-white transition-colors">{t.nav.practical}</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
            © 2026 Biashara Afrika. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
            DESIGNED BY <span className="text-brand-gold">IBDA' STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
