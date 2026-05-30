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
  Share2,
  Copy,
  Check,
  Play,
  Video,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
  Briefcase,
  Store,
  Handshake
} from 'lucide-react';
import { translations, PROGRAM_DATA, SPEAKERS_DATA, VIDEO_DATA } from './constants';
import { Counter } from './src/components/Counter';
import { SpeakerCard } from './src/components/SpeakerCard';
import { Navigation } from './src/components/Navigation';
import { Footer } from './src/components/Footer';
import { FloatingActions } from './src/components/FloatingActions';
import { CatalogueViewer } from './src/components/CatalogueViewer';
import cataloguePdf from './Catalogue/CATALOGUE.pdf';
import qrCodeImage from './Images/QR code.jpg';
import heroImage from './Images/FOND1.png';
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
import Blog1 from './Blog/Blog1.jpeg';
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
import A1 from './Photos/A1.webp';
import A2 from './Photos/A2.webp';
import A3 from './Photos/A3.webp';
import A4 from './Photos/A4.webp';
import A5 from './Photos/A5.webp';
import A6 from './Photos/A6.webp';
import A7 from './Photos/A7.webp';
import A8 from './Photos/A8.webp';
import P1 from './Photos/P1.webp';
import P2 from './Photos/P2.webp';
import P3 from './Photos/P3.webp';
import P4 from './Photos/P4.webp';
import P5 from './Photos/P5.webp';
import P6 from './Photos/P6.webp';
import P7 from './Photos/P7.webp';
import P8 from './Photos/P8.webp';
import P9 from './Photos/P9.webp';
import P10 from './Photos/P10.webp';
import B1 from './Photos/B1.webp';
import B2 from './Photos/B2.webp';
import B3 from './Photos/B3.webp';
import B4 from './Photos/B4.webp';
import B5 from './Photos/B5.webp';
import B6 from './Photos/B6.webp';
import B7 from './Photos/B7.webp';
import B8 from './Photos/B8.webp';
import B9 from './Photos/B9.webp';
import B10 from './Photos/B10.webp';
import B11 from './Photos/B11.webp';
import B12 from './Photos/B12.webp';
import B13 from './Photos/B13.webp';
import B14 from './Photos/B14.webp';
import B15 from './Photos/B15.webp';
import B16 from './Photos/B16.webp';
import B17 from './Photos/B17.webp';
import B18 from './Photos/B18.webp';
import B19 from './Photos/B19.webp';
import B20 from './Photos/B20.webp';
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
import ReactMarkdown from 'react-markdown';
import { Language, Speaker, Exhibitor, BlogPost, VideoItem } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPracticalModalOpen, setIsPracticalModalOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [modalActiveTab, setModalActiveTab] = useState(0);
  const [currentCityPhoto, setCurrentCityPhoto] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [galleryTab, setGalleryTab] = useState<'news' | 'events' | 'blog' | 'videos'>('events');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
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
      id: 'day-1',
      title: lang === 'fr' ? "Jour 1" : "Day 1",
      photos: [A1, A2, A3, A4, A5, A6, A7, A8]
    },
    {
      id: 'opening-ceremony',
      title: lang === 'fr' ? "Cérémonie d’ouverture" : "Opening Ceremony",
      photos: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]
    },
    {
      id: 'ministerial-dinner',
      title: lang === 'fr' ? "DINER MINISTERIEL" : "MINISTERIAL DINNER",
      photos: [B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12, B13, B14, B15, B16, B17, B18, B19, B20]
    },
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

  const BLOG_POSTS: BlogPost[] = [
    {
      id: 5,
      title: lang === 'fr' 
        ? "LE FORUM PANAFRICAIN BIASHARA AFRIKA S’OUVRE LUNDI A LOME" 
        : "BIASHARA AFRIKA PAN-AFRICAN FORUM OPENS MONDAY IN LOME",
      description: lang === 'fr'
        ? "Une opportunité de promotion internationale pour les PME/PMI togolaises"
        : "An international promotion opportunity for Togolese SMEs",
      image: Blog1,
      date: "18 Mai 2026",
      content: lang === 'fr'
        ? `Après la 1ère édition en Afrique du Sud en 2023 et la 2ème au Rwanda en 2024, Lomé accueille à partir ce lundi 18 mai 2026, le 3ème acte du forum du secteur privé africain Biashara Afrika. Fort de son rayonnement dans la sous-région et de ses infrastructures d’accueil appréciables, le Togo va prêter son cadre idéal et ce jusqu’au 18 mai, à cette plateforme stratégique de dialogue, d’innovation et d’action, destinée à connecter les marchés d’affaires, faciliter les échanges entre les entreprises et renforcer les opportunités économiques sur le continent.

Ce rendez-vous panafricain, organisé sous le haut patronage du Président du Conseil, Faure Essozimna Gnassingbé, est un cadre d’opportunités d’affaires offert aux opérateurs économiques, surtout togolais, pour se faire valoir, s’affirmer sur le continent et renforcer les échanges dans un système commercial mondialisé. Son organisation à Lomé témoigne du leadership et de l’engagement résolu du Président du Conseil à positionner le Togo comme un hub logistique et commercial de référence en Afrique de l’Ouest.

Pendant trois jours, cette initiative conjointe du Secrétariat de la Zone de libre-échange continentale africaine (ZLECAf) et du gouvernement togolais ouvre ses débats autour du thème :

**« Accélérer la transformation économique de l’Afrique grâce à la ZLECAf »**.

Des débats qui concernent l’ensemble des opérateurs économiques africains :
- PME/PMI ;
- investisseurs ;
- institutions privées et publiques ;
- organisations professionnelles du secteur privé.

Ils sont invités à des échanges constructifs et pragmatiques mettant l’accent sur des critères de qualité et de représentativité nationale afin de mettre en lumière les potentialités économiques de l’Afrique de manière optimale.

Selon les organisateurs, c’est plus de 1.500 participants qui devraient se retrouver et débattre des politiques de facilitation commerciale, des stratégies de transformation économique ainsi que des opportunités offertes par la ZLECAf pour une Afrique unie et ambitieuse.

Panels thématiques, espaces d’exposition et sessions de partenariat vont offrir des perspectives concrètes pour stimuler les échanges et renforcer la coopération régionale.

### Nouer des partenariats avec les opérateurs économiques du continent

Pour les opérateurs économiques, surtout togolais, Biashara Afrika 2026 est un catalyseur d’opportunités pour leurs entreprises et pour l’ensemble des PME/PMI.

Ce forum constitue également une opportunité de promotion internationale pour les PME/PMI du Togo et du continent.

En effet, la présence d’acteurs économiques africains et internationaux permettra de mettre en valeur :
- les réformes économiques engagées par le gouvernement ;
- les opportunités d’investissement dans les secteurs prioritaires ;
- les infrastructures logistiques et commerciales du pays.

Selon les données du ministère en charge du Commerce et du Contrôle de la Qualité, les PME représentent plus de 80 % du tissu économique togolais et constituent un levier essentiel pour la création d’emplois et la transformation industrielle du pays.

A cet égard, le présent forum va leur offrir :
- des outils ;
- des réseaux ;
- des plateformes nécessaires pour accéder aux marchés africains.

Le forum offre également une tribune permettant aux investisseurs internationaux d’identifier des opportunités dans différents secteurs économiques togolais et au sein d’autres pays du continent.

Il encourage les entreprises africaines à collaborer afin de :
- transformer localement les ressources naturelles du continent ;
- développer les chaînes de valeur régionales.

En outre, Biashara Afrika 2026 est une occasion permettant aux PME/PMI de la place de nouer des partenariats avec les opérateurs économiques du continent.

À moyen et long terme, il contribuera :
- à renforcer l’attractivité du Togo ;
- à stimuler la création d’emplois ;
- à développer l’industrie locale ;
- à promouvoir les exportations vers le marché africain.

Créée sous l’égide de l’Union Africaine, la Zone de libre-échange continentale africaine (ZLECAf), à travers son secrétariat sis à Accra au Ghana, assiste les États membres et veille au respect des règles de libre circulation des marchandises au sein des pays africains.

La mise en œuvre de cette Zone permet à l’Afrique de s’engager dans la construction du plus grand marché intégré du monde, regroupant plus de 1,3 milliard de consommateurs et représentant un produit intérieur brut combiné de plus de 3 400 milliards de dollars.`
        : `After the 1st edition in South Africa in 2023 and the 2nd in Rwanda in 2024, Lomé is hosting from this Monday, May 18, 2026, the 3rd act of the African private sector forum Biashara Afrika.

This pan-African meeting, organized under the high patronage of the President of the Council, Faure Essozimna Gnassingbé, is an opportunity for economic operators to assert themselves on the continent and strengthen exchanges in a globalized trading system.

Over three days, this joint initiative of the AfCFTA Secretariat and the Togolese government will focus on the theme:

**"Accelerating Africa's economic transformation through AfCFTA"**.

According to the organizers, more than 1,500 participants are expected to discuss trade facilitation policies, economic transformation strategies, and opportunities offered by AfCFTA for a united and ambitious Africa.`
    },
    {
      id: 4,
      title: lang === 'fr' 
        ? "Défis liés au commerce et à l’investissement intra-africain : Les décideurs et investisseurs en quête de solutions concrètes à Lomé" 
        : "Intra-African Trade and Investment Challenges: Decision Makers and Investors Seeking Concrete Solutions in Lomé",
      description: lang === 'fr'
        ? "Lomé accueille la 3e édition de Biashara Afrika pour transformer la ZLECAf en résultats économiques concrets et lever les barrières commerciales."
        : "Lomé hosts the 3rd edition of Biashara Afrika to transform AfCFTA into concrete economic results and remove trade barriers.",
      image: V10,
      date: "16 Mai 2025",
      content: lang === 'fr'
        ? `Lomé, la capitale togolaise, abrite, du 18 au 20 mai, la 3e édition de **Biashara Afrika**, un forum panafricain capital sur le commerce et l’investissement intra-africains, portant sur le thème, « Stimuler la transformation économique de l’Afrique grâce à la ZLECAf ». Placé sous le haut patronage du Président du Conseil, **Faure Essozimna Gnassingbé**, cette plateforme continentale stratégique, qui vise à accélérer le passage de la politique à la pratique, est organisée par le Secrétariat de la Zone de libre-échange continentale africaine (ZLECAf) et le gouvernement togolais. Elle réunit divers acteurs de haut niveau, appelés à identifier les principaux obstacles à la facilitation du commerce intra-africain, mais aussi à mettre en lumière les opportunités d’investissement et de commerce dans les secteurs prioritaires de la ZLECAf.

La Zone de libre-échange continentale africaine (ZLECAf), qui réunit 55 pays au sein d’un marché unique de plus de 1,4 milliard de personnes, avec un PIB combiné dépassant 3,4 trillions de dollars, constitue une avancée majeure et historique vers l’intégration économique régionale. Appelée à redéfinir en profondeur la trajectoire du commerce, de l’industrialisation et de la transformation économique de l’Afrique, la ZLECAf, sur la base d’un accord, s’est dotée d’une architecture juridique et institutionnelle afin de permettre son opérationnalisation, l’alignement au niveau national et l’implication croissante du secteur privé.

### Les défis à surmonter
Mais malgré les avancées avec l’existence de ce cadre juridique et institutionnel, le chemin pour atteindre les objectifs de la Zone est parsemé d’obstacles empêchant de traduire l’Accord en résultats économiques concrets. Parmi ces obstacles, l’on peut retenir notamment :
- la persistance des barrières non tarifaires ;
- l’accès limité au financement du commerce ;
- les contraintes logistiques et d’infrastructure ;
- la fragmentation des chaînes de valeur ;
- la faible participation des Micro, petites et moyennes entreprises (MPME) au commerce transfrontalier.

Dans le même temps, les évolutions de l’économie mondiale, notamment la reconfiguration des chaînes d’approvisionnement, la montée du protectionnisme, les transformations technologiques et l’incertitude géopolitique, créent à la fois des risques et des opportunités pour l’Afrique de bâtir des marchés régionaux plus résistants et intégrés.

### Plusieurs acteurs pour mettre en évidence le rôle central de la ZLECAf
Dans ce contexte, Biashara Afrika 2026 s’impose comme un rendez-vous d’importance capitale, visant à promouvoir les investissements, renforcer les chaînes de valeur régionales, créer des opportunités commerciales, et contribuer à l’élimination des obstacles persistants au commerce intra-africain.

Selon les organisateurs, Biashara Afrika 2026 va regrouper durant trois jours près de 1000 participants, incluant :
- des chefs d’État et de gouvernements africains ;
- les acteurs du secteur privé ;
- les institutions de financement ;
- les fonds souverains ;
- les banques commerciales ;
- les startups ;
- les universités ;
- les centres de réflexion ;
- les analystes ;
- les professionnels des médias.

### Les priorités et plateformes d’action
Les échanges vont s’articuler autour des priorités ayant trait :
- au renforcement du rôle des entreprises africaines à fort potentiel dans l’industrialisation ;
- au développement des chaînes de valeur régionales ;
- à l’accélération de la facilitation des échanges ;
- au commerce numérique ;
- aux systèmes de paiement ;
- aux investissements dans les infrastructures logistiques.

D’autres priorités visent également à :
- consolider le leadership politique ;
- renforcer l’alignement entre priorités nationales et objectifs continentaux ;
- renforcer le dialogue public-privé ;
- favoriser l’accès des MPME, des femmes et des jeunes aux marchés et opportunités de partenariat.

Biashara Afrika 2026 s’articule autour de cinq plateformes d’action :
- **La Deal Room** : annonces d’investissements et conclusion de partenariats commerciaux ;
- **La plateforme des sociétés de commerce** : opérationnalisation des sociétés de commerce de la ZLECAf et structuration des réseaux de distribution ;
- **Le laboratoire de facilitation des échanges** : résolution des obstacles concrets au commerce ;
- **L’accélérateur de chaînes de valeur** : développement de partenariats sectoriels ;
- **La plateforme d’accès au marché pour les PME** : connexion des entreprises aux opportunités commerciales.

En somme, Lomé constitue une étape déterminante dans la concrétisation du potentiel de la ZLECAf ainsi qu’une contribution majeure pour accélérer la transformation économique de l’Afrique et renforcer sa position dans l’économie mondiale.`
        : `Lomé, the Togolese capital, is hosting from May 18 to 20 the 3rd edition of **Biashara Afrika**, a vital pan-African forum focusing on trade and intra-African investment, themed "Boosting Africa's economic transformation through AfCFTA". This strategic platform aims to accelerate the transition from policy to practice.

### Overcoming Obstacles
Despite the legal framework, several barriers remain:
- Persistence of non-tariff barriers;
- Limited access to trade finance;
- Logistics and infrastructure constraints;
- Fragmentation of value chains;
- Low participation of MSMEs in cross-border trade.

### Key Platforms
Biashara Afrika 2026 is built around five specific action platforms:
1. **The Deal Room**: Investment announcements and trade partnerships;
2. **Trade Companies Platform**: Operationalizing AfCFTA trade companies;
3. **Trade Facilitation Lab**: Resolving concrete trade obstacles;
4. **Value Chain Accelerator**: Developing sector partnerships;
5. **MSME Market Access Platform**: Connecting businesses to trade opportunities.

Lomé remains a decisive step in realizing the potential of AfCFTA and contributing to Africa's economic transformation.`
    },
    {
      id: 1,
      title: lang === 'fr' ? "L'impact de la ZLECAf sur le commerce intra-africain" : "The impact of AfCFTA on intra-African trade",
      description: lang === 'fr' 
        ? "Découvrez comment les nouvelles réglementations transforment les échanges commerciaux à travers le continent africain."
        : "Discover how new regulations are transforming trade across the African continent.",
      image: VIS1,
      date: "10 Mai 2025",
      content: lang === 'fr'
        ? "La Phase 2 de la ZLECAf apporte des changements majeurs dans les protocoles d'investissement, de droits de propriété intellectuelle et de politique de concurrence. Ces évolutions sont cruciales pour créer un environnement commercial prévisible et sécurisé pour les investisseurs africains et internationaux. Le forum de Lomé sera l'occasion de détailler ces avancées et de présenter des cas concrets de réussite entrepreneuriale favorisée par ces nouvelles règles."
        : "AfCFTA Phase 2 brings major changes in investment protocols, intellectual property rights, and competition policy. These developments are crucial for creating a predictable and secure business environment for African and international investors. The Lomé forum will be an opportunity to detail these advances and present concrete cases of entrepreneurial success favored by these new rules."
    },
    {
      id: 2,
      title: lang === 'fr' ? "L'innovation digitale au service de l'intégration" : "Digital innovation serving integration",
      description: lang === 'fr'
        ? "Le rôle crucial des technologies numériques dans la facilitation du commerce transfrontalier en Afrique."
        : "The crucial role of digital technologies in facilitating cross-border trade in Africa.",
      image: VIS3,
      date: "12 Mai 2025",
      content: lang === 'fr'
        ? "La numérisation des procédures douanières et l'interopérabilité des systèmes de paiement sont des piliers de l'accélération de la ZLECAf. À Biashara Afrika 2026, nous explorerons comment les Fintechs africaines révolutionnent le transfert de fonds et comment l'intelligence artificielle peut optimiser les chaînes d'approvisionnement continentales. L'intégration n'est plus seulement physique mais aussi numérique."
        : "The digitization of customs procedures and the interoperability of payment systems are pillars of AfCFTA acceleration. At Biashara Afrika 2026, we will explore how African Fintechs are revolutionizing remittances and how artificial intelligence can optimize continental supply chains. Integration is no longer just physical but also digital."
    },
    {
      id: 3,
      title: lang === 'fr' ? "Le Togo, hub logistique de l'Afrique de l'Ouest" : "Togo, logistics hub of West Africa",
      description: lang === 'fr'
        ? "Pourquoi le Port Autonome de Lomé est devenu un acteur incontournable du commerce régional."
        : "Why the Autonomous Port of Lomé has become a key player in regional trade.",
      image: VIS4,
      date: "15 Mai 2025",
      content: lang === 'fr'
        ? "Avec ses infrastructures modernes et son tirant d'eau exceptionnel, le Port de Lomé se positionne comme la porte d'entrée privilégiée pour les pays de l'hinterland. Cet article analyse les investissements récents dans les corridors logistiques reliant le Togo au Burkina Faso, au Mali et au Niger, illustrant parfaitement la vision d'une Afrique interconnectée."
        : "With its modern infrastructure and exceptional draft, the Port of Lomé positions itself as the preferred gateway for hinterland countries. This article analyzes recent investments in logistics corridors linking Togo to Burkina Faso, Mali, and Niger, perfectly illustrating the vision of an interconnected Africa."
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

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp', post: BlogPost) => {
    const url = `${window.location.origin}${window.location.pathname}?blog=${post.id}`;
    const text = `${post.title} - ${post.description} \n\nDécouvrez l'article complet ici : ${url}`;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

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
        openCatalogue={() => setIsCatalogueOpen(true)}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-light">
        <div className="absolute inset-0 bg-brand-light">
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            src={heroImage} 
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt="Biashara Afrika Hero Background"
            loading="eager"
            decoding="async"
          />
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
                    loading="eager"
                    decoding="async"
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






            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="relative z-30 mt-8 flex justify-center"
            >
              <button 
                onClick={() => setIsCatalogueOpen(true)}
                className="w-full sm:w-auto px-12 py-5 bg-brand-red hover:bg-[#a02a1b] text-white font-black rounded-sm shadow-[0_20px_40px_rgba(183,49,32,0.15)] hover:shadow-[0_25px_50px_rgba(183,49,32,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest text-[10px] border border-brand-red/20 cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                {t.hero.ctaCatalogue}
              </button>
            </motion.div>

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
                  loading="lazy"
                  decoding="async"
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

          {/* CATALOGUE BANNER - PREMIUM EDITORIAL SHOWCASE */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-28 relative rounded-[2.5rem] bg-[#036B21] text-white overflow-hidden shadow-[0_30px_70px_rgba(3,107,33,0.25)] border border-white/10"
          >
            {/* Elegant Background Accents */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(212,175,55,0.12),_transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-green" />
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />
            
            <div className="relative z-10 p-8 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Editorial Information & Features */}
              <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex flex-wrap gap-2.5 items-center justify-center lg:justify-start mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-brand-gold/20 text-brand-gold border border-brand-gold/30 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                    {lang === 'fr' ? 'Catalogue Officiel' : 'Official Catalogue'}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/45 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    2026
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold font-display leading-[1.12] mb-6 text-white tracking-tight">
                  {lang === 'fr' ? (
                    <>
                      Découvrez le <span className="text-brand-gold">Catalogue des Exposants</span>
                    </>
                  ) : (
                    <>
                      Explore the <span className="text-brand-gold">Exhibitors Catalogue</span>
                    </>
                  )}
                </h3>

                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-2xl font-light">
                  {lang === 'fr' 
                    ? "Le guide de référence incontournable pour appréhender les opportunités uniques du marché unique africain, retrouver la liste des participants, et optimiser vos échanges avec les exposants du Forum à Lomé." 
                    : "The essential reference guide to master exclusive opportunities in the single African market, find the list of participants, and optimize your networking with the exhibitors at the Lomé Forum."}
                </p>

                {/* Key Highlights Inside the catalog */}
                <div className="grid sm:grid-cols-2 gap-4 w-full text-left mb-10 border-t border-b border-white/10 py-8">
                  {lang === 'fr' ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/80"><strong className="text-white font-semibold">Profils Pays :</strong> Fiches économiques exclusives</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/80"><strong className="text-white font-semibold">Règles d'Origine :</strong> Synthèse technique ZLECAf</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/80"><strong className="text-white font-semibold">Networking :</strong> Listes d'affaires & VIP Lomé 2026</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/80"><strong className="text-white font-semibold">Exposition :</strong> Plans & Emplacement des Exposants</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/80"><strong className="text-white font-semibold">Country Sheets:</strong> Exclusive macroeconomic data</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/80"><strong className="text-white font-semibold">Rules of Origin:</strong> Simplified AfCFTA analysis</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/80"><strong className="text-white font-semibold">Networking:</strong> Strategic insights & local contacts</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 text-brand-gold mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-white/80"><strong className="text-white font-semibold">Exhibition:</strong> Map & Booth Locator for Exhibitors</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Call To Actions */}
                <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
                  <motion.button
                    onClick={() => setIsCatalogueOpen(true)}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-white text-brand-green font-black text-xs uppercase tracking-widest rounded-sm shadow-[0_15px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.15)] transition-all duration-300 flex items-center justify-center gap-3 shrink-0 cursor-pointer"
                  >
                    <FileText className="w-4.5 h-4.5" />
                    {lang === 'fr' ? 'Consulter en ligne' : 'Read Live Online'}
                  </motion.button>
                  
                  <motion.a
                    href={cataloguePdf}
                    download="CATALOGUE_BIASHARA_AFRIKA_2026.pdf"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-[#a02a1b] text-white font-black text-xs uppercase tracking-widest rounded-sm shadow-[0_15px_30px_rgba(183,49,32,0.2)] transition-all duration-300 flex items-center justify-center gap-3 shrink-0 cursor-pointer"
                  >
                    <Download className="w-4.5 h-4.5 text-white" />
                    {lang === 'fr' ? 'Télécharger (.PDF)' : 'Download (.PDF)'}
                  </motion.a>
                </div>
              </div>
              
              {/* Right Column: Premium 3D Magazine Mockup Interactive Preview */}
              <div className="lg:col-span-5 flex justify-center items-center lg:pl-6">
                <div 
                  className="relative group cursor-pointer select-none"
                  onClick={() => setIsCatalogueOpen(true)}
                >
                  {/* Subtle pulsing background aura */}
                  <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-brand-gold/15 transition-colors duration-500 blur-[50px] rounded-[2rem] -z-10" />

                  {/* 3D Perspective Wrap */}
                  <div className="perspective-1200 py-6 px-4">
                    <motion.div
                      whileHover={{ 
                        rotateY: -18, 
                        rotateX: 12, 
                        scale: 1.06,
                        boxShadow: "25px 35px 60px rgba(0,0,0,0.6)"
                      }}
                      transition={{ type: "spring", stiffness: 90, damping: 14 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="w-[260px] h-[350px] md:w-[290px] md:h-[390px] rounded-r-2xl bg-gradient-to-br from-[#0A3D18] via-[#021808] to-[#011B07] relative shadow-[12px_24px_50px_rgba(0,0,0,0.55)] border-l-[8px] border-[#D4AF37] overflow-hidden"
                    >
                      {/* Paper Thickness/Edge Simulation in 3D */}
                      <div className="absolute right-[-1px] top-0 bottom-0 w-[4px] bg-white/10 z-10" />
                      
                      {/* Spine Crease shading */}
                      <div className="absolute left-0 top-0 bottom-0 w-[16px] bg-gradient-to-r from-black/50 via-white/10 to-transparent z-20" />
                      
                      {/* Decorative Gold Leaf Foil elements on cover */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.15),_transparent_70%)] pointer-events-none" />
                      
                      {/* Design pattern overlay on cover */}
                      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,_#fff_25%,_transparent_25%,_transparent_75%,_#fff_75%,_#fff),_linear-gradient(45deg,_#fff_25%,_transparent_25%,_transparent_75%,_#fff_75%,_#fff)] [background-size:24px_24px] [background-position:0_0,_12px_12px] pointer-events-none" />

                      {/* Cover Content layout */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">
                        
                        {/* Top Cover Section */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold bg-black/40 border border-brand-gold/30 px-2 py-0.5 rounded-sm">
                            FORUM 2026
                          </span>
                          <span className="text-[9px] font-mono font-bold text-white/50 tracking-wider">
                            LOMÉ - TOGO
                          </span>
                        </div>
                        
                        {/* Middle Title Cover Section */}
                        <div className="my-auto py-2 flex flex-col gap-3">
                          <div className="w-10 h-1 bg-brand-red rounded-full" />
                          
                          <h4 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-wider leading-tight text-white drop-shadow-md">
                            BIASHARA<br />
                            <span className="text-brand-gold">AFRIKA</span>
                          </h4>
                          
                          <p className="text-[9px] font-black text-brand-gold uppercase tracking-[0.15em] border-t border-brand-gold/15 pt-2 inline-block">
                            EXPOSITION & CONFÉRENCES
                          </p>
                          
                          <div className="text-[10px] text-white/80 leading-relaxed font-sans mt-2">
                            {lang === 'fr' 
                              ? 'Brochure & Catalogue des Exposants' 
                              : 'Exhibitors Catalogue & Business Guide'}
                          </div>
                        </div>

                        {/* Bottom Cover Section */}
                        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[8px] font-black tracking-[0.2em] text-white/40 uppercase">OFFICIAL DOCUMENT</span>
                            <span className="text-[9px] font-bold text-brand-gold">UNION AFRICAINE</span>
                          </div>
                          
                          {/* Guinea Flag Ribbon color tabs */}
                          <div className="flex gap-1 shadow-sm">
                            <span className="w-2.5 h-3.5 bg-brand-red rounded-sm" />
                            <span className="w-2.5 h-3.5 bg-brand-gold rounded-sm" />
                            <span className="w-2.5 h-3.5 bg-brand-green rounded-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Glossy sheen swipe animation effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none transform -skew-x-12 translate-x-[-120%] group-hover:translate-x-[150%] transition-transform duration-[1400ms] ease-out" />
                    </motion.div>
                  </div>

                  {/* Clicking Invitation Ribbon badge */}
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: [0.9, 1, 0.9] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute bottom-1 right-2 bg-gradient-to-r from-brand-red to-[#A51F0E] text-white text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    {lang === 'fr' ? 'Consulter le PDF' : 'Open PDF'}
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>
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
                          loading="lazy"
                          decoding="async"
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

      {/* RETROSPECTIVE & BILAN SECTION */}
      <section id="bilan" className="section-padding relative overflow-hidden scroll-mt-20 bg-[#1F9345] text-white">
        {/* Premium Luminous Connections & Cultural African Backdrop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Dynamic play of lights - gold sun-ray glows and soft red warm spotlights */}
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.4),transparent_65%)] rounded-full blur-[100px] opacity-80" />
          <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(183,49,32,0.25),transparent_70%)] rounded-full blur-[120px] opacity-75" />
          <div className="absolute top-[40%] left-[60%] w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] rounded-full blur-[90px]" />
          
          {/* Light Mesh Overlay Grid */}
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 2px, transparent 0)', backgroundSize: '32px 32px' }} />

          {/* Abstract fluid curves and trade flow connections (SVG) */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.16] stroke-white stroke-[1.2] fill-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            {/* Dynamic trade flow curves */}
            <path d="M-50,300 C150,150 350,450 550,250 C750,50 900,350 1050,200" />
            <path d="M-50,600 C200,450 400,750 650,550 C900,350 950,650 1050,450" strokeDasharray="6 6" />
            <path d="M-50,850 C250,700 350,900 600,650 C850,400 900,800 1050,750" strokeOpacity="0.5" />

            {/* Pulse connection points representing continental cities/hubs */}
            <g className="fill-brand-gold stroke-brand-gold/40">
              <circle cx="150" cy="225" r="5" className="animate-pulse" />
              <circle cx="350" cy="385" r="7" />
              <circle cx="550" cy="250" r="10" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="550" cy="250" r="5" />
              <circle cx="650" cy="550" r="6" />
              <circle cx="900" cy="425" r="8" className="animate-pulse" />
            </g>
          </svg>

          {/* Exquisite African Geometric Watermark Motifs */}
          <div 
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z M30 15 L45 30 L30 45 L15 30 Z M30 22 L38 30 L30 38 L22 30 Z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 flex flex-col items-center"
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] bg-white/20 text-brand-gold border border-brand-gold/30 px-6 py-2.5 rounded-full shadow-lg backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
                {lang === 'fr' ? 'Rapports & Rétrospective' : 'Reports & Retrospective'}
              </span>
              
              <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-[1.12]">
                {lang === 'fr' ? (
                  <>
                    Bilan du <br/>
                    <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent italic font-serif">BIASHARA 2026</span>
                  </>
                ) : (
                  <>
                    Outcome of <br/>
                    <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent italic font-serif">BIASHARA 2026</span>
                  </>
                )}
              </h2>
              
              <div className="h-1 w-24 bg-gradient-to-r from-brand-red via-brand-gold to-white mx-auto rounded-full" />
              
              <p className="text-white/95 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                {lang === 'fr' 
                  ? "Découvrez l’impact économique, technologique et diplomatique d'un sommet panafricain d'envergure. Les chiffres officiels illustrent l'élan historique du forum d'affaires tenu à Lomé pour l'accélération d'un marché unique africain souverain."
                  : "Discover the economic, technological and diplomatic impact of a far-reaching pan-African summit. These official figures illustrate the historic momentum generated in Lomé to accelerate a sovereign single African market."}
              </p>

              {/* RE-LIVE THE PROGRAM BUTTON */}
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(183, 49, 32, 0.4)",
                  borderColor: "rgba(255,255,255,1)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setModalActiveTab(0);
                  setIsProgramModalOpen(true);
                }}
                className="mt-6 px-10 py-5 bg-gradient-to-r from-brand-red via-[#CE3724] to-brand-gold text-white text-[11px] font-black uppercase tracking-[0.25em] rounded-full shadow-2xl border border-white/20 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer select-none"
              >
                <Calendar className="w-4 h-4 text-white animate-bounce" />
                <span>{lang === 'fr' ? 'Revivre le programme' : 'Revivre le programme'}</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Grid of numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative mb-24">
            {[
              { 
                value: 48, 
                suffix: "", 
                icon: <Globe2 className="w-7 h-7 text-white" />, 
                title: lang === 'fr' ? "Pays Représentés" : "Countries Represented", 
                desc: lang === 'fr' ? "Une mobilisation mondiale avec des participants venant de 48 pays." : "A massive global gathering bringing together participants from 48 nations." 
              },
              { 
                value: 700, 
                suffix: "+", 
                icon: <Store className="w-7 h-7 text-white" />, 
                title: lang === 'fr' ? "Exposants Actifs" : "Active Exhibitors", 
                desc: lang === 'fr' ? "Plus de 700 exposants de secteurs stratégiques ont exposé leurs produits." : "More than 700 industry leaders exhibiting premium services and products." 
              },
              { 
                value: 197, 
                suffix: "", 
                icon: <Building2 className="w-7 h-7 text-white" />, 
                title: lang === 'fr' ? "Stands Nationaux" : "National Booths", 
                desc: lang === 'fr' ? "197 pavillons togolais mettant en relief l'entrepreneuriat national." : "197 Togolese booths highlighting the dynamism of domestic enterprises." 
              },
              { 
                value: 97, 
                suffix: "", 
                icon: <Globe className="w-7 h-7 text-white" />, 
                title: lang === 'fr' ? "Stands Étrangers" : "Foreign Booths", 
                desc: lang === 'fr' ? "97 stands internationaux incarnant l'intégration économique intra-africaine." : "97 international booths demonstrating direct regional trading collaboration." 
              },
              { 
                value: 15, 
                suffix: "", 
                icon: <MessageCircle className="w-7 h-7 text-white" />, 
                title: lang === 'fr' ? "Panels Stratégiques" : "Strategic Panels", 
                desc: lang === 'fr' ? "15 panels thématiques animés par des leaders d’opinion et ministres d'État." : "15 panels focused on structural policies, lead by ministers and business leaders." 
              },
              { 
                value: 5, 
                suffix: "", 
                isPrefixZero: true,
                icon: <Calendar className="w-7 h-7 text-white" />, 
                title: lang === 'fr' ? "Side Events Clés" : "Key Side Events", 
                desc: lang === 'fr' ? "05 side events majeurs dédiés aux coopérations sectorielles." : "05 high-impact side events focusing on targeted continental investment portfolios." 
              },
              { 
                valueText: lang === 'fr' ? "Plusieurs" : "Multiple", 
                icon: <FileText className="w-7 h-7 text-white" />, 
                title: lang === 'fr' ? "Thématiques Abordées" : "Thematic Tracks", 
                desc: lang === 'fr' ? "La logistique, la fiscalité douanière, le transport et le financement du commerce." : "Crucial tracks including logistics, customs taxes, transit and trade financing." 
              },
              { 
                valueText: lang === 'fr' ? "Actives" : "Deployed", 
                icon: <TrendingUp className="w-7 h-7 text-white" />, 
                title: lang === 'fr' ? "Plateformes d'Actions" : "Action Platforms", 
                desc: lang === 'fr' ? "Déploiement de plateformes d’actions stratégiques à fort impact économique." : "Unveiling robust cooperative action platforms to structure pan-African partnerships." 
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                className="group relative p-8 rounded-[2.25rem] bg-white text-slate-900 border-2 border-brand-gold/15 hover:border-brand-red shadow-[0_15px_45px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative mesh water-mark style element inside card */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-gold/[0.04] group-hover:bg-brand-red/[0.03] rounded-full blur-xl transition-colors" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center border border-white/10 group-hover:bg-brand-red transition-all duration-500 shadow-md">
                      {stat.icon}
                    </div>
                    <span className="font-mono text-[9px] font-black text-brand-gold uppercase tracking-widest">
                      STAT_0{i + 1}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tighter group-hover:text-brand-green transition-colors duration-500">
                      {stat.valueText ? (
                        stat.valueText
                      ) : (
                        <>
                          {stat.isPrefixZero && "0"}
                          <Counter value={stat.value ?? 0} duration={1.5} />
                        </>
                      )}
                    </span>
                    {stat.suffix && (
                      <span className="text-2xl font-black text-brand-red font-display">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  <h3 className="text-md font-bold text-slate-900 mb-2 leading-snug group-hover:text-brand-green transition-colors duration-300">
                    {stat.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
                
                <div className="w-full h-[1px] bg-slate-100 mt-6" />
              </motion.div>
            ))}
          </div>

          {/* MOU SUB-SECTION */}
          <div className="border-t border-white/20 pt-20 mt-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 font-display"
              >
                <div className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] bg-white/20 text-brand-gold border border-brand-gold/30 px-4 py-2 rounded-full backdrop-blur-md">
                  <Handshake className="w-3.5 h-3.5" />
                  {lang === 'fr' ? 'Accords & Coopération' : 'Bilateral Agreements'}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  {lang === 'fr' ? "Partenariats & Memorandum of Understanding" : "Partnerships & Memorandum of Understanding"}
                </h3>
                <div className="h-0.5 w-16 bg-brand-gold mx-auto rounded-full" />
                <p className="text-white/90 text-xs md:text-sm font-medium">
                  {lang === 'fr' 
                    ? "Les memorandums d'entente officiels scellés durant le BIASHARA 2026, posant des fondations solides pour faciliter le commerce continental et bilatéral."
                    : "Official memorandums of understanding sealed during BIASHARA 2026, delivering concrete milestones to boost regional and continental trade."}
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {[
                {
                  partyA: "AfCFTA",
                  partyB: "ITC",
                  title: "AfCFTA – ITC",
                  tag: lang === 'fr' ? "E-Commerce & Inclusion" : "E-Commerce & Youth Inclusion",
                  desc: lang === 'fr' 
                    ? "Soutien technique ciblé pour renforcer l'adoption du numérique, l'expansion du commerce transfrontalier en ligne et l'autonomisation économique des femmes et jeunes entrepreneurs africains."
                    : "Dedicated technical support to enhance digital trade adoption, e-commerce networks, and boost economic integration for African women and youth entrepreneurs."
                },
                {
                  partyA: "AfCFTA",
                  partyB: "Rendeavour",
                  title: "AfCFTA – Rendeavour",
                  tag: lang === 'fr' ? "Zones Industrielles" : "Industrial Zones",
                  desc: lang === 'fr' 
                    ? "Accompagnement opérationnel pour le développement de zones économiques spéciales (ZES) de nouvelle génération et d'écosystèmes logistiques intégrés."
                    : "Strategic cooperation aiming to fast-track modern Special Economic Zones (SEZ) and integrated structural industrial parks across regional territories."
                },
                {
                  partyA: "AfCFTA",
                  partyB: "Scanning Systems",
                  title: "AfCFTA – Scanning Systems",
                  tag: lang === 'fr' ? "Facilitation Douanière" : "Border Facilitation",
                  desc: lang === 'fr' 
                    ? "Coopération axée sur la modernisation et l'interconnexion technologique des postes de contrôle frontaliers pour minimiser les délais de transit des marchandises."
                    : "Focused partnership enhancing technical interconnection and modern diagnostic scanners at border systems to minimize freight transit times."
                },
                {
                  partyA: "CCI-Togo",
                  partyB: "FEWACCI",
                  title: "CCI-Togo – FEWACCI",
                  tag: lang === 'fr' ? "Dialogue Régional" : "Chamber Network",
                  desc: lang === 'fr' 
                    ? "Mécanisme conjoint pour renforcer la synergie d'affaires entre chambres consulaires ouest-africaines et accélérer la réalisation des projets d'infrastructures communes de la CEDEAO."
                    : "Joint roadmap to unite consul chambers across West Africa, boosting private-public initiatives and key infrastructure financing inside ECOWAS."
                },
                {
                  partyA: "CCI-Togo",
                  partyB: "CCI-Nigeria",
                  title: "CCI-Togo – Chamber of Commerce of Nigeria",
                  tag: lang === 'fr' ? "Corridor Bilatéral" : "Bilateral Trade",
                  desc: lang === 'fr' 
                    ? "Protocole visant à fluidifier le corridor commercial entre le Togo et le Nigeria et à encourager les joint-ventures et échanges commerciaux inter-entreprises directs."
                    : "Bilateral agreement driving direct merchant channels, logistics cooperation, and co-investment projects between businesses in Togo and Nigeria."
                }
              ].map((mou, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                  className="group relative p-6 rounded-[2rem] bg-white text-slate-800 border-2 border-brand-gold/15 hover:border-brand-red shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Visual Connected Treaty Line */}
                    <div className="flex items-center justify-between gap-3 mb-6 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 group-hover:bg-brand-green/5 transition-colors">
                      <div className="text-[10px] uppercase tracking-wider font-extrabold text-brand-green bg-brand-green/5 px-2.5 py-1 rounded border border-brand-green/10">
                        {mou.partyA}
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center relative min-w-[30px]">
                        <span className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold/55 to-transparent" />
                        <Handshake className="w-5 h-5 text-brand-gold relative z-10 bg-white px-1.5 rounded-full border border-brand-gold/10" />
                      </div>
                      
                      <div className="text-[10px] uppercase tracking-wider font-extrabold text-brand-red bg-brand-red/5 px-2.5 py-1 rounded border border-brand-red/10">
                        {mou.partyB}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-md font-bold text-slate-950 group-hover:text-brand-green transition-colors">
                        {mou.title}
                      </h4>
                      <span className="text-[8px] font-black uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full border border-brand-gold/5">
                        {mou.tag}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs font-light leading-relaxed">
                      {mou.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-end text-[10px] font-bold text-brand-green opacity-80 group-hover:opacity-100 transition-opacity gap-1">
                    <span>{lang === 'fr' ? "Accord Validé" : "Agreement Verified"}</span>
                    <span className="w-1.5 h-1.5 bg-[#14b8a6] rounded-full inline-block animate-ping" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Immersive bottom row wrap up quote badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="inline-block relative text-xs md:text-sm italic font-medium px-8 py-4 bg-white/20 border border-white/30 rounded-2xl text-white/95 max-w-2xl mx-auto shadow-lg backdrop-blur-md">
              {lang === 'fr'
                ? "« Le bilan de Biashara Afrika 2026 s'impose comme le jalon capital pour concrétiser la feuille de route du commerce intra-africain et des accords diplomatiques. »"
                : "“The BIASHARA 2026 outcomes stand as a key milestone in actualizing the intra-African trade blueprint and regional diplomatic alliances.”"}
            </p>
          </motion.div>
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
                    <img src={logo} className="max-w-full max-h-full object-contain pointer-events-none filter brightness-90 hover:brightness-110 transition-all" alt="Partner" loading="lazy" decoding="async" />
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
                    <img src={logo} className="max-w-full max-h-full object-contain pointer-events-none filter brightness-90 hover:brightness-110 transition-all" alt="Partner" loading="lazy" decoding="async" />
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
            
            <div className="flex flex-wrap justify-center p-1.5 bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] backdrop-blur-md rounded-2xl w-fit mx-auto border border-black/5 gap-2">
              <button
                onClick={() => setGalleryTab('events')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  galleryTab === 'events' 
                    ? 'bg-brand-red text-white shadow-xl' 
                    : 'text-black/40 hover:text-black'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                {t.gallery.eventsTab}
              </button>
              <button
                onClick={() => setGalleryTab('blog')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  galleryTab === 'blog' 
                    ? 'bg-brand-gold text-white shadow-xl' 
                    : 'text-black/40 hover:text-black'
                }`}
              >
                <FileText className="w-4 h-4" />
                {t.gallery.blogTab}
              </button>
              <button
                onClick={() => setGalleryTab('news')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  galleryTab === 'news' 
                    ? 'bg-brand-green text-white shadow-xl' 
                    : 'text-black/40 hover:text-black'
                }`}
              >
                <Newspaper className="w-4 h-4" />
                {t.gallery.newsTab}
              </button>
              <button
                onClick={() => setGalleryTab('videos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  galleryTab === 'videos' 
                    ? 'bg-brand-red text-white shadow-xl' 
                    : 'text-black/40 hover:text-black'
                }`}
              >
                <Video className="w-4 h-4" />
                {t.gallery.videosTab}
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {galleryTab === 'blog' ? (
              <motion.div
                key="blog"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-16"
              >
                {/* Featured Post (Latest) */}
                {BLOG_POSTS.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    className="relative group cursor-pointer overflow-hidden rounded-[3.5rem] bg-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border border-black/5"
                    onClick={() => setSelectedBlogPost(BLOG_POSTS[0])}
                  >
                    <div className="flex flex-col lg:flex-row min-h-[500px]">
                      <div className="lg:w-3/5 relative overflow-hidden">
                        <img 
                          src={BLOG_POSTS[0].image} 
                          alt={BLOG_POSTS[0].title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden" />
                      </div>
                      <div className="lg:w-2/5 p-8 md:p-14 flex flex-col justify-center relative bg-white">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="px-5 py-2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-brand-red/20">
                            {lang === 'fr' ? 'À LA UNE' : 'FEATURED'}
                          </span>
                          <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">
                            • {BLOG_POSTS[0].date}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight group-hover:text-brand-green transition-colors">
                          {BLOG_POSTS[0].title}
                        </h3>
                        <p className="text-black/60 text-lg leading-relaxed mb-10 line-clamp-4">
                          {BLOG_POSTS[0].description}
                        </p>
                        <div className="flex items-center gap-3 text-brand-green font-black text-xs uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                          {lang === 'fr' ? 'Lire l\'article' : 'Read Article'}
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Others Slider */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-8 px-2">
                    <h4 className="text-sm font-black text-black/30 uppercase tracking-[0.4em]">
                      {lang === 'fr' ? 'Plus d\'actualités' : 'More News'}
                    </h4>
                    <div className="h-px flex-1 bg-black/5 mx-8" />
                  </div>
                  
                  <div className="overflow-x-auto no-scrollbar pb-8 -mx-4 px-4">
                    <div className="flex gap-8 w-max">
                      {BLOG_POSTS.slice(1).map((post, i) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ y: -10 }}
                          className="w-[350px] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5 group flex flex-col h-full cursor-pointer"
                          onClick={() => setSelectedBlogPost(post)}
                        >
                          <div className="aspect-[16/10] overflow-hidden relative">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black text-brand-red uppercase tracking-widest shadow-lg">
                              {post.date}
                            </div>
                          </div>
                          <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-black mb-4 group-hover:text-brand-green transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-black/60 text-xs leading-relaxed mb-8 line-clamp-3">
                              {post.description}
                            </p>
                            <div className="mt-auto inline-flex items-center gap-2 text-brand-green font-black text-[10px] uppercase tracking-widest group/btn group-hover:gap-4 transition-all">
                              {lang === 'fr' ? 'Lire l\'article' : 'Read Article'}
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : galleryTab === 'videos' ? (
              <motion.div
                key="videos"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {VIDEO_DATA.map((video, i) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-black rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video cursor-pointer border border-white/5"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 md:w-20 md:h-20 bg-brand-red rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(255,27,51,0.5)] group-hover:bg-white group-hover:text-brand-red transition-all duration-500"
                      >
                        <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-1" />
                      </motion.div>
                      <h4 className="mt-6 text-white font-black text-center text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {video.title}
                      </h4>
                    </div>
                    <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                       MEDIA HUB
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : galleryTab === 'news' ? (
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
                      <img src={GALLERY_POSTS[0].image} className="w-full h-full object-cover opacity-100 transition-all duration-1000 group-hover:scale-105" alt="Featured" loading="lazy" decoding="async" />
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
                          <img src={post.image} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Secondary" loading="lazy" decoding="async" />
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
                            <img src={post.image} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Post" loading="lazy" decoding="async" />
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
                              loading="lazy"
                              decoding="async"
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

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12 bg-black/98 backdrop-blur-3xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(255,27,51,0.2)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-8 right-8 z-[110] w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all group"
              >
                <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
              </button>
              
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
              
              <div className="absolute bottom-0 inset-x-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none">
                <span className="inline-block px-5 py-2 bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-xl">
                  BIASHARA TV LIVE
                </span>
                <h3 className="text-white font-bold text-3xl md:text-5xl tracking-tight uppercase leading-none max-w-3xl drop-shadow-2xl">
                  {selectedVideo.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* BLOG POST MODAL */}
      <AnimatePresence>
        {selectedBlogPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedBlogPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/10 hover:bg-black/20 text-black rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                onClick={() => setSelectedBlogPost(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="overflow-y-auto no-scrollbar">
                <div className="aspect-[21/9] w-full relative">
                  <img src={selectedBlogPost.image} className="w-full h-full object-cover" alt={selectedBlogPost.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-8 md:p-14">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-5 py-2 bg-brand-red/5 text-brand-red font-black text-[10px] uppercase tracking-widest rounded-full border border-brand-red/10">
                      {selectedBlogPost.date}
                    </span>
                    <div className="h-px flex-1 bg-black/5" />
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-black mb-10 leading-tight">
                    {selectedBlogPost.title}
                  </h2>

                  <div className="prose prose-lg max-w-none text-black/70 leading-relaxed space-y-6">
                    <p className="text-xl text-black font-medium leading-relaxed italic border-l-4 border-brand-green pl-6 py-2 bg-brand-green/[0.02]">
                      {selectedBlogPost.description}
                    </p>
                    <div className="prose prose-lg max-w-none text-black/80 leading-relaxed">
                      <ReactMarkdown>{selectedBlogPost.content}</ReactMarkdown>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="mt-16 pt-10 border-t border-black/5 space-y-10">
                    <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="text-center md:text-left flex-1">
                        <p className="text-[10px] font-black text-black/40 uppercase tracking-[0.3em] mb-2">Lien unique de l'article</p>
                        <p className="text-xs font-mono text-brand-green break-all select-all">{`${window.location.origin}${window.location.pathname}?blog=${selectedBlogPost.id}`}</p>
                      </div>
                      <button 
                        onClick={() => {
                          const link = `${window.location.origin}${window.location.pathname}?blog=${selectedBlogPost.id}`;
                          navigator.clipboard.writeText(link);
                          setCopySuccess(true);
                          setTimeout(() => setCopySuccess(false), 2000);
                        }}
                        className={`flex items-center gap-2 px-8 py-4 ${copySuccess ? 'bg-brand-green text-white' : 'bg-white text-black'} text-[10px] font-black uppercase tracking-widest rounded-2xl border border-black/5 shadow-sm hover:bg-brand-green hover:text-white transition-all active:scale-95 shrink-0`}
                      >
                        {copySuccess ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copySuccess ? (lang === 'fr' ? 'Copié !' : 'Copied!') : (lang === 'fr' ? 'Copier le lien' : 'Copy link')}
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-[10px] font-black text-black/40 uppercase tracking-[0.3em] mb-6">Partager sur les réseaux</p>
                      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
                        <button 
                          onClick={() => handleShare('facebook', selectedBlogPost)}
                          className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all hover:-translate-y-2 shadow-sm"
                        >
                          <Facebook className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => handleShare('twitter', selectedBlogPost)}
                          className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all hover:-translate-y-2 shadow-sm"
                        >
                          <Twitter className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => handleShare('linkedin', selectedBlogPost)}
                          className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all hover:-translate-y-2 shadow-sm"
                        >
                          <Linkedin className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => handleShare('whatsapp', selectedBlogPost)}
                          className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all hover:-translate-y-2 shadow-sm"
                        >
                          <MessageCircle className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 p-6 bg-white rounded-2xl shadow-2xl z-20 border border-black/5 hidden md:block">
                  <p className="text-[10px] font-black text-brand-red uppercase tracking-widest mb-2">{t.practical.exploreTogo}</p>
                  <div className="flex -space-x-3">
                    {t.practical.placesToVisit.items.map((item: any, i: number) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-brand-light">
                        <img src={item.image} className="w-full h-full object-cover" alt={item.name} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-white">
                  <img 
                    src={Exploration} 
                    className="w-full h-full object-cover" 
                    alt="Togo" 
                    loading="lazy"
                    decoding="async"
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

      {/* IMMERSIVE PROGRAM MODAL */}
      <AnimatePresence>
        {isProgramModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8"
          >
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-md" 
              onClick={() => setIsProgramModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-slate-50 w-full max-w-6xl max-h-[92vh] md:max-h-[88vh] overflow-hidden rounded-[2.5rem] relative shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col border border-white/25 z-10"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-10 border-b border-black/5 flex items-start justify-between bg-gradient-to-r from-brand-green to-[#032e0f] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 opacity-15 rotate-12 pointer-events-none">
                  <Calendar className="w-64 h-64 text-brand-gold font-light" />
                </div>
                
                <div className="relative z-10">
                  <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.4em] block mb-3">
                    {lang === 'fr' ? "DOCUMENT OFFICIEL • RETROSPECTIVE" : "OFFICIAL DOCUMENT • RETROSPECTIVE"}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-3">
                    {lang === 'fr' ? "Programme Officiel" : "Official Program"}
                  </h2>
                  <p className="text-white/80 max-w-2xl text-xs md:text-sm font-light leading-relaxed">
                    {lang === 'fr' 
                      ? "Retrouvez l'intégralité des sessions stratégiques, tables rondes ministérielles et panels d'experts qui ont structuré le Forum BIASHARA 2026."
                      : "Find all the strategic sessions, ministerial roundtables and expert panels that structured the BIASHARA 2026 Forum."}
                  </p>
                </div>
                
                <button 
                  onClick={() => setIsProgramModalOpen(false)}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all cursor-pointer relative z-10 self-start"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Day Selector Tabs inside Modal */}
              <div className="bg-white px-6 md:px-10 py-5 border-b border-black/5 flex items-center justify-between flex-wrap gap-4 relative z-10">
                <div className="flex flex-wrap gap-3">
                  {PROGRAM_DATA[lang].map((day, i) => (
                    <button
                      key={i}
                      onClick={() => setModalActiveTab(i)}
                      className={`relative px-6 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 overflow-hidden ${
                        modalActiveTab === i 
                          ? 'text-white bg-brand-red' 
                          : 'text-black/60 bg-slate-100 hover:text-black hover:bg-slate-200'
                      }`}
                    >
                      <span className="relative z-10">{day.day}</span>
                    </button>
                  ))}
                </div>
                
                <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest font-mono">
                  {PROGRAM_DATA[lang][modalActiveTab].day} • Lomé, Togo
                </span>
              </div>
              
              {/* Modal Content Scroll Area */}
              <div className="overflow-y-auto flex-1 p-6 md:p-10 bg-slate-50">
                <div className="max-w-4xl mx-auto space-y-12">
                  <div className="text-center mb-10">
                    <motion.h3 
                      key={modalActiveTab}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl md:text-4xl font-display font-bold text-brand-green mb-3"
                    >
                      {PROGRAM_DATA[lang][modalActiveTab].title}
                    </motion.h3>
                    <p className="text-slate-500 font-light text-sm italic max-w-xl mx-auto border-t border-black/5 pt-4">
                      {PROGRAM_DATA[lang][modalActiveTab].subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    {PROGRAM_DATA[lang][modalActiveTab].items.map((item, j) => (
                      <motion.div 
                        key={j}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: j * 0.05, duration: 0.5 }}
                        className="group relative bg-white rounded-[2rem] p-6 md:p-10 border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.05)] transition-all duration-300"
                      >
                        {/* Premium Accent Line */}
                        <div className="absolute top-0 left-10 w-12 h-1 bg-brand-green rounded-full group-hover:w-24 transition-all duration-500" />
                        
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                          {/* Time Column */}
                          <div className="md:w-40 shrink-0">
                            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-red text-white font-black text-[10px] uppercase tracking-[0.15em] shadow-md shadow-brand-red/10">
                              <Clock className="w-3.5 h-3.5" />
                              {item.time}
                            </div>
                          </div>

                          {/* Content Column */}
                          <div className="flex-1">
                            <h4 className="text-xl md:text-2xl font-bold text-black mb-4 leading-snug group-hover:text-brand-green transition-colors duration-300">
                              {item.title}
                            </h4>
                            
                            {item.description && (
                              <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
                                {item.description}
                              </p>
                            )}

                            {/* Detail Grids inside Modal */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                              {/* Keynotes & Speakers */}
                              {(item.keynotes || item.speakers) && (
                                <div className="space-y-3">
                                  {item.keynotes && (
                                    <div className="space-y-2">
                                      <h5 className="text-[9px] font-black text-brand-gold uppercase tracking-[0.25em]">{t.programLabels.keynotes}</h5>
                                      <div className="flex flex-wrap gap-1.5">
                                        {item.keynotes.map((name, k) => (
                                          <span key={k} className="px-3 py-1.5 bg-brand-gold/5 text-brand-gold rounded-lg text-[11px] font-bold border border-brand-gold/10">
                                            {name}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {item.speakers && (
                                    <div className="space-y-2">
                                      <h5 className="text-[9px] font-black text-brand-green uppercase tracking-[0.25em]">{t.programLabels.speakers}</h5>
                                      <div className="flex flex-wrap gap-1.5">
                                        {item.speakers.map((name, k) => (
                                          <span key={k} className="px-3 py-1.5 bg-brand-green/5 text-brand-green rounded-lg text-[11px] font-bold border border-brand-green/10">
                                            {name}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Panellists & Moderators */}
                              {(item.panellists || item.moderators) && (
                                <div className="space-y-3">
                                  {item.panellists && (
                                    <div className="space-y-2">
                                      <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em]">{t.programLabels.panellists}</h5>
                                      <div className="flex flex-wrap gap-1.5">
                                        {item.panellists.map((name, k) => (
                                          <span key={k} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[11px] font-bold border border-slate-200">
                                            {name}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {item.moderators && (
                                    <div className="space-y-2">
                                      <h5 className="text-[9px] font-black text-brand-red uppercase tracking-[0.25em]">{t.programLabels.moderators}</h5>
                                      <div className="flex flex-wrap gap-1.5">
                                        {item.moderators.map((name, k) => (
                                          <span key={k} className="px-3 py-1.5 bg-brand-red/5 text-brand-red rounded-lg text-[11px] font-bold border border-brand-red/10">
                                            {name}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Catalogue Viewer Modal */}
      <CatalogueViewer 
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        lang={lang}
        pdfUrl={cataloguePdf}
      />
    </div>
  );
};

export default App;
