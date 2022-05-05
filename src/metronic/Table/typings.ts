import type { CSSProperties } from 'react';

export type SortDirection = 'descend' | 'ascend';

export type DataRecoverer<T> = (data: T) => () => void;

export type Sorter = {
  order: SortDirection;
  field: string;
};

type RenderResult = {
  children: React.ReactNode | string;
  props?: {
    rowSpan?: number;
    colSpan?: number;
  };
};

export type RowRendererParams = {
  key: string;
  index: number;
  isScrolling: boolean;
  isVisible: boolean;
  isActive?: boolean;
  style: CSSProperties;
};

export type RowData = {
  key: string;
  index: number;
  top: number;
  height: number;
  bottom: number;
};

export interface NewTableColumn<T> extends TableColumn<T> {
  __width?: number;
}

export type TableColumn<T> = {
  title: string | React.ReactNode;
  dataIndex?: string;
  key?: string;
  width?: string | number;
  className?: string;
  align?: 'left' | 'right' | 'center';
  render?: (value: any, record: T, index: number) => React.ReactNode | string | RenderResult;
  sorter?: ((a: T, b: T) => boolean) | true;
  sortOrder?: SortDirection | false;
  sortDirections?: SortDirection[];
};

export type UseDataSourceItem<T> = (index: number) => T | undefined;

export type DataSource<T> = {
  type?: 'array' | 'lazy';
  items: T[];
  loadedCount: number;
  rowCount: number;
  useItem: UseDataSourceItem<T>;
};

export type TableHeadToolbar =
  | ((selectedRowKeys: string[], selectedRows: any[]) => React.ReactNode)
  | boolean;

export type RowSelection<T> = {
  type?: 'checkbox' | 'radio';
  renderTitle?: (size: number) => React.ReactNode;
  columnTitle?: React.ReactNode;
  columnWidth?: string | number;
  selectedRowKeys?: string[];
  toolbar?: TableHeadToolbar;
  continueSelect?: boolean;
  onChange?: (selectedRowKeys: string[], selectedRows: T[]) => void;
  onSelect?: (record: T, selected: boolean, selectedRows: T[], nativeEvent: any) => void;
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
  getCheckboxProps?: (record: T) => any;
};

export type NoContentRenderer = () => React.ReactNode;

export type RowHeightFunc = (params: { index: number }) => number;
