import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => {
  return (
    <AvatarPrimitive.Root className={styles.root}>
      <AvatarPrimitive.Image className={styles.image} src={src} alt={alt} />
      <AvatarPrimitive.Fallback className={styles.fallback} delayMs={600}>
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

Avatar.displayName = 'Avatar';
