import type { FullUserItem } from 'open-im-sdk-wasm/lib/types/entity';

export type UserState = {
  selfInfo: FullUserItem;
  adminToken: string;
  selfInitLoading: boolean;
  unReadCount: number;
};

export const SET_SELF_INFO = 'SET_SELF_INFO';
export const SET_ADMIN_TOKEN = 'SET_ADMIN_TOKEN';
export const SET_SELF_INIT_LOADING = 'setSelfInitLoading';
export const SET_UNREAD_COUNT = 'SET_UNREAD_COUNT';

type SetSelfInfo = {
  type: typeof SET_SELF_INFO;
  payload: FullUserItem;
};

type SetSelfToken = {
  type: typeof SET_ADMIN_TOKEN;
  payload: string;
};

type SetSelfInitLoading = {
  type: typeof SET_SELF_INIT_LOADING;
  payload: boolean;
};

type SetUnReadCount = {
  type: typeof SET_UNREAD_COUNT;
  payload: number;
};

export type UserActionTypes =
  | SetSelfInfo
  | SetSelfToken
  | SetSelfInitLoading
  | SetUnReadCount;
