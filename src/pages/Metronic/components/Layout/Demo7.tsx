import { useApp } from 'umi';
import React, { useMemo } from 'react';
import Aside from '../Aside';

import { LayoutProvider, useLayoutSelector } from './LayoutContext';
import * as utils from '@/utils';

// function CollapseDemo() {
//   // {/*className="btn btn-primary"*/}
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <div className="py-2">
//       <Button onClick={() => setCollapsed(!collapsed)}>Toggle colla11pse</Button>
//       <Collapse in={collapsed}>
//         <div>This is the toggle-able content!</div>
//       </Collapse>
//     </div>
//   );
// }

type LayoutProps = {
  children: React.ReactNode;
};

function InternalLayout(props: LayoutProps) {
  const { children } = props;
  const minimize = useLayoutSelector((state) => state.aside.minimize);
  return (
    <div
      data-kt-aside-minimize={minimize ? 'on' : 'off'}
      className="theme-metronic header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled"
    >
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <Aside />
          {children}
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper(props: LayoutProps) {
  const { children } = props;

  const { menus: sourceMenus } = useApp();

  const menus = useMemo(
    () =>
      utils.tree(
        sourceMenus.map((item) => ({ ...item, children: [] })),
        {
          idKey: 'id',
          childrenKey: 'children',
          pidKey: 'parent.id',
          sort: (l: any, r: any) => l.index - r.index,
        },
      ),
    [sourceMenus],
  );

  return (
    <LayoutProvider state={{ aside: { menus, minimize: false } }}>
      <InternalLayout>{children}</InternalLayout>
    </LayoutProvider>
  );
}

export default LayoutWrapper;
