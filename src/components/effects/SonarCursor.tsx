import { useEffect, useState } from 'react';
import styles from './SonarCursor.module.css';

interface Ping {
  id: number;
  x: number;
  y: number;
}

const isEditableTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement && Boolean(target.closest('input, textarea, select, [contenteditable="true"]'));

export function SonarCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [pings, setPings] = useState<Ping[]>([]);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      setIsHidden(isEditableTarget(event.target));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };

    const onPointerDown = (event: PointerEvent) => {
      if (isEditableTarget(event.target)) {
        setIsHidden(true);
        return;
      }

      const id = Date.now();
      setPings((current) => [...current.slice(-5), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setPings((current) => current.filter((ping) => ping.id !== id));
      }, 850);
    };

    const onFocusIn = (event: FocusEvent) => {
      setIsHidden(isEditableTarget(event.target));
    };

    const onFocusOut = () => {
      setIsHidden(false);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('focusin', onFocusIn);
    window.addEventListener('focusout', onFocusOut);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('focusin', onFocusIn);
      window.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.cursor} ${isHidden ? styles.hidden : ''}`}
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
