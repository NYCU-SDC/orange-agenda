import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import styles from './Switch.module.css';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
}

export const Switch: React.FC<SwitchProps> = props => {
  return (
    <SwitchPrimitive.Root className={styles.root} {...props}>
      <SwitchPrimitive.Thumb className={styles.thumb} />
    </SwitchPrimitive.Root>
  );
};

Switch.displayName = 'Switch';
