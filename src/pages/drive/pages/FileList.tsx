import { useEffect, useMemo } from 'react';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';

import { useModel, useParams } from '@umijs/max';

import { ContentWrapper } from '@/layouts/components';

import ListFiles from '../components/ListFiles';
import { useCloudDriveLazyQuery } from '../hooks';
import { extensions } from '../utils';

function FileList() {
  const { id: _folder } = useParams<{ id: string }>();
  const location = useLocation();

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
    const oneMatch = matchPath('/drive/:type/:value', location.pathname);
    const twoMatch = matchPath('/drive/:type', location.pathname);

    const type = oneMatch?.params.type || twoMatch?.params.type;
    const value = oneMatch?.params.value;

    if (type === 'mime-types') {
      return value;
    }
    return 'my-drive';
  }, [location.pathname]);

  const fileFilter = useMemo(() => {
    if (menuKey === 'image') {
      return {
        isDirectory: false,
        folder: {
          subfolders: true,
          id: folder!,
        },
        extension_in: extensions.image,
      };
    }
    if (menuKey === 'document') {
      return {
        isDirectory: false,
        folder: {
          subfolders: true,
          id: folder!,
        },
        extension_in: extensions.document,
      };
    }
    if (menuKey === 'video') {
      return {
        isDirectory: false,
        folder: {
          subfolders: true,
          id: folder!,
        },
        extension_in: extensions.video,
      };
    }
    if (menuKey === 'audio') {
      return {
        isDirectory: false,
        folder: {
          subfolders: true,
          id: folder!,
        },
        extension_in: extensions.audio,
      };
    }
    if (menuKey === 'other') {
      return {
        isDirectory: false,
        folder: {
          subfolders: true,
          id: folder!,
        },
        extension_notIn: [
          ...extensions.image,
          ...extensions.audio,
          ...extensions.video,
          ...extensions.document,
        ],
      };
    }
    return {
      folder: {
        id: folder!,
      },
    };
  }, [menuKey, folder]);

  const rootFolder = useMemo(() => {
    if (!cloudDrive) {
      return undefined;
    }
    const _rootFolder = {
      ...cloudDrive,
      id: cloudDrive.rootFolder,
      isRootFolder: false,
    };
    if (menuKey === 'image') {
      return { ..._rootFolder, name: '全部图片' } as any;
    }
    if (menuKey === 'document') {
      return { ..._rootFolder, name: '全部文档' } as any;
    }
    if (menuKey === 'video') {
      return { ..._rootFolder, name: '全部视频' } as any;
    }
    if (menuKey === 'audio') {
      return { ..._rootFolder, name: '全部音频' } as any;
    }
    if (menuKey === 'other') {
      return { ..._rootFolder, name: '其他文件' } as any;
    }
    return { ..._rootFolder, isRootFolder: true, name: '全部文件' } as any;
  }, [cloudDrive, menuKey]);

  console.log('rootFolder', rootFolder);
  console.log('folder', folder);
  console.log('fileFilter', fileFilter);

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
