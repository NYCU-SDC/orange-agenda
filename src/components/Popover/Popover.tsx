import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import styles from './Popover.module.css';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export interface PopoverContentProps {
  children: React.ReactNode;
  sideOffset?: number;
}

export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  sideOffset = 5,
  ...props
}) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content className={styles.content} sideOffset={sideOffset} {...props}>
        {children}
        <PopoverPrimitive.Arrow className={styles.arrow} />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
};

PopoverContent.displayName = 'PopoverContent';
