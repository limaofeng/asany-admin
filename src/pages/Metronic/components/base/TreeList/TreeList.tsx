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

function TreeList<T>(props: TreeListProps<T>) {
  const { columns, dataSource } = props;
  return (
    <div className="tree-list">
      <div className="tree-list-header">
        {columns.map((col) => (
          <div key={col.key} className={classnames('tree-list-header-col text-muted')}>
            {col.title}
          </div>
        ))}
      </div>
      <Tree className="tree-list-body" treeData={dataSource!} />
    </div>
  );
}

export default TreeList;
