import { useCallback, useMemo, useState } from 'react';

import { useCurrentuser } from 'umi';
import { Emoji } from 'emoji-mart';
import Icon from '@asany/icons';

import EditStatusModal from './modals/EditStatusModal';
import { handleBackgroundImage } from './utils';

import { Button, Menu, Symbol } from '@/components/Metronic';

type UserAccountMenuProps = {
  close: () => void;
};

function UserAccountMenu(props: UserAccountMenuProps) {
  const { close } = props;

  const user = useCurrentuser();

  const [editStatusModalVisible, setEditStatusModalVisible] = useState(false);

  const handleUserStatus = useCallback(() => {
    setEditStatusModalVisible(true);
  }, []);

  const handleCloseEditStatusModal = useCallback(() => {
    setEditStatusModalVisible(false);
  }, []);

  const handleClick = useCallback(
    (e) => {
      if (['profile', 'organizations', 'user-guide', 'preferences'].includes(e.key)) {
        close();
      }
    },
    [close],
  );

  const emoji = ''; // 'smiley';

  const icon = useMemo(() => {
    if (!emoji) {
      return <Icon name="Bootstrap/emoji-smile" />;
    }
    return <Emoji emoji={emoji} backgroundImageFn={handleBackgroundImage} size={20} />;
  }, [emoji]);

  return (
    <Menu
      mode="vertical"
      rounded
      className="user-account-menu menu-gray-700 menu-state-bg menu-state-primary fw-bold f-14px py-4 w-275px"
      onClick={handleClick}
    >
      <Menu.Item className="px-3" contentClassName="d-flex align-items-center px-3">
        <Symbol.Avatar size={50} className="me-5" src="/assets/media/avatars/300-1.jpg" />
        <div className="d-flex flex-column">
          <div className="fw-bolder d-flex align-items-center fs-5">
            {user?.name}
            {/* <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span> */}
          </div>
          <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
            {user?.email || 'xx'}
          </a>
        </div>
      </Menu.Item>
      <Menu.Separator />
      <Menu.Item className="px-5 my-0 user-status-details">
        <div onClick={handleUserStatus} className="d-flex align-items-center">
          <Button className="user-status-header" variant={false} icon={icon} />
          <span className="user-status-message">用户状态</span>
        </div>
        <EditStatusModal visible={editStatusModalVisible} onClose={handleCloseEditStatusModal} />
      </Menu.Item>
      <Menu.Separator />
      <Menu.Item key="profile" url="/settings/profile" className="px-5 my-0" linkClassName="px-5">
        个人中心
      </Menu.Item>
      <Menu.Item
        key="organizations"
        url="/settings/organizations"
        className="px-5 my-0"
        linkClassName="px-5"
      >
        我的组织
      </Menu.Item>
      <Menu.Separator />
      <Menu.Item key="user-guide" url="/documentation" className="px-5 my-0" linkClassName="px-5">
        使用手册
      </Menu.Item>
      <Menu.Item
        key="preferences"
        url="/settings/appearance"
        className="px-5 my-0"
        linkClassName="px-5"
      >
        偏好设置
      </Menu.Item>
      <Menu.Separator />
      <Menu.Item key="sign-out" className="px-5 my-0" linkClassName="px-5">
        退出登录
      </Menu.Item>
    </Menu>
  );
}

export default UserAccountMenu;
