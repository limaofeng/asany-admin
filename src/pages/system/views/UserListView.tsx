import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '@asany/icons';

import { useCurrentuser } from '@/hooks';
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
  Symbol,
  Table,
} from '@/metronic';
import { SelectEvent } from '@/metronic/Menu/typings';
import { User } from '@/types';

import { useDeleteManyUsersMutation, useUsersQuery } from '../hooks';

function UserListView() {
  const navigate = useNavigate();
  const [deleteManyUsers] = useDeleteManyUsersMutation();
  const { data: user } = useCurrentuser();

  const [users, { loading, pageInfo, sorter, onChange, refetch }] =
    useListPage<User>(
      useUsersQuery,
      {
        toQuery: (variables, pagination, filter, sorter) => {
          const _query: any = {};
          if (variables.filter?.nickname_contains) {
            _query.q = variables.filter?.nickname_contains;
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
            query.where = { nickname_contains: query.q };
            delete query.q;
          }
          if (query.page) {
            query.page = parseInt(query.page);
          }
          query.where.tenantId = user?.tenantId;
          return query;
        },
      },
      !user?.tenantId,
    );

  const handleSearch = useCallback((text: string) => {
    navigate(`/system/users?q=${text}`, {
      replace: true,
    });
  }, []);

  const [handleDelete] = useDelete<{ name: string; ids: string[] }>(
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
      await deleteManyUsers({
        variables: {
          where: { id_in: data?.ids },
        },
      });
      refetch();
    },
  );

  const handleDeleteInBatch = useCallback(
    (ids: string[]) => () => {
      handleDelete({
        name: '选中的用户',
        ids,
      });
    },
    [],
  );

  const handleItemClick = useCallback(
    (data: User) => (e: SelectEvent) => {
      if (e.key === 'edit') {
        navigate(`/system/users/${data.id}`);
      } else if (e.key === 'delete') {
        handleDelete({
          name: data.name!,
          ids: [data.id!],
        });
      }
    },
    [handleDelete],
  );

  return (
    <ContentWrapper
      header={{
        title: '用户列表',
      }}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Header className="pt-8">
          <Card.Title className="flex-column">
            <Input.Search
              solid
              className="w-250px"
              placeholder="搜索用户"
              onSearch={handleSearch}
            />
          </Card.Title>
          <Card.Toolbar>
            <div className="d-flex justify-content-end">
              <Button
                as={Link}
                variant="primary"
                className="me-3"
                icon={<Icon className="svg-icon-2" name="Duotune/arr075" />}
                to="/system/users/new"
              >
                新建用户
              </Button>
            </div>
            {/* <div className="me-4 my-1">
          <Select
            solid
            size="sm"
            className="w-125px"
            options={[
              { label: '全部时间', value: 'all' },
              { label: '今年', value: 'thisyear' },
              { label: '这个月', value: 'thismonth' },
              { label: '最近一个月', value: 'lastmonth' },
              { label: '最近90天', value: 'last90days' },
            ]}
          />
        </div>
        <div className="me-4 my-1">
          <Select
            solid
            size="sm"
            className="w-125px"
            options={[
              { label: '全部状态', value: 'all' },
              { label: '草稿', value: 'DRAFT' },
              { label: '已发布', value: 'PUBLISHED' },
              { label: '等待发布', value: 'SCHEDULED' },
            ]}
          />
        </div> */}
          </Card.Toolbar>
        </Card.Header>
        <Card.Body>
          {!pageInfo.total && !loading ? (
            <Card className="mb-5 mb-xl-10">
              <Empty
                title="还没有用户"
                description="马上添加一个用户吧！"
                image="/assets/media/illustrations/sigma-1/4.png"
              >
                <Button variant="primary">添加用户</Button>
              </Empty>
            </Card>
          ) : (
            <>
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
                        已选中<span className="mx-2">{size}</span>个用户
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
                      key: 'name',
                      title: '名称',
                      sortOrder:
                        sorter.field === 'name' ? sorter.order : undefined,
                      render: (value, record) => (
                        <div className="d-flex py-2 align-items-center">
                          <Symbol.Avatar src={record.avatar} />
                          <span className="ms-2 text-muted">{value}</span>
                        </div>
                      ),
                    },
                    {
                      key: 'username',
                      title: '账户',
                      sorter: true,
                      width: 120,
                      sortOrder:
                        sorter.field === 'username' ? sorter.order : undefined,
                    },
                    {
                      key: 'email',
                      title: '邮箱',
                      width: 180,
                      render: (value) => (
                        <span className="text-muted">{value?.address}</span>
                      ),
                    },
                    {
                      key: 'phone',
                      title: '电话',
                      width: 180,
                      render: (value) => (
                        <span className="text-muted">{value?.number}</span>
                      ),
                    },
                    {
                      key: 'createdAt',
                      title: '创建时间',
                      width: 120,
                    },
                    {
                      title: '操作',
                      key: 'action',
                      width: 140,
                      render: (_, record: any) => {
                        return (
                          <div>
                            <Dropdown
                              overlay={
                                <Menu
                                  onClick={handleItemClick(record)}
                                  className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4"
                                >
                                  <Menu.Item key="edit" className="px-3">
                                    编辑
                                  </Menu.Item>
                                  <Menu.Item
                                    key="delete"
                                    className="px-3 actions-delete"
                                  >
                                    删除
                                  </Menu.Item>
                                </Menu>
                              }
                              placement="bottomRight"
                            >
                              <Button
                                variant="light"
                                activeColor="light-primary"
                              >
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
                  onChange={onChange}
                  dataSource={users}
                />
              </BlockUI>
            </>
          )}
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default UserListView;
