import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import NavigationPrompt from 'react-router-navigation-prompt';
import type { RouteComponentProps } from 'react-router';
import { useHistory } from 'umi';

import {
  MailboxesDocument,
  useDeleteMailboxMessageMutation,
  useMailboxMessageLazyQuery,
} from '../hooks';
import MessageEditor from '../components/MessageEditor';

import { Button, Card, ContentWrapper, Modal, Spin, Tabs } from '@/pages/Metronic/components';
import type { MailboxMessage } from '@/types';
import { sleep } from '@/utils';

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

type ComposeMailRouteParams = {
  id?: string;
};

type ComposeMailState = {
  state: 'default' | 'saving' | 'saved';
  isChanged: boolean;
  message?: MailboxMessage;
};

type ComposeMailProps = RouteComponentProps<ComposeMailRouteParams>;

function ComposeMail(props: ComposeMailProps) {
  const {
    match: {
      params: { id: messageId },
    },
    location,
  } = props;

  const history = useHistory();

  const [loadMessage, { data: messageResult, loading }] = useMailboxMessageLazyQuery({
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
      history.push(`/mail/sent/${message.id}`);
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
    (onConfirm) => async () => {
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

  return (
    <ContentWrapper className="apps-email-compose" footer={false}>
      <NavigationPrompt disableNative when={!!message?.id && isChanged}>
        {({ onConfirm, onCancel }) => (
          <Modal
            centered
            visible={true}
            footer={null}
            onCancel={onCancel}
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
                <p> 此邮件尚未发送，且含有未存储的更改内容。您可以先将其存储为草稿，稍后再处理。</p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">
                <Button variantStyle="light" variant="danger" onClick={handleDoNotStore(onConfirm)}>
                  不存储
                </Button>
              </div>
              <div>
                <Button variant="light" className="me-3" onClick={onCancel}>
                  取消
                </Button>
                <Button onClick={onConfirm}>存储</Button>
              </div>
            </div>
          </Modal>
        )}
      </NavigationPrompt>
      <Spin spinning={loading && !isChanged}>
        <MessageEditor message={message} onAutoSave={handleAutoSave} onSend={handleSend} />
      </Spin>
      <Tools />
    </ContentWrapper>
  );
}

export default React.memo(ComposeMail);
