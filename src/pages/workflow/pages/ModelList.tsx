import { useCallback, useMemo } from 'react';

import { Icon } from '@asany/icons';
import qs from 'qs';
import type { RouteComponentProps } from 'react-router';
import { Link } from 'umi';

import {
  ProcessModelsDocument,
  useDeleteProcessModelMutation,
  useProcessModelsQuery,
} from '../hooks';

import Controls from '@/components/Controls';
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

type ActionsProps = {
  history: any;
  baseUrl: string;
  data: ProcessModel;
  onDesign: (id: string) => void;
  onDelete: (id: string) => Promise<boolean>;
};

function Actions({ data, history, onDelete, onDesign, baseUrl }: ActionsProps) {
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
      await onDelete(_data.id);
      Toast.success(`活动 “${_data.name}” 删除成功`, 2000, {
        placement: 'bottom-start',
        progressBar: true,
      });
    },
    [onDelete],
  );

  const handleMenuClick = useCallback(
    (event: any) => {
      if (event.key == 'view') {
        navigate(`${baseUrl}/${data.id}`);
      } else if (event.key == 'delete') {
        handleDelete(data);
      } else if (event.key == 'design') {
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

type PageListProps = RouteComponentProps<any>;

function ModelList(props: PageListProps) {
  const { history, location } = props;

  const baseUrl = location.pathname;

  const handleDesign = useCallback(
    (id: string) => {
      navigate(`/workflow/models/${id}/design`);
    },
    [history],
  );

  const variables = useMemo(() => {
    const { q, ...query } = (props.location as any).query;
    if (q) {
      query.filter = { user: 'self', name_contains: q };
    }
    return query;
  }, [props.location]);

  const sorter = useMemo<Sorter>(() => {
    if (!variables.orderBy) {
      return {
        order: 'descend',
        field: 'createdAt',
      };
    }
    const [field, order] = variables.orderBy.split('_');
    return {
      order: order == 'desc' ? 'descend' : 'ascend',
      field,
    };
  }, [variables.orderBy]);

  const [deleteProcessModel] = useDeleteProcessModelMutation({
    refetchQueries: [
      {
        query: ProcessModelsDocument,
        variables: {
          filter: { user: 'self' },
        },
      },
    ],
  });
  const { data, loading, previousData } = useProcessModelsQuery({
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const total = useMemo(() => {
    if (loading) {
      return previousData?.total.totalCount || 0;
    }
    return data?.total.totalCount || 0;
  }, [data?.total.totalCount, loading, previousData?.total]);
  const pagination = useMemo(() => {
    if (loading) {
      return previousData?.processModels || { total: 0, current: 1 };
    }
    return data?.processModels || { total: 0, current: 1 };
  }, [data?.processModels, loading, previousData?.processModels]);
  const pages = useMemo(() => {
    if (loading) {
      return (previousData?.processModels?.edges || []).map(
        (item) => item.node,
      );
    }
    return (data?.processModels?.edges || []).map((item) => item.node);
  }, [data?.processModels, loading, previousData?.processModels]);

  const handleSearch = useCallback(
    (text: string) => {
      history.replace(location.pathname + '?' + qs.stringify({ q: text }));
    },
    [history, location.pathname],
  );

  const handleChange = useCallback(
    (_pagination: any, _filters: any, _sorter: any) => {
      const _query: any = {};
      if (variables.filter?.name_contains) {
        _query.q = variables.filter?.name_contains;
      }
      if (!!_sorter) {
        _query.orderBy =
          _sorter.field + '_' + (_sorter.order == 'ascend' ? 'asc' : 'desc');
      }
      _query.page = _pagination.current;
      history.replace(location.pathname + '?' + qs.stringify(_query));
    },
    [history, location.pathname, variables.filter?.name_contains],
  );

  const handleDelete = useCallback(
    async (...ids: string[]) => {
      const { data: dresult } = await deleteProcessModel({
        variables: {
          ids,
        },
      });
      return dresult?.deleteProcessModel || false;
    },
    [deleteProcessModel],
  );

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      const message = `确定删除选中的, 共 ${selectedRowKeys.length} 个活动吗？`;
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
      await handleDelete(...selectedRowKeys);
      Toast.success(`活动批量删除成功`, 2000, {
        placement: 'bottom-start',
        progressBar: true,
      });
    },
    [handleDelete],
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
          <h3 className="fw-bolder me-5">流程模型 ({total})</h3>
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
      {!total && !loading ? (
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
                      sorter.field == 'name' ? sorter.order : undefined,
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
                          history={props.history}
                          data={record as any}
                        />
                      );
                    },
                  },
                ]}
                pagination={pagination}
                onChange={handleChange}
                dataSource={pages}
              />
            </Card.Body>
          </Card>
        </>
      )}
    </ContentWrapper>
  );
}

export default ModelList;
