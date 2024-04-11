import { useCurrentuser } from '@/hooks';
import { ArticleStatus } from '@/types';

import ArticleList from './ArticleList';

function MyDrafts() {
  const { data: user } = useCurrentuser();
  return (
    <ArticleList
      where={{ createdBy: user?.uid, status: ArticleStatus.Draft }}
    />
  );
}

export default MyDrafts;
