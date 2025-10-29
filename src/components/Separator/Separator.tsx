import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import styles from './Separator.module.css';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal', ...props }) => {
  return (
    <SeparatorPrimitive.Root
      className={`${styles.root} ${styles[orientation]}`}
      orientation={orientation}
      {...props}
    />
  );
};

Separator.displayName = 'Separator';
