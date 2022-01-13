import { AsideWorkspace, Button, Menu } from '@/pages/Metronic/components';

function Sidebar() {
  return (
    <AsideWorkspace>
      <div className="m-0 mt-6">
        <Button className="email-compose mb-6 mx-5" size="sm">
          写信
        </Button>
      </div>
      <Menu
        className="cms-menu-sider menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-3 my-5 my-lg-0"
        accordion={false}
        selectable="AllMenu"
      >
        <Menu.Item url="/email/inbox" icon="Duotune/com010" key="INBOX">
          收件箱
        </Menu.Item>
        <Menu.Section>文件夹</Menu.Section>
        <Menu.Item url="/email/sent" icon="Duotune/gen016" key="Sent">
          已发送
        </Menu.Item>
        <Menu.Item url="/email/drafts" icon="Duotune/fil004" key="Drafts">
          草稿
        </Menu.Item>
        <Menu.Item url="/email/archive" icon="Duotune/fil025" key="Archive">
          归档
        </Menu.Item>
        <Menu.Item url="/email/spam" icon="Duotune/fil015" key="Spam">
          垃圾邮件
        </Menu.Item>
      </Menu>
    </AsideWorkspace>
  );
}

export default Sidebar;
