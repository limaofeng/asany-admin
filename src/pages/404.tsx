import Icon from '@asany/icons';

import { Card } from '@/components/Metronic';

const NoFoundPage: React.FC = () => (
  <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
    <ul className="jstree-container-ul jstree-children">
      <li className="jstree-node jstree-open">
        <i className="jstree-icon jstree-ocl" />
        <a className="jstree-anchor">
          <Icon name="Duotune/fil013" className="svg-icon-2x svg-icon-primary me-4" />
          首页
        </a>
      </li>
      <ul>
        <li>
          <a>
            <Icon name="Duotune/fil013" className="svg-icon-2x svg-icon-primary me-4" />
            首页12
          </a>
        </li>
      </ul>
    </ul>
  </Card>
);

export default NoFoundPage;
