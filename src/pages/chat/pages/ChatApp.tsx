import { useCallback, useEffect, useRef } from 'react';

import { useReactive, useRequest } from 'ahooks';
import type { ConversationItem, MergeElem, MessageItem, WsResponse } from 'open-im-sdk/types';
import { useModel } from 'umi';
import type { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { CveList, SearchBar } from '../components';
import ChatMessenger from '../components/ChatMessenger/ChatMessenger';

import { MicroApp } from '@/layouts/Demo7';
import events from '@/utils/open-im/events';
import { ISSETDRAFT } from '@/utils/open-im/constants/events';
import { im } from '@/models/open-im/auth';
import { isSingleCve } from '@/utils/open-im/utils/im';
import { messageTypes, notOssMessageTypes } from '@/utils/open-im/constants/messageContentType';
import { Toast } from '@/metronic';

import '../style/chat_app.scss';

type NMsgMap = {
  oid: string;
  mid: string;
  flag: boolean;
};

const uuid = () => {
  return (Math.random() * 36).toString(36).slice(2) + new Date().getTime().toString();
};

type ReactiveState = {
  historyMsgList: MessageItem[];
  firstLoad: boolean;
  typing: boolean;
  hasMore: boolean;
  merModal: boolean;
  merData: (MergeElem & { sender: string }) | undefined;
  searchStatus: boolean;
  searchCve: ConversationItem[];
};

function ChatApp() {
  // const [imgGroup, setImgGroup] = useState<string[]>([]);

  const curCve = useModel('open-im.cve', ({ state }) => state.curCve);
  const cveLoading = useModel('open-im.cve', ({ state }) => state.cveInitLoading);
  const setCurCve = useModel('open-im.cve', ({ actions }) => actions.setCurCve);
  const cveList = useModel('open-im.cve', ({ state }) => state.cves);

  const getGroupInfo = useModel('open-im.contacts', ({ actions }) => actions.getGroupInfo);
  const getGroupMemberList = useModel(
    'open-im.contacts',
    ({ actions }) => actions.getGroupMemberList,
  );

  let nMsgMaps: NMsgMap[] = [];

  const rs = useReactive<ReactiveState>({
    historyMsgList: [],
    firstLoad: false,
    typing: false,
    hasMore: true,
    merModal: false,
    merData: undefined,
    searchStatus: false,
    searchCve: [],
  });

  const {
    loading,
    run: getMsg,
    cancel: msgCancel,
  } = useRequest(im.getHistoryMessageList, {
    manual: true,
    onSuccess: handleMsg,
    onError: (err: any) => console.log('GetChatRecordFailed', err),
  });

  const scrollbar = useRef<OverlayScrollbarsComponent>();

  const scrollToBottom = useCallback((duration?: number) => {
    const _scrollbar = scrollbar.current?.osInstance();
    _scrollbar?.scroll([0, '100%'], duration ?? 350);
  }, []);

  function handleMsg(res: WsResponse) {
    if (JSON.parse(res.data).length === 0) {
      rs.hasMore = false;
      return;
    }
    if (
      JSON.stringify(rs.historyMsgList[rs.historyMsgList.length - 1]) ==
      JSON.stringify(JSON.parse(res.data).reverse()[0])
    ) {
      rs.historyMsgList.pop();
    }

    rs.historyMsgList = [...rs.historyMsgList, ...JSON.parse(res.data).reverse()];

    if (!rs.firstLoad) {
      rs.firstLoad = true;
      setTimeout(() => scrollToBottom(0));
    }

    rs.hasMore = !(JSON.parse(res.data).length < 20);
  }

  const getHistoryMsg = useCallback(
    (uid?: string, gid?: string, sMsg?: MessageItem) => {
      console.log('getMsg:::');

      const config = {
        userID: uid ?? '',
        groupID: gid ?? '',
        count: 20,
        startClientMsgID: sMsg?.clientMsgID ?? '',
      };
      getMsg(config);
    },
    [getMsg],
  );

  const markC2CHasRead = useCallback((userID: string, msgIDList: string[]) => {
    im.markC2CMessageAsRead({ userID, msgIDList });
  }, []);

  const markCveHasRead = useCallback(
    (cve: ConversationItem, type?: number) => {
      if (cve.unreadCount === 0 && !type) return;
      if (isSingleCve(cve)) {
        markC2CHasRead(cve.userID, []);
      } else {
        im.markGroupMessageHasRead(cve.groupID);
      }
    },
    [markC2CHasRead],
  );

  const handleCveSearch = useCallback(
    (value: string) => {
      if (value) {
        rs.searchStatus = true;
        rs.searchCve = cveList.filter(
          (c) => c.conversationID.indexOf(value) > -1 || c.showName.indexOf(value) > -1,
        );
      } else {
        rs.searchCve = [];
        rs.searchStatus = false;
      }
    },
    [cveList, rs],
  );

  const getInfo = useCallback(
    (cve: ConversationItem) => {
      if (!isSingleCve(cve)) {
        getGroupInfo(cve.groupID);
        const options = {
          groupID: cve.groupID,
          offset: 0,
          filter: 0,
          count: 2000,
        };
        getGroupMemberList(options);
      }
    },
    [getGroupInfo, getGroupMemberList],
  );

  const handleItemClick = useCallback(
    (cve: ConversationItem) => {
      if (cve.conversationID === curCve?.conversationID) return;
      if (curCve) {
        events.emit(ISSETDRAFT, curCve);
      }
      rs.historyMsgList = [];
      rs.firstLoad = false;
      setCurCve(cve);
      rs.hasMore = true;
      getInfo(cve);
      msgCancel();
      // setImgGroup([]);
      getHistoryMsg(cve.userID, cve.groupID);
      markCveHasRead(cve);
    },
    [curCve, getHistoryMsg, getInfo, markCveHasRead, msgCancel, rs, setCurCve],
  );

  const sendMsgCB = (res: WsResponse, type: messageTypes, err?: boolean) => {
    nMsgMaps.map((tn) => {
      if (tn.oid === res.operationID) {
        const idx = rs.historyMsgList.findIndex((his) => his.clientMsgID === tn?.mid);
        if (idx !== -1) {
          tn.flag = true;
          err
            ? (rs.historyMsgList[idx].status = 3)
            : (rs.historyMsgList[idx] = JSON.parse(res.data));
        }
      }
    });
    if (type === messageTypes.MERGERMESSAGE) {
      Toast.success('ForwardSuccessTip');
    }
    scrollToBottom();
  };

  const sendMsg = (nMsg: string, type: messageTypes, uid?: string, gid?: string) => {
    const operationID = uuid();
    if ((uid && curCve?.userID === uid) || (gid && curCve?.groupID === gid) || (!uid && !gid)) {
      const parsedMsg = JSON.parse(nMsg);
      const tMsgMap = {
        oid: operationID,
        mid: parsedMsg.clientMsgID,
        flag: false,
      };
      nMsgMaps = [...nMsgMaps, tMsgMap];
      parsedMsg.status = 2;
      rs.historyMsgList = [parsedMsg, ...rs.historyMsgList];
      setTimeout(() => {
        const item = nMsgMaps.find((n) => n.mid === parsedMsg.clientMsgID);
        if (item && !item.flag) {
          rs.historyMsgList.find((h) => {
            if (h.clientMsgID === item.mid) {
              h.status = 1;
            }
          });
        }
      }, 2000);
      scrollToBottom();
    }
    const offlinePushInfo = {
      title: '你有一条新消息',
      desc: '',
      ex: '',
      iOSPushSound: '+1',
      iOSBadgeCount: true,
    };
    const sendOption = {
      recvID: uid ?? curCve!.userID,
      groupID: gid ?? curCve!.groupID,
      offlinePushInfo,
      message: nMsg,
    };
    nMsgMaps = nMsgMaps.filter((f) => !f.flag);
    if (notOssMessageTypes.includes(type)) {
      im.sendMessageNotOss(sendOption, operationID)
        .then((res) => sendMsgCB(res, type))
        .catch((err) => sendMsgCB(err, type, true));
    } else {
      im.sendMessage(sendOption, operationID)
        .then((res) => sendMsgCB(res, type))
        .catch((err) => sendMsgCB(err, type, true));
    }
  };

  useEffect(() => {
    return () => {
      setCurCve(null);
    };
  }, [setCurCve]);

  return (
    <MicroApp className="micro-app-chat">
      <MicroApp.Sidebar
        header={<SearchBar onSearch={handleCveSearch} />}
        width={325}
        collapsible={false}
      >
        <CveList
          curCve={curCve}
          loading={cveLoading}
          onItemClick={handleItemClick}
          cves={rs.searchStatus ? rs.searchCve : cveList}
        />
      </MicroApp.Sidebar>
      <ChatMessenger
        scrollbar={scrollbar}
        loadMore={getHistoryMsg}
        loading={loading}
        msgList={rs.historyMsgList}
        // imgClick={imgClick}
        sendMsg={sendMsg}
        hasMore={rs.hasMore}
        curCve={curCve}
      />
    </MicroApp>
  );
}

export default ChatApp;
