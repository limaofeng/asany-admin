import { ContentWrapper } from '@/layouts/components';

import TicketList from '../components/TicketList';

function TicketListView() {
  return (
    <ContentWrapper
      header={{
        title: '服务单管理',
      }}
    >
      <TicketList where={{}} />
    </ContentWrapper>
  );
}

export default TicketListView;
