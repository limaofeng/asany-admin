import { useCallback, useEffect } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import SearchBar from '../SearchBar';
import { useChat } from '../../hooks';
import CveList from '../CveList';
import '../../style/chat_drawer.scss';
import ChatMessenger from '../ChatMessenger';

import { Button, Card, Drawer } from '@/metronic';

type ChatDrawerProps = {
  visible: boolean;
  onClose: () => void;
};

function ChatDrawer(props: ChatDrawerProps) {
  const { visible, onClose } = props;

  const {
    curCve,
    setCurCve,
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

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleBack = useCallback(() => {
    setCurCve(null);
  }, [setCurCve]);

  useEffect(() => {
    if (!visible) {
      setCurCve(null);
    }
  }, [setCurCve, visible]);

  return (
    <Drawer
      closable={false}
      placement="right"
      width={500}
      onClose={handleClose}
      bodyStyle={{
        padding: 0,
      }}
      forceRender={true}
      getContainer={() => document.body}
      visible={visible}
      className={classnames('chat-drawer')}
    >
      <div
        className={classnames('position-relative overflow-hidden chat-drawer-body h-100', {
          'in-messenger': !!curCve,
        })}
      >
        <Card style={{ width: 500 }} className="card-cve">
          <Card.Header className="pe-5">
            <Card.Title>消息</Card.Title>
            <Card.Toolbar>
              <Button
                variant={false}
                onClick={handleClose}
                activeColor="light-primary"
                icon={<Icon className="svg-icon-2" name="Duotune/arr061" />}
              />
            </Card.Toolbar>
          </Card.Header>
          <Card.Body className="px-0 pb-0">
            <SearchBar className="mx-3" onSearch={handleCveSearch} />
            <CveList
              curCve={curCve}
              loading={cveLoading}
              onItemClick={handleItemClick}
              cves={rs.searchStatus ? rs.searchCve : cveList}
            />
          </Card.Body>
        </Card>
        <Card style={{ width: 500 }} bodyClassName="p-0" className="card-messenger">
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
            onBack={handleBack}
          />
        </Card>
      </div>
    </Drawer>
  );
}

export default ChatDrawer;
