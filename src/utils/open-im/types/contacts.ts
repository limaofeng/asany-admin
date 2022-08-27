import type {
  BlackItem,
  FriendApplicationItem,
  FriendItem,
  GroupApplicationItem,
  GroupItem,
  GroupMemberItem,
  MemberMapType,
} from '../sdk/types';

export type ContactState = {
  friendList: FriendItem[];
  originList: FriendItem[];
  groupList: GroupItem[];
  blackList: BlackItem[];
  recvFriendApplicationList: FriendApplicationItem[];
  sentFriendApplicationList: FriendApplicationItem[];
  recvGroupApplicationList: GroupApplicationItem[];
  sentGroupApplicationList: GroupApplicationItem[];
  groupMemberList: GroupMemberItem[];
  groupInfo: GroupItem;
  groupMemberLoading: boolean;
  member2status: MemberMapType;
  unReadCount: number;
};

export const SET_FRIEND_LIST = 'SET_FRIEND_LIST';
export const SET_ORIGIN_LIST = 'SET_ORIGIN_LIST';
export const SET_GROUP_LIST = 'SET_GROUP_LIST';
export const SET_BLACK_LIST = 'SET_BLACK_LIST';
export const SET_RECV_FRIEND_APPLICATION_LIST = 'SET_RECV_FRIEND_APPLICATION_LIST';
export const SET_SENT_FRIEND_APPLICATION_LIST = 'SET_SENT_FRIEND_APPLICATION_LIST';
export const SET_RECV_GROUP_APPLICATION_LIST = 'SET_RECV_GROUP_APPLICATION_LIST';
export const SET_SENT_GROUP_APPLICATION_LIST = 'SET_SENT_GROUP_APPLICATION_LIST';
export const SET_GROUP_MEMBER_LIST = 'SET_GROUP_MEMBER_LIST';
export const SET_GROUP_INFO = 'SET_GROUP_INFO';
export const SET_GROUP_MEMBER_LOADING = 'SET_GROUP_MEMBER_LOADING';
export const SET_MEMBER2STATUS = 'SET_MEMBER2STATUS';

type SetFriendList = {
  type: typeof SET_FRIEND_LIST;
  payload: FriendItem[];
};

type SetOriginList = {
  type: typeof SET_ORIGIN_LIST;
  payload: FriendItem[];
};

type SetRecvFriendApplicationList = {
  type: typeof SET_RECV_FRIEND_APPLICATION_LIST;
  payload: FriendApplicationItem[];
};

type SetSentFriendApplicationList = {
  type: typeof SET_SENT_FRIEND_APPLICATION_LIST;
  payload: FriendApplicationItem[];
};

type SetGroupList = {
  type: typeof SET_GROUP_LIST;
  payload: GroupItem[];
};

type SetbBlackList = {
  type: typeof SET_BLACK_LIST;
  payload: BlackItem[];
};

type SetRecvGroupApplicationList = {
  type: typeof SET_RECV_GROUP_APPLICATION_LIST;
  payload: GroupApplicationItem[];
};

type SetSentGroupApplicationList = {
  type: typeof SET_SENT_GROUP_APPLICATION_LIST;
  payload: GroupApplicationItem[];
};

type SetGroupMemberList = {
  type: typeof SET_GROUP_MEMBER_LIST;
  payload: GroupMemberItem[];
};

type SetGroupInfo = {
  type: typeof SET_GROUP_INFO;
  payload: GroupItem;
};

type SetGroupMemberLoading = {
  type: typeof SET_GROUP_MEMBER_LOADING;
  payload: boolean;
};

type SetMember2Status = {
  type: typeof SET_MEMBER2STATUS;
  payload: MemberMapType;
};

export type ContactActionTypes =
  | SetFriendList
  | SetOriginList
  | SetRecvFriendApplicationList
  | SetSentFriendApplicationList
  | SetGroupList
  | SetRecvGroupApplicationList
  | SetSentGroupApplicationList
  | SetbBlackList
  | SetMember2Status
  | SetGroupMemberList
  | SetGroupInfo
  | SetGroupMemberLoading;

export type ContactDispatch = React.Dispatch<ContactActionTypes>;
