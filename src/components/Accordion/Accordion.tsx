import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import styles from './Accordion.module.css';

type AccordionSingleProps = {
  type?: 'single';
  defaultValue?: string;
  children: React.ReactNode;
};

type AccordionMultipleProps = {
  type: 'multiple';
  defaultValue?: string[];
  children: React.ReactNode;
};

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

export const Accordion: React.FC<AccordionProps> = ({ children, type = 'single', ...props }) => {
  return (
    <AccordionPrimitive.Root
      className={styles.root}
      {...(type === 'single'
        ? { type: 'single' as const, defaultValue: props.defaultValue as string | undefined }
        : { type: 'multiple' as const, defaultValue: props.defaultValue as string[] | undefined })}
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

export interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, ...props }) => {
  return (
    <AccordionPrimitive.Item className={styles.item} {...props}>
      {children}
    </AccordionPrimitive.Item>
  );
};

export interface AccordionTriggerProps {
  children: React.ReactNode;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children }) => {
  return (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger className={styles.trigger}>
        {children}
        <span className={styles.chevron}>▼</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

export interface AccordionContentProps {
  children: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  return (
    <AccordionPrimitive.Content className={styles.content}>
      <div className={styles.contentInner}>{children}</div>
    </AccordionPrimitive.Content>
  );
};

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';
