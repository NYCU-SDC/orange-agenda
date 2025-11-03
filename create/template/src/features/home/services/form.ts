import type { FormData } from '../types';

// Mock form service demonstrating React Query usage
export const formService = {
  getFormData: async (): Promise<FormData> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return {
      message: 'Hello from React Query!',
      timestamp: new Date().toISOString(),
      features: [
        'Vite',
        'React',
        'React Query',
        'Orange Agenda',
        'CSS Modules',
      ],
    };
  },
};
