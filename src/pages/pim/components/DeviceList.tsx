import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';
import { Form } from 'antd';
import moment from 'moment';

import { AdvancedSearch } from '@/components';
import { useCurrentuser } from '@/hooks';
import useDelete from '@/hooks/useDelete';
import useExcel from '@/hooks/useExcel';
import useListPage, {
  queryToVariables,
  variablesToQuery,
} from '@/hooks/useListPage';
import {
  BlockUI,
  Button,
  Card,
  Col,
  Dropdown,
  Empty,
  Input,
  Menu,
  Radio,
  Row,
  Select2,
  Table,
} from '@/metronic';
import DateRangePicker from '@/metronic/DatePicker/DateRangePicker';
import { TableColumn } from '@/metronic/Table/typings';
import { useUsersQuery } from '@/pages/system/hooks';
import { Device, DeviceWhereInput, PageInfo } from '@/types';
import { getSortDirection } from '@/utils';

import {
  useCustomerStoresQuery,
  useCustomersQuery,
  useDeleteManyDevicesMutation,
  useDevicesLazyQuery,
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
  sn = 'sn',
  name = 'name',
  warrantyStatus = 'warrantyStatus',
  customer = 'store.customer.name',
  customerStore = 'store.name',
  createdAt = 'createdAt',
  action = 'action',
}

type DeviceListProps = {
  columns: ColumnName[];
  where: DeviceWhereInput;
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
        {
          source: 'customer',
          target: 'customer',
        },
        {
          source: 'stores',
          target: 'customerStore_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'created_by',
          target: 'createdBy_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'warranty_status',
          target: 'warrantyStatus',
        },
        {
          source: 'created_at_range',
          target: 'createdAt_range',
          transform: (value) => {
            const [start, end] = value.split('~');
            return [moment(start), moment(end)];
          },
        },
      ]),
    [searchParams.toString()],
  );

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

  const handleSearch = useCallback(
    (searchForm: any, pagination: any, sorter: any) => {
      console.log('handleSearch', searchForm, pagination, sorter);
      const querystring = variablesToQuery({ searchForm, pagination, sorter }, [
        {
          source: 'searchForm.keywords',
          target: 'q',
          skip: (value) => !value,
        },
        {
          source: 'searchForm.customer',
          target: 'customer',
          skip: (value) => !value,
        },
        {
          source: 'searchForm.customerStore_in',
          target: 'stores',
          transform: (value) => value?.join(','),
          skip: (value) => !value || !value.length,
        },
        {
          source: 'searchForm.createdBy_in',
          target: 'created_by',
          transform: (value) => value?.join(','),
          skip: (value) => !value || !value.length,
        },
        {
          source: 'searchForm.warrantyStatus',
          target: 'warranty_status',
          transform: (value) => value,
          skip: (value) => !value || value === 'ALL',
        },
        {
          source: 'searchForm.createdAt_range',
          target: 'created_at_range',
          transform: (value) =>
            value[0].format('YYYY-MM-DD') + '~' + value[1].format('YYYY-MM-DD'),
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
      ]);
      navigate(location.pathname + '?' + querystring, {
        replace: true,
      });
    },
    [],
  );

  const variables = useMemo(() => {
    return queryToVariables(
      searchParams,
      [
        {
          source: 'q',
          target: 'where.name_contains',
        },
        {
          source: 'customer',
          target: 'where.customer',
        },
        {
          source: 'stores',
          target: 'where.customerStore_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'created_by',
          target: 'where.createdBy_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'warranty_status',
          target: 'where.warrantyStatus',
        },
        {
          source: 'created_at_range',
          target: 'where.createdAt_range',
          transform: (value) => {
            const [start, end] = value.split('~');
            return { start: moment(start), end: moment(end) };
          },
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
      ],
      { where: { ...props.where } },
    );
  }, [searchParams.toString(), props.where]);

  const handleTableChange = useCallback(
    (pagination: any, _: any, sorter: any) => {
      handleSearch(searchForm, pagination, sorter);
    },
    [searchForm],
  );

  const [loadDevices] = useDevicesLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [devices, { loading, pageInfo, refetch }] = useListPage(
    useDevicesQuery,
    {
      variables,
      fetchPolicy: 'network-only',
    },
  );

  const handleKeywordSearch = useCallback((value: string) => {
    handleSearch({ keywords: value }, {}, {});
  }, []);

  const handleAdvancedSearch = useCallback((values: any) => {
    handleSearch(values, {}, {});
  }, []);

  const [customerId, setCustomerId] = useState(variables.where?.customer);

  const { data: customersData } = useCustomersQuery({
    fetchPolicy: 'network-only',
    skip: !!props.where?.customer,
  });

  const { data: customerStoresData, loading: customerStoresLoading } =
    useCustomerStoresQuery({
      fetchPolicy: 'network-only',
      skip: !customerId,
      variables: {
        where: {
          customer: customerId || variables.where?.customer,
        },
      },
    });

  const excel = useExcel({
    fields: [
      {
        key: 'sn',
        title: '序列号',
        type: 'string',
      },
      {
        key: 'brand.name',
        title: '品牌',
        type: 'string',
      },
      {
        key: 'product.name',
        title: '产品名称',
        type: 'string',
      },
      {
        key: 'name',
        title: '设备名称',
        type: 'string',
      },
      {
        key: 'warrantyStatus',
        title: '保固状态',
        type: 'string',
      },
      {
        key: 'warrantyStartDate',
        title: '保固开始时间',
        type: 'date',
      },
      {
        key: 'warrantyEndDate',
        title: '保固结束时间',
        type: 'date',
      },
      {
        key: 'store.no',
        title: '所属门店店号',
        type: 'string',
      },
      {
        key: 'store.name',
        title: '所属门店名称',
        type: 'string',
      },
      {
        key: 'store.address.fullAddress',
        title: '所属门店地址',
        type: 'string',
      },
      {
        key: 'store.phone',
        title: '所属门店电话',
        type: 'string',
      },
    ],
    export: {
      filename: '设备列表.xlsx',
      columns: [
        { key: 'sn', style: { wch: 20 } },
        { key: 'brand.name', style: { wch: 10 } },
        { key: 'product.name', style: { wch: 10 } },
        { key: 'name', style: { wch: 16 } },
        { key: 'warrantyStatus', style: { wch: 10 } },
        { key: 'warrantyStartDate', style: { wch: 16 } },
        { key: 'warrantyEndDate', style: { wch: 16 } },
        { key: 'store.no', style: { wch: 10 } },
        { key: 'store.name', style: { wch: 10 } },
        { key: 'store.address.fullAddress', style: { wch: 40 } },
        { key: 'store.phone', style: { wch: 20 } },
      ],
      async dataSource(toast) {
        const allDevices = [];
        let pageInfo: PageInfo = { hasNextPage: false } as any;
        let page = 1;
        do {
          const { data } = await loadDevices({
            variables: {
              ...variables,
              page,
              pageSize: 100,
            },
          });
          pageInfo = data!.result.pageInfo as any;
          allDevices.push(...data!.result.edges.map((edge) => edge.node));
          toast.update(
            `已下载 ${allDevices.length}/${data!.result.pageInfo.total} 条数据`,
          );
          page++;
        } while (pageInfo.hasNextPage);
        return allDevices;
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

  const { keywords, ...advancedSearchValues } = searchForm;

  const columns = (
    [
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
        key: 'store.customer.name',
        title: '所属客户',
        width: 120,
        render(value) {
          return <div>{value}</div>;
        },
      },
      {
        key: 'store.name',
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
    ] as TableColumn<any>[]
  )
    .filter((column) => props.columns.includes(column.key as ColumnName))
    .sort((a, b) => {
      return (
        props.columns.indexOf(a.key as ColumnName) -
        props.columns.indexOf(b.key as ColumnName)
      );
    });

  return (
    <Card className="mb-5 mb-xl-10">
      <Card.Header className="pt-8">
        <Card.Title className="flex-row">
          <Input.Search
            solid
            value={keywords}
            className="w-250px"
            placeholder="搜索设备"
            onSearch={handleKeywordSearch}
          />
          <AdvancedSearch
            values={advancedSearchValues}
            onSearch={handleAdvancedSearch}
          >
            {!props.where?.customer && (
              <Row gutter={8} className="mb-8">
                <Col xxl={7}>
                  <label className="fs-6 form-label fw-bold text-dark">
                    客户
                  </label>
                  <Form.Item noStyle name="customer">
                    <Select2
                      solid
                      matcher={(params, data) => {
                        if (!params.term || params.term === '') {
                          return data;
                        }
                        if (data.text.includes(params.term)) {
                          return data;
                        }
                        return null;
                      }}
                      onChange={(value) => {
                        setCustomerId(value as any);
                      }}
                      placeholder="全部客户"
                      options={customers.map((customer) => ({
                        label: customer.name!,
                        value: customer.id,
                      }))}
                    />
                  </Form.Item>
                </Col>
              </Row>
            )}
            <Row gutter={8} className="mb-8">
              <Col xxl={7}>
                <label className="fs-6 form-label fw-bold text-dark">
                  门店
                </label>
                <Form.Item dependencies={['customer']} noStyle>
                  {(form) => {
                    const customer = form.getFieldValue('customer');
                    let placeholder = customer ? '全部门店' : '请先选择客户';
                    return (
                      <Form.Item noStyle name="customerStore_in">
                        <Select2
                          solid
                          multiple
                          placeholder={
                            customerStoresLoading ? '加载中...' : placeholder
                          }
                          options={stores.map((item) => {
                            return {
                              label: item.name,
                              value: item.id,
                            };
                          })}
                        />
                      </Form.Item>
                    );
                  }}
                </Form.Item>
              </Col>
              <Col xxl={5}>
                <label className="fs-6 form-label fw-bold text-dark">
                  保修状态
                </label>
                <Form.Item noStyle name="warrantyStatus" initialValue="ALL">
                  <Radio.Group>
                    <Radio.Button value="ALL">全部</Radio.Button>
                    <Radio.Button value="ACTIVE">在保</Radio.Button>
                    <Radio.Button value="EXPIRED">已过期</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8} className="mb-8">
              <Col xxl={7}>
                <label className="fs-6 form-label fw-bold text-dark">
                  创建人
                </label>
                <Form.Item noStyle name="createdBy_in">
                  <Select2
                    solid
                    multiple
                    matcher={(params, data) => {
                      if (!params.term || params.term === '') {
                        return data;
                      }
                      const user = users.find(
                        (user) => user.id === (data as any).id,
                      );
                      if (
                        user?.nickname?.includes(params.term) ||
                        user?.username?.includes(params.term) ||
                        user?.phone?.number?.includes(params.term)
                      ) {
                        return data;
                      }
                      return null;
                    }}
                    placeholder="创建人"
                    labelProp="name"
                    valueProp="id"
                    options={users}
                  />
                </Form.Item>
              </Col>
              <Col xxl={5}>
                <label className="fs-6 form-label fw-bold text-dark">
                  创建时间
                </label>
                <Form.Item noStyle name="createdAt_range">
                  <DateRangePicker solid />
                </Form.Item>
              </Col>
            </Row>
          </AdvancedSearch>
        </Card.Title>

        <Card.Toolbar>
          <div className="me-4 my-1"></div>
          <div className="me-4 my-1"></div>
          <Button
            variant="light"
            className="me-4 my-1"
            onClick={() => excel.export()}
          >
            导出数据
          </Button>
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
            columns={columns}
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
