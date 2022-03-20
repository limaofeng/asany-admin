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
      return { recursive: true, mimeType_startsWith: 'image/' };
    }
    if (menuKey == 'document') {
      return {
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
        recursive: true,
        mimeType_startsWith: 'video/',
      };
    }
    if (menuKey == 'audio') {
      return {
        recursive: true,
        mimeType_startsWith: 'audio/',
      };
    }
    if (menuKey == 'other') {
      return {
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
    if (menuKey == 'image') {
      return { ...cloudDrive, name: '全部图片' } as any;
    }
    if (menuKey == 'document') {
      return { ...cloudDrive, name: '全部文档' } as any;
    }
    if (menuKey == 'video') {
      return { ...cloudDrive, name: '全部视频' } as any;
    }
    if (menuKey == 'audio') {
      return { ...cloudDrive, name: '全部音频' } as any;
    }
    if (menuKey == 'other') {
      return { ...cloudDrive, name: '其他文件' } as any;
    }
    return { ...cloudDrive, name: '全部文件' } as any;
  }, [cloudDrive, menuKey]);

  return (
    <ContentWrapper className="app-drive-main" header={false} footer={false}>
      {cloudDrive && (
        <ListFiles
          key="list-files"
          folder={folder}
          filter={fileFilter}
          orderBy={location.state?.orderBy}
          cloudDrive={rootFolder}
          currentFolder={location.state?.currentFolder}
        />
      )}
    </ContentWrapper>
  );
}

export default FileList;
