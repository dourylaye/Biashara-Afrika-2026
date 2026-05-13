import React from 'react';
import { motion } from 'framer-motion';

interface Translation {
  [key: string]: {
    [key: string]: string | any;
  };
}

export const translations: Translation = {
  fr: {
    nav: {
      about: "À Propos",
      program: "Programme",
      speakers: "Intervenants",
      village: "Village Business",
      register: "S'inscrire",
      tickets: "Billetterie",
      gallery: "Galerie",
      practical: "Infos Pratiques",
    },
    hero: {
      title: "Biashara Afrika 2026",
      baseline: "Passez à l'échelle africaine avec Biashara Afrika 2026",
      date: "18 – 20 mai 2026",
      location: "Palais des Congrès de Lomé, Togo",
      ctaRegister: "S'inscrire",
      ctaProgram: "Voir le programme",
    },
    about: {
      title: "À Propos de Biashara Afrika",
      description: "Biashara Afrika est une plateforme stratégique réunissant gouvernements, institutions, investisseurs, entreprises et PME pour accélérer la mise en œuvre de la ZLECAf.",
      stats: {
        participants: "+2000 participants",
        countries: "+30 pays représentés",
        speakers: "+100 intervenants",
        exhibitors: "+500 entreprises exposantes",
      },
    },
    program: {
      title: "Programme",
      download: "Télécharger le programme complet",
      days: {
        day0: "17 Mai - Pré-forum",
        day1: "18 Mai - Vision to Opportunities",
        day2: "19 Mai - Opportunities to Execution",
        day3: "20 Mai - Commitments",
      }
    },
    speakers: {
      title: "Intervenants d'Exception",
    },
    registration: {
      title: "Inscription",
      text: "L'inscription au forum se fait exclusivement via le QR code ci-dessous. Cette inscription est réservée aux participants.",
      scan: "Scannez pour vous inscrire",
    },
    village: {
      title: "Village Biashara Afrika Business",
      discover: "Découvrir",
    },
    partners: {
      title: "Partenaires",
      text: "Biashara Afrika 2026 est une opportunité pour se positionner au cœur du marché africain, renforcer sa visibilité et connecter ses solutions aux décideurs et aux acteurs économiques du continent.",
    },
    gallery: {
      title: "Galerie Biashara Afrika 2026",
      newsTab: "Actualité & Infos",
      eventsTab: "Photos de l'Événement",
    },
    whyLome: {
      title: "Pourquoi Lomé ?",
      description: "Située au cœur de l’Afrique de l’Ouest, Lomé s’impose comme un carrefour stratégique des échanges et du commerce régional. Ville ouverte sur le continent, elle accueille Biashara Afrika 2026 comme un espace de connexion, d’opportunités et de transformation économique.",
      photos: [
        { url: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=800&auto=format&fit=crop", caption: "Le Grand Marché de Lomé" },
        { url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop", caption: "Le Port Autonome de Lomé" },
        { url: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop", caption: "Architecture Moderne" },
        { url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop", caption: "Culture et Patrimoine" }
      ],
      stats: [
        {
          id: "port",
          title: "Port stratégique régional",
          description: "Le Port de Lomé joue un rôle majeur dans les échanges commerciaux et la circulation des marchandises en Afrique de l’Ouest.",
        },
        {
          id: "hub",
          title: "Carrefour des échanges ouest-africains",
          description: "Grâce à sa position géographique stratégique, Lomé facilite les connexions économiques et commerciales dans la sous-région.",
        },
        {
          id: "connectivity",
          title: "Connectivité internationale",
          description: "Lomé bénéficie d’une ouverture internationale favorisant la mobilité des investisseurs, entrepreneurs et délégations africaines.",
        },
        {
          id: "ecosystem",
          title: "Écosystème économique en pleine croissance",
          description: "Innovation, entrepreneuriat et échanges régionaux participent au dynamisme économique croissant du Togo.",
        },
      ]
    },
    practical: {
      title: "Informations Pratiques",
      subtitle: "Tout ce qu'il faut savoir pour préparer votre séjour à Lomé dans le cadre du Forum Biashara Afrika 2026.",
      venue: "Lieu : Palais des Congrès de Lomé",
      dates: "Dates : 18 au 20 mai 2026",
      city: "Ville : Lomé, Togo",
      learnMore: "En savoir plus",
      exploreTogo: "Explorez le Togo",
      placesToVisit: {
        title: "Sites à visiter",
        items: [
          { name: "Grand Marché de Lomé", image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=400&auto=format&fit=crop" },
          { name: "Palais de la République", image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=400&auto=format&fit=crop" },
          { name: "Musée national du Togo", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=400&auto=format&fit=crop" },
          { name: "Maison Bleue", image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=400&auto=format&fit=crop" }
        ]
      },
      details: [
        { id: "destination", label: "Destination", value: "Lomé, Togo — hub stratégique des échanges et du commerce en Afrique de l'Ouest" },
        { id: "temp", label: "Température moyenne", value: "30°C" },
        { id: "timezone", label: "Fuseau horaire", value: "GMT / TU" },
        { id: "language", label: "Langue officielle", value: "Français" },
        { id: "dial", label: "Indicatif téléphonique", value: "+228" },
        { id: "meal", label: "Coût moyen d'un repas", value: "Environ 2 500 FCFA" },
        { id: "taxi", label: "Tarif moyen d'un taxi", value: "Environ 5 000 FCFA / heure" },
        { id: "hotel", label: "Hébergement", value: "Entre 35 000 FCFA et 65 000 FCFA la nuit" },
        { id: "currency", label: "Monnaie", value: "Franc CFA (XOF)" },
        { id: "internet", label: "Internet & cartes SIM", value: "Les réseaux mobiles et l'internet 4G sont largement disponibles à Lomé. Des cartes SIM locales peuvent être achetées facilement à l'aéroport et dans les points de vente agréés." },
        { id: "mobile_money", label: "Mobile Money", value: "Les services Mobile Money sont disponibles et largement utilisés au Togo pour les paiements et transferts rapides." },
        { id: "airport", label: "Aéroport", value: "Aéroport International Gnassingbé Eyadéma (AIGE), situé à environ 15 à 20 minutes du centre-ville de Lomé." },
        { id: "transpo", label: "Déplacements", value: "Les taxis sont disponibles dans toute la ville. Les déplacements peuvent également se faire via des services de transport privés ou applications locales." },
        { id: "elec", label: "Électricité", value: "220V – prises de type européen." },
        { id: "formalities", label: "Formalités", value: "Les participants internationaux sont invités à vérifier les conditions d'entrée et de visa applicables avant leur voyage." },
        { id: "emergency", label: "Numéros utiles", value: "Police : 117 | Sapeurs-pompiers : 118" }
      ]
    }
  },
  en: {
    nav: {
      about: "About",
      program: "Program",
      speakers: "Speakers",
      village: "Business Village",
      register: "Register",
      tickets: "Tickets",
      gallery: "Gallery",
      practical: "Practical Info",
    },
    hero: {
      title: "Biashara Afrika 2026",
      baseline: "Scale your business across Africa with Biashara Afrika 2026",
      date: "May 18 – 20, 2026",
      location: "Palais des Congrès, Lomé, Togo",
      ctaRegister: "Register",
      ctaProgram: "View programme",
    },
    about: {
      title: "About Biashara Afrika",
      description: "Biashara Afrika is a high-level platform bringing together governments, institutions, investors and businesses to drive AfCFTA implementation and intra-African trade.",
      stats: {
        participants: "+2000 participants",
        countries: "+30 countries represented",
        speakers: "+100 speakers",
        exhibitors: "+500 exhibiting companies",
      },
    },
    program: {
      title: "Program",
      download: "Download full program",
      days: {
        day0: "May 17 - Pre-forum",
        day1: "May 18 - Vision to Opportunities",
        day2: "May 19 - Opportunities to Execution",
        day3: "May 20 - Commitments",
      }
    },
    speakers: {
      title: "Key Speakers",
    },
    registration: {
      title: "Registration",
      text: "Registration for the forum is exclusively done via the QR code below. This registration is reserved for participants only.",
      scan: "Scan to register",
    },
    village: {
      title: "Biashara Afrika Business Village",
      discover: "Discover",
    },
    partners: {
      title: "Partners",
      text: "Biashara Afrika 2026 is an opportunity to position yourself at the heart of the African market, strengthen your visibility and connect your solutions with the continent's decision-makers and economic actors.",
    },
    gallery: {
      title: "Biashara Afrika Gallery 2026",
      newsTab: "News & Info",
      eventsTab: "Event Photos",
    },
    whyLome: {
      title: "Why Lomé?",
      description: "Located at the heart of West Africa, Lomé stands as a strategic hub for trade and regional connectivity. Open to the continent and the world, the city hosts Biashara Afrika 2026 as a platform for opportunity and economic transformation.",
      photos: [
        { url: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=800&auto=format&fit=crop", caption: "Lomé Grand Market" },
        { url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop", caption: "Port of Lomé" },
        { url: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop", caption: "Modern Architecture" },
        { url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop", caption: "Heritage and Culture" }
      ],
      stats: [
        {
          id: "port",
          title: "Regional Strategic Port",
          description: "The Port of Lomé plays a key role in trade and goods circulation across West Africa.",
        },
        {
          id: "hub",
          title: "West African Trade Hub",
          description: "Thanks to its strategic location, Lomé facilitates economic and trade connections across the region.",
        },
        {
          id: "connectivity",
          title: "International Connectivity",
          description: "Lomé benefits from strong international connectivity, supporting the mobility of investors, entrepreneurs and African delegations.",
        },
        {
          id: "ecosystem",
          title: "Growing Economic Ecosystem",
          description: "Innovation, entrepreneurship and regional trade contribute to Togo’s growing economic dynamism.",
        },
      ]
    },
    practical: {
      title: "Practical Information",
      subtitle: "Everything you need to know to prepare your stay in Lomé for Biashara Afrika 2026.",
      venue: "Venue: Palais des Congrès de Lomé",
      dates: "Dates: May 18 to 20, 2026",
      city: "City: Lomé, Togo",
      learnMore: "Learn More",
      exploreTogo: "Explore Togo",
      placesToVisit: {
        title: "Places to visit",
        items: [
          { name: "Grand Marché de Lomé", image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=400&auto=format&fit=crop" },
          { name: "Palais de la République", image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=400&auto=format&fit=crop" },
          { name: "Musée national du Togo", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=400&auto=format&fit=crop" },
          { name: "Maison Bleue", image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=400&auto=format&fit=crop" }
        ]
      },
      details: [
        { id: "destination", label: "Destination", value: "Lomé, Togo — a strategic hub for trade and commerce in West Africa" },
        { id: "temp", label: "Average temperature", value: "30°C" },
        { id: "timezone", label: "Time zone", value: "GMT / UTC" },
        { id: "language", label: "Official language", value: "French" },
        { id: "dial", label: "Country code", value: "+228" },
        { id: "meal", label: "Average meal cost", value: "Around 2,500 FCFA" },
        { id: "taxi", label: "Average taxi fare", value: "Around 5,000 FCFA / hour" },
        { id: "hotel", label: "Accommodation", value: "Between 35,000 FCFA and 65,000 FCFA per night" },
        { id: "currency", label: "Currency", value: "CFA Franc (XOF)" },
        { id: "internet", label: "Internet & SIM cards", value: "Mobile networks and 4G internet are widely available in Lomé. Local SIM cards can easily be purchased at the airport and authorized shops." },
        { id: "mobile_money", label: "Mobile Money", value: "Mobile Money services are available and widely used in Togo for quick payments and transfers." },
        { id: "airport", label: "Airport", value: "Gnassingbé Eyadéma International Airport (AIGE), located approximately 15 to 20 minutes from downtown Lomé." },
        { id: "transpo", label: "Transportation", value: "Taxis are available throughout the city. Transportation can also be arranged through private services or local ride applications." },
        { id: "elec", label: "Electricity", value: "220V – European-style plugs." },
        { id: "formalities", label: "Entry requirements", value: "International participants are advised to check entry and visa requirements before traveling." },
        { id: "emergency", label: "Emergency numbers", value: "Police: 117 | Fire department: 118" }
      ]
    }
  }
};

export const PROGRAM_DATA = {
  fr: [
    {
      day: "17 Mai",
      title: "Activités Pré-Forum & Masterclasses",
      subtitle: "Une journée dédiée à l'accueil et au renforcement des capacités.",
      items: [
        { time: "08:00 – 17:00", title: "Enregistrement des participants" },
        { time: "09:00 – 16:00", title: "Atelier Sectoriel", description: "Construire une industrie africaine du coton, du textile et de l’habillement compétitive et intégrée." },
        { time: "09:00 – 16:00", title: "Masterclasses PME", description: "Évaluation de la valeur ajoutée et intelligence compétitive des PME." },
        { time: "14:00 – 18:00", title: "Atelier Média et Plaidoyer", description: "Session conjointe ZLECAf / ITC." }
      ]
    },
    {
      day: "18 Mai",
      title: "De la Vision aux Opportunités",
      subtitle: "Libérer le potentiel de la ZLECAf et l'intégration économique.",
      items: [
        { time: "09:30 – 11:30", title: "CÉRÉMONIE OFFICIELLE D’OUVERTURE", description: "Discours de S.E. Wamkele Mene et Conversation phare avec S.E. Faure Essozimna Gnassingbé." },
        { time: "11:30 – 13:00", title: "Plénières Stratégiques", description: "Chaînes de valeur africaines et hubs commerciaux sous-nationaux." },
        { time: "14:00 – 16:30", title: "Sessions Techniques", description: "ZES, Systèmes douaniers et l’avenir de l’industrie automobile." },
        { time: "16:30 – 18:30", title: "Sessions Parallèles & Plateformes d’Action", description: "Femmes dans le commerce, Halieutique et Accès des PME au marché." },
        { time: "19:00", title: "Soirée de Bienvenue", description: "Cocktail et Dîner Ministériel offert par le Gouvernement togolais." }
      ]
    },
    {
      day: "19 Mai",
      title: "Des Opportunités à l'Exécution",
      subtitle: "Secteurs porteurs, digital et investissements massifs.",
      items: [
        { time: "08:30 – 10:30", title: "Agriculture & Résilience Alimentaire", description: "Commerce agricole et transformation locale." },
        { time: "11:00 – 13:00", title: "Infrastructures & Digital Trade", description: "Ports, corridors commerciaux et paiements transfrontaliers." },
        { time: "14:00 – 16:00", title: "Invest in Africa", description: "Afreximbank Roadshow et financement de projets." },
        { time: "16:30 – 18:30", title: "Youth in Trade Forum", description: "L'entrepreneuriat des jeunes au cœur de l'Afrique." },
        { time: "20:00", title: "Dîner de Gala", description: "Célébration de l'excellence commerciale africaine." }
      ]
    },
    {
      day: "20 Mai",
      title: "Engagements & Partenariats",
      subtitle: "Concrétisation des accords et call to action.",
      items: [
        { time: "09:00 – 11:00", title: "Secteur Privé & Industrie", description: "Dialogue leadership et financement de la transformation industrielle." },
        { time: "11:30 – 13:00", title: "Créativité & Inclusion", description: "Women in Action et Industries Culturelles et Créatives." },
        { time: "14:30 – 16:00", title: "Cérémonie de Clôture", description: "Annonce des résultats officiels et Call to Action." }
      ]
    }
  ],
  en: [
    {
      day: "May 17",
      title: "Pre-Forum Activities & Masterclasses",
      subtitle: "A day dedicated to onboarding and capacity building.",
      items: [
        { time: "08:00 – 17:00", title: "Registration" },
        { time: "09:00 – 16:00", title: "Sectoral Workshop", description: "Building a competitive African Cotton, Textiles and Apparel Industry." },
        { time: "09:00 – 16:00", title: "SME Masterclasses", description: "Value Addition Assessment and Export Readiness Programme." },
        { time: "14:00 – 18:00", title: "Media Advocacy Workshop", description: "Joint AfCFTA / ITC session." }
      ]
    },
    {
      day: "May 18",
      title: "From Vision to Opportunities",
      subtitle: "Unlocking AfCFTA Potential and Economic Integration.",
      items: [
        { time: "09:30 – 11:30", title: "OFFICIAL OPENING CEREMONY", description: "Address by H.E. Wamkele Mene and Keynote by H.E. Faure Essozimna Gnassingbé." },
        { time: "11:30 – 13:00", title: "Strategic Plenaries", description: "African Value Chains and Subnational Trade Hubs." },
        { time: "14:00 – 16:30", title: "Technical Sessions", description: "SEZs, Customs systems and Africa's Automotive future." },
        { time: "16:30 – 18:30", title: "Breakout Sessions & Action Platforms", description: "Women in Trade, Fisheries and SME Market Access." },
        { time: "19:00", title: "Welcome Evening", description: "Cocktail and Ministerial Dinner hosted by the Government of Togo." }
      ]
    },
    {
      day: "May 19",
      title: "From Opportunities to Execution",
      subtitle: "Key sectors, digital landscape and massive investment.",
      items: [
        { time: "08:30 – 10:30", title: "Agriculture & Food Resilience", description: "Agri-trade and local processing." },
        { time: "11:00 – 13:00", title: "Infrastructure & Digital Trade", description: "Ports, corridors and cross-border payments." },
        { time: "14:00 – 16:00", title: "Invest in Africa", description: "Afreximbank Roadshow and project financing." },
        { time: "16:30 – 18:30", title: "Youth in Trade Forum", description: "Youth entrepreneurship at the heart of Africa." },
        { time: "20:00", title: "Gala Dinner", description: "Celebrating African commercial excellence." }
      ]
    },
    {
      day: "May 20",
      title: "Commitments & Partnerships",
      subtitle: "Solidifying agreements and call to action.",
      items: [
        { time: "09:00 – 11:00", title: "Private Sector & Industry", description: "Leadership dialogue and financing industrial transformation." },
        { time: "11:30 – 13:00", title: "Creativity & Inclusion", description: "Women in Action and Cultural & Creative Industries." },
        { time: "14:30 – 16:00", title: "Closing Ceremony", description: "Outcomes announcement and Call to Action." }
      ]
    }
  ]
};

export const SPEAKERS_DATA = [
  {
    id: "faure",
    name: "Faure Essozimna Gnassingbé",
    role: "Président du Conseil",
    institution: "République Togolaise",
    category: "Gouvernement"
  },
  {
    id: "wamkele",
    name: "Wamkele Mene",
    role: "Secretary-General",
    institution: "AfCFTA Secretariat",
    category: "Institutions"
  },
  {
    id: "sidi",
    name: "Sidi Ould Tah",
    role: "President",
    institution: "African Development Bank",
    category: "Banking"
  },
  {
    id: "elombi",
    name: "George Elombi",
    role: "President & Chairman",
    institution: "Afreximbank",
    category: "Banking"
  },
  {
    id: "tarek",
    name: "Tarek Ismail Mosaad",
    role: "CEO",
    institution: "Hyundai Motor Company Middle East & Africa",
    category: "Private Sector"
  },
  {
    id: "labonne",
    name: "Philippe Labonne",
    role: "President",
    institution: "Africa Global Logistics",
    category: "Logistics"
  }
];

export const VILLAGE_DATA = [
  {
    name: "AfriCorp Solutions",
    sector: "Technology",
    country: "Togo",
    logo: "https://api.placeholder.com/150",
    description: "Digital transformation for African SMEs."
  },
  {
    name: "Green Sahara",
    sector: "Agri-business",
    country: "Morocco",
    logo: "https://api.placeholder.com/150",
    description: "Sustainable farming and distribution."
  }
];
