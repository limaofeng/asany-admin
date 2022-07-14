import { useCallback, useEffect, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';
import type { RouteComponentProps } from 'react-router';

import RouteDrawer from '../../components/RouteDrawer';
import {
  LoadRoutesDocument,
  useLoadRoutesQuery,
  useMoveRouteMutation,
  useRouteDelete,
} from '../../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Badge, Button, Card, Toast, TreeList } from '@/metronic';
import type { Route } from '@/types';
import { tree } from '@/utils';

type RouteTreeProps = RouteComponentProps<{ id: string }, any, any>;

interface RouteActionsProps {
  data: Route;
  onDeleteSuccess: (data: Route) => void;
}

function RouteActions(props: RouteActionsProps) {
  const { data: menu, onDeleteSuccess } = props;

  const [handleDelete] = useRouteDelete(menu, onDeleteSuccess);

  return (
    <div
      className="d-flex flex-row-fluid justify-content-center"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className="ms-2">
        <Button
          variant="danger"
          variantStyle="light"
          onClick={handleDelete}
          icon={<Icon className="svg-icon-2" name="Duotune/arr088" />}
        />
      </div>
    </div>
  );
}

function RouteTree(props: RouteTreeProps) {
  const {
    match: {
      params: { id },
    },
    location: {
      state: { app },
    },
  } = props;

  const { data, loading } = useLoadRoutesQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  const libraryId = app.dependencies.find((item: any) => item.name == 'component.library').value;

  const routes = data?.app?.routes;

  const [moveRoute] = useMoveRouteMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [
      {
        query: LoadRoutesDocument,
        variables: {
          id,
        },
      },
    ],
  });

  const treeData = useMemo(
    () =>
      tree(
        (routes || []).map((item) => ({ ...item })),
        {
          pidKey: 'parent.id',
          sort: (l, r) => l.index - r.index,
          converter: (item) => ({
            ...item,
            key: item.id,
            title: item.name,
            routeType: item.type,
            type: 'directory',
          }),
        },
      ),
    [routes],
  );

  // const handlePageEdit = (_id: string) => () => {
  //   window.open('https://hotsoon.app.asany.cn/designer?id=' + _id, '_blank');
  // };

  const [state, setState] = useState<{ route?: Route; visible: boolean }>({
    visible: false,
  });
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  useEffect(() => {
    if (!treeData.length) {
      return;
    }
    setExpandedKeys((_keys) => {
      if (!!_keys.length) {
        return _keys;
      }
      return treeData.map((item) => item.id);
    });
  }, [treeData]);

  const handleCloseDrawer = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleSuccess = useCallback(
    (_data: Route) => {
      setState((prevState) => ({
        ...prevState,
        route: _data,
      }));
    },
    [setState],
  );

  const handleDeleteSuccess = useCallback(
    (_data: Route) => {
      setState((prevState) => {
        if (prevState.route?.id != _data.id) {
          return prevState;
        }
        return {
          ...prevState,
          visible: false,
          menu: undefined,
        };
      });
    },
    [setState],
  );

  const handleNew = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
      route: {
        index: 0,
        icon: 'Duotune/abs005',
        type: 'ROUTE',
        application: { id },
      } as any,
    }));
  }, [id]);

  const handleSelect = useCallback((e: any) => {
    setState((prevState) => {
      if (prevState.route?.id == e.node.id && prevState.visible) {
        return {
          ...prevState,
          visible: false,
        };
      }
      return {
        ...prevState,
        visible: true,
        route: { ...e.node, type: e.node.routeType, parentRoute: e.node.parentKey },
      };
    });
  }, []);

  const handleDrop = useCallback(
    async (e: any) => {
      console.log('handleDrop', e);
      if (e.dragNode.parent?.id == e.toParentKey && e.dragNode.index == e.toIndex) {
        return;
      }
      await Toast.promise(
        moveRoute({
          variables: {
            id: e.dragNode.id,
            parentRoute: e.toParentKey,
            location: e.toIndex,
          },
        }),
        {
          pending: '更新排序...',
          success: '排序调整成功',
          error: '提交出错',
        },
        {
          duration: 2000,
          placement: 'top-center',
        },
      );
    },
    [moveRoute],
  );

  console.log(
    'keys',
    treeData.map((item) => item.id),
  );

  return (
    <ContentWrapper
      header={{
        title: '路由设置',
      }}
      // breadcrumb={
      //   <Breadcrumb className="fw-bold fs-base text-muted my-1">
      //     <Breadcrumb.Item>设置</Breadcrumb.Item>
      //     <Breadcrumb.Item>导航菜单</Breadcrumb.Item>
      //   </Breadcrumb>
      // }
      loading={loading}
    >
      <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
        <Card.Header className="pt-8">
          <Card.Title />
          <Card.Toolbar>
            <div className="d-flex justify-content-end">
              <Button onClick={handleNew} variant="primary">
                新建路由
              </Button>
            </div>
          </Card.Toolbar>
        </Card.Header>
        <Card.Body className="pt-0">
          <TreeList
            className="app-treelist"
            rowKey="id"
            draggable={true}
            expandedKeys={expandedKeys}
            onExpand={setExpandedKeys}
            selectedKeys={state.route?.id ? [state.route.id] : []}
            onSelect={handleSelect}
            onDrop={handleDrop}
            columns={[
              {
                key: 'title',
                title: '名称',
                width: 'auto',
                render: (_, record) => {
                  return (
                    <div className="d-flex flex-column py-5">
                      <span
                        className={classnames('title  text-hover-primary mb-1 fs-6', {
                          'text-gray-800': !!record.title,
                          'text-gray-600': !record.title,
                        })}
                      >
                        {record.title || '(未设置名称)'}
                      </span>
                      <div className="d-flex flex-row col-stacked">
                        {/* <span className="tw-pl-2 me-2">{record.path}</span> */}
                        <Badge color="secondary" className="me-2">
                          {record.path}
                        </Badge>
                        {record.authorized && <Badge color="primary">需要登录</Badge>}
                      </div>
                    </div>
                    // <div className="d-flex flex-column py-5">
                    //   <span className="title text-gray-800 text-hover-primary mb-1 fs-6">
                    //     {record.title}
                    //   </span>
                    //   <div className="d-flex flex-row col-stacked">
                    //     <span className="me-2">{record.path}</span>
                    //     {record.authorized && <Badge color="primary">需要登录</Badge>}
                    //   </div>
                    // </div>
                  );
                },
              },
              {
                key: 'index',
                title: '排序',
                className: 'w-100px',
              },
              {
                key: 'actions',
                title: '操作',
                className: 'min-w-125px text-center',
                render: (_, record) => {
                  return (
                    <RouteActions data={record as any} onDeleteSuccess={handleDeleteSuccess} />
                  );
                },
              },
            ]}
            dataSource={treeData}
          />
        </Card.Body>
      </Card>
      <RouteDrawer
        route={state.route}
        libraryId={libraryId}
        onClose={handleCloseDrawer}
        onSuccess={handleSuccess}
        onDeleteSuccess={handleDeleteSuccess}
        visible={state.visible}
      />
    </ContentWrapper>
  );
}

export default RouteTree;
