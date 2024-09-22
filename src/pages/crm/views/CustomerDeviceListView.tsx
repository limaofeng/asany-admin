import { ContentWrapper } from '@/layouts/components';
import DeviceList, { ColumnName } from '@/pages/pim/components/DeviceList';

function CustomerDeviceListView() {
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
        ]}
      />
    </ContentWrapper>
  );
}

export default CustomerDeviceListView;
