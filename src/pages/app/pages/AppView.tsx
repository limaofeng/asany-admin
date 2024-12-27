import { Outlet, useParams } from 'react-router';

import { MicroApp } from '@/layouts/Demo7';

import AppSidebar from '../components/AppSidebar';
import { useAppQuery } from '../hooks';

function AppView() {
  const { id } = useParams<{ id: string }>();

  const { data = {}, loading } = useAppQuery({ variables: { id } });

  const app = data.app;

  // const navActiveKey = pathname.split('/')[3];

  console.log('app 1', app);

  return (
    <MicroApp loading={loading} className="micro-app-website">
      {app && (
        <>
          <MicroApp.Sidebar>
            <AppSidebar
              categories={[]}
              app={app as any}
              location={location as any}
            />
          </MicroApp.Sidebar>
          <Outlet
            context={{
              app,
              baseUrl: '/apps/' + id,
            }}
          />
        </>
      )}
    </MicroApp>
  );
}

export default AppView;
