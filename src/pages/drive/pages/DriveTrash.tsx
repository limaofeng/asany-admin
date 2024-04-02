import { useEffect, useMemo } from 'react';

import { useModel } from '@umijs/max';

import { ContentWrapper } from '@/layouts/components';
import type { FileObject } from '@/types';

import ListFiles from '../components/ListFiles';
import { useCloudDriveLazyQuery } from '../hooks';

function DriveTrash() {
  const driveId = useModel('cloud-drive.index', ({ state }) => state.driveId);

  const [loadCloudDrive, { data }] = useCloudDriveLazyQuery();

  useEffect(() => {
    if (!driveId) {
      return;
    }
    loadCloudDrive({ variables: { id: driveId } });
  }, [driveId, loadCloudDrive]);

  const cloudDrive = useMemo(() => {
    return data?.cloudDrive;
  }, [data?.cloudDrive]);

  // console.log('paths', cloudDrive, location.state?.currentFolder);

  const folder = useMemo(() => {
    return cloudDrive?.recycleBin;
  }, [cloudDrive?.recycleBin]);

  const fileFilter = useMemo(
    () => ({
      folder: {
        id: folder!,
      },
    }),
    [folder],
  );

  const rootFolder = useMemo(() => {
    if (!cloudDrive) {
      return undefined;
    }
    return {
      ...cloudDrive,
      id: cloudDrive.recycleBin,
      isRootFolder: false,
      name: '回收站',
    } as any as FileObject;
  }, [cloudDrive]);

  return (
    <ContentWrapper
      className="app-drive-main pages-trash"
      header={false}
      footer={false}
    >
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
