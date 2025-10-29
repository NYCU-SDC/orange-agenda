import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import styles from './DropdownMenu.module.css';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export interface DropdownMenuContentProps {
  children: React.ReactNode;
  sideOffset?: number;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  sideOffset = 5,
  ...props
}) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content className={styles.content} sideOffset={sideOffset} {...props}>
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
};

export interface DropdownMenuItemProps {
  children: React.ReactNode;
  onSelect?: () => void;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children, ...props }) => {
  return (
    <DropdownMenuPrimitive.Item className={styles.item} {...props}>
      {children}
    </DropdownMenuPrimitive.Item>
  );
};

export const DropdownMenuSeparator: React.FC = () => {
  return <DropdownMenuPrimitive.Separator className={styles.separator} />;
};

DropdownMenuContent.displayName = 'DropdownMenuContent';
DropdownMenuItem.displayName = 'DropdownMenuItem';
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';
