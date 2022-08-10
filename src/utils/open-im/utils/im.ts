import type { ConversationItem, MessageItem } from 'open-im-sdk/types';

import { MessageType, SessionType } from '@/utils/open-im/sdk/types';
import { OpenIMSDK } from '@/utils/open-im/sdk';

export const im = new OpenIMSDK();

export const isSingleCve = (cve: ConversationItem) => {
  return cve.userID !== '' && cve.groupID === '';
};

export const parseMessageType = (pmsg: MessageItem, curUid?: string): string => {
  const isSelf = (id: string) => id === curUid;

  switch (pmsg.contentType) {
    case MessageType.TEXTMESSAGE:
      return pmsg.content;
    case MessageType.ATTEXTMESSAGE:
      return pmsg.atElem.text;
    case MessageType.PICTUREMESSAGE:
      return 'PictureMessage';
    case MessageType.VIDEOMESSAGE:
      return 'VideoMessage';
    case MessageType.VOICEMESSAGE:
      return 'VoiceMessage';
    case MessageType.LOCATIONMESSAGE:
      return 'LocationMessage';
    case MessageType.CARDMESSAGE:
      return 'CardMessage';
    case MessageType.MERGERMESSAGE:
      return 'MergeMessage';
    case MessageType.FILEMESSAGE:
      return 'FileMessage';
    case MessageType.REVOKEMESSAGE:
      return `${isSelf(pmsg.sendID) ? '你' : pmsg.senderNickname}撤回了一条消息`;
    case MessageType.ADVANCEREVOKEMESSAGE:
      const content = JSON.parse(pmsg.content);
      console.log('content', content);
      return `${isSelf(content.revokerID) ? '你' : content.revokerNickname}撤回了一条消息`;
    case MessageType.CUSTOMMESSAGE:
      return 'CustomMessage';
    case MessageType.QUOTEMESSAGE:
      return 'QuoteMessage';
    case MessageType.FRIENDADDED:
      return 'AlreadyFriend';
    case MessageType.MEMBERENTER:
      const enterDetails = JSON.parse(pmsg.notificationElem.detail);
      const enterUser = enterDetails.entrantUser;
      return `${isSelf(enterUser.userID) ? 'You' : enterUser.nickname}${'JoinedGroup'}`;
    case MessageType.GROUPCREATED:
      const groupCreatedDetail = JSON.parse(pmsg.notificationElem.detail);
      const groupCreatedUser = groupCreatedDetail.opUser;
      return `${
        isSelf(groupCreatedUser.userID) ? 'You' : groupCreatedUser.nickname
      }${'GroupCreated'}`;
    case MessageType.MEMBERINVITED:
      const inviteDetails = JSON.parse(pmsg.notificationElem.detail);
      const inviteOpUser = inviteDetails.opUser;
      const invitedUserList = inviteDetails.invitedUserList ?? [];
      let inviteStr = '';
      invitedUserList.forEach(
        (user: any) => (inviteStr += (isSelf(user.userID) ? 'You' : user.nickname) + ' '),
      );
      return `${
        isSelf(inviteOpUser.userID) ? 'You' : inviteOpUser.nickname
      }${'Invited'}${inviteStr}${'IntoGroup'}`;
    case MessageType.MEMBERKICKED:
      const kickDetails = JSON.parse(pmsg.notificationElem.detail);
      const kickOpUser = kickDetails.opUser;
      const kickdUserList = kickDetails.kickedUserList ?? [];
      let kickStr = '';
      kickdUserList.forEach(
        (user: any) => (kickStr += (isSelf(user.userID) ? 'You' : user.nickname) + ' '),
      );
      return `${
        isSelf(kickOpUser.userID) ? 'You' : kickOpUser.nickname
      }${'Kicked'}${kickStr}${'OutGroup'}`;
    case MessageType.MEMBERQUIT:
      const quitDetails = JSON.parse(pmsg.notificationElem.detail);
      const quitUser = quitDetails.quitUser;
      return `${isSelf(quitUser.userID) ? 'You' : quitUser.nickname}${'QuitedGroup'}`;
    case MessageType.GROUPINFOUPDATED:
      const groupUpdateDetail = JSON.parse(pmsg.notificationElem.detail);
      const groupUpdateUser = groupUpdateDetail.opUser;
      return `${
        isSelf(groupUpdateUser.userID) ? 'You' : groupUpdateUser.nickname
      }${'ModifiedGroup'}`;
    default:
      return pmsg.notificationElem.defaultTips;
  }
};

export const getNotification = (cb?: () => void) => {
  if (
    Notification &&
    (Notification.permission === 'default' || Notification.permission === 'denied')
  ) {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        cb && cb();
      }
    });
  } else {
    cb && cb();
  }
};

export const createNotification = (
  message: MessageItem,
  click?: (id: string, type: SessionType) => void,
  tag?: string,
) => {
  if (Notification && document.hidden) {
    const title =
      message.contentType === MessageType.FRIENDADDED ? 'FriendNotice' : message.senderNickname;
    const notification = new Notification(title, {
      dir: 'auto',
      tag: tag ?? message.groupID ?? message.sendID,
      renotify: true,
      icon: message.senderFaceUrl,
      body: parseMessageType(message),
      requireInteraction: true,
    });
    const id =
      message.sessionType === SessionType.Single
        ? message.contentType === MessageType.FRIENDADDED
          ? message.recvID
          : message.sendID
        : message.groupID;
    notification.onclick = () => {
      click && click(id, message.sessionType);
      notification.close();
    };
  }
};

export const cveSort = (cveList: ConversationItem[]) => {
  const arr: string[] = [];
  const filterArr = cveList.filter(
    (c) => !arr.includes(c.conversationID) && arr.push(c.conversationID),
  );
  filterArr.sort((a, b) => {
    if (a.isPinned === b.isPinned) {
      const aCompare =
        a.draftTextTime! > a.latestMsgSendTime! ? a.draftTextTime! : a.latestMsgSendTime!;
      const bCompare =
        b.draftTextTime! > b.latestMsgSendTime! ? b.draftTextTime! : b.latestMsgSendTime!;
      if (aCompare > bCompare) {
        return -1;
      } else if (aCompare < bCompare) {
        return 1;
      } else {
        return 0;
      }
    } else if (a.isPinned && !b.isPinned) {
      return -1;
    } else {
      return 1;
    }
  });
  return filterArr;
};
