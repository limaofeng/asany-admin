import '@/metronic';
import '@/pages/calendar/hooks';
import '@/pages/cms/hooks';
import '@/pages/contacts/hooks';
import '@/pages/drive/hooks';
import '@/pages/mail/hooks';
import '@/pages/user/hooks';
import '@/pages/website/hooks';
import '@/pages/chat/hooks';
import '@/utils';
import '@/utils/hooks';

function PageLoading() {
  return <div style={{ display: 'none', flex: 1 }}>loading...</div>;
}

export default PageLoading;
