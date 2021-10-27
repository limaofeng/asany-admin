import { useCallback, useState } from 'react';

import { gql, useMutation } from '@apollo/client';

const MUTATION_UPLOAD = gql`
  mutation upload($file: Upload!) {
    upload(file: $file) {
      id
      name
      path
      directory
      size
      mimeType
      createdAt
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

type UseUploadResult = [(file: File) => void, UploadResult | undefined, number];

export const useUpload = (): UseUploadResult => {
  const [uploadResult, setUploadResult] = useState();
  const [progress, setProgress] = useState(0);

  const [mutate] = useMutation(MUTATION_UPLOAD, {
    context: {
      fetchOptions: {
        onUploadProgress: (_progress: any) => {
          const percent = ((_progress.loaded / _progress.total) * 100) << 0;
          setProgress(percent);
        },
      },
    },
  });

  const upload = useCallback(async (file) => {
    setUploadResult(undefined);
    setProgress(0);
    const { data } = await mutate({
      variables: {
        file,
      },
    });
    setUploadResult(data.upload);
    return data;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [upload, uploadResult, progress];
};
