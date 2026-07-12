import { useEffect, useState } from 'react';
import styles from './SonarCursor.module.css';

interface Ping {
  id: number;
  x: number;
  y: number;
}

export function SonarCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [pings, setPings] = useState<Ping[]>([]);

  useEffect(() => {
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };

    const onPointerDown = (event: PointerEvent) => {
      const id = Date.now();
      setPings((current) => [...current.slice(-5), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setPings((current) => current.filter((ping) => ping.id !== id));
      }, 850);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return (
    <>
      <div
        className={styles.cursor}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
        aria-hidden="true"
      />
      {pings.map((ping) => (
        <span
          key={ping.id}
          className={styles.ping}
          style={{ left: ping.x, top: ping.y }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
