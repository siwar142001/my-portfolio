import { useMemo, useState } from 'react';
import { projectFilterCategoryMap, projectFilters, projects } from '../../data/portfolio';
import type { Project, ProjectFilter } from '../../types/portfolio';
import { Eyebrow } from '../ui/Eyebrow';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import styles from './Projects.module.css';

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('Tous');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [openingProjectId, setOpeningProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    const targetCat = projectFilterCategoryMap[filter];
    return targetCat === 'Tous' ? projects : projects.filter((p) => p.cat === targetCat);
  }, [filter]);

  const openProject = (project: Project) => {
    setOpeningProjectId(project.slotId);
    window.setTimeout(() => {
      setActiveProject(project);
      setOpeningProjectId(null);
    }, 260);
  };

  return (
    <section id="projets" className={styles.projects}>
      <div className={styles.header}>
        <div>
          <Eyebrow>Mes projets</Eyebrow>
          <h2 className={styles.title}>Salle des trophées</h2>
          <p className={styles.subtitle}>Chaque capsule conserve une réalisation. Cliquez pour l'ouvrir.</p>
        </div>
        <div className={styles.filters}>
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`${styles.chip} ${filter === f ? styles.chipActive : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((p) => (
          <ProjectCard
            key={p.slotId}
            project={p}
            onOpen={openProject}
            isOpening={openingProjectId === p.slotId}
          />
        ))}
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
