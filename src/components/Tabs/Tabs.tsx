import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import styles from './Tabs.module.css';

export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export interface TabsListProps {
  children: React.ReactNode;
}

export interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

export interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children, ...props }) => {
  return (
    <TabsPrimitive.Root className={styles.root} {...props}>
      {children}
    </TabsPrimitive.Root>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return <TabsPrimitive.List className={styles.list}>{children}</TabsPrimitive.List>;
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, ...props }) => {
  return (
    <TabsPrimitive.Trigger className={styles.trigger} {...props}>
      {children}
    </TabsPrimitive.Trigger>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({ children, ...props }) => {
  return (
    <TabsPrimitive.Content className={styles.content} {...props}>
      {children}
    </TabsPrimitive.Content>
  );
};

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';
