import React from 'react';

import classnames from 'classnames';

interface TabPaneProps {
  tab: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}
function TabPane(props: TabPaneProps) {
  const { children, active, className } = props;

  return (
    <div
      className={classnames('tab-pane', className, {
        active: active,
      })}
    >
      {children}
    </div>
  );
}

export default React.memo(TabPane);
