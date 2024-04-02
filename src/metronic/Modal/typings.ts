import type { CSSProperties } from 'react';

import type { ButtonProps } from '../Button/typings';

export type ClickCallback = (e: React.MouseEvent) => void;

export type ModalProps = {
  title?: string;
  scroll?: { x: boolean; y: boolean } | boolean;
  centered?: boolean;
  closable?: boolean;
  visible?: boolean;
  width?: number;
  dialogStyle?: CSSProperties;
  onOk?: ClickCallback;
  okText?: string;
  confirmLoading?: boolean;
  onCancel?: ClickCallback;
  cancelText?: string;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  header?: React.ReactNode;
  footer?: React.ReactNode | null;
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  dialogClassName?: string;
  footerClassName?: string;
  mask?: boolean;
  maskClosable?: boolean;
  children: React.ReactNode;
};

export type ModalHeaderProps = {
  closable?: boolean;
  className?: string;
  children?: React.ReactNode;
  onCancel?: () => void;
};
