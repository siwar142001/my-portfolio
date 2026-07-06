import type { RefObject } from 'react';
import styles from './OceanCanvas.module.css';

interface OceanCanvasProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
}

export function OceanCanvas({ canvasRef }: OceanCanvasProps) {
  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
