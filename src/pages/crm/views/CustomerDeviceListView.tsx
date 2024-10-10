import { useParams } from 'react-router';

import { ContentWrapper } from '@/layouts/components';
import DeviceList, { ColumnName } from '@/pages/pim/components/DeviceList';

function CustomerDeviceListView() {
  const params = useParams();

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
          ColumnName.customerStore,
          ColumnName.warrantyStatus,
          ColumnName.createdAt,
          ColumnName.action,
        ]}
        where={{
          customer: params.id,
        }}
      />
    </ContentWrapper>
  );
}

export default CustomerDeviceListView;
