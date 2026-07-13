import { useEffect, useRef, useState } from 'react';
import octopusImage from '../../assets/img/effects/octopus.png';
import styles from './EasterEggs.module.css';

const konami = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const triggerOctopusDuration = 5200;

export function EasterEggs() {
  const sequenceRef = useRef<string[]>([]);
  const [showOctopus, setShowOctopus] = useState(false);
  const [abyss, setAbyss] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [konamiProgress, setKonamiProgress] = useState(0);

  const triggerOctopus = () => {
    setShowOctopus(true);
    setKonamiProgress(konami.length);
    sequenceRef.current = [];
    window.setTimeout(() => setShowOctopus(false), triggerOctopusDuration);
    window.setTimeout(() => setKonamiProgress(0), 1400);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target?.closest('input, textarea, select, [contenteditable="true"]')
      ) {
        return;
      }

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      const isKonamiKey = konami.includes(key);
      if (!isKonamiKey) return;

      event.preventDefault();

      const next = [...sequenceRef.current, key].slice(-konami.length);
      let bestMatch: string[] = [];

      for (let size = Math.min(next.length, konami.length); size > 0; size--) {
        const suffix = next.slice(-size);
        const prefix = konami.slice(0, size);
        if (suffix.join(',') === prefix.join(',')) {
          bestMatch = suffix;
          break;
        }
      }

      sequenceRef.current = bestMatch;
      setKonamiProgress(sequenceRef.current.length);
      if (sequenceRef.current.length > 0) {
        setIsHintOpen(true);
      }

      if (sequenceRef.current.join(',') === konami.join(',')) {
        triggerOctopus();
      }
    };

    const onDoubleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest('[data-depth-ruler]')) return;
      setAbyss((current) => !current);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('dblclick', onDoubleClick);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('dblclick', onDoubleClick);
    };
  }, []);

  return (
    <div className={`${styles.layer} ${abyss ? styles.abyss : ''}`}>
      <div className={styles.hub}>
        {isHintOpen && (
          <div className={styles.hint} aria-live="polite">
            <div className={styles.hintHeader}>
              <span>Signaux secrets</span>
              <button type="button" onClick={() => setIsHintOpen(false)} aria-label="Fermer les signaux secrets">
                x
              </button>
            </div>
            <strong>↑ ↑ ↓ ↓ ← → ← → B A</strong>
            <small>
              {showOctopus
                ? 'Signal recu: poulpe detecte'
                : konamiProgress > 0
                  ? `Progression: ${konamiProgress}/${konami.length}`
                  : 'Teste le code pour reveler le poulpe.'}
            </small>
            <small>Double-clique la profondeur pour le mode abyssal.</small>
          </div>
        )}
        <button
          type="button"
          className={styles.trigger}
          onClick={() => setIsHintOpen((current) => !current)}
          aria-expanded={isHintOpen}
          aria-label="Afficher les easter eggs"
        >
          <span className={styles.triggerIcon} aria-hidden="true">?</span>
          <span className={styles.triggerText}>secret</span>
        </button>
      </div>
      {abyss && <div className={styles.abyssVeil} aria-hidden="true" />}
      {showOctopus && (
        <div className={styles.octopus} aria-hidden="true">
          <img src={octopusImage} alt="" className={styles.octopusImage} />
        </div>
      )}
    </div>
  );
}
