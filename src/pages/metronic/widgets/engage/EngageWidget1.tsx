import React from 'react';

import classnames from 'classnames';

import { Button, Card } from '@/metronic';

function EngageWidget1(props: any, ref: any) {
  return (
    <Card
      {...props.animated}
      className={classnames(props.className)}
      style={props.style}
      ref={ref || props.onRefReady}
    >
      <Card.Body className="d-flex flex-column flex-center">
        <div className="mb-2">
          <h1 className="fw-bold text-gray-800 text-center lh-lg">
            Have you tried
            <br />
            new
            <span className="fw-boldest">eCommerce App ?</span>
          </h1>
          <div
            className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-200px mh-200px my-5 my-lg-12"
            style={{ backgroundImage: "url('/assets/media/svg/illustrations/easy/2.svg')" }}
          />
        </div>
        <div className="text-center">
          <Button className="me-2">View App</Button>
          <Button variant="light">New Product</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default React.forwardRef(EngageWidget1);
