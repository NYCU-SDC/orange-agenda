import { useQuery } from '@tanstack/react-query';
import { formService } from '../services/form';

export const useFormData = () => {
  return useQuery({
    queryKey: ['formData'],
    queryFn: formService.getFormData,
  });
};
