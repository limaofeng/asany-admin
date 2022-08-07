import React, { useCallback, useEffect, useMemo, useState } from 'react';

import classnames from 'classnames';
import styled from 'styled-components';

import {
  contrastTextColor,
  darkenColor,
  generateBackgroundColor,
  getContrastYIQ,
  lightenColor,
} from '../utils/color';

import type { AvatarProps } from './typings';
import { useSymbolSize } from './utils';

type AvatarLableProps = {
  color?: string;
  backgroundColor?: string;
};

const AvatarLable = styled.div<AvatarLableProps>`
  --kt-symbol-label-color: ${(props) => props.color};
  --kt-symbol-label-bg: ${(props) => props.backgroundColor};
`;

function Avatar(props: AvatarProps, ref: any) {
  const { onClick, shape, className, light, labelClassName, src, gap, alt, badge, ...otherProps } =
    props;

  const [loadFailed, setLoadFailed] = useState(false);

  const backgroundColor = useMemo(() => {
    if (typeof alt == 'string') {
      let _backgroundColor = generateBackgroundColor(alt);
      if (light) {
        while (getContrastYIQ(_backgroundColor) == 'dark') {
          _backgroundColor = lightenColor(_backgroundColor, 80);
        }
        _backgroundColor = lightenColor(_backgroundColor, 40);
      }
      return _backgroundColor;
    }
    return undefined;
  }, [alt, light]);
  const color = useMemo(() => {
    if (backgroundColor) {
      return contrastTextColor(light ? darkenColor(backgroundColor, 80) : backgroundColor);
    }
    return undefined;
  }, [backgroundColor, light]);

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
          <AvatarLable
            color={light ? backgroundColor && darkenColor(backgroundColor) : color}
            backgroundColor={
              light ? backgroundColor && lightenColor(backgroundColor) : backgroundColor
            }
            className={classnames(labelClassName, 'symbol-label fw-bold')}
          >
            {typeof alt === 'string' &&
              (isChinese(alt) ? alt.substring(0, 2) : alt.substring(0, 2).toUpperCase())}
          </AvatarLable>
        )
      ) : (
        renderImg(src, gap, handleError)
      )}
      {badge &&
        React.cloneElement(badge, { className: classnames('symbol-badge', badge.props.className) })}
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
