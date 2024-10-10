import { useParams } from 'react-router';

import { ContentWrapper } from '@/layouts/components';
import TicketList from '@/pages/crm/components/TicketList';

function CustomerTicketListView() {
  const params = useParams();
  return (
    <ContentWrapper
      header={{
        title: '服务单管理',
      }}
    >
      <TicketList
        where={{
          customerId: params.id,
        }}
      />
    </ContentWrapper>
  );
}

export default CustomerTicketListView;
