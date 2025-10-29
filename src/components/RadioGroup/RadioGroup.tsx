import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export interface RadioGroupItemProps {
  value: string;
  id?: string;
  disabled?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, ...props }) => {
  return (
    <RadioGroupPrimitive.Root className={styles.root} {...props}>
      {children}
    </RadioGroupPrimitive.Root>
  );
};

export const RadioGroupItem: React.FC<RadioGroupItemProps> = props => {
  return (
    <RadioGroupPrimitive.Item className={styles.item} {...props}>
      <RadioGroupPrimitive.Indicator className={styles.indicator} />
    </RadioGroupPrimitive.Item>
  );
};

RadioGroup.displayName = 'RadioGroup';
RadioGroupItem.displayName = 'RadioGroupItem';
