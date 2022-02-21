import React, { useCallback, useMemo, useReducer, useRef } from 'react';

import { useRouteMatch } from 'react-router-dom';
import { Resizer } from '@asany/editor';
import classnames from 'classnames';
import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { debounce } from 'lodash';
import { Shortcuts } from '@asany/shortcuts';
import { useHistory } from 'umi';
import moment from 'moment';

import { useMailboxMessagesQuery } from '../hooks';
import { toPlainText } from '../utils';

import type { MailboxProps, MailboxRouteParams } from './MailMessageDetails';

import { Card, ContentWrapper, Input } from '@/pages/Metronic/components';
import type { MailboxMessage } from '@/types';

interface MailboxState {
  width: number;
  folder: string;
  activeId?: string;
  messages: MailboxMessage[];
}

const MIN_WIDTH = 320;
const MAX_WIDTH = 500;

type MailMessageProps = {
  mailbox: string;
  data: MailboxMessage;
  onClick: (id: string) => void;
  active: boolean;
};

function MailMessage(props: MailMessageProps) {
  const { data, active, onClick, mailbox } = props;

  const handleClick = useCallback(() => {
    onClick(data.id);
  }, [data.id, onClick]);

  return (
    <div onClick={handleClick} className={classnames('email-message d-flex flex-row', { active })}>
      <div
        className={classnames('d-flex flex-column email-message-actions', {
          'message-unread': !data.seen,
        })}
      >
        <a className="flags-read">
          <Icon
            className="svg-icon-6 svg-icon-success"
            name={data.seen ? 'Duotune/abs009' : 'Duotune/abs050'}
          />
        </a>
        <a>
          <Icon className="svg-icon-6" name="Duotune/fil016" />
        </a>
        <a>
          <Icon className="svg-icon-5" name="Duotune/gen027" />
        </a>
      </div>
      <div className="email-message-body d-flex flex-column">
        <div className="email-message-attrs">
          <Icon className="svg-icon-4 smart-type" name="Duotune/abs018" />
          <span className="email-user">{renderWhose(data, mailbox)}</span>
          <span className="inbox-time">{renderDataTime(data)}</span>
        </div>
        <div className="email-message-title">{data.subject}</div>
        <div className="email-message-summary">{renderSummary(data)}</div>
      </div>
    </div>
  );
}

function renderSummary(data: MailboxMessage) {
  if (data.mimeType == 'text/html') {
    return toPlainText(data.body);
  }
  return data.body;
}

function renderDataTime(data: MailboxMessage) {
  const mdate = moment(data.date);
  const days = moment().diff(mdate, 'days');
  if (days == 0) {
    return mdate.format('A HH:mm');
  }
  if (days == 1) {
    return mdate.fromNow();
  }
  return mdate.format('YYYY-MM-DD');
}

function renderWhose(data: MailboxMessage, mailbox: string) {
  if (mailbox == 'inbox') {
    return data.from.map((item) => item.name || item.localPart).join(',');
  }
  if (mailbox == 'sent') {
    return data.to.map((item) => item.name || item.localPart).join(',');
  }
  return data.from.map((item) => item.name || item.localPart).join(',');
}

function Mailbox(props: MailboxProps) {
  const {
    children,
    match: {
      params: { folder },
    },
  } = props;

  const match = useRouteMatch<MailboxRouteParams>({
    path: '/email/:folder/:id',
    strict: true,
    sensitive: true,
  });

  const activeId = match?.params.id;

  const history = useHistory();

  const scrollbar = useRef<OverlayScrollbarsComponent>(null);
  const state = useRef<MailboxState>({
    width: MIN_WIDTH,
    folder,
    messages: [],
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.folder = folder;
  state.current.activeId = activeId;

  const { data, refetch } = useMailboxMessagesQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      filter: {
        mailbox: folder,
      },
    },
  });

  const forceResize = useMemo(
    () =>
      debounce(() => {
        forceRender();
      }, 10),
    [],
  );

  const handleMessageClick = useCallback(
    (id: string) => {
      const message = state.current.messages.find((item) => item.id == id);
      history.push(`/email/${state.current.folder}/${id}`, { message });
    },
    [history],
  );

  const handleResize = useCallback(
    (x) => {
      state.current.width += x;
      forceResize();
    },
    [forceResize],
  );

  const handleResizeEnd = useCallback(() => {
    state.current.width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, state.current.width));
  }, []);

  const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, state.current.width));

  const pagination = useMemo(() => {
    if (!data?.mailboxMessages || !activeId) {
      return {};
    }
    const { edges, ..._pagination } = data.mailboxMessages;
    const index = edges.findIndex((item) => item.node.id == activeId);
    return {
      ..._pagination,
      current: (_pagination.currentPage - 1) * _pagination.pageSize + index + 1,
    };
  }, [data?.mailboxMessages, activeId]);

  const messages = useMemo(() => {
    if (!data?.mailboxMessages) {
      return [];
    }
    return data.mailboxMessages.edges.map((item) => item.node) as MailboxMessage[];
  }, [data?.mailboxMessages]);

  state.current.messages = messages;

  const handleShortcut = useCallback(
    (action, event?: React.KeyboardEvent) => {
      event && event.preventDefault();
      const { messages: _messages, activeId: _activeId } = state.current;
      const index = _messages.findIndex((item) => item.id == _activeId);
      if (action == 'NEXT') {
        if (index == -1) {
          handleMessageClick(_messages[0].id);
        } else if (_messages.length != index + 1) {
          handleMessageClick(_messages[index + 1].id);
        }
      } else if (action == 'PREVIOUS') {
        if (index == -1) {
          handleMessageClick(_messages[_messages.length - 1].id);
        } else if (index > 0) {
          handleMessageClick(_messages[index - 1].id);
        }
      }
    },
    [handleMessageClick],
  );

  const handleNext = useCallback(() => {
    handleShortcut('NEXT');
  }, [handleShortcut]);

  const handlePrev = useCallback(() => {
    handleShortcut('PREVIOUS');
  }, [handleShortcut]);

  const refresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <ContentWrapper className="apps-email-mailbox" header={false} footer={false}>
      <Resizer
        className={classnames('mailbox-resizer d-flex flex-column flex-lg-row')}
        style={{ width }}
        onResize={handleResize}
        onResizeEnd={handleResizeEnd}
      >
        <div className="flex-column flex-lg-row-auto w-100 mb-10 mb-lg-0">
          <Card flush className="mailbox-card">
            <Card.Header>
              <form
                className="d-flex align-items-center position-relative w-100"
                autoComplete="off"
              >
                <Icon
                  name="Duotune/gen021"
                  className="svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"
                />
                <Input solid className="px-15" size="sm" placeholder="搜索邮件…" />
              </form>
            </Card.Header>
            <Card.Body>
              <div className="mailbox-list-header">
                <Icon className="svg-icon-5 svg-icon-success" name="Duotune/com002" />
                <span className="box-name">收件箱</span>
              </div>
              <OverlayScrollbarsComponent
                ref={scrollbar}
                className="mailbox-list custom-scrollbar"
                options={{
                  scrollbars: { autoHide: 'scroll' },
                  // callbacks: {
                  //   onScrollStart: () => {
                  //     return false;
                  //   },
                  // },
                }}
              >
                <Shortcuts className="mailbox-list-inner" name="MAILBOX" handler={handleShortcut}>
                  {messages.map((item) => (
                    <MailMessage
                      onClick={handleMessageClick}
                      key={item.id}
                      data={item as any}
                      mailbox={folder}
                      active={item.id == activeId}
                    />
                  ))}
                </Shortcuts>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </div>
        <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10" />
      </Resizer>
      {React.cloneElement(children as any, {
        pagination,
        next: handleNext,
        prev: handlePrev,
        refresh,
      })}
    </ContentWrapper>
  );
}

export default Mailbox;
