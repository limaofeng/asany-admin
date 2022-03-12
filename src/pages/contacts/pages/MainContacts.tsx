import UserList from '../components/UserList';
import NoContacts from '../components/NoContacts';

import { ContentWrapper } from '@/pages/Metronic/components';

function MainContacts() {
  return (
    <ContentWrapper className="main-contacts" header={{ title: '通讯录' }}>
      <div className="content-body row g-7">
        <div className="col-lg-6 col-xl-3">
          <UserList />
        </div>
        <div className="col-xl-6">
          <NoContacts />
        </div>
        <div className="col-lg-6 col-xl-3">sdfsdfsdf111</div>
      </div>
    </ContentWrapper>
  );
}

export default MainContacts;
