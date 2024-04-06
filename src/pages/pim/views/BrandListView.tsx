import { useCallback } from 'react';

import useListPage from '@/hooks/useListPage';
import { ContentWrapper } from '@/layouts/components';
import { BlockUI, Button, Card, Empty, Table } from '@/metronic';
import { Brand } from '@/types';

import { useBrandsQuery } from '../hooks';

function DeviceListView() {
  const [brands, { loading, pageInfo, sorter, onChange }] = useListPage<Brand>(
    useBrandsQuery as any,
    {
      toQuery: (variables, pagination, filter, sorter) => {
        const _query: any = {};
        if (variables.filter?.name_contains) {
          _query.q = variables.filter?.name_contains;
        }
        if (!!sorter) {
          _query.orderBy =
            sorter.field + '_' + (sorter.order === 'ascend' ? 'asc' : 'desc');
        }
        _query.page = pagination.current;
        return _query;
      },
      toVariables: (query) => {
        if (query.q) {
          query.filter = { name_contains: query.q };
          delete query.q;
        }
        return query;
      },
    },
  );

  const handleDeleteInBatch = useCallback(
    (ids: string[]) => async () => {
      console.log('ids', ids);
      // await deleteDevices({ variables: { ids } });
      // refetch();
    },
    [],
  );

  return (
    <ContentWrapper
      header={{
        title: '品牌列表',
      }}
    >
      {!pageInfo.total && !loading ? (
        <Card className="mb-5 mb-xl-10">
          <Empty
            title="还没有品牌"
            description="马上添加一个品牌吧！"
            image="/assets/media/illustrations/sigma-1/4.png"
          >
            <Button variant="primary">添加品牌</Button>
          </Empty>
        </Card>
      ) : (
        <>
          <Card className="mb-5 mb-xl-10">
            <Card.Body>
              <BlockUI
                overlayClassName="bg-white bg-opacity-25"
                loading={loading}
              >
                <Table
                  hover
                  rowKey="id"
                  rowSelection={{
                    type: 'checkbox',
                    renderTitle: (size) => (
                      <>
                        已选中<span className="mx-2">{size}</span>个品牌
                      </>
                    ),
                    toolbar: (selectedRowKeys: string[]) => {
                      return (
                        <div>
                          <Button
                            color="success"
                            onClick={handleDeleteInBatch(selectedRowKeys)}
                            variant={false}
                          >
                            批量删除
                          </Button>
                        </div>
                      );
                    },
                  }}
                  noRowsRenderer={() => (
                    <Empty
                      description="列表数据为空"
                      image="/assets/media/illustrations/sigma-1/5.png"
                    />
                  )}
                  columns={[
                    {
                      key: 'id',
                      title: '编码',
                      sorter: true,
                      sortOrder:
                        sorter.field === 'id' ? sorter.order : undefined,
                      width: 180,
                    },
                    {
                      key: 'name',
                      title: '品牌名称',
                      sorter: true,
                      sortOrder:
                        sorter.field === 'name' ? sorter.order : undefined,
                    },
                    {
                      key: 'createdAt',
                      title: '创建时间',
                      width: 120,
                    },
                  ]}
                  pagination={pageInfo}
                  onChange={onChange}
                  dataSource={brands}
                />
              </BlockUI>
            </Card.Body>
          </Card>
        </>
      )}
    </ContentWrapper>
  );
}

export default DeviceListView;
