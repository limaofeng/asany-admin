import { useCallback, useEffect, useReducer, useRef } from 'react';

import Icon from '@asany/icons';
import Tree from '@asany/tree';
import type { TreeNode } from '@asany/tree/dist/typings';
import classnames from 'classnames';
import { useMeasure } from 'react-use';

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

type TreeListRowProps<T> = {
  data: T & TreeNode;
  widths: Map<string, number>;
  columns: TableColumn<T & TreeNode>[];
  rowIndex: number;
};

function TreeListRow<T>(props: TreeListRowProps<T>) {
  const { data, columns, widths, rowIndex } = props;
  return (
    <div className="tree-list-body-row">
      {columns.map((col) => {
        const dataIndex = col.dataIndex || col.key;
        const value = data[dataIndex!];
        return (
          <div
            key={col.key}
            style={{ width: widths.get(col.key!) }}
            className={classnames('tree-list-col fs-7 text-muted', col.className)}
          >
            {col.render ? col.render(value, data, rowIndex) : value}
            {data.title}
          </div>
        );
      })}
    </div>
  );
}

type TreeHeaderColumnProps = {
  className: string;
  col: TableColumn<any>;
  onWidthResize: (key: string, width: number) => void;
};

function TreeHeaderColumn(props: TreeHeaderColumnProps) {
  const { col, className, onWidthResize } = props;

  const [ref, { right, left }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    onWidthResize(col.key!, right + left);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [right + left]);

  return (
    <div ref={ref} className={className} style={{ width: col.width }}>
      {col.title}
    </div>
  );
}

function TreeList<T>(props: TreeListProps<T>) {
  const { columns, dataSource } = props;

  const state = useRef<{ widths: Map<string, number> }>({ widths: new Map() });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleIconRender = useCallback((node: any, { isDirectory }: any) => {
    if (!node.icon) {
      return <Icon name={isDirectory ? 'Material/folder' : 'Material/file'} />;
    }
    return <Icon name={node.icon} />;
  }, []);

  const handleContentRender = useCallback(
    (node: any, { rowIndex }: any) => {
      return (
        <TreeListRow
          data={node}
          columns={columns}
          widths={state.current.widths}
          rowIndex={rowIndex}
        />
      );
    },
    [columns],
  );

  const handleWidthResize = useCallback((key: string, width: number) => {
    state.current.widths.set(key, width);
    forceRender();
  }, []);

  return (
    <div className="tree-list">
      <div className="tree-list-header">
        {columns.map((col, index) => (
          <TreeHeaderColumn
            key={col.key}
            col={col}
            onWidthResize={handleWidthResize}
            className={classnames('tree-list-header-col fs-7 text-muted', col.className, {
              'flex-row-title': index == 0,
              'flex-row-fluid': index != 0 && !hasWidth(col),
            })}
          />
        ))}
      </div>
      <Tree
        className="tree-list-body"
        iconRender={handleIconRender}
        contentRender={handleContentRender}
        treeData={dataSource!}
      />
    </div>
  );
}

export default TreeList;
