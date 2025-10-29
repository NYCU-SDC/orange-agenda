import React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import styles from './Toast.module.css';

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport: React.FC = () => {
  return <ToastPrimitive.Viewport className={styles.viewport} />;
};

export interface ToastProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description?: string;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ title, description, duration = 3000, ...props }) => {
  return (
    <ToastPrimitive.Root className={styles.root} duration={duration} {...props}>
      <ToastPrimitive.Title className={styles.title}>{title}</ToastPrimitive.Title>
      {description && (
        <ToastPrimitive.Description className={styles.description}>
          {description}
        </ToastPrimitive.Description>
      )}
      <ToastPrimitive.Close className={styles.close}>✕</ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
};

Toast.displayName = 'Toast';
ToastViewport.displayName = 'ToastViewport';
