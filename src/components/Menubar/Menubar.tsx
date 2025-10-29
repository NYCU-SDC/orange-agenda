import React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import styles from './Menubar.module.css';

export const Menubar = MenubarPrimitive.Root;
export const MenubarMenu = MenubarPrimitive.Menu;
export const MenubarTrigger: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <MenubarPrimitive.Trigger className={styles.trigger} {...props}>
    {children}
  </MenubarPrimitive.Trigger>
);

export const MenubarContent: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content className={styles.content} {...props}>
      {children}
    </MenubarPrimitive.Content>
  </MenubarPrimitive.Portal>
);

export const MenubarItem: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <MenubarPrimitive.Item className={styles.item} {...props}>
    {children}
  </MenubarPrimitive.Item>
);

export const MenubarSeparator = () => <MenubarPrimitive.Separator className={styles.separator} />;

MenubarTrigger.displayName = 'MenubarTrigger';
MenubarContent.displayName = 'MenubarContent';
MenubarItem.displayName = 'MenubarItem';
