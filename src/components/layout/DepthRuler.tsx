import type { RefObject } from 'react';
import { rulerTicks } from '../../data/portfolio';
import styles from './DepthRuler.module.css';

interface DepthRulerProps {
  cursorRef: RefObject<HTMLDivElement | null>;
  readRef: RefObject<HTMLDivElement | null>;
}

export function DepthRuler({ cursorRef, readRef }: DepthRulerProps) {
  return (
    <div className={styles.ruler} data-depth-ruler>
      <div className={styles.line} />
      {rulerTicks.map((r) => (
        <div key={r.label} className={styles.tick} style={{ top: `${r.top}%` }}>
          <span className={styles.tickLabel}>{r.label}</span>
          <span className={styles.tickMark} />
        </div>
      ))}
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={readRef} className={styles.readout}>
        0 m
      </div>
    </div>
  );
}
