# Create Orange Agenda React App

A feature-driven React application template built with modern tools and best practices using the Orange Agenda component library.

## Getting Started

```bash
# Create a new app
pnpm create @nycu-sdc/orange-agenda
```

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

### Development Server

The app is now running at http://localhost:5173/

## Project Structure

```
src/
├── features/              # Business domain features
│   ├── home/             # Home page feature
│   │   ├── components/   # Feature-specific components
│   │   ├── hooks/        # Feature-specific hooks
│   │   ├── services/     # Business logic & API calls
│   │   ├── types/        # TypeScript types
│   │   └── index.ts      # Public API exports
│   └── about/            # About page feature
│       └── ...
│
├── shared/               # Reusable across features
│   ├── components/       # Shared UI components
│   ├── hooks/            # Shared hooks
│   ├── utils/            # Helper functions
│   └── styles/           # Global styles & CSS variables
│
├── layouts/              # Layout components
│   └── RootLayout.tsx
│
├── routes/               # Routing configuration
│   └── index.tsx
│
├── assets/               # Static assets
│
├── index.css             # Global styles
├── main.tsx              # Application entry point
└── vite-env.d.ts         # TypeScript declarations
```

## Key Features

### 1. Feature-Driven Architecture

Each feature is self-contained with its own components, hooks, services, and types.

### 2. React Query Integration

Demonstrates data fetching with React Query in the home page.

### 3. CSS Modules

Component-scoped styles prevent CSS conflicts.

### 4. Clean Import Paths

Uses `@/` alias for absolute imports:

```typescript
import { HomePage } from '@/features/home';
import { Button } from '@/shared/components';
```

### 5. TypeScript Support

Full TypeScript support with proper type definitions.

## Adding a New Feature

1. **Create feature directory:**

   ```bash
   mkdir -p src/features/my-feature/{components,hooks,services,types}
   ```

2. **Create components:**

   ```typescript
   // src/features/my-feature/components/MyComponent.tsx
   export const MyComponent = () => {
     return <div>My Component</div>;
   };
   ```

3. **Create services:**

   ```typescript
   // src/features/my-feature/services/myService.ts
   export const myService = {
     fetchData: async () => {
       // API call logic
     },
   };
   ```

4. **Create hooks:**

   ```typescript
   // src/features/my-feature/hooks/useMyData.ts
   import { useQuery } from '@tanstack/react-query';
   import { myService } from '../services/myService';

   export const useMyData = () => {
     return useQuery({
       queryKey: ['myData'],
       queryFn: myService.fetchData,
     });
   };
   ```

5. **Export public API:**

   ```typescript
   // src/features/my-feature/index.ts
   export { MyComponent } from './components/MyComponent';
   export { useMyData } from './hooks/useMyData';
   ```

6. **Add route:**

   ```typescript
   // src/routes/index.tsx
   import { MyComponent } from '@/features/my-feature';

   // Add to router configuration
   {
     path: 'my-feature',
     element: <MyComponent />,
   }
   ```

## Styling Guidelines

### CSS Variables

Use CSS variables defined in `src/shared/styles/variables.css`:

```css
.myComponent {
  color: var(--text-primary);
  background: var(--bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}
```

### CSS Modules

Each component has its own scoped styles:

```typescript
import styles from './MyComponent.module.css';

export const MyComponent = () => {
  return <div className={styles.container}>Content</div>;
};
```

## Best Practices

1. **Use Orange Agenda components** when available instead of creating custom ones
2. **Keep features independent** - avoid cross-feature dependencies
3. **Use absolute imports** with `@/` alias
4. **Export clean APIs** through index files
5. **Type everything** with TypeScript
6. **Use React Query** for server state management
7. **CSS Modules** for component-scoped styles

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **React Query** - Data fetching & caching
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling
- **Orange Agenda** - UI component library (Radix UI based)
- **ESLint & Prettier** - Code quality

## Next Steps

1. Explore the demo features (`/` and `/about`)
2. Check the React Query demo on the home page
3. Add your own features following the architecture
4. Customize CSS variables for your brand
5. Add Orange Agenda components as needed

Happy coding! 🚀
