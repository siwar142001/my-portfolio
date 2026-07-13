import { useEffect, useRef, useState } from 'react';
import { timeline } from '../../data/portfolio';
import { Eyebrow } from '../ui/Eyebrow';
import styles from './Timeline.module.css';

export function Timeline() {
  const entryRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [litEntries, setLitEntries] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!entry.isIntersecting) return;
          setLitEntries((current) => new Set(current).add(index));
        });
      },
      { threshold: 0.45 },
    );

    entryRefs.current.forEach((entry) => {
      if (entry) observer.observe(entry);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="parcours" className={styles.timeline}>
      <Eyebrow>Parcours</Eyebrow>
      <h2 className={styles.title}>Expériences</h2>
      <div className={styles.list}>
        {timeline.map((e, index) => (
          <div
            key={e.year}
            ref={(node) => {
              entryRefs.current[index] = node;
            }}
            data-index={index}
            className={`${styles.entry} ${litEntries.has(index) ? styles.entryLit : ''}`}
          >
            <div className={styles.beacon}>
              <span className={styles.beaconLight} />
              <span className={styles.beaconBase} />
            </div>
            <p className={styles.year}>{e.year}</p>
            <h3 className={styles.role}>{e.role}</h3>
            {e.place && <p className={styles.place}>{e.place}</p>}
            <p className={styles.detail}>{e.detail}</p>
            {e.missions && e.missions.length > 0 && (
              <div className={styles.block}>
                <p className={styles.blockTitle}>{e.missionsTitle ?? 'Missions'}</p>
                <ul className={styles.missions}>
                  {e.missions.map((mission) => (
                    <li key={mission}>{mission}</li>
                  ))}
                </ul>
              </div>
            )}
            {e.technologies && e.technologies.length > 0 && (
              <div className={styles.block}>
                <p className={styles.blockTitle}>Technologies</p>
                <div className={styles.tags}>
                  {e.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
