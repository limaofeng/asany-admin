import { useCurrentuser } from 'umi';

import ArticleList from '../components/ArticleList';

import { ContentWrapper } from '@/layouts/components';

function MyDrafts() {
  const user = useCurrentuser();
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
