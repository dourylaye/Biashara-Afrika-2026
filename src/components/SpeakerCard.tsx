import React from 'react';
import { motion } from 'framer-motion';
import { Speaker } from '../../types';

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative w-[200px] sm:w-[240px] md:w-[280px] shrink-0"
    >
      <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-xl border border-black/5 bg-slate-100">
        <img 
          src={speaker.image} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
          alt={speaker.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Decorative Border Glow */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-500 rounded-[2rem]" />

        <div className="absolute bottom-0 left-0 p-6 w-full translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          <motion.div 
            initial={{ opacity: 0.8 }}
            className="text-[8px] font-black text-brand-gold uppercase tracking-[0.2em] mb-2 px-3 py-1 bg-black/40 backdrop-blur-md inline-block rounded-full border border-white/10"
          >
            {speaker.category}
          </motion.div>
          <h3 className="text-lg md:text-xl font-display font-bold text-white mb-1 leading-tight tracking-tight">
            {speaker.name}
          </h3>
          <p className="text-white/80 text-[10px] font-medium italic mb-2 flex items-center gap-2">
            <span className="w-3 h-[1px] bg-brand-red"></span>
            {speaker.role}
          </p>
          <div className="h-px w-8 bg-brand-gold/50 mb-2 group-hover:w-12 transition-all duration-500" />
          <p className="text-brand-gold font-black text-[9px] uppercase tracking-wider flex items-center gap-2 leading-tight">
             {speaker.institution}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
