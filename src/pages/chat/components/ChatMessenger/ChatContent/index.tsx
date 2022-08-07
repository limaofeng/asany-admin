import { useEffect, useRef, useState } from 'react';

import type { ConversationItem, MessageItem } from 'open-im-sdk/types';

import ScrollView from '../../ScrollView';
import { MsgItem } from '../MsgItem';

import { useCurrentuser } from '@/utils/hooks';
import { tipsTypes } from '@/utils/open-im/constants/messageContentType';
import events from '@/utils/open-im/events';
import { MUTILMSG } from '@/utils/open-im/constants/events';
import { isSingleCve } from '@/utils/open-im/utils/im';

type ChatContentProps = {
  msgList: MessageItem[];
  loadMore: (uid?: string, gid?: string, sMsg?: any) => void;
  hasMore: boolean;
  curCve?: ConversationItem;
  loading: boolean;
  merID?: string;
};

function ChatContent(props: ChatContentProps) {
  const { merID, msgList, loadMore, hasMore, curCve, loading } = props;
  const [mutilSelect, setMutilSelect] = useState(false);
  const selfID = useCurrentuser().data?.uid;
  const audioRef = useRef<HTMLAudioElement>(null);

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

  const isSelf = (id: string) => id === selfID;

  const parseTip = (msg: MessageItem): string | JSX.Element => {
    if ((msg.contentType as number) == tipsTypes.REVOKEMESSAGE) {
      return (
        <>
          <b onClick={() => window.userClick(msg.sendID)}>
            {isSelf(msg.sendID)
              ? 'You'
              : isSingleCve(curCve!)
              ? curCve?.showName
              : msg.senderNickname}
          </b>
          {'RevokeMessage'}
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
            <b onClick={() => window.userClick(groupCreatedUser.userID)}>
              {isSelf(groupCreatedUser.userID) ? 'You' : groupCreatedUser.nickname}
            </b>
            {'GroupCreated'}
          </>
        );
      case tipsTypes.GROUPINFOUPDATED:
        const groupUpdateDetail = JSON.parse(msg.notificationElem.detail);
        const groupUpdateUser = groupUpdateDetail.opUser;
        return (
          <>
            <b onClick={() => window.userClick(groupUpdateUser.userID)}>
              {isSelf(groupUpdateUser.userID) ? 'You' : groupUpdateUser.nickname}
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
            <b onClick={() => window.userClick(transferOpUser.userID)}>
              {isSelf(transferOpUser.userID) ? 'You' : transferOpUser.nickname}
            </b>
            {'TransferTo'}
            <b onClick={() => window.userClick(newOwner.userID)}>
              {isSelf(newOwner.userID) ? 'You' : newOwner.nickname}
            </b>
          </>
        );
      case tipsTypes.MEMBERQUIT:
        const quitDetails = JSON.parse(msg.notificationElem.detail);
        const quitUser = quitDetails.quitUser;
        return (
          <>
            <b onClick={() => window.userClick(quitUser.userID)}>
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
            <b onClick={() => window.userClick(user.userID)} key={user.userID}>
              {isSelf(user.userID) ? 'You' : user.nickname + ' '}
            </b>,
          ),
        );
        return (
          <>
            <b onClick={() => window.userClick(inviteOpUser.userID)}>
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
            <b onClick={() => window.userClick(user.userID)} key={user.userID}>
              {isSelf(user.userID) ? 'You' : user.nickname}
            </b>,
          ),
        );
        return (
          <>
            <b onClick={() => window.userClick(kickOpUser.userID)}>
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
            <b onClick={() => window.userClick(enterUser.userID)}>
              {isSelf(enterUser.userID) ? 'You' : enterUser.nickname}
            </b>
            {'JoinedGroup'}
          </>
        );
      default:
        return JSON.parse(msg.content).defaultTips;
    }
  };

  const nextFuc = () => {
    loadMore(curCve?.userID, curCve?.groupID, msgList[msgList.length - 1]);
  };

  return (
    <ScrollView
      holdHeight={30}
      loading={loading}
      data={msgList}
      fetchMoreData={nextFuc}
      hasMore={hasMore}
    >
      {msgList?.map((msg) => {
        console.log('msgList', msgList, msg.contentType);
        if (tipList.includes(msg.contentType)) {
          return (
            <div key={msg.clientMsgID} className="chat_bg_tips">
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
  );
}

export default ChatContent;
