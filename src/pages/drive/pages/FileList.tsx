import { useEffect, useMemo } from 'react';
import { matchPath } from 'react-router';
import { useLocation, useSearchParams } from 'react-router-dom';

import { useModel, useParams } from '@umijs/max';

import { ContentWrapper } from '@/layouts/components';
import { FileWhereInput } from '@/types';

import ListFiles from '../components/ListFiles';
import { useCloudDriveLazyQuery } from '../hooks';
import { extensions } from '../utils';

function FileList() {
  const { id: _folder } = useParams<{ id: string }>();
  const location = useLocation();
  const [searchParams] = useSearchParams();

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
  const q = searchParams.get('q');

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

  const where = useMemo(() => {
    const whereInput: FileWhereInput = {
      name_contains: q,
      isDirectory: false,
      folder: {
        subfolders: true,
        id: folder!,
      },
    };
    switch (menuKey) {
      case 'image':
        return {
          ...whereInput,
          extension_in: extensions.image,
        };
      case 'document':
        return {
          ...whereInput,
          extension_in: extensions.document,
        };
      case 'video':
        return {
          ...whereInput,
          extension_in: extensions.video,
        };
      case 'audio':
        return {
          ...whereInput,
          extension_in: extensions.audio,
        };
      case 'other':
        return {
          ...whereInput,
          extension_notIn: [
            ...extensions.image,
            ...extensions.audio,
            ...extensions.video,
            ...extensions.document,
          ],
        };
      default:
        return {
          name_contains: q,
          folder: {
            id: folder!,
          },
        };
    }
  }, [menuKey, folder, q]);

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

  // console.log('location.state', location.state);
  // console.log('where', where, q);

  return (
    <ContentWrapper className="app-drive-main" header={false} footer={false}>
      {rootFolder && (
        <ListFiles
          key="list-files"
          folder={folder}
          where={where}
          // orderBy={location.state?.orderBy}
          rootFolder={rootFolder}
          // currentFolder={location.state?.currentFolder}
        />
      )}
    </ContentWrapper>
  );
}

export default FileList;
