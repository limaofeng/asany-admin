import { useCallback } from 'react';

import Icon from '@asany/icons';
import Tree from '@asany/tree';
import type { TreeNode } from '@asany/tree/dist/typings';
import classnames from 'classnames';

import type { RowSelection, TableColumn } from '../Table';

import './style/TreeList.scss';

type TreeListProps<T> = {
  rowKey?: string | ((record: T & TreeNode) => string);
  rowSelection?: RowSelection;
  dataSource?: T & TreeNode[];
  columns: TableColumn<T & TreeNode>[];
};

function hasWidth<T>(col: TableColumn<T>) {
  if (col.width) {
    return true;
  }
  if (!col.className) {
    return false;
  }
  if (col.className.startsWith('w-') || col.className.startsWith('min-w-')) {
    return true;
  }
  return false;
}

function TreeList<T>(props: TreeListProps<T>) {
  const { columns, dataSource } = props;

  const handleIconRender = useCallback((node: any, { isDirectory }: any) => {
    if (!node.icon) {
      return <Icon name={isDirectory ? 'Material/folder' : 'Material/file'} />;
    }
    return <Icon name={node.icon} />;
  }, []);

  return (
    <div className="tree-list">
      <div className="tree-list-header">
        {columns.map((col, index) => (
          <div
            key={col.key}
            style={{ width: col.width }}
            className={classnames('tree-list-header-col fs-7 text-muted', col.className, {
              'flex-row-fluid': index == 0,
              'flex-column-auto': !hasWidth(col),
            })}
          >
            {col.title}
          </div>
        ))}
      </div>
      <Tree className="tree-list-body" iconRender={handleIconRender} treeData={dataSource!} />
    </div>
  );
}

export default TreeList;
