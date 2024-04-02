import { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import type { ConversationItem, MessageItem } from 'open-im-sdk/types';

import ScrollView from '../../ScrollView';
import { MsgItem } from '../MsgItem';

import { useCurrentuser } from '@/hooks';
// import { tipsTypes } from '@/utils/open-im/constants/messageContentType';
// import events from '@/utils/open-im/events';
// import { MUTILMSG } from '@/utils/open-im/constants/events';
// import { isSingleCve } from '@/utils/open-im/utils/im';

type ChatContentProps = {
  msgList: MessageItem[];
  loadMore: (uid?: string, gid?: string, sMsg?: any) => void;
  hasMore: boolean;
  curCve?: ConversationItem;
  loading: boolean;
  merID?: string;
  scrollbar: React.MutableRefObject<OverlayScrollbars | undefined>;
};

function ChatContent(props: ChatContentProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { merID, msgList, loadMore, hasMore, curCve, loading } = props;
  const [mutilSelect, setMutilSelect] = useState(false);
  const selfID = useCurrentuser().data?.uid;

  const tipList = Object.values(tipsTypes) as number[];

  const mutilHandler = (flag: boolean) => {
    setMutilSelect(flag);
  };

  useEffect(() => {
    events.on(MUTILMSG, mutilHandler);
    return () => {
      events.off(MUTILMSG, mutilHandler);
    };
  }, []);

  const isSelf = useCallback((id: string) => id === selfID, [selfID]);

  const parseTip = useCallback(
    (msg: MessageItem): string | JSX.Element => {
      if (
        (msg.contentType as number) == tipsTypes.REVOKEMESSAGE ||
        (msg.contentType as number) == tipsTypes.ADVANCEREVOKEMESSAGE
      ) {
        let revokerID = msg.sendID;
        let nickname = isSingleCve(curCve!)
          ? curCve?.showName
          : msg.senderNickname;
        if ((msg.contentType as number) == tipsTypes.ADVANCEREVOKEMESSAGE) {
          const content = JSON.parse(msg.content);
          nickname = content.revokerNickname;
          revokerID = content.revokerID;
        }
        return (
          <>
            {isSelf(revokerID) ? (
              '你'
            ) : (
              <b /*onClick={() => window.userClick(msg.sendID)}*/>{nickname}</b>
            )}
            撤回了一条消息
          </>
        );
      }
      switch (msg.contentType as any) {
        case tipsTypes.FRIENDADDED:
          return 'AlreadyFriend';
        case tipsTypes.GROUPCREATED:
          const groupCreatedDetail = JSON.parse(msg.notificationElem.detail);
          const groupCreatedUser = groupCreatedDetail.opUser;
          return (
            <>
              <b /*onClick={() => window.userClick(groupCreatedUser.userID)}*/>
                {isSelf(groupCreatedUser.userID)
                  ? 'You'
                  : groupCreatedUser.nickname}
              </b>
              {'GroupCreated'}
            </>
          );
        case tipsTypes.GROUPINFOUPDATED:
          const groupUpdateDetail = JSON.parse(msg.notificationElem.detail);
          const groupUpdateUser = groupUpdateDetail.opUser;
          return (
            <>
              <b /*onClick={() => window.userClick(groupUpdateUser.userID)}*/>
                {isSelf(groupUpdateUser.userID)
                  ? 'You'
                  : groupUpdateUser.nickname}
              </b>
              {'ModifiedGroup'}
            </>
          );
        case tipsTypes.GROUPOWNERTRANSFERRED:
          const transferDetails = JSON.parse(msg.notificationElem.detail);
          const transferOpUser = transferDetails.opUser;
          const newOwner = transferDetails.newGroupOwner;
          return (
            <>
              <b /*onClick={() => window.userClick(transferOpUser.userID)}*/>
                {isSelf(transferOpUser.userID)
                  ? 'You'
                  : transferOpUser.nickname}
              </b>
              {'TransferTo'}
              <b /*onClick={() => window.userClick(newOwner.userID)}*/>
                {isSelf(newOwner.userID) ? 'You' : newOwner.nickname}
              </b>
            </>
          );
        case tipsTypes.MEMBERQUIT:
          const quitDetails = JSON.parse(msg.notificationElem.detail);
          const quitUser = quitDetails.quitUser;
          return (
            <>
              <b /*onClick={() => window.userClick(quitUser.userID)}*/>
                {isSelf(quitUser.userID) ? 'You' : quitUser.nickname}
              </b>
              {'QuitedGroup'}
            </>
          );
        case tipsTypes.MEMBERINVITED:
          const inviteDetails = JSON.parse(msg.notificationElem.detail);
          const inviteOpUser = inviteDetails.opUser;
          const invitedUserList = inviteDetails.invitedUserList ?? [];
          const inviteUsers: any[] = [];
          invitedUserList.forEach((user: any) =>
            inviteUsers.push(
              <b
                /*onClick={() => window.userClick(user.userID)}*/ key={
                  user.userID
                }
              >
                {isSelf(user.userID) ? 'You' : user.nickname + ' '}
              </b>,
            ),
          );
          return (
            <>
              <b /*onClick={() => window.userClick(inviteOpUser.userID)}*/>
                {isSelf(inviteOpUser.userID) ? 'You' : inviteOpUser.nickname}
              </b>
              {'Invited'}
              {inviteUsers.map((user) => user)}
              {'IntoGroup'}
            </>
          );
        case tipsTypes.MEMBERKICKED:
          const kickDetails = JSON.parse(msg.notificationElem.detail);
          const kickOpUser = kickDetails.opUser;
          const kickdUserList = kickDetails.kickedUserList ?? [];
          const kickUsers: any[] = [];
          kickdUserList.forEach((user: any) =>
            kickUsers.push(
              <b
                /*onClick={() => window.userClick(user.userID)}*/ key={
                  user.userID
                }
              >
                {isSelf(user.userID) ? 'You' : user.nickname}
              </b>,
            ),
          );
          return (
            <>
              <b /*onClick={() => window.userClick(kickOpUser.userID)}*/>
                {isSelf(kickOpUser.userID) ? 'You' : kickOpUser.nickname}
              </b>
              {'Kicked'}
              {kickUsers.map((user) => user)}
              {'OutGroup'}
            </>
          );
        case tipsTypes.MEMBERENTER:
          const enterDetails = JSON.parse(msg.notificationElem.detail);
          const enterUser = enterDetails.entrantUser;
          return (
            <>
              <b /*onClick={() => window.userClick(enterUser.userID)}*/>
                {isSelf(enterUser.userID) ? 'You' : enterUser.nickname}
              </b>
              {'JoinedGroup'}
            </>
          );
        default:
          return JSON.parse(msg.content).defaultTips;
      }
    },
    [curCve, isSelf],
  );

  const nextFuc = useCallback(() => {
    loadMore(curCve?.userID, curCve?.groupID, msgList[msgList.length - 1]);
  }, [curCve?.groupID, curCve?.userID, loadMore, msgList]);

  return (
    <>
      <ScrollView
        holdHeight={40}
        ref={props.scrollbar}
        loading={loading}
        data={msgList}
        fetchMoreData={nextFuc}
        hasMore={hasMore}
      >
        {msgList?.map((msg, index) => {
          if (tipList.includes(msg.contentType)) {
            return (
              <div
                key={msg.clientMsgID}
                className={classnames('chat_bg_tips', { 'mb-6': index == 0 })}
              >
                {parseTip(msg)}
              </div>
            );
          } else {
            return (
              <MsgItem
                audio={audioRef}
                key={msg.clientMsgID}
                mutilSelect={mutilSelect}
                msg={msg}
                // imgClick={imgClick}
                selfID={merID ?? selfID!}
                curCve={curCve!}
              />
            );
          }
        })}
      </ScrollView>
      <audio ref={audioRef} />
    </>
  );
}

export default ChatContent;
