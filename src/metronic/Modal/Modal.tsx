import type { CSSProperties } from 'react';
import React, { useMemo } from 'react';

import type { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Modal as BsModal } from 'react-bootstrap';
import classnames from 'classnames';
import Icon, { store } from '@asany/icons';
import { useDeepCompareMemo } from '@asany/editor';

import type { ButtonProps } from '../Button/typings';
import Button from '../Button';

import type { ClickCallback, ModalHeaderProps, ModalProps } from './typings';

import './Modal.scss';

const MySwal = withReactContent(Swal);

function ModalHeader(props: ModalHeaderProps) {
  const { closable, onCancel, children, className } = props;
  return (
    <div
      className={classnames('modal-header', className, {
        'pb-0 border-0 justify-content-end ': !React.Children.count(children),
      })}
    >
      {children}
      {closable && (
        <div onClick={onCancel} className="btn btn-icon btn-active-color-primary align-self-start">
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
  children?: React.ReactNode;
};

export function ModalFooter(props: ModalFooterProps) {
  const { children, className } = props;
  return <BsModal.Footer className={className}>{children}</BsModal.Footer>;
}

type ModalBodyProps = {
  visible?: boolean;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
};

function ModalBody(props: ModalBodyProps) {
  const { visible, className, children, style } = props;

  const _children =
    React.Children.count(children) == 1 && React.isValidElement(children)
      ? React.cloneElement(children as any, { visible })
      : children;

  return (
    <BsModal.Body style={style} className={classnames(className)}>
      {_children}
    </BsModal.Body>
  );
}

function Modal(props: ModalProps) {
  const {
    centered,
    visible: show,
    dialogClassName,
    closable = true,
    mask = true,
    maskClosable = true,
    footerClassName,
    cancelText = '取 消',
    cancelButtonProps,
    onCancel,
    okText = '确 定',
    confirmLoading,
    okButtonProps,
    onOk,
    dialogStyle,
  } = props;

  const _footer = useMemo(() => {
    if (props.footer === false) {
      return undefined;
    }
    if (props.footer) {
      return props.footer;
    }
    return (
      <>
        <Button variant="light" {...cancelButtonProps} onClick={onCancel}>
          {cancelText}
        </Button>
        <Button loading={confirmLoading} variant="primary" {...okButtonProps} onClick={onOk}>
          {okText}
        </Button>
      </>
    );
  }, [
    cancelButtonProps,
    cancelText,
    confirmLoading,
    okButtonProps,
    okText,
    onCancel,
    onOk,
    props.footer,
  ]);

  const { header, body, footer } = useMemo(() => {
    const childs = React.Children.toArray(props.children);
    const footerNode = childs.find(
      (item) => React.isValidElement(item) && item.type == ModalFooter,
    );
    const headerNode =
      props.header || childs.find((item) => React.isValidElement(item) && item.type == ModalHeader);
    const bodyNode = childs.find((item) => React.isValidElement(item) && item.type == ModalBody);
    const newChildren = childs.filter((item) => ![footerNode, headerNode].includes(item));
    return {
      header: headerNode || (
        <ModalHeader className={props.headerClassName} closable={closable}>
          {typeof props.title == 'string' ? (
            <h5 className="modal-title">{props.title}</h5>
          ) : (
            props.title
          )}
        </ModalHeader>
      ),
      body: bodyNode || <ModalBody className={props.bodyClassName}>{newChildren}</ModalBody>,
      footer:
        footerNode || (_footer && <ModalFooter className={footerClassName}>{_footer}</ModalFooter>),
    };
  }, [
    props.children,
    props.header,
    props.headerClassName,
    props.title,
    props.bodyClassName,
    closable,
    _footer,
    footerClassName,
  ]);

  const CustomDialog = useDeepCompareMemo(
    () => (dialogProps: any) =>
      <BsModal.Dialog {...dialogProps} style={dialogStyle} className={dialogClassName} />,
    [dialogStyle, dialogClassName],
  );

  return (
    <BsModal
      backdrop={mask && (maskClosable ? mask : 'static')}
      centered={centered}
      show={show}
      autoFocus={false}
      enforceFocus={false}
      dialogAs={CustomDialog}
      onHide={onCancel as any}
    >
      {React.cloneElement(header as React.ReactElement, { closable, onCancel })}
      {React.cloneElement(body as React.ReactElement, { visible: !!show })}
      {footer && React.cloneElement(footer as React.ReactElement)}
    </BsModal>
  );
}

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

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
    customClass = {} as any,
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
      closeButton: 'btn btn-icon btn-active-light-primary ms-2',
      title: 'text-left pe-0',
      htmlContainer: classnames(' pe-0 ms-0', { 'text-left': !icon }),
      actions: classnames('justify-content-end ', { 'w-100': !icon }),
      confirmButton: classnames('btn btn-primary', okClassName),
      cancelButton: classnames('btn btn-secondary', cancelClassName),
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
