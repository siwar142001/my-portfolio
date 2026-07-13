import { useState } from 'react';
import { contactEmail } from '../../data/portfolio';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import styles from './Contact.module.css';

export function Contact() {
  const [isSent, setIsSent] = useState(false);

  const sendTransmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      {isSent && <div className={styles.wave} aria-hidden="true" />}
      <div className={styles.inner}>
        <Eyebrow center>Contact · 1000 m</Eyebrow>
        <h2 className={styles.title}>Radio de sous-marin</h2>
        <p className={styles.pitch}>Transmission ouverte. Envoyez un signal, je remonte vers vous.</p>
        <form className={`${styles.radio} ${isSent ? styles.radioSent : ''}`} onSubmit={sendTransmission}>
          <div className={styles.radioHeader}>
            <span className={styles.statusLight} />
            <span>{isSent ? 'Transmission envoyée' : 'Transmission en attente'}</span>
          </div>
          <label className={styles.field}>
            <span>Nom</span>
            <input type="text" name="name" placeholder="Votre nom" required />
          </label>
          <label className={styles.field}>
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="Votre message" required />
          </label>
          <button type="submit" className={styles.sendButton}>
            Envoyer la transmission
          </button>
        </form>
        <div className={styles.actions}>
          <Button href={`mailto:${contactEmail}`}>Email direct</Button>
          <Button href="https://github.com/siwar142001" target="_blank" rel="noreferrer" variant="secondary">
            <i className="devicon-github-original" style={{ fontSize: 16 }} />
            GitHub
          </Button>
          <Button href="https://www.linkedin.com/in/siwar142001/" target="_blank" rel="noreferrer" variant="secondary">
            <i className="devicon-linkedin-plain" style={{ fontSize: 16 }} />
            LinkedIn
          </Button>
        </div>
        <p className={styles.footer}>© 2026 SIWAR · fond de l'océan atteint</p>
      </div>
    </section>
  );
}
