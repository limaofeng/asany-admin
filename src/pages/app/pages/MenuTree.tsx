import { useMemo } from 'react';

import { Icon } from '@asany/icons';
import Tree from '@asany/tree';
import type { RouteComponentProps } from 'react-router';

import { useLoadMenusQuery } from '../hooks';

import { Card } from '@/pages/Metronic/components';
import { tree } from '@/utils';

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
          converter: (item) => ({ ...item, key: item.id, title: item.name }),
        },
      ),
    [routes],
  );

  return (
    <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
      xxx
      <Tree className="tree-list" treeData={treeData} />
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
