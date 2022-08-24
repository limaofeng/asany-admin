import { CveList, SearchBar } from '../components';
import ChatMessenger from '../components/ChatMessenger/ChatMessenger';
import { useChat } from '../hooks';

import { MicroApp } from '@/layouts/Demo7';

import '../style/chat_app.scss';

function ChatApp() {
  const {
    curCve,
    handleCveSearch,
    handleItemClick,
    loading,
    cveLoading,
    rs,
    cveList,
    scrollbar,
    getHistoryMsg,
    sendMsg,
  } = useChat();

  return (
    <MicroApp className="micro-app-chat">
      <MicroApp.Sidebar
        header={<SearchBar className="mx-3 pt-8" onSearch={handleCveSearch} />}
        width={325}
        collapsible={false}
      >
        <CveList
          curCve={curCve}
          loading={cveLoading}
          onItemClick={handleItemClick}
          cves={rs.searchStatus ? rs.searchCve : cveList}
        />
      </MicroApp.Sidebar>
      <ChatMessenger
        typing={rs.typing}
        scrollbar={scrollbar}
        loadMore={getHistoryMsg}
        loading={loading}
        msgList={rs.historyMsgList}
        // imgClick={imgClick}
        sendMsg={sendMsg}
        hasMore={rs.hasMore}
        curCve={curCve}
      />
    </MicroApp>
  );
}

export default ChatApp;
