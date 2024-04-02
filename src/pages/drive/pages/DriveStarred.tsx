import { useEffect, useMemo } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import { useModel } from 'umi';

import ListFiles from '../components/ListFiles';
import { useCloudDriveLazyQuery } from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import type { Sorter } from '@/metronic/Table/typings';
import type { CloudDrive, FileObject } from '@/types';

type DriveStarredRouteLocationState = {
  orderBy?: Sorter;
  cloudDrive?: CloudDrive;
  currentFolder?: FileObject;
};

function DriveStarred() {
  const { id: _folder } = useParams<{ id: string }>();
  const localtion = useLocation();

  const driveId = useModel('cloud-drive.index', ({ state }) => state.driveId);

  const [loadCloudDrive, { data }] = useCloudDriveLazyQuery();

  const state = localtion.state as DriveStarredRouteLocationState;

  useEffect(() => {
    if (!driveId) {
      return;
    }
    loadCloudDrive({ variables: { id: driveId } });
  }, [driveId, loadCloudDrive]);

  const cloudDrive = useMemo(() => {
    return data?.cloudDrive || state?.cloudDrive;
  }, [data?.cloudDrive, state?.cloudDrive]);

  // console.log('paths', cloudDrive, location.state?.currentFolder);

  const folder = useMemo(() => {
    if (location.pathname.startsWith('/drive/mime-types')) {
      return cloudDrive?.rootFolder;
    }
    return _folder || cloudDrive?.rootFolder;
  }, [_folder, cloudDrive?.rootFolder, location.pathname]);

  // const menuKey = useMemo(() => 'starred', []);

  const fileFilter = useMemo(
    () => ({
      folder: {
        subfolders: true,
        id: folder!,
      },
      starred: true,
    }),
    [folder],
  );

  const rootFolder = useMemo(() => {
    if (!cloudDrive) {
      return undefined;
    }
    return {
      ...cloudDrive,
      id: cloudDrive.rootFolder,
      isRootFolder: false,
      name: '已加心标',
    } as any as FileObject;
  }, [cloudDrive]);

  return (
    <ContentWrapper
      className="app-drive-main pages-starred"
      header={false}
      footer={false}
    >
      {rootFolder && (
        <ListFiles
          key="list-files"
          toolbar="starred"
          folder={folder}
          filter={fileFilter}
          orderBy={state?.orderBy}
          rootFolder={rootFolder}
          currentFolder={state?.currentFolder}
        />
      )}
    </ContentWrapper>
  );
}

export default DriveStarred;
