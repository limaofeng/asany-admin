/* eslint-disable graphql/template-strings */
import { useCallback, useReducer, useRef } from 'react';

import { gql, useMutation } from '@apollo/client';

import { sleep } from '@/utils';

const MUTATION_UPLOAD = gql`
  mutation upload($file: Upload!, $options: UploadOptions) {
    upload(file: $file, options: $options) {
      id
      name
      path
      isDirectory
      size
      mimeType
      md5
    }
  }
`;

type UploadResult = {
  id: string;
  name: string;
  path: string;
  directory: boolean;
  size: number;
  mimeType: string;
  createdAt: string;
};

type UseUploadResult = [(file: File) => Promise<UploadResult>, UploadResult | undefined, number];

type UseUploadState = {
  data?: UploadResult;
  progress: number;
};

export const useUpload = (namespace: string = 'Default'): UseUploadResult => {
  const state = useRef<UseUploadState>({
    progress: 0,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [mutate] = useMutation(MUTATION_UPLOAD, {
    context: {
      fetchOptions: {
        onUploadProgress: (_progress: any) => {
          const percent = ((_progress.loaded / _progress.total) * 100) << 0;
          if (percent == 100) {
            state.current.progress = Math.max(state.current.progress, 85);
            return forceRender();
          }
          state.current.progress = percent;
          forceRender();
        },
      },
    },
  });

  const upload = useCallback(
    async (file): Promise<UploadResult> => {
      state.current.data = undefined;
      state.current.progress = 0;
      await sleep(60);
      try {
        const { data } = await mutate({
          variables: {
            file,
            options: {
              space: namespace,
            },
          },
        });
        state.current.data = data.upload;
        state.current.progress = 100;
        return data.upload;
      } catch (e) {
        state.current.progress = 0;
        throw e;
      } finally {
        forceRender();
      }
    },
    [mutate, namespace],
  );

  return [upload, state.current.data, state.current.progress];
};
