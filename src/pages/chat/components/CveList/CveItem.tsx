import { useCallback } from 'react';

import type { ConversationItem, MessageItem } from 'open-im-sdk/types';
import { useModel } from 'umi';
import classnames from 'classnames';

import { formatDate } from '../../../../utils/open-im/utils/common';

import { parseMessageType } from '@/utils/open-im/utils/im';
import { OptType } from '@/utils/open-im/sdk/types';
import { Badge, Symbol } from '@/metronic';

type CveItemProps = {
  curCve: ConversationItem | null;
  data: ConversationItem;
  cveList: ConversationItem[];
  onClick: (item: ConversationItem) => void;
};

function CveItem(props: CveItemProps) {
  const { data: cve, onClick, curCve } = props;

  const curUid = useModel('@@initialState', (state) => state.initialState?.currentUser?.uid);

  const parseLatestMsg = (lmsg: string): React.ReactNode => {
    if (lmsg === '') return lmsg;
    const pmsg: MessageItem = JSON.parse(lmsg);

    if (cve.draftText !== '') {
      let text = cve.draftText;
      const pattern = /\<img.*?\">/g;
      const matchArr = text.match(pattern);
      if (matchArr && matchArr.length > 0) {
        matchArr.map((matchRes) => {
          text = text.replaceAll(matchRes, 'Picture');
        });
      }
      return (
        <>
          <span className="text-warning me-1">[草稿]</span>
          {text}
        </>
      );
    }
    return parseMessageType(pmsg, curUid);
  };

  const isRecv = (opt: OptType) => opt === OptType.Nomal;

  const parseLastMessage = isRecv(cve?.recvMsgOpt)
    ? parseLatestMsg(cve.latestMsg)
    : cve.unreadCount > 0
    ? `[${cve.unreadCount + 'Piece'}] ${parseLatestMsg(cve.latestMsg)}`
    : parseLatestMsg(cve.latestMsg);

  const parseLatestTime = (ltime: number): string => {
    const sendArr = formatDate(ltime);
    const dayArr = formatDate(ltime + 86400000);
    const curArr = formatDate(new Date().getTime());
    if (sendArr[3] === curArr[3]) {
      return sendArr[4] as string;
    } else if (dayArr[3] === curArr[3]) {
      return '昨天';
    } else {
      return sendArr[3] as string;
    }
  };

  const handleClick = useCallback(() => {
    onClick(cve);
  }, [cve, onClick]);

  // console.log('data-time', parseLatestTime(cve.latestMsgSendTime));
  // console.log('unreadCount', isRecv(cve?.recvMsgOpt), cve.unreadCount);

  return (
    <div
      className={classnames('cve-item d-flex flex-stack py-4 mb-1', {
        active: curCve?.conversationID == cve.conversationID,
      })}
      onClick={handleClick}
    >
      <div className="d-flex align-items-center">
        <Symbol.Avatar
          size={45}
          alt={cve.showName}
          light
          badge={
            <Badge
              dot={!isRecv(cve?.recvMsgOpt) && cve.unreadCount > 0}
              color="danger"
              shape="circle"
              className="start-100"
              count={isRecv(cve?.recvMsgOpt) ? cve.unreadCount : null}
            />
          }
        />
        <div className="ms-5">
          <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
            {cve.showName}
          </a>
          <div className="fw-semibold text-muted cve_msg">{parseLastMessage}</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end ms-2">
        <span className="text-muted fs-7 mb-1">{parseLatestTime(cve.latestMsgSendTime)}</span>
      </div>
    </div>
  );
}

export default CveItem;
