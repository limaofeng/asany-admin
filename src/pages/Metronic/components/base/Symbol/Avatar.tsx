import { useCallback, useMemo, useState } from 'react';
import React from 'react';

import classnames from 'classnames';

import { contrastTextColor, generateBackgroundColor } from '../../utils/color';
import type { Badge } from '../Badge';
import Tooltip from '../../feedback/Tooltip';

import type { SymbolSize } from './utils';
import { useSymbolSize } from './utils';

export type AvatarProps = {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  shape?: 'circle' | 'square';
  size?: SymbolSize;
  src?: string;
  title?: string;
  alt?: string;
  gap?: number;
  badge?: React.ReactElement<typeof Badge>;
};

function Avatar(props: AvatarProps) {
  const { title, onClick, shape, className, src, gap, alt = 'unknown' } = props;

  const [loadFailed, setLoadFailed] = useState(false);

  const backgroundColor = useMemo(() => generateBackgroundColor(alt), [alt]);
  const color = useMemo(() => contrastTextColor(backgroundColor), [backgroundColor]);

  const handleError = useCallback(() => {
    setLoadFailed(true);
  }, []);

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
          <div style={{ backgroundColor, color }} className="symbol-label fs-2 fw-bold">
            {alt.substr(0, 1).toUpperCase()}
          </div>
        ) : (
          renderImg(src, alt, gap, handleError)
        )}
      </div>
    </Tooltip>
  );
}

function renderImg(
  src: string | React.ReactNode,
  alt: string,
  gap: number | undefined,
  onError: () => void,
) {
  if (!src) {
    onError();
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
