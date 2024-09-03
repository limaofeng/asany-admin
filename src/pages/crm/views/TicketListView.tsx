import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';
import moment from 'moment';

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
import { Ticket } from '@/types';
import { getSortDirection } from '@/utils';

import TicketDrawer from '../components/TicketDrawer';
import { useTicketsQuery } from '../hooks/index';
import useTicketDelete from '../hooks/useTicketDelete';

function TicketActions({
  data,
  onEdit,
  refetch,
}: {
  data: Ticket;
  onEdit: (data: Ticket) => void;
  refetch: () => void;
}) {
  const [visible, setVisible] = useState(false);

  const { delete: handleDelete } = useTicketDelete(refetch);

  const handleClick = useCallback(({ key }: any) => {
    if (key === 'edit') {
      onEdit(data);
    } else if (key === 'delete') {
      handleDelete({ name: data.no!, id: data.id });
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

function TicketListView() {
  const navigate = useNavigate();
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

  const [articles, { loading, pageInfo, refetch }] = useListPage(
    useTicketsQuery,
    {
      variables,
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

  const { deleteMany: handleDeleteMany } = useTicketDelete(refetch);

  const handleSearch = useCallback((value: string) => {
    navigate(location.pathname + (!!value ? '?q=' + value : ''), {
      replace: true,
    });
  }, []);

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      await handleDeleteMany(selectedRowKeys);
    },
    [handleDeleteMany],
  );

  const [state, setState] = useState<{ data?: Ticket; visible: boolean }>({
    visible: false,
  });

  const handleCloseDrawer = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleSuccess = useCallback(
    (_data: Ticket) => {
      setState((prevState) => ({
        ...prevState,
        route: _data,
      }));
      refetch();
    },
    [setState],
  );

  const handleDeleteSuccess = useCallback(
    (_data: Ticket) => {
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
      data: {} as any,
    }));
  }, []);

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
        title: '客户管理',
      }}
    >
      <TicketDrawer
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
                  key: 'title',
                  title: 'CMMF CODE',
                  width: 130,
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'title'),
                },
                {
                  key: 'tags',
                  title: 'WMF CODE',
                  width: 130,
                },
                {
                  key: 'content',
                  title: '规范客户',
                },
                {
                  key: 'expirationAt',
                  title: '结束时间',
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'expirationAt'),
                  width: 160,
                  render(value) {
                    return (
                      <div className="text-gray-700">
                        {value && moment(value).format('YYYY-MM-DD HH:mm')}
                      </div>
                    );
                  },
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 120,
                  render: (_, record: any) => {
                    return (
                      <TicketActions
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
              dataSource={articles}
            />
          </BlockUI>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default TicketListView;
