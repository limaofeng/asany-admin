import { useCallback, useEffect, useRef } from 'react';

import { useModel } from 'umi';
import type {
  ConversationItem,
  FriendItem,
  GroupItem,
  GroupMemberItem,
  MergeElem,
  MergerMsgParams,
  MessageItem,
  WsResponse,
} from 'open-im-sdk/types';
import { useReactive, useRequest } from 'ahooks';
import { CbEvents } from 'open-im-sdk';

import { im } from '@/models/open-im/auth';
import { createNotification, isSingleCve } from '@/utils/open-im/utils/im';
import events from '@/utils/open-im/events';
import {
  DELETEMESSAGE,
  ISSETDRAFT,
  MERMSGMODAL,
  MUTILMSG,
  RESETCVE,
  REVOKEMSG,
  SENDFORWARDMSG,
  TOASSIGNCVE,
} from '@/utils/open-im/constants/events';
import {
  messageTypes,
  notOssMessageTypes,
  SessionType,
  tipsTypes,
} from '@/utils/open-im/constants/messageContentType';
import { Toast } from '@/metronic';

export type ChechType = {
  check: boolean;
  disabled: boolean;
};

export type SelectFriendItem = FriendItem & ChechType;
export type SelectMemberItem = GroupMemberItem & ChechType;
export type SelectGroupItem = GroupItem & ChechType;
export type SelectType = SelectFriendItem | SelectGroupItem | SelectMemberItem;

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

const getOneCve = (sourceID: string, sessionType: number): Promise<ConversationItem> => {
  return new Promise((resolve, reject) => {
    im.getOneConversation({ sourceID, sessionType })
      .then((res) => resolve(JSON.parse(res.data)))
      .catch((err) => reject(err));
  });
};

function useChat() {
  const curCve = useModel('open-im.cve', ({ state }) => state.curCve);
  const cveLoading = useModel('open-im.cve', ({ state }) => state.cveInitLoading);
  const setCurCve = useModel('open-im.cve', ({ actions }) => actions.setCurCve);
  const cveList = useModel('open-im.cve', ({ state }) => state.cves);
  const selfID = useModel('@@initialState', ({ initialState: state }) => state?.currentUser?.uid);

  const getGroupInfo = useModel('open-im.contacts', ({ actions }) => actions.getGroupInfo);
  const getGroupMemberList = useModel(
    'open-im.contacts',
    ({ actions }) => actions.getGroupMemberList,
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const timer = useRef<NodeJS.Timeout | null>(null);
  const {
    loading,
    run: getMsg,
    cancel: msgCancel,
  } = useRequest(im.getHistoryMessageList, {
    manual: true,
    onSuccess: handleMsg,
    onError: (err: any) => console.log('GetChatRecordFailed', err),
  });

  const scrollbar = useRef<OverlayScrollbars>();

  const scrollToBottom = useCallback((duration?: number) => {
    scrollbar.current?.scroll({ y: '100%' }, duration ?? 350);
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

  const sendMsgCB = useCallback(
    (res: WsResponse, type: messageTypes, err?: boolean) => {
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
    },
    [nMsgMaps, rs.historyMsgList, scrollToBottom],
  );

  const sendMsg = useCallback(
    (nMsg: string, type: messageTypes, uid?: string, gid?: string) => {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
    },
    [curCve],
  );

  const assignHandler = useCallback(
    (id: string, type: SessionType) => {
      getOneCve(id, type)
        .then((cve) => handleItemClick(cve))
        .catch((err) => {
          Toast.error('获取会话失败！');
          console.error(err);
        });
    },
    [handleItemClick],
  );

  const inCurCve = useCallback(
    (newServerMsg: MessageItem): boolean => {
      const isCurSingle =
        newServerMsg.sendID === curCve?.userID ||
        (newServerMsg.sendID === selfID && newServerMsg.recvID === curCve?.userID);
      return newServerMsg.sessionType === (SessionType.SINGLECVE as number)
        ? isCurSingle
        : newServerMsg.groupID === curCve?.groupID;
    },
    [curCve?.groupID, curCve?.userID, selfID],
  );

  const typingUpdate = useCallback(() => {
    rs.typing = true;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      rs.typing = false;
    }, 1000);
  }, [rs]);

  const newMsgHandler = useCallback(
    (data: WsResponse) => {
      const newServerMsg: MessageItem = JSON.parse(data.data);
      if (
        newServerMsg.contentType !== (messageTypes.TYPINGMESSAGE as number) &&
        newServerMsg.sendID !== selfID
      ) {
        createNotification(newServerMsg, (id, sessionType) => {
          assignHandler(id, sessionType as number);
          window.focus();
        });
      }
      if (curCve) {
        if (inCurCve(newServerMsg)) {
          if (newServerMsg.contentType === (messageTypes.TYPINGMESSAGE as number)) {
            typingUpdate();
          } else {
            if (newServerMsg.contentType === (messageTypes.REVOKEMESSAGE as number)) {
              rs.historyMsgList = [
                newServerMsg,
                ...rs.historyMsgList.filter((ms) => ms.clientMsgID !== newServerMsg.content),
              ];
            } else {
              rs.historyMsgList = [newServerMsg, ...rs.historyMsgList];
            }
            markCveHasRead(curCve, 1);
          }
        }
      }
    },
    [assignHandler, curCve, inCurCve, markCveHasRead, rs, selfID, typingUpdate],
  );

  const revokeMsgHandler = useCallback(
    (data: WsResponse) => {
      const idx = rs.historyMsgList.findIndex((m) => m.clientMsgID === data.data);
      if (idx > -1) {
        rs.historyMsgList.splice(idx, 1);
      }
    },
    [rs],
  );

  const c2cMsgHandler = useCallback(
    (data: WsResponse) => {
      JSON.parse(data.data).map((cr: any) => {
        cr.msgIDList.map((crt: string) => {
          rs.historyMsgList.find((hism) => {
            if (hism.clientMsgID === crt) {
              hism.isRead = true;
            }
          });
        });
      });
    },
    [rs],
  );

  const resetCve = useCallback(() => {
    setCurCve(null);
  }, [setCurCve]);

  const deleteMsg = useCallback(
    (mid: string) => {
      const idx = rs.historyMsgList.findIndex((h) => h.clientMsgID === mid);
      const tmpList = [...rs.historyMsgList];
      tmpList.splice(idx, 1);
      rs.historyMsgList = tmpList;
      Toast.success('删除消息成功！');
    },
    [rs],
  );

  const revokeMyMsgHandler = useCallback(
    (mid: string) => {
      const idx = rs.historyMsgList.findIndex((h) => h.clientMsgID === mid);
      rs.historyMsgList[idx].contentType = tipsTypes.REVOKEMESSAGE as number;
    },
    [rs],
  );

  const merModalHandler = useCallback(
    (el: MergeElem, sender: string) => {
      rs.merData = { ...el, sender };
      rs.merModal = true;
    },
    [rs],
  );

  const sendForwardHandler = useCallback(
    (options: string | MergerMsgParams, type: messageTypes, list: SelectType[]) => {
      list.map(async (s) => {
        const uid = (s as FriendItem).userID ?? '';
        const gid = (s as GroupItem).groupID ?? '';
        let data;
        if (type === messageTypes.MERGERMESSAGE) {
          data = await im.createMergerMessage(options as MergerMsgParams);
        } else {
          data = await im.createForwardMessage(options as string);
        }
        sendMsg(data.data, type, uid, gid);
        events.emit(MUTILMSG, false);
      });
    },
    [sendMsg],
  );

  useEffect(() => {
    im.on(CbEvents.ONRECVMESSAGEREVOKED, revokeMsgHandler);
    im.on(CbEvents.ONRECVC2CREADRECEIPT, c2cMsgHandler);
    return () => {
      im.off(CbEvents.ONRECVMESSAGEREVOKED, revokeMsgHandler);
      im.off(CbEvents.ONRECVC2CREADRECEIPT, c2cMsgHandler);
    };
  }, [c2cMsgHandler, revokeMsgHandler]);

  useEffect(() => {
    events.on(RESETCVE, resetCve);
    events.on(DELETEMESSAGE, deleteMsg);
    events.on(REVOKEMSG, revokeMyMsgHandler);
    events.on(MERMSGMODAL, merModalHandler);
    return () => {
      events.off(RESETCVE, resetCve);
      events.off(DELETEMESSAGE, deleteMsg);
      events.off(REVOKEMSG, revokeMyMsgHandler);
      events.off(MERMSGMODAL, merModalHandler);
    };
  }, [deleteMsg, merModalHandler, resetCve, revokeMyMsgHandler]);

  useEffect(() => {
    events.on(SENDFORWARDMSG, sendForwardHandler);
    events.on(TOASSIGNCVE, assignHandler);
    im.on(CbEvents.ONRECVNEWMESSAGE, newMsgHandler);
    return () => {
      events.off(SENDFORWARDMSG, sendForwardHandler);
      events.off(TOASSIGNCVE, assignHandler);
      im.off(CbEvents.ONRECVNEWMESSAGE, newMsgHandler);
    };
  }, [assignHandler, curCve, newMsgHandler, sendForwardHandler]);

  useEffect(() => {
    return () => {
      setCurCve(null);
    };
  }, [setCurCve]);

  return {
    rs,
    cveList,
    loading,
    cveLoading,
    curCve,
    setCurCve,
    handleCveSearch,
    handleItemClick,
    scrollbar,
    getHistoryMsg,
    sendMsg,
  };
}

export default useChat;
