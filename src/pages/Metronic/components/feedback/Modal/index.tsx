import React from 'react';

import type { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Modal as BsModal } from 'react-bootstrap';
import classnames from 'classnames';
import Icon, { store } from '@asany/icons';

import type { ButtonProps } from '../../base';
import { Button } from '../../base';

import './Modal.scss';

const MySwal = withReactContent(Swal);

type ClickCallback = (e: React.MouseEvent) => void;

type ModalProps = {
  title?: string;
  centered?: boolean;
  closable?: boolean;
  visible?: boolean;
  onOk?: ClickCallback;
  okText?: string;
  onCancel?: ClickCallback;
  cancelText?: string;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  footer?: React.ReactNode;
  bodyClassName?: string;
  dialogClassName?: string;
  children: React.ReactNode;
};

type ModalFooterProps = {
  cancelText?: string;
  cancelButtonProps?: ButtonProps;
  onCancel?: ClickCallback;
  okText?: string;
  okButtonProps?: ButtonProps;
  onOk?: ClickCallback;
};

function ModalFooter(props: ModalFooterProps) {
  const {
    cancelText = '取 消',
    cancelButtonProps,
    onCancel,
    okText = '确 定',
    okButtonProps,
    onOk,
  } = props;
  return (
    <BsModal.Footer>
      <Button variant="light" size="sm" {...cancelButtonProps} onClick={onCancel}>
        {cancelText}
      </Button>
      <Button variant="primary" size="sm" {...okButtonProps} onClick={onOk}>
        {okText}
      </Button>
    </BsModal.Footer>
  );
}

function Modal(props: ModalProps) {
  const {
    children,
    centered,
    visible: show,
    dialogClassName,
    bodyClassName,
    closable = true,
    title,
    onCancel,
    footer = <ModalFooter />,
    ...footerProps
  } = props;

  return (
    <BsModal centered={centered} show={show} dialogClassName={dialogClassName} onHide={onCancel}>
      {/*--begin::Modal header--*/}
      <div className={classnames('modal-header', { 'pb-0 border-0 justify-content-end': !title })}>
        {title && <h5 className="modal-title">{title}</h5>}
        {closable && (
          <div onClick={onCancel} className="btn btn-sm btn-icon btn-active-color-primary">
            <Icon name="Duotune/arr061" className="svg-icon-1" />
          </div>
        )}
      </div>
      <BsModal.Body className={classnames('scroll-y', bodyClassName)}>{children}</BsModal.Body>
      {footer && React.cloneElement(footer as React.ReactElement, { ...footerProps, onCancel })}
    </BsModal>
  );
}

export type ModalOptions = {
  title?: string;
  content?: string;
  width?: number | string;
  okText?: string;
  cancelText?: string;
  icon?: SweetAlertIcon;
  onOk?: () => void;
  okClassName?: string;
  cancelClassName?: string;
};

export type MessageOptions = ModalOptions & SweetAlertOptions;

const message = async (options: MessageOptions) => {
  const {
    title,
    content,
    icon,
    onOk,
    confirmButtonText = '知道了',
    customClass = {},
    ...alertOptions
  } = options;
  const result = await MySwal.fire({
    ...alertOptions,
    icon,
    title,
    html: content,
    confirmButtonText,
    buttonsStyling: false,
    customClass: {
      ...customClass,
      confirmButton: customClass.confirmButton || 'btn btn-primary',
      cancelButton: customClass.cancelButton || 'btn btn-secondary',
    },
  });
  if (onOk && result.isConfirmed) {
    onOk();
  }
  return result;
};

Modal.confirm = async (options: ModalOptions) => {
  const { okText, cancelText, okClassName, cancelClassName } = options;

  const icon = await store.get('Duotune/arr061');

  return message({
    ...options,
    confirmButtonText: okText || '确 认',
    cancelButtonText: cancelText || '取 消',
    reverseButtons: true,
    showCancelButton: true,
    showCloseButton: true,
    closeButtonHtml: `<span class="svg-icon svg-icon-2x">${icon?.content}</span>`,
    customClass: {
      container: 'modal-confirm',
      closeButton: 'btn btn-icon btn-sm btn-active-light-primary ms-2',
      title: 'text-left',
      htmlContainer: 'text-left',
      actions: 'justify-content-end',
      confirmButton: okClassName,
      cancelButton: cancelClassName,
    },
  });
};

Modal.question = (options: ModalOptions) => {
  return message({ ...options, icon: 'question' });
};

Modal.info = (options: ModalOptions) => {
  return message({ ...options, icon: 'info' });
};

Modal.success = (options: ModalOptions) => {
  return message({ ...options, icon: 'success' });
};

Modal.error = (options: ModalOptions) => {
  return message({ ...options, icon: 'error' });
};

Modal.warning = (options: ModalOptions) => {
  return message({ ...options, icon: 'warning' });
};

export default Modal;
