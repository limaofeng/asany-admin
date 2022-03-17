import type { CSSProperties } from 'react';

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

export type TableColumn<T> = {
  title: string;
  dataIndex?: string;
  key?: string;
  width?: string | number;
  className?: string;
  align?: 'left' | 'right' | 'center';
  render?: (value: string, record: T, index: number) => React.ReactNode | string | RenderResult;
  sorter?: (a: T, b: T) => boolean;
  sortOrder?: 'ascend' | 'descend' | 'false';
  sortDirections?: 'ascend' | 'descend';
};

export type TableHeadToolbar =
  | ((selectedRowKeys: string[], selectedRows: any[]) => React.ReactNode)
  | boolean;

export type RowSelection = {
  type?: 'checkbox' | 'radio';
  renderTitle?: (size: number) => React.ReactNode;
  columnTitle?: React.ReactNode;
  columnWidth?: string | number;
  selectedRowKeys?: string[];
  toolbar?: TableHeadToolbar;
  onChange?: (selectedRowKeys: string[], selectedRows: any[]) => void;
  onSelect?: (record: any, selected: boolean, selectedRows: any[], nativeEvent: any) => void;
  onSelectAll?: (selected: boolean, selectedRows: any[]) => void;
  getCheckboxProps?: (record: any) => any;
};

export type NoContentRenderer = () => React.ReactNode;

export type RowHeightFunc = (params: { index: number }) => number;
