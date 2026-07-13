import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import styles from './About.module.css';

export function About() {
  const cvUrl = `${import.meta.env.BASE_URL}lastCV.pdf`;

  return (
    <section id="apropos" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.logbook}>
          <Eyebrow>Journal de bord</Eyebrow>
          <h2 className={styles.title}>Jour 102, exploration du développement web</h2>
          <p className={styles.paragraph}>
            Cap maintenu vers les interfaces modernes, les applications performantes et les expériences web qui
            restent fluides, claires et utiles.
          </p>
          <div className={styles.entries} aria-label="Entrées du journal de bord">
            <article className={styles.entry}>
              <span>Observation 01</span>
              <p>Concevoir des interfaces propres, responsives et agréables à utiliser, avec une attention forte au détail.</p>
            </article>
            <article className={styles.entry}>
              <span>Observation 02</span>
              <p>Développer des fonctionnalités full stack solides, du frontend React jusqu'aux APIs et bases de données.</p>
            </article>
            <article className={styles.entry}>
              <span>Observation 03</span>
              <p>Explorer différents environnements : web, mobile, jeux 3D, outils API et projets collaboratifs.</p>
            </article>
          </div>
          <p className={styles.paragraphSoft}>
            Curieuse, rigoureuse et autonome, je transforme les idées en solutions concrètes et bien structurées.
          </p>
          <Button href={cvUrl} download variant="secondary">
            ↓ Télécharger le CV
          </Button>
        </div>
      </div>
    </section>
  );
}
