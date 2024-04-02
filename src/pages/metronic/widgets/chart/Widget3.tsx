import type { CSSProperties } from 'react';
import React, { useEffect, useRef } from 'react';

import { useBlock } from '@asany/sunmao';
import ApexCharts from 'apexcharts';

import { Card } from '@/metronic';
import * as KTUtil from '@/metronic/utils/KTUtil';

type Widget3Props = {
  animated: any;
  className: string;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

function Widget3(props: Widget3Props, ref: any) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = chartRef.current!;

    const height = parseInt(KTUtil.css(element, 'height')!);
    const labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
    const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
    // const baseColor = KTUtil.getCssVariableValue('--bs-success');
    // const lightColor = KTUtil.getCssVariableValue('--bs-success');
    const baseColor = KTUtil.getCssVariableValue('--bs-primary');
    const lightColor = KTUtil.getCssVariableValue('--bs-primary');

    const options = {
      series: [
        {
          name: 'Sales',
          data: [
            18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20,
            20, 22,
          ],
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: height,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 80, 100],
        },
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [baseColor],
      },
      xaxis: {
        categories: [
          '',
          'Apr 02',
          'Apr 03',
          'Apr 04',
          'Apr 05',
          'Apr 06',
          'Apr 07',
          'Apr 08',
          'Apr 09',
          'Apr 10',
          'Apr 11',
          'Apr 12',
          'Apr 13',
          'Apr 14',
          'Apr 15',
          'Apr 16',
          'Apr 17',
          'Apr 18',
          '',
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tickAmount: 6,
        labels: {
          rotate: 0,
          rotateAlways: true,
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
        crosshairs: {
          position: 'front',
          stroke: {
            color: baseColor,
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 24,
        min: 10,
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
          formatter: function (val: number) {
            return '$' + Number(val / 10).toFixed(1) + 'K';
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: '12px',
        },
        y: {
          formatter: function (val: number) {
            return '$' + val + 'K';
          },
        },
      },
      colors: [lightColor],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        strokeColor: baseColor,
        strokeWidth: 3,
      },
    };

    const chart = new ApexCharts(element, options);

    // Set timeout to properly get the parent elements width
    setTimeout(function () {
      chart.render();
    }, 200);
  }, []);

  const { props: blockProps } = useBlock({
    key: 'Widget3',
    icon: '',
    title: 'Widget3',
    props: {
      title: 'Sales This Months',
      subtitle: 'Users from all channels',
      statistics: {
        unit: '$',
        value: '14,094',
        description: 'Another $48,346 to Goal',
      },
    },
    customizer: {
      fields: [
        {
          name: 'title',
          type: 'String',
          label: '名称',
        },
        {
          name: 'subtitle',
          type: 'String',
          label: '副标题',
        },
        {
          name: 'statistics',
          type: 'String',
          label: '统计',
        },
      ],
    },
  });

  const { title, subtitle } = blockProps;

  return (
    <Card
      {...props.animated}
      className={props.className}
      flush
      style={props.style}
      ref={ref || props.onRefReady}
    >
      <Card.Header className="pt-5">
        <Card.Title className=" d-flex flex-column">
          <span className="card-label fw-bolder text-dark">{title}</span>
          <span className="text-gray-400 mt-1 fw-bold fs-6">{subtitle}</span>
        </Card.Title>
        <Card.Toolbar>
          <a className="btn btn-sm btn-light-primary fw-bolder">
            Launch eCommerce App
          </a>
        </Card.Toolbar>
      </Card.Header>
      <Card.Body className="d-flex justify-content-between flex-column pb-1 px-0">
        <div className="px-9 mb-5">
          <div className="d-flex mb-2">
            <span className="fs-4 fw-bold text-gray-400 me-1">$</span>
            <span className="fs-2hx fw-bolder text-gray-800 me-2 lh-1">
              14,094
            </span>
          </div>
          <span className="fs-6 fw-bold text-gray-400">
            Another $48,346 to Goal
          </span>
        </div>
        <div
          ref={chartRef}
          className="min-h-auto ps-4 pe-6"
          style={{ height: 300 }}
        />
      </Card.Body>
    </Card>
  );
}

export default React.forwardRef(Widget3);
