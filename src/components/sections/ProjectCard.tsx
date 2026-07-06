import type { Project } from '../../types/portfolio';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div className={styles.card} onClick={() => onOpen(project)} role="button" tabIndex={0}>
      <div className={styles.media}>
        <img src={project.src} alt={project.title} className={styles.image} />
        <div className={styles.overlay} />
        <span className={styles.badge}>{project.cat}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
