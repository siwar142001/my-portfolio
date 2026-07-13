import { useState } from 'react';
import { contactEmail } from '../../data/portfolio';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import styles from './Contact.module.css';

type TransmissionStatus = 'idle' | 'sending' | 'sent' | 'error' | 'mail-fallback';

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export function Contact() {
  const [status, setStatus] = useState<TransmissionStatus>('idle');
  const isSent = status === 'sent';

  const sendTransmission = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');

    if (!web3FormsAccessKey) {
      const subject = encodeURIComponent(`Transmission portfolio - ${name || 'Nouveau contact'}`);
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setStatus('mail-fallback');
      return;
    }

    setStatus('sending');

    formData.append('access_key', web3FormsAccessKey);
    formData.append('subject', 'Nouvelle transmission depuis le portfolio Siwar');
    formData.append('from_name', 'Portfolio Siwar');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? 'Transmission failed');
      }

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const statusLabel = {
    idle: 'Transmission en attente',
    sending: 'Transmission en cours...',
    sent: 'Transmission envoyée',
    error: 'Transmission interrompue',
    'mail-fallback': 'Email prêt à envoyer',
  }[status];

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
            <span>{statusLabel}</span>
          </div>
          <label className={styles.field}>
            <span>Nom</span>
            <input type="text" name="name" placeholder="Votre nom" required />
          </label>
          <label className={styles.field}>
            <span>Email</span>
            <input type="email" name="email" placeholder="votre@email.com" required />
          </label>
          <label className={styles.field}>
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="Votre message" required />
          </label>
          {(status === 'error' || status === 'mail-fallback') && (
            <p className={styles.errorMessage}>
              {status === 'mail-fallback'
                ? 'Ton application mail va s’ouvrir avec la transmission pré-remplie.'
                : 'Impossible d’envoyer le signal. Réessayez ou utilisez Email direct.'}
            </p>
          )}
          <button type="submit" className={styles.sendButton} disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer la transmission'}
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
