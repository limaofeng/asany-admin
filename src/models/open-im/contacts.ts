import { useCallback, useEffect, useReducer, useRef } from 'react';

import type { GetGroupMemberParams, GroupItem, WsResponse } from 'open-im-sdk/types';
import { CbEvents } from 'open-im-sdk';

import { im } from './auth';

import type { ContactActionTypes, ContactState } from '@/utils/open-im/types/contacts';
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
  SET_SENT_FRIEND_APPLICATION_LIST,
  SET_SENT_GROUP_APPLICATION_LIST,
  SET_UNREAD_COUNT,
} from '@/utils/open-im/types/contacts';
import { SET_RECV_GROUP_APPLICATION_LIST } from '@/utils/open-im/types/contacts';
import { getGroupInfo, getGroupMemberList, setFriendList } from '@/utils/open-im/actions/contacts';

const initialState: ContactState = {
  friendList: [],
  originList: [],
  groupList: [],
  blackList: [],
  recvFriendApplicationList: [],
  sentFriendApplicationList: [],
  recvGroupApplicationList: [],
  sentGroupApplicationList: [],
  groupMemberList: [],
  groupInfo: {} as GroupItem,
  groupMemberLoading: false,
  member2status: {},
  unReadCount: 0,
};

export const friendReducer = (state = initialState, action: ContactActionTypes): ContactState => {
  switch (action.type) {
    case SET_FRIEND_LIST:
      return { ...state, friendList: action.payload };
    case SET_ORIGIN_LIST:
      return { ...state, originList: action.payload };
    case SET_GROUP_LIST:
      return { ...state, groupList: action.payload };
    case SET_BLACK_LIST:
      return { ...state, blackList: action.payload };
    case SET_RECV_FRIEND_APPLICATION_LIST:
      return { ...state, recvFriendApplicationList: action.payload };
    case SET_SENT_FRIEND_APPLICATION_LIST:
      return { ...state, sentFriendApplicationList: action.payload };
    case SET_RECV_GROUP_APPLICATION_LIST:
      return { ...state, recvGroupApplicationList: action.payload };
    case SET_SENT_GROUP_APPLICATION_LIST:
      return { ...state, sentGroupApplicationList: action.payload };
    case SET_GROUP_MEMBER_LIST:
      return { ...state, groupMemberList: action.payload };
    case SET_GROUP_INFO:
      return { ...state, groupInfo: action.payload };
    case SET_GROUP_MEMBER_LOADING:
      return { ...state, groupMemberLoading: action.payload };
    case SET_MEMBER2STATUS:
      return { ...state, member2status: action.payload };
    case SET_UNREAD_COUNT:
      return { ...state, unReadCount: action.payload };
    default:
      return state;
  }
};

function useContactsModel() {
  const [state, dispatch] = useReducer(friendReducer, initialState);

  const { friendList } = state;

  const temp = useRef({ friendList });
  temp.current.friendList = friendList;

  const friendHandlerTemplate = useCallback(
    (data: WsResponse, type: 'info' | 'added' | 'deleted') => {
      const user = JSON.parse(data.data);
      const tmpArr = [...temp.current.friendList];
      if (type === 'info') {
        const idx = tmpArr.findIndex((f) => f.userID === user.userID);
        if (idx !== -1) tmpArr[idx] = user;
      } else if (type === 'added') {
        tmpArr.push(user);
      } else {
        const idx = tmpArr.findIndex((f) => f.userID === user.userID);
        if (idx !== -1) tmpArr.splice(idx, 1);
      }
      dispatch(setFriendList(tmpArr));
    },
    [],
  );

  const friednInfoChangeHandler = useCallback(
    (data: WsResponse) => friendHandlerTemplate(data, 'info'),
    [friendHandlerTemplate],
  );
  const friednAddedHandler = useCallback(
    (data: WsResponse) => friendHandlerTemplate(data, 'added'),
    [friendHandlerTemplate],
  );
  const friednDeletedHandler = useCallback(
    (data: WsResponse) => friendHandlerTemplate(data, 'deleted'),
    [friendHandlerTemplate],
  );

  useEffect(() => {
    im.on(CbEvents.ONFRIENDINFOCHANGED, friednInfoChangeHandler);
    im.on(CbEvents.ONFRIENDADDED, friednAddedHandler);
    im.on(CbEvents.ONFRIENDDELETED, friednDeletedHandler);
    return () => {
      im.off(CbEvents.ONFRIENDINFOCHANGED, friednInfoChangeHandler);
      im.off(CbEvents.ONFRIENDADDED, friednAddedHandler);
      im.off(CbEvents.ONFRIENDDELETED, friednDeletedHandler);
    };
  }, [friednAddedHandler, friednDeletedHandler, friednInfoChangeHandler, friendList]);

  return {
    state,
    dispatch,
    actions: {
      getGroupInfo: useCallback((groupID: string) => {
        console.log('groupID:', groupID);
        getGroupInfo(groupID)(dispatch);
      }, []),
      getGroupMemberList: useCallback((options: GetGroupMemberParams) => {
        console.log('getGroupMemberList:', options);
        getGroupMemberList(options)(dispatch);
      }, []),
    },
  };
}

export default useContactsModel;
