import { useCallback } from 'react';

import { Button, Empty, Table, Toast } from '@/metronic';
import { useArticleListQuery } from '@/pages/cms/hooks';
import { Article } from '@/types';

import {
  useAddArticleToProductMutation,
  useRemoveArticleFromProductMutation,
} from '../hooks';

type ProductArticleListProps = {
  categoryId?: string;
  articles?: Article[];
  productId: string;
  refetch: () => void;
};

const linkageTypeMappping: {
  [key: string]: string;
} = {
  'product-maintenance-video': 'videos',
  'product-maintenance-manual': 'tutorials',
  'product-manual': 'notebook',
  'product-knowledge-base': 'knowledgebase',
};

function ProductArticleList(props: ProductArticleListProps) {
  const {
    articles: selectedArticles = [],
    categoryId,
    productId,
    refetch,
  } = props;

  const [addArticleToProduct] = useAddArticleToProductMutation();
  const [removeArticleFromProduct] = useRemoveArticleFromProductMutation();
  const { data } = useArticleListQuery({
    fetchPolicy: 'network-only',
    variables: {
      offset: 0,
      limit: 100,
      where: {
        category: {
          id: categoryId!,
        },
      },
    },
  });

  const articles = data?.articles || [];

  const hasSelected = useCallback(
    (id: string) => {
      return selectedArticles.some((article) => article.id === id);
    },
    [selectedArticles],
  );

  const handleLinkToArticle = useCallback(
    (id: string) => async () => {
      await addArticleToProduct({
        variables: {
          articleIds: [id],
          linkageType: linkageTypeMappping[categoryId!],
          productId,
        },
      });
      Toast.success('关联成功', 2000, {
        placement: 'bottom-left',
        progressBar: true,
      });
      refetch();
    },
    [productId, categoryId, refetch],
  );

  const handleUnlinkToArticle = useCallback(
    (id: string) => async () => {
      await removeArticleFromProduct({
        variables: {
          articleIds: [id],
          linkageType: linkageTypeMappping[categoryId!],
          productId,
        },
      });
      Toast.success('取消关联成功', 2000, {
        placement: 'bottom-left',
        progressBar: true,
      });
      refetch();
    },
    [productId, categoryId, refetch],
  );

  const handleLinkToArticles = useCallback(
    (articleIds: string[]) => async () => {
      await addArticleToProduct({
        variables: {
          articleIds,
          linkageType: linkageTypeMappping[categoryId!],
          productId,
        },
      });
      Toast.success('关联成功', 2000, {
        placement: 'bottom-left',
        progressBar: true,
      });
      refetch();
    },
    [categoryId, productId, refetch],
  );

  const handleUnlinkToArticles = useCallback(
    (articleIds: string[]) => async () => {
      await removeArticleFromProduct({
        variables: {
          articleIds,
          linkageType: linkageTypeMappping[categoryId!],
          productId,
        },
      });
      Toast.success('取消关联成功', 2000, {
        placement: 'bottom-left',
        progressBar: true,
      });
      refetch();
    },
    [categoryId, productId, refetch],
  );

  return (
    <div>
      <Table
        hover
        rowKey="id"
        rowSelection={{
          type: 'checkbox',
          renderTitle: (size) => (
            <>
              已选中<span className="mx-2">{size}</span>个产品文章
            </>
          ),
          toolbar: (selectedRowKeys: string[]) => {
            return (
              <div>
                <Button
                  color="success"
                  onClick={handleLinkToArticles(selectedRowKeys)}
                  variant={false}
                >
                  批量关联
                </Button>
                <Button
                  onClick={handleUnlinkToArticles(selectedRowKeys)}
                  color="danger"
                  variant={false}
                >
                  批量取消关联
                </Button>
              </div>
            );
          },
        }}
        noRowsRenderer={() => (
          <Empty
            description="文章为空"
            image="/assets/media/illustrations/sigma-1/5.png"
          />
        )}
        columns={[
          {
            key: 'title',
            title: '标题',
          },
          {
            key: 'createdAt',
            title: '创建时间',
            width: 180,
          },
          {
            title: '操作',
            key: 'action',
            width: 140,
            render: (_, record: any) => {
              return (
                <div>
                  {hasSelected(record.id) ? (
                    <a href="#" onClick={handleUnlinkToArticle(record.id)}>
                      取消关联
                    </a>
                  ) : (
                    <a href="#" onClick={handleLinkToArticle(record.id)}>
                      关联
                    </a>
                  )}
                </div>
              );
            },
          },
        ]}
        dataSource={articles}
      />
    </div>
  );
}

export default ProductArticleList;
