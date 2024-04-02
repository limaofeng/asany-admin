import React, { useCallback } from 'react';

import { ContentWrapper } from '@/layouts/components';
import { Spin } from '@/metronic';

import LibraryCard from '../components/LibraryCard';
import LibraryCreate from '../components/LibraryCreate';
import { useIconLibrariesQuery } from '../hooks';

import '../style/index.scss';

function MyLibraries() {
  const {
    data = { libraries: [] },
    loading,
    refetch,
  } = useIconLibrariesQuery();

  const handleCreated = useCallback(async () => {
    await refetch();
  }, [refetch]);

  const handleStatusChange = useCallback(async () => {
    await refetch();
  }, [refetch]);

  const libraries = data.libraries;

  return (
    <ContentWrapper
      header={{
        title: '图标库',
      }}
    >
      <div className="ie-libraries">
        <Spin spinning={loading}>
          <div className="library-list-wrapper">
            <LibraryCreate onCreated={handleCreated} />
            {libraries.map((library) => (
              <LibraryCard
                key={library.id}
                library={library as any}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </Spin>
      </div>
    </ContentWrapper>
  );
}

const MyLibrariesMemo = React.memo(MyLibraries);

export default MyLibrariesMemo;
