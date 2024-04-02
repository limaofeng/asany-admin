import { Link } from 'umi';

import { useOrganizationsQuery } from '../../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card, Empty, Symbol } from '@/metronic';
import type { Organization } from '@/types';
import { getFileThumbnailUrlById } from '@/utils';

type OrganizationItemProps = {
  data: Organization;
};

function OrganizationItem(props: OrganizationItemProps) {
  const { data } = props;

  const isOwner = data.role?.code == 'OWNER';

  return (
    <div className="organization-item d-flex align-items-center p-5 border-bottom border-secondary">
      <div className="flex-row-fluid d-flex align-items-center">
        <Symbol.Avatar
          size={40}
          className="me-2"
          src={getFileThumbnailUrlById(data?.logo?.id, { size: '300x300' })}
          alt={data.name}
        />
        <Link
          to={`/organizations/${data.code}`}
          className="fw-bolder text-primary ms-2"
        >
          {data.name}
        </Link>
        <span className="ms-2 text-small text-gray-700">
          {isOwner ? '所有者' : '成员'}
        </span>
      </div>
      <div className="organization-item-actions">
        {isOwner && (
          <Button
            to={`/organizations/${data.code}/settings/profile`}
            as={Link}
            size="sm"
            className="ms-2"
            type="solid"
          >
            设置
          </Button>
        )}
        <Button size="sm" className="ms-2" type="solid">
          离开组织
        </Button>
      </div>
    </div>
  );
}

function Organizations() {
  const { data, loading } = useOrganizationsQuery({
    fetchPolicy: 'cache-and-network',
  });

  const organizations = data?.organizations || [];

  return (
    <ContentWrapper className="page-settings-organizations" footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>组织</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="rounded border border-secondary w-800px">
            {!organizations.length && (
              <Empty
                title={loading ? '加载中...' : '您没有加入任何组织'}
                description={loading ? '稍等一会,正在获取数据' : undefined}
              />
            )}
            {organizations.map((item) => (
              <OrganizationItem data={item as Organization} key={item.id} />
            ))}
          </div>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default Organizations;
