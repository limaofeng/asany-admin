import { useCallback } from 'react';

import { useReactive } from 'ahooks';
import type { ConversationItem, MergeElem, MessageItem } from 'open-im-sdk/types';
import { useModel } from 'umi';

import SearchBar from '../components/SearchBar';
import CveList from '../components/CveList/CveList';
import ChatMessenger from '../components/ChatMessenger/ChatMessenger';

import { MicroApp } from '@/layouts/Demo7';

import '../style/chat_app.scss';

type ReactiveState = {
  historyMsgList: MessageItem[];
  typing: boolean;
  hasMore: boolean;
  merModal: boolean;
  merData: (MergeElem & { sender: string }) | undefined;
  searchStatus: boolean;
  searchCve: ConversationItem[];
};

function ChatApp() {
  const curCve = useModel('open-im.cve', ({ state }) => state.curCve);
  const cveLoading = useModel('open-im.cve', ({ state }) => state.cveInitLoading);
  const cveList = useModel('open-im.cve', ({ state }) => state.cves);

  const rs = useReactive<ReactiveState>({
    historyMsgList: [],
    typing: false,
    hasMore: true,
    merModal: false,
    merData: undefined,
    searchStatus: false,
    searchCve: [],
  });

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

  return (
    <MicroApp className="micro-app-chat">
      <MicroApp.Sidebar
        className="bg-white"
        header={<SearchBar onSearch={handleCveSearch} />}
        width={325}
        collapsible={false}
      >
        <CveList
          curCve={curCve}
          loading={cveLoading}
          cves={rs.searchStatus ? rs.searchCve : cveList}
        />
      </MicroApp.Sidebar>
      <ChatMessenger />
    </MicroApp>
  );
}

export default ChatApp;
