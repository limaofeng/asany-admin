import { MessageType } from '@openim/wasm-client-sdk';

export const UPDATEFRIENDCARD = 'UPDATEFRIENDCARD';
export const TOASSIGNCVE = 'TOASSIGNCVE';
export const RESETCVE = 'RESETCVE';
export const OPENSINGLEMODAL = 'OPENSINGLEMODAL';
export const OPENGROUPMODAL = 'OPENGROUPMODAL';
export const DELETEMESSAGE = 'DELETEMESSAGE';
export const ISSETDRAFT = 'ISSETDRAFT';
export const REVOKEMSG = 'REVOKEMSG';
export const REPLAYMSG = 'REPLAYMSG';
export const FORWARDANDMERMSG = 'FORWARDANDMERMSG';
export const SENDFORWARDMSG = 'SENDFORWARDMSG';
export const MUTILMSG = 'MUTILMSG';
export const MUTILMSGCHANGE = 'MUTILMSGCHANGE';
export const MERMSGMODAL = 'MERMSGMODAL';
export const ATSTATEUPDATE = 'ATSTATEUPDATE';
export const ANTDLOCALCHANGE = 'ANTDLOCALCHANGE';
export const APPLICATIONTYPEUPDATE = 'APPLICATIONTYPEUPDATE';
export const CLEARSEARCHINPUT = 'CLEARSEARCHINPUT';

export const notOssMessageTypes = [
  MessageType.PictureMessage,
  MessageType.VideoMessage,
  MessageType.VoiceMessage,
  MessageType.FileMessage,
];

export const tipsTypes = {
  RevokeMessage: MessageType.RevokeMessage,
  FriendAdded: MessageType.FriendAdded,
  GroupCreated: MessageType.GroupCreated,
  GroupNameUpdated: MessageType.GroupNameUpdated,
  GroupOwnerTransferred: MessageType.GroupOwnerTransferred,
  MemberQuit: MessageType.MemberQuit,
  MemberInvited: MessageType.MemberInvited,
  MemberKicked: MessageType.MemberKicked,
  MemberEnter: MessageType.MemberEnter,
};
