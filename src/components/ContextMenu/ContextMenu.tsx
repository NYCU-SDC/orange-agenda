import React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import styles from './ContextMenu.module.css';

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

export const ContextMenuContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content className={styles.content}>
      {children}
    </ContextMenuPrimitive.Content>
  </ContextMenuPrimitive.Portal>
);

export const ContextMenuItem: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => (
  <ContextMenuPrimitive.Item className={styles.item} {...props}>
    {children}
  </ContextMenuPrimitive.Item>
);

export const ContextMenuSeparator = () => (
  <ContextMenuPrimitive.Separator className={styles.separator} />
);

ContextMenuContent.displayName = 'ContextMenuContent';
ContextMenuItem.displayName = 'ContextMenuItem';
