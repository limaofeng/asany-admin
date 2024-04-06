import type { ArticleCategory } from '@/types';
export type ArticleOutletContextParams = {
  rootCategoryId: string;
  breadcrumbs: { title: string; url: string }[];
  categories: ArticleCategory[];
  baseUrl: string;
};
