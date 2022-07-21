import type { CSSProperties } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import React from 'react';

import ApexCharts from 'apexcharts';
import classnames from 'classnames';
import { Icon } from '@asany/icons';

import * as KTUtil from '@/metronic/utils/KTUtil';
import { Card } from '@/metronic';

type Cardwidget8Props = {
  animated: any;
  className: string;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

function CardWidget8(props: Cardwidget8Props, ref: any) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = chartRef.current!;

    const height = parseInt(KTUtil.css(element, 'height')!);
    // const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
    const baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
    const lightColor = KTUtil.getCssVariableValue('--bs-light-info');

    const options = {
      series: [
        {
          name: 'Net Profit',
          data: [35, 25, 45, 15, 60, 50, 57, 35, 70, 40, 45, 25, 45, 30, 70],
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
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'solid',
        opacity: 0,
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: [baseColor],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
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
        labels: {
          show: false,
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
        x: {
          formatter: function (val: number) {
            return 'Impression ' + val;
          },
        },
        y: {
          formatter: function (val: number) {
            return '$' + val + ' thousands';
          },
        },
      },
      colors: [lightColor],
      grid: {
        strokeDashArray: 4,
        padding: {
          top: 0,
          right: -20,
          bottom: -20,
          left: -20,
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        strokeColor: baseColor,
        strokeWidth: 2,
      },
    };

    const chart = new ApexCharts(element, options);

    // Set timeout to properly get the parent elements width
    setTimeout(function () {
      chart.render();
    }, 300);
  }, []);

  return (
    <Card
      {...props.animated}
      className={classnames(props.className)}
      style={props.style}
      ref={ref || props.onRefReady}
    >
      <Card.Body className="d-flex justify-content-between flex-column px-0 pb-0">
        <div className="mb-4 px-9">
          <div className="d-flex align-items-center mb-2">
            <span className="fs-4 fw-bold text-gray-400 align-self-start me-1&gt;">$</span>
            <span className="fs-2hx fw-bolder text-gray-800 me-2 lh-1">69,700</span>
            <span className="badge badge-success fs-6 lh-1 py-1 px-2 d-flex flex-center">
              <Icon name="Duotune/arr067" className="svg-icon-7 svg-icon-white ms-n1" />
              2.2%
            </span>
          </div>
          <span className="fs-6 fw-bold text-gray-400">Total Online Sales</span>
        </div>
        <div ref={chartRef} className="min-h-auto" style={{ height: 125 }} />
      </Card.Body>
    </Card>
  );
}

export default React.forwardRef(CardWidget8);
