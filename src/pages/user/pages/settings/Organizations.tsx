import { Link } from 'umi';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card } from '@/metronic';
import { useHolder } from '@/metronic/hooks';

function OrganizationItem() {
  const imgRef = useHolder();

  return (
    <div className="organization-item d-flex align-items-center p-5 border-bottom border-secondary">
      <div className="flex-row-fluid d-flex align-items-center">
        <img ref={imgRef} src="" data-src={`image.holder.js/20x20?theme=gray`} />
        <Link to="/organizations/w-asany" className="fw-bolder text-primary ms-2">
          组织名称
        </Link>
        <span className="ms-2 text-small text-gray-700">所有人 / 成员</span>
      </div>
      <div className="organization-item-actions">
        <Button
          to="/organizations/w-asany/settings/profile"
          as={Link}
          size="sm"
          className="ms-2"
          type="solid"
        >
          设置
        </Button>
        <Button size="sm" className="ms-2" type="solid">
          离开组织
        </Button>
      </div>
    </div>
  );
}

function Organizations() {
  return (
    <ContentWrapper className="page-settings-organizations" footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>组织</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="rounded border border-secondary w-800px">
            <OrganizationItem />
            <OrganizationItem />
            <OrganizationItem />
            <OrganizationItem />
            <OrganizationItem />
          </div>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default Organizations;
