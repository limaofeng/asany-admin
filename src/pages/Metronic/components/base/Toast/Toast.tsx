import { useCallback, useEffect, useReducer, useRef } from 'react';

import Holder from 'holderjs';
import { Toast as BsToast } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Icon from '@asany/icons';

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

Holder.addTheme('dark', {
  bg: '#fafafa',
  fg: '#d9d9d9',
  size: 12,
  font: 'Monaco',
  fontweight: 'normal',
});

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
      state.current.progress = 100 - Math.round((_times / delay) * 10000) / 100.0;
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
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </BsToast.Header>
        </>
      ) : (
        icon
      )}
      <BsToast.Body className="toastr-message">{content}</BsToast.Body>
      {progressBar && <div className="toastr-progress" style={{ width: `${progress}%` }} />}
    </BsToast>
  );
}

type Placement =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'middle-start'
  | 'middle-center'
  | 'middle-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';

const placementClassNames: Record<Placement, string> = {
  'top-start': 'top-0 start-0',
  'top-center': 'top-0 start-50 translate-middle-x',
  'top-end': 'top-0 end-0',
  'middle-start': 'top-50 start-0 translate-middle-y',
  'middle-center': 'top-50 start-50 translate-middle',
  'middle-end': 'top-50 end-0 translate-middle-y',
  'bottom-start': 'bottom-0 start-0',
  'bottom-center': 'bottom-0 start-50 translate-middle-x',
  'bottom-end': 'bottom-0 end-0',
};

type MessageProps = {
  icon?: React.ReactNode;
  title?: string;
  content?: string;
  className?: string;
  duration?: number;
  placement?: Placement;
  progressBar?: boolean;
};

function message(props: MessageProps) {
  const { icon, content, className, duration, progressBar, placement = 'top-center' } = props;
  console.log(props);

  const toastContainer = document.createElement('div');
  toastContainer.id = 'toastr-container';
  toastContainer.className = classnames(
    'toast-container p-3',
    'position-absolute',
    placementClassNames[placement],
  );
  document.body.appendChild(toastContainer);

  const toast = (
    <Toast
      icon={icon}
      bsPrefix="toastr"
      content={content!}
      className={className}
      delay={duration}
      progressBar={progressBar}
      onClose={toastContainer.remove.bind(toastContainer)}
    />
  );

  ReactDOM.render(toast, toastContainer);
}

Toast.info = (content: string, duration?: number, overrides?: MessageProps) => {
  message({
    icon: <Icon name="Duotune/gen045" className="svg-icon-light svg-icon-2hx me-2" />,
    content,
    className: 'me-2 toastr-info',
    duration,
    ...overrides,
  });
  // toastr-progress
};
Toast.warning = (content: string, duration?: number, overrides?: MessageProps) => {
  message({
    icon: <Icon name="Duotune/gen044" className="svg-icon-light svg-icon-2hx me-2" />,
    content,
    className: 'me-2 toastr-warning',
    duration,
    ...overrides,
  });
};
Toast.loading = () => {
  // message();
};
Toast.error = (content: string, duration?: number, overrides?: MessageProps) => {
  message({
    icon: <Icon name="Duotune/gen040" className="svg-icon-light svg-icon-2hx me-2" />,
    content,
    className: 'me-2 toastr-error',
    duration,
    ...overrides,
  });
};
Toast.success = (content: string, duration?: number, overrides?: MessageProps) => {
  message({
    icon: <Icon name="Duotune/gen043" className="svg-icon-light svg-icon-2hx me-2" />,
    content,
    className: 'me-2 toastr-success',
    duration,
    ...overrides,
  });
};

export default Toast;
