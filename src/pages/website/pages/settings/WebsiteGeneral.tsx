import { ContentWrapper } from '@/layouts/components';
import { Breadcrumb } from '@/metronic';

function WebsiteGeneral() {
  return (
    <ContentWrapper
      header={{
        title: '通用设置',
      }}
      breadcrumb={
        <Breadcrumb className="fw-bold fs-base text-muted my-1">
          <Breadcrumb.Item>设置</Breadcrumb.Item>
          <Breadcrumb.Item>通用</Breadcrumb.Item>
        </Breadcrumb>
      }
      loading={false}
      footer={false}
    >
      WebsiteGeneral
    </ContentWrapper>
  );
}

export default WebsiteGeneral;
