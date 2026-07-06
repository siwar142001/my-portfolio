import proj1 from '../assets/img/proj-1.png';
import proj2 from '../assets/img/proj-2.png';
import proj3 from '../assets/img/proj-3.png';
import proj4 from '../assets/img/proj-4.png';
import type {
  NavItem,
  Project,
  ProjectFilter,
  RulerTick,
  SkillBar,
  Stat,
  Tech,
  TimelineEntry,
} from '../types/portfolio';

export const SECTION_IDS = ['accueil', 'apropos', 'competences', 'projets', 'parcours', 'contact'] as const;

export const navList: NavItem[] = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'apropos', label: 'À propos', href: '#apropos' },
  { id: 'competences', label: 'Compétences', href: '#competences' },
  { id: 'projets', label: 'Projets', href: '#projets' },
  { id: 'parcours', label: 'Parcours', href: '#parcours' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { num: '18+', label: 'Projets réalisés' },
  { num: '2+', label: "Années d'expérience" },
  { num: '15+', label: 'Technologies' },
  { num: '100%', label: 'Passionnée' },
];

export const rulerTicks: RulerTick[] = [
  { top: 8, label: '0 m' },
  { top: 24, label: '50 m' },
  { top: 42, label: '150 m' },
  { top: 58, label: '300 m' },
  { top: 74, label: '500 m' },
  { top: 92, label: '1000 m' },
];

export const projects: Project[] = [
  {
    slotId: 'proj-1',
    cat: 'Web',
    src: proj1,
    title: 'Restaurant Management',
    desc: 'Système complet de gestion de restaurants avec commandes, réservations et statistiques.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    detail:
      'Détail complet à personnaliser : ton rôle, les défis techniques rencontrés, le résultat obtenu et un lien vers la démo ou le dépôt.',
  },
  {
    slotId: 'proj-2',
    cat: 'Dashboard',
    src: proj2,
    title: 'Dashboard Analytics',
    desc: "Dashboard d'analyse de données avec visualisations avancées et rapports.",
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
    detail:
      'Détail complet à personnaliser : ton rôle, les défis techniques rencontrés, le résultat obtenu et un lien vers la démo ou le dépôt.',
  },
  {
    slotId: 'proj-3',
    cat: 'API',
    src: proj3,
    title: 'API Sécurisée',
    desc: 'API REST sécurisée avec authentification JWT, rôles et permissions avancées.',
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    detail:
      'Détail complet à personnaliser : ton rôle, les défis techniques rencontrés, le résultat obtenu et un lien vers la démo ou le dépôt.',
  },
  {
    slotId: 'proj-4',
    cat: 'Web',
    src: proj4,
    title: 'Site Créatif',
    desc: 'Site interactif animé avec expériences visuelles immersives.',
    tags: ['Vue', 'Canvas', 'GSAP'],
    detail:
      'Détail complet à personnaliser : ton rôle, les défis techniques rencontrés, le résultat obtenu et un lien vers la démo ou le dépôt.',
  },
];

export const projectFilters: ProjectFilter[] = ['Tous', 'Web', 'App', 'Créatif'];

export const projectFilterCategoryMap: Record<ProjectFilter, Project['cat'] | 'Tous'> = {
  Tous: 'Tous',
  Web: 'Web',
  App: 'Dashboard',
  Créatif: 'API',
};

export const skillBars: SkillBar[] = [
  { name: 'Frontend', pct: 90, icon: 'devicon-html5-plain colored' },
  { name: 'Backend', pct: 85, icon: 'devicon-nodejs-plain colored' },
  { name: 'Bases de données', pct: 80, icon: 'devicon-postgresql-plain colored' },
  { name: 'DevOps & outils', pct: 75, icon: 'devicon-docker-plain colored' },
];

export const techs: Tech[] = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Laravel', icon: 'devicon-laravel-original colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2024 — présent',
    role: 'Développeuse Full-stack',
    detail: 'Poste ou mission actuelle — décris tes responsabilités, la stack utilisée et un accomplissement marquant.',
  },
  {
    year: '2022 — 2024',
    role: 'Développeuse Front-end',
    detail: 'Expérience précédente — projets menés, technologies employées et ce que tu y as appris.',
  },
  {
    year: '2021 — 2022',
    role: 'Formation & premiers projets',
    detail: 'Le point de départ — formation, premiers pas et projets fondateurs.',
  },
];

export const contactEmail = 'siwar@email.com';
