import type { DocsData } from '../types';

export const docsData: DocsData = {
  technologies: [
    'The Orange Agenda (Radix UI)',
    'React 19',
    'Vite',
    'CSS Modules',
    'React Query',
    'TypeScript',
    'Prettier + ESLint',
  ],
  principles: [
    {
      title: 'Independent Features',
      description:
        'Each feature is self-contained and can operate independently, making the codebase modular and maintainable.',
    },
    {
      title: 'Shared Components',
      description:
        'Reusable components, hooks, and utilities are placed in the shared directory, avoiding duplication across features.',
    },
    {
      title: 'Clean Import Paths',
      description:
        'Use absolute paths with @ alias for clear and maintainable imports throughout the application.',
    },
    {
      title: 'Public API Pattern',
      description:
        'Each feature exports a clean public API through index files, making it easy to consume features elsewhere.',
    },
  ],
};
