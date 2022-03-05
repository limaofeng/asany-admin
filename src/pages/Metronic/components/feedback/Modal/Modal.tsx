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

export type ClickCallback = (e: React.MouseEvent) => void;

type ModalProps = {
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
  dialogClassName?: string;
  mask?: boolean;
  maskClosable?: boolean;
  children: React.ReactNode;
};

type ModalHeaderProps = {
  closable?: boolean;
  children?: React.ReactNode;
  onCancel?: () => void;
};

function ModalHeader(props: ModalHeaderProps) {
  const { closable, onCancel, children } = props;
  return (
    <div
      className={classnames('modal-header align-items-start', {
        'pb-0 border-0 justify-content-end ': !React.Children.count(children),
      })}
    >
      {children}
      {closable && (
        <div
          onClick={onCancel}
          className="btn btn-sm btn-icon btn-active-color-primary align-self-start"
        >
          <Icon name="Duotune/arr061" className="svg-icon-1" />
        </div>
      )}
    </div>
  );
}

type ModalFooterProps = {
  cancelText?: string;
  cancelButtonProps?: ButtonProps;
  onCancel?: ClickCallback;
  okText?: string;
  confirmLoading?: boolean;
  okButtonProps?: ButtonProps;
  onOk?: ClickCallback;
};

function ModalFooter(props: ModalFooterProps) {
  const {
    cancelText = '取 消',
    cancelButtonProps,
    onCancel,
    okText = '确 定',
    confirmLoading,
    okButtonProps,
    onOk,
  } = props;
  return (
    <BsModal.Footer>
      <Button variant="light" size="sm" {...cancelButtonProps} onClick={onCancel}>
        {cancelText}
      </Button>
      <Button
        loading={confirmLoading}
        variant="primary"
        size="sm"
        {...okButtonProps}
        onClick={onOk}
      >
        {okText}
      </Button>
    </BsModal.Footer>
  );
}

function Modal(props: ModalProps) {
  const {
    children,
    scroll: pscroll = { y: true },
    centered,
    visible: show,
    dialogClassName,
    bodyClassName,
    closable = true,
    title,
    onCancel,
    mask = true,
    maskClosable = true,
    header = <ModalHeader>{title && <h5 className="modal-title">{title}</h5>}</ModalHeader>,
    footer = <ModalFooter />,
    ...footerProps
  } = props;

  const scroll = typeof pscroll == 'boolean' ? (pscroll ? { y: true } : null) : pscroll;

  return (
    <BsModal
      backdrop={mask && (maskClosable ? mask : 'static')}
      centered={centered}
      show={show}
      autoFocus={false}
      enforceFocus={false}
      dialogClassName={dialogClassName}
      onHide={onCancel as any}
    >
      {header && React.cloneElement(header as React.ReactElement, { closable, onCancel })}
      <BsModal.Body className={classnames({ 'scroll-y': scroll?.y }, bodyClassName)}>
        {React.Children.count(children) == 1
          ? React.cloneElement(children as any, { visible: `${show}` })
          : children}
      </BsModal.Body>
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
  timer?: number;
  timerProgressBar?: boolean;
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
    allowOutsideClick: () => !Swal.isLoading(),
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
      title: 'text-left pe-0',
      htmlContainer: 'text-left pe-0',
      actions: 'justify-content-end',
      confirmButton: classnames('btn btn-sm btn-primary', okClassName),
      cancelButton: classnames('btn btn-sm btn-secondary', cancelClassName),
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

Modal.Header = ModalHeader;

/* const template = document.createElement('template');
template.id = 'my-template';
template.innerHTML = `
<swal-title>Save changes to "Untitled 1" before closing?</swal-title>
<swal-icon type="warning" color="red" />
<swal-button type="confirm">Save As</swal-button>
<swal-button type="cancel">Cancel</swal-button>
<swal-button type="deny">Close without Saving</swal-button>
<swal-param name="allowEscapeKey" value="false" />
<swal-param name="customClass" value='{ "popup": "my-popup" }' />
`;

document.body.appendChild(template); */

export default Modal;
