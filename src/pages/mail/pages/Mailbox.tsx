import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import EventEmitter from 'events';

import Icon from '@asany/icons';
import { Resizer } from '@asany/sunmao';
import { Outlet, useOutlet, useParams } from '@umijs/max';
import classnames from 'classnames';
import { debounce } from 'lodash';

import { ContentWrapper } from '@/layouts/components';
import {
  Button,
  Card,
  InfiniteScroll,
  Input,
  Modal,
  NProgress,
} from '@/metronic';
import type { InfiniteScrollRef, RowRendererParams } from '@/metronic/typings';
import type { MailboxMessage, MailboxMessageConnection } from '@/types';
import { delay, sleep } from '@/utils';

import MessageItem from '../components/MessageItem';
import {
  MailboxesDocument,
  useClearTrashMailboxMutation,
  useMailboxMessagesLazyQuery,
} from '../hooks';
import type { RefreshEvent, UseMessage } from '../typings';
import { DEFAULT_MAILBOXES, DEFAULT_MAILBOXES_ALL } from '../utils';

interface MailboxState {
  width: number;
  folder?: string;
  activeIndex: number;
  activeId?: string;
  loading: boolean;
  message?: MailboxMessage;
  pagination: typeof DEFAULT_PAGINATION;
}

const MIN_WIDTH = 320;
const MAX_WIDTH = 500;

const DEFAULT_PAGINATION = {
  totalCount: 0,
  pageSize: 0,
  totalPage: 0,
  currentPage: 0,
};

const LIST_ITEM = 80;

type PaginationType = typeof DEFAULT_PAGINATION;

type LoadMessageUtils = {
  refetch: (page: number) => Promise<void>;
  refetchWithRemove: (index: number) => Promise<void>;
  loadMessage: (index: number) => Promise<MailboxMessage>;
};

type UseMailboxMessagesMagicQuery = [
  PaginationType,
  boolean,
  UseMessage,
  LoadMessageUtils,
];

function useMailboxMessagesMagicQuery(
  mailbox: string,
): UseMailboxMessagesMagicQuery {
  const emitter = useRef(new EventEmitter());
  const state = useRef<{
    page: number;
    mailbox: string;
    loading: boolean;
    messages: MailboxMessage[];
    pagination: PaginationType;
  }>({
    page: 1,
    mailbox,
    loading: false,
    messages: [],
    pagination: { ...DEFAULT_PAGINATION },
  });

  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [_loadMailboxMessages, { data, loading, refetch }] =
    useMailboxMessagesLazyQuery({
      fetchPolicy: 'cache-and-network',
    });

  state.current.loading = loading;

  const parseData = useCallback((pagination: MailboxMessageConnection) => {
    pagination.edges
      .map((item) => item.node)
      .forEach((msg, _index) => {
        const index =
          pagination.pageSize * (pagination.currentPage - 1) + _index;
        state.current.messages[index] = msg as any;
      });
    emitter.current.emit('messages');
    // console.log('messages', state.current.messages);
  }, []);

  const handleRefetch = useCallback(
    async (page: number) => {
      if (state.current.loading && state.current.page === page) {
        return;
      }
      while (state.current.loading) {
        await sleep(120);
      }
      state.current.page = page;
      refetch({
        where: {
          mailbox: state.current.mailbox,
        },
        page: state.current.page,
      });
    },
    [refetch],
  );

  const handleRefetchWithRemove = useCallback(
    async (index: number) => {
      const pageSize = state.current.pagination.pageSize;
      if (
        state.current.pagination.totalCount %
          state.current.pagination.pageSize ===
        1
      ) {
        state.current.pagination.totalPage--;
      }
      state.current.pagination.totalCount--;
      state.current.messages.splice(index, 1);
      const page = Math.ceil((index + 1) / pageSize);
      handleRefetch(page);
    },
    [handleRefetch],
  );

  const loadMailboxMessages = useCallback(
    async (page: number) => {
      while (state.current.loading) {
        await sleep(120);
      }
      if (
        state.current.page === page ||
        page > state.current.pagination.totalPage
      ) {
        return;
      }
      state.current.page = page;
      _loadMailboxMessages({
        variables: {
          where: {
            mailbox: state.current.mailbox,
          },
          page: state.current.page,
        },
      });
    },
    [_loadMailboxMessages],
  );

  const loadMessage = useCallback(
    async (index: number) => {
      let message = state.current.messages[index];

      if (!message) {
        do {
          message = state.current.messages[index];
          if (!message) {
            await loadMailboxMessages(
              Math.ceil((index + 1) / state.current.pagination.pageSize),
            );
            await sleep(30);
          }
          if (index >= state.current.messages.length) {
            console.log(
              `索引超出最大长度 [${index}/${state.current.messages.length}]`,
            );
            return state.current.messages[index - 1];
          }
        } while (!message);
      }

      return message;
    },
    [loadMailboxMessages],
  );

  useEffect(() => {
    emitter.current.setMaxListeners(1000);
  }, []);

  useEffect(() => {
    if (state.current.mailbox !== mailbox) {
      state.current.mailbox = mailbox;
      state.current.pagination = { ...DEFAULT_PAGINATION };
      state.current.messages.length = 0;
      state.current.page = 1;
    }
    _loadMailboxMessages({
      variables: {
        where: {
          mailbox,
        },
        page: state.current.page,
      },
    });
  }, [_loadMailboxMessages, mailbox]);

  useEffect(() => {
    if (loading || !data?.mailboxMessages) {
      return;
    }
    state.current.pagination = data.mailboxMessages
      ? { ...data.mailboxMessages }
      : state.current.pagination;
    parseData(data.mailboxMessages as any);
    forceRender();
  }, [parseData, data?.mailboxMessages, loading]);

  const useMessage = (index: number): MailboxMessage | undefined => {
    const [, _forceRender] = useReducer((s) => s + 1, 0);
    const latestSelectedState = useRef<{
      message?: MailboxMessage;
      index: number;
      timer?: NodeJS.Timer;
    }>({ index });

    latestSelectedState.current.index = index;

    latestSelectedState.current.message = state.current.messages[index];

    useEffect(() => {
      if (index === -1) {
        return;
      }
      const _index = index + 1;

      let _timer: NodeJS.Timer;
      const checkResult = async () => {
        while (state.current.loading) {
          await sleep(300);
        }
        if (!!latestSelectedState.current.message) {
          latestSelectedState.current.timer &&
            clearTimeout(
              latestSelectedState.current.timer as unknown as number,
            );
          return;
        }
        loadMailboxMessages(
          Math.ceil(_index / state.current.pagination.pageSize),
        );
        _timer = setTimeout(checkResult, 300);
      };

      _timer = setTimeout(checkResult, 300);
      return () => {
        _timer && clearTimeout(_timer as unknown as number);
      };
    }, [index]);

    const checkForUpdates = useCallback(() => {
      const newSelectedState =
        state.current.messages[latestSelectedState.current.index];
      if (newSelectedState === latestSelectedState.current.message) {
        return;
      }
      latestSelectedState.current.message = newSelectedState;
      _forceRender();
    }, []);

    useEffect(() => {
      emitter.current.addListener('messages', checkForUpdates);
      return () => {
        emitter.current.removeListener('messages', checkForUpdates);
      };
    }, [checkForUpdates]);

    return latestSelectedState.current.message;
  };

  return [
    state.current.pagination,
    loading,
    useMessage,
    {
      loadMessage,
      refetch: handleRefetch,
      refetchWithRemove: handleRefetchWithRemove,
    },
  ];
}

function Mailbox() {
  const match = useMatch({
    path: '/mail/:folder/:id',
    end: false,
  });

  const activeId = match?.params.id;

  const { folder } = useParams<{
    folder: string;
  }>();

  const navigate = useNavigate();

  const scrollbar = useRef<InfiniteScrollRef>(null);
  const state = useRef<MailboxState>({
    width: MIN_WIDTH,
    folder,
    activeIndex: -1,
    loading: false,
    pagination: DEFAULT_PAGINATION,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  state.current.folder = folder;
  state.current.activeId = activeId;

  const [clearTrash] = useClearTrashMailboxMutation({
    refetchQueries: [MailboxesDocument],
  });

  const [
    pagination,
    loading,
    useMessage,
    { loadMessage, refetch, refetchWithRemove },
  ] = useMailboxMessagesMagicQuery(folder!);

  state.current.loading = loading;
  state.current.pagination = pagination;

  const forceResize = useMemo(
    () =>
      debounce(() => {
        forceRender();
      }, 10),
    [],
  );

  const handleMessageClick = useCallback(
    (message: MailboxMessage) => {
      state.current.activeIndex = message.index!;
      navigate(`/mail/${message.mailboxName.toLowerCase()}/${message.id}`);
    },
    [navigate],
  );

  state.current.message = useMessage(state.current.activeIndex);

  const handleScrollToIndex = useCallback(
    async (e: any) => {
      if (state.current.activeIndex === e.index) {
        return;
      }
      const _message = await loadMessage(e.index);
      state.current.activeIndex = e.index;
      if (state.current.activeId === _message.id) {
        forceRender();
        return;
      }
      navigate(`/mail/${_message.mailboxName.toLowerCase()}/${_message.id}`);
    },
    [history, loadMessage],
  );

  const handleResize = useCallback(
    (x: number) => {
      state.current.width += x;
      forceResize();
    },
    [forceResize],
  );

  const handleResizeEnd = useCallback(() => {
    state.current.width = Math.min(
      MAX_WIDTH,
      Math.max(MIN_WIDTH, state.current.width),
    );
  }, []);

  const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, state.current.width));

  useMemo(() => {
    state.current.pagination = { ...DEFAULT_PAGINATION };
    state.current.activeIndex = -1;
    state.current.folder = folder;
  }, [folder]);

  const handleGoto = useCallback(
    async (index: number) => {
      const _message = await loadMessage(index);
      state.current.activeIndex = index;
      navigate(`/mail/${_message.mailboxName.toLowerCase()}/${_message.id}`);
    },
    [navigate, loadMessage],
  );

  const refresh = useCallback(
    async (e: RefreshEvent) => {
      const page = Math.ceil((e.index + 1) / state.current.pagination.pageSize);
      if (['toFolder', 'delete'].includes(e.type)) {
        await refetchWithRemove(e.index);
      } else {
        await refetch(page!);
      }
    },
    [refetch, refetchWithRemove],
  );

  const handleTrashClear = useCallback(async () => {
    let _count = 0;
    const result = await Modal.confirm({
      title: '清空&nbsp;&nbsp;回收站',
      content: '确定永久删除 回收站 文件夹内的全部邮件？',
      preConfirm: async () => {
        const okButton = document.querySelector('.swal2-confirm')!;
        okButton.textContent = '清理中...';
        const spinner = document.createElement('span');
        spinner.classList.add(
          'spinner-border-sm',
          'ms-2',
          'spinner-border',
          'align-middle',
        );
        okButton.appendChild(spinner);
        const _result = await delay(clearTrash(), 350);
        _count = _result.data.clearMailboxMessagesInTrashMailbox;
      },
    });
    if (!result.isConfirmed) {
      return;
    }
    state.current.activeIndex = -1;
    forceRender();
    refetch(1);
    navigate(`/mail/${state.current.folder}`);
    Modal.success({
      title: '操作成功',
      content: `回收站已被清空, 共删除 ${_count} 封邮件`,
      timer: 3000,
    });
  }, [clearTrash, navigate, refetch]);

  const mailbox = useMemo(() => {
    const _mailbox = DEFAULT_MAILBOXES_ALL.find(
      (item) => item.id.toLowerCase() === folder,
    );
    if (!_mailbox) {
      return {
        id: folder,
        name: folder,
        icon: undefined,
      };
    }
    return _mailbox;
  }, [folder]);

  const handleScroll = useCallback(() => {}, []);

  const noRowsRenderer = useCallback(
    () => (
      <div
        className="mailbox-is-empty"
        style={{
          height: '100%',
        }}
      >
        <img src="/assets/media/illustrations/dozzy-1/4.png" />
        <span className="empty-title">
          {loading ? '加载中...' : '此文件夹为空'}
        </span>
        <span className="empty-subtitle">
          {loading ? '稍等一会,正在获取数据' : '请查看其他文件夹'}
        </span>
      </div>
    ),
    [loading],
  );

  const messageRowRenderer = useCallback(
    ({ key, style, index, isActive }: RowRendererParams) => {
      const { folder: _folder, pagination: _pagination } = state.current;
      return (
        <MessageItem
          index={index}
          style={{ ...style }}
          onClick={handleMessageClick}
          useMessage={useMessage}
          key={key}
          refresh={refresh}
          forwardNextMessage={async () => {
            if (state.current.activeIndex === -1) {
              return;
            }
            if (_pagination.totalCount === 0) {
              navigate(`/mail/${state.current.folder}`);
            } else if (index < state.current.activeIndex) {
              state.current.activeIndex -= 1;
              forceRender();
            } else {
              const message = await loadMessage(state.current.activeIndex);
              navigate(`/mail/${state.current.folder}/${message.id}`);
            }
          }}
          mailbox={_folder!}
          active={!!isActive}
        />
      );
    },
    [handleMessageClick, history, loadMessage, refresh, useMessage],
  );

  const { activeIndex, message } = state.current;

  const children = useOutlet();

  console.log('Mailbox render', children);

  return (
    <ContentWrapper
      className="apps-email-mailbox"
      contentClassName="ms-0 me-0 mw-100"
      header={false}
      footer={false}
    >
      <Resizer
        className={classnames('mailbox-resizer d-flex flex-column flex-lg-row')}
        style={{ width }}
        onResize={handleResize}
        onResizeEnd={handleResizeEnd}
      >
        <div className="flex-column flex-lg-row-auto w-100 mb-10 mb-lg-0">
          <Card
            flush
            className="mailbox-card border-left-0 border-top-0 border-bottom-0"
          >
            <Card.Header className="px-4">
              <form
                className="d-flex align-items-center position-relative w-100"
                autoComplete="off"
              >
                <Icon
                  name="Duotune/gen021"
                  className="svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-2 translate-middle-y"
                />
                <Input solid className="px-10" placeholder="搜索邮件…" />
              </form>
            </Card.Header>
            <Card.Body>
              <div className="mailbox-list-header">
                {mailbox.icon && (
                  <Icon
                    className="svg-icon-5 svg-icon-primary"
                    name={mailbox.icon}
                  />
                )}
                <span className="box-name">{mailbox.name}</span>
                {mailbox.id === DEFAULT_MAILBOXES.Trash.id &&
                  !!pagination.totalCount && (
                    <div className="box-actions">
                      <Button
                        className="trash-clear"
                        variant="light-danger"
                        size="sm"
                        activeColor="light-danger"
                        onClick={handleTrashClear}
                      >
                        清空&nbsp;&nbsp;回收站
                      </Button>
                    </div>
                  )}
              </div>
              <div className="infinite-scroll-container">
                <NProgress isAnimating={!!loading} position="top" />
                <InfiniteScroll
                  ref={scrollbar}
                  rowCount={pagination.totalCount}
                  rowHeight={LIST_ITEM}
                  scrollToIndex={state.current.activeIndex}
                  onScrollToIndex={handleScrollToIndex}
                  onScroll={handleScroll}
                  rowRenderer={messageRowRenderer}
                  noRowsRenderer={noRowsRenderer}
                  className="mailbox-list"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10" />
      </Resizer>
      {activeId ? (
        <Outlet
          context={{
            pagination,
            activeIndex,
            goto: handleGoto,
            refresh,
            message,
          }}
        />
      ) : (
        <div className="mail-message-details mailbox-message-is-empty">
          <img src="/assets/media/illustrations/sketchy-1/16.png" />
        </div>
      )}
    </ContentWrapper>
  );
}

export default Mailbox;
