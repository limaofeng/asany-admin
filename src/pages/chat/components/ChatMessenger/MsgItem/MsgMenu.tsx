import type { FC } from 'react';
import { useCallback, useMemo } from 'react';

// import { message, Modal, Popover } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import type { MessageItem } from 'open-im-sdk/types';
import { Icon } from '@asany/icons';
import classnames from 'classnames';

import events from '@/utils/open-im/events';
import {
  // DELETEMESSAGE,
  FORWARDANDMERMSG,
  MUTILMSG,
  REPLAYMSG,
  REVOKEMSG,
} from '@/utils/open-im/constants/events';
import { im } from '@/models/open-im/auth';
import { downloadFileUtil } from '@/utils/open-im/utils/common';
import { messageTypes } from '@/utils/open-im/constants/messageContentType';
import { Menu, Popover } from '@/metronic';

const canCpTypes = [messageTypes.TEXTMESSAGE, messageTypes.ATTEXTMESSAGE];
const canDownloadTypes = [
  messageTypes.PICTUREMESSAGE,
  messageTypes.VIDEOMESSAGE,
  messageTypes.FILEMESSAGE,
];

type MsgMenuProps = {
  visible: boolean;
  msg: MessageItem;
  isSelf: boolean;
  children: React.ReactNode;
  visibleChange: (v: boolean) => void;
};

const message = {
  error(msg: string, err: Error) {
    console.log(msg, err);
  },
};

const MsgMenu: FC<MsgMenuProps> = ({ msg, isSelf, children }) => {
  const canHiddenTypes = ['Copy', 'Translate', 'Reply', 'Forward'];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const forwardMsg = () => {
    events.emit(FORWARDANDMERMSG, 'forward', JSON.stringify(msg));
  };

  const mutilMsg = () => {
    events.emit(MUTILMSG, true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const replayMsg = () => {
    events.emit(REPLAYMSG, msg);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const revMsg = () => {
    im.revokeMessage(JSON.stringify(msg))
      .then((res) => {
        events.emit(REVOKEMSG, msg.clientMsgID);
        console.log('res', res);
      })
      .catch((err) => message.error('RevokeMessageFailed', err));
  };

  // const delMsg = useCallback(() => {
  //   im.deleteMessageFromLocalStorage(JSON.stringify(msg))
  //     .then((res) => {
  //       events.emit(DELETEMESSAGE, msg.clientMsgID);
  //       console.log('res', res);
  //     })
  //     .catch((err) => message.error('DeleteMessageFailed', err));
  // }, [msg]);

  const delComfirm = () => {
    // Modal.confirm({
    //   title: 'DeleteMessage',
    //   content: 'DeleteMessageConfirm',
    //   okButtonProps: {
    //     type: 'primary',
    //   },
    //   okType: 'danger',
    //   onOk: delMsg,
    // });
  };

  const downloadFile = useCallback(() => {
    let downloadUrl = '';
    switch (msg.contentType as number) {
      case messageTypes.PICTUREMESSAGE:
        downloadUrl = msg.pictureElem.sourcePicture.url;
        break;
      case messageTypes.VIDEOMESSAGE:
        downloadUrl = msg.videoElem.videoUrl;
        break;
      case messageTypes.FILEMESSAGE:
        downloadUrl = msg.fileElem.sourceUrl;
        break;
      default:
        break;
    }
    const idx = downloadUrl.lastIndexOf('/');
    const fileName = downloadUrl.slice(idx + 1);
    downloadFileUtil(downloadUrl, fileName);
  }, [
    msg.contentType,
    msg.fileElem?.sourceUrl,
    msg.pictureElem?.sourcePicture?.url,
    msg.videoElem?.videoUrl,
  ]);

  const menus = useMemo(
    () => [
      {
        id: 'Translate',
        title: '翻译',
        icon: 'Bootstrap/translate',
        method: () => {},
        hidden: true,
      },
      {
        id: 'Forward',
        title: '转发',
        icon: 'Bootstrap/arrow-up-right-square',
        method: forwardMsg,
        hidden: false,
      },
      {
        id: 'Copy',
        title: '复制',
        icon: 'Bootstrap/clipboard2',
        method: () => {},
        hidden: false,
      },
      {
        id: 'Multiple',
        title: '多选',
        icon: 'Bootstrap/list-check',
        method: mutilMsg,
        hidden: false,
      },
      {
        id: 'Reply',
        title: '引用',
        icon: 'Bootstrap/chat-quote',
        method: replayMsg,
        hidden: false,
      },
      {
        id: 'Revoke',
        title: '撤回',
        icon: 'Bootstrap/arrow-90deg-down',
        method: revMsg,
        hidden: false,
      },
      {
        id: 'Delete',
        title: '删除',
        icon: 'Bootstrap/trash',
        method: delComfirm,
        hidden: false,
      },
      {
        id: 'Download',
        title: '下载',
        icon: 'Bootstrap/download',
        method: downloadFile,
        hidden: false,
      },
    ],
    [downloadFile, forwardMsg, replayMsg, revMsg],
  );

  const switchMenu = (menu: typeof menus[0]) => {
    if (!canCpTypes.includes(msg.contentType as number) && canHiddenTypes.includes(menu.id)) {
      menu.hidden = true;
    }

    if (menu.id === 'Download' && !canDownloadTypes.includes(msg.contentType as number)) {
      menu.hidden = true;
    }

    if (!isSelf && menu.id === 'Revoke') {
      menu.hidden = true;
    }

    return menu.hidden ? null : menu.id === 'Copy' ? (
      <Menu.Item
        key={menu.id}
        icon={<Icon name={menu.icon} className="svg-icon-6" />}
        className="px-3"
      >
        <CopyToClipboard
          key={menu.title}
          onCopy={() => {
            /*message.success('复制成功！')*/
          }}
          text={
            (msg.contentType as number) === messageTypes.ATTEXTMESSAGE
              ? msg.atElem.text
              : msg.content
          }
        >
          <div onClick={menu.method} className="msg_menu_iem">
            <span>{menu.title}</span>
          </div>
        </CopyToClipboard>
      </Menu.Item>
    ) : (
      <Menu.Item
        key={menu.id}
        icon={<Icon name={menu.icon} className="svg-icon-6" />}
        className="px-3"
      >
        {menu.title}
      </Menu.Item>
    );
  };

  //   <div key={menu.title} onClick={menu.method} className="msg_menu_iem">
  //   <img src={menu.icon} />
  //   <span>{menu.title}</span>
  // </div>

  // const PopContent = () => {
  //   return <div onClick={() => visibleChange(false)}>{menus.map((m) => switchMenu(m))}</div>;
  // };

  return (
    <Popover
      trigger="contextMenu"
      content={
        <Menu className="menu-sub show menu-sub-dropdown show menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-2">
          {menus.map(switchMenu)}
        </Menu>
      }
      overlayClassName="overlay-no-arrow msg_item_menu_popover"
    >
      <div
        className={classnames('chat_bg_msg_content py-4', {
          'ps-4 pe-8': !isSelf,
          'ps-8 pe-4': isSelf,
        })}
      >
        {children}
      </div>
    </Popover>
  );
};

export default MsgMenu;
