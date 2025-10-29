import React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import styles from './Toggle.module.css';

export interface ToggleProps {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Toggle: React.FC<ToggleProps> = ({ children, ...props }) => {
  return (
    <TogglePrimitive.Root className={styles.root} {...props}>
      {children}
    </TogglePrimitive.Root>
  );
};

Toggle.displayName = 'Toggle';
