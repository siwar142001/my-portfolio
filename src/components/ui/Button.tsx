import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const variantClass = variant === 'primary' ? styles.primary : styles.secondary;
  return (
    <a className={`${styles.button} ${variantClass} ${className ?? ''}`} {...rest}>
      <span className={styles.label}>{children}</span>
      {variant === 'primary' && (
        <span className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 48 48" focusable="false">
            <circle cx="24" cy="24" r="17" />
            <circle cx="24" cy="24" r="3" />
            <path d="M24 3v8M24 37v8M3 24h8M37 24h8M9.2 9.2l5.6 5.6M33.2 33.2l5.6 5.6M38.8 9.2l-5.6 5.6M14.8 33.2l-5.6 5.6" />
            <path d="M29.8 18.2 26 26l-7.8 3.8L22 22z" />
          </svg>
        </span>
      )}
    </a>
  );
}
