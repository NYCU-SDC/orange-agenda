import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  Button,
  Progress,
  Separator,
} from '@nycu-sdc/orange-agenda';
import { useDocsData } from '../hooks/useDocsData';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
  const { data: docs } = useDocsData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About The Orange Agenda</h1>
      
      <section className={styles.section}>
        <h2>Technology Stack</h2>
        <ul className={styles.techList}>
          {docs?.technologies.map((tech) => (
            <li key={tech} className={styles.techItem}>
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      <section className={styles.section}>
        <h2>Progress Demo</h2>
        <div className={styles.progressDemo}>
          <div>
            <label>Project Setup: 100%</label>
            <Progress value={100} />
          </div>
          <div>
            <label>Features Implemented: 75%</label>
            <Progress value={75} />
          </div>
          <div>
            <label>Documentation: 60%</label>
            <Progress value={60} />
          </div>
        </div>
      </section>

      <Separator />

      <section className={styles.section}>
        <h2>Architecture Principles</h2>
        <Accordion type="single">
          {docs?.principles.map((principle, index) => (
            <AccordionItem key={principle.title} value={`item-${index}`}>
              <AccordionTrigger>{principle.title}</AccordionTrigger>
              <AccordionContent>
                <p className={styles.principleDescription}>{principle.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Separator />

      <section className={styles.section}>
        <h2>Getting Started</h2>
        <p className={styles.description}>
          This project follows a feature-driven architecture pattern. Each feature
          is self-contained with its own components, hooks, services, and types.
        </p>
        <p className={styles.description}>
          Shared components and utilities are placed in the <code>shared/</code> directory
          and can be used across all features.
        </p>
        <div className={styles.actions}>
          <Button variant="default" onClick={() => window.open('/QUICKSTART.md', '_blank')}>
            View Quick Start
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            Go to Home
          </Button>
        </div>
      </section>
    </div>
  );
};
