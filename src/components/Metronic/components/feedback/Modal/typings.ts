import type { ButtonProps } from '../../base/Button/typings';

export type ClickCallback = (e: React.MouseEvent) => void;

export type ModalProps = {
  title?: string;
  scroll?: { x: boolean; y: boolean } | boolean;
  centered?: boolean;
  closable?: boolean;
  visible?: boolean;
  onOk?: ClickCallback;
  okText?: string;
  confirmLoading?: boolean;
  onCancel?: ClickCallback;
  cancelText?: string;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  header?: React.ReactNode;
  footer?: React.ReactNode;
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
