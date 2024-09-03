import { useCurrentuser } from '@/hooks';
import { ArticleStatus } from '@/types';

import ArticleList from './ArticleList';

function MyDrafts() {
  const { data: user } = useCurrentuser();
  return (
    <ArticleList where={{ createdBy: user?.id, status: ArticleStatus.Draft }} />
  );
}

export default MyDrafts;
