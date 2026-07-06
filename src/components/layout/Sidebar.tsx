import { navList, contactEmail } from '../../data/portfolio';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        Siwar<span className={styles.dot}>.</span>
      </div>
      <nav className={styles.nav}>
        {navList.map((n) => (
          <a key={n.id} href={n.href} data-nav={n.id} className={`navlink ${styles.navlink}`}>
            <span className={styles.bullet} />
            {n.label}
          </a>
        ))}
      </nav>
      <div className={styles.social}>
        <a href="#" className={styles.iconLink} aria-label="GitHub">
          <i className="devicon-github-original" />
        </a>
        <a href="#" className={styles.iconLink} aria-label="LinkedIn">
          <i className="devicon-linkedin-plain" />
        </a>
        <a href={`mailto:${contactEmail}`} className={styles.iconLink} aria-label="Email">
          ✉
        </a>
      </div>
    </aside>
  );
}
