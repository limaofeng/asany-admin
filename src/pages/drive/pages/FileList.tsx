import { useEffect, useMemo } from 'react';

import { useModel } from 'umi';
import type { RouteComponentProps } from 'react-router-dom';

import { useCloudDriveLazyQuery } from '../hooks';
import ListFiles from '../components/ListFiles';

import { ContentWrapper } from '@/pages/Metronic/components';
import type { CloudDrive, FileObject } from '@/types';

type FileListRouteParams = {
  id: string;
};

type FileListRouteLocationState = {
  files?: FileObject[];
  cloudDrive?: CloudDrive;
  currentFolder?: FileObject;
};

type FileListProps = RouteComponentProps<FileListRouteParams, any, FileListRouteLocationState>;

function FileList(props: FileListProps) {
  const {
    location,
    match: {
      params: { id: folder },
    },
  } = props;

  const currentCloudDrive = useModel('cloud-drive', ({ state }) => state.currentCloudDrive);

  const [loadCloudDrive, { data }] = useCloudDriveLazyQuery();

  useEffect(() => {
    if (!currentCloudDrive) {
      return;
    }
    loadCloudDrive({ variables: { id: currentCloudDrive } });
  }, [currentCloudDrive, loadCloudDrive]);

  const cloudDrive = useMemo(() => {
    return data?.cloudDrive || location.state?.cloudDrive;
  }, [data?.cloudDrive, location.state?.cloudDrive]);

  console.log('paths', cloudDrive, location.state?.currentFolder);

  return (
    <ContentWrapper className="app-drive-main" header={false} footer={false}>
      {cloudDrive && (
        <ListFiles
          key="list-files"
          folder={folder || cloudDrive?.rootFolder}
          cloudDrive={cloudDrive as any}
          files={location.state?.files}
          currentFolder={location.state?.currentFolder}
        />
      )}
    </ContentWrapper>
  );
}

export default FileList;
