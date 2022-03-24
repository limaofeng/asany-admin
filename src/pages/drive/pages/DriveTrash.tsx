import { useEffect, useMemo } from 'react';

import { useModel } from 'umi';

import { useCloudDriveLazyQuery } from '../hooks';
import ListFiles from '../components/ListFiles';

import { ContentWrapper } from '@/pages/Metronic/components';
import type { FileObject } from '@/types';

function DriveTrash() {
  const currentCloudDrive = useModel('cloud-drive', ({ state }) => state.currentCloudDrive);

  const [loadCloudDrive, { data }] = useCloudDriveLazyQuery();

  useEffect(() => {
    if (!currentCloudDrive) {
      return;
    }
    loadCloudDrive({ variables: { id: currentCloudDrive } });
  }, [currentCloudDrive, loadCloudDrive]);

  const cloudDrive = useMemo(() => {
    return data?.cloudDrive;
  }, [data?.cloudDrive]);

  // console.log('paths', cloudDrive, location.state?.currentFolder);

  const folder = useMemo(() => {
    return cloudDrive?.recycler;
  }, [cloudDrive?.recycler]);

  const fileFilter = useMemo(() => ({}), []);

  const rootFolder = useMemo(() => {
    if (!cloudDrive) {
      return undefined;
    }
    return {
      ...cloudDrive,
      id: cloudDrive.recycler,
      isRootFolder: false,
      name: '回收站',
    } as any as FileObject;
  }, [cloudDrive]);

  return (
    <ContentWrapper className="app-drive-main pages-trash" header={false} footer={false}>
      {rootFolder && (
        <ListFiles
          toolbar="trash"
          key="list-files"
          folder={folder}
          filter={fileFilter}
          rootFolder={rootFolder}
        />
      )}
    </ContentWrapper>
  );
}

export default DriveTrash;
