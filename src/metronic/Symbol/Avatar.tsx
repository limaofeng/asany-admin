import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';

import { APP_CONFIG } from '@umijs/max';
import classnames from 'classnames';
import styled from 'styled-components';

import type { AvatarProps } from './typings';
import { useSymbolSize } from './utils';

import { loadImage } from '../utils';
import {
  contrastTextColor,
  darkenColor,
  generateBackgroundColor,
  getContrastYIQ,
  lightenColor,
} from '../utils/color';

type AvatarLableProps = {
  color?: string;
  backgroundColor?: string;
};

const AvatarLable = styled.div<AvatarLableProps>`
  --kt-symbol-label-color: ${(props) => props.color};
  --kt-symbol-label-bg: ${(props) => props.backgroundColor};
`;

function isChinese(word: string) {
  return /^[\u4e00-\u9fa5]+.*$/.test(word);
}

type ImageObjectProps = {
  src: any;
  data: any;
  className?: string;
  onError?: (e: any) => void;
};

function ImageObject(props: ImageObjectProps) {
  return (
    <img
      src={props.data || props.src}
      className={props.className}
      onError={props.onError}
    />
  );
}

function renderImg(
  src: string | React.ReactNode,
  gap: number | undefined,
  onError: (e: any) => void,
  data: any,
) {
  if (!src) {
    onError(new Error('SRC 为空'));
    return;
  }
  if (React.isValidElement(src)) {
    return src;
  }

  return (
    <ImageObject
      src={src}
      data={data}
      className={classnames({ [`p-${gap}`]: !!gap })}
      onError={onError}
    />
  );
}

function Avatar(props: AvatarProps, ref: any) {
  const {
    onClick,
    shape,
    style,
    className,
    light,
    labelClassName,
    src,
    gap,
    alt,
    badge,
    autoColor = true,
    ...otherProps
  } = props;

  const [state, setState] = useState<'init' | 'succeed' | 'error'>('init');
  const [imageData, setImageData] = useState<any>();

  const backgroundColor = useMemo(() => {
    if (!autoColor) {
      return;
    }
    if (typeof alt === 'string') {
      let _backgroundColor = generateBackgroundColor(alt);
      if (light) {
        while (getContrastYIQ(_backgroundColor) === 'dark') {
          _backgroundColor = lightenColor(_backgroundColor, 80);
        }
        // _backgroundColor = lightenColor(_backgroundColor, 40);
      }
      return _backgroundColor;
    }
    return undefined;
  }, [alt, autoColor, light]);
  const color = useMemo(() => {
    if (backgroundColor) {
      return contrastTextColor(
        light ? darkenColor(backgroundColor, 20) : backgroundColor,
      );
    }
    return undefined;
  }, [backgroundColor, light]);

  const handleError = useCallback(() => {
    setState('error');
  }, []);

  const url = useMemo(() => {
    if (!!src && typeof src === 'object' && src.hasOwnProperty('id')) {
      return APP_CONFIG.STORAGE_URL + `/preview/${(src as any).id}`;
    }
    if (typeof src !== 'string') {
      return src;
    }
    if (
      src.startsWith('https://') ||
      src.startsWith('http://') ||
      src.startsWith('//')
    ) {
      return src;
    }
    return src;
  }, [src]);

  useLayoutEffect(() => {
    if (!url) {
      setState('error');
      return;
    }
    if (typeof url !== 'string') {
      setState('succeed');
      return;
    }
    loadImage(url)
      .then((data) => {
        setImageData(data);
        setState('succeed');
      })
      .catch(handleError);
  }, [handleError, url]);

  const sizeClass = useSymbolSize(props.size);

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={style}
      className={classnames(
        'symbol',
        {
          'symbol-circle': shape === 'circle',
          'symbol-square': shape === 'square',
        },
        className,
        sizeClass,
      )}
      {...otherProps}
    >
      {state === 'error' || state === 'init' ? (
        React.isValidElement(alt) ? (
          alt
        ) : (
          <AvatarLable
            color={
              light ? backgroundColor && darkenColor(backgroundColor) : color
            }
            backgroundColor={
              light
                ? backgroundColor && lightenColor(backgroundColor)
                : backgroundColor
            }
            className={classnames(labelClassName, 'symbol-label fw-bold')}
          >
            {typeof alt === 'string' &&
              (isChinese(alt)
                ? alt.substring(0, 2)
                : alt.substring(0, 2).toUpperCase())}
          </AvatarLable>
        )
      ) : (
        state === 'succeed' && renderImg(src, gap, handleError, imageData)
      )}
      {badge &&
        React.cloneElement(badge, {
          className: classnames('symbol-badge', badge.props.className),
        })}
    </div>
  );
}

const AvatarWrapper = React.forwardRef(Avatar);

export default AvatarWrapper;
