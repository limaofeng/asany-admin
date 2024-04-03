import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { ContentWrapper } from '@/layouts/components';
import { Card, Spin, Tabs } from '@/metronic';
import type { MailboxMessage } from '@/types';
import { sleep } from '@/utils';

import MessageEditor from '../components/MessageEditor';
import {
  MailboxesDocument,
  useDeleteMailboxMessageMutation,
  useMailboxMessageLazyQuery,
} from '../hooks';

const { TabPane } = Tabs;

const Tools = React.memo(function Tools() {
  return (
    <Card className="email-compose-tools">
      <Tabs className="nav-line-tabs-2x mb-5 fs-6">
        <TabPane tab="通讯录" key="contacts">
          11111
        </TabPane>
        <TabPane tab="网盘" key="storage">
          222222
        </TabPane>
        <TabPane tab="信纸" key="stationery">
          222222
        </TabPane>
      </Tabs>
    </Card>
  );
});

type ComposeMailState = {
  state: 'default' | 'saving' | 'saved';
  isChanged: boolean;
  message?: MailboxMessage;
};

function ComposeMail() {
  const navigate = useNavigate();
  const { id: messageId } = useParams();
  const location = useLocation();

  const [loadMessage, { data: messageResult, loading }] =
    useMailboxMessageLazyQuery({
      fetchPolicy: 'cache-and-network',
    });

  const [deleteMessage] = useDeleteMailboxMessageMutation({
    refetchQueries: [MailboxesDocument],
  });

  const state = useRef<ComposeMailState>({
    isChanged: false,
    state: 'default',
    message: (location.state as any)?.message,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleSend = useCallback(
    async (message: MailboxMessage) => {
      state.current.isChanged = false;
      forceRender();
      await sleep(120);
      navigate(`/mail/sent/${message.id}`);
    },
    [history],
  );

  const handleAutoSave = useCallback((message: MailboxMessage) => {
    state.current.message = message;
    if (!state.current.isChanged) {
      state.current.isChanged = true;
      forceRender();
    }
  }, []);

  const handleDoNotStore = useCallback(
    (onConfirm: () => void) => async () => {
      await deleteMessage({ variables: { id: state.current.message!.id } });
      onConfirm();
    },
    [deleteMessage],
  );

  useEffect(() => {
    if (!messageId) {
      return;
    }
    loadMessage({
      variables: { id: messageId },
    });
  }, [loadMessage, messageId]);

  useMemo(() => {
    if (!messageResult?.message) {
      return;
    }
    state.current.message = messageResult.message as any;
  }, [messageResult?.message]);

  const { message, isChanged } = state.current;

  console.log('handleDoNotStore', handleDoNotStore);

  // <NavigationPrompt disableNative when={!!message?.id && isChanged}>
  // {({ afterConfirm: onConfirm, afterCancel: onCancel }: NavigationPromptProps) => (

  // useNavigationPrompt("xxxxx");

  // usePrompt(
  //   'Are you sure?',
  //   ({ currentLocation, nextLocation }) =>
  //     currentLocation.pathname !== nextLocation.pathname,
  // );

  // let blocker = useBlocker(({ currentLocation, nextLocation }) =>
  // currentLocation.pathname !== nextLocation.pathname)

  // console.log(blocker)

  return (
    <ContentWrapper
      className="apps-email-compose"
      header={false}
      footer={false}
    >
      {/*
      <Modal
        centered
        visible={true}
        footer={false}
        // onCancel={onCancel}
        dialogClassName="mw-550px"
        bodyClassName="mx-5 pt-0 pb-15"
        header={
          <Modal.Header className="ms-5 border-0">
            <h1 className="modal-title pt-6 pb-4">将此邮件存储为草稿吗？</h1>
          </Modal.Header>
        }
      >
        <div className="mb-6">
          <div className="mh-375px scroll-y me-n7 pe-7 fs-6 text-muted">
            <p>
              {' '}
              此邮件尚未发送，且含有未存储的更改内容。您可以先将其存储为草稿，稍后再处理。
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="fw-bold">
            <Button
              variant="light-danger"
              // onClick={handleDoNotStore(onConfirm)}
            >
              不存储
            </Button>
          </div>
          <div>
            <Button variant="light" className="me-3">
              取消
            </Button>
            <Button>存储</Button>
          </div>
        </div>
      </Modal>
       */}
      <Spin spinning={loading && !isChanged}>
        <MessageEditor
          message={message}
          onAutoSave={handleAutoSave}
          onSend={handleSend}
        />
      </Spin>
      <Tools />
    </ContentWrapper>
  );
}

const ComposeMailMemo = React.memo(ComposeMail);

export default ComposeMailMemo;
