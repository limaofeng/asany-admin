export type IArticle = {
  id?: string;
  slug?: string;
  cover?: string;
  title?: string;
  status?: 'DRAFT' | 'PUBLISHED';
  summary?: string;
  content?: ArticleContent;
  access?: string;
  author?: string;
  publishedAt?: string;
};

export type ArticleContent = {
  id: string;
  text: string;
  __typename: string;
};
