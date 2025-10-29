import React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import styles from './ToggleGroup.module.css';

type ToggleGroupSingleProps = {
  type: 'single';
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
};

type ToggleGroupMultipleProps = {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  children: React.ReactNode;
};

export type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ children, ...props }) => {
  return (
    <ToggleGroupPrimitive.Root
      className={styles.root}
      {...(props.type === 'single'
        ? {
            type: 'single' as const,
            value: props.value as string | undefined,
            defaultValue: props.defaultValue as string | undefined,
            onValueChange: props.onValueChange as ((value: string) => void) | undefined,
          }
        : {
            type: 'multiple' as const,
            value: props.value as string[] | undefined,
            defaultValue: props.defaultValue as string[] | undefined,
            onValueChange: props.onValueChange as ((value: string[]) => void) | undefined,
          })}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
};

export interface ToggleGroupItemProps {
  value: string;
  children: React.ReactNode;
}

export const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({ children, ...props }) => {
  return (
    <ToggleGroupPrimitive.Item className={styles.item} {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
};

ToggleGroup.displayName = 'ToggleGroup';
ToggleGroupItem.displayName = 'ToggleGroupItem';
