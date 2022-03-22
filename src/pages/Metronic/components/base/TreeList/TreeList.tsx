import { useCallback, useEffect, useRef, useState } from 'react';

import EventEmitter from 'events';

import Icon from '@asany/icons';
import Tree from '@asany/tree';
import type { IconRender, TreeNode } from '@asany/tree/dist/typings';
import classnames from 'classnames';
import { useMeasure } from 'react-use';

import type { RowSelection, TableColumn } from '../Table/typings';

import { getFieldValue } from '@/utils';

import './style/TreeList.scss';

type TreeListProps<T> = {
  className?: string;
  expandedKeys?: string[];
  rowKey?: string | ((record: T & TreeNode) => string);
  rowSelection?: RowSelection<T>;
  dataSource?: (T & TreeNode)[];
  draggable?: boolean;
  columns: TableColumn<T & TreeNode>[];
  iconRender?: false | IconRender;
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
  state: TreeListState;
  columns: TableColumn<T & TreeNode>[];
  rowIndex: number;
};

type TreeListRowColProps<T> = {
  col: TableColumn<T>;
  data: T & TreeNode;
  value: any;
  rowIndex: number;
  colIndex: number;
  state: TreeListState;
};

function TreeListRowCol<T>(props: TreeListRowColProps<T>) {
  const { data, col, rowIndex, state, value } = props;

  const [width, setWidth] = useState(state.widths.get(col.key!));

  const handleChangeWidth = useCallback((_width) => {
    setWidth(_width);
  }, []);

  useEffect(() => {
    state.emitter.on(`${col.key}_width`, handleChangeWidth);
    return () => {
      state.emitter.off(`${col.key}_width`, handleChangeWidth);
    };
  }, [state, handleChangeWidth, col.key]);

  return (
    <div
      key={col.key}
      style={{ width }}
      className={classnames(
        'tree-list-col fs-7 text-muted d-flex align-items-center',
        col.className,
      )}
    >
      {col.render ? col.render(value, data, rowIndex) : value}
    </div>
  );
}

function TreeListRow<T>(props: TreeListRowProps<T>) {
  const { data, columns, rowIndex, state } = props;

  return (
    <div className="tree-list-body-row">
      {columns.map((col, index) => {
        const dataIndex = col.dataIndex || col.key;
        const value = getFieldValue(data, dataIndex!);
        return (
          <TreeListRowCol
            key={col.key}
            state={state}
            data={data}
            col={col}
            value={value}
            rowIndex={rowIndex}
            colIndex={index}
          />
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

type TreeListState = {
  widths: Map<string, number>;
  emitter: EventEmitter;
};

function TreeList<T>(props: TreeListProps<T>) {
  const {
    draggable,
    expandedKeys,
    columns,
    className,
    dataSource,
    iconRender,
    rowKey = 'key',
  } = props;

  const state = useRef<TreeListState>(
    (() => {
      const emitter = new EventEmitter();
      emitter.setMaxListeners(10000);
      return {
        widths: new Map(),
        emitter,
      };
    })(),
  );
  const getRowKey = useCallback((record: any) => {
    if (typeof rowKey == 'function') {
      return rowKey(record);
    }
    return getFieldValue(record, rowKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIconRender = useCallback(
    (node: any, _state: any) => {
      if (iconRender == false) {
        return <></>;
      }
      if (typeof iconRender == 'function') {
        return (iconRender as any)(node, state);
      }
      const { isDirectory } = _state;
      if (!node.icon) {
        return <Icon name={isDirectory ? 'Material/folder' : 'Material/file'} />;
      }
      return <Icon name={node.icon} />;
    },
    [iconRender],
  );

  const handleContentRender = useCallback(
    (node: any, { rowIndex }: any) => {
      return (
        <TreeListRow
          key={getRowKey(node)}
          data={node}
          columns={columns}
          state={state.current}
          rowIndex={rowIndex}
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columns],
  );

  const handleWidthResize = useCallback((key: string, width: number) => {
    state.current.widths.set(key, width);
    state.current.emitter.emit(`${key}_width`, width);
  }, []);

  const handleDrop = useCallback((e) => {
    console.log('handleDrop', e);
  }, []);

  return (
    <div className={classnames('tree-list', className)}>
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
        draggable={draggable}
        expandedKeys={expandedKeys}
        iconRender={handleIconRender}
        contentRender={handleContentRender}
        treeData={dataSource!}
        onDrop={handleDrop}
      />
    </div>
  );
}

export default TreeList;
