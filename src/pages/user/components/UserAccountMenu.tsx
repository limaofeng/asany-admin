import { useCallback, useMemo, useState } from 'react';

import { useCurrentuser } from 'umi';
import { Emoji } from 'emoji-mart';
import Icon from '@asany/icons';

import EditStatusModal from './EditStatusModal';
import { handleBackgroundImage } from './utils';

import { Button, Symbol } from '@/pages/Metronic/components';

function UserAccountMenu() {
  const user = useCurrentuser();

  const [editStatusModalVisible, setEditStatusModalVisible] = useState(false);

  const handleUserStatus = useCallback(() => {
    setEditStatusModalVisible(true);
  }, []);

  const handleCloseEditStatusModal = useCallback(() => {
    setEditStatusModalVisible(false);
  }, []);

  const emoji = ''; // 'smiley';

  const icon = useMemo(() => {
    if (!emoji) {
      return <Icon name="Bootstrap/emoji-smile" />;
    }
    return <Emoji emoji={emoji} backgroundImageFn={handleBackgroundImage} size={20} />;
  }, [emoji]);

  return (
    <div className="user-account-menu menu menu-column menu-rounded menu-gray-700 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px">
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
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
        </div>
      </div>
      <div className="separator my-2" />
      <div className="menu-item px-5 my-0 user-status-details">
        <div onClick={handleUserStatus} className="menu-content d-flex align-items-center">
          <Button className="user-status-header" variant={false} size="sm" icon={icon} />
          <span className="user-status-message">用户状态</span>
        </div>
        <EditStatusModal visible={editStatusModalVisible} onClose={handleCloseEditStatusModal} />
      </div>
      <div className="separator my-2" />
      <div className="menu-item px-5 my-0">
        <a href="../../demo7/dist/account/overview.html" className="menu-link px-5">
          个人中心
        </a>
      </div>
      <div className="separator my-2" />
      <div className="menu-item px-5 my-0">
        <a href="../../demo7/dist/account/settings.html" className="menu-link px-5">
          使用手册
        </a>
      </div>
      <div className="menu-item px-5 my-0">
        <a href="../../demo7/dist/account/settings.html" className="menu-link px-5">
          偏好设置
        </a>
      </div>
      <div className="menu-item px-5 my-0">
        <a
          href="../../demo7/dist/authentication/flows/basic/sign-in.html"
          className="menu-link px-5"
        >
          退出登录
        </a>
      </div>
      <div className="separator my-2" />
      <div className="menu-item px-5 my-0">
        <div className="menu-content px-5">
          <label
            className="form-check form-switch form-check-custom form-check-solid pulse pulse-success"
            htmlFor="kt_user_menu_dark_mode_toggle"
          >
            <input
              className="form-check-input w-30px h-20px"
              type="checkbox"
              value="1"
              name="mode"
            />
            <span className="pulse-ring ms-n1" />
            <span className="form-check-label text-gray-600 fs-7">深色模式</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default UserAccountMenu;
