import type { CSSProperties } from 'react';
import { useCallback } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';
import moment from 'moment';
import ContentLoader from 'react-content-loader';
import { useHistory } from 'umi';

import {
  CountUnreadDocument,
  MailboxesDocument,
  useDeleteMailboxMessageMutation,
  useMoveMailboxMessageToFolderMutation,
  useUpdateMailboxMessageFlagsMutation,
} from '../hooks';
import type { RefreshEvent, UseMessage } from '../typings';
import { DEFAULT_MAILBOXES, displayName } from '../utils';

import { Modal } from '@/metronic';
import { toPlainText } from '@/metronic/utils/format';
import type { MailboxMessage } from '@/types';

export type MessageItemProps = {
  index: number;
  refresh: (e: RefreshEvent) => void;
  forwardNextMessage: () => void;
  useMessage: UseMessage;
  style?: CSSProperties;
  mailbox: string;
  onClick: (message: MailboxMessage) => void;
  active: boolean;
};

function renderSummary(data: MailboxMessage) {
  if (data.mimeType == 'text/html') {
    return toPlainText(data.body || '');
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

function renderWhose(data: MailboxMessage) {
  if (data.mailboxName == DEFAULT_MAILBOXES.INBOX.id) {
    return data.from.map(displayName).join('、');
  }
  if (data.mailboxName == DEFAULT_MAILBOXES.Sent.id) {
    return data.to.map(displayName).join('、');
  }
  return data.to.map(displayName).join('、');
}

type MessageItemActionsProps = {
  index: number;
  refresh: (e: RefreshEvent) => void;
  forwardNextMessage: () => void;
  data: MailboxMessage;
};

function MessageItemActions(props: MessageItemActionsProps) {
  const { index, data, refresh, forwardNextMessage } = props;

  const [toFolder] = useMoveMailboxMessageToFolderMutation({
    refetchQueries: [CountUnreadDocument, MailboxesDocument],
  });
  const [updateFlags] = useUpdateMailboxMessageFlagsMutation({
    refetchQueries: [CountUnreadDocument],
  });
  const [deleteMailboxMessage] = useDeleteMailboxMessageMutation({
    refetchQueries: [MailboxesDocument],
  });

  const toggleReadState = useCallback(async () => {
    await updateFlags({
      variables: {
        id: data.id,
        flags: ['seen'],
        mode: data.seen ? 'REMOVE' : 'ADD',
      },
    });
    refresh({ type: 'updateFlags', key: data.id, index });
  }, [data.id, data.seen, index, refresh, updateFlags]);

  const handleArchive = useCallback(async () => {
    await toFolder({
      variables: {
        id: data.id,
        mailbox: 'archive',
      },
    });
    forwardNextMessage();
    refresh({ type: 'toFolder', key: data.id, index });
  }, [data.id, forwardNextMessage, refresh, toFolder, index]);

  const handleTrash = useCallback(async () => {
    if (
      data.mailboxName == DEFAULT_MAILBOXES.Drafts.id ||
      data.mailboxName == DEFAULT_MAILBOXES.Trash.id
    ) {
      const result = await Modal.confirm({
        title: '警告',
        content:
          data.mailboxName == DEFAULT_MAILBOXES.Trash.id
            ? '确定永久删除信息？'
            : '确定永久删除草稿？',
      });
      if (!result.isConfirmed) {
        return;
      }
      await deleteMailboxMessage({
        variables: {
          id: data.id,
        },
      });
      refresh({ type: 'delete', key: data.id, index });
    } else {
      await toFolder({
        variables: {
          id: data.id,
          mailbox: 'trash',
        },
      });
      refresh({ type: 'toFolder', key: data.id, index });
    }
    forwardNextMessage();
  }, [
    data.mailboxName,
    data.id,
    forwardNextMessage,
    deleteMailboxMessage,
    refresh,
    index,
    toFolder,
  ]);

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
      {![
        DEFAULT_MAILBOXES.Archive.id,
        DEFAULT_MAILBOXES.Drafts.id,
        DEFAULT_MAILBOXES.Trash.id,
      ].includes(data.mailboxName) && (
        <a onClick={handleArchive}>
          <Icon className="svg-icon-6" name={DEFAULT_MAILBOXES.Archive.icon} />
        </a>
      )}
      <a onClick={handleTrash}>
        <Icon className="svg-icon-5" name="Duotune/gen027" />
      </a>
    </div>
  );
}

function MessageItem(props: MessageItemProps) {
  const { useMessage, style, forwardNextMessage, active, index, onClick, refresh } = props;

  const history = useHistory();

  const data = useMessage(index);

  const handleClick = useCallback(() => {
    onClick({ ...data, index } as any);
  }, [data, index, onClick]);

  const handleDoubleClick = useCallback(() => {
    if (data!.mailboxName != DEFAULT_MAILBOXES.Drafts.id) {
      return;
    }
    history.push(`/mail/compose/${data!.id}`, { message: data });
  }, [data, history]);

  return (
    <div
      style={style}
      onClick={data && handleClick}
      onDoubleClick={data && handleDoubleClick}
      className={classnames('email-message d-flex flex-row', { active })}
    >
      {!data ? (
        <div className="email-message-loading">
          <ContentLoader
            speed={2}
            width={500}
            height={69}
            viewBox="0 0 500 69"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="24" y="3" rx="0" ry="0" width="476" height="18" />
            <rect x="0" y="50" rx="0" ry="0" width="500" height="16" />
            <rect x="0" y="3" rx="2" ry="2" width="18" height="18" />
            <rect x="0" y="27" rx="0" ry="0" width="500" height="16" />
          </ContentLoader>
        </div>
      ) : (
        <>
          <MessageItemActions
            forwardNextMessage={forwardNextMessage}
            index={index}
            refresh={refresh}
            data={data}
          />
          <div className="email-message-body d-flex flex-column">
            <div className="email-message-attrs">
              <Icon className="svg-icon-4 smart-type" name="Duotune/abs018" />
              <span className="email-user">{renderWhose(data) || '(无收件人)'}</span>
              <span className="inbox-time">{renderDataTime(data)}</span>
            </div>
            <div className="email-message-title">{data.subject || '(无主题)'}</div>
            <div className="email-message-summary">
              {renderSummary(data) || '此邮件中没有文本内容。'}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MessageItem;
