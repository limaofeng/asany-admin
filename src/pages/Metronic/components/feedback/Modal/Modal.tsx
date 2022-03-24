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
  headerClassName?: string;
  dialogClassName?: string;
  footerClassName?: string;
  mask?: boolean;
  maskClosable?: boolean;
  children: React.ReactNode;
};

type ModalHeaderProps = {
  closable?: boolean;
  className?: string;
  children?: React.ReactNode;
  onCancel?: () => void;
};

function ModalHeader(props: ModalHeaderProps) {
  const { closable, onCancel, children, className } = props;
  return (
    <div
      className={classnames('modal-header align-items-start', className, {
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
  className?: string;
  cancelText?: string;
  cancelButtonProps?: ButtonProps;
  onCancel?: ClickCallback;
  okText?: string;
  confirmLoading?: boolean;
  okButtonProps?: ButtonProps;
  onOk?: ClickCallback;
};

function ModalFooter(props: ModalFooterProps) {
  const { className } = props;
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
    <BsModal.Footer className={className}>
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
    headerClassName,
    footerClassName,
    header = (
      <ModalHeader className={headerClassName}>
        {title && <h5 className="modal-title">{title}</h5>}
      </ModalHeader>
    ),
    footer = <ModalFooter className={footerClassName} />,
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
      {header &&
        React.isValidElement(header) &&
        React.cloneElement(header as React.ReactElement, { closable, onCancel })}
      <BsModal.Body className={classnames({ 'scroll-y': scroll?.y }, bodyClassName)}>
        {React.Children.count(children) == 1 && React.isValidElement(children)
          ? React.cloneElement(children as any, { visible: `${show}` })
          : children}
      </BsModal.Body>
      {footer && React.cloneElement(footer as React.ReactElement, { ...footerProps, onCancel })}
    </BsModal>
  );
}

export type ModalOptions = {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  width?: number | string;
  okText?: string;
  cancelText?: string;
  icon?: SweetAlertIcon;
  onOk?: () => void;
  okClassName?: string;
  cancelClassName?: string;
  timer?: number;
  timerProgressBar?: boolean;
  showLoaderOnConfirm?: boolean;
  preConfirm?: (inputValue: any) => any;
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
    title: title as any,
    html: content as any,
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
  const {
    icon,
    title,
    okText,
    cancelText,
    content,
    okClassName,
    cancelClassName,
    ...otherOptions
  } = options;

  const closeIcon = await store.get('Duotune/arr061');

  return message({
    ...otherOptions,
    title: title as any,
    content: (
      <>
        {icon && (
          <div
            className={classnames('swal2-icon swal2-icon-show', `swal2-${icon}`)}
            style={{ display: 'flex' }}
          >
            <div className="swal2-icon-content">i</div>
          </div>
        )}
        {content}
      </>
    ),
    allowOutsideClick: true,
    confirmButtonText: okText || '确 认',
    cancelButtonText: cancelText || '取 消',
    reverseButtons: true,
    showCancelButton: true,
    showCloseButton: true,
    closeButtonHtml: `<span class="svg-icon svg-icon-2">${closeIcon?.content}</span>`,
    customClass: {
      container: classnames('modal-confirm', { 'has-icon': !!icon }),
      closeButton: 'btn btn-icon btn-sm btn-active-light-primary ms-2',
      title: 'text-left pe-0',
      htmlContainer: classnames(' pe-0 ms-0', { 'text-left': !icon }),
      actions: classnames('justify-content-end ', { 'w-100': !icon }),
      confirmButton: classnames('btn btn-sm btn-primary', okClassName),
      cancelButton: classnames('btn btn-sm btn-secondary', cancelClassName),
    },
  });
};

Modal.question = (options: ModalOptions) => {
  return message({ ...(options as any), icon: 'question' });
};

Modal.info = (options: ModalOptions) => {
  return message({ ...(options as any), icon: 'info' });
};

Modal.success = (options: ModalOptions) => {
  return message({ ...(options as any), icon: 'success' });
};

Modal.error = (options: ModalOptions) => {
  return message({ ...(options as any), icon: 'error' });
};

Modal.warning = (options: ModalOptions) => {
  return message({ ...(options as any), icon: 'warning' });
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
