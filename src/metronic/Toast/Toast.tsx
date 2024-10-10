import { useCallback, useEffect, useReducer, useRef } from 'react';
import { Toast as BsToast } from 'react-bootstrap';
import type {
  Id,
  ToastContent,
  ToastPosition,
  ToastPromiseParams,
  ToastOptions as ToastifyOptions,
} from 'react-toastify';
import { toast } from 'react-toastify';

import './style.scss';

type ToastProps = {
  icon?: React.ReactNode;
  title?: string;
  content: string;
  className?: string;
  delay?: number;
  progressBar?: boolean;
  onClose: () => void;
  bsPrefix: string;
};

function Toast(props: ToastProps) {
  const {
    icon,
    delay,
    title,
    content,
    onClose,
    className,
    progressBar,
    bsPrefix = 'toast',
  } = props;

  const state = useRef<{ show: boolean; progress: number }>({
    show: true,
    progress: 100,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleClose = useCallback(() => {
    state.current.show = false;
    forceRender();
    onClose && onClose();
  }, [onClose]);

  useEffect(() => {
    if (!progressBar || !delay) {
      return;
    }
    let _times = 0;
    const timer = setInterval(() => {
      _times += 30;
      state.current.progress =
        100 - Math.round((_times / delay) * 10000) / 100.0;
      if (state.current.progress <= 0) {
        state.current.show = false;
        clearInterval(timer);
      }
      forceRender();
    }, 30);
    return () => {
      clearInterval(timer);
    };
  }, [delay, progressBar]);

  const hasHeader = !!title && !!content;

  const { show, progress } = state.current;

  return (
    <BsToast
      bsPrefix={bsPrefix}
      onClose={handleClose}
      className={className}
      show={show}
      delay={delay}
      autohide
    >
      {hasHeader ? (
        <>
          <BsToast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </BsToast.Header>
        </>
      ) : (
        icon
      )}
      <BsToast.Body className="toastr-message">{content}</BsToast.Body>
      {progressBar && (
        <div className="toastr-progress" style={{ width: `${progress}%` }} />
      )}
    </BsToast>
  );
}

// type Placement =
//   | 'top-start'
//   | 'top-center'
//   | 'top-end'
//   | 'middle-start'
//   | 'middle-center'
//   | 'middle-end'
//   | 'bottom-start'
//   | 'bottom-center'
//   | 'bottom-end';

// const placements = {
//   'top-start': toast.POSITION.TOP_LEFT,
//   'top-center': toast.POSITION.TOP_CENTER,
//   'top-end': toast.POSITION.TOP_RIGHT,
//   'bottom-start': toast.POSITION.BOTTOM_LEFT,
//   'bottom-center': toast.POSITION.BOTTOM_CENTER,
//   'bottom-end': toast.POSITION.BOTTOM_RIGHT,
// };

type ToastOptions = {
  icon?: React.ReactNode;
  title?: string;
  content?: string;
  className?: string;
  duration?: number;
  placement?: ToastPosition;
  progressBar?: boolean;
};

function toToastifyOptions(options?: ToastOptions): ToastifyOptions {
  const _options: ToastifyOptions = {
    hideProgressBar: true,
  };

  if (!options) {
    return _options;
  }

  if (options.placement) {
    _options.position = options.placement;
  }

  if (options.progressBar) {
    _options.hideProgressBar = false;
  }

  return _options;
}

Toast.info = (content: string, duration?: number, overrides?: ToastOptions) => {
  toast.info(content, {
    autoClose: duration,
    ...toToastifyOptions(overrides),
  });
};
Toast.warning = (
  content: string,
  duration?: number,
  overrides?: ToastOptions,
) => {
  toast.warning(content, {
    autoClose: duration,
    ...toToastifyOptions(overrides),
  });
};
Toast.promise = function <T = unknown>(
  content: Promise<T> | (() => Promise<T>),
  params: ToastPromiseParams,
  overrides?: ToastOptions,
): Promise<T> {
  return toast.promise(content, params, {
    autoClose: overrides?.duration,
    ...toToastifyOptions(overrides),
  }) as any;
};

export type ToastObject = {
  update: (content: ToastContent, overrides?: ToastOptions) => void;
  close: () => void;
};

function createToastObject(id: Id): ToastObject {
  return {
    update: (content: ToastContent, overrides?: ToastOptions) => {
      toast.update(id, {
        render: content,
        ...toToastifyOptions(overrides),
      });
    },
    close: () => {
      toast.dismiss(id);
    },
  };
}

Toast.loading = (content: string, overrides?: ToastOptions) => {
  const toastId = toast.loading(content, toToastifyOptions(overrides));
  return createToastObject(toastId);
};

Toast.error = (
  content: string,
  duration?: number,
  overrides?: ToastOptions,
) => {
  toast.error(content, {
    autoClose: duration,
    ...toToastifyOptions(overrides),
  });
};
Toast.success = (
  content: React.ReactNode,
  duration?: number,
  overrides?: ToastOptions,
) => {
  toast.success(content, {
    autoClose: duration,
    ...toToastifyOptions(overrides),
  });
};

export default Toast;
