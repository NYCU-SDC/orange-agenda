import React from 'react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import styles from './Toolbar.module.css';

export const Toolbar: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <ToolbarPrimitive.Root className={styles.root} {...props}>
    {children}
  </ToolbarPrimitive.Root>
);

export const ToolbarButton: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <ToolbarPrimitive.Button className={styles.button} {...props}>
    {children}
  </ToolbarPrimitive.Button>
);

export const ToolbarSeparator = () => <ToolbarPrimitive.Separator className={styles.separator} />;

Toolbar.displayName = 'Toolbar';
ToolbarButton.displayName = 'ToolbarButton';
