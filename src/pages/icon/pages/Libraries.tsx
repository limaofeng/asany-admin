import React, { useCallback } from 'react';

import { useIconLibrariesQuery } from '../hooks';
import LibraryCreate from '../components/LibraryCreate';
import LibraryCard from '../components/LibraryCard';

import { ContentWrapper, Spin } from '@/pages/Metronic/components';

import '../style/index.scss';

function MyLibraries() {
  const { data = { libraries: [] }, loading, refetch } = useIconLibrariesQuery();

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

export default React.memo(MyLibraries);