import React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import styles from './ScrollArea.module.css';

export interface ScrollAreaProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ children, style }) => {
  return (
    <ScrollAreaPrimitive.Root className={styles.root} style={style}>
      <ScrollAreaPrimitive.Viewport className={styles.viewport}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar className={styles.scrollbar} orientation="vertical">
        <ScrollAreaPrimitive.Thumb className={styles.thumb} />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
};

ScrollArea.displayName = 'ScrollArea';
