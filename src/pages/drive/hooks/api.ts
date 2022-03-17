import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CloudDriveQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CloudDriveQuery = {
  __typename?: 'Query';
  cloudDrive: {
    __typename?: 'CloudDrive';
    id: string;
    name: string;
    type: CloudDriveType;
    rootFolder: string;
  };
};

export type CloudDrivesQueryVariables = Exact<Record<string, never>>;

export type CloudDrivesQuery = {
  __typename?: 'Query';
  cloudDrives: {
    __typename?: 'CloudDrive';
    id: string;
    name: string;
    type: CloudDriveType;
    rootFolder: string;
    quota: {
      __typename?: 'CloudDriveQuota';
      id: string;
      count: number;
      usage: any;
      size: any;
      usageStr: any;
      sizeStr: any;
    };
  }[];
};

export type FolderQueryVariables = Exact<{
  folder: Scalars['ID'];
}>;

export type FolderQuery = {
  __typename?: 'Query';
  currentFolder?: {
    __typename?: 'FileObject';
    id: string;
    name: string;
    path: string;
    isDirectory: boolean;
    isRootFolder: boolean;
    parents?:
      | {
          __typename?: 'FileObject';
          id: string;
          isDirectory: boolean;
          isRootFolder: boolean;
          name: string;
          path: string;
        }[]
      | null;
  } | null;
};

export type ListFilesQueryVariables = Exact<{
  folder: Scalars['ID'];
  filter?: InputMaybe<FileFilter>;
  page?: InputMaybe<Scalars['Int']>;
}>;

export type ListFilesQuery = {
  __typename?: 'Query';
  listFiles: {
    __typename?: 'FileObjectConnection';
    pageSize: number;
    currentPage: number;
    totalPage: number;
    totalCount: number;
    edges: {
      __typename?: 'FileObjectEdge';
      node: {
        __typename?: 'FileObject';
        id: string;
        name: string;
        path: string;
        size?: any | null;
        mimeType?: string | null;
        isDirectory: boolean;
        lastModified?: any | null;
      };
    }[];
  };
};

export const CloudDriveDocument = gql`
  query cloudDrive($id: ID!) {
    cloudDrive(id: $id) {
      id
      name
      type
      rootFolder
    }
  }
`;

/**
 * __useCloudDriveQuery__
 *
 * To run a query within a React component, call `useCloudDriveQuery` and pass it any options that fit your needs.
 * When your component renders, `useCloudDriveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCloudDriveQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCloudDriveQuery(
  baseOptions: Apollo.QueryHookOptions<CloudDriveQuery, CloudDriveQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CloudDriveQuery, CloudDriveQueryVariables>(CloudDriveDocument, options);
}
export function useCloudDriveLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CloudDriveQuery, CloudDriveQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CloudDriveQuery, CloudDriveQueryVariables>(
    CloudDriveDocument,
    options,
  );
}
export type CloudDriveQueryHookResult = ReturnType<typeof useCloudDriveQuery>;
export type CloudDriveLazyQueryHookResult = ReturnType<typeof useCloudDriveLazyQuery>;
export type CloudDriveQueryResult = Apollo.QueryResult<CloudDriveQuery, CloudDriveQueryVariables>;
export const CloudDrivesDocument = gql`
  query cloudDrives {
    cloudDrives {
      id
      name
      type
      quota {
        id
        count
        usage
        size
        usageStr: usage(format: true)
        sizeStr: size(format: true)
      }
      rootFolder
    }
  }
`;

/**
 * __useCloudDrivesQuery__
 *
 * To run a query within a React component, call `useCloudDrivesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCloudDrivesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCloudDrivesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCloudDrivesQuery(
  baseOptions?: Apollo.QueryHookOptions<CloudDrivesQuery, CloudDrivesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CloudDrivesQuery, CloudDrivesQueryVariables>(CloudDrivesDocument, options);
}
export function useCloudDrivesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CloudDrivesQuery, CloudDrivesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CloudDrivesQuery, CloudDrivesQueryVariables>(
    CloudDrivesDocument,
    options,
  );
}
export type CloudDrivesQueryHookResult = ReturnType<typeof useCloudDrivesQuery>;
export type CloudDrivesLazyQueryHookResult = ReturnType<typeof useCloudDrivesLazyQuery>;
export type CloudDrivesQueryResult = Apollo.QueryResult<
  CloudDrivesQuery,
  CloudDrivesQueryVariables
>;
export const FolderDocument = gql`
  query folder($folder: ID!) {
    currentFolder: file(id: $folder) {
      id
      name
      path
      isDirectory
      isRootFolder
      parents {
        id
        isDirectory
        isRootFolder
        name
        path
      }
    }
  }
`;

/**
 * __useFolderQuery__
 *
 * To run a query within a React component, call `useFolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFolderQuery({
 *   variables: {
 *      folder: // value for 'folder'
 *   },
 * });
 */
export function useFolderQuery(
  baseOptions: Apollo.QueryHookOptions<FolderQuery, FolderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FolderQuery, FolderQueryVariables>(FolderDocument, options);
}
export function useFolderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FolderQuery, FolderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FolderQuery, FolderQueryVariables>(FolderDocument, options);
}
export type FolderQueryHookResult = ReturnType<typeof useFolderQuery>;
export type FolderLazyQueryHookResult = ReturnType<typeof useFolderLazyQuery>;
export type FolderQueryResult = Apollo.QueryResult<FolderQuery, FolderQueryVariables>;
export const ListFilesDocument = gql`
  query listFiles($folder: ID!, $filter: FileFilter, $page: Int = 1) {
    listFiles(folder: $folder, filter: $filter, page: $page, pageSize: 30) {
      pageSize
      currentPage
      totalPage
      totalCount
      edges {
        node {
          id
          name
          path
          size(format: true)
          mimeType
          isDirectory
          lastModified(format: "yyyy-MM-dd HH:mm")
        }
      }
    }
  }
`;

/**
 * __useListFilesQuery__
 *
 * To run a query within a React component, call `useListFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFilesQuery({
 *   variables: {
 *      folder: // value for 'folder'
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListFilesQuery(
  baseOptions: Apollo.QueryHookOptions<ListFilesQuery, ListFilesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListFilesQuery, ListFilesQueryVariables>(ListFilesDocument, options);
}
export function useListFilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListFilesQuery, ListFilesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ListFilesQuery, ListFilesQueryVariables>(ListFilesDocument, options);
}
export type ListFilesQueryHookResult = ReturnType<typeof useListFilesQuery>;
export type ListFilesLazyQueryHookResult = ReturnType<typeof useListFilesLazyQuery>;
export type ListFilesQueryResult = Apollo.QueryResult<ListFilesQuery, ListFilesQueryVariables>;
