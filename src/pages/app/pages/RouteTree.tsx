import { useMemo } from 'react';

import type { RouteComponentProps } from 'react-router';
import Icon from '@asany/icons';

import { useLoadRoutesQuery } from '../hooks';

import { Badge, Button, Card, TreeList } from '@/pages/Metronic/components';
import { tree } from '@/utils';

type RouteTreeProps = RouteComponentProps<{ id: string }>;

function RouteTree(props: RouteTreeProps) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const { data } = useLoadRoutesQuery({ variables: { id }, fetchPolicy: 'cache-and-network' });

  const routes = data?.app?.routes;

  const treeData = useMemo(
    () =>
      tree(
        (routes || []).map((item) => ({ ...item })),
        {
          pidKey: 'parent.id',
          sort: (l, r) => l.index - r.index,
          converter: (item) => ({ ...item, key: item.id, title: item.name }),
        },
      ),
    [routes],
  );

  const handlePageEdit = (_id: string) => () => {
    window.open('https://hotsoon.app.asany.cn/designer?id=' + _id, '_blank');
  };

  return (
    <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
      <Card.Header className="pt-8">
        <Card.Title />
        <Card.Toolbar>
          <div className="d-flex justify-content-end">
            <Button size="sm" variant="danger" className="me-3">
              删除
            </Button>
            <Button size="sm" variant="primary">
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
          columns={[
            {
              key: 'title',
              title: '名称',
              render: (_, record) => {
                return (
                  <div className="d-flex flex-column py-5">
                    <span className="title text-gray-800 text-hover-primary mb-1 fs-6">
                      {record.title}
                    </span>
                    <div className="d-flex flex-row col-stacked">
                      <span className="me-2">{record.path}</span>
                      {record.authorized && <Badge color="primary">需要登录</Badge>}
                    </div>
                  </div>
                );
              },
            },
            {
              key: 'actions',
              title: '操作',
              className: 'min-w-125px',
              render: (_, record) => {
                return (
                  <div className="d-flex items-center h-100">
                    <Button
                      as="button"
                      size="sm"
                      variant="light"
                      onClick={
                        record.component?.id ? handlePageEdit(record.component.id) : undefined
                      }
                      activeStyle="light"
                      activeColor="primary"
                      icon={<Icon className="svg-icon-5 m-0" name="Duotune/art006" />}
                    />
                  </div>
                );
              },
            },
          ]}
          dataSource={treeData}
        />
      </Card.Body>
    </Card>
  );
}

export default RouteTree;
