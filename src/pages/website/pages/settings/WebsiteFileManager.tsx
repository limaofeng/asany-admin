import { useMemo } from 'react';

import { ContentWrapper } from '@/layouts/components';
import ListFiles from '@/pages/drive/components/ListFiles';
import type { FileObject } from '@/types';

import './WebsiteFileManager.scss';

function WebsiteFileManager() {
  const rootFolder = {
    id: 'gfBIAYr1mfo867yEexxHNw==',
    isRootFolder: true,
    name: '全部文件',
  } as any as FileObject;
  const folder = 'gfBIAYr1mfo867yEexxHNw==';
  const fileFilter = useMemo(
    () => ({
      folder: {
        id: 'gfBIAYr1mfo867yEexxHNw==',
      },
    }),
    [],
  );

  return (
    <ContentWrapper
      header={{
        title: '文件管理',
      }}
      loading={false}
      footer={false}
      contentClassName="website-filemanager"
    >
      <ListFiles key="list-files" folder={folder} filter={fileFilter} rootFolder={rootFolder} />
    </ContentWrapper>
  );
}

export default WebsiteFileManager;
