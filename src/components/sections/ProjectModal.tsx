import type { MouseEvent } from 'react';
import { useState } from 'react';
import type { Project } from '../../types/portfolio';
import { Button } from '../ui/Button';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const stop = (e: MouseEvent) => e.stopPropagation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const gallery = project.images || [project.src];
  const currentImage = gallery[currentImageIndex];

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.panel} onClick={stop}>
        <div className={styles.media}>
          <img src={currentImage} alt={`${project.title} ${currentImageIndex + 1}`} className={styles.image} />
          <div className={styles.overlay} />
          <span className={styles.badge}>{project.cat}</span>
          {gallery.length > 1 && (
            <>
              <button
                className={styles.navPrev}
                onClick={goToPrevious}
                aria-label="Image précédente"
              >
                ‹
              </button>
              <button
                className={styles.navNext}
                onClick={goToNext}
                aria-label="Image suivante"
              >
                ›
              </button>
              <div className={styles.counter}>
                {currentImageIndex + 1} / {gallery.length}
              </div>
            </>
          )}
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
          {project.url && (
            <Button href={project.url} target="_blank" rel="noreferrer">
              Voir le projet →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
