import React, { useCallback, useEffect, useMemo, useState } from 'react';

import classnames from 'classnames';

import { contrastTextColor, generateBackgroundColor } from '../utils/color';

import type { AvatarProps } from './typings';
import { useSymbolSize } from './utils';

function Avatar(props: AvatarProps, ref: any) {
  const { onClick, shape, className, labelClassName, src, gap, alt, badge, ...otherProps } = props;

  const [loadFailed, setLoadFailed] = useState(false);

  const backgroundColor = useMemo(
    () => (typeof alt == 'string' ? generateBackgroundColor(alt) : undefined),
    [alt],
  );
  const color = useMemo(
    () => (backgroundColor ? contrastTextColor(backgroundColor) : undefined),
    [backgroundColor],
  );

  const handleError = useCallback(() => {
    setLoadFailed(true);
  }, []);

  useEffect(() => {
    setLoadFailed(false);
  }, [src]);

  const sizeClass = useSymbolSize(props.size);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={classnames(
        'symbol',
        {
          'symbol-circle': shape == 'circle',
          'symbol-square': shape == 'square',
        },
        className,
        sizeClass,
      )}
      {...otherProps}
    >
      {loadFailed ? (
        React.isValidElement(alt) ? (
          alt
        ) : (
          <div
            style={{ backgroundColor, color }}
            className={classnames(labelClassName, 'symbol-label fw-bold')}
          >
            {typeof alt === 'string' &&
              (isChinese(alt) ? alt.substring(0, 1) : alt.substring(0, 2).toUpperCase())}
          </div>
        )
      ) : (
        renderImg(src, gap, handleError)
      )}
      {badge}
    </div>
  );
}

function isChinese(word: string) {
  return /^[\u4e00-\u9fa5]+.*$/.test(word);
}

function renderImg(
  src: string | React.ReactNode,
  gap: number | undefined,
  onError: (e: any) => void,
) {
  if (!src) {
    onError(new Error('SRC 为空'));
    return;
  }
  if (React.isValidElement(src)) {
    return src;
  }
  return <img src={src as any} className={classnames({ [`p-${gap}`]: !!gap })} onError={onError} />;
}

const AvatarWrapper = React.forwardRef(Avatar);

export default AvatarWrapper;
