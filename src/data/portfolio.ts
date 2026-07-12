import proj2_swagger from '../assets/img/proj2/swagger.png';
import proj3_zombie from '../assets/img/proj3/zombie.png';
import proj4_1 from '../assets/img/proj4/proj4-1.png';
import proj4_a from '../assets/img/proj4/proj4-a.png';
import proj4_b from '../assets/img/proj4/proj4-b.png';
import proj4_c from '../assets/img/proj4/proj4-c.png';
import proj4_d from '../assets/img/proj4/proj4-d.png';
import proj4_e from '../assets/img/proj4/proj4-e.png';
import proj4_f from '../assets/img/proj4/proj4-f.png';
import proj4_h from '../assets/img/proj4/proj4-h.png';
import proj4_j from '../assets/img/proj4/proj4-j.png';
import proj5_a from '../assets/img/proj5/proj5-a.jpeg';
import proj5_b from '../assets/img/proj5/proj5-b.jpeg';
import proj5_c from '../assets/img/proj5/proj5-c.jpeg';
import proj5_d from '../assets/img/proj5/proj5-d.jpeg';
import proj5_e from '../assets/img/proj5/proj5-e.jpeg';
import proj5_f from '../assets/img/proj5/proj5-f.jpeg';
import proj5_j from '../assets/img/proj5/proj5-j.png';
import proj6_chess from '../assets/img/proj6/chess.png';
import proj7_mines from '../assets/img/proj7/mines.png';
import proj8_a from '../assets/img/proj8/proj8-a.png';
import proj8_b from '../assets/img/proj8/proj8-b.png';
import proj8_c from '../assets/img/proj8/proj8-c.png';
import proj8_d from '../assets/img/proj8/proj8-d.png';
import proj8_e from '../assets/img/proj8/proj8-e.png';
import proj9_a from '../assets/img/proj9/proj9-a.png';
import proj10_img from '../assets/img/proj10/proj10.png';
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
    slotId: 'proj-2',
    cat: 'Web',
    src: proj2_swagger,
    title: 'Évolution de Swagger Editor',
    desc: "Évolution de Swagger Editor pour modéliser des interfaces API à partir de modèles du Web sémantique adaptés au domaine de l'énergie.",
    tags: ['React', 'Linux', 'GitLab', 'Scrum', 'SOLID'],
    detail:
      "Au cours de ce stage de 4 mois chez ENGIE Lab CRIGEN en France, j'ai participé à l'évolution de la solution open source Swagger Editor afin d'enrichir ses fonctionnalités. Ma mission consistait à développer de nouvelles fonctionnalités permettant de modéliser des interfaces API à partir de modèles de données issus du Web sémantique, spécialement adaptés au domaine de l'énergie. J'ai également contribué à l'amélioration de l'architecture logicielle en appliquant les principes SOLID, tout en travaillant dans un environnement Linux, avec GitLab pour la gestion du code source et la méthodologie Scrum pour l'organisation du projet.",
    images: [proj2_swagger],
  },
  {
    slotId: 'proj-3',
    cat: 'Web',
    src: proj3_zombie,
    title: 'Projet Toku (Unity 3D)',
    desc: 'Mini-jeu de survie et de combat en vue à la première personne développé avec Unity 3D.',
    tags: ['Unity', 'C#', '3D', 'FPS', 'Game Design'],
    detail:
      "Toku est un mini-jeu de survie et de combat en vue à la première personne, développé avec Unity dans le cadre d'un projet étudiant réalisé sur une durée de six mois. Le joueur évolue dans un petit environnement ouvert en 3D et doit affronter plusieurs vagues de zombies à l'aide d'un pistolet. L'objectif principal est de survivre, éliminer les ennemis présents sur la carte et gérer efficacement ses points de vie ainsi que ses munitions.\n\nLe projet repose sur un gameplay simple et accessible, pensé pour mettre en pratique les bases du développement de jeux vidéo en 3D : déplacement du joueur, système de tir, gestion des collisions, intelligence artificielle basique des ennemis, barre de vie, compteur de munitions et apparition progressive des zombies.\n\nFonctionnalités principales : déplacement en vue à la première personne, système de tir avec gestion des munitions, ennemis zombies avec comportement simple, système de santé et de dégâts, vagues successives d'ennemis, petit environnement ouvert à explorer, interface affichant la vie, les munitions et le nombre de zombies, décors et modèles 3D simples adaptés à un projet étudiant.\n\nMoteur utilisé : Unity. Type de projet : jeu de tir et de survie en 3D. Durée de développement : 6 mois. Réalisation : projet développé en équipe par des étudiants débutants.",
    images: [proj3_zombie],
  },
  {
    slotId: 'proj-4',
    cat: 'Dashboard',
    src: proj4_1,
    title: 'Kanilo',
    desc: "App Flutter de gestion animale pour centraliser le suivi, réserver des soins et consulter les disponibilités en temps réel.",
    tags: ['Flutter', 'Dart', 'UI/UX'],
    detail:
      "Kanilo est une plateforme intuitive dédiée au bien-être animal, connectant les propriétaires de compagnons avec les meilleurs professionnels du secteur. Alliant sérénité et modernité, elle simplifie la gestion de la santé animale grâce à une interface douce, fluide et accessible à tous.",
    images: [proj4_1, proj4_a, proj4_b, proj4_c, proj4_d, proj4_e, proj4_f, proj4_h, proj4_j],
    url: 'https://kanilo.fr/',
  },
  {
    slotId: 'proj-5',
    cat: 'Web',
    src: proj5_a,
    title: 'ReviewMe',
    desc: "Plateforme collaborative pour étudiants permettant de soumettre des réalisations et recevoir des retours ciblés.",
    tags: ['Laravel 11', 'Livewire 3', 'Tailwind CSS', 'Alpine.js', 'PostgreSQL', 'Shiki.php'],
    detail:
      "Aujourd'hui, les étudiants en informatique savent créer des applications, des sites webs et des logiciels qui fonctionnent. Mais en travaillant seuls ou avec une petite équipe, beaucoup doutent de la qualité de leur conception. Les forums d'entraide habituels sont parfaits pour réparer une erreur ponctuelle, mais aucun outil ne les accompagne sur la réflexion et la structure de leurs codes ou de leurs idées.\n\nC'est pourquoi nous créons ReviewMe. Notre plateforme collaborative permet aux étudiants de soumettre leurs réalisations pour obtenir des retours précis et ciblés de la part de leurs aînés plus expérimentés. On n'y vient pas pour corriger un bug, mais pour échanger sur les bonnes pratiques.\n\nLe résultat ? Nous transformons un apprentissage solitaire en intelligence collective. L'étudiant brise son isolement, gagne en confiance sur sa logique, et acquiert rapidement les réflexes professionnels exigés par les entreprises.",
    images: [proj5_a, proj5_b, proj5_c, proj5_d, proj5_e, proj5_f, proj5_j],
  },
  {
    slotId: 'proj-6',
    cat: 'Web',
    src: proj6_chess,
    title: 'Terminal Chess War',
    desc: 'Jeu de stratégie multijoueur (2 à 4 joueurs) en terminal, développé en Java.',
    tags: ['Java'],
    detail:
      "Terminal Chess War est un jeu rétro entièrement jouable dans le terminal. Chaque joueur se déplace d'une case par tour et peut détruire une case du plateau pour bloquer ses adversaires. La partie se termine lorsqu'un joueur ne peut plus se déplacer ; le dernier joueur capable de jouer gagne. Le jeu inclut un chronomètre, un système de scores et deux modes : classique et accéléré (plateau qui se rétrécit).",
    images: [proj6_chess],
  },
  {
    slotId: 'proj-7',
    cat: 'Web',
    src: proj7_mines,
    title: 'Minesweeper',
    desc: 'Démineur développé en Python avec plusieurs niveaux de difficulté.',
    tags: ['Python'],
    detail:
      "Minesweeper est un jeu de démineur développé en Python qui met à l’épreuve la logique, la concentration et le sens de la stratégie du joueur. L’objectif est de découvrir toutes les cases de la grille sans déclencher les mines dissimulées. Plusieurs niveaux de difficulté permettent d’adapter le défi aux débutants comme aux joueurs expérimentés.",
    images: [proj7_mines],
  },
  {
    slotId: 'proj-8',
    cat: 'Web',
    src: proj8_a,
    title: 'Memory (Site Web)',
    desc: 'Application web de Memory avec gestion utilisateurs, scores, classement et personnalisation.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    detail:
      "Memory est une application web interactive développée autour d'un jeu de Memory, intégrant un système complet de gestion des utilisateurs. Les visiteurs peuvent créer un compte, s'authentifier, personnaliser leur profil et suivre leur progression au fil des parties. Chaque partie est chronométrée et enregistrée, avec historique, score et classement. Une interface de paramètres permet de personnaliser thème, langue, difficulté et effets sonores.",
    images: [proj8_a, proj8_b, proj8_c, proj8_d, proj8_e],
  },
  {
    slotId: 'proj-9',
    cat: 'Web',
    src: proj9_a,
    title: 'Labyrinthe',
    desc: 'Jeu de réflexion en CLI développé en Java, générateur aléatoire de labyrinthes et score basé sur le temps et les déplacements.',
    tags: ['Java'],
    detail:
      "Labyrinthe est un jeu de réflexion développé en Java et entièrement jouable en ligne de commande. Le joueur explore un labyrinthe généré aléatoirement, cherche la sortie la plus efficace, évite les impasses et optimise chaque déplacement. Le jeu affiche le temps écoulé, le nombre de déplacements et les meilleures performances.",
    images: [proj9_a],
  },
  {
    slotId: 'proj-10',
    cat: 'Web',
    src: proj10_img,
    title: 'Image Quiz',
    desc: 'Application Android de quiz interactif pour apprendre les animaux, couleurs et formes à travers des images.',
    tags: [
      'Java',
      'Android Studio',
      'Android SDK',
      'XML',
      'SQLite',
      'Parcelable',
      'Intents',
      'Material Design',
    ],
    detail:
      "Image Quiz est une application Android éducative qui teste les connaissances sur les animaux, les couleurs et les formes à partir d'images. Le joueur répond aux questions illustrées, reçoit un score basé sur la rapidité et la précision, et peut revoir ses réponses pour apprendre en s'amusant.",
    images: [proj10_img],
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
  { name: 'Unity', icon: 'devicon-unity-plain colored' },
  { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
  { name: 'C#', icon: 'devicon-csharp-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
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
