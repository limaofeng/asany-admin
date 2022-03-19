import React, { useEffect, useMemo, useRef } from 'react';

import classnames from 'classnames';
import { isEqual } from 'lodash';

interface TabPaneProps {
  tab: string | React.ReactNode;
  children: React.ReactNode;
  forceRender?: boolean;
  className?: string;
  active?: boolean;
}
function TabPane(props: TabPaneProps) {
  const { children, active, className } = props;

  const state = useRef<{ isRender: boolean }>({ isRender: !!props.forceRender });

  const isRender = useMemo(() => state.current.isRender || active, [active]);

  useEffect(() => {
    if (active) {
      state.current.isRender = true;
    }
  }, [active]);

  // console.log(props.tab, isRender, active);

  return (
    <div
      className={classnames('tab-pane', className, {
        active: active,
      })}
    >
      {isRender && children}
    </div>
  );
}

export default React.memo(TabPane, isEqual);
