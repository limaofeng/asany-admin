import { useCallback } from 'react';

import { FetchResult, InternalRefetchQueriesInclude } from '@apollo/client';

import { Modal, Toast } from '@/metronic';
import type { Article } from '@/types';

import { useDeleteArticleMutation } from './api';

function useArticleDelete(
  article: Article,
  options?: {
    onDeleted: (article: Article) => void;
    refetchQueries?:
      | ((result: FetchResult<any>) => InternalRefetchQueriesInclude)
      | InternalRefetchQueriesInclude;
    messages?: {
      title?: string;
      content?: (data: Article) => React.ReactNode;
      pending?: string;
      okText?: string;
      successText?: string;
      success?: {
        render: () => React.ReactNode;
      };
      error?: string;
    };
  },
) {
  const [deleteArticle] = useDeleteArticleMutation({
    variables: { id: article?.id },
    refetchQueries: options?.refetchQueries,
  });
  const { onDeleted = () => {}, messages } = options || {};

  const handleDelete = useCallback(async () => {
    const result = await Modal.confirm({
      title: messages?.title || `你确定要删除该吗？`,
      content: (
        messages?.content ||
        ((article: Article) => (
          <>
            您即将删除“<strong>{article?.title}</strong>
            ”。删除操作不可逆转，请谨慎操作，您确定删除吗？
          </>
        ))
      )(article),
      okText: messages?.okText || '删 除',
      okClassName: 'btn-danger',
    });
    if (result.isConfirmed) {
      await deleteArticle();
      Toast.success(messages?.successText || '删除成功');
      onDeleted(article);
    }
  }, [deleteArticle, article, onDeleted]);

  return [handleDelete];
}

export default useArticleDelete;
