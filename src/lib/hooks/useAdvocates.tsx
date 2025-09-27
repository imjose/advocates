import { useState, useEffect } from 'react';

import { Advocate } from '../types/advocate';
import { PaginatedResult, PaginationOptions } from '../types/params';
import { resolveSearchParams } from '../util/params';

type FetchState<T> = {
    data: T | undefined;
    loading: boolean;
    error: unknown;
};

/**
 * Custom hook for fetching advocates with pagination and search functionality
 * @param options - (optional) PaginationOptions
 * @returns PaginatedResult<Advocate>
 */
export function useAdvocates(options?: PaginationOptions) {
  const [advocates, setAdvocates] = useState<FetchState<PaginatedResult<Advocate>>>({
    data: undefined,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchAdvocates() {
      try {
        const searchParams = resolveSearchParams(options);
        
        const url = `/api/advocates${searchParams.size ? `?${searchParams.toString()}` : ''}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Houston.. we have a problem!');
        }
        
        const data = await response.json();
        setAdvocates({ data, loading: false, error: null });
      } catch (error) {
        setAdvocates({ data: undefined, loading: false, error });
      }
    }

    fetchAdvocates();
  }, [options]);

  return advocates;
}
