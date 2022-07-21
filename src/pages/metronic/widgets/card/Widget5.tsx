import type { CSSProperties } from 'react';
import { useRef } from 'react';
import React from 'react';

import { Icon } from '@asany/icons';

import { Card } from '@/metronic';

type Widget5Props = {
  animated: any;
  className: string;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

function Widget5(props: Widget5Props, ref: any) {
  const chartRef = useRef<HTMLDivElement>(null);

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
          {/*begin::Info*/}
          <div className="d-flex align-items-center">
            {/*begin::Amount*/}
            <span className="fs-2hx fw-bolder text-dark me-2 lh-1">1,836</span>
            {/*end::Amount*/}
            {/*begin::Badge*/}
            <span
              className="badge badge-danger fs-6 lh-1 py-1 px-2 d-flex flex-center"
              style={{ height: 22 }}
            >
              <Icon name="Duotune/arr068" className="svg-icon-7 svg-icon-white ms-n1" />
              {/*end::Svg Icon*/}2.2%
            </span>
            {/*end::Badge*/}
          </div>
          {/*end::Info*/}
          {/*begin::Subtitle*/}
          <span className="text-gray-400 pt-1 fw-bold fs-6">Orders This Month</span>
          {/*end::Subtitle*/}
        </Card.Title>
      </Card.Header>
      <Card.Body className=" d-flex align-items-end pt-0">
        <div className="d-flex align-items-center flex-column mt-3 w-100">
          <div className="d-flex justify-content-between w-100 mt-auto mb-2">
            <span className="fw-boldest fs-6 text-dark">1,048 to Goal</span>
            <span className="fw-bolder fs-6 text-gray-400">62%</span>
          </div>
          <div className="h-8px mx-3 w-100 bg-light-success rounded">
            <div
              ref={chartRef}
              className="bg-success rounded h-8px"
              role="progressbar"
              style={{ width: '62%' }}
              // aria-valuenow="50"
              // aria-valuemin="0"
              // aria-valuemax="100"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default React.forwardRef(Widget5);
