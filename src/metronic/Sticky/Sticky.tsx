import React, { CSSProperties, useMemo } from 'react';

import useSticky from './useSticky';

type StickyProps = {
  children: React.ReactElement;
};

function Sticky(props: StickyProps) {
  const { children } = props;

  const [ref, isFixed, { width, height }] = useSticky({
    name: 'header',
    offset: { default: 200, lg: 300 },
  });

  //   const buildRef = useCallback((el: HTMLDivElement) => {
  //     if(!el) return;
  //     (ref as any).current = (el.children.length ? el.children[0] : null) as HTMLDivElement;
  //   }, []);

  const containerStyle = useMemo((): CSSProperties => {
    if (!isFixed) {
      return {};
    }
    return {
      height,
      width,
      overflow: 'hidden',
    };
  }, [isFixed]);

  const newChildren = useMemo(() => {
    return React.cloneElement(children, {
      ref,
    });
  }, [children]);
  return (
    <div style={containerStyle} className="sticky">
      {newChildren}
    </div>
  );
}

export default Sticky;
