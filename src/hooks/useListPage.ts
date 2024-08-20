import { useCallback, useMemo } from 'react';

import {
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';
import { useNavigate } from '@umijs/max';
import qs from 'query-string';

import useQuery from '@/hooks/useQuery';
import { PaginationProps } from '@/metronic/Table/Pagination';
import { Sorter } from '@/metronic/typings';
import { PageInfo } from '@/types';

export type ResultEdge<T> = {
  node: T;
};

export type ResultQuery<T> = {
  result: {
    pageInfo: PageInfo;
    edges: ResultEdge<T>[];
  };
};

const defaultPageInfo: PageInfo = {
  total: 0,
  current: 1,
  pageSize: 10,
  totalPages: 0,
  hasNextPage: false,
  hasPreviousPage: false,
};

type SearchOptions = {
  toQuery?: (
    variables: any,
    pagination: PaginationProps,
    filters: { [key: string]: any } | undefined,
    sorter: Sorter,
  ) => any;
  toVariables?: (query: { [key: string]: any }) => {
    [key: string]: any;
  };
};

function useListPage<T, Q = any>(
  useDataQuery: (baseOptions?: QueryHookOptions<Q, OperationVariables>) => any,
  search?: SearchOptions,
  skip?: boolean,
): [
  T[],
  {
    loading: boolean;
    pageInfo: PageInfo;
    sorter: Sorter;
    refetch: () => void;
    variables: { [key: string]: any };
    onChange: (pagination: any, where: any, sorter: any) => void;
  },
] {
  const navigate = useNavigate();

  const query = useQuery();

  const variables = useMemo(() => {
    const _variables =
      (search?.toVariables && search?.toVariables(query)) || {};
    console.log('variables', _variables);
    if (_variables.page && typeof _variables.page === 'string') {
      _variables.page = parseInt(_variables.page, 10);
    }
    if (_variables.pageSize && typeof _variables.pageSize === 'string') {
      _variables.pageSize = parseInt(_variables.pageSize, 10);
    }
    return _variables;
  }, [query, search]);

  const sorter = useMemo<Sorter>(() => {
    if (!variables.orderBy) {
      return {
        order: 'descend',
        field: 'createdAt',
      };
    }
    const [field, order] = variables.orderBy.split('_');
    return {
      order: order === 'desc' ? 'descend' : 'ascend',
      field,
    };
  }, [variables.orderBy]);

  const { data, loading, previousData, refetch } = useDataQuery({
    fetchPolicy: 'cache-and-network',
    variables,
    skip: skip,
  }) as QueryResult<ResultQuery<T>, OperationVariables>;

  const pageInfo = useMemo(() => {
    if (loading) {
      return previousData?.result.pageInfo || defaultPageInfo;
    }
    return data?.result.pageInfo || defaultPageInfo;
  }, [
    data?.result?.pageInfo.total,
    loading,
    previousData?.result?.pageInfo.total,
  ]);

  const handleChange = useCallback(
    (_pagination: any, _where: any, _sorter: any) => {
      const query =
        (search?.toQuery &&
          search.toQuery(variables, _pagination, _where, _sorter)) ||
        '';
      navigate(location.pathname + '?' + qs.stringify(query), {
        replace: true,
      });
    },
    [history, location.pathname, variables.filter?.name_contains],
  );

  const nodes = data?.result.edges.map((edge) => edge.node) || [];

  console.log('nodes', nodes);

  return [
    nodes,
    { loading, pageInfo, sorter, variables, onChange: handleChange, refetch },
  ];
}

export default useListPage;
