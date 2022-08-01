import { Icon } from '@asany/icons';

import { Card } from '@/metronic';

function ProjectFinance() {
  return (
    <Card className="h-100" bodyClassName="p-9">
      <div className="fs-2hx fw-bolder">$3,290.00</div>
      <div className="fs-4 fw-bold text-gray-400 mb-7">Project Finance</div>
      <div className="fs-6 d-flex justify-content-between mb-4">
        <div className="fw-bold">Avg. Project Budget</div>
        <div className="d-flex fw-bolder">
          <Icon name="Duotune/arr007" className="svg-icon-3 me-1 svg-icon-success" />
          $6,570
        </div>
      </div>
      <div className="separator separator-dashed" />
      <div className="fs-6 d-flex justify-content-between my-4">
        <div className="fw-bold">Lowest Project Check</div>
        <div className="d-flex fw-bolder">
          <Icon name="Duotune/arr006" className="svg-icon-3 me-1 svg-icon-danger" />
          $408
        </div>
      </div>
      <div className="separator separator-dashed" />
      <div className="fs-6 d-flex justify-content-between mt-4">
        <div className="fw-bold">Ambassador Page</div>
        <div className="d-flex fw-bolder">
          <Icon name="Duotune/arr007" className="svg-icon-3 me-1 svg-icon-success" />
          $920
        </div>
      </div>
    </Card>
  );
}

export default ProjectFinance;
