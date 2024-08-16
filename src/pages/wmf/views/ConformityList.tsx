import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';

import useDelete from '@/hooks/useDelete';
import useListPage from '@/hooks/useListPage';
import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  Dropdown,
  Empty,
  Input,
  Menu,
  Modal,
  Table,
  Toast,
} from '@/metronic';
import {
  useArticlesQuery,
  useDeleteManyArticlesMutation,
} from '@/pages/cms/hooks';
import { Device } from '@/types';

function DeviceActions({
  data,
  refetch,
}: {
  data: Device;
  refetch: () => void;
}) {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const [deleteManyDevices] = useDeleteManyArticlesMutation();

  const [handleDelete] = useDelete<{ name: string; id: string }>(
    {
      title: '你确定要删除吗？',
      content: (data) => (
        <>
          您即将删除“<strong>{data.name}</strong>
          ”。删除操作不可逆转，请谨慎操作，您确定删除吗？
        </>
      ),
    },
    async (data) => {
      await deleteManyDevices({
        variables: {
          where: {
            id_in: [data?.id],
          },
        },
      });
      refetch();
    },
  );

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

function ConformityList() {
  // const { data: user } = useCurrentuser();
  const [searchParams] = useSearchParams();

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

  const [deleteManyDevices] = useDeleteManyArticlesMutation();

  // const { data: usersData } = useUsersQuery({
  //   variables: {
  //     where: {
  //       tenantId: user?.tenantId,
  //     },
  //     pageSize: 100,
  //   },
  //   fetchPolicy: 'network-only',
  //   skip: !user?.tenantId,
  // });

  const [devices, { loading, pageInfo, sorter, refetch, onChange }] =
    useListPage<Device>(useArticlesQuery as any, {
      toQuery: (variables, pagination, where, sorter) => {
        const _query: any = {};
        if (where?.name_contains) {
          _query.q = where?.name_contains;
        }
        if (where?.customer) {
          _query.customer = where.customer;
        }
        if (where?.customerStore) {
          _query.customerStore = where.customerStore;
        }
        if (where?.createdBy) {
          _query.createdBy = where.createdBy;
        }
        if (!!sorter) {
          _query.orderBy =
            sorter.field + '_' + (sorter.order === 'ascend' ? 'asc' : 'desc');
        }
        _query.page = pagination.current;
        return _query;
      },
      toVariables: (query) => {
        query.where = {};
        if (query.q) {
          query.where['name_contains'] = query.q;
          delete query.q;
        }
        if (query.customer) {
          query.where['customer'] = query.customer;
          delete query.customer;
        }
        if (query.customerStore) {
          query.where['customerStore'] = query.customerStore;
          delete query.customerStore;
        }
        if (query.createdBy) {
          query.where['createdBy'] = query.createdBy;
          delete query.createdBy;
        }
        return query;
      },
    });

  // const setWhereCreatedBy = useCallback((value: string) => {
  //   setWhere((where) => ({
  //     ...where,
  //     createdBy: !value ? undefined : value,
  //   }));
  // }, []);

  const handleSearch = useCallback(
    (value: string) => {
      setWhere((where) => ({
        ...where,
        name_contains: value,
      }));
    },
    [onChange, sorter],
  );

  useEffect(() => {
    onChange(
      { current: searchParams.get('page') || 1, pageSize: 10 },
      where,
      sorter,
    );
  }, [where, onChange, sorter, searchParams.get('page')]);

  // const users = usersData?.result.edges.map((edge) => edge.node) || [];

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      const message = `确定删除选中的, 共 ${selectedRowKeys.length} 个设备吗？`;
      const result = await Modal.confirm({
        title: '确定删除',
        content: (
          <>
            <p className="tip-confirm">{message}</p>
            <p>删除的操作不可逆,请谨慎操作</p>
          </>
        ),
        okClassName: 'btn-danger',
        okText: '删除',
      });
      if (!result.isConfirmed) {
        return;
      }
      await deleteManyDevices({
        variables: {
          where: {
            id_in: selectedRowKeys,
          },
        },
      });
      Toast.success(`设备批量删除成功`, 2000, {
        placement: 'bottom-left',
        progressBar: true,
      });
    },
    [],
  );

  return (
    <ContentWrapper
      header={{
        title: '符合性申明管理',
      }}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Header className="pt-8">
          <Card.Title className="flex-column">
            <Input.Search
              solid
              value={where?.name_contains}
              className="w-250px"
              placeholder="关键词搜索"
              onSearch={handleSearch}
            />
          </Card.Title>
          <Card.Toolbar>
            {/* <div className="me-4 my-1">
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
            </div> */}
            <div>
              <Button className="me-4 my-1">新建</Button>
              <Button className="me-4 my-1">模板数据导入</Button>
              <Button className="me-4 my-1">符合性声明模板下载</Button>
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
                  title: '型号',
                  sorter: true,
                  sortOrder: sorter.field === 'no' ? sorter.order : undefined,
                  width: 260,
                  render(no, data) {
                    return (
                      <Link
                        to={`/pim/devices/${data.id}`}
                        className="text-gray-700"
                      >
                        {no}
                      </Link>
                    );
                  },
                },
                {
                  key: 'name',
                  title: '规范文件',
                  sorter: true,
                  sortOrder: sorter.field === 'name' ? sorter.order : undefined,
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
                  title: '状态',
                  width: 160,
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
                  key: 'createdAt',
                  title: '创建时间',
                  width: 120,
                  sorter: true,
                  sortOrder:
                    sorter.field === 'createdAt' ? sorter.order : undefined,
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 140,
                  render: (_, record: any) => {
                    return <DeviceActions data={record} refetch={refetch} />;
                  },
                },
              ]}
              pagination={pageInfo}
              onChange={onChange}
              dataSource={devices}
            />
          </BlockUI>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default ConformityList;
