import Sidebar from '../components/Sidebar';

import { ContentWrapper } from '@/pages/Metronic/components';
import AsideSecondary from '@/pages/Metronic/components/Aside/AsideSecondary';

function MainContacts() {
  return (
    <ContentWrapper className="page-full-content main-contacts" header={{ title: '通讯录' }}>
      <div className="aside">
        <AsideSecondary>
          <Sidebar />
        </AsideSecondary>
      </div>
      <div className="content-body">123123</div>
    </ContentWrapper>
  );
}

export default MainContacts;
