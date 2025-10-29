import React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import styles from './HoverCard.module.css';

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export interface HoverCardContentProps {
  children: React.ReactNode;
  sideOffset?: number;
}

export const HoverCardContent: React.FC<HoverCardContentProps> = ({
  children,
  sideOffset = 5,
  ...props
}) => {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content className={styles.content} sideOffset={sideOffset} {...props}>
        {children}
        <HoverCardPrimitive.Arrow className={styles.arrow} />
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
};

HoverCardContent.displayName = 'HoverCardContent';
