import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import styles from './About.module.css';

export function About() {
  const cvUrl = `${import.meta.env.BASE_URL}lastCV.pdf`;

  return (
    <section id="apropos" className={styles.about}>
      <div className={styles.grid}>
        <div>
          <Eyebrow>À propos</Eyebrow>
          <h2 className={styles.title}>Développeuse full stack, exploratrice des profondeurs du code</h2>
          <p className={styles.paragraph}>
            Passionnée par le développement et les nouvelles technologies, je suis spécialisée dans la création
            d'applications web performantes et évolutives.
          </p>
          <p className={styles.paragraphSoft}>
            Curieuse, rigoureuse et autonome, j'aime relever des défis techniques et transformer des idées en
            solutions concrètes.
          </p>
          <Button href={cvUrl} download variant="secondary">
            ↓ Télécharger le CV
          </Button>
        </div>
      </div>
    </section>
  );
}
