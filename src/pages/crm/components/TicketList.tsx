import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';
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
  Badge,
  BlockUI,
  Button,
  Card,
  Col,
  Dropdown,
  Empty,
  Form,
  Input,
  Menu,
  Radio,
  Row,
  Select2,
  Table,
} from '@/metronic';
import DateRangePicker from '@/metronic/DatePicker/DateRangePicker';
import { SelectEvent } from '@/metronic/Menu/typings';
import { useCustomerStoresQuery, useCustomersQuery } from '@/pages/pim/hooks';
import { useUsersQuery } from '@/pages/system/hooks';
import { Ticket, TicketStatus, TicketWhereInput } from '@/types';
import { getSortDirection } from '@/utils';

import {
  useDeleteManyTicketsMutation,
  useTicketsLazyQuery,
  useTicketsQuery,
} from '../hooks/api';

type TicketListProps = {
  where: TicketWhereInput;
};

export type TicketListRef = {
  refetch: () => void;
};

function TicketList(props: TicketListProps, _ref: React.Ref<TicketListRef>) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data: user } = useCurrentuser();

  const searchForm = useMemo(
    () =>
      queryToVariables(searchParams, [
        {
          source: 'q',
          target: 'keywords',
        },
        {
          source: 'customer',
          target: 'customerId',
        },
        {
          source: 'stores',
          target: 'storeId_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'created_by',
          target: 'createdBy_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'status',
          target: 'status',
        },
        {
          source: 'created_at_range',
          target: 'createdAt_range',
          transform: (value) => {
            const [start, end] = value.split('~');
            return [moment(start), moment(end)];
          },
        },
        {
          source: 'contact',
          target: 'contact_contains',
        },
        {
          source: 'assignee',
          target: 'assignee_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'resolvedAt_range',
          target: 'resolvedAt_range',
          transform: (value) => {
            const [start, end] = value.split('~');
            return [moment(start), moment(end)];
          },
        },
      ]),
    [searchParams.toString()],
  );

  useState<{
    keywords: string;
  }>({
    keywords: searchParams.get('q') || '',
  });

  const variables = useMemo(() => {
    const newVars = queryToVariables(
      searchParams,
      [
        {
          source: 'q',
          target: 'where.name_contains',
        },
        {
          source: 'customer',
          target: 'where.customerId',
        },
        {
          source: 'stores',
          target: 'where.storeId_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'created_by',
          target: 'where.createdBy_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'status',
          target: 'where.status',
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
          source: 'contact',
          target: 'where.contact_contains',
        },
        {
          source: 'assignee',
          target: 'where.assignee_in',
          transform: (value) => value.split(','),
        },
        {
          source: 'resolvedAt_range',
          target: 'where.resolvedAt_range',
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
      {
        where: { ...props.where },
      },
    );
    newVars.where = newVars.where || {};
    return newVars as {
      where: TicketWhereInput;
    };
  }, [searchParams.toString(), props.where]);

  const [loadTickets] = useTicketsLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [tickets, { loading, pageInfo, refetch }] = useListPage(
    useTicketsQuery,
    {
      variables,
      skip: !props.where,
    },
  );

  const [customerId, setCustomerId] = useState(variables.where?.customerId);

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
    skip: !!props.where?.customerId,
  });

  const { data: customerStoresData, loading: customerStoresLoading } =
    useCustomerStoresQuery({
      fetchPolicy: 'network-only',
      skip: !customerId,
      variables: {
        where: {
          customer: customerId || variables.where?.customerId,
        },
      },
    });

  const customers = customersData?.result || [];
  const stores = customerStoresData?.result || [];

  const users = usersData?.result.edges.map((edge) => edge.node) || [];

  const { delete: handleDelete, deleteMany: handleDeleteMany } = useDelete(
    useDeleteManyTicketsMutation,
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
            message = `确定删除选中的, 共 ${keys.length} 个服务单吗?`;
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

  const handleSearch = useCallback(
    (searchForm: any, pagination: any, sorter: any) => {
      const querystring = variablesToQuery({ searchForm, pagination, sorter }, [
        {
          source: 'searchForm.keywords',
          target: 'q',
          skip: (value) => !value,
        },
        {
          source: 'searchForm.customerId',
          target: 'customer',
          skip: (value) => !value,
        },
        {
          source: 'searchForm.storeId_in',
          target: 'stores',
          transform: (value) => value?.join(','),
          skip: (value) => !value || !value.length,
        },
        {
          source: 'searchForm.contact_contains',
          target: 'contact',
          skip: (value) => !value,
        },
        {
          source: 'searchForm.assignee_in',
          target: 'assignee',
          transform: (value) => value?.join(','),
          skip: (value) => !value || !value.length,
        },
        {
          source: 'searchForm.resolvedAt_range',
          target: 'resolvedAt_range',
          transform: (value) =>
            value[0].format('YYYY-MM-DD') + '~' + value[1].format('YYYY-MM-DD'),
          skip: (value) => !value,
        },
        {
          source: 'searchForm.createdBy_in',
          target: 'created_by',
          transform: (value) => value?.join(','),
          skip: (value) => !value || !value.length,
        },
        {
          source: 'searchForm.status',
          target: 'status',
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
    [searchForm],
  );

  const excel = useExcel({
    fields: [
      {
        key: 'no',
        title: '单号',
        type: 'string',
      },
      {
        key: 'device.sn',
        title: '设备序列号',
        type: 'string',
      },
      {
        key: 'device.brand.name',
        title: '品牌',
        type: 'string',
      },
      {
        key: 'device.product.name',
        title: '产品名称',
        type: 'string',
      },
      {
        key: 'device.name',
        title: '设备名称',
        type: 'date',
      },
      {
        key: 'device.warrantyStatus',
        title: '保固状态',
        type: 'string',
      },
      {
        key: 'device.warrantyStartDate',
        title: '启用时间',
        type: 'string',
      },
      {
        key: 'store.no',
        title: '门店店号',
        type: 'string',
      },
      {
        key: 'store.name',
        title: '门店名称',
        type: 'string',
      },
      {
        key: 'store.address.fullAddress',
        title: '门店地址',
        type: 'string',
      },
      {
        key: 'store.phone',
        title: '门店电话',
        type: 'string',
      },
      {
        key: 'store.openingDate',
        title: '开业时间',
        type: 'string',
      },
      {
        key: 'customer.name',
        title: '所属客户',
        type: 'string',
      },
      {
        key: 'description',
        title: '故障描述',
        type: 'string',
      },
      {
        key: 'status',
        title: '案件状态',
        type: 'string',
      },
      {
        key: 'createdAt',
        title: '报修时间',
        type: 'string',
      },
      {
        key: 'contactInfo.name',
        title: '报修人',
        type: 'string',
      },
      {
        key: 'contactInfo.phone',
        title: '报修人联系电话',
        type: 'string',
      },
      {
        key: 'contactInfo.address.fullAddress',
        title: '报修人联系地址',
        type: 'string',
      },
      {
        key: 'assignee.name',
        title: '维修人员',
        type: 'string',
      },
      {
        key: 'assignee.phone.number',
        title: '维修人员联系电话',
        type: 'string',
      },
      {
        key: 'completedAt',
        title: '完成维修时间',
        type: 'string',
      },
    ],
    export: {
      filename: '服务单列表.xlsx',
      columns: [
        { key: 'no', style: { wch: 20 } },
        { key: 'device.sn', style: { wch: 20 } },
        { key: 'device.brand.name', style: { wch: 10 } },
        { key: 'device.product.name', style: { wch: 10 } },
        { key: 'device.name', style: { wch: 16 } },
        { key: 'device.warrantyStatus', style: { wch: 10 } },
        { key: 'device.warrantyStartDate', style: { wch: 16 } },
        { key: 'store.no', style: { wch: 10 } },
        { key: 'store.name', style: { wch: 10 } },
        { key: 'store.address.fullAddress', style: { wch: 40 } },
        { key: 'store.phone', style: { wch: 20 } },
        { key: 'store.openingDate', style: { wch: 16 } },
        { key: 'customer.name', style: { wch: 10 } },
        { key: 'description', style: { wch: 10 } },
        { key: 'status', style: { wch: 10 } },
        { key: 'createdAt', style: { wch: 10 } },
        { key: 'contactInfo.name', style: { wch: 10 } },
        { key: 'contactInfo.phone', style: { wch: 20 } },
        { key: 'contactInfo.address.fullAddress', style: { wch: 40 } },
        { key: 'assignee.name', style: { wch: 10 } },
        { key: 'assignee.phone.number', style: { wch: 20 } },
        { key: 'completedAt', style: { wch: 16 } },
      ],
      async dataSource() {
        const { data } = await loadTickets({
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

  const handleItemClick = useCallback(
    (data: Ticket) => (e: SelectEvent) => {
      if (e.key === 'view') {
        navigate(`/srm/tickets/${data.id}`, {});
      } else if (e.key === 'delete') {
        handleDelete(data);
      }
    },
    [],
  );

  const handleTableChange = useCallback(
    (pagination: any, _: any, sorter: any) => {
      handleSearch(searchForm, pagination, sorter);
    },
    [searchForm],
  );

  const handleKeywordSearch = useCallback((value: string) => {
    handleSearch({ keywords: value }, {}, {});
  }, []);

  const handleAdvancedSearch = useCallback((values: any) => {
    handleSearch(values, {}, {});
  }, []);

  useImperativeHandle(_ref, () => ({
    refetch() {
      refetch();
    },
  }));

  const { keywords, ...advancedSearchValues } = searchForm;

  console.log('advancedSearchValues', advancedSearchValues);

  return (
    <Card className="mb-5 mb-xl-10">
      <Card.Header className="pt-8">
        <Card.Title className="flex-row">
          <Input.Search
            solid
            defaultValue={keywords}
            className="w-250px"
            placeholder="关键词搜索"
            onSearch={handleKeywordSearch}
          />
          <AdvancedSearch
            values={advancedSearchValues}
            onSearch={handleAdvancedSearch}
          >
            {!props.where?.customerId && (
              <Row gutter={8} className="mb-8">
                <Col xxl={7}>
                  <label className="fs-6 form-label fw-bold text-dark">
                    客户
                  </label>
                  <Form.Item noStyle name="customerId">
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
                <Form.Item dependencies={['customerId']} noStyle>
                  {(form) => {
                    const customer = form.getFieldValue('customerId');
                    let placeholder = customer ? '全部门店' : '请先选择客户';
                    return (
                      <Form.Item noStyle name="storeId_in">
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
                  状态
                </label>
                <Form.Item noStyle name="status" initialValue="ALL">
                  <Radio.Group>
                    <Radio.Button value="ALL">全部</Radio.Button>
                    <Radio.Button value="NEW">新建</Radio.Button>
                    <Radio.Button value="IN_PROGRESS">处理中</Radio.Button>
                    <Radio.Button value="SUSPENDED">暂停</Radio.Button>
                    <Radio.Button value="RESOLVED">已解决</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8} className="mb-8">
              <Col xxl={7}>
                <label className="fs-6 form-label fw-bold text-dark">
                  报修人
                </label>
                <Form.Item noStyle name="contact_contains">
                  <Input solid placeholder="报修人" />
                </Form.Item>
              </Col>
              <Col xxl={5}>
                <label className="fs-6 form-label fw-bold text-dark">
                  报修时间
                </label>
                <Form.Item noStyle name="createdAt_range">
                  <DateRangePicker solid />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8} className="mb-8">
              <Col xxl={7}>
                <label className="fs-6 form-label fw-bold text-dark">
                  处理工程师
                </label>
                <Form.Item noStyle name="assignee_in">
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
                    placeholder="处理工程师"
                    labelProp="name"
                    valueProp="id"
                    options={users}
                  />
                </Form.Item>
              </Col>
              <Col xxl={5}>
                <label className="fs-6 form-label fw-bold text-dark">
                  完修时间
                </label>
                <Form.Item noStyle name="resolvedAt_range">
                  <DateRangePicker solid />
                </Form.Item>
              </Col>
            </Row>
          </AdvancedSearch>
        </Card.Title>
        <Card.Toolbar>
          <div>
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
                title: '编号',
                width: 160,
                sorter: true,
                sortOrder: getSortDirection(searchParams, 'no'),
              },
              {
                key: 'store.name',
                title: '门店',
                render: (_, record) => (
                  <>
                    {record.customer?.name}, {record.store?.name}
                  </>
                ),
              },
              {
                key: 'createdAt',
                title: '报修时间',
                width: 160,
              },
              {
                key: 'description',
                title: '故障说明',
                width: 180,
              },
              {
                key: 'status',
                title: '状态',
                sorter: true,
                width: 120,
                render: (value: any) => {
                  switch (value) {
                    case TicketStatus.New:
                      return (
                        <Badge color="danger" light>
                          未接单
                        </Badge>
                      );
                    case TicketStatus.Suspended:
                      return (
                        <Badge color="warning" light>
                          暂停的
                        </Badge>
                      );
                    case TicketStatus.Resolved:
                      return (
                        <Badge color="success" light>
                          已完成
                        </Badge>
                      );
                    case TicketStatus.Reopen:
                    case TicketStatus.InProgress:
                      return (
                        <Badge color="info" light>
                          处理中
                        </Badge>
                      );
                    default:
                      return <Badge color="dark">状态未知</Badge>;
                  }
                },
              },
              {
                title: '操作',
                key: 'action',
                width: 120,
                render: (_, record: any) => {
                  return (
                    <div>
                      <Dropdown
                        overlay={
                          <Menu
                            onClick={handleItemClick(record)}
                            className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2"
                          >
                            <Menu.Item key="view" className="px-3">
                              查看详情
                            </Menu.Item>
                            <Menu.Item key="delete" className="px-3">
                              删除
                            </Menu.Item>
                          </Menu>
                        }
                        placement="bottomRight"
                      >
                        <Button variant="clean" activeColor="light-primary">
                          操 作
                          <Icon
                            className="ms-2 svg-icon-5 m-0"
                            name="Duotune/arr072"
                          />
                        </Button>
                      </Dropdown>
                    </div>
                  );
                },
              },
            ]}
            pagination={pageInfo}
            onChange={handleTableChange}
            dataSource={tickets}
          />
        </BlockUI>
      </Card.Body>
    </Card>
  );
}

export default forwardRef(TicketList);
