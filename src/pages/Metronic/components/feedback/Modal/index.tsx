import type { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Modal() {}

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
