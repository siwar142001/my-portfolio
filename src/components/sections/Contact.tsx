import { contactEmail } from '../../data/portfolio';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <Eyebrow center>Contact · 1000 m</Eyebrow>
        <h2 className={styles.title}>Prêt·e à plonger ensemble ?</h2>
        <p className={styles.pitch}>
          Une idée, un projet ou juste envie de discuter ? Je suis toujours ouverte aux nouvelles opportunités.
        </p>
        <div className={styles.actions}>
          <Button href={`mailto:${contactEmail}`}>✉ Me contacter</Button>
          <Button href="#" variant="secondary">
            <i className="devicon-github-original" style={{ fontSize: 16 }} />
            GitHub
          </Button>
          <Button href="#" variant="secondary">
            <i className="devicon-linkedin-plain" style={{ fontSize: 16 }} />
            LinkedIn
          </Button>
        </div>
        <p className={styles.footer}>© 2026 SIWAR · fond de l'océan atteint</p>
      </div>
    </section>
  );
}
