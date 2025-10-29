import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import styles from './Progress.module.css';

export interface ProgressProps {
  value?: number;
  max?: number;
}

export const Progress: React.FC<ProgressProps> = ({ value = 0, max = 100 }) => {
  return (
    <ProgressPrimitive.Root className={styles.root} value={value} max={max}>
      <ProgressPrimitive.Indicator
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - (value / max) * 100}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};

Progress.displayName = 'Progress';
