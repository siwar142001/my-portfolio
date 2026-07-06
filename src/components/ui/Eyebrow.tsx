import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  center?: boolean;
}

export function Eyebrow({ children, center }: EyebrowProps) {
  return (
    <p className={styles.eyebrow} style={center ? { justifyContent: 'center' } : undefined}>
      <span className={styles.dot} />
      {children}
    </p>
  );
}
