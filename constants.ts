
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
    title: "Are Competitions good For the Indian society?",
    description: "This debate explores whether the nature of US indians being supeeeerrrr competition is good or not.",
    longDescription: "The debate on “Is Competition Good for Indian Society?” is all about questioning something we live with every day. From board exams to cricket matches, job hunts to startup culture, competition is everywhere in India. Some say it’s the fuel that keeps us hustling, innovating, and proving ourselves on the global stage. Others feel it’s turning life into a never-ending rat race, where mental health suffers and collaboration takes a backseat. In this debate, we’ll dig into whether competition is actually making us sharper and stronger, or just more stressed and divided..",
    keyPoints: [
     Driver of Growth & Innovation – Competition pushes individuals and organizations to perform better, sparking creativity, innovation, and efficiency in fields like education, sports, business, and technology.

Creates Pressure & Inequality – Too much competition can lead to stress, burnout, and unhealthy comparisons, especially among students and youth, while also widening gaps between the privileged and underprivileged.

Balance of Competition & Collaboration – While healthy competition can inspire excellence, Indian society also needs cooperation, empathy, and teamwork to ensure inclusive growth and social harmony.
    date: "Upcoming - Date TBD",
    category: "Socio-Cultural Evolution ",
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

export const CLUB_EMAIL = "rethinksabha@gmail.com
";
