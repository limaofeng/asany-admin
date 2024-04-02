import type { ArticleCategory } from '@/types';
export type ArticleOutletContextParams = {
  rootCategoryId: string;
  categories: ArticleCategory[];
  baseUrl: string;
};
