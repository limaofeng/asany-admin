import ArticleList from './ArticleList';

import { ContentWrapper } from '@/layouts/components';
import { useCurrentuser } from '@/utils/hooks';

function MyDrafts() {
  const { data: user } = useCurrentuser();
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
