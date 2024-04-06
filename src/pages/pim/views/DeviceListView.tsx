import { useCallback } from 'react';

import useListPage from '@/hooks/useListPage';
import { ContentWrapper } from '@/layouts/components';
import { BlockUI, Button, Card, Empty, Table } from '@/metronic';
import { Device } from '@/types';

import { useDevicesQuery } from '../hooks';

function DeviceListView() {
  const [devices, { loading, pageInfo, sorter, onChange }] =
    useListPage<Device>(useDevicesQuery as any, {
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
    });

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
        title: '设备列表',
      }}
    >
      {!pageInfo.total && !loading ? (
        <Card className="mb-5 mb-xl-10">
          <Empty
            title="还没有设备"
            description="马上添加通过设备二维码添加设备吧！"
            image="/assets/media/illustrations/sigma-1/4.png"
          >
            {/* <Button variant="primary"></Button> */}
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
                        已选中<span className="mx-2">{size}</span>个设备
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
                      key: 'no',
                      title: '资产编号',
                      sorter: true,
                      sortOrder:
                        sorter.field === 'no' ? sorter.order : undefined,
                      width: 180,
                    },
                    {
                      key: 'name',
                      title: '设备名称',
                      sorter: true,
                      sortOrder:
                        sorter.field === 'name' ? sorter.order : undefined,
                      render(name, record) {
                        return (
                          <div className="text-gray-700">
                            {record?.brand?.name} | {name}
                          </div>
                        );
                      },
                    },
                    {
                      key: 'warrantyStatus',
                      title: '保修状态',
                      width: 80,
                      render(value) {
                        const warrantyStatusTexts: any = {
                          INACTIVE: '未激活',
                          ACTIVE: '激活',
                          EXPIRED: '已过期',
                          CANCELED: '已作废',
                        };
                        return (
                          <div className="text-gray-700">
                            {warrantyStatusTexts[value]}
                          </div>
                        );
                      },
                    },
                    {
                      key: 'warrantyEndDate',
                      title: '保修截止日期',
                      width: 120,
                      render(value) {
                        return <div className="text-gray-700">{value}</div>;
                      },
                    },
                    {
                      key: 'address',
                      title: '设备位置',
                      width: 200,
                      render(address) {
                        return (
                          <div className="text-gray-700">
                            {address?.fullAddress}
                          </div>
                        );
                      },
                    },
                    {
                      key: 'createdAt',
                      title: '创建时间',
                      width: 120,
                    },
                  ]}
                  pagination={pageInfo}
                  onChange={onChange}
                  dataSource={devices}
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
