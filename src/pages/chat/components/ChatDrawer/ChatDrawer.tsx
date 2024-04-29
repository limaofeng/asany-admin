import { useCallback, useEffect } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import { Button, Card, Drawer } from '@/metronic';

import { useChat } from '../../hooks';
import ChatMessenger from '../ChatMessenger';
import CveList from '../CveList';
import SearchBar from '../SearchBar';

import '../../style/chat_drawer.scss';
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
        className={classnames(
          'position-relative overflow-hidden chat-drawer-body h-100',
          {
            'in-messenger': !!curCve,
          },
        )}
      >
        <Card style={{ width: 500 }} className="card-cve tw-shadow-none">
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
          <Card.Body className="px-0 pt-2 pb-0">
            <SearchBar className="mx-3" onSearch={handleCveSearch} />
            <CveList
              curCve={curCve}
              loading={cveLoading}
              onItemClick={handleItemClick}
              cves={rs.searchStatus ? rs.searchCve : cveList}
            />
          </Card.Body>
          <Card.Footer className="px-0 py-0">
            <div className="d-flex justify-content-around flex-grow-1">
              <div className="chat-menu d-flex flex-column align-items-center">
                <Icon className="svg-icon-2x" name="Duotune/com007" />
                <span className="fs-7 menu-text">消息</span>
              </div>
              <div className="chat-menu d-flex flex-column align-items-center">
                <Icon className="svg-icon-2x" name="Duotune/com005" />
                <span className="fs-7 menu-text">通讯录</span>
              </div>
            </div>
          </Card.Footer>
        </Card>
        <Card
          style={{ width: 500 }}
          bodyClassName="p-0"
          className="card-messenger"
        >
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
