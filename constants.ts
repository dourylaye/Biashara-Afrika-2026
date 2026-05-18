import React from 'react';
import { motion } from 'framer-motion';
import { ProgramDay, ProgramItem } from './types';

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
        day0: "17 Mai 2026",
        day1: "18 Mai 2026",
        day2: "19 Mai 2026",
        day3: "20 Mai 2026",
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
      newsTab: "Bon à savoir",
      eventsTab: "Photos de l'Événement",
      blogTab: "Blog",
    },
    programLabels: {
      speakers: "Intervenants",
      moderators: "Modérateurs",
      panellists: "Panélistes",
      keynotes: "Keynotes",
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
        day0: "May 17, 2026",
        day1: "May 18, 2026",
        day2: "May 19, 2026",
        day3: "May 20, 2026",
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
      newsTab: "Good to Know",
      eventsTab: "Event Photos",
      blogTab: "Blog",
    },
    programLabels: {
      speakers: "Speakers",
      moderators: "Moderators",
      panellists: "Panellists",
      keynotes: "Keynotes",
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

export const PROGRAM_DATA: { fr: ProgramDay[], en: ProgramDay[] } = {
  fr: [
    {
      day: "17 Mai 2026",
      title: "Inscription • Masterclass • Réunions stratégiques",
      subtitle: "Prélude au sommet : Préparation et Alignement",
      items: [
        { 
          time: "08:00 – 17:00", 
          title: "Inscription des participants",
          description: "Accueil et retrait des badges."
        },
        { 
          time: "09:00 – 16:00", 
          title: "Table ronde : Chaîne de valeur africaine du coton, textile et habillement sous la ZLECAf",
          description: "Session stratégique sectorielle."
        },
        { 
          time: "14:00 – 18:00", 
          title: "Atelier média & plaidoyer",
          description: "Session de sensibilisation pour les professionnels des médias."
        },
        { 
          time: "15:00 – 18:00", 
          title: "Masterclasses",
          tracks: [
            { name: "Track 1", title: "Préparation à l’exportation & valorisation des PME" },
            { name: "Track 2", title: "Intelligence compétitive" }
          ]
        },
        { 
          time: "16:00 – 19:00", 
          title: "Réunion de coordination AfCFTA – Afreximbank",
          description: "Réunion technique institutionnelle."
        }
      ]
    },
    {
      day: "18 Mai 2026",
      title: "De la vision aux opportunités : libérer le potentiel de la ZLECAf",
      subtitle: "Cérémonie d’Ouverture & Plénières Stratégiques",
      items: [
        { 
          time: "07:00 – 09:00", 
          title: "Installation & Arrivée des autorités",
          description: "Installation des délégués et accueil des officiels."
        },
        { 
          time: "09:00 – 11:00", 
          title: "Cérémonie officielle d’ouverture",
          speakers: [
            "Honourable Badanam Patoki",
            "Dr. Jumoke Oduwole",
            "H.E. Oluseyi Abiodun Makinde",
            "H.E. Wamkele Mene",
            "H.E. Dr George Elombi",
            "H.E. Issoufou Mahamadou",
            "H.E. Faure Essozimna Gnassingbé"
          ]
        },
        { 
          time: "11:30 – 12:15", 
          title: "Plénière 1 : Construire des chaînes de valeur africaines compétitives",
          keynotes: ["Ms. Pamela Coke"],
          panellists: [
            "Dr. Joy Kategekwa – AfDB",
            "Ms. Ibukun Awosika – Chair Centre Group",
            "Ms. Happiness Nyiti – AJA Limited",
            "Mr. Souleymane Diagne – Ecobank",
            "Mr. Enselme Gouthon – Robusta Coffee Agency",
            "Mr Jean Arsene Yerima – Afreximbank"
          ],
          moderators: ["Mr. Alfred Ocansey – TV3 Ghana"]
        },
        { 
          time: "12:15 – 12:30", 
          title: "Signature de protocoles d’accord",
          description: "Partenariats stratégiques."
        },
        { 
          time: "12:30 – 12:50", 
          title: "Plénière 2 : Les hubs commerciaux régionaux & la ZLECAf",
          speakers: ["H.E. Oluseyi Abiodun Makinde"],
          moderators: ["Ms. Lerato Mbele"]
        },
        { 
          time: "12:50 – 13:30", 
          title: "Plénière 3 : La phase de négociation terminée – Quelle suite ?",
          speakers: [
            "H.E. Wamkele Mene – AfCFTA Secretariat",
            "Honourable Prudence Sebahizi – Rwanda",
            "Honourable Jumoke Oduwole – Nigeria",
            "Honourable Guibolo Fanga Mathieu – Chad",
            "Julien Paluku Kahongya – RDC",
            "Ms. Kanayo Awani – Afreximbank"
          ],
          moderators: ["Ms Hannane Ferdjani"]
        },
        { 
          time: "14:30 – 15:30", 
          title: "Plénière 4 : Sociétés commerciales, ZES & réseaux de distribution",
          keynotes: ["Stephen Jennings – Rendeavour"],
          panellists: [
            "Mr. Arthur Trimua – Gouvernement Togolais",
            "Mr. Yomi Ademola – Rendeavour",
            "Mr. Felix Chege – RealSources",
            "Mr. Daniel Mackorley – McDan",
            "Mr. Stewart Makura – ATDC",
            "Mr Christian Ndikumagenge – Afreximbank"
          ],
          moderators: ["Godfrey Mutizwa – CNBC Africa"]
        },
        { 
          time: "15:30 – 16:15", 
          title: "Plénière 5 : Harmonisation des systèmes douaniers",
          speakers: [
            "Mr. Dumisani Masilela – SACU",
            "Mr. Nafiu Isiyaku – Nigeria Customs",
            "Ms. Demitta Gyang – AfCFTA Secretariat",
            "Mr. Fioklou Toulan – Douanes Togo",
            "Mr. Kizito Ebhohimen – Bergmans Security",
            "Dr Gainmore Zanamwe – Afreximbank"
          ],
          moderators: ["Stephane Tchriffo"]
        },
        { 
          time: "16:15 – 16:35", 
          title: "Plénière 6 : L’avenir automobile africain",
          speakers: ["Mr. Tarek Ismail Mosaad – CEO Hyundai Motor"],
          moderators: ["Godfrey Mutizwa – CNBC Africa"]
        },
        { 
          time: "16:45 – 18:30", 
          title: "Sessions parallèles / Breakout Sessions",
          tracks: [
            { name: "Track 1", title: "PME & Inclusion des femmes" },
            { name: "Track 2", title: "Industrialisation verte" },
            { name: "Side Event", title: "Transformation digitale & intégration des marchés africains" }
          ]
        },
        { 
          time: "18:30 – 20:00", 
          title: "Cocktail de bienvenue & Dîner Ministériel",
          description: "Moment de networking offert par le gouvernement togolais."
        }
      ]
    },
    {
      day: "19 Mai 2026",
      title: "Des opportunités à l’exécution",
      subtitle: "Focus Agriculture, Infrastructures & Paiements",
      items: [
        { 
          time: "08:00 – 10:00", 
          title: "Sessions petit-déjeuner",
          tracks: [
            { name: "Banking", title: "Harmonisation des régulations financières" },
            { name: "Logistique", title: "Ports, maritime & logistique" }
          ]
        },
        { 
          time: "10:00 – 10:45", 
          title: "Plénière 7 : Agriculture, commerce & résilience",
          speakers: [
            "Hon. Prudence Sebahizi",
            "Dr. Gainmore Zanamwe",
            "Mr. Daniel Njiwa",
            "Mr. Komla Bissi",
            "Mr. Djiwa Oyetounde",
            "Mr. Kolawole Sofola"
          ],
          moderators: ["Dr. Faizel Ismal"]
        },
        { 
          time: "10:45 – 11:40", 
          title: "Plénière 8 : Connecter l’Afrique – infrastructures, ports & corridors",
          speakers: [
            "Mr. Mohamed Diop – AGL",
            "Mr. Patient Sayiba",
            "Dr Hortense ME",
            "Ms. Adeline Gabillaud – CMA-CGM",
            "Mr. Khalid Bichou",
            "Mr Jean Arsene Yerima – Afreximbank"
          ],
          moderators: ["Godfrey Mutizwa"]
        },
        { 
          time: "11:50 – 12:30", 
          title: "Lancement du Rapport Coton, Textile & Habillement",
          description: "Présentation des résultats stratégiques."
        },
        { 
          time: "12:30 – 13:00", 
          title: "Plénière 10 : Relations commerciales USA – Afrique",
          speakers: [
            "Ms. Florizelle Liser – CCA",
            "Dr. Yao Guevera – US Chamber of Commerce",
            "Mme Zeinab Camara – Tony Blair Institute"
          ]
        },
        { 
          time: "14:00 – 14:50", 
          title: "Plénière 11 : Paiements transfrontaliers & marché africain",
          speakers: [
            "Dr. Jumoke Oduwole",
            "Mr. Shaibu Haruna – MTN MoMo",
            "Mrs Annerose Ngemu – Afreximbank",
            "Dr. Talkmore Chidede – AfCFTA Secretariat",
            "Mr. Isaac Kamuta – Ecobank",
            "Ms. Jaël Midjresso-Amouzou – Chom Factory"
          ],
          moderators: ["Mrs. Nshuti Mbabazi"]
        },
        { 
          time: "20:00 – 22:00", 
          title: "Dîner de Gala",
          description: "Célébration de l'excellence commerciale africaine."
        }
      ]
    },
    {
      day: "20 Mai 2026",
      title: "Engagements & Partenariats",
      subtitle: "Financement & Clôture du Sommet",
      items: [
        { 
          time: "10:00 – 10:50", 
          title: "Plénière 12 : Mobiliser le secteur privé africain",
          speakers: [
            "Ms. Benedicta Lassi",
            "Dr. Lucy Newman",
            "Mr. Patrick Obath",
            "Mr. Jaouadi Zied",
            "Mr. Sekar Ramamoorthy",
            "Ms. Briggette Harrington",
            "Ms. Nevine Nakhla"
          ]
        },
        { 
          time: "10:50 – 11:40", 
          title: "Plénière 13 : Financer la transformation industrielle africaine",
          speakers: [
            "Ms Saloua Karkri Belkeziz",
            "Mr. Oumar Sangare",
            "Ms. Yeabsira Zewdie",
            "Dr Ebenezer Onyeagwu",
            "Mr. Paolo Gomes",
            "Ms. Dana Mopulunga",
            "Ms. Rose Kayi Mivedor"
          ]
        },
        { 
          time: "11:40 – 12:10", 
          title: "Plénière 14 : Fonds d’ajustement de la ZLECAf",
          speakers: ["Mr. Jean-Louis Ekra", "Mr. Emeka Uzomba"],
          moderators: ["Ms Lerato Mbele"]
        },
        { 
          time: "12:10 – 12:40", 
          title: "Conversation de clôture avec Salif Traoré (Magic System)",
          moderators: ["Mr. Patrick Amendah"]
        },
        { 
          time: "12:40 – 13:00", 
          title: "Résultats officiels & Discours de clôture",
          speakers: ["H.E. Wamkele Mene – Secretary General"]
        }
      ]
    }
  ],
  en: [
    {
      day: "17 Mai 2026",
      title: "Registration • Masterclasses • Strategic Meetings",
      subtitle: "Summit Prelude: Preparation and Alignment",
      items: [
        { time: "08:00 – 17:00", title: "Delegates Registration" },
        { time: "09:00 – 16:00", title: "Roundtable: African Cotton, Textile & Apparel Value Chains under the AfCFTA" },
        { time: "14:00 – 18:00", title: "Media Advocacy Workshop" },
        { 
          time: "15:00 – 18:00", 
          title: "Masterclasses",
          tracks: [
            { name: "Track 1", title: "SME Value Addition & Export Readiness Programme" },
            { name: "Track 2", title: "Competitiveness Intelligence" }
          ]
        },
        { time: "16:00 – 19:00", title: "AfCFTA – Afreximbank Coordination Meeting" }
      ]
    },
    {
      day: "18 Mai 2026",
      title: "From Vision to Opportunities: Unlocking AfCFTA Potential",
      subtitle: "Official Opening Ceremony & Strategic Plenaries",
      items: [
        { time: "07:00 – 09:00", title: "Delegates seated & Arrival of official dignitaries" },
        { 
          time: "09:00 – 11:00", 
          title: "Official Opening Ceremony",
          speakers: [
            "Honourable Badanam Patoki",
            "Dr. Jumoke Oduwole",
            "H.E. Oluseyi Abiodun Makinde",
            "H.E. Wamkele Mene",
            "H.E. Dr George Elombi",
            "H.E. Issoufou Mahamadou",
            "H.E. Faure Essozimna Gnassingbé"
          ]
        },
        { 
          time: "11:30 – 12:15", 
          title: "Plenary 1: Building Competitive African Value Chains",
          keynotes: ["Ms. Pamela Coke"],
          panellists: [
            "Dr. Joy Kategekwa – AfDB",
            "Ms. Ibukun Awosika – Chair Centre Group",
            "Ms. Happiness Nyiti – AJA Limited",
            "Mr. Souleymane Diagne – Ecobank",
            "Mr. Enselme Gouthon – Robusta Coffee Agency",
            "Mr Jean Arsene Yerima – Afreximbank"
          ],
          moderators: ["Mr. Alfred Ocansey – TV3 Ghana"]
        },
        { time: "12:15 – 12:30", title: "MoUs Signing" },
        { 
          time: "12:30 – 12:50", 
          title: "Plenary 2: Leveraging AfCFTA – Subnational Trade Hubs",
          speakers: ["H.E. Oluseyi Abiodun Makinde"],
          moderators: ["Ms. Lerato Mbele"]
        },
        { 
          time: "12:50 – 13:30", 
          title: "Plenary 3: The Negotiation Phase Concluded – What’s Next?",
          speakers: [
            "H.E. Wamkele Mene – AfCFTA Secretariat",
            "Honourable Prudence Sebahizi – Rwanda",
            "Honourable Jumoke Oduwole – Nigeria",
            "Honourable Guibolo Fanga Mathieu – Chad",
            "Julien Paluku Kahongya – RDC",
            "Ms. Kanayo Awani – Afreximbank"
          ],
          moderators: ["Ms Hannane Ferdjani"]
        },
        { 
          time: "14:30 – 15:30", 
          title: "Plenary 4: Trading Companies, SEZs & Distribution Networks",
          keynotes: ["Stephen Jennings – Rendeavour"],
          panellists: [
            "Mr. Arthur Trimua – Togolese Government",
            "Mr. Yomi Ademola – Rendeavour",
            "Mr. Felix Chege – RealSources",
            "Mr. Daniel Mackorley – McDan",
            "Mr. Stewart Makura – ATDC",
            "Mr Christian Ndikumagenge – Afreximbank"
          ],
          moderators: ["Godfrey Mutizwa – CNBC Africa"]
        },
        { 
          time: "15:30 – 16:15", 
          title: "Plenary 5: Customs Systems Harmonisation",
          speakers: [
            "Mr. Dumisani Masilela – SACU",
            "Mr. Nafiu Isiyaku – Nigeria Customs",
            "Ms. Demitta Gyang – AfCFTA Secretariat",
            "Mr. Fioklou Toulan – Togo Customs",
            "Mr. Kizito Ebhohimen – Bergmans Security",
            "Dr Gainmore Zanamwe – Afreximbank"
          ],
          moderators: ["Stephane Tchriffo"]
        },
        { 
          time: "16:15 – 16:35", 
          title: "Plenary 6: Driving Africa’s Automotive Future",
          speakers: ["Mr. Tarek Ismail Mosaad – CEO Hyundai Motor"],
          moderators: ["Godfrey Mutizwa – CNBC Africa"]
        },
        { 
          time: "16:45 – 18:30", 
          title: "Breakout Sessions",
          tracks: [
            { name: "Track 1", title: "SMEs & Women Inclusion" },
            { name: "Track 2", title: "Green Industrialisation" },
            { name: "Side Event", title: "Digital Transformation & African Market Integration" }
          ]
        },
        { time: "18:30 – 20:00", title: "Welcome Cocktail & Ministerial Dinner" }
      ]
    },
    {
      day: "19 Mai 2026",
      title: "From Opportunities to Execution",
      subtitle: "Focus Agriculture, Infrastructure & Payments",
      items: [
        { 
          time: "08:00 – 10:00", 
          title: "Breakfast Sessions",
          tracks: [
            { name: "Banking", title: "Harmonising Financial Regulations" },
            { name: "Logistics", title: "Maritime, Ports & Logistics Roundtable" }
          ]
        },
        { 
          time: "10:00 – 10:45", 
          title: "Plenary 7: Agriculture, Trade & Resilience",
          speakers: [
            "Hon. Prudence Sebahizi",
            "Dr. Gainmore Zanamwe",
            "Mr. Daniel Njiwa",
            "Mr. Komla Bissi",
            "Mr. Djiwa Oyetounde",
            "Mr. Kolawole Sofola"
          ],
          moderators: ["Dr. Faizel Ismal"]
        },
        { 
          time: "10:45 – 11:40", 
          title: "Plenary 8: Connecting Africa – Infrastructure, Ports & Corridors",
          speakers: [
            "Mr. Mohamed Diop – AGL",
            "Mr. Patient Sayiba",
            "Dr Hortense ME",
            "Ms. Adeline Gabillaud – CMA-CGM",
            "Mr. Khalid Bichou",
            "Mr Jean Arsene Yerima – Afreximbank"
          ],
          moderators: ["Godfrey Mutizwa"]
        },
        { time: "11:50 – 12:30", title: "Launch of the Cotton, Textile & Apparel Report" },
        { 
          time: "12:30 – 13:00", 
          title: "Plenary 10: US – Africa Trade Relations",
          speakers: [
            "Ms. Florizelle Liser – CCA",
            "Dr. Yao Guevera – US Chamber of Commerce",
            "Mme Zeinab Camara – Tony Blair Institute"
          ]
        },
        { 
          time: "14:00 – 14:50", 
          title: "Plenary 11: Seamless Cross-Border Payments",
          speakers: [
            "Dr. Jumoke Oduwole",
            "Mr. Shaibu Haruna – MTN MoMo",
            "Mrs Annerose Ngemu – Afreximbank",
            "Dr. Talkmore Chidede – AfCFTA Secretariat",
            "Mr. Isaac Kamuta – Ecobank",
            "Ms. Jaël Midjresso-Amouzou – Chom Factory"
          ],
          moderators: ["Mrs. Nshuti Mbabazi"]
        },
        { time: "20:00 – 22:00", title: "Gala Dinner" }
      ]
    },
    {
      day: "20 Mai 2026",
      title: "Commitments & Partnerships",
      subtitle: "Financing & Closing Ceremony",
      items: [
        { 
          time: "10:00 – 10:50", 
          title: "Plenary 12: Mobilising Africa’s Private Sector",
          speakers: [
            "Ms. Benedicta Lassi",
            "Dr. Lucy Newman",
            "Mr. Patrick Obath",
            "Mr. Jaouadi Zied",
            "Mr. Sekar Ramamoorthy",
            "Ms. Briggette Harrington",
            "Ms. Nevine Nakhla"
          ]
        },
        { 
          time: "10:50 – 11:40", 
          title: "Plenary 13: Financing Africa’s Industrial Transformation",
          speakers: [
            "Ms Saloua Karkri Belkeziz",
            "Mr. Oumar Sangare",
            "Ms. Yeabsira Zewdie",
            "Dr Ebenezer Onyeagwu",
            "Mr. Paolo Gomes",
            "Ms. Dana Mopulunga",
            "Ms. Rose Kayi Mivedor"
          ]
        },
        { 
          time: "11:40 – 12:10", 
          title: "Plenary 14: The AfCFTA Adjustment Fund",
          speakers: ["Mr. Jean-Louis Ekra", "Mr. Emeka Uzomba"],
          moderators: ["Ms Lerato Mbele"]
        },
        { 
          time: "12:10 – 12:40", 
          title: "Closing Conversation with Salif Traoré (Magic System)",
          moderators: ["Mr. Patrick Amendah"]
        },
        { 
          time: "12:40 – 13:00", 
          title: "Official Outcomes & Closing Address",
          speakers: ["H.E. Wamkele Mene – Secretary General"]
        }
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
    id: "issoufou",
    name: "H.E. Mahamadou Issoufou",
    role: "AfCFTA Champion, ancien président du Niger",
    institution: "AfCFTA",
    category: "Gouvernement"
  },
  {
    id: "wamkele",
    name: "H.E. Wamkele Mene",
    role: "Secrétaire général",
    institution: "Secrétariat de la ZLECAf",
    category: "Institutions"
  },
  {
    id: "pamela",
    name: "Pamela Coke-Hamilton",
    role: "Directrice exécutive",
    institution: "ITC",
    category: "Institutions"
  },
  {
    id: "elombi",
    name: "Dr. George Elombi",
    role: "Président du Board",
    institution: "Afreximbank",
    category: "Banking"
  },
  {
    id: "fraizee",
    name: "Prof. Fraizee Ismail",
    role: "Conseiller principal",
    institution: "Conseil AfCFTA",
    category: "Institutions"
  },
  {
    id: "lerato",
    name: "Lerato Mbela",
    role: "Co-animatrice",
    institution: "Media",
    category: "Media"
  },
  {
    id: "hannane",
    name: "Hannane Ferdjani",
    role: "Co-animatrice",
    institution: "Media",
    category: "Media"
  },
  {
    id: "joy",
    name: "Dr. Joy Kategekwa",
    role: "Directrice exécutive",
    institution: "ITC",
    category: "Institutions"
  },
  {
    id: "kanayo",
    name: "Kanayo Awani",
    role: "Vice-présidente exécutive",
    institution: "Afreximbank",
    category: "Banking"
  },
  {
    id: "tarek",
    name: "Tarek Mosaad",
    role: "PDG Moyen-Orient et Afrique",
    institution: "Hyundai",
    category: "Private Sector"
  },
  {
    id: "yoni",
    name: "Yoni Admelah",
    role: "Directeur général",
    institution: "Rendeavour Afrique de l'Ouest",
    category: "Private Sector"
  },
  {
    id: "stephen",
    name: "Stephen Jennings",
    role: "Fondateur",
    institution: "Rendeavour",
    category: "Private Sector"
  },
  {
    id: "nshuti",
    name: "Nshuti Mbabazi",
    role: "Directrice générale",
    institution: "Better Than Cash Alliance",
    category: "Institutions"
  },
  {
    id: "yao",
    name: "Dr Yao Guevera",
    role: "Vice-président Afrique",
    institution: "US-Africa Business Center",
    category: "Institutions"
  },
  {
    id: "rob",
    name: "Dr. Rob Davis",
    role: "Président-Directeur Général",
    institution: "Merck & Co.",
    category: "Private Sector"
  },
  {
    id: "ekra",
    name: "Jean Louis Ekra",
    role: "Président du Board",
    institution: "AfCFTA Adjustment Fund",
    category: "Institutions"
  },
  {
    id: "jeremy",
    name: "Jeremy Awori",
    role: "CEO du Groupe",
    institution: "Ecobank",
    category: "Banking"
  },
  {
    id: "makinde",
    name: "Engr. Oluwaseyi Makinde",
    role: "Gouverneur exécutif",
    institution: "État d’Oyo",
    category: "Gouvernement"
  },
  {
    id: "gatete",
    name: "Claver Gatete",
    role: "Secrétaire exécutif",
    institution: "CEA",
    category: "Institutions"
  },
  {
    id: "florizelle",
    name: "Florizelle Liser",
    role: "Présidente & CEO",
    institution: "CCA",
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
