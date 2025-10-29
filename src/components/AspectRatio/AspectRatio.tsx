import React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

export interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ ratio = 16 / 9, children }) => {
  return <AspectRatioPrimitive.Root ratio={ratio}>{children}</AspectRatioPrimitive.Root>;
};

AspectRatio.displayName = 'AspectRatio';
