import { useMemo } from 'react';

import { Icon } from '@asany/icons';
import type { RouteComponentProps } from 'react-router';

import { useLoadMenusQuery } from '../hooks';

import { Card } from '@/pages/Metronic/components';
import { tree } from '@/utils';
import { TreeList } from '@/pages/Metronic/components/base/TreeList';

import './style/TreeList.scss';

type MenuTreeProps = RouteComponentProps<{ id: string }>;

function MenuTree(props: MenuTreeProps) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const { data } = useLoadMenusQuery({ variables: { id } });

  const routes = data?.app?.menus;

  const treeData = useMemo(
    () =>
      tree(
        (routes || []).map((item) => ({ ...item })),
        {
          pidKey: 'parent.id',
          sort: (l, r) => l.index - r.index,
          converter: (item) => ({ ...item, key: item.id, title: item.name! }),
        },
      ),
    [routes],
  );

  return (
    <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
      <TreeList
        columns={[
          {
            key: 'title',
            title: '名称',
          },
          {
            key: 'path',
            title: '路径',
          },
          {
            key: 'authorized',
            title: '登录访问',
          },
          {
            key: 'authorized',
            title: '登录访问',
          },
          {
            key: 'enabled',
            title: '启用状态',
          },
          {
            key: 'component',
            title: '子面板渲染组件',
          },
          {
            key: 'actions',
            title: '操作',
            className: 'min-w-125px',
          },
        ]}
        dataSource={treeData}
      />
      <ul>
        <li>
          <a>
            <Icon name="Duotune/fil013" className="svg-icon-2x svg-icon-primary me-4" />
          </a>
        </li>
      </ul>
    </Card>
  );
}

export default MenuTree;
