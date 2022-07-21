import React from 'react';
import type { CSSProperties } from 'react';

import { Card, Input, Select2 } from '@/metronic';

type TableWidget4Props = {
  animated: any;
  className: string;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

function TableWidget4(props: TableWidget4Props, ref: any) {
  return (
    <Card
      {...props.animated}
      className={props.className}
      flush
      style={props.style}
      ref={ref || props.onRefReady}
    >
      <Card.Header className="pt-7">
        <Card.Title className=" align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">Product Orders</span>
          <span className="text-gray-400 mt-1 fw-bold fs-6">Avg. 57 orders per day</span>
        </Card.Title>
        <Card.Toolbar>
          <div className="d-flex flex-stack flex-wrap gap-4">
            <div className="d-flex align-items-center fw-bolder">
              <div className="text-muted fs-7 me-2">Cateogry</div>
              <Select2
                width="100%"
                placeholder="Select an option"
                selectClassName="text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto"
                dropdownClassName="w-150px"
                options={[
                  {
                    value: 'Show All',
                    label: 'Show All',
                  },
                  {
                    value: 'a',
                    label: 'Category A',
                  },
                  {
                    value: 'b',
                    label: 'Category B',
                  },
                ]}
              />
            </div>
            <div className="d-flex align-items-center fw-bolder">
              <div className="text-muted fs-7 me-2">Status</div>
              <Select2
                width="100%"
                placeholder="Select an option"
                selectClassName="text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto"
                dropdownClassName="w-150px"
                options={[
                  {
                    value: 'Show All',
                    label: 'Show All',
                  },
                  {
                    value: 'Shipped',
                    label: 'Shipped',
                  },
                  {
                    value: 'Confirmed',
                    label: 'Confirmed',
                  },
                  {
                    value: 'Rejected',
                    label: 'Rejected',
                  },
                  {
                    value: 'Pending',
                    label: 'Pending',
                  },
                ]}
              />
            </div>
            <Input.Search placeholder="Search" className="w-150px fs-7 ps-12" />
            {/*begin::Search
            <div className="position-relative my-1">
              <Icon
                name="Duotune/gen021"
                className="svg-icon-2 position-absolute top-50 translate-middle-y ms-4"
              />
              <input
                type="text"
                data-kt-table-widget-4="search"
                className="form-control w-150px fs-7 ps-12"
                placeholder="Search"
              />
            </div>*/}
          </div>
        </Card.Toolbar>
      </Card.Header>
    </Card>
  );
}

export default React.forwardRef(TableWidget4);
