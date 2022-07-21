import type { CSSProperties } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import React from 'react';

import ApexCharts from 'apexcharts';
import { Icon } from '@asany/icons';

import * as KTUtil from '@/metronic/utils/KTUtil';
import { Button, Card, Dropdown, Menu } from '@/metronic';

type ChartWidget5Props = {
  animated: any;
  className: string;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

function ChartWidget5(props: ChartWidget5Props, ref: any) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = chartRef.current!;

    const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');

    const options = {
      series: [
        {
          data: [15, 12, 10, 8, 7, 4, 3],
          show: false,
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          distributed: true,
          barHeight: 23,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA', '#50CDCD', '#3F4254'],
      xaxis: {
        categories: [
          'Phones',
          'Laptops',
          'Headsets',
          'Games',
          'Keyboardsy',
          'Monitors',
          'Speakers',
        ],
        labels: {
          formatter: function (val: number) {
            return val + 'K';
          },
          style: {
            colors: KTUtil.getCssVariableValue('--bs-gray-400'),
            fontSize: '14px',
            fontWeight: '600',
            align: 'left',
          },
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: KTUtil.getCssVariableValue('--bs-gray-800'),
            fontSize: '14px',
            fontWeight: '600',
          },
          offsetY: 2,
          align: 'left',
        },
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        strokeDashArray: 4,
      },
    };

    const chart = new ApexCharts(element, options);

    setTimeout(function () {
      chart.render();
    }, 200);
  }, []);

  return (
    <Card
      {...props.animated}
      className={props.className}
      flush
      style={props.style}
      ref={ref || props.onRefReady}
    >
      <Card.Header className="pt-5">
        <Card.Title className="align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">Top Selling Categories</span>
          <span className="text-gray-400 pt-2 fw-bold fs-6">8k social visitors</span>
        </Card.Title>
        <Card.Toolbar>
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
                <Menu.Content
                  className="px-3"
                  contentClassName="fs-6 text-dark fw-bolder px-3 py-4"
                >
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
        </Card.Toolbar>
      </Card.Header>
      <Card.Body className="pt-5 ps-6">
        <div ref={chartRef} className="min-h-auto ps-4 pe-6" style={{ height: 300 }} />
      </Card.Body>
    </Card>
  );
}

export default React.forwardRef(ChartWidget5);
