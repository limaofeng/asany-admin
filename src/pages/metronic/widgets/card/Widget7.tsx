import type { CSSProperties } from 'react';
import React from 'react';

import { Card, Symbol } from '@/metronic';
import SymbolGroup from '@/metronic/Symbol/SymbolGroup';

type Widget7Props = {
  animated: any;
  className: string;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

function Widget7(props: Widget7Props, ref: any) {
  // const chartRef = useRef<HTMLDivElement>(null);

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
          <span className="fs-2hx fw-bolder text-dark me-2 lh-1">6.3k</span>
          <span className="text-gray-400 pt-1 fw-bold fs-6">
            New Customers This Month
          </span>
        </Card.Title>
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-end pe-0">
        <span className="fs-6 fw-boldest text-gray-800 d-block mb-2">
          Today’s Heroes
        </span>

        <SymbolGroup className="flex-nowrap">
          <Symbol
            size={35}
            shape="circle"
            alt="Alan Warden"
            src="/assets/media/avatars/300-11.jpg"
          />
          <Symbol
            size={35}
            shape="circle"
            alt="Michael Eberon"
            src="/assets/media/avatars/300-11.jpg"
          />
          <Symbol
            size={35}
            shape="circle"
            alt="Susan Redwood"
            src="/assets/media/avatars/300-11.jpg"
          />
          <Symbol
            size={35}
            shape="circle"
            alt="Melody Macy"
            src="/assets/media/avatars/300-2.jpg"
          />
          <Symbol
            size={35}
            shape="circle"
            alt="Perry Matthew"
            src="/assets/media/avatars/300-12.jpg"
          />
          <Symbol
            size={35}
            shape="circle"
            alt="Barry Walter"
            src="/assets/media/avatars/300-12.jpg"
          />
          <Symbol
            size={35}
            shape="circle"
            alt="XBarry Walter"
            src="/assets/media/avatars/300-12.jpg"
          />
        </SymbolGroup>
      </Card.Body>
    </Card>
  );
}

export default React.forwardRef(Widget7);
