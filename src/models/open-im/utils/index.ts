import axios from 'axios';
import {
  ConversationItem,
  MessageItem,
} from 'open-im-sdk-wasm/lib/types/entity';
import { MessageType, SessionType } from 'open-im-sdk-wasm/lib/types/enum';

export const isSingleCve = (cve: ConversationItem) => {
  return cve.userID !== '' && cve.groupID === '';
};

export const move2end = (ref: React.RefObject<HTMLDivElement>) => {
  const sel = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(ref.current!);
  range.collapse(false);
  sel?.removeAllRanges();
  sel?.addRange(range);
};

export const formatDate = (timestamp: number) => {
  const now = new Date(timestamp);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  let minute: any = now.getMinutes();
  if (minute.toString().length === 1) minute = '0' + minute;
  let second: any = now.getSeconds();
  if (second.toString().length === 1) second = '0' + second;
  const str1 = year + '-' + month + '-' + date;
  // const str2 = hour + ":" + minute + ":" + second
  const str2 = hour + ':' + minute;
  return [year, month, date, str1, str2];
};

export const downloadFileUtil = (filePath: string, filename: string) => {
  axios
    .get(filePath, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      responseType: 'blob',
    })
    .then(function (response) {
      const blob = new Blob([response.data]);
      const fileName = filename;
      const linkNode = document.createElement('a');
      linkNode.download = fileName;
      linkNode.style.display = 'none';
      linkNode.href = URL.createObjectURL(blob);
      document.body.appendChild(linkNode);
      linkNode.click();
      URL.revokeObjectURL(linkNode.href);
      document.body.removeChild(linkNode);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const bytesToSize = (bytes: number) => {
  if (bytes === 0) return '0 B';
  const k = 1024,
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));

  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
};

export const switchFileIcon = (suffix: string) => {
  const imageSuffixs = ['jpeg', 'tiff', 'png', 'gif', 'jpg', 'gif'];
  const pptSuffixs = ['ppt', 'pptx'];
  const exelceSuffixs = ['xlsx', 'xls'];
  const worldSuffixs = ['doc', 'docx'];
  const zipSuffixs = ['rar', 'zip'];

  if (imageSuffixs.includes(suffix)) {
    return 'file_pic';
  } else if (pptSuffixs.includes(suffix)) {
    return 'file_ppt';
  } else if (exelceSuffixs.includes(suffix)) {
    return 'file_xslx';
  } else if (worldSuffixs.includes(suffix)) {
    return 'file_world';
  } else if (zipSuffixs.includes(suffix)) {
    return 'file_zip';
  } else if (suffix === 'pdf') {
    return 'file_pdf';
  } else {
    return 'file_unknow';
  }
};

export const contenteditableDivRange = () => {
  const selection = window.getSelection(),
    range = selection!.getRangeAt(0),
    br = document.createElement('br'),
    textNode = document.createTextNode('\u00a0'); //Passing " " directly will not end up being shown correctly
  range.deleteContents(); //required or not?
  range.insertNode(br);
  range.collapse(false);
  range.insertNode(textNode);
  range.selectNodeContents(textNode);
  selection!.removeAllRanges();
  selection!.addRange(range);
  document.execCommand('delete');
};

export const base64toFile = (base64Str: string) => {
  const arr = base64Str.split(','),
    fileType = arr[0].match(/:(.*?);/)![1],
    bstr = atob(arr[1]);

  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], `screenshot${Date.now()}.png`, {
    type: fileType,
  });
};

export const parseMessageType = (
  pmsg: MessageItem,
  curUid?: string,
): string => {
  const isSelf = (id: string) => id === curUid;

  switch (pmsg.contentType) {
    case MessageType.TextMessage:
      return pmsg.content;
    case MessageType.AtTextMessage:
      return pmsg.atTextElem.text;
    case MessageType.PictureMessage:
      return 'PictureMessage';
    case MessageType.VideoMessage:
      return 'VideoMessage';
    case MessageType.VoiceMessage:
      return 'VoiceMessage';
    case MessageType.LocationMessage:
      return 'LocationMessage';
    case MessageType.CardMessage:
      return 'CardMessage';
    case MessageType.MergeMessage:
      return 'MergeMessage';
    case MessageType.FileMessage:
      return 'FileMessage';
    case MessageType.RevokeMessage:
      return `${
        isSelf(pmsg.sendID) ? '你' : pmsg.senderNickname
      }撤回了一条消息`;
    // case MessageType.ADVANCEREVOKEMESSAGE:
    //   const content = JSON.parse(pmsg.content);
    //   console.log('content', content);
    //   return `${isSelf(content.revokerID) ? '你' : content.revokerNickname}撤回了一条消息`;
    case MessageType.CustomMessage:
      return 'CustomMessage';
    case MessageType.QuoteMessage:
      return 'QuoteMessage';
    case MessageType.FriendAdded:
      return 'AlreadyFriend';
    case MessageType.MemberEnter: {
      const enterDetails = JSON.parse(pmsg.notificationElem.detail);
      const enterUser = enterDetails.entrantUser;
      return `${
        isSelf(enterUser.userID) ? 'You' : enterUser.nickname
      }${'JoinedGroup'}`;
    }
    case MessageType.GroupCreated: {
      const groupCreatedDetail = JSON.parse(pmsg.notificationElem.detail);
      const groupCreatedUser = groupCreatedDetail.opUser;
      return `${
        isSelf(groupCreatedUser.userID) ? 'You' : groupCreatedUser.nickname
      }${'GroupCreated'}`;
    }
    case MessageType.MemberInvited: {
      const inviteDetails = JSON.parse(pmsg.notificationElem.detail);
      const inviteOpUser = inviteDetails.opUser;
      const invitedUserList = inviteDetails.invitedUserList ?? [];
      let inviteStr = '';
      invitedUserList.forEach(
        (user: any) =>
          (inviteStr += (isSelf(user.userID) ? 'You' : user.nickname) + ' '),
      );
      return `${
        isSelf(inviteOpUser.userID) ? 'You' : inviteOpUser.nickname
      }${'Invited'}${inviteStr}${'IntoGroup'}`;
    }
    case MessageType.MemberKicked: {
      const kickDetails = JSON.parse(pmsg.notificationElem.detail);
      const kickOpUser = kickDetails.opUser;
      const kickdUserList = kickDetails.kickedUserList ?? [];
      let kickStr = '';
      kickdUserList.forEach(
        (user: any) =>
          (kickStr += (isSelf(user.userID) ? 'You' : user.nickname) + ' '),
      );
      return `${
        isSelf(kickOpUser.userID) ? 'You' : kickOpUser.nickname
      }${'Kicked'}${kickStr}${'OutGroup'}`;
    }
    case MessageType.MemberQuit: {
      const quitDetails = JSON.parse(pmsg.notificationElem.detail);
      const quitUser = quitDetails.quitUser;
      return `${
        isSelf(quitUser.userID) ? 'You' : quitUser.nickname
      }${'QuitedGroup'}`;
    }
    // case MessageType.GROUPINFOUPDATED:
    //   const groupUpdateDetail = JSON.parse(pmsg.notificationElem.detail);
    //   const groupUpdateUser = groupUpdateDetail.opUser;
    //   return `${
    //     isSelf(groupUpdateUser.userID) ? 'You' : groupUpdateUser.nickname
    //   }${'ModifiedGroup'}`;
    default:
      return pmsg.notificationElem.detail;
  }
};

export const createNotification = (
  message: MessageItem,
  click?: (id: string, type: SessionType) => void,
  tag?: string,
) => {
  if (Notification && document.hidden) {
    const title =
      message.contentType === MessageType.FriendAdded
        ? 'FriendNotice'
        : message.senderNickname;
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
        ? message.contentType === MessageType.FriendAdded
          ? message.recvID
          : message.sendID
        : message.groupID;
    notification.onclick = () => {
      click && click(id, message.sessionType);
      notification.close();
    };
  }
};
