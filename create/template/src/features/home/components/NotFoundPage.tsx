import { Link } from 'react-router-dom';
import { Button } from '@nycu-sdc/orange-agenda';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! Page not found.</p>
      <p className={styles.subtitle}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className={styles.linkWrapper}>
        <Button variant="default">Go back home</Button>
      </Link>
    </div>
  );
};
