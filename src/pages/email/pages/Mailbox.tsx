import { useCallback, useMemo, useReducer, useRef } from 'react';

import type { RouteComponentProps } from 'react-router-dom';
import { Resizer } from '@asany/editor';
import classnames from 'classnames';
import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { debounce } from 'lodash';
import { Shortcuts } from '@asany/shortcuts';

import MailMessageDetails from '../components/MailMessageDetails';

import { Card, ContentWrapper, Input } from '@/pages/Metronic/components';

type MailboxProps = RouteComponentProps<{ folder: string }>;

interface MailboxState {
  width: number;
}

const MIN_WIDTH = 320;
const MAX_WIDTH = 500;

type MailMessageProps = {
  active: boolean;
};

function MailMessage(props: MailMessageProps) {
  const { active } = props;
  return (
    <div className={classnames('email-message d-flex flex-row', { active })}>
      <div className="d-flex flex-column email-message-actions">
        <Icon className="svg-icon-6" name="Duotune/abs009" />
        <Icon className="svg-icon-6" name="Duotune/fil016" />
        <Icon className="svg-icon-5" name="Duotune/gen027" />
      </div>
      <div className="email-message-body d-flex flex-column">
        <div className="email-message-attrs">
          <Icon className="svg-icon-4 smart-type" name="Duotune/abs018" />
          <span className="email-user">发件人</span>
          <span className="inbox-time">上午 3:06</span>
        </div>
        <div className="email-message-title">邮件标题。。。。。</div>
        <div className="email-message-summary">邮件摘要</div>
      </div>
    </div>
  );
}

function Mailbox(props: MailboxProps) {
  const {
    match: {
      params: { folder },
    },
  } = props;
  console.log('folder', folder);

  const scrollbar = useRef<OverlayScrollbarsComponent>(null);
  const state = useRef<MailboxState>({
    width: MIN_WIDTH,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const forceResize = useMemo(
    () =>
      debounce(() => {
        forceRender();
      }, 10),
    [],
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

  const handleShortcut = useCallback((action, event: React.KeyboardEvent) => {
    console.log(action, document.activeElement, event, scrollbar.current);
    event.preventDefault();
  }, []);

  return (
    <ContentWrapper className="apps-email-mailbox" header={false} footer={false}>
      <Resizer
        className={classnames('mailbox-resizer d-flex flex-column flex-lg-row', {
          // disabled: !keepOpen,
          // minimizable,
        })}
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
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                    <MailMessage key={item} active={item == 1} />
                  ))}
                </Shortcuts>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </div>
        <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10" />
      </Resizer>
      <MailMessageDetails />
    </ContentWrapper>
  );
}

export default Mailbox;
