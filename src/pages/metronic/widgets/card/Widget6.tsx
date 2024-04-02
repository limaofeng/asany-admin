import type { CSSProperties } from 'react';
import React, { useEffect, useRef } from 'react';

import { Icon } from '@asany/icons';
import ApexCharts from 'apexcharts';

import { Card } from '@/metronic';
import * as KTUtil from '@/metronic/utils/KTUtil';

type Widget6Props = {
  animated: any;
  className: string;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

function Widget6(props: Widget6Props, ref: any) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = chartRef.current!;

    const height = parseInt(KTUtil.css(element, 'height')!, 0);
    const labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
    const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
    const baseColor = KTUtil.getCssVariableValue('--bs-primary');
    const secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');

    const options = {
      series: [
        {
          name: 'Sales',
          data: [30, 60, 53, 45, 60, 75, 53],
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['55%'],
          borderRadius: 6,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 9,
        colors: ['transparent'],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
          tickPlacement: 'between',
        },
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
        crosshairs: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
      },
      fill: {
        type: 'solid',
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
          formatter: function (val: string) {
            return 'Impressions: ' + val;
          },
        },
        y: {
          formatter: function (val: string) {
            return '$' + val + 'K';
          },
        },
      },
      colors: [baseColor, secondaryColor],
      grid: {
        padding: {
          left: 10,
          right: 10,
        },
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
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
      className={props.className}
      flush
      style={props.style}
      ref={ref || props.onRefReady}
    >
      <Card.Header className="pt-5">
        <Card.Title className=" d-flex flex-column">
          <div className="d-flex align-items-center">
            <span className="fs-4 fw-bold text-gray-400 me-1 align-self-start">
              $
            </span>
            <span className="fs-2hx fw-bolder text-dark me-2 lh-1">2,420</span>
            <span
              className="badge badge-success fs-6 lh-1 py-1 px-2 d-flex flex-center"
              style={{ height: 22 }}
            >
              <Icon
                name="Duotune/arr067"
                className="svg-icon-7 svg-icon-white ms-n1"
              />
              2.6%
            </span>
          </div>
          <span className="text-gray-400 pt-1 fw-bold fs-6">
            Average Daily Sales
          </span>
        </Card.Title>
      </Card.Header>
      <Card.Body className="d-flex align-items-end px-0 pb-0">
        <div ref={chartRef} className="w-100" style={{ height: 80 }} />
      </Card.Body>
    </Card>
  );
}

export default React.forwardRef(Widget6);
