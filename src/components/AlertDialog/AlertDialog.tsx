import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import styles from './AlertDialog.module.css';

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export interface AlertDialogContentProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className={styles.overlay} />
      <AlertDialogPrimitive.Content className={styles.content}>
        {title && (
          <AlertDialogPrimitive.Title className={styles.title}>{title}</AlertDialogPrimitive.Title>
        )}
        {description && (
          <AlertDialogPrimitive.Description className={styles.description}>
            {description}
          </AlertDialogPrimitive.Description>
        )}
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
};

export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

AlertDialogContent.displayName = 'AlertDialogContent';
