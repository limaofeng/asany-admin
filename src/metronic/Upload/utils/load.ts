import { useCallback } from 'react';

import { gql, useLazyQuery } from '@apollo/client';

import type { UploadFileData } from './upload';

const LOAD_FILE = gql`
  query file($id: ID!) {
    file(id: $id) {
      id
      name
      path
      size(format: true)
      mimeType
      extension
      isDirectory
      lastModified(format: "yyyy-MM-dd HH:mm")
    }
  }
`;

type QueryFile = (id: string) => Promise<UploadFileData>;

type UseLoadFileResult = [QueryFile, { loading: boolean }];

export const useLoadFile = (): UseLoadFileResult => {
  const [loadFile, { loading }] = useLazyQuery(LOAD_FILE, {
    fetchPolicy: 'cache-and-network',
  });

  const queryFile = useCallback(
    async (id: string) => {
      const { data } = await loadFile({ variables: { id } });
      return data?.file;
    },
    [loadFile],
  );

  return [queryFile, { loading }];
};
