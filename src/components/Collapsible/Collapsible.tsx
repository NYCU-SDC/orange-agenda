import React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import styles from './Collapsible.module.css';

export const Collapsible = CollapsiblePrimitive.Root;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export interface CollapsibleContentProps {
  children: React.ReactNode;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ children }) => {
  return (
    <CollapsiblePrimitive.Content className={styles.content}>
      {children}
    </CollapsiblePrimitive.Content>
  );
};

CollapsibleContent.displayName = 'CollapsibleContent';
