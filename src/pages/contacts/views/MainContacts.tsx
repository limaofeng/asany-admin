import { Outlet } from 'react-router-dom';

import { ContentWrapper } from '@/layouts/components';

function MainContacts() {
  return (
    <ContentWrapper
      className="app-contacts-main"
      contentClassName="ms-0 me-0 mw-100"
      footer={false}
      header={false}
    >
      <Outlet />
    </ContentWrapper>
  );
}

export default MainContacts;
