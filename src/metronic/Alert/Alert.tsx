import type { CSSProperties } from 'react';
import React from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';

import './style.scss';

type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'danger';

type AlertProps = {
  action?: React.ReactNode;
  icon?: React.ReactElement;
  style?: CSSProperties;
  message: string;
  description?: string;
  closable?: boolean;
  type?: AlertType;
  theme?: 'Solid' | 'Light' | 'Default';
  className?: string;
};

const icons: Record<AlertType, React.ReactElement> = {
  primary: <Icon name="Duotune/gen048" className="svg-icon-2hx" />,
  success: <Icon name="Duotune/gen048" className="svg-icon-2hx" />,
  info: <Icon name="Duotune/gen048" className="svg-icon-2hx" />,
  warning: <Icon name="Duotune/gen048" className="svg-icon-2hx" />,
  danger: <Icon name="Duotune/gen048" className="svg-icon-2hx svg-icon-danger" />,
};

function getDefaultIcon(type: AlertType) {
  return icons[type];
}

function Alert(props: AlertProps) {
  const {
    action,
    type = 'primary',
    icon = getDefaultIcon(type),
    message,
    description,
    theme = 'Default',
    closable,
    style,
    className,
  } = props;
  return (
    <div
      style={style}
      className={classnames('alert d-flex align-items-center', className, {
        [`bg-${type}`]: theme == 'Solid',
        [`alert-${type}`]: theme == 'Default',
        [`bg-light-${type}`]: theme == 'Light',
      })}
    >
      {React.cloneElement(icon, {
        className: classnames(icon.props.className, 'me-4', {
          [`svg-icon-light`]: theme == 'Solid',
          [`svg-icon-${type}`]: theme == 'Default',
          [`svg-icon-${type}`]: theme == 'Light',
        }),
      })}
      <div
        className={classnames('d-flex flex-column', {
          'text-light': theme == 'Solid',
          'flex-row-fluid': !!action,
        })}
      >
        {!!message && !!description && (
          <h4
            className={classnames(
              {
                'text-light': theme == 'Solid',
                [`text-${type}`]: theme == 'Default',
              },
              'mb-1',
            )}
          >
            {message}
          </h4>
        )}
        <span>{description || message}</span>
      </div>
      {action}
      {closable && (
        <button
          type="button"
          className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto"
        >
          <Icon
            name="Duotune/arr061"
            className={classnames('svg-icon-1', {
              'svg-icon-light': theme == 'Solid',
              [`svg-icon-${type}`]: theme == 'Light',
            })}
          />
        </button>
      )}
    </div>
  );
}

export default Alert;
