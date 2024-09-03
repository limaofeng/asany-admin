import { useCallback, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';

import { useCurrentuser } from '@/hooks';
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
  Symbol,
  Table,
} from '@/metronic';
import { SelectEvent } from '@/metronic/Menu/typings';
import { User } from '@/types';
import { getSortDirection } from '@/utils';

import { useUsersQuery } from '../hooks';
import useUserDelete from '../hooks/useUserDelete';

function UserListView() {
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
      ]),
    [searchParams.get('q')],
  );

  const variables = useMemo(() => {
    const newVariables = queryToVariables(searchParams, [
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
    newVariables.where = newVariables.where || {};
    newVariables.where.tenantId = user?.tenantId;
    return newVariables;
  }, [searchParams.toString(), user?.tenantId]);

  const [users, { loading, pageInfo, refetch }] = useListPage(useUsersQuery, {
    variables,
    skip: !user?.tenantId,
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

  const { delete: handleDelete, deleteMany: handleDeleteMany } =
    useUserDelete(refetch);

  const handleSearch = useCallback((value: string) => {
    navigate(location.pathname + (!!value ? '?q=' + value : ''), {
      replace: true,
    });
  }, []);

  const handleDeleteInBatch = useCallback(
    (ids: string[]) => () => {
      handleDeleteMany(ids);
    },
    [],
  );

  const handleItemClick = useCallback(
    (data: User) => (e: SelectEvent) => {
      if (e.key === 'edit') {
        navigate(`/system/users/${data.id}`);
      } else if (e.key === 'delete') {
        handleDelete(data as any);
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
          </Card.Toolbar>
        </Card.Header>
        <Card.Body>
          {!pageInfo?.total && !loading ? (
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
                      key: 'name',
                      title: '名称',
                      sortOrder: getSortDirection(searchParams, 'name'),
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
                      sortOrder: getSortDirection(searchParams, 'username'),
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
                                  className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2"
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
                                variant="clean"
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
                  onChange={handleTableChange}
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
