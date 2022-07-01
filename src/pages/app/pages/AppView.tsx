import React from 'react';

import type { RouteComponentProps } from 'react-router';

import AppSidebar from '../components/AppSidebar';
import { useAppQuery } from '../hooks';

import { MicroApp } from '@/layouts/Demo7';

type AppViewProps = RouteComponentProps<{ id: string }> & {
  children: React.ReactNode;
};

function AppView(props: AppViewProps) {
  const {
    children,
    location,
    match: {
      params: { id },
    },
  } = props;

  const { data = {}, loading } = useAppQuery({ variables: { id } });

  const app = data.app;

  // const navActiveKey = pathname.split('/')[3];

  console.log('app 1', app);

  return (
    <MicroApp loading={loading} className="micro-app-website">
      {app && (
        <>
          <MicroApp.Sidebar>
            <AppSidebar app={app as any} location={location as any} />
          </MicroApp.Sidebar>
          {React.Children.map(children, (o: any) => {
            o.props.location.state = {
              app,
              baseUrl: '/apps/' + id,
            };
            return o;
          })}
        </>
      )}
    </MicroApp>
  );
}

export default AppView;
