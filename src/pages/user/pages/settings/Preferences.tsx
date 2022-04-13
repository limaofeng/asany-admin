import { ContentWrapper } from '@/layouts/components';

function Preferences() {
  return (
    <ContentWrapper header={{ title: '编辑个人资料' }} footer={false}>
      Notifications
    </ContentWrapper>
  );
}

export default Preferences;
