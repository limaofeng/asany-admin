import { useEffect, useMemo } from 'react';

import { useModel } from 'umi';
import type { RouteComponentProps } from 'react-router-dom';

import { useCloudDriveLazyQuery } from '../hooks';
import ListFiles from '../components/ListFiles';

import { ContentWrapper } from '@/pages/Metronic/components';
import type { CloudDrive, FileObject } from '@/types';
import type { Sorter } from '@/pages/Metronic/components/base/Table/typings';

type DriveStarredRouteParams = {
  id: string;
};

type DriveStarredRouteLocationState = {
  orderBy?: Sorter;
  cloudDrive?: CloudDrive;
  currentFolder?: FileObject;
};

type DriveStarredProps = RouteComponentProps<
  DriveStarredRouteParams,
  any,
  DriveStarredRouteLocationState
>;

function DriveStarred(props: DriveStarredProps) {
  const {
    location,
    match: {
      params: { id: _folder },
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

  // console.log('paths', cloudDrive, location.state?.currentFolder);

  const folder = useMemo(() => {
    if (location.pathname.startsWith('/drive/mime-types')) {
      return cloudDrive?.rootFolder;
    }
    return _folder || cloudDrive?.rootFolder;
  }, [_folder, cloudDrive?.rootFolder, location.pathname]);

  // const menuKey = useMemo(() => 'starred', []);

  const fileFilter = useMemo(() => ({ recursive: true, starred: true }), []);

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
    <ContentWrapper className="app-drive-main pages-starred" header={false} footer={false}>
      {rootFolder && (
        <ListFiles
          key="list-files"
          toolbar="starred"
          folder={folder}
          filter={fileFilter}
          orderBy={location.state?.orderBy}
          rootFolder={rootFolder}
          currentFolder={location.state?.currentFolder}
        />
      )}
    </ContentWrapper>
  );
}

export default DriveStarred;
