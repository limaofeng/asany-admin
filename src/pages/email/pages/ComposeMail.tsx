import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import NavigationPrompt from 'react-router-navigation-prompt';
import type { RouteComponentProps } from 'react-router';

import {
  MailboxesDocument,
  useCreateMailboxMessageMutation,
  useDeleteMailboxMessageMutation,
  useMailboxMessageLazyQuery,
  useUpdateMailboxMessageMutation,
} from '../hooks';
import MailEditor from '../components/MailEditor';

import { Button, Card, ContentWrapper, Modal, Spin, Tabs } from '@/pages/Metronic/components';
import type { MailboxMessage, MailboxMessageCreateInput } from '@/types';
import { useAutoSave } from '@/pages/Metronic/components/utils';

const { TabPane } = Tabs;

const Tools = React.memo(function Tools() {
  return (
    <Card className="email-compose-tools">
      <Tabs className="nav-line-tabs-2x">
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

  const [loadMessage, { data: messageResult, loading }] = useMailboxMessageLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  const [createMessage] = useCreateMailboxMessageMutation({
    refetchQueries: [MailboxesDocument],
  });
  const [updateMessage] = useUpdateMailboxMessageMutation({
    refetchQueries: [MailboxesDocument],
  });
  const [deleteMessage] = useDeleteMailboxMessageMutation({
    refetchQueries: [MailboxesDocument],
  });

  const state = useRef<ComposeMailState>({
    isChanged: false,
    state: 'default',
    message: (location.state as any)?.message,
  });
  const temp = useRef({ saving: false });

  const [autoSave, saving] = useAutoSave<MailboxMessageCreateInput>(async (_, values) => {
    const { message } = state.current;
    if (!message) {
      const { data } = await createMessage({
        variables: {
          input: values,
        },
      });
      state.current.message = data?.message as any;
    } else {
      const { data } = await updateMessage({
        variables: {
          id: message.id,
          input: values,
        },
      });
      state.current.message = data?.message as any;
    }
    state.current.isChanged = true;
  }, state.current.message || {});

  temp.current.saving = false;

  const handleAutoSave = useCallback(
    (values) => {
      autoSave(values);
    },
    [autoSave],
  );

  const handleDoNotStore = useCallback(
    (onConfirm) => async () => {
      await deleteMessage({ variables: { id: state.current.message!.id } });
      onConfirm();
    },
    [deleteMessage],
  );

  const saveState = useMemo(() => {
    if (saving) {
      return (state.current.state = 'saving');
    }
    if (state.current.state != 'default') {
      return (state.current.state = 'saved');
    }
    return state.current.state;
  }, [saving]);

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
        <MailEditor message={message} saveState={saveState} onAutoSave={handleAutoSave} />
      </Spin>
      <Tools />
    </ContentWrapper>
  );
}

export default React.memo(ComposeMail);
