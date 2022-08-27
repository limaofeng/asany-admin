import { Icon } from '@asany/icons';

import { Button } from '@/metronic';

function ProjectToolbar() {
  return (
    <>
      <div className="d-flex ms-3">
        <Button
          variant={false}
          color="gray-700"
          className="btn-flex flex-center bg-body btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
          icon={<Icon name="Duotune/arr075" className="svg-icon-2 svg-icon-primary me-0 me-md-2" />}
        >
          <span className="d-none d-md-inline">新增任务</span>
        </Button>
      </div>
      <div className="d-flex ms-3">
        <Button
          variant={false}
          color="gray-700"
          className="btn-flex flex-center bg-body btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
          icon={<Icon name="Duotune/arr075" className="svg-icon-2 svg-icon-primary me-0 me-md-2" />}
        >
          <span className="d-none d-md-inline">新增项目</span>
        </Button>
      </div>
    </>
  );
}

export default ProjectToolbar;
