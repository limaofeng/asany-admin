import type { FC } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// import { ExclamationCircleFilled, LoadingOutlined } from '@ant-design/icons';
// import { Spin } from 'antd';
import { useInViewport, useLongPress } from 'ahooks';
import classnames from 'classnames';
import {
  ConversationItem,
  MessageItem,
} from 'open-im-sdk-wasm/lib/types/entity';
import { MessageType } from 'open-im-sdk-wasm/lib/types/enum';

import { Symbol } from '@/metronic';
import { IMSDK } from '@/models/open-im/auth';
import { isSingleCve } from '@/models/open-im/utils';
import { ATSTATEUPDATE, MUTILMSGCHANGE } from '@/models/open-im/utils/constant';
import events from '@/models/open-im/utils/events';

import MsgMenu from './MsgMenu';
import SwitchMsgType from './SwitchMsgType';

// import { isSingleCve } from '@/utils/open-im/utils/im';
// import { ATSTATEUPDATE, MUTILMSGCHANGE } from '@/utils/open-im/constants/events';
// import events from '@/utils/open-im/events';

type MsgItemProps = {
  msg: MessageItem;
  selfID: string;
  curCve: ConversationItem;
  mutilSelect?: boolean;
  audio: React.RefObject<HTMLAudioElement>;
  className?: string;
};

const canSelectTypes: number[] = [
  MessageType.TextMessage,
  MessageType.AtTextMessage,
  MessageType.PictureMessage,
  MessageType.VideoMessage,
  MessageType.VoiceMessage,
  MessageType.CardMessage,
  MessageType.FileMessage,
  MessageType.LocationMessage,
];

const MsgItem: FC<MsgItemProps> = (props) => {
  const { msg, selfID, curCve, mutilSelect, className } = props;

  const [lastChange, setLastChange] = useState(false);
  const avaRef = useRef<HTMLDivElement>(null);
  const msgItemRef = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(msgItemRef);

  const isSelf = useMemo(() => selfID === msg.sendID, [selfID, msg.sendID]);
  const isGroupCve = useMemo(() => !curCve || !isSingleCve(curCve), [curCve]);

  useEffect(() => {
    if (lastChange) {
      setLastChange(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutilSelect]);

  const markC2CHasRead = (userID: string, msgID: string) => {
    msg.isRead = true;
    IMSDK.markC2CMessageAsRead({ userID, msgIDList: [msgID] });
  };

  useEffect(() => {
    if (inViewport && curCve.userID === msg.sendID && !msg.isRead) {
      markC2CHasRead(msg.sendID, msg.clientMsgID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewport, curCve]);

  // const antIcon = <></>; // <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const switchTip = useCallback(() => {
    switch (msg.status) {
      case 1:
        return <>loading...</>; // <Spin indicator={antIcon} />;
      case 2:
        if (curCve && isSingleCve(curCve)) {
          return msg.isRead ? '已读' : '未读';
        }
        return null;
      case 3:
        return <></>; //<ExclamationCircleFilled style={{ color: '#f34037', fontSize: '20px' }} />;
      default:
        return null;
    }
  }, [curCve, msg.isRead, msg.status]);

  const mutilCheckItem = () => {
    if (mutilSelect && canSelectTypes.includes(msg.contentType)) {
      events.emit(MUTILMSGCHANGE, !lastChange, msg);
      setLastChange((v) => !v);
    }
  };

  const avatarLongPress = () => {
    if (!isSingleCve(curCve!)) {
      events.emit(ATSTATEUPDATE, msg.sendID, msg.senderNickname);
    }
  };

  useLongPress(avatarLongPress, avaRef, {
    onClick: () => {
      // window.userClick(msg.sendID);
    },
    delay: 500,
  });

  return (
    <div
      ref={msgItemRef}
      onClick={mutilCheckItem}
      // className={`chat_bg_msg ${isSelf(msg.sendID) ? 'chat_bg_omsg' : ''}`}
      className={classnames('msg-item d-flex mb-10', className, {
        'justify-content-start': !isSelf,
        'justify-content-end': isSelf,
        'mt-4': isSelf,
      })}
    >
      <div
        className={classnames('d-flex align-items-start', {
          'flex-column': isGroupCve,
          'flex-row-reverse': isSelf && !isGroupCve,
          'flex-row': !isSelf && !isGroupCve,
        })}
      >
        <div className={classnames('d-flex align-items-center mb-2')}>
          <Symbol.Avatar
            className={classnames({
              'me-4': !isSelf && !isGroupCve,
              'ms-4': isSelf && !isGroupCve,
            })}
            light
            size={40}
            alt={msg.senderNickname}
            src={msg.senderFaceUrl}
          />
          {isGroupCve && (
            <div className="ms-3">
              <a
                href="#"
                className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
              >
                {msg.senderNickname}
              </a>
              <span className="text-muted fs-7 mb-1">2 mins</span>
            </div>
          )}
        </div>
        <div
          className={classnames(
            'msg-item-content rounded text-dark fw-semibold mw-lg-400px text-start',
            {
              'bg-light-info': !isSelf,
              'bg-light-primary': isSelf,
            },
          )}
        >
          <MsgMenu key={msg.clientMsgID} msg={msg} isSelf={isSelf}>
            <SwitchMsgType {...props} />
          </MsgMenu>
          {isSelf && (
            <div
              style={{
                color: msg.isRead ? '#999' : '#428BE5',
                // marginTop: curCve && isSingleCve(curCve) ? '0' : '24px',
              }}
              className="self_msg_chat_flag"
            >
              {switchTip()}
            </div>
          )}
        </div>
      </div>
      {/* {mutilSelect && (
        <div style={switchStyle()} className="chat_bg_msg_check">
          <Checkbox disabled={!canSelectTypes.includes(msg.contentType)} checked={lastChange} />
        </div>
      )} */}
    </div>
  );
};

export default MsgItem;
