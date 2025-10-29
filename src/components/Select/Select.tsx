import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import styles from './Select.module.css';

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  children,
  placeholder = 'Select...',
  ...props
}) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className={styles.trigger}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className={styles.icon}>▼</SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={styles.content}>
          <SelectPrimitive.Viewport className={styles.viewport}>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ children, ...props }) => {
  return (
    <SelectPrimitive.Item className={styles.item} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={styles.indicator}>✓</SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

Select.displayName = 'Select';
SelectItem.displayName = 'SelectItem';
