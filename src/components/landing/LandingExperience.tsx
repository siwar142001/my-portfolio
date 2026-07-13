import { useState } from 'react';
import styles from './LandingExperience.module.css';

interface LandingExperienceProps {
  onEnterStart: () => void;
  onEnter: () => void;
}

const depths = ['500m', '600m', '700m', '800m', '900m', '1000m'];

export function LandingExperience({ onEnterStart, onEnter }: LandingExperienceProps) {
  const [isLeaving, setIsLeaving] = useState(false);

  const enterPortfolio = () => {
    onEnterStart();
    setIsLeaving(true);
    window.setTimeout(onEnter, 950);
  };

  return (
    <section className={`${styles.landing} ${isLeaving ? styles.leaving : ''}`} aria-label="Introduction immersive">
      <div className={styles.blackout} />
      <div className={styles.blueLight} />

      <div className={styles.bubbles} aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{ '--i': index } as React.CSSProperties} />
        ))}
      </div>

      <div className={styles.depths} aria-hidden="true">
        {depths.map((depth, index) => (
          <span key={depth} style={{ '--d': index } as React.CSSProperties}>
            {depth}
          </span>
        ))}
      </div>

      <div className={`${styles.jelly} ${styles.jellyOne}`} aria-hidden="true">
        <span className={styles.jellyBell} />
        <span className={styles.tentacle} />
        <span className={styles.tentacle} />
        <span className={styles.tentacle} />
        <span className={styles.tentacle} />
        <span className={styles.tentacle} />
      </div>
      <div className={`${styles.jelly} ${styles.jellyTwo}`} aria-hidden="true">
        <span className={styles.jellyBell} />
        <span className={styles.tentacle} />
        <span className={styles.tentacle} />
        <span className={styles.tentacle} />
        <span className={styles.tentacle} />
      </div>

      <div className={styles.fishSchool} aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index} style={{ '--f': index } as React.CSSProperties} />
        ))}
      </div>

      <div className={styles.whale} aria-hidden="true" />

      <div className={styles.copy}>
        <p className={styles.lineIntro}>Plongeons ensemble dans mon univers.</p>
      </div>

      <button type="button" className={styles.enterButton} onClick={enterPortfolio}>
        <span className={styles.enterLabel}>Entrer dans le portfolio</span>
        <span className={styles.enterIcon} aria-hidden="true">
          <svg viewBox="0 0 48 48" focusable="false">
            <path d="M24 5v25" />
            <circle cx="24" cy="9" r="4" />
            <path d="M11 21h26" />
            <path d="M17 30c-2 5-6 8-10 8 6 5 13 6 17-1 4 7 11 6 17 1-4 0-8-3-10-8" />
            <path d="M13 25l-6-4 2 9" />
            <path d="M35 25l6-4-2 9" />
          </svg>
        </span>
      </button>
    </section>
  );
}
