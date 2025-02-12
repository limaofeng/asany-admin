import type {
  BlackUserItem,
  FriendApplicationItem,
  FriendUserItem,
  GetGroupMemberParams,
  GroupApplicationItem,
  GroupItem,
  GroupMemberItem,
  MemberMapType,
  TotalUserStruct,
} from '@openim/wasm-client-sdk';

import { IMSDK } from '@/models/open-im/auth';

import type { ContactActionTypes } from '../types/contacts';
import {
  SET_BLACK_LIST,
  SET_FRIEND_LIST,
  SET_GROUP_INFO,
  SET_GROUP_LIST,
  SET_GROUP_MEMBER_LIST,
  SET_GROUP_MEMBER_LOADING,
  SET_MEMBER2STATUS,
  SET_ORIGIN_LIST,
  SET_RECV_FRIEND_APPLICATION_LIST,
  SET_RECV_GROUP_APPLICATION_LIST,
  SET_SENT_FRIEND_APPLICATION_LIST,
  SET_SENT_GROUP_APPLICATION_LIST,
} from '../types/contacts';

export const setFriendList = (value: FriendUserItem[]): ContactActionTypes => {
  return {
    type: SET_FRIEND_LIST,
    payload: value,
  };
};

export const setOriginList = (value: FriendUserItem[]): ContactActionTypes => {
  return {
    type: SET_ORIGIN_LIST,
    payload: value,
  };
};

export const setGroupList = (value: GroupItem[]): ContactActionTypes => {
  return {
    type: SET_GROUP_LIST,
    payload: value,
  };
};

export const setBlackList = (value: BlackUserItem[]): ContactActionTypes => {
  return {
    type: SET_BLACK_LIST,
    payload: value,
  };
};

export const setRecvFriendApplicationList = (
  value: FriendApplicationItem[],
): ContactActionTypes => {
  return {
    type: SET_RECV_FRIEND_APPLICATION_LIST,
    payload: value,
  };
};

export const setSentFriendApplicationList = (
  value: FriendApplicationItem[],
): ContactActionTypes => {
  return {
    type: SET_SENT_FRIEND_APPLICATION_LIST,
    payload: value,
  };
};

export const setRecvGroupApplicationList = (
  value: GroupApplicationItem[],
): ContactActionTypes => {
  return {
    type: SET_RECV_GROUP_APPLICATION_LIST,
    payload: value,
  };
};

export const setSentGroupApplicationList = (
  value: GroupApplicationItem[],
): ContactActionTypes => {
  return {
    type: SET_SENT_GROUP_APPLICATION_LIST,
    payload: value,
  };
};

export const setGroupMemberList = (
  value: GroupMemberItem[],
): ContactActionTypes => {
  return {
    type: SET_GROUP_MEMBER_LIST,
    payload: value,
  };
};

export const setGroupInfo = (value: GroupItem): ContactActionTypes => {
  return {
    type: SET_GROUP_INFO,
    payload: value,
  };
};

export const setGroupMemberLoading = (value: boolean): ContactActionTypes => {
  return {
    type: SET_GROUP_MEMBER_LOADING,
    payload: value,
  };
};

export const setMember2Status = (value: MemberMapType): ContactActionTypes => {
  return {
    type: SET_MEMBER2STATUS,
    payload: value,
  };
};

export const getFriendList = () => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    IMSDK.getFriendList().then((res) => {
      const tmp: FriendUserItem[] = [];
      JSON.parse(res.data).forEach(
        (item: TotalUserStruct) =>
          !item.blackInfo && tmp.push(item.friendInfo!),
      );
      dispatch(setFriendList(tmp));
    });
  };
};

export const getGroupList = () => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    IMSDK.getJoinedGroupList().then((res) =>
      dispatch(setGroupList(JSON.parse(res.data))),
    );
  };
};

export const getBlackList = () => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    IMSDK.getBlackList().then((res) => {
      dispatch(setBlackList(JSON.parse(res.data)));
    });
  };
};

export const getRecvFriendApplicationList = () => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    IMSDK.getRecvFriendApplicationList().then((res) =>
      dispatch(setRecvFriendApplicationList(JSON.parse(res.data))),
    );
  };
};

export const getSentFriendApplicationList = () => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    IMSDK.getSendFriendApplicationList().then((res) =>
      dispatch(setSentFriendApplicationList(JSON.parse(res.data))),
    );
  };
};

export const getRecvGroupApplicationList = () => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    IMSDK.getRecvGroupApplicationList().then((res) =>
      dispatch(setRecvGroupApplicationList(JSON.parse(res.data))),
    );
  };
};

export const getSentGroupApplicationList = () => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    IMSDK.getSendGroupApplicationList().then((res) =>
      dispatch(setSentGroupApplicationList(JSON.parse(res.data))),
    );
  };
};

export const getGroupMemberList = (options: GetGroupMemberParams) => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    dispatch(setGroupMemberLoading(true));
    IMSDK.getGroupMemberList(options).then((res) => {
      dispatch(setGroupMemberList(JSON.parse(res.data)));
      dispatch(setGroupMemberLoading(false));
    });
  };
};

export const getGroupInfo = (gid: string) => {
  return (dispatch: React.Dispatch<ContactActionTypes>) => {
    IMSDK.getSpecifiedGroupsInfo([gid])
      // im.getGroupsInfo([gid])
      .then((res) => {
        dispatch(setGroupInfo(res.data[0]));
      })
      .catch(() => dispatch(setGroupInfo({} as GroupItem)));
  };
};
