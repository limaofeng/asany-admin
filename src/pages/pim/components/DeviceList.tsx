import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';

import { useCurrentuser } from '@/hooks';
import useDelete from '@/hooks/useDelete';
import useListPage, {
  queryToVariables,
  variablesToQuery,
} from '@/hooks/useListPage';
import {
  BlockUI,
  Button,
  Card,
  Dropdown,
  Empty,
  Input,
  Menu,
  Select2,
  Table,
} from '@/metronic';
import { useUsersQuery } from '@/pages/system/hooks';
import { Device } from '@/types';
import { getSortDirection } from '@/utils';

import {
  useCustomerStoresQuery,
  useCustomersQuery,
  useDeleteManyDevicesMutation,
  useDevicesQuery,
} from '../hooks';

function DeviceActions({
  data,
  delete: handleDelete,
}: {
  data: Device;
  delete: (data: any) => void;
}) {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const handleClick = useCallback(({ key }: any) => {
    if (key === 'edit') {
      navigate(`/pim/devices/${data.id}`);
    } else if (key === 'delete') {
      handleDelete({ name: data.name!, id: data.id });
    }
  }, []);

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleClick}
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4"
        >
          <Menu.Item key="edit" className="px-3">
            编辑
          </Menu.Item>
          <Menu.Item key="delete" className="px-3">
            删除
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
      onVisibleChange={setVisible}
      visible={visible}
    >
      <Button variant="light" activeColor="light-primary">
        操 作
        <Icon className="ms-2 svg-icon-5 m-0" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

export enum ColumnName {
  sn,
  name,
  warrantyStatus,
  customer,
  customerStore,
  createdAt,
}

type DeviceListProps = {
  columns: ColumnName[];
};

function DeviceList(props: DeviceListProps) {
  const { data: user } = useCurrentuser();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

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

  const [where, setWhere] = useState<{
    name_contains?: string;
    customer?: string;
    customerStore?: string;
    createdBy?: string;
  }>({});

  useEffect(() => {
    setWhere((where) => {
      if (searchParams.get('name_contains')) {
        where.name_contains = searchParams.get('name_contains')!;
      }
      if (searchParams.get('customer')) {
        where.customer = searchParams.get('customer')!;
      }
      if (searchParams.get('customerStore')) {
        where.customerStore = searchParams.get('customerStore')!;
      }
      if (searchParams.get('createdBy')) {
        where.createdBy = searchParams.get('createdBy')!;
      }
      return where;
    });
  }, [searchParams]);

  const { data: usersData } = useUsersQuery({
    variables: {
      where: {
        tenantId: user?.tenantId,
      },
      pageSize: 100,
    },
    fetchPolicy: 'network-only',
    skip: !user?.tenantId,
  });

  const { data: customersData } = useCustomersQuery({
    fetchPolicy: 'network-only',
  });

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

  const variables = useMemo(() => {
    return queryToVariables(searchParams, [
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
  }, [searchParams.toString()]);

  const [devices, { loading, pageInfo, refetch }] = useListPage(
    useDevicesQuery,
    {
      variables,
      fetchPolicy: 'network-only',
    },
  );

  const setCustomerId = useCallback((value: string) => {
    setWhere((where) => ({
      ...where,
      customerStore: undefined,
      customer: value,
    }));
  }, []);

  const setWhereCreatedBy = useCallback((value: string) => {
    setWhere((where) => ({
      ...where,
      createdBy: !value ? undefined : value,
    }));
  }, []);

  const setCustomerStoreId = useCallback((value: string) => {
    setWhere((where) => ({
      ...where,
      customerStore: value,
    }));
  }, []);

  const handleSearch = useCallback((value: string) => {
    navigate(location.pathname + (!!value ? '?q=' + value : ''), {
      replace: true,
    });
  }, []);

  const { data: customerStoresData } = useCustomerStoresQuery({
    fetchPolicy: 'network-only',
    skip: !where?.customer,
    variables: {
      where: {
        customer: where?.customer,
      },
    },
  });

  const customers = customersData?.result || [];
  const stores = customerStoresData?.result || [];

  const users = usersData?.result.edges.map((edge) => edge.node) || [];

  const { delete: handleDelete, deleteMany: handleDeleteMany } = useDelete(
    useDeleteManyDevicesMutation,
    {
      onDeleted() {
        refetch();
      },
      dialog: {
        title: '你确定要删除吗？',
        content: (data, info) => {
          let message;
          if (info.batch) {
            const keys = data as any as string[];
            message = `确定删除选中的, 共 ${keys.length} 个设备吗？`;
          } else {
            message = (
              <>
                您即将删除“<strong>{data.name}</strong>
              </>
            );
          }
          return (
            <>
              <p className="tip-confirm">{message}</p>
              <p>删除的操作不可逆,请谨慎操作</p>
            </>
          );
        },
      },
    },
  );

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      handleDeleteMany(selectedRowKeys);
    },
    [],
  );

  return (
    <Card className="mb-5 mb-xl-10">
      <Card.Header className="pt-8">
        <Card.Title className="flex-row">
          <Input.Search
            solid
            value={searchForm.keywords}
            className="w-250px"
            placeholder="搜索设备"
            onSearch={handleSearch}
          />
          <Button variant={false}>更多筛选条件</Button>
        </Card.Title>

        <Card.Toolbar>
          <div className="me-4 my-1">
            <Select2
              solid
              size="sm"
              className="w-150px"
              onChange={(value) => setWhereCreatedBy(value as string)}
              matcher={(params, data) => {
                if (!params.term || params.term === '') {
                  return data;
                }
                if (data.text.includes(params.term)) {
                  return data;
                }
                return null;
              }}
              placeholder="创建人"
              value={where?.createdBy}
              options={users.map((user) => ({
                label: user.name!,
                value: user.id!,
              }))}
            />
          </div>
          <div className="me-4 my-1">
            <Select2
              solid
              size="sm"
              className="w-150px"
              onChange={(value) => setCustomerId(value as string)}
              matcher={(params, data) => {
                if (!params.term || params.term === '') {
                  return data;
                }
                if (data.text.includes(params.term)) {
                  return data;
                }
                return null;
              }}
              placeholder="全部客户"
              value={where?.customer}
              options={customers.map((customer) => ({
                label: customer.name!,
                value: customer.id,
              }))}
            />
          </div>
          <div className="me-4 my-1">
            <Select2
              solid
              size="sm"
              className="w-250px"
              placeholder="全部门店"
              value={where?.customerStore}
              onChange={(value) => setCustomerStoreId(value as string)}
              options={stores.map((item) => {
                return {
                  label: item.name,
                  value: item.id,
                };
              })}
            />
          </div>
          <Button className="me-4 my-1">导出数据</Button>
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
                key: 'sn',
                title: '序列号',
                sorter: true,
                sortOrder: getSortDirection(searchParams, 'sn'),
                width: 260,
                render(no, data) {
                  return (
                    <span
                      onClick={() => {
                        navigate(`/pim/devices/${data.id}`);
                      }}
                    >
                      {no}
                    </span>
                  );
                },
              },
              {
                key: 'name',
                title: '设备名称',
                sorter: true,
                sortOrder: getSortDirection(searchParams, 'name'),
                render(name, record) {
                  return (
                    <div>
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
                  return <div>{warrantyStatusTexts[value]}</div>;
                },
              },
              {
                key: 'owner.customer.name',
                title: '所属客户',
                width: 120,
                render(value) {
                  return <div>{value}</div>;
                },
              },
              {
                key: 'owner.name',
                title: '所属门店',
                width: 120,
                render(value) {
                  return <div>{value}</div>;
                },
              },
              {
                key: 'createdAt',
                title: '创建时间',
                width: 120,
                sorter: true,
                sortOrder: getSortDirection(searchParams, 'createdAt'),
              },
              {
                title: '操作',
                key: 'action',
                width: 140,
                render: (_, record: any) => {
                  return <DeviceActions data={record} delete={handleDelete} />;
                },
              },
            ]}
            pagination={pageInfo}
            onChange={handleTableChange}
            dataSource={devices}
          />
        </BlockUI>
      </Card.Body>
    </Card>
  );
}

export default DeviceList;
