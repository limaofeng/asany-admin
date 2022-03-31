import { useEffect, useMemo } from 'react';

import { useModel } from 'umi';
import { matchPath } from 'react-router';
import type { RouteComponentProps } from 'react-router-dom';

import { useCloudDriveLazyQuery } from '../hooks';
import ListFiles from '../components/ListFiles';

import { ContentWrapper } from '@/pages/Metronic/components';
import type { CloudDrive, FileObject } from '@/types';
import type { Sorter } from '@/pages/Metronic/components/base/Table/typings';

type FileListRouteParams = {
  id: string;
};

type FileListRouteLocationState = {
  orderBy?: Sorter;
  cloudDrive?: CloudDrive;
  currentFolder?: FileObject;
};

type FileListProps = RouteComponentProps<FileListRouteParams, any, FileListRouteLocationState>;

function FileList(props: FileListProps) {
  const {
    location,
    match: {
      params: { id: _folder },
    },
  } = props;

  const driveId = useModel('cloud-drive.index', ({ state }) => state.driveId);

  const [loadCloudDrive, { data }] = useCloudDriveLazyQuery();

  useEffect(() => {
    if (!driveId) {
      return;
    }
    loadCloudDrive({ variables: { id: driveId } });
  }, [driveId, loadCloudDrive]);

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

  const menuKey = useMemo(() => {
    const oneMatch = matchPath<{ type: string; value: string }>(location.pathname, {
      path: '/drive/:type/:value',
      exact: true,
      strict: true,
    });
    const twoMatch = matchPath<{ type: string }>(location.pathname, {
      path: '/drive/:type',
      exact: true,
      strict: true,
    });

    const type = oneMatch?.params.type || twoMatch?.params.type;
    const value = oneMatch?.params.value;

    if (type == 'mime-types') {
      return value;
    }
    return 'my-drive';
  }, [location.pathname]);

  const fileFilter = useMemo(() => {
    if (menuKey == 'image') {
      return {
        isDirectory: false,
        recursive: true,
        mimeType_startsWith: 'image/',
      };
    }
    if (menuKey == 'document') {
      return {
        isDirectory: false,
        recursive: true,
        mimeType_in: [
          'application/msword',
          'application/pdf',
          'application/vnd.ms-powerpoint',
          'text/plain',
          'text/html',
          'text/xml',
        ],
      };
    }
    if (menuKey == 'video') {
      return {
        isDirectory: false,
        recursive: true,
        mimeType_startsWith: 'video/',
      };
    }
    if (menuKey == 'audio') {
      return {
        isDirectory: false,
        recursive: true,
        mimeType_startsWith: 'audio/',
      };
    }
    if (menuKey == 'other') {
      return {
        isDirectory: false,
        recursive: true,
        AND: [
          { mimeType_notStartsWith: 'image/' },
          { mimeType_notStartsWith: 'video/' },
          { mimeType_notStartsWith: 'audio/' },
          {
            mimeType_notIn: [
              'application/msword',
              'application/pdf',
              'application/vnd.ms-powerpoint',
              'text/plain',
              'text/html',
              'text/xml',
            ],
          },
        ],
      };
    }
    return undefined;
  }, [menuKey]);

  const rootFolder = useMemo(() => {
    if (!cloudDrive) {
      return undefined;
    }
    const _rootFolder = { ...cloudDrive, id: cloudDrive.rootFolder, isRootFolder: false };
    if (menuKey == 'image') {
      return { ..._rootFolder, name: '全部图片' } as any;
    }
    if (menuKey == 'document') {
      return { ..._rootFolder, name: '全部文档' } as any;
    }
    if (menuKey == 'video') {
      return { ..._rootFolder, name: '全部视频' } as any;
    }
    if (menuKey == 'audio') {
      return { ..._rootFolder, name: '全部音频' } as any;
    }
    if (menuKey == 'other') {
      return { ..._rootFolder, name: '其他文件' } as any;
    }
    return { ..._rootFolder, isRootFolder: true, name: '全部文件' } as any;
  }, [cloudDrive, menuKey]);

  return (
    <ContentWrapper className="app-drive-main" header={false} footer={false}>
      {rootFolder && (
        <ListFiles
          key="list-files"
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

export default FileList;
