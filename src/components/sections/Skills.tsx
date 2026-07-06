import { skillBars, techs } from '../../data/portfolio';
import { Eyebrow } from '../ui/Eyebrow';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section id="competences" className={styles.skills}>
      <Eyebrow>Compétences</Eyebrow>
      <h2 className={styles.title}>Ce que je maîtrise</h2>

      <div className={styles.grid}>
        <div className={styles.bars}>
          {skillBars.map((s) => (
            <div key={s.name} className={styles.barRow}>
              <div className={styles.iconBox}>
                <i className={s.icon} />
              </div>
              <div className={styles.barBody}>
                <div className={styles.barHead}>
                  <span className={styles.barName}>{s.name}</span>
                  <span className={styles.barPct}>{s.pct}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className={styles.techLabel}>Technologies maîtrisées</p>
          <div className={styles.techGrid}>
            {techs.map((tk) => (
              <div key={tk.name} className={styles.techCard}>
                <i className={tk.icon} style={{ fontSize: 30 }} />
                <span className={styles.techName}>{tk.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
