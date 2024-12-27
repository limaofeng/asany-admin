import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router';

import { useSelectedRoutes } from '@umijs/max';

import { MicroApp } from '@/layouts/Demo7';
import { BlockUI, Menu, Symbol } from '@/metronic';

import { useCustomerQuery } from '../hooks';

const MenuKeyMappings = [
  {
    key: 'dashboard',
    path: '/dashboard',
  },
  {
    key: 'information',
    path: '/information',
  },
  {
    key: 'stores',
    path: '/stores',
  },
  {
    key: 'users',
    path: '/users',
  },
  {
    key: 'devices',
    path: '/devices',
  },
  {
    key: 'tickets',
    path: '/tickets',
  },
];

function CustomerView() {
  const loading = false;
  const location = useLocation();
  const routes = useSelectedRoutes();

  const layoutRoute = routes.find(({ route }: any) =>
    route.component?.template.endsWith('CustomerManagementView'),
  );

  const menuKey = useMemo(() => {
    const key =
      MenuKeyMappings.find((mapping) => {
        return location.pathname.endsWith(mapping.path);
      })?.key || 'unknown';
    return {
      key,
      params: {},
    };
  }, [location.pathname]);

  const baseUrl = layoutRoute?.pathname;

  const { data } = useCustomerQuery({
    variables: {
      id: layoutRoute?.params.id,
    },
    fetchPolicy: 'network-only',
    skip: !layoutRoute?.params.id,
  });

  const customer = data?.result;

  return (
    <MicroApp loading={loading}>
      <MicroApp.Sidebar>
        <BlockUI
          zIndex={10}
          className="my-5 p-5"
          overlayClassName="bg-white bg-opacity-25"
          loading={false}
        >
          <div className="mx-5">
            <div className="d-flex align-items-center">
              <Symbol.Avatar alt={customer?.name} autoColor className="me-5" />
              <div className="flex-grow-1">
                <a className="text-dark fw-bolder text-hover-primary fs-6">
                  {customer?.name}
                </a>
                <span className="text-muted d-block fw-bold">
                  ID: {customer?.id}
                </span>
              </div>
            </div>
          </div>
          <Menu
            fit
            accordion={false}
            selectable="AllMenu"
            className="pt-6 menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
            selectedKeys={[menuKey.key]}
          >
            <Menu.Item
              bullet={true}
              icon="Bootstrap/speedometer2"
              title="概览"
              url={`${baseUrl}/dashboard`}
            />
            <Menu.Section contentClassName="pt-6 pb-0">基础功能</Menu.Section>
            <Menu.Item
              bullet={true}
              title="基础信息"
              key="information"
              url={`${baseUrl}/information`}
            />
            <Menu.Item
              bullet={true}
              key="stores"
              title="门店管理"
              url={`${baseUrl}/stores`}
            />
            <Menu.Item
              bullet={true}
              key="users"
              title="人员管理"
              url={`${baseUrl}/users`}
            />
            <Menu.Section contentClassName="pt-6 pb-0">服务单功能</Menu.Section>
            <Menu.Item
              bullet={true}
              key="devices"
              title="设备管理"
              url={`${baseUrl}/devices`}
            />
            <Menu.Item
              bullet={true}
              key="tickets"
              title="服务单管理"
              url={`${baseUrl}/tickets`}
            />
            {/*
                <Menu.Section contentClassName="pt-6 pb-0">设置</Menu.Section>
                <Menu.Item
                  bullet={true}
                  title="基础信息"
                  url={`${baseUrl}/settings`}
                />
                */}
          </Menu>
        </BlockUI>
      </MicroApp.Sidebar>
      <Outlet
        context={{
          baseUrl,
        }}
      />
    </MicroApp>
  );
}

export default CustomerView;
