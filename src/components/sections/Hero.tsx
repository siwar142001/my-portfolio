import { stats } from '../../data/portfolio';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="accueil" className={styles.hero}>
      <div className={styles.intro}>
        <p className={styles.greeting}>
          <span className={styles.pulseDot} />
          Bonjour, je suis
        </p>
        <h1 className={styles.name}>Siwar</h1>
        <p className={styles.role}>Développeuse Web &amp; Full Stack</p>
        <p className={styles.pitch}>
          Je conçois et développe des applications web modernes, performantes et sécurisées — avec une attention
          particulière au détail et à l'expérience utilisateur.
        </p>
        <div className={styles.actions}>
          <Button href="#projets">Explorer mes projets</Button>
          <Button href="#apropos" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>

      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.scrollCue}>
        <span>Plonger</span>
        <div className={styles.scrollTrack}>
          <span className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
