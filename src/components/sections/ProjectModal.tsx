import type { MouseEvent } from 'react';
import type { Project } from '../../types/portfolio';
import { Button } from '../ui/Button';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.panel} onClick={stop}>
        <div className={styles.media}>
          <img src={project.src} alt={project.title} className={styles.image} />
          <div className={styles.overlay} />
          <span className={styles.badge}>{project.cat}</span>
          <div className={styles.close} onClick={onClose} role="button" aria-label="Fermer">
            ×
          </div>
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
          <p className={styles.detail}>{project.detail}</p>
          <Button href="#">Voir le projet →</Button>
        </div>
      </div>
    </div>
  );
}
