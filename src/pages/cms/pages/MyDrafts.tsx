import { useCurrentuser } from 'umi';

import ArticleList from '../components/ArticleList';

import { ContentWrapper } from '@/pages/Metronic/components';

function MyDrafts() {
  const user = useCurrentuser();
  return (
    <ContentWrapper
      header={{
        title: '草稿箱',
      }}
    >
      {user && <ArticleList query={{ filter: { createdBy: user.uid, status: 'DRAFT' } }} />}
    </ContentWrapper>
  );
}

export default MyDrafts;
