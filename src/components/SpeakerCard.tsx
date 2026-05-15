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
        {/* 50% Enhanced Bottom Gradient for Text Legibility */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[50%] bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_40%,transparent_100%)] z-0" 
        />
        
        {/* Decorative Border Glow */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-500 rounded-[2rem]" />

        <div className="absolute bottom-0 left-0 p-8 w-full z-10">
          <h3 className="text-xl md:text-2xl font-display font-black text-white mb-1 leading-tight tracking-tight drop-shadow-md">
            {speaker.name}
          </h3>
          
          <p className="text-white/70 font-medium text-xs md:text-sm flex items-center gap-2 leading-snug">
            <span className="w-4 h-[1.5px] bg-brand-red shrink-0"></span>
            {speaker.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
