import { useMemo } from 'react';

import { Icon } from '@asany/icons';
import Tree from '@asany/tree';
import type { RouteComponentProps } from 'react-router';

import { useLoadRoutesQuery } from '../hooks';

import { Card } from '@/pages/Metronic/components';
import { tree } from '@/utils';

import './style/TreeList.scss';

type RouteTreeProps = RouteComponentProps<{ id: string }>;

function RouteTree(props: RouteTreeProps) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const { data } = useLoadRoutesQuery({ variables: { id } });

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

  console.log('treeData', treeData);
  // const data = [
  //   {
  //     key: '1',
  //     title: '荣耀',
  //     type: 'directory',
  //     children: [
  //       { key: '11', title: '鲁班7号', type: 'file' },
  //       { key: '12', title: '廉颇', type: 'file' },
  //       { key: '13', title: '凯', type: 'file' },
  //       {
  //         key: '14',
  //         title: '长城守卫军',
  //         type: 'directory',
  //         children: [{ key: '15', title: '苏烈', type: 'file' }],
  //       },
  //       { key: '121', title: '所得', type: 'file' },
  //     ],
  //   },
  //   { key: '2', title: '老王', type: 'file' },
  //   { key: '3', title: '老五', type: 'file' },
  //   { key: '4', title: '张三', type: 'file' },
  //   { key: '5', title: '赵六', type: 'file' },

  //   {
  //     key: '7',
  //     title: '王者营地',
  //     type: 'directory',
  //     children: [],
  //   },
  // ];
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

export default RouteTree;
