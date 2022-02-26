import type { CSSProperties } from 'react';
import { useEffect } from 'react';
import React, { useCallback, useMemo, useReducer, useRef } from 'react';

import { useRouteMatch } from 'react-router-dom';
import { Resizer } from '@asany/editor';
import classnames from 'classnames';
import Icon from '@asany/icons';
import { debounce } from 'lodash';
import { useHistory } from 'umi';
import moment from 'moment';

import {
  CountUnreadDocument,
  useCountUnreadLazyQuery,
  useMailboxMessagesQuery,
  useMoveMailboxMessageToFolderMutation,
  useUpdateMailboxMessageFlagsMutation,
} from '../hooks';
import { DEFAULT_MAILBOXES, toPlainText } from '../utils';

import type { MailboxProps, MailboxRouteParams } from './MailMessageDetails';

import type { InfiniteScrollRef, ShortcutEvent } from '@/pages/Metronic/components';
import {
  Card,
  ContentWrapper,
  InfiniteScroll,
  Input,
  NProgress,
} from '@/pages/Metronic/components';
import type { MailboxMessage, MailboxMessageConnection } from '@/types';
import { sleep } from '@/utils';

interface MailboxState {
  width: number;
  folder: string;
  activeId?: string;
  pageIndex: number[];
  viewport: {
    startIndex: number;
    endIndex: number;
    size: number;
  };
  messages: MailboxMessage[];
  pages: Map<number, MailboxMessageConnection>;
  pagination: typeof DEFAULT_PAGINATION;
}

const MIN_WIDTH = 320;
const MAX_WIDTH = 500;

type MailMessageProps = {
  refresh: () => void;
  forwardNextMessage: () => void;
  style?: CSSProperties;
  mailbox: string;
  data: MailboxMessage;
  onClick: (id: string) => void;
  active: boolean;
};

type MailMessageActionsProps = {
  refresh: () => void;
  forwardNextMessage: () => void;
  data: MailboxMessage;
  mailbox: string;
};

function MailMessageActions(props: MailMessageActionsProps) {
  const { data, mailbox, refresh, forwardNextMessage } = props;

  const [toFolder] = useMoveMailboxMessageToFolderMutation({
    updateQueries: {
      mailboxMessages: (prev, { mutationResult }) => {
        const updateId = mutationResult!.data!.moveMailboxMessageToFolder.id;
        if (!prev.mailboxMessages.edges.some((item: any) => item.node.id == updateId)) {
          return prev;
        }
        return {
          ...prev,
          mailboxMessages: {
            ...prev.mailboxMessages,
            totalCount: prev.mailboxMessages.totalCount - 1,
            edges: prev.mailboxMessages.edges.filter(
              (item: any) => item.node.id != mutationResult!.data!.moveMailboxMessageToFolder.id,
            ),
          },
        };
      },
    },
  });
  const [updateFlags] = useUpdateMailboxMessageFlagsMutation({
    refetchQueries: [CountUnreadDocument],
  });

  const toggleReadState = useCallback(async () => {
    await updateFlags({
      variables: {
        id: data.id,
        flags: ['seen'],
        mode: data.seen ? 'REMOVE' : 'ADD',
      },
    });
  }, [data.id, data.seen, updateFlags]);

  const handleArchive = useCallback(async () => {
    await toFolder({
      variables: {
        id: data.id,
        mailbox: 'archive',
      },
    });
    forwardNextMessage();
    refresh();
  }, [data.id, forwardNextMessage, refresh, toFolder]);

  const handleTrash = useCallback(async () => {
    await toFolder({
      variables: {
        id: data.id,
        mailbox: 'trash',
      },
    });
    forwardNextMessage();
    refresh();
  }, [data.id, forwardNextMessage, refresh, toFolder]);

  return (
    <div
      className={classnames('d-flex flex-column email-message-actions', {
        'message-unread': !data.seen,
      })}
      onClick={(e) => e.stopPropagation()}
    >
      <a onClick={toggleReadState} className="flags-read">
        <Icon
          className="svg-icon-7 svg-icon-success"
          name={data.seen ? 'Duotune/abs009' : 'Duotune/abs050'}
        />
      </a>
      {mailbox != 'archive' && (
        <a onClick={handleArchive}>
          <Icon
            className="svg-icon-6"
            name={DEFAULT_MAILBOXES.find((item) => item.id == 'Archive')!.icon}
          />
        </a>
      )}
      <a onClick={handleTrash}>
        <Icon className="svg-icon-5" name="Duotune/gen027" />
      </a>
    </div>
  );
}

function MailMessage(props: MailMessageProps) {
  const { style, forwardNextMessage, data, active, onClick, mailbox, refresh } = props;

  const handleClick = useCallback(() => {
    onClick(data.id);
  }, [data.id, onClick]);

  return (
    <div
      style={style}
      onClick={handleClick}
      className={classnames('email-message d-flex flex-row', { active })}
    >
      <MailMessageActions
        mailbox={mailbox}
        forwardNextMessage={forwardNextMessage}
        refresh={refresh}
        data={data}
      />
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

const DEFAULT_PAGINATION = {
  current: 0,
  totalCount: 0,
  pageSize: 0,
  totalPage: 0,
  currentPage: 0,
};

const LIST_ITEM = 80;

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

  const scrollbar = useRef<InfiniteScrollRef>(null);
  const state = useRef<MailboxState>({
    width: MIN_WIDTH,
    folder,
    messages: [],
    pageIndex: [1],
    pages: new Map(),
    pagination: DEFAULT_PAGINATION,
    viewport: {
      startIndex: 0,
      endIndex: 15,
      size: 15,
    },
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.folder = folder;
  state.current.activeId = activeId;

  const { data, loading, refetch } = useMailboxMessagesQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      filter: {
        mailbox: folder,
      },
    },
  });
  const [countUnread] = useCountUnreadLazyQuery({ fetchPolicy: 'cache-and-network' });

  const forceResize = useMemo(
    () =>
      debounce(() => {
        forceRender();
      }, 10),
    [],
  );

  const handleMessageClick = useCallback(
    (id: string) => {
      const message = state.current.messages.find((item) => item && item.id == id);
      console.log('handleMessageClick', message?.seen);
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

  useMemo(() => {
    state.current.pagination = { ...DEFAULT_PAGINATION };
    state.current.messages = [];
    state.current.pages.clear();
    state.current.folder = folder;
  }, [folder]);

  // state.current.pagination = pagination;

  // state.current.messages = messages;
  // state.current.pages.set(pagination.currentPage, messages);

  const handleShortcut = useCallback(
    async (action, e: ShortcutEvent) => {
      const { messages: _messages, activeId: _activeId } = state.current;
      const index = _messages.findIndex((item) => item && item.id == _activeId);
      if (action == 'NEXT') {
        let newIndex;
        if ((index + 1) * LIST_ITEM < e.viewport.start || index * LIST_ITEM > e.viewport.end) {
          newIndex = Math.floor(e.viewport.start / LIST_ITEM);
          e.scrollbar.scroll(newIndex * LIST_ITEM);
        } else {
          newIndex = Math.min(_messages.length - 1, index == -1 ? 0 : index + 1);
          if ((index + 2) * LIST_ITEM > e.viewport.end) {
            e.scrollbar.scroll((index + 2) * LIST_ITEM - e.viewport.height);
          }
        }
        let message = _messages[newIndex];
        while (!message) {
          await sleep(600);
        }
        message = _messages[newIndex];
        handleMessageClick(message.id);
      } else if (action == 'PREVIOUS') {
        let newIndex;
        if ((index + 1) * LIST_ITEM < e.viewport.start || index * LIST_ITEM > e.viewport.end) {
          newIndex = Math.floor(e.viewport.end / LIST_ITEM);
          e.scrollbar.scroll((newIndex + 1) * LIST_ITEM - e.viewport.height);
        } else {
          newIndex = Math.max(0, index == -1 ? _messages.length - 1 : index - 1);
        }
        let message = _messages[newIndex];
        while (!message) {
          await sleep(600);
        }
        message = _messages[newIndex];
        handleMessageClick(message.id);
        if (newIndex * LIST_ITEM < e.viewport.start) {
          e.scrollbar.scroll(newIndex * LIST_ITEM);
        }
      }
    },
    [handleMessageClick],
  );

  const handleGoto = useCallback(
    async (index: number) => {
      const { messages: _messages } = state.current;
      let message = _messages[index];
      const viewport = scrollbar.current!.viewport;
      if (index * LIST_ITEM < viewport.start || index * LIST_ITEM > viewport.end) {
        scrollbar.current!.scrollTo(index * LIST_ITEM);
      }
      while (!message) {
        await sleep(600);
      }
      message = _messages[index];
      handleMessageClick(message.id);
    },
    [handleMessageClick],
  );

  const handleScrollTo = useCallback(async (index: number) => {
    while (!state.current.pagination?.totalCount) {
      await sleep(300);
    }
    state.current.pagination.current = index;
    scrollbar.current?.scrollTo((index - 1) * LIST_ITEM);
  }, []);

  const refresh = useCallback(
    (page: number) => {
      refetch({
        filter: {
          mailbox: state.current.folder,
        },
        page,
      });
      if (state.current.folder == 'inbox') {
        countUnread();
      }
    },
    [countUnread, refetch],
  );

  const mailbox = useMemo(() => {
    const _mailbox = DEFAULT_MAILBOXES.find((item) => item.id.toLowerCase() == folder);
    if (!_mailbox) {
      return {
        id: folder,
        name: folder,
        icon: undefined,
      };
    }
    return _mailbox;
  }, [folder]);

  const reset = useCallback(function (mailboxMessages: MailboxMessageConnection) {
    const { messages } = state.current;
    if (!mailboxMessages) {
      messages.length = 0;
      return;
    }
    const { currentPage, edges, totalCount, totalPage, pageSize } = mailboxMessages;
    messages.length = totalCount;

    const startIndex = (currentPage - 1) * pageSize;
    const items = edges.map((item) => item.node) as MailboxMessage[];

    items.forEach((item, i) => {
      messages[startIndex + i] = item;
    });

    // console.log('更新', mailboxMessages.currentPage);
    state.current.pages.set(currentPage, mailboxMessages);

    state.current.pagination = {
      totalPage,
      currentPage,
      totalCount,
      pageSize,
      current: state.current.pagination.current,
    };
  }, []);

  const { current: handleLoader } = useRef(async (page: number) => {
    const {
      data: { mailboxMessages },
    } = await refetch({
      filter: {
        mailbox: state.current.folder,
      },
      page,
    });
    reset(mailboxMessages as any);
  });

  useEffect(() => {
    if (!data?.mailboxMessages) {
      return;
    }
    if (data.mailboxMessages == state.current.pages.get(data.mailboxMessages.currentPage)) {
      // console.log('已缓存，忽略更新', data.mailboxMessages.currentPage);
      return;
    }
    reset(data.mailboxMessages as any);
    forceRender();
  }, [data?.mailboxMessages, reset]);

  useMemo(() => {
    if (!activeId) {
      state.current.pagination.current = -1;
    }
    const index = state.current.messages.findIndex((item) => item && item.id == activeId);
    if (index == -1) {
      return;
    }
    state.current.pagination.current = index + 1;
  }, [activeId]);

  const { messages, pagination } = state.current;

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
                {mailbox.icon && (
                  <Icon className="svg-icon-5 svg-icon-success" name={mailbox.icon} />
                )}
                <span className="box-name">{mailbox.name}</span>
              </div>
              <div className="infinite-scroll-container">
                <NProgress isAnimating={!!loading} position="top" />
                <InfiniteScroll
                  ref={scrollbar}
                  pagination={pagination}
                  itemHeight={LIST_ITEM}
                  onShortcut={handleShortcut}
                  loader={handleLoader}
                  className="mailbox-list"
                >
                  {(startIndex, endIndex, e) => {
                    if (e.isEmpty) {
                      return (
                        <div
                          className="mailbox-is-empty"
                          style={{
                            height: '100%',
                          }}
                        >
                          <img src="/assets/media/illustrations/dozzy-1/4.png" />
                          <span className="empty-title">此文件夹为空</span>
                          <span className="empty-subtitle">请查看其他文件夹</span>
                        </div>
                      );
                    }
                    return messages
                      .slice(startIndex, endIndex)
                      .map((item, index) => (
                        <MailMessage
                          style={{ top: (startIndex + index) * e.itemHeight + 1 }}
                          onClick={handleMessageClick}
                          key={item.id}
                          refresh={() => refresh(Math.ceil((startIndex + index) / e.size))}
                          forwardNextMessage={() =>
                            item.id == activeId &&
                            handleGoto(Math.min(pagination.totalCount - 1, startIndex + index))
                          }
                          data={item as any}
                          mailbox={folder}
                          active={item.id == activeId}
                        />
                      ));
                  }}
                </InfiniteScroll>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10" />
      </Resizer>
      {React.cloneElement(children as any, {
        pagination,
        scrollTo: handleScrollTo,
        goto: handleGoto,
        refresh,
        message: state.current.messages.find((item) => item && item.id == activeId),
      })}
    </ContentWrapper>
  );
}

export default Mailbox;
