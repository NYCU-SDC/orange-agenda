import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import styles from './Slider.module.css';

export interface SliderProps {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export const Slider: React.FC<SliderProps> = props => {
  return (
    <SliderPrimitive.Root className={styles.root} {...props}>
      <SliderPrimitive.Track className={styles.track}>
        <SliderPrimitive.Range className={styles.range} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={styles.thumb} />
    </SliderPrimitive.Root>
  );
};

Slider.displayName = 'Slider';
