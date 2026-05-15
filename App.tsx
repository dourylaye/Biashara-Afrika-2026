/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Menu, 
  X, 
  Calendar, 
  MapPin, 
  Users, 
  Target, 
  ChevronRight,
  ChevronLeft,
  Download, 
  ArrowRight,
  TrendingUp,
  Building2,
  Award,
  CheckCircle2,
  Thermometer,
  Clock,
  Languages,
  Phone,
  Utensils,
  Car,
  Hotel,
  Banknote,
  Wifi,
  Smartphone,
  Plane,
  Navigation as NavigationIcon,
  Zap,
  FileText,
  LifeBuoy,
  Info,
  Ship,
  Globe2,
  Newspaper,
  Image as ImageIcon,
  Maximize2,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
  Briefcase,
  Store
} from 'lucide-react';
import { translations, PROGRAM_DATA, SPEAKERS_DATA } from './constants';
import { Counter } from './src/components/Counter';
import { SpeakerCard } from './src/components/SpeakerCard';
import { Navigation } from './src/components/Navigation';
import { Footer } from './src/components/Footer';
import { FloatingActions } from './src/components/FloatingActions';
import qrCodeImage from './Images/QR code.jpg';
import heroImage from './Images/FOND2.png';
import FOND_IMG from './Images/FOND1.png';
import Logo from './Images/Logo.png';
import APROPOS from './Images/APROPOS.jpg';
import Patenaire1 from './Images/Patenaire _1.png';
import Patenaire2 from './Images/Patenaire _2.png';
import Patenaire3 from './Images/Patenaire _3.png';
import Patenaire4 from './Images/Patenaire _4.png';
import Patenaire5 from './Images/Patenaire _5.png';
import Patenaire6 from './Images/Patenaire _6.png';
import Patenaire7 from './Images/Patenaire _7.png';
import Patenaire8 from './Images/Patenaire _8.png';
import Patenaire9 from './Images/Patenaire _9.png';
import Patenaire10 from './Images/Patenaire _10.png';
import Patenaire12 from './Images/Patenaire _12.png';
import Patenaire13 from './Images/Patenaire _13.png';
import Patenaire14 from './Images/Patenaire _14.png';
import Patenaire15 from './Images/Patenaire _15.png';
import Patenaire16 from './Images/Patenaire _16.png';
import Patenaire17 from './Images/Patenaire _17.png';
import Patenaire18 from './Images/Patenaire _18.png';
import Patenaire19 from './Images/Patenaire _19.png';
import Patenaire20 from './Images/Patenaire _20.png';
import FAURE_IMG from './Images/FAURE.jpg';
import WAMKELE_IMG from './Images/Wamkele.jpg';
import SIDI_IMG from './Images/Sidi.jpg';
import ELOMBI_IMG from './Images/Elombi.jpg';
import TAREK_IMG from './Images/Tarek.jpg';
import LABONNE_IMG from './Images/Labonne.jpg';
import MAHAMADOU_IMG from './Images/Mahamadou_.jpg';
import PAMELA_IMG from './Images/Pamela Coke.jpg';
import FRAIZEE_IMG from './Images/Prof Fraizee.jpg';
import LERATO_IMG from './Images/Lerato.jpg';
import HANNANE_IMG from './Images/Hannane.jpg';
import JOY_IMG from './Images/Dr Joy.jpg';
import KANAYO_IMG from './Images/Kanayo.jpg';
import YONI_IMG from './Images/Yomi.jpg';
import STEPHEN_IMG from './Images/Stephen.jpg';
import NSHUTI_IMG from './Images/Nshuti.jpg';
import YAO_IMG from './Images/Dr Yao.jpg';
import ROB_IMG from './Images/Dr Rob.jpg';
import EKRA_IMG from './Images/Jean Louis.jpg';
import JEREMY_IMG from './Images/Jeremy.jpg';
import MAKINDE_IMG from './Images/Oluwaseyi.jpg';
import GATETE_IMG from './Images/Claver Gatete.jpg';
import FLORIZELLE_IMG from './Images/Florizelle liser.jpg';
import TG1 from './Images/TG1.png';
import TG2 from './Images/TG2.png';
import TG3 from './Images/TG3.jpg';
import TG4 from './Images/TG4.png';
import TG5 from './Images/TG5.png';
import TG6 from './Images/TG6.png';
import Exploration from './Images/Exploration.png';
import CP1 from './Photos/CP1.jpg';
import CP2 from './Photos/CP2.jpg';
import S1 from './Photos/S1.jpeg';
import S2 from './Photos/S2.jpeg';
import S3 from './Photos/S3.jpeg';
import R1 from './Photos/R1.jpeg';
import R2 from './Photos/R2.jpeg';
import R3 from './Photos/R3.jpeg';
import R4 from './Photos/R4.jpeg';
import R5 from './Photos/R5.jpeg';
import R6 from './Photos/R6.jpeg';
import R7 from './Photos/R7.jpeg';
import R8 from './Photos/R8.jpeg';
import R9 from './Photos/R9.jpeg';
import R10 from './Photos/R10.jpeg';
import R11 from './Photos/R11.jpeg';
import R12 from './Photos/R12.jpeg';
import R13 from './Photos/R13.jpeg';
import R14 from './Photos/R14.jpeg';
import R15 from './Photos/R15.jpeg';
import VIS1 from './Visuels/VIS1.jpg';
import VIS2 from './Visuels/VIS2.jpg';
import VIS3 from './Visuels/VIS3.jpeg';
import VIS4 from './Visuels/VIS4.jpeg';
import VIS6 from './Visuels/VIS6.jpeg';
import V7 from './Visuels/V7.jpeg';
import V8 from './Visuels/V8.jpeg';
import V9 from './Visuels/V9.jpeg';
import V10 from './Visuels/V10.jpeg';
import V11 from './Visuels/V11.jpeg';
import V12 from './Visuels/V12.jpeg';
import V13 from './Visuels/V13.jpeg';
import { Language, Speaker, Exhibitor } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [currentBg, setCurrentBg] = useState(0);
  const heroBackgrounds = [FOND_IMG, heroImage];

  // Performance optimization: Preload hero images
  useEffect(() => {
    heroBackgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 8000); // Slightly longer interval for a more relaxed feel
    return () => clearInterval(timer);
  }, [heroBackgrounds.length]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPracticalModalOpen, setIsPracticalModalOpen] = useState(false);
  const [currentCityPhoto, setCurrentCityPhoto] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [galleryTab, setGalleryTab] = useState<'news' | 'events'>('events');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const speakersRef = useRef<HTMLDivElement>(null);
  const [isSpeakersHovered, setIsSpeakersHovered] = useState(false);

  const GALLERY_POSTS = [
    {
      id: 1,
      image: VIS3,
      text: lang === 'fr' 
        ? "À l'approche de Biashara Afrika 2026, la capitale togolaise multiplie les initiatives pour accueillir les investisseurs."
        : "As Biashara Afrika 2026 approaches, the Togolese capital is multiplying initiatives to welcome investors.",
      date: "05 Mai 2025"
    },
    {
      id: 4,
      image: VIS6,
      text: lang === 'fr' ? "Intelligence économique et transformation digitale." : "Economic intelligence and digital transformation.",
      date: "12 Mai 2025"
    },
    {
      id: 5,
      image: VIS4,
      text: lang === 'fr' 
        ? "Expansion des zones franches industrielles : Un moteur pour le commerce continental."
        : "Expansion of industrial free zones: A driver for continental trade.",
      date: "15 Mai 2025"
    },
    {
      id: 2,
      image: VIS1,
      text: lang === 'fr' 
        ? "Biashara Afrika 2026 : Mobilisation des acteurs économiques pour une intégration régionale forte."
        : "Biashara Afrika 2026: Mobilizing economic actors for strong regional integration.",
      date: "02 Mai 2025"
    },
    {
      id: 3,
      image: VIS2,
      text: lang === 'fr' 
        ? "Focus sur les opportunités d'investissement et le développement des infrastructures en Afrique."
        : "Focus on investment opportunities and infrastructure development in Africa.",
      date: "28 Avril 2025"
    },
    { id: 7, image: V7, text: "", date: "16 Mai 2025" },
    { id: 8, image: V8, text: "", date: "16 Mai 2025" },
    { id: 9, image: V9, text: "", date: "17 Mai 2025" },
    { id: 10, image: V10, text: "", date: "17 Mai 2025" },
    { id: 11, image: V11, text: "", date: "18 Mai 2025" },
    { id: 12, image: V12, text: "", date: "18 Mai 2025" },
    { id: 13, image: V13, text: "", date: "19 Mai 2025" }
  ];

  const EVENT_GALLERIES = [
    {
      id: 'organizing-comittee',
      title: lang === 'fr' ? "Rencontre des comités d’organisation" : "Organizing Committees Meeting",
      photos: [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15]
    },
    {
      id: 'press-conference',
      title: lang === 'fr' ? "Conférence de presse de lancement" : "Launch Press Conference",
      photos: [CP1, CP2]
    },
    {
      id: 'grand-lome',
      title: lang === 'fr' ? "Sensibilisation des opérateurs économiques du Grand Lomé" : "Awareness for Greater Lomé Economic Operators",
      photos: [S1, S2, S3]
    }
  ];

  const LOME_CITY_PHOTOS = [TG1, TG2, TG3, TG4, TG5, TG6];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCityPhoto((prev) => (prev + 1) % LOME_CITY_PHOTOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [LOME_CITY_PHOTOS.length]);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll for speakers carousel
  useEffect(() => {
    const scrollContainer = speakersRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.6; // Moderate, elegant pace

    const scroll = () => {
      if (!isSpeakersHovered) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to start when half is reached for infinite effect
        // (Items are doubled in the render: [...enrichedSpeakers, ...enrichedSpeakers])
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isSpeakersHovered]);

  const SPEAKER_IMAGES: Record<string, string> = {
    faure: FAURE_IMG,
    issoufou: MAHAMADOU_IMG,
    wamkele: WAMKELE_IMG,
    pamela: PAMELA_IMG,
    elombi: ELOMBI_IMG,
    fraizee: FRAIZEE_IMG,
    lerato: LERATO_IMG,
    hannane: HANNANE_IMG,
    joy: JOY_IMG,
    kanayo: KANAYO_IMG,
    tarek: TAREK_IMG,
    yoni: YONI_IMG,
    stephen: STEPHEN_IMG,
    nshuti: NSHUTI_IMG,
    yao: YAO_IMG,
    rob: ROB_IMG,
    ekra: EKRA_IMG,
    jeremy: JEREMY_IMG,
    makinde: MAKINDE_IMG,
    gatete: GATETE_IMG,
    florizelle: FLORIZELLE_IMG,
    sidi: SIDI_IMG,
    labonne: LABONNE_IMG
  };

  const enrichedSpeakers = SPEAKERS_DATA.map(speaker => ({
    ...speaker,
    image: (speaker.id && SPEAKER_IMAGES[speaker.id]) || ''
  })) as Speaker[];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLang = () => setLang(prev => prev === 'fr' ? 'en' : 'fr');

  return (
    <div className="relative min-h-screen bg-brand-light overflow-hidden">
      {/* Global Decorative Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-green/5 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-brand-gold/5 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-[10%] left-[20%] w-[30vw] h-[30vw] bg-brand-red/5 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
      
      {/* Navigation */}
      <Navigation 
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        lang={lang}
        toggleLang={toggleLang}
        scrollToSection={scrollToSection}
        translations={translations}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-light">
        <div className="absolute inset-0 bg-brand-light">
          <AnimatePresence initial={false}>
            <motion.img 
              key={currentBg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 2, 
                ease: "linear" // Linear opacity fade is often smoother for high-res backgrounds
              }}
              src={heroBackgrounds[currentBg]} 
              className="absolute inset-0 w-full h-full object-cover object-center"
              alt="Biashara Afrika Hero Background"
              loading="eager"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 via-brand-light to-brand-gold/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-light/80 via-transparent to-brand-light/90" />
          
          {/* Subtle dark overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          
          {/* Cinematic Atmospheric Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Soft Light Rays */}
            <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-slow-spin-zoom" />
            
            {/* Floating Dust Particles */}
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
            
            {/* Dynamic Light Beams */}
            <motion.div 
              animate={{ 
                x: [-500, 500],
                opacity: [0, 0.1, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-px h-full bg-white blur-[80px]"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="inline-flex flex-col items-center gap-4 mb-14"
            >
              <div className="px-10 py-3.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-black text-[11px] uppercase tracking-[0.5em] inline-flex items-center gap-4 backdrop-blur-md shadow-2xl group transition-all hover:bg-brand-green hover:text-white cursor-default">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse group-hover:bg-white" />
                <Calendar className="w-4 h-4" />
                {t.hero.date}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(40px)" }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                brightness: 1,
                transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
              }}
              className="relative mb-12"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    scale: [1, 1.04, 1],
                    rotate: [-0.5, 0.5, -0.5]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative group"
                >
                  <img 
                    src={Logo} 
                    alt="Biashara Afrika Logo" 
                    className="h-44 md:h-72 mx-auto object-contain brightness-110 drop-shadow-[0_45px_45px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:brightness-125" 
                  />
                  
                  {/* Subtle Cinematic Shimmer Overlay */}
                  <motion.div 
                    animate={{ 
                      x: ["-100%", "200%"],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatDelay: 4,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none mix-blend-overlay"
                  />
                </motion.div>
              </div>
              
              {/* Layered Floating Glows behind logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full">
                {/* Core White/Warm Glow */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/30 blur-[100px] rounded-full" 
                />
                
                {/* Brand Red Glow - Pulses occasionally */}
                <motion.div 
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0, 0.2, 0],
                    x: [-20, 20, -20]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute inset-0 bg-brand-red/15 blur-[120px] rounded-full" 
                />

                {/* Brand Gold Glow - Offset pulses */}
                <motion.div 
                  animate={{ 
                    scale: [1.2, 0.9, 1.2],
                    opacity: [0, 0.15, 0],
                    y: [-30, 30, -30]
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute inset-0 bg-brand-gold/15 blur-[140px] rounded-full" 
                />
              </div>
            </motion.div>





            <div className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                href="https://events.au-afcfta.org/fr/register-event/bb1e3a23-aeb8-4edb-8705-18b75af9c315"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 bg-brand-green text-white font-black rounded-sm shadow-[0_20px_50px_rgba(3,107,33,0.2)] hover:shadow-[0_25px_60px_rgba(3,107,33,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[10px]"
              >
                {t.hero.ctaRegister}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                href="#program"
                className="w-full sm:w-auto px-12 py-6 border-2 border-brand-green/30 text-brand-green font-black rounded-sm hover:bg-brand-green hover:text-white transition-all uppercase tracking-widest text-[10px] shadow-xl flex items-center justify-center gap-3 backdrop-blur-sm"
              >
                {t.hero.ctaProgram}
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Extra Premium Decorative Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-20">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute top-[10%] right-[10%] w-[500px] h-[500px] border border-brand-gold/5 rounded-full"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] border border-brand-red/5 rounded-full"
               />
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-black/60 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-gold" />
                {t.hero.location}
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-white/50 relative overflow-hidden backdrop-blur-sm scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none transform translate-x-1/4">
          <svg viewBox="0 0 100 100" className="w-full h-full text-brand-green">
             <circle cx="100" cy="50" r="50" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-bold text-xs uppercase tracking-[0.4em] mb-6 px-5 py-2 bg-brand-red/5 text-brand-red rounded-full border border-brand-red/10 inline-block">The Platform</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight">
                {t.about.title}
              </h2>
              <p className="text-lg text-black/70 leading-relaxed mb-10 italic border-l-4 border-brand-green pl-6">
                {t.about.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Users />, text: t.about.stats.participants, label: "Scale" },
                  { icon: <Target />, text: t.about.stats.countries, label: "Impact" },
                  { icon: <TrendingUp />, text: t.about.stats.speakers, label: "Vision" },
                  { icon: <Building2 />, text: t.about.stats.exhibitors, label: "Execution" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-xl hover:border-brand-gold/20 transition-all duration-300 group"
                  >
                    <div className="text-brand-green mb-3 group-hover:text-brand-red group-hover:scale-110 transition-all duration-300">{stat.icon}</div>
                    <div className="font-display font-bold text-lg text-black">{stat.text}</div>
                    <div className="text-xs text-black/40 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               whileHover={{ y: -10 }}
               className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <motion.img 
                  src={APROPOS} 
                  className="w-full h-full object-cover" 
                  alt="Africa Trade" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay" />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl opacity-50" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section id="program" className="section-padding bg-brand-light/50 backdrop-blur-sm relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-light/0 to-white/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-bold text-sm uppercase tracking-[0.3em] block mb-6 px-6 py-2 bg-brand-red/5 text-brand-red rounded-full border border-brand-red/10 w-fit mx-auto"
            >
              Agenda 2026
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-bold mb-10 text-black tracking-tight">{t.program.title}</h2>
            <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-4" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16 p-2 bg-white/50 backdrop-blur-sm rounded-full max-w-fit mx-auto border border-black/5">
            {PROGRAM_DATA[lang].map((day, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                  activeTab === i 
                    ? 'bg-brand-red text-white shadow-xl scale-105' 
                    : 'text-black/40 hover:text-black hover:bg-white'
                }`}
              >
                {day.day.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 hidden md:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-12"
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-display font-bold text-brand-green mb-2">{PROGRAM_DATA[lang][activeTab].title}</h3>
                  <p className="text-black/50 font-light italic">{PROGRAM_DATA[lang][activeTab].subtitle}</p>
                </div>

                {PROGRAM_DATA[lang][activeTab].items.map((item: any, j: number) => (
                  <motion.div 
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 items-center ${j % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Time Marker */}
                    <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-brand-red rounded-full z-20 hidden md:block shadow-sm" />

                    <div className={`w-full md:w-1/2 ${j % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                       <div className="inline-block px-4 py-1 rounded bg-brand-green text-white font-bold text-[10px] tracking-tighter mb-4 shadow-sm">
                        {item.time}
                      </div>
                      <h4 className="text-xl font-bold text-black mb-3 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                      {item.description && (
                        <p className={`text-sm text-black/60 leading-relaxed font-light ${j % 2 === 0 ? '' : 'md:ml-auto max-w-sm'}`}>
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>

      {/* SPEAKERS SECTION */}
      <section id="speakers" className="section-padding bg-[#FCFBFA] relative overflow-hidden scroll-mt-20">
        {/* Premium Immersive Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Multi-layered Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-red/[0.03] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-gold/[0.04] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          
          {/* Abstract Architectural Fluid Lines */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.04]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,1000 C300,800 400,200 1000,0" stroke="#B73120" fill="transparent" strokeWidth="0.5" />
            <path d="M0,800 C400,600 600,400 1000,200" stroke="#D4AF37" fill="transparent" strokeWidth="0.5" />
            <path d="M200,1000 C500,700 700,300 1000,100" stroke="#036B21" fill="transparent" strokeWidth="0.3" />
          </svg>

          {/* Subtle African Geometric Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.015]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0ZM20 10L30 20L20 30L10 20L20 10Z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }} 
          />

          {/* Decorative Floating Orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-brand-red/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="font-bold text-xs uppercase tracking-[0.4em] mb-6 px-5 py-2 bg-brand-red/5 text-brand-red rounded-full border border-brand-red/10 inline-block">
                Leaders Mondiaux
              </span>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-black mb-8 leading-tight tracking-tight">
                {t.speakers.title}
              </h2>
              <div className="h-1.5 w-24 bg-brand-green rounded-full" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 max-w-xl"
            >
              <p className="text-black/70 text-lg md:text-xl font-light leading-relaxed border-l-2 border-brand-red/10 pl-8">
                Des leaders d'opinion et décideurs engagés pour la transformation structurelle de l'économie africaine.
              </p>
            </motion.div>
          </div>

          <div className="relative group">
            <motion.div 
              ref={speakersRef}
              onMouseEnter={() => setIsSpeakersHovered(true)}
              onMouseLeave={() => setIsSpeakersHovered(false)}
              onTouchStart={() => setIsSpeakersHovered(true)}
              onTouchEnd={() => setIsSpeakersHovered(false)}
              className="flex gap-10 overflow-x-auto pb-16 no-scrollbar px-4 cursor-grab active:cursor-grabbing"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              {[...enrichedSpeakers, ...enrichedSpeakers].map((speaker, i) => (
                <SpeakerCard key={i} speaker={speaker} index={i} />
              ))}
            </motion.div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              <motion.div 
                animate={{ width: [32, 48, 32] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-1.5 bg-brand-red rounded-full shadow-lg shadow-brand-red/20" 
              />
              <div className="w-1.5 h-1.5 bg-black/10 rounded-full" />
              <div className="w-1.5 h-1.5 bg-black/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY LOME SECTION - CENTRIC MASTERPIECE DESIGN */}
      <section id="why-lome" className="section-padding bg-gradient-to-b from-[#FFFBF7] via-white to-[#FFF9F5] relative overflow-hidden scroll-mt-20">
        {/* Background Atmospheric Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-brand-gold/5 blur-[180px] rounded-full opacity-40" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 blur-[120px] rounded-full opacity-30" />
          
          <svg className="absolute top-0 left-0 w-full h-full text-brand-gold/[0.03]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,0 Q500,200 1000,0 L1000,1000 Q500,800 0,1000 Z" fill="currentColor" />
          </svg>

          {/* Large Organic Moving Shape */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 -right-20 w-[800px] h-[800px] bg-brand-gold/5 blur-[150px] rounded-full" 
          />
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.15] mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* 1. TOP HEADER - CENTERED */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-brand-red" />
              <span className="font-bold text-xs uppercase tracking-[0.6em] text-brand-red">
                Destination Togo
              </span>
              <div className="w-8 h-px bg-brand-red" />
            </div>
            
            <h2 className="text-5xl md:text-8xl font-bold mb-8 text-black leading-tight tracking-tighter">
              {t.whyLome.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed max-w-2xl mx-auto">
              Une métropole dynamique, carrefour stratégique du commerce africain et hub d'excellence pour vos échanges internationaux.
            </p>
          </motion.div>

          {/* 2. THE MASTERPIECE CENTER - SLIDER WITH FLOATING CARDS */}
          <div className="relative">
            
            {/* GRID CONTAINER FOR DESKTOP POSITIONING */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* LEFT FLOATING CARDS (Desktop) */}
              <div className="lg:col-span-3 order-2 lg:order-1 space-y-8 lg:space-y-12">
                {[t.whyLome.stats[0], t.whyLome.stats[1]].map((stat: any, i: number) => (
                  <motion.div 
                    key={stat.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="p-8 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-red mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                      {(() => {
                        switch (stat.id) {
                          case "port": return <Ship className="w-7 h-7" />;
                          case "hub": return <Globe2 className="w-7 h-7" />;
                          case "connectivity": return <Plane className="w-7 h-7" />;
                          case "ecosystem": return <TrendingUp className="w-7 h-7" />;
                          default: return <Info className="w-7 h-7" />;
                        }
                      })()}
                    </div>
                    <h4 className="font-bold text-black text-xl mb-3 leading-tight">{stat.title}</h4>
                    <p className="text-sm text-black/50 font-medium leading-relaxed">{stat.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CENTER SLIDER PIECE */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-[6rem] overflow-hidden shadow-[0_100px_120px_-40px_rgba(0,0,0,0.35)] aspect-[3/5.2] w-full max-w-[500px] bg-brand-light group border-[18px] border-white ring-1 ring-black/5"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCityPhoto}
                      initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={LOME_CITY_PHOTOS[currentCityPhoto]}
                        className="w-full h-full object-cover"
                        alt="Lomé Masterpiece"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Atmospheric Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                      <div className="absolute inset-0 bg-brand-red/10 mix-blend-soft-light" />
                    </motion.div>
                  </AnimatePresence>
   
                  {/* Premium Indicators */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
                    {LOME_CITY_PHOTOS.map((_: any, i: number) => (
                      <div key={i} className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
                        <motion.div 
                          className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)]"
                          initial={{ width: "0%" }}
                          animate={{ width: i === currentCityPhoto ? "100%" : i < currentCityPhoto ? "100%" : "0%" }}
                          transition={{ 
                            duration: i === currentCityPhoto ? 5 : 0.5, 
                            ease: "linear" 
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Floating Content Badge */}
                  <div className="absolute top-12 left-12 right-12 flex justify-between items-start z-20">
                     <div className="px-6 py-3 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.4em] shadow-xl">
                       Lomé Vision
                     </div>
                     <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center text-white/40"
                     >
                       <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                     </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT FLOATING CARDS (Desktop) */}
              <div className="lg:col-span-3 order-3 lg:order-3 space-y-8 lg:space-y-12">
                {[t.whyLome.stats[2], t.whyLome.stats[3]].map((stat: any, i: number) => (
                  <motion.div 
                    key={stat.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    whileHover={{ x: -10, scale: 1.05 }}
                    className="p-8 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-red mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                      {(() => {
                        switch (stat.id) {
                          case "port": return <Ship className="w-7 h-7" />;
                          case "hub": return <Globe2 className="w-7 h-7" />;
                          case "connectivity": return <Plane className="w-7 h-7" />;
                          case "ecosystem": return <TrendingUp className="w-7 h-7" />;
                          default: return <Info className="w-7 h-7" />;
                        }
                      })()}
                    </div>
                    <h4 className="font-bold text-black text-xl mb-3 leading-tight">{stat.title}</h4>
                    <p className="text-sm text-black/50 font-medium leading-relaxed">{stat.description}</p>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Decorative Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] pointer-events-none opacity-[0.03] z-[-1] hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 1000 1000">
                <circle cx="500" cy="500" r="450" fill="none" stroke="#B10E23" strokeWidth="0.5" strokeDasharray="10 10" />
                <circle cx="500" cy="500" r="550" fill="none" stroke="#B10E23" strokeWidth="0.5" strokeDasharray="20 20" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS VILLAGE SECTION */}
      <section id="village" className="section-padding bg-brand-green text-white overflow-hidden relative scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="font-bold text-xs uppercase tracking-[0.4em] mb-6 px-5 py-2 bg-white/10 text-white rounded-full border border-white/20 inline-block">
              Village Expo
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              {lang === 'fr' ? "Chiffres clés du Village" : "Key Village Figures"}
            </h2>
            <div className="w-20 h-1.5 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-4">
            {[
              { id: 1, value: 242, label: lang === 'fr' ? "Stands" : "Booths", icon: <Store className="w-8 h-8" />, color: "bg-brand-red" },
              { id: 2, value: 20, label: lang === 'fr' ? "Pays" : "Countries", icon: <Globe2 className="w-8 h-8" />, color: "bg-brand-gold" },
              { id: 3, value: 10, label: lang === 'fr' ? "Secteurs d’activité" : "Sectors of activity", icon: <Briefcase className="w-8 h-8" />, color: "bg-white/10" }
            ].map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 flex flex-col items-center text-center shadow-2xl overflow-hidden"
              >
                {/* Decorative background shape */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors" />
                
                <div className={`w-20 h-20 ${stat.color} rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white group-hover:rotate-12 transition-transform">
                    {stat.icon}
                  </div>
                </div>

                <div className="text-6xl md:text-7xl font-black mb-4 tracking-tighter flex items-center justify-center gap-1">
                  <Counter value={stat.value} />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/60 mb-6">
                  {stat.label}
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION SECTION */}
      <section id="register" className="section-padding relative scroll-mt-20">
        <div className="absolute inset-0 bg-brand-green overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/50 rounded-full" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="w-20 h-1 bg-white mb-8" />
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                {t.registration.title}
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                {t.registration.text}
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  lang === 'fr' ? 'Accès illimité aux plénières' : 'Unlimited plenary access',
                  lang === 'fr' ? 'Networking premium' : 'Premium networking',
                  lang === 'fr' ? 'Invitation au cocktail de bienvenue' : 'Welcome cocktail invitation'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shadow-sm">
                       <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://events.au-afcfta.org/fr/register-event/bb1e3a23-aeb8-4edb-8705-18b75af9c315"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-12 py-5 bg-brand-red text-white font-black rounded-full shadow-2xl hover:bg-brand-red/90 transition-all uppercase tracking-[0.2em] text-xs hover:-translate-y-1"
              >
                Inscrivez-vous maintenant
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-12 rounded-[2rem] shadow-2xl text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-red text-white font-black px-8 py-2 rounded-full text-xs uppercase tracking-widest shadow-lg">
                  Official Registration
                </div>
                
                <div className="mb-8 pt-4">
                  <a 
                    href="https://events.au-afcfta.org/fr/register-event/bb1e3a23-aeb8-4edb-8705-18b75af9c315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-4 bg-white rounded-3xl border-2 border-brand-green shadow-inner overflow-hidden hover:scale-105 transition-transform"
                  >
                    <img 
                      src={qrCodeImage} 
                      alt="Registration QR Code" 
                      className="w-48 h-48 object-contain"
                    />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-2">{t.registration.scan}</h3>
                <p className="text-black/50 text-sm mb-8 italic">Veuillez utiliser votre smartphone pour scanner</p>
                
                <div className="flex items-center justify-center gap-4 py-4 border-t border-black/5">
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Venue</p>
                    <p className="text-xs font-bold text-black">Palais des Congrès</p>
                  </div>
                  <div className="w-px h-8 bg-black/10" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Date</p>
                    <p className="text-xs font-bold text-black">18 - 20 Mai 2026</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-brand-gold/30 rounded-[2.5rem] -z-10 animate-pulse" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION - PREMIUM INFINITE CAROUSEL */}
      <section className="section-padding bg-slate-50 border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-black text-xs uppercase tracking-[0.4em] block mb-4">
              Biashara Lomé 2026
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6 tracking-tight">{t.partners.title}</h2>
            <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-8" />
            <p className="text-black/50 max-w-2xl mx-auto italic font-medium text-lg leading-relaxed">
              "{t.partners.text}"
            </p>
          </motion.div>
        </div>

        <div className="relative w-full space-y-12 py-16 bg-white/20 backdrop-blur-xl border-y border-black/5 overflow-hidden group">
          {/* Subtle architectural background pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          {/* Row 1: Fast Left */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-12 md:gap-24 items-center whitespace-nowrap pl-12 md:pl-24"
              animate={{ x: [0, "-50%"] }}
              transition={{ 
                duration: 45, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              {[...new Array(2)].flatMap(() => [
                Patenaire1, Patenaire2, Patenaire3, Patenaire4, Patenaire5, 
                Patenaire6, Patenaire7, Patenaire8, Patenaire9, Patenaire10,
                Patenaire12, Patenaire13, Patenaire14, Patenaire15, Patenaire16,
                Patenaire17, Patenaire18, Patenaire19, Patenaire20
              ]).map((logo, index) => (
                <motion.div
                  key={`r1-${index}`}
                  whileHover={{ 
                    scale: 1.25, 
                    rotate: -3,
                    zIndex: 20
                  }}
                  className="relative flex-shrink-0 w-32 md:w-56 h-24 md:h-36 flex items-center justify-center p-6 bg-white/60 rounded-3xl border border-white/40 shadow-sm hover:shadow-2xl hover:border-brand-gold/30 backdrop-blur-sm transition-all duration-500 cursor-pointer"
                >
                  <img src={logo} className="max-w-full max-h-full object-contain pointer-events-none filter brightness-90 hover:brightness-110 transition-all" alt="Partner" />
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Medium Right (Offset) */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-12 md:gap-24 items-center whitespace-nowrap pr-12 md:pl-24"
              animate={{ x: ["-50%", 0] }}
              transition={{ 
                duration: 55, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              {[...new Array(2)].flatMap(() => [
                Patenaire20, Patenaire19, Patenaire18, Patenaire17, Patenaire16,
                Patenaire15, Patenaire14, Patenaire13, Patenaire12, Patenaire10,
                Patenaire9, Patenaire8, Patenaire7, Patenaire6, Patenaire5,
                Patenaire4, Patenaire3, Patenaire2, Patenaire1
              ]).map((logo, index) => (
                <motion.div
                  key={`r2-${index}`}
                  whileHover={{ 
                    scale: 1.25, 
                    rotate: 3,
                    zIndex: 20
                  }}
                  className="relative flex-shrink-0 w-32 md:w-56 h-24 md:h-36 flex items-center justify-center p-6 bg-white/60 rounded-3xl border border-white/40 shadow-sm hover:shadow-2xl hover:border-brand-red/30 backdrop-blur-sm transition-all duration-500 cursor-pointer"
                >
                  <img src={logo} className="max-w-full max-h-full object-contain pointer-events-none filter brightness-90 hover:brightness-110 transition-all" alt="Partner" />
                  <div className="absolute inset-0 bg-brand-red/5 opacity-0 hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Depth Masking */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="section-padding bg-[#FAFAFA] relative overflow-hidden scroll-mt-20">
        {/* Premium Immersive Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Layered Gradients */}
          <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-brand-gold/[0.04] via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-red/[0.03] via-transparent to-transparent" />
          
          {/* Floating Glassmorphic Orbs - Strategic Placement */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-green/[0.03] blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-brand-gold/[0.04] blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 right-0 w-48 h-[600px] bg-brand-red/[0.02] blur-[80px] rounded-[100px] rotate-45" />

          {/* Elegant Flowing Curves (Architectural) */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 600 C 100 400, 400 300, 1300 600" stroke="#B73120" strokeWidth="0.5" />
            <path d="M-100 650 C 200 450, 500 350, 1300 650" stroke="#D4AF37" strokeWidth="0.5" />
            <path d="M-100 550 C 300 350, 600 250, 1300 550" stroke="#036B21" strokeWidth="0.5" />
          </svg>

          {/* Global Texture */}
          <div className="absolute inset-0 opacity-[0.015] grayscale" style={{ backgroundImage: 'radial-gradient(circle, #000 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                <span className="font-bold text-xs uppercase tracking-[0.4em] px-5 py-2 bg-brand-red/5 text-brand-red rounded-full border border-brand-red/10 inline-block">
                  L'Expérience Biashara 2026
                </span>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-bold text-black mb-10 tracking-tight">
                {t.gallery.title}
              </h2>
              
              <div className="flex items-center justify-center gap-4 mb-16">
                <div className="h-1.5 w-32 bg-brand-green rounded-full" />
              </div>
            </motion.div>
            
            <div className="flex justify-center p-1.5 bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] backdrop-blur-md rounded-2xl w-fit mx-auto border border-black/5">
              <button
                onClick={() => setGalleryTab('events')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  galleryTab === 'events' 
                    ? 'bg-brand-red text-white shadow-xl' 
                    : 'text-black/40 hover:text-black'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                {t.gallery.eventsTab}
              </button>
              <button
                onClick={() => setGalleryTab('news')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  galleryTab === 'news' 
                    ? 'bg-brand-green text-white shadow-xl' 
                    : 'text-black/40 hover:text-black'
                }`}
              >
                <Newspaper className="w-4 h-4" />
                {t.gallery.newsTab}
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {galleryTab === 'news' ? (
              <motion.div
                key="news"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12"
              >
                {/* Visual Composition: One Main + Two Secondary */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Main Featured Visual */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="md:col-span-8 group relative aspect-video md:aspect-auto md:h-[650px] rounded-[3.5rem] overflow-hidden shadow-2xl bg-black cursor-pointer"
                    onClick={() => setSelectedImage(GALLERY_POSTS[0].image)}
                  >
                    <img src={GALLERY_POSTS[0].image} className="w-full h-full object-cover opacity-100 transition-all duration-1000 group-hover:scale-105" alt="Featured" />
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
                      <span className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest">
                        Afficher <Maximize2 className="w-4 h-4 text-brand-gold" />
                      </span>
                    </div>
                  </motion.div>

                  {/* Secondary Visuals Stack */}
                  <div className="md:col-span-4 flex flex-col gap-8">
                    {[GALLERY_POSTS[1], GALLERY_POSTS[2]].map((post, i) => (
                      <motion.div 
                        key={post.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * (i + 1) }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="flex-1 group relative rounded-[2.5rem] overflow-hidden shadow-xl bg-slate-900 cursor-pointer"
                        onClick={() => setSelectedImage(post.image)}
                      >
                        <img src={post.image} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Secondary" />
                        <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                          <Maximize2 className="w-8 h-8 text-white transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Horizontal Auto-Scrolling Archive */}
                <div className="relative pt-12">
                  <div className="flex items-center justify-between mb-8 px-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/40">Archive Visuelle</h3>
                    <div className="h-[1px] flex-1 mx-8 bg-black/5" />
                  </div>
                  
                  <div className="overflow-hidden relative group">
                    <motion.div 
                      className="flex gap-6 w-max"
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{ 
                        duration: 40, 
                        repeat: Infinity, 
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >
                      {[...GALLERY_POSTS, ...GALLERY_POSTS].map((post, idx) => (
                        <motion.div 
                          key={`${post.id}-${idx}`}
                          whileHover={{ y: -10, scale: 1.02 }}
                          className="w-72 aspect-square rounded-[2rem] overflow-hidden shadow-md cursor-pointer relative bg-white border border-black/5"
                          onClick={() => setSelectedImage(post.image)}
                        >
                          <img src={post.image} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Post" />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-5 h-5 text-white" />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Gradient Masks for Carousel */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-24"
              >
                {EVENT_GALLERIES.map((category, idx) => (
                  <div key={category.id} className="space-y-8">
                    <div className="flex items-end justify-between px-4">
                      <h3 className="text-2xl font-bold text-black border-l-4 border-brand-green pl-6">{category.title}</h3>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-green" />
                        <div className="w-12 h-2 rounded-full bg-slate-200" />
                      </div>
                    </div>
                    
                    <div className="relative group/carousel overflow-hidden">
                      <motion.div 
                        className="flex gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ 
                          duration: category.photos.length * 12, 
                          repeat: Infinity, 
                          ease: "linear",
                          repeatType: "loop"
                        }}
                      >
                        {[...category.photos, ...category.photos].map((photo, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative w-[280px] md:w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl group/img bg-slate-100"
                            onClick={() => setSelectedImage(photo)}
                          >
                            <img 
                              src={photo} 
                              className="w-full h-full object-cover transition-all duration-1000 group-hover/img:scale-110" 
                              alt={`Event ${i}`} 
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl transform translate-y-8 group-hover/img:translate-y-0 transition-all duration-500">
                                <Maximize2 className="w-6 h-6 text-brand-green" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Carousel Hint Overlays */}
                      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} className="w-full h-full object-contain bg-black/50" alt="Full view" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRACTICAL INFO SECTION - COMPACT DESIGN */}
      <section id="practical" className="section-padding bg-brand-light relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-bold text-xs uppercase tracking-[0.4em] mb-6 px-5 py-2 bg-brand-red/5 text-brand-red rounded-full border border-brand-red/10 inline-block">Informations</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 text-black leading-tight tracking-tight">
                {t.practical.title}
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-green border border-black/5 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-1">{t.nav.program}</h4>
                    <p className="text-black/60 font-medium tracking-tight">18 - 20 Mai 2026</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-red border border-black/5 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-1">Thème</h4>
                    <p className="text-black/60 font-medium tracking-tight">
                      {lang === 'fr' ? "Accélérer la ZLECAf par l'innovation" : "Accelerating AfCFTA through innovation"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-gold border border-black/5 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-1">Organisateurs</h4>
                    <p className="text-black/60 font-medium tracking-tight">Gouvernement Togolais & Secrétariat de la ZLECAf</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsPracticalModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-brand-red transition-all group"
              >
                {t.practical.learnMore}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 p-6 bg-white rounded-2xl shadow-2xl z-20 border border-black/5 hidden md:block">
                <p className="text-[10px] font-black text-brand-red uppercase tracking-widest mb-2">{t.practical.exploreTogo}</p>
                <div className="flex -space-x-3">
                  {t.practical.placesToVisit.items.map((item: any, i: number) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-brand-light">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-white">
                <img 
                  src={Exploration} 
                  className="w-full h-full object-cover" 
                  alt="Togo" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-display font-bold text-2xl mb-4">{t.practical.exploreTogo}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.practical.placesToVisit.items.map((item: any, i: number) => (
                      <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold border border-white/20">
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRACTICAL DETAILS MODAL */}
      <AnimatePresence>
        {isPracticalModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md" 
              onClick={() => setIsPracticalModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] relative shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-12 border-b border-black/5 flex items-start justify-between bg-brand-light relative overflow-hidden">
                <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12">
                   <Globe className="w-64 h-64 text-brand-red" />
                </div>
                
                <div className="relative z-10">
                  <span className="text-brand-red font-black text-xs uppercase tracking-[0.4em] block mb-4">Guide Officiel</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">{t.practical.title}</h2>
                  <p className="text-black/60 max-w-xl font-medium">{t.practical.subtitle}</p>
                </div>
                
                <button 
                  onClick={() => setIsPracticalModalOpen(false)}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-sm border border-black/5 hover:bg-brand-red hover:text-white transition-all relative z-10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="overflow-y-auto flex-1 p-8 md:p-12 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.practical.details.map((detail: any) => (
                    <div
                      key={detail.id}
                      className="group p-6 bg-brand-light rounded-2xl border border-transparent hover:border-brand-red/10 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red">
                          {(() => {
                            switch (detail.id) {
                              case "destination": return <MapPin className="w-5 h-5" />;
                              case "temp": return <Thermometer className="w-5 h-5" />;
                              case "timezone": return <Clock className="w-5 h-5" />;
                              case "language": return <Languages className="w-5 h-5" />;
                              case "dial": return <Phone className="w-5 h-5" />;
                              case "meal": return <Utensils className="w-5 h-5" />;
                              case "taxi": return <Car className="w-5 h-5" />;
                              case "hotel": return <Hotel className="w-5 h-5" />;
                              case "currency": return <Banknote className="w-5 h-5" />;
                              case "internet": return <Wifi className="w-5 h-5" />;
                              case "mobile_money": return <Smartphone className="w-5 h-5" />;
                              case "airport": return <Plane className="w-5 h-5" />;
                              case "transpo": return <NavigationIcon className="w-5 h-5" />;
                              case "elec": return <Zap className="w-5 h-5" />;
                              case "formalities": return <FileText className="w-5 h-5" />;
                              case "emergency": return <LifeBuoy className="w-5 h-5" />;
                              default: return <Info className="w-5 h-5" />;
                            }
                          })()}
                        </div>
                        <h3 className="text-[15px] font-black text-brand-green leading-[23px] uppercase tracking-widest">{detail.label}</h3>
                      </div>
                      <p className="text-black font-bold leading-relaxed">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <Footer 
        lang={lang}
        translations={translations}
        Logo={Logo}
        scrollToSection={scrollToSection}
      />

      {/* Floating Actions */}
      <FloatingActions 
        lang={lang}
      />
    </div>
  );
};

export default App;
