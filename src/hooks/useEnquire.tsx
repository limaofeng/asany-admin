import { useEffect, useState } from 'react';

import enquire from 'enquire.js';

type Queries = {
  [key: string]: {
    minWidth?: number;
    maxWidth?: number;
  };
};

const useEnquire = (queries: Queries) => {
  const [matches, setMatches] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const handlers = Object.keys(queries).reduce((acc, queryKey) => {
      const { minWidth, maxWidth } = queries[queryKey];
      const mediaQuery = `screen and (min-width: ${
        minWidth || 0
      }px) and (max-width: ${maxWidth || 10000}px)`;
      acc[mediaQuery] = {
        match: () => {
          setMatches((prevMatches) => ({
            ...prevMatches,
            [queryKey]: true,
          }));
        },
        unmatch: () => {
          setMatches((prevMatches) => ({
            ...prevMatches,
            [queryKey]: false,
          }));
        },
      };
      return acc;
    }, {} as any);

    Object.keys(handlers).forEach((queryKey) => {
      enquire.register(queryKey, handlers[queryKey]);
    });

    return () => {
      Object.keys(handlers).forEach((queryKey) => {
        enquire.unregister(queryKey, handlers[queryKey]);
      });
    };
  }, [queries]);

  return matches;
};

export default useEnquire;
