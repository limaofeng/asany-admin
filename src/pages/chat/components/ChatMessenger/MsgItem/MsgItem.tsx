import type { FC } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import React, { useEffect, useRef, useState } from 'react';

// import { ExclamationCircleFilled, LoadingOutlined } from '@ant-design/icons';
// import { Spin } from 'antd';
import { useInViewport, useLongPress } from 'ahooks';
import type { ConversationItem, MessageItem } from 'open-im-sdk/types';
import classnames from 'classnames';
import { isEqual } from 'lodash';

import MsgMenu from './MsgMenu';
import SwitchMsgType from './SwitchMsgType';

import { im } from '@/models/open-im/auth';
import { isSingleCve } from '@/utils/open-im/utils/im';
import { ATSTATEUPDATE, MUTILMSGCHANGE } from '@/utils/open-im/constants/events';
import events from '@/utils/open-im/events';
import { Symbol } from '@/metronic';
import { messageTypes } from '@/utils/open-im/constants/messageContentType';

type MsgItemProps = {
  msg: MessageItem;
  selfID: string;
  audio: React.RefObject<HTMLAudioElement>;
  curCve: ConversationItem;
  mutilSelect?: boolean;
};

const canSelectTypes: number[] = [
  messageTypes.TEXTMESSAGE,
  messageTypes.ATTEXTMESSAGE,
  messageTypes.PICTUREMESSAGE,
  messageTypes.VIDEOMESSAGE,
  messageTypes.VOICEMESSAGE,
  messageTypes.CARDMESSAGE,
  messageTypes.FILEMESSAGE,
  messageTypes.LOCATIONMESSAGE,
];

const MsgItem: FC<MsgItemProps> = (props) => {
  const { msg, selfID, curCve, mutilSelect, audio } = props;

  const [lastChange, setLastChange] = useState(false);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const avaRef = useRef<HTMLDivElement>(null);
  const msgItemRef = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(msgItemRef);

  const isSelf = useMemo(() => selfID == msg.sendID, [selfID, msg.sendID]);
  const isGroupCve = useMemo(() => !curCve || !isSingleCve(curCve), [curCve]);

  console.log('audio', audio);

  useEffect(() => {
    if (lastChange) {
      setLastChange(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutilSelect]);

  const markC2CHasRead = (userID: string, msgID: string) => {
    msg.isRead = true;
    im.markC2CMessageAsRead({ userID, msgIDList: [msgID] });
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
          return msg.isRead ? 'Readed' : 'UnRead';
        }
        return null;
      case 3:
        return <></>; //<ExclamationCircleFilled style={{ color: '#f34037', fontSize: '20px' }} />;
      default:
        return null;
    }
  }, [curCve, msg.isRead, msg.status]);

  // const switchStyle = useCallback(() => {
  //   if (isSelf) {
  //     return {
  //       marginLeft: '12px',
  //     };
  //   } else {
  //     return {
  //       marginRight: '12px',
  //     };
  //   }
  // }, []);

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
      className={classnames('d-flex justify-content-start mb-10', {
        'justify-content-start': !isSelf,
        'justify-content-end': isSelf,
      })}
    >
      <div
        className={classnames('d-flex', {
          'flex-column': isGroupCve,
          'flex-row': !isGroupCve,
          'align-items-start': !isSelf,
          'align-items-end': isSelf,
        })}
      >
        <div className="d-flex align-items-center mb-2">
          <Symbol.Avatar
            className={classnames({
              'me-4': !isGroupCve,
            })}
            size={40}
            alt={msg.senderNickname}
            src={msg.senderFaceUrl}
          />
          {isGroupCve && (
            <div className="ms-3">
              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">
                {msg.senderNickname}
              </a>
              <span className="text-muted fs-7 mb-1">2 mins</span>
            </div>
          )}
        </div>
        <div className="rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start">
          <MsgMenu
            key={msg.clientMsgID}
            visible={contextMenuVisible}
            msg={msg}
            isSelf={isSelf}
            visibleChange={(v) => setContextMenuVisible(v)}
          >
            <SwitchMsgType {...props} />
          </MsgMenu>
          {isSelf && (
            <div
              style={{
                color: msg.isRead ? '#999' : '#428BE5',
                marginTop: curCve && isSingleCve(curCve) ? '0' : '24px',
              }}
              className="chat_bg_flag"
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

export default React.memo(MsgItem, isEqual);