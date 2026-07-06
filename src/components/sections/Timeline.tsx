import { timeline } from '../../data/portfolio';
import { Eyebrow } from '../ui/Eyebrow';
import styles from './Timeline.module.css';

export function Timeline() {
  return (
    <section id="parcours" className={styles.timeline}>
      <Eyebrow>Parcours</Eyebrow>
      <h2 className={styles.title}>Expériences</h2>
      <div className={styles.list}>
        {timeline.map((e) => (
          <div key={e.year} className={styles.entry}>
            <div className={styles.dot} />
            <p className={styles.year}>{e.year}</p>
            <h3 className={styles.role}>{e.role}</h3>
            <p className={styles.detail}>{e.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
