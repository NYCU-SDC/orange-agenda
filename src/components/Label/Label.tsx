import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import styles from './Label.module.css';

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <LabelPrimitive.Root className={styles.root} {...props}>
      {children}
    </LabelPrimitive.Root>
  );
};

Label.displayName = 'Label';
