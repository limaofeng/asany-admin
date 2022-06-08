import ArticleList from './ArticleList';

import { useCurrentuser } from '@/utils/hooks';
import { ContentWrapper } from '@/layouts/components';

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
          query={{ filter: { createdBy: user.uid, status_in: ['SCHEDULED', 'PUBLISHED'] } }}
        />
      )}
    </ContentWrapper>
  );
}

export default MyDrafts;
