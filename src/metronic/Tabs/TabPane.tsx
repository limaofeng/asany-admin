import React, { useEffect, useMemo, useRef, useState } from 'react';

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

  const state = useRef<{ isRender: boolean }>({
    isRender: !!props.forceRender,
  });
  const [show, setShow] = useState(false);

  const isRender = useMemo(() => state.current.isRender || active, [active]);

  useEffect(() => {
    if (active) {
      state.current.isRender = true;
    }
    const timer = setTimeout(() => setShow(!!active), 100);
    return () => clearTimeout(timer);
  }, [active]);

  // console.log(props.tab, isRender, active);

  return (
    <div
      className={classnames('tab-pane fade', className, {
        active: active,
        show,
      })}
    >
      {isRender && children}
    </div>
  );
}

const TabPaneMemo = React.memo(TabPane, isEqual);

export default TabPaneMemo;
