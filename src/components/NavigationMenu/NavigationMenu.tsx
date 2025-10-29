import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import styles from './NavigationMenu.module.css';

export const NavigationMenu: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <NavigationMenuPrimitive.Root className={styles.root} {...props}>
    {children}
  </NavigationMenuPrimitive.Root>
);

export const NavigationMenuList: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.List className={styles.list} {...props}>
    {children}
  </NavigationMenuPrimitive.List>
);

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const NavigationMenuTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.Trigger className={styles.trigger} {...props}>
    {children}
  </NavigationMenuPrimitive.Trigger>
);

export const NavigationMenuContent: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.Content className={styles.content} {...props}>
    {children}
  </NavigationMenuPrimitive.Content>
);

export const NavigationMenuLink: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.Link className={styles.link} {...props}>
    {children}
  </NavigationMenuPrimitive.Link>
);

NavigationMenu.displayName = 'NavigationMenu';
NavigationMenuList.displayName = 'NavigationMenuList';
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';
NavigationMenuContent.displayName = 'NavigationMenuContent';
NavigationMenuLink.displayName = 'NavigationMenuLink';
