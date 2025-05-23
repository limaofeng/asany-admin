import { useCallback, useMemo } from 'react';
import { NavigateFunction } from 'react-router';

import { Icon } from '@asany/icons';
import { APP_CONFIG, Link, useLocation, useNavigate } from '@umijs/max';
import qs from 'query-string';

import Controls from '@/components/Controls';
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
import type { Sorter } from '@/metronic/typings';
import { PreviewComponent } from '@/metronic/Upload/Upload';
import type { LandingPoster } from '@/types';

import {
  LandingPostersDocument,
  useDeletePosterMutation,
  useLandingPostersQuery,
} from '../../hooks';

type ActionsProps = {
  navigate: NavigateFunction;
  data: LandingPoster;
  baseUrl: string;
  onDelete: (...ids: string[]) => Promise<number>;
};

function Actions({ data, baseUrl, navigate, onDelete }: ActionsProps) {
  const handleDelete = useCallback(
    async (_data: LandingPoster) => {
      const message = `确定删除海报 “${_data.name}” 吗？`;

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
      Toast.success(`海报 “${_data.name}” 删除成功`, 2000, {
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
      }
    },
    [baseUrl, data, handleDelete, history],
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

function PosterList() {
  const navigate = useNavigate();
  const location = useLocation();

  const baseUrl = location.pathname;

  const variables = useMemo(() => {
    const { q, ...query } = (location as any).query;
    if (q) {
      query.filter = { name_contains: q };
    }
    return query;
  }, [location]);

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

  const [deletePoster] = useDeletePosterMutation({
    refetchQueries: [LandingPostersDocument],
  });
  const { data, loading, previousData } = useLandingPostersQuery({
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
      return previousData?.landingPosters || { total: 0, current: 1 };
    }
    return data?.landingPosters || { total: 0, current: 1 };
  }, [data?.landingPosters, loading, previousData?.landingPosters]);
  const posters = useMemo(() => {
    if (loading) {
      return (previousData?.landingPosters?.edges || []).map(
        (item) => item.node,
      );
    }
    return (data?.landingPosters?.edges || []).map((item) => item.node);
  }, [data?.landingPosters, loading, previousData?.landingPosters]);

  const handleSearch = useCallback(
    (text: any) => {
      navigate(location.pathname + '?' + qs.stringify({ q: text }), {
        replace: true,
      });
    },
    [navigate, location.pathname],
  );

  const handleChange = useCallback(
    (_pagination: any, _filters: any, _sorter: any) => {
      const _query: any = {};
      if (variables.filter?.name_contains) {
        _query.q = variables.filter?.name_contains;
      }
      if (!!_sorter) {
        _query.orderBy =
          _sorter.field + '_' + (_sorter.order === 'ascend' ? 'asc' : 'desc');
      }
      _query.page = _pagination.current;
      navigate(location.pathname + '?' + qs.stringify(_query), {
        replace: true,
      });
    },
    [navigate, location.pathname, variables.filter?.name_contains],
  );

  const handleDelete = useCallback(
    async (...ids: string[]) => {
      const { data: dresult } = await deletePoster({
        variables: {
          ids,
        },
      });
      return dresult?.deleteLandingPoster || 0;
    },
    [deletePoster],
  );

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      const message = `确定删除选中的, 共 ${selectedRowKeys.length} 个海报吗？`;
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
      Toast.success(`海报批量删除成功`, 2000, {
        placement: 'bottom-left',
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
    <ContentWrapper footer={false}>
      <div className="d-flex flex-wrap flex-stack pb-7">
        <div className="d-flex flex-wrap align-items-center">
          <h3 className="fw-bolder me-5">海报 ({total})</h3>
          <Input.Search
            placeholder="搜索"
            onSearch={handleSearch}
            defaultValue={variables.filter?.name_contains}
            className="border-body bg-body w-250px"
          />
        </div>
        <Controls>
          <div className="d-flex my-0">
            <Button as={Link} to={`${baseUrl}/new`}>
              新建海报
            </Button>
          </div>
        </Controls>
      </div>
      {!total && !loading ? (
        <Card className="mb-5 mb-xl-10">
          <Empty
            title="还没有海报"
            description="马上添加一个海报试试"
            image="/assets/media/illustrations/sigma-1/4.png"
          >
            <Button as={Link} variant="primary" to={`${baseUrl}/new`}>
              新建海报
            </Button>
          </Empty>
        </Card>
      ) : (
        <>
          <Card className="mb-5 mb-xl-10">
            <Card.Body>
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
                        已选中<span className="mx-2">{size}</span>个海报
                      </>
                    ),
                    toolbar: tableToolbar,
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
                      key: 'background',
                      title: '背景图',
                      width: 100,
                      render(file) {
                        return file ? (
                          <div className="d-flex w-30px justify-content-center">
                            <img
                              src={
                                APP_CONFIG.STORAGE_URL + `/preview/${file.id}`
                              }
                              className="h-30px w-20px"
                            />
                          </div>
                        ) : (
                          <Icon
                            className="svg-icon-2qx text-muted"
                            name="Bootstrap/file-image"
                          />
                        );
                      },
                    },
                    {
                      key: 'music',
                      title: '背景音乐',
                      width: '20%',
                      render(file) {
                        return (
                          <div className="d-flex list-music-preview">
                            {file ? (
                              <PreviewComponent
                                uploadFile={file}
                                status="completed"
                              />
                            ) : (
                              '无'
                            )}
                          </div>
                        );
                      },
                    },
                    // {
                    //   key: 'createdAt',
                    //   title: '创建时间',
                    //   width: 150,
                    //   sorter: true,
                    //   sortOrder: sorter.field === 'createdAt' ? sorter.order : undefined,
                    // },
                    {
                      key: 'actions',
                      title: '操作',
                      width: 100,
                      render: (_, record) => {
                        return (
                          <Actions
                            baseUrl={baseUrl}
                            onDelete={handleDelete}
                            navigate={navigate}
                            data={record}
                          />
                        );
                      },
                    },
                  ]}
                  pagination={pagination}
                  onChange={handleChange}
                  dataSource={posters}
                />
              </BlockUI>
            </Card.Body>
          </Card>
        </>
      )}
    </ContentWrapper>
  );
}

export default PosterList;
