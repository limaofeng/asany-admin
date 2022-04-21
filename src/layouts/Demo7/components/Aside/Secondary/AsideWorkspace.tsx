import { useEffect } from 'react';

import classnames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { useLayout, useLayoutSelector } from '../../../../LayoutContext';

import MenuBar from './MenuBar';

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
      <OverlayScrollbarsComponent
        className="d-flex h-100 flex-column custom-scrollbar"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        {children}
      </OverlayScrollbarsComponent>
    </div>
  );
}

AsideWorkspace.MenuBar = MenuBar;

export default AsideWorkspace;
