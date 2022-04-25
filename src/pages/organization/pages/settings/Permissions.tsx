import { ContentWrapper } from '@/layouts/components';
import { Table } from '@/metronic';

function Permissions() {
  return (
    <ContentWrapper className="page-organization-settings-permissions" footer={false}>
      <Table
        columns={[
          {
            key: 'name',
            title: '名称',
          },
          {
            key: 'assignedTo',
            title: '分配给',
          },
          {
            key: 'createdAt',
            title: '创建时间',
          },
          {
            key: 'actions',
            title: '操作',
          },
        ]}
        dataSource={[]}
      />
    </ContentWrapper>
  );
}

export default Permissions;
