import { 
  Button, 
  Dialog, 
  DialogTrigger, 
  DialogContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Switch,
  Tooltip,
  TooltipProvider,
} from '@nycu-sdc/orange-agenda';
import { useFormData } from '../hooks/useFormData';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { data, isLoading, error } = useFormData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to The Orange Agenda</h1>
      <p className={styles.subtitle}>
        A modern React application with feature-driven architecture
      </p>

      <div className={styles.buttonDemo}>
        <TooltipProvider>
          <Tooltip content="Click me!">
            <Button variant="default">Default Button</Button>
          </Tooltip>
        </TooltipProvider>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent title="Orange Agenda Dialog" description="This is a dialog from Orange Agenda component library">
            <p>You can put any content here. The dialog is accessible and follows WAI-ARIA standards.</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <Button variant="default">Confirm</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>⚡ Vite</h3>
          <p>Lightning fast development with Hot Module Replacement</p>
        </div>
        <div className={styles.feature}>
          <h3>⚛️ React</h3>
          <p>Build component-driven UIs with the latest React features</p>
        </div>
        <div className={styles.feature}>
          <h3>🎨 Orange Agenda</h3>
          <p>Beautiful UI components based on Radix UI</p>
        </div>
        <div className={styles.feature}>
          <h3>🔄 React Query</h3>
          <p>Powerful data fetching and state management</p>
        </div>
      </div>

      <div className={styles.tabsDemo}>
        <h2>Tabs Component Demo</h2>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className={styles.tabContent}>
              <h3>Project Overview</h3>
              <p>This is a feature-driven React template with modern tooling and best practices.</p>
              <ul>
                <li>TypeScript for type safety</li>
                <li>Vite for blazing fast builds</li>
                <li>CSS Modules for scoped styling</li>
                <li>React Query for server state management</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="features">
            <div className={styles.tabContent}>
              <h3>Key Features</h3>
              <p>Independent features with clean APIs, shared components, and absolute imports using @ alias.</p>
              <div style={{ marginTop: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Switch defaultChecked />
                  <span>Enable dark mode (Demo)</span>
                </label>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="getting-started">
            <div className={styles.tabContent}>
              <h3>Getting Started</h3>
              <p>Run <code>pnpm dev</code> to start the development server.</p>
              <p>Add new features in <code>src/features/</code> following the established pattern.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className={styles.demo}>
        <h2>React Query Demo</h2>
        {isLoading && <p>Loading form data...</p>}
        {error && <p className={styles.error}>Error: {error.message}</p>}
        {data && (
          <div className={styles.demoContent}>
            <p className={styles.success}>✓ Successfully fetched data</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};
