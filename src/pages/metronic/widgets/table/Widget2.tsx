import type { CSSProperties } from 'react';
import React from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import { Button, Card, Dropdown, Menu, Table, Tabs } from '@/metronic';

type Widget2Props = {
  animated: any;
  className: string;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

const tabIcons = {
  kt_stats_widget_2_tab_1: '/assets/media/svg/products-categories/t-shirt.svg',
  kt_stats_widget_2_tab_2: '/assets/media/svg/products-categories/gaming.svg',
  kt_stats_widget_2_tab_3: '/assets/media/svg/products-categories/watch.svg',
  kt_stats_widget_2_tab_4: '/assets/media/svg/products-categories/gloves.svg',
  kt_stats_widget_2_tab_5: '/assets/media/svg/products-categories/shoes.svg',
};

function renderTable(
  dataSource: {
    key: string;
    pic: string;
    title: string;
    subtitle: string;
    qty: string;
    price: string;
    total_price: string;
  }[],
) {
  return (
    <Table
      type="native"
      className="align-middle gs-0 gy-4 my-0"
      columns={[
        {
          dataIndex: 'pic',
          title: 'ITEM',
          className: (type) => (type == 'th' ? 'ps-0 w-50px' : undefined),
          render(pic) {
            return <img src={pic} className="w-50px ms-n1" alt="" />;
          },
        },
        {
          dataIndex: 'info',
          title: '',
          className: (type) => (type == 'th' ? 'min-w-140px' : 'ps-0'),
          render(_, record) {
            return (
              <>
                <a
                  href="#"
                  className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0"
                >
                  {record.title}
                </a>
                <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
                  Item: {record.subtitle}
                </span>
              </>
            );
          },
        },
        {
          dataIndex: 'qty',
          title: 'QTY',
          className: (type) => (type == 'th' ? 'text-end min-w-140px' : undefined),
          render(text) {
            return (
              <span className="text-gray-800 fw-bolder d-block fs-6 ps-0 text-end">{text}</span>
            );
          },
        },
        {
          dataIndex: 'price',
          title: 'PRICE',
          className: (type) => (type == 'th' ? 'pe-0 text-end min-w-120px' : 'text-end pe-0'),
          render(text) {
            return <span className="text-gray-800 fw-bolder d-block fs-6">{text}</span>;
          },
        },
        {
          dataIndex: 'total_price',
          title: 'TOTAL PRICE',
          className: (type) => (type == 'th' ? 'pe-0 text-end min-w-120px' : 'text-end pe-0'),
          render(text) {
            return <span className="text-gray-800 fw-bolder d-block fs-6">{text}</span>;
          },
        },
      ]}
      dataSource={dataSource}
    />
  );
}

function Widget2(props: Widget2Props, ref: any) {
  return (
    <Card
      {...props.animated}
      className={props.className}
      flush
      style={props.style}
      ref={ref || props.onRefReady}
    >
      <Card.Header className="align-items-center border-0">
        <h3 className="fw-bolder text-gray-900 m-0">Recent Orders</h3>
        <Dropdown
          placement="bottomRight"
          getPopupContainer={() => document.body}
          overlay={
            <Menu
              dropdown
              rounded
              mode="vertical"
              color="gray-800"
              backgroundColor="light-primary"
              className="fw-bold w-200px fs-7"
            >
              <Menu.Content className="px-3" contentClassName="fs-6 text-dark fw-bolder px-3 py-4">
                Quick Actions
              </Menu.Content>
              <Menu.Separator className="mb-3 opacity-75" />
              <Menu.Item className="px-3" linkClassName="px-3">
                New Ticket
              </Menu.Item>
              <Menu.Item className="px-3" linkClassName="px-3">
                New Customer
              </Menu.Item>
              <Menu.SubMenu
                className="px-3"
                title="New Group"
                linkClassName="px-3"
                bodyClassName="w-175px py-4"
              >
                <Menu.Item className="px-3" linkClassName="px-3">
                  New Customer
                </Menu.Item>
                <Menu.Item className="px-3" linkClassName="px-3">
                  Staff Group
                </Menu.Item>
                <Menu.Item className="px-3" linkClassName="px-3">
                  Member Group
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item className="px-3" linkClassName="px-3">
                New Contact
              </Menu.Item>
              <Menu.Separator className="mt-3 opacity-75" />
              <Menu.Content className="px-3" contentClassName="px-3 py-3">
                <Button className="px-4">Generate Reports</Button>
              </Menu.Content>
            </Menu>
          }
        >
          <Button
            className="btn-clean btn-icon-primary"
            variant={false}
            activeColor="light-primary"
            icon={<Icon name="Duotune/gen024" className="svg-icon-3 svg-icon-primary" />}
          />
        </Dropdown>
      </Card.Header>
      <Card.Body className="pt-2">
        <Tabs
          type="pills-custom"
          className="mb-3"
          renderTabBar={({ children, ...tab }) => {
            return (
              <li key={tab.key} className="nav-item mb-3 me-3 me-lg-6">
                <a
                  onClick={tab.onClick}
                  className={classnames(
                    'nav-link',
                    'd-flex justify-content-between flex-column flex-center',
                    'overflow-hidden w-80px h-85px py-4',
                    {
                      active: tab.active,
                    },
                  )}
                >
                  <div className="nav-icon">
                    <img alt="" src={tabIcons[tab.id]} className="" />
                  </div>
                  <span className="nav-text text-gray-700 fw-bolder fs-6 lh-1">{children}</span>
                  <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                </a>
              </li>
            );
          }}
        >
          <Tabs.TabPane key="kt_stats_widget_2_tab_1" tab="T-shirt">
            {renderTable([
              {
                key: '1',
                pic: '/assets/media/stock/ecommerce/210.gif',
                title: 'Elephant 1802',
                subtitle: '#XDG-2347',
                qty: 'x1',
                price: '$72.00',
                total_price: '$126.00',
              },
              {
                key: '2',
                pic: '/assets/media/stock/ecommerce/215.gif',
                title: 'Red Laga',
                subtitle: '#XDG-1321',
                qty: 'x2',
                price: '$45.00',
                total_price: '$76.00',
              },
              {
                key: '3',
                pic: '/assets/media/stock/ecommerce/209.gif',
                title: 'RiseUP',
                subtitle: '#XDG-4312',
                qty: 'x3',
                price: '$84.00',
                total_price: '$168.00',
              },
            ])}
          </Tabs.TabPane>
          <Tabs.TabPane key="kt_stats_widget_2_tab_2" tab="Gaming">
            {renderTable([
              {
                key: '1',
                pic: '/assets/media/stock/ecommerce/197.gif',
                title: 'Elephant 1802',
                subtitle: '#XDG-4312',
                qty: 'x1',
                price: '$32.00',
                total_price: '$312.00',
              },
              {
                key: '2',
                pic: '/assets/media/stock/ecommerce/178.gif',
                title: 'Red Laga',
                subtitle: '#XDG-3122',
                qty: 'x2',
                price: '$53.00',
                total_price: '$62.00',
              },
              {
                key: '3',
                pic: '/assets/media/stock/ecommerce/22.gif',
                title: 'RiseUP',
                subtitle: '#XDG-1142',
                qty: 'x3',
                price: '$74.00',
                total_price: '$139.00',
              },
            ])}
          </Tabs.TabPane>
          <Tabs.TabPane key="kt_stats_widget_2_tab_3" tab="Watch">
            {renderTable([
              {
                key: '1',
                pic: '/assets/media/stock/ecommerce/1.gif',
                title: 'Elephant 1324',
                subtitle: '#XDG-1523',
                qty: 'x1',
                price: '$43.00',
                total_price: '$213.00',
              },
              {
                key: '2',
                pic: '/assets/media/stock/ecommerce/24.gif',
                title: 'Red Laga',
                subtitle: '#XDG-5314',
                qty: 'x2',
                price: '$71.00',
                total_price: '$53.00',
              },
              {
                key: '3',
                pic: '/assets/media/stock/ecommerce/71.gif',
                title: 'RiseUP',
                subtitle: '#XDG-4222',
                qty: 'x3',
                price: '$23.00',
                total_price: '$213.00',
              },
            ])}
          </Tabs.TabPane>
          <Tabs.TabPane key="kt_stats_widget_2_tab_4" tab="Gloves">
            {renderTable([
              {
                key: '1',
                pic: '/assets/media/stock/ecommerce/41.gif',
                title: 'Elephant 2635',
                subtitle: '#XDG-1523',
                qty: 'x1',
                price: '$65.00',
                total_price: '$163.00',
              },
              {
                key: '2',
                pic: '/assets/media/stock/ecommerce/63.gif',
                title: 'Red Laga',
                subtitle: '#XDG-2745',
                qty: 'x2',
                price: '$64.00',
                total_price: '$73.00',
              },
              {
                key: '3',
                pic: '/assets/media/stock/ecommerce/59.gif',
                title: 'RiseUP',
                subtitle: '#XDG-5173',
                qty: 'x3',
                price: '$54.00',
                total_price: '$173.00',
              },
            ])}
          </Tabs.TabPane>
          <Tabs.TabPane key="kt_stats_widget_2_tab_5" tab="Shoes">
            {renderTable([
              {
                key: '1',
                pic: '/assets/media/stock/ecommerce/10.gif',
                title: 'Nike',
                subtitle: '#XDG-2163',
                qty: 'x1',
                price: '$64.00',
                total_price: '$287.00',
              },
              {
                key: '2',
                pic: '/assets/media/stock/ecommerce/96.gif',
                title: 'Adidas',
                subtitle: '#XDG-2162',
                qty: 'x2',
                price: '$76.00',
                total_price: '$51.00',
              },
              {
                key: '3',
                pic: '/assets/media/stock/ecommerce/13.gif',
                title: 'Puma',
                subtitle: '#XDG-1537',
                qty: 'x3',
                price: '$27.00',
                total_price: '$167.00',
              },
            ])}
          </Tabs.TabPane>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default React.forwardRef(Widget2);
