import { useCallback, useMemo, useState } from 'react';
import React from 'react';

import classnames from 'classnames';

import { contrastTextColor, generateBackgroundColor } from '../../utils/color';
import Tooltip from '../../feedback/Tooltip';

import { useSymbolSize } from './utils';
import type { AvatarProps } from './typings';

function Avatar(props: AvatarProps) {
  const {
    title,
    onClick,
    shape,
    className,
    labelClassName,
    src,
    gap,
    alt = 'unknown',
    badge,
  } = props;

  const [loadFailed, setLoadFailed] = useState(false);

  const backgroundColor = useMemo(() => generateBackgroundColor(alt), [alt]);
  const color = useMemo(() => contrastTextColor(backgroundColor), [backgroundColor]);

  const handleError = useCallback(
    (e) => {
      console.log(e, src);
      setLoadFailed(true);
    },
    [src],
  );

  const sizeClass = useSymbolSize(props.size);

  return (
    <Tooltip title={title}>
      <div
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
      >
        {loadFailed ? (
          <div
            style={{ backgroundColor, color }}
            className={classnames(labelClassName, 'symbol-label fw-bold')}
          >
            {isChinese(alt) ? alt.substring(0, 1) : alt.substring(0, 2).toUpperCase()}
          </div>
        ) : (
          renderImg(src, alt, gap, handleError)
        )}
        {badge}
      </div>
    </Tooltip>
  );
}

function isChinese(word: string) {
  return /^[\u4e00-\u9fa5]+.*$/.test(word);
}

function renderImg(
  src: string | React.ReactNode,
  alt: string,
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
  return (
    <img
      src={src as any}
      alt={alt}
      className={classnames({ [`p-${gap}`]: !!gap })}
      onError={onError}
    />
  );
}

export default Avatar;
