import React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import styles from './ToggleGroup.module.css';

export interface ToggleGroupProps {
  type: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ children, ...props }) => {
  return (
    <ToggleGroupPrimitive.Root className={styles.root} {...props}>
      {children}
    </ToggleGroupPrimitive.Root>
  );
};

export interface ToggleGroupItemProps {
  value: string;
  children: React.ReactNode;
}

export const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({ children, ...props }) => {
  return (
    <ToggleGroupPrimitive.Item className={styles.item} {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
};

ToggleGroup.displayName = 'ToggleGroup';
ToggleGroupItem.displayName = 'ToggleGroupItem';
