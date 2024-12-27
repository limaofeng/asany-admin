import { useCallback, useMemo } from 'react';
import { NavigateFunction, useSearchParams } from 'react-router-dom';

import { Icon } from '@asany/icons';
import { Link, useNavigate } from '@umijs/max';

import Controls from '@/components/Controls';
import useListPage, {
  queryToVariables,
  variablesToQuery,
} from '@/hooks/useListPage';
import { ContentWrapper } from '@/layouts/components';
import {
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
import type { Sorter } from '@/metronic/typings';
import type { ProcessModel } from '@/types';

import { useProcessModelsQuery } from '../hooks';
import useProcessModelDelete from '../hooks/useProcessModelDelete';

type ActionsProps = {
  navigate: NavigateFunction;
  baseUrl: string;
  data: ProcessModel;
  onDesign: (id: string) => void;
  onDelete: (data: ProcessModel) => Promise<any>;
};

function Actions({
  data,
  navigate,
  onDelete,
  onDesign,
  baseUrl,
}: ActionsProps) {
  const handleDelete = useCallback(
    async (_data: ProcessModel) => {
      const message = `确定删除活动 “${_data.name}” 吗？`;

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
      await onDelete(_data as ProcessModel);
      Toast.success(`活动 “${_data.name}” 删除成功`, 2000, {
        placement: 'bottom-left',
        progressBar: true,
      });
    },
    [onDelete],
  );

  const handleMenuClick = useCallback(
    (event: any) => {
      if (event.key === 'view') {
        navigate(`${baseUrl}/${data.id}`);
      } else if (event.key === 'delete') {
        handleDelete(data);
      } else if (event.key === 'design') {
        onDesign(data.id);
      }
    },
    [baseUrl, data, handleDelete, history, onDesign],
  );

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleMenuClick}
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-4"
        >
          <Menu.Item key="view" className="px-3">
            编辑
          </Menu.Item>
          <Menu.Separator className="my-1" />
          <Menu.Item key="design" className="px-3">
            设计
          </Menu.Item>
          <Menu.Separator className="my-1" />
          <Menu.Item key="delete" className="px-3 actions-delete">
            删除
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
    >
      <Button className="fs-8" variant="light" activeColor="light-primary">
        操作
        <Icon className="svg-icon-5 ms-2 me-n1" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

function ModelList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const baseUrl = location.pathname;

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

  const [data, { loading, pageInfo, refetch }] = useListPage(
    useProcessModelsQuery,
    {
      variables,
    },
  );

  const handleDesign = useCallback(
    (id: string) => {
      navigate(`/workflow/models/${id}/design`);
    },
    [history],
  );

  const sorter = useMemo<Sorter>(() => {
    if (!variables.orderBy) {
      return {
        order: 'descend',
        field: 'createdAt',
      };
    }
    const [field, order] = variables.orderBy.split('_');
    return {
      order: order === 'desc' ? 'descend' : 'ascend',
      field,
    };
  }, [variables.orderBy]);

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

  const handleSearch = useCallback((value: string) => {
    navigate(location.pathname + (!!value ? '?q=' + value : ''), {
      replace: true,
    });
  }, []);

  const { deleteMany: handleDeleteMany, delete: handleDelete } =
    useProcessModelDelete(refetch);

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      await handleDeleteMany(selectedRowKeys);
    },
    [handleDeleteMany],
  );

  const tableToolbar = useMemo(() => {
    return (selectedRowKeys: string[]) => {
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
    };
  }, [handleDeleteInBatch]);

  return (
    <ContentWrapper loading={loading} footer={false}>
      <div className="d-flex flex-wrap flex-stack pb-7">
        <div className="d-flex flex-wrap align-items-center">
          <h3 className="fw-bolder me-5">流程模型 ({pageInfo?.total})</h3>
          <Input.Search
            onSearch={handleSearch}
            defaultValue={variables.filter?.name_contains}
            placeholder="搜索"
            className="border-body bg-body w-250px"
          />
        </div>
        <Controls>
          <div className="d-flex my-0">
            {/* <Select2
              className="border-body bg-body w-150px me-5"
              placeholder="状态"
              options={[{ label: '全部', value: 'all' }, ...allStatus]}
            />
            <Button as={Link} variant="primary" to="${baseUrl}/new">
              新增活动
            </Button> */}
          </div>
        </Controls>
      </div>
      {!pageInfo?.total && !loading ? (
        <Card className="mb-5 mb-xl-10">
          <Empty
            title="还没有活动"
            description="马上添加一个活动试试"
            image="/assets/media/illustrations/sigma-1/4.png"
          >
            <Button as={Link} variant="primary" to="${baseUrl}/new">
              新建流程模型
            </Button>
          </Empty>
        </Card>
      ) : (
        <>
          <Card className="mb-5 mb-xl-10">
            <Card.Body>
              <Table
                hover
                rowKey="id"
                noRowsRenderer={() => (
                  <Empty
                    description="列表数据为空"
                    image="/assets/media/illustrations/sigma-1/5.png"
                  />
                )}
                rowSelection={{
                  type: 'checkbox',
                  renderTitle: (size) => (
                    <>
                      已选中<span className="mx-2">{size}</span>个活动
                    </>
                  ),
                  toolbar: tableToolbar,
                }}
                columns={[
                  {
                    key: 'name',
                    title: '名称',
                    sorter: true,
                    sortOrder:
                      sorter.field === 'name' ? sorter.order : undefined,
                    render(name, record) {
                      return (
                        <div className="ps-2">
                          <Link
                            className="text-gray-700"
                            to={`${baseUrl}/${record.id}`}
                          >
                            {name}
                          </Link>
                        </div>
                      );
                    },
                  },
                  {
                    key: 'actions',
                    title: '操作',
                    width: 100,
                    render: (_, record) => {
                      return (
                        <Actions
                          baseUrl={baseUrl}
                          onDelete={handleDelete}
                          onDesign={handleDesign}
                          navigate={navigate}
                          data={record as any}
                        />
                      );
                    },
                  },
                ]}
                pagination={pageInfo}
                onChange={handleTableChange}
                dataSource={data}
              />
            </Card.Body>
          </Card>
        </>
      )}
    </ContentWrapper>
  );
}

export default ModelList;
