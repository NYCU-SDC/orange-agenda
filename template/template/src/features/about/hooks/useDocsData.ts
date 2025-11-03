import { useQuery } from '@tanstack/react-query';
import { docsData } from '../services/docsData';

export const useDocsData = () => {
  return useQuery({
    queryKey: ['docsData'],
    queryFn: async () => docsData,
  });
};
