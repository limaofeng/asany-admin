import { ContentWrapper } from '@/layouts/components';

import DeviceList, { ColumnName } from '../components/DeviceList';

function DeviceListView() {
  return (
    <ContentWrapper
      header={{
        title: '设备列表',
      }}
    >
      <DeviceList
        columns={[
          ColumnName.sn,
          ColumnName.name,
          ColumnName.customer,
          ColumnName.customerStore,
          ColumnName.warrantyStatus,
          ColumnName.createdAt,
          ColumnName.action,
        ]}
        where={{}}
      />
    </ContentWrapper>
  );
}

export default DeviceListView;
