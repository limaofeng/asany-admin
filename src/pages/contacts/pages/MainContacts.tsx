import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import UserList from '../components/UserList';
import NoContacts from '../components/NoContacts';

import { ContentWrapper } from '@/pages/Metronic/components';

function MainContacts() {
  return (
    <ContentWrapper className="app-contacts-main" footer={false} header={false}>
      <div className="content-body row g-7">
        <div className="col-lg-6 col-xl-3">
          <UserList />
        </div>
        <OverlayScrollbarsComponent
          className="col-xl-9 content-view-details custom-scrollbar"
          options={{
            scrollbars: { autoHide: 'scroll' },
          }}
        >
          <NoContacts />
        </OverlayScrollbarsComponent>
      </div>
    </ContentWrapper>
  );
}

export default MainContacts;
