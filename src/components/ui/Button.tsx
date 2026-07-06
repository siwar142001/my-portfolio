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
      {children}
    </a>
  );
}
