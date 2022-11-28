import { useEffect, useMemo, useState } from 'react';

import { useApolloClient } from '@apollo/client';
import gql from 'graphql-tag';

import type { Model, ModelField } from '@/types';

type ConnectionResult = {
  data?: {
    pagination: {
      totalPage: number;
      currentPage: number;
      pageSize: number;
      totalCount: number;
      edges: {
        cursor: string;
        node: {
          id: string;
          [key: string]: any;
        };
      };
    };
  };
  loading: boolean;
  error: any;
};

function useConnection(
  model: Model | null | undefined,
  fields: ModelField[],
): [string, ConnectionResult] {
  const apolloClient = useApolloClient();

  const [state, setState] = useState<ConnectionResult>({
    loading: false,
    error: null,
  });

  const endpoint = useMemo(() => {
    if (!model?.endpoints) {
      return null;
    }
    return model.endpoints.find((e) => e.type == 'CONNECTION');
  }, [model?.endpoints]);

  useEffect(() => {
    if (!fields.length || !endpoint) {
      return;
    }
    setState((s) => ({ ...s, loading: true }));
    const whereTypeName = endpoint.arguments.find((a) => a.name == 'where')!.type;
    const orderByTypeName = endpoint.arguments.find((a) => a.name == 'orderBy')!.type;
    const SearchDocument = `query search(
      $where: ${whereTypeName}
      $page: Int
      $pageSize: Int
      $orderBy: ${orderByTypeName}
    ) {
      pagination: ${endpoint.code}(
        where: $where
        page: $page
        pageSize: $pageSize
        orderBy: $orderBy
      ) {
        totalPage
        currentPage
        pageSize
        totalCount
        edges {
          cursor
          node {
            ${fields.map((f, i) => (i > 0 ? '            ' + f.code : f.code)).join('\r\n')}
          }
        }
      }
    }
    `;
    const abortController = new AbortController();
    apolloClient
      .query({
        query: gql(SearchDocument),
        fetchPolicy: 'network-only',
        context: {
          fetchOptions: {
            signal: abortController.signal,
          },
        },
      })
      .then(({ data, loading, error }) => {
        if (abortController.signal.aborted) {
          return;
        }
        setState((s) => ({ ...s, data, loading, error }));
        console.log('search data: ', data);
      });
    return () => {
      abortController.abort();
    };
  }, [fields, endpoint, apolloClient]);

  return ['', state];
}

export default useConnection;
