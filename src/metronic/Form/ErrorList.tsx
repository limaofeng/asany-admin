import React, { useEffect } from 'react';

import classnames from 'classnames';

import { FormItemPrefixContext } from './context';
import type { ValidateStatus } from './typings';

const EMPTY_LIST: React.ReactNode[] = [];

interface ErrorEntity {
  error: React.ReactNode;
  errorStatus?: ValidateStatus;
  key: string;
}

function toErrorEntity(
  error: React.ReactNode,
  errorStatus: ValidateStatus | undefined,
  prefix: string,
  index: number = 0,
): ErrorEntity {
  return {
    key: typeof error === 'string' ? error : `${prefix}-${index}`,
    error,
    errorStatus,
  };
}

export interface ErrorListProps {
  help?: React.ReactNode;
  helpStatus?: ValidateStatus;
  errors?: React.ReactNode[];
  warnings?: React.ReactNode[];
  className?: string;
  onVisibleChanged?: (visible: boolean) => void;
}

function ErrorList({
  help,
  helpStatus,
  errors = EMPTY_LIST,
  warnings = EMPTY_LIST,
  className: rootClassName,
  onVisibleChanged,
}: ErrorListProps) {
  const { prefixCls } = React.useContext(FormItemPrefixContext);

  const baseClassName = `${prefixCls}-item-explain`;

  const fullKeyList = React.useMemo(() => {
    if (!errors.length && help !== undefined && help !== null) {
      return [toErrorEntity(help, helpStatus, 'help')];
    }

    return [
      ...errors.map((error, index) =>
        toErrorEntity(error, 'error', 'error', index),
      ),
      ...warnings.map((warning, index) =>
        toErrorEntity(warning, 'warning', 'warning', index),
      ),
    ];
  }, [help, helpStatus, errors, warnings]);

  useEffect(() => {
    onVisibleChanged && onVisibleChanged(false);
  }, [onVisibleChanged]);

  if (!fullKeyList.length) {
    return <></>;
  }

  return (
    <div
      className={classnames(
        'fv-plugins-message-container',
        baseClassName,
        rootClassName,
      )}
    >
      {fullKeyList.map((itemProps) => {
        const { key, error, errorStatus } = itemProps;
        return (
          <div
            key={key}
            role="alert"
            className={classnames({
              [`${baseClassName}-${errorStatus}`]: errorStatus,
            })}
          >
            {error}
          </div>
        );
      })}
    </div>
  );
}

export default ErrorList;
