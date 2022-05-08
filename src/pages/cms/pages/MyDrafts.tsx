import ArticleList from '../components/ArticleList';

import { useCurrentuser } from '@/utils/hooks';
import { ContentWrapper } from '@/layouts/components';

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
