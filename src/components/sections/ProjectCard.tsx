import type { Project } from '../../types/portfolio';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  isOpening?: boolean;
}

function ProjectPreview({ slotId }: { slotId: string }) {
  if (slotId === 'proj-8') {
    return (
      <div className={`${styles.preview} ${styles.memoryPreview}`} aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    );
  }

  if (slotId === 'proj-9') {
    return (
      <div className={`${styles.preview} ${styles.mazePreview}`} aria-hidden="true">
        <span className={styles.mazePath} />
        <span className={styles.mazePlayer} />
      </div>
    );
  }

  if (slotId === 'proj-7') {
    return (
      <div className={`${styles.preview} ${styles.minePreview}`} aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    );
  }

  if (slotId === 'proj-3') {
    return (
      <div className={`${styles.preview} ${styles.unityPreview}`} aria-hidden="true">
        <span className={styles.crosshair} />
        <span className={styles.zombie} />
      </div>
    );
  }

  if (slotId === 'proj-6') {
    return (
      <div className={`${styles.preview} ${styles.chessPreview}`} aria-hidden="true">
        <span className={styles.chessBoard} />
        <span className={styles.chessPiece}>♞</span>
      </div>
    );
  }

  return <div className={`${styles.preview} ${styles.defaultPreview}`} aria-hidden="true" />;
}

export function ProjectCard({ project, onOpen, isOpening = false }: ProjectCardProps) {
  return (
    <div
      className={`${styles.card} ${isOpening ? styles.opening : ''}`}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') onOpen(project);
      }}
      role="button"
      tabIndex={0}
    >
      <div className={styles.media}>
        <img src={project.src} alt={project.title} className={styles.image} />
        <ProjectPreview slotId={project.slotId} />
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
