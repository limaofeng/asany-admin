import React from 'react';

import type { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Modal as BsModal } from 'react-bootstrap';
import classnames from 'classnames';
import Icon from '@asany/icons';

import type { ButtonProps } from '../../base';
import { Button } from '../../base';

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
    cancelText = '取消',
    cancelButtonProps,
    onCancel,
    okText = '确定',
    okButtonProps,
    onOk,
  } = props;
  return (
    <BsModal.Footer>
      <Button type="light" {...cancelButtonProps} onClick={onCancel}>
        {cancelText}
      </Button>
      <Button type="primary" {...okButtonProps} onClick={onOk}>
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
      <BsModal.Body className={classnames('scroll-y mx-5 mx-xl-18 pt-0 pb-15', bodyClassName)}>
        {children}
      </BsModal.Body>
      {footer && React.cloneElement(footer as React.ReactElement, { ...footerProps, onCancel })}
    </BsModal>
  );
}

export type ModalOptions = {
  title?: string;
  content?: string;
  okText?: string;
  icon?: SweetAlertIcon;
  onOk?: () => void;
};

const message = async (options: ModalOptions) => {
  const { title, content, icon, okText = '知道了', onOk } = options;
  const result = await MySwal.fire({
    icon,
    title,
    html: content,
    buttonsStyling: false,
    confirmButtonText: okText,
    customClass: {
      confirmButton: 'btn btn-primary',
    },
  });
  if (onOk && result.isConfirmed) {
    onOk();
  }
  return result;
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
