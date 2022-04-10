import { useEffect } from 'react';

import classnames from 'classnames';

import { useLayout, useLayoutSelector } from '../../../../LayoutContext';

type AsideWorkspaceProps = {
  className?: string;
  width?: number;
  children: React.ReactNode;
  collapsible?: boolean;
  resizeable?: boolean;
};

function AsideWorkspace(props: AsideWorkspaceProps) {
  const { className, width = 325, children, collapsible = true, resizeable } = props;
  const minimize = useLayoutSelector((state) => state.aside.minimize);
  const asideWidth = useLayoutSelector((state) => state.aside.width);

  const layout = useLayout();

  useEffect(() => {
    layout.aside.width(width + 100);
  }, [layout.aside, width]);

  useEffect(() => {
    layout.aside.collapsible(collapsible);
  }, [layout.aside, collapsible]);

  useEffect(() => {
    layout.aside.collapsible(!!resizeable);
  }, [layout.aside, resizeable]);

  return (
    <div
      style={{ width: !minimize ? asideWidth - 100 : undefined }}
      className={classnames('aside-workspace', className)}
    >
      <div className="d-flex h-100 flex-column">{children}</div>
    </div>
  );
}

export default AsideWorkspace;
