import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';
import { useCopyToClipboard } from 'react-use';

import { MessageType } from 'open-im-sdk-wasm/lib/types/enum';

import {
  DELETEMESSAGE,
  FORWARDANDMERMSG,
  MUTILMSG,
  REPLAYMSG,
  REVOKEMSG,
} from '@/models/open-im/utils/constant';
import events from '@/models/open-im/utils/events';

import { IMSDK } from '@/models/open-im/auth';

// import { downloadFileUtil } from '@/utils/open-im/utils/common';
// import { messageTypes } from '@/models/open-im';
import { Menu, Modal, Popover, Toast } from '@/metronic';
import { MessageItem } from 'open-im-sdk-wasm/lib/types/entity';

const canCpTypes = [MessageType.TextMessage, MessageType.AtTextMessage];
const canDownloadTypes = [
  MessageType.PictureMessage,
  MessageType.VideoMessage,
  MessageType.FileMessage,
];

type MsgMenuProps = {
  msg: MessageItem;
  isSelf: boolean;
  children: React.ReactNode;
};

const MsgMenu: FC<MsgMenuProps> = ({ msg, isSelf, children }) => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);

  const canHiddenTypes = ['Copy', 'Translate', 'Reply', 'Forward'];

  const [, copy] = useCopyToClipboard();

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

  const revMsg = useCallback(() => {
    IMSDK.revokeMessage(JSON.stringify(msg))
      .then((res) => {
        events.emit(REVOKEMSG, msg.clientMsgID);
        console.log('res', res);
      })
      .catch((err) => Toast.error('撤回消息失败！', err));
  }, [msg]);

  const delMsg = useCallback(() => {
    console.log('msg', msg);
    IMSDK.deleteMessageFromLocalStorage(JSON.stringify(msg))
      .then((res) => {
        events.emit(DELETEMESSAGE, msg.clientMsgID);
        console.log('res', res);
      })
      .catch((err) => Toast.error('删除消息失败！' + err.message));
  }, [msg]);

  const delComfirm = useCallback(async () => {
    setContextMenuVisible(false);
    const result = await Modal.confirm({
      title: '删除消息',
      content: (
        <>
          <p className="tip-confirm">确定删除该消息吗？</p>
        </>
      ),
      icon: 'info',
      okText: '删除',
    });
    if (result.isConfirmed) {
      delMsg();
    }
  }, [delMsg]);

  const downloadFile = useCallback(() => {
    let downloadUrl = '';
    switch (msg.contentType as number) {
      case MessageType.PictureMessage:
        downloadUrl = msg.pictureElem.sourcePicture.url;
        break;
      case MessageType.VideoMessage:
        downloadUrl = msg.videoElem.videoUrl;
        break;
      case MessageType.FileMessage:
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
        method: () => {
          const content =
            (msg.contentType as number) === messageTypes.ATTEXTMESSAGE
              ? msg.atElem.text
              : msg.content;
          copy(content);
          Toast.success('复制成功！');
          setContextMenuVisible(false);
        },
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
    [
      copy,
      delComfirm,
      downloadFile,
      forwardMsg,
      msg.atElem.text,
      msg.content,
      msg.contentType,
      replayMsg,
      revMsg,
    ],
  );

  const switchMenu = (menu: (typeof menus)[0]) => {
    if (
      !canCpTypes.includes(msg.contentType as number) &&
      canHiddenTypes.includes(menu.id)
    ) {
      menu.hidden = true;
    }

    if (
      menu.id === 'Download' &&
      !canDownloadTypes.includes(msg.contentType as number)
    ) {
      menu.hidden = true;
    }

    if (!isSelf && menu.id === 'Revoke') {
      menu.hidden = true;
    }

    return (
      !menu.hidden && (
        <Menu.Item
          key={menu.id}
          icon={<Icon name={menu.icon} className="svg-icon-6" />}
          className="px-3"
          onClick={menu.method}
        >
          {menu.title}
        </Menu.Item>
      )
    );
  };

  return (
    <Popover
      trigger="contextMenu"
      visible={contextMenuVisible}
      onVisibleChange={setContextMenuVisible}
      content={
        <Menu className="menu-sub show menu-sub-dropdown show menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-2">
          {menus.map(switchMenu)}
        </Menu>
      }
      overlayClassName="overlay-no-arrow msg_item_menu_popover"
    >
      <div
        className={classnames('chat_bg_msg_content py-3', {
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
