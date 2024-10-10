import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';

import useExcel from '@/hooks/useExcel';
import useListPage, {
  queryToVariables,
  variablesToQuery,
} from '@/hooks/useListPage';
import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  Dropdown,
  Empty,
  Input,
  Menu,
  Table,
} from '@/metronic';
import { CustomerStore } from '@/types';
import { getSortDirection } from '@/utils';

import CustomerStoreDrawer from '../components/CustomerStoreDrawer';
import {
  useCustomerStoresLazyQuery,
  useCustomerStoresQuery,
} from '../hooks/index';
import useCustomerStoreDelete from '../hooks/useCustomerStoreDelete';

function CustomerStoreActions({
  data,
  onEdit,
  refetch,
}: {
  data: CustomerStore;
  onEdit: (data: CustomerStore) => void;
  refetch: () => void;
}) {
  const [visible, setVisible] = useState(false);

  const { delete: handleDelete } = useCustomerStoreDelete(refetch);

  const handleClick = useCallback(({ key }: any) => {
    if (key === 'edit') {
      onEdit(data);
    } else if (key === 'delete') {
      handleDelete({ name: data.name!, id: data.id });
    }
  }, []);

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleClick}
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2"
        >
          <Menu.Item key="edit" className="px-3">
            编辑
          </Menu.Item>
          <Menu.Item key="delete" className="actions-delete px-3">
            删除
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
      onVisibleChange={setVisible}
      visible={visible}
    >
      <Button variant="clean" activeColor="light-primary">
        操 作
        <Icon className="ms-2 svg-icon-5 m-0" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

function CustomerStoreListView() {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const searchForm = useMemo(
    () =>
      queryToVariables(searchParams, [
        {
          source: 'q',
          target: 'keywords',
        },
      ]),
    [searchParams.get('q')],
  );

  useState<{
    keywords: string;
  }>({
    keywords: searchParams.get('q') || '',
  });

  const variables = useMemo(() => {
    const newVars = queryToVariables(searchParams, [
      {
        source: 'q',
        target: 'where.name_contains',
      },
      {
        source: 'sex',
        target: 'where.sex',
      },
      {
        source: 'page',
        transform: (value) => parseInt(value),
      },
      {
        source: 'per_page',
        transform: (value) => parseInt(value),
      },
      {
        source: 'sort',
        target: 'orderBy',
        transform: (value) => {
          const [field, order] = value.split(':');
          return `${field}_${order}`;
        },
      },
    ]);
    newVars.where = newVars.where || {};
    newVars.where.customer = params.id;
    return newVars;
  }, [searchParams.toString(), params.id]);

  const [loadCustomerStores] = useCustomerStoresLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [stores, { loading, pageInfo, refetch }] = useListPage(
    useCustomerStoresQuery,
    {
      variables,
      skip: !params.id,
    },
  );

  const handleTableChange = useCallback(
    (pagination: any, filters: any, sorter: any) => {
      const querystring = variablesToQuery(
        { searchForm, pagination, filters, sorter },
        [
          {
            source: 'searchForm.keywords',
            target: 'q',
            skip: (value) => !value,
          },
          {
            source: 'pagination.current',
            target: 'page',
            skip: (value) => value === 1,
          },
          {
            source: 'pagination.pageSize',
            target: 'per_page',
            skip: (value) => value === 15,
          },
          {
            source: 'sorter.field',
            target: 'sort',
            transform: (value) =>
              `${value}:${sorter.order === 'ascend' ? 'asc' : 'desc'}`,
          },
        ],
      );
      navigate(location.pathname + '?' + querystring, {
        replace: true,
      });
    },
    [searchForm],
  );

  const { deleteMany: handleDeleteMany } = useCustomerStoreDelete(refetch);

  const handleSearch = useCallback((value: string) => {
    navigate(location.pathname + (!!value ? '?q=' + value : ''), {
      replace: true,
    });
  }, []);

  const excel = useExcel({
    fields: [
      {
        key: 'no',
        title: '门店编号',
        type: 'string',
      },
      {
        key: 'name',
        title: '门店名称',
        type: 'string',
      },
      {
        key: 'openingDate',
        title: '开业时间',
        type: 'date',
      },
      {
        key: 'phone',
        title: '门店电话',
        type: 'string',
      },
      {
        key: 'address',
        title: '门店地址',
        type: 'string',
      },
      {
        key: 'contactInfo.name',
        title: '联系人姓名',
        type: 'string',
      },
      {
        key: 'contactInfo.phone',
        title: '联系人电话',
        type: 'string',
      },
      {
        key: 'contactInfo.email',
        title: '联系人邮箱',
        type: 'string',
      },
    ],
    export: {
      filename: '门店列表.xlsx',
      columns: [
        { key: 'no', style: { wch: 10 } },
        { key: 'name', style: { wch: 20 } },
        { key: 'openingDate', style: { wch: 20 } },
        { key: 'phone', style: { wch: 20 } },
        {
          key: 'address',
          style: { wch: 60 },
          dataIndex: 'address.fullAddress',
          render: (_, { address }) =>
            address && address.fullAddress + ' ' + address.detailedAddress,
        },
        { key: 'contactInfo.name', style: { wch: 20 } },
        { key: 'contactInfo.phone', style: { wch: 20 } },
        { key: 'contactInfo.email', style: { wch: 20 } },
        { key: 'deviceCount', title: '设备数', style: { wch: 10 } },
      ],
      async dataSource() {
        const { data } = await loadCustomerStores({
          variables: {
            ...variables,
            page: 1,
            pageSize: (pageInfo?.total || 10000) + 100,
          },
        });
        return data!.result.edges.map((edge: any) => edge.node);
      },
    },
  });

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      await handleDeleteMany(selectedRowKeys);
    },
    [handleDeleteMany],
  );

  const [state, setState] = useState<{
    data?: CustomerStore;
    visible: boolean;
  }>({
    visible: false,
  });

  const handleCloseDrawer = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleSuccess = useCallback(
    (_data: CustomerStore) => {
      setState((prevState) => ({
        ...prevState,
        data: _data,
      }));
      refetch();
    },
    [setState],
  );

  const handleDeleteSuccess = useCallback(
    (_data: CustomerStore) => {
      setState((prevState) => {
        if (prevState.data?.id !== _data.id) {
          return prevState;
        }
        return {
          ...prevState,
          visible: false,
          menu: undefined,
        };
      });
      refetch();
    },
    [setState],
  );

  const handleNew = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
      data: { customer: params.id } as any,
    }));
  }, [params.id]);

  const handleEdit = useCallback((e: any) => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
      data: e,
    }));
  }, []);

  return (
    <ContentWrapper
      header={{
        title: '门店管理',
      }}
    >
      <CustomerStoreDrawer
        data={state.data}
        onClose={handleCloseDrawer}
        onSuccess={handleSuccess}
        onDeleteSuccess={handleDeleteSuccess}
        visible={state.visible}
      />
      <Card className="mb-5 mb-xl-10">
        <Card.Header className="pt-8">
          <Card.Title className="flex-column">
            <Input.Search
              solid
              defaultValue={searchForm.keywords}
              className="w-250px"
              placeholder="关键词搜索"
              onSearch={handleSearch}
            />
          </Card.Title>
          <Card.Toolbar>
            <div>
              <Button onClick={handleNew} className="me-4 my-1">
                新建
              </Button>
              <Button
                className="me-4 my-1"
                variant="light"
                onClick={() => excel.export()}
              >
                导出 Excel
              </Button>
            </div>
          </Card.Toolbar>
        </Card.Header>
        <Card.Body>
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={loading}>
            <Table
              hover
              rowKey="id"
              rowSelection={{
                type: 'checkbox',
                renderTitle: (size) => (
                  <>
                    已选中<span className="mx-2">{size}</span>个
                  </>
                ),
                toolbar: (selectedRowKeys: string[]) => {
                  return (
                    <div>
                      <Button
                        color="danger"
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
                  title: '编号',
                  width: 130,
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'no'),
                },
                {
                  key: 'name',
                  title: '名称',
                  width: 150,
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'name'),
                },
                {
                  key: 'address',
                  title: '地址',
                  render: (address) => {
                    return (
                      address?.fullAddress + ' ' + address?.detailedAddress
                    );
                  },
                },
                {
                  key: 'deviceCount',
                  title: '设备数',
                  width: 80,
                  render: (value: any) => {
                    return value === 0 ? (
                      <span className="badge badge-light">无设备</span>
                    ) : (
                      <span className="badge badge-primary">{value} 台</span>
                    );
                  },
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 120,
                  render: (_, record: any) => {
                    return (
                      <CustomerStoreActions
                        data={record}
                        refetch={refetch}
                        onEdit={handleEdit}
                      />
                    );
                  },
                },
              ]}
              pagination={pageInfo}
              onChange={handleTableChange}
              dataSource={stores}
            />
          </BlockUI>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default CustomerStoreListView;
