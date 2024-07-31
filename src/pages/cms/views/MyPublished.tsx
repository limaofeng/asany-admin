import { useCurrentuser } from '@/hooks';
import { ContentWrapper } from '@/layouts/components';
import { ArticleStatus } from '@/types';

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
          where={{
            createdBy: user.uid,
            status_in: [ArticleStatus.Scheduled, ArticleStatus.Published],
          }}
        />
      )}
    </ContentWrapper>
  );
}

export default MyDrafts;
