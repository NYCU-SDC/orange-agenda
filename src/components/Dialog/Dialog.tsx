import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import styles from './Dialog.module.css';

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export interface DialogContentProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

export const DialogTrigger: React.FC<DialogTriggerProps> = ({ children, asChild = false }) => {
  return <DialogPrimitive.Trigger asChild={asChild}>{children}</DialogPrimitive.Trigger>;
};

export const DialogContent: React.FC<DialogContentProps> = ({ children, title, description }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content className={styles.content}>
        {title && <DialogPrimitive.Title className={styles.title}>{title}</DialogPrimitive.Title>}
        {description && (
          <DialogPrimitive.Description className={styles.description}>
            {description}
          </DialogPrimitive.Description>
        )}
        {children}
        <DialogPrimitive.Close className={styles.close} aria-label="Close">
          ✕
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

Dialog.displayName = 'Dialog';
DialogTrigger.displayName = 'DialogTrigger';
DialogContent.displayName = 'DialogContent';
