
import { DebateTopic, NavLink } from './types';
import { BookOpenIcon, ScaleIcon, UsersIcon, LightBulbIcon, ChatBubbleLeftRightIcon, CpuChipIcon } from './components/icons/PhosphorIcons';

export const APP_NAME = "ReThink Sabha";

export const NAVIGATION_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'debates', label: 'Our Debates', href: '#debates' },
  { id: 'join', label: 'Get Involved', href: '#join' },
];

export const SAMPLE_DEBATE_TOPICS: DebateTopic[] = [
  {
    id: 'dt001',
    title: "Is Indian Modernisation Good?",
    description: "A deep dive into the multifaceted impacts of modernization on Indian society, culture, and identity.",
    longDescription: "This debate explores the complex interplay between India's rich cultural heritage and the relentless drive towards modernization. We will dissect arguments championing the preservation of traditional values and indigenous practices against those advocating for the embrace of globalized modern norms and technological advancement. Is it a zero-sum game where heritage must be sacrificed for progress, or can a harmonious synthesis be achieved? Join us to critically examine the socio-economic, cultural, ethical, and psychological implications of India's transformative modernization journey.",
    keyPoints: [
      "Preserving Cultural Roots: The imperative of safeguarding traditions, linguistic diversity, indigenous knowledge systems, and unique cultural identities in an era of increasing global homogeneity.",
      "Embracing Progress & Innovation: The necessity of adopting modern advancements in technology, science, governance, and social structures for economic growth, improved quality of life, and global competitiveness.",
      "The Ethical Dilemmas: Navigating moral questions arising from modernization, such as digital divide, environmental impact, changing social mores, and the definition of a 'developed' society.",
      "Pathways to Synthesis: Exploring models and strategies where traditional wisdom and modern innovation can coexist and complement each other, fostering a uniquely Indian model of development."
    ],
    date: "Upcoming - Date TBD",
    category: "Socio-Cultural Evolution & National Identity",
    icon: ChatBubbleLeftRightIcon,
  },
  // {
  //   id: 'dt002',
  //   title: "The Double-Edged Sword: Is Technological Progress Always Societal Progress?",
  //   description: "A critical examination of technological advancements and their true impact on human well-being, community, and ethical boundaries.",
  //   date: "Past Event - Spring 2024",
  //   category: "Technology & Society",
  //   icon: CpuChipIcon,
  // },
  // {
  //   id: 'dt003',
  //   title: "Revisiting Economic Models: Are Traditional Theories Failing Modern Crises?",
  //   description: "Debating the efficacy of established economic models (Capitalism, Socialism, etc.) in addressing 21st-century issues like climate change and inequality.",
  //   category: "Economics & Future",
  //   icon: LightBulbIcon,
  // },
  // {
  //   id: 'dt004',
  //   title: "Cultural Heritage vs. Global Homogenization: A Necessary Conflict?",
  //   description: "Discussing the preservation of unique cultural identities in an era of increasing globalization and cultural exchange.",
  //   date: "Upcoming - Winter 2025",
  //   category: "Culture & Globalization",
  //   icon: UsersIcon,
  // },
  // {
  //   id: 'dt005',
  //   title: "The Nature of Justice: Retributive vs. Restorative Approaches in Society",
  //   description: "An in-depth debate on the philosophies underpinning our justice systems and their effectiveness in fostering a just society.",
  //   category: "Ethics & Law",
  //   icon: ScaleIcon,
  // },
  // {
  //   id: 'dt006',
  //   title: "Education's Purpose: Transmitting Knowledge or Cultivating Critical Thinkers?",
  //   description: "Examining the fundamental goals of education systems and whether current models adequately prepare individuals for a complex world.",
  //   category: "Education & Development",
  //   icon: BookOpenIcon,
  // }
];

export const CLUB_EMAIL = "sunitechtuber@gmail.com";
