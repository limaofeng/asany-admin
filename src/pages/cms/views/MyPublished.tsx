import { useCurrentuser } from '@/hooks';
import { ContentWrapper } from '@/layouts/components';

import ArticleList from './ArticleList';

function MyDrafts() {
  const { data: user } = useCurrentuser();
  return (
    <ContentWrapper
      header={{
        title: '我的发布',
      }}
    >
      {user && (
        <ArticleList
          query={{
            filter: {
              createdBy: user.uid,
              status_in: ['SCHEDULED', 'PUBLISHED'],
            },
          }}
        />
      )}
    </ContentWrapper>
  );
}

export default MyDrafts;
