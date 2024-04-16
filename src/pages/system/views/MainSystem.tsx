import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router';

import { MicroApp } from '@/layouts/Demo7';

import SystemSidebar from '../components/SystemSidebar';

function MainSystem() {
  const location = useLocation();

  const menuKey = useMemo(() => {
    return {
      key: 'unknown',
      params: {},
    };
  }, [location.pathname]);

  return (
    <MicroApp className="micro-app-website">
      <MicroApp.Sidebar>
        <SystemSidebar menuKey={menuKey} />
      </MicroApp.Sidebar>
      <Outlet
        context={{
          baseUrl: '/system',
        }}
      />
    </MicroApp>
  );
}

export default MainSystem;
