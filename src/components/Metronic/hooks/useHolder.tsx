import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import Holder from 'holderjs';

Holder.addTheme('dark', {
  bg: '#fafafa',
  fg: '#d9d9d9',
  size: 12,
  font: 'Monaco',
  fontweight: 'normal',
});

export default function useHolder(images?: string | HTMLElement | RefObject<HTMLElement>) {
  const ref = useRef<HTMLImageElement>(null);

  const _isRef = images && Object.hasOwn(images as any, 'current');

  useEffect(() => {
    Holder.run({
      domain: 'image.holder.js',
      images: _isRef ? (images as any).current : images || ref.current!,
    });
  }, [_isRef, images]);

  return ref;
}
