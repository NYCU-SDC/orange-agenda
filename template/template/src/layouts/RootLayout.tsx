import { Outlet, Link } from 'react-router-dom';
import styles from './RootLayout.module.css';

export const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/">The Orange Agenda</Link>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 The Orange Agenda. Built with React + Vite.</p>
      </footer>
    </div>
  );
};
