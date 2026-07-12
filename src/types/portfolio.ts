export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface RulerTick {
  top: number;
  label: string;
}

export type ProjectCategory = 'Web' | 'Dashboard' | 'API';
export type ProjectFilter = 'Tous' | 'Web' | 'App' | 'Créatif';

export interface Project {
  slotId: string;
  cat: ProjectCategory;
  src: string;
  title: string;
  desc: string;
  tags: string[];
  detail: string;
  images?: string[];
  url?: string;
}

export interface SkillBar {
  name: string;
  pct: number;
  icon: string;
}

export interface Tech {
  name: string;
  icon: string;
}

export interface TimelineEntry {
  year: string;
  role: string;
  detail: string;
}
