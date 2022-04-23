import { useCallback, useState } from 'react';

import $ from 'jquery';
import classnames from 'classnames';
import { Icon } from '@asany/icons';
import moment from 'moment';

import { displayName } from '../utils';

import Avatar from '@/components/Metronic/components/base/Symbol/Avatar';
import type { MailboxMessage } from '@/types';
import { Popover, Tooltip } from '@/components/Metronic';
import { toPlainText } from '@/components/Metronic/components/utils/format';

interface MessageWrapperProps {
  mailbox: string;
  message?: MailboxMessage;
}

function MessageWrapper(props: MessageWrapperProps) {
  const { message, mailbox } = props;
  const [expand, setExpand] = useState(true);

  const handleHandover = useCallback(
    (e) => {
      if (!$(e.target).hasClass('message-handover')) {
        return;
      }
      setExpand((_expand) => !_expand);
    },
    [setExpand],
  );

  return (
    <div className={classnames('message_wrapper', { shrink: !expand })}>
      {/*--begin::Message header--*/}
      <div
        className="d-flex flex-wrap gap-2 cursor-pointer message-handover"
        onClick={handleHandover}
      >
        {/*--begin::Author--*/}
        <div className="d-flex align-items-center message-handover">
          {/*--begin::Avatar--*/}
          <Avatar
            alt={message?.from.map(displayName).join('、')}
            src="assets/media/avatars/300-6.jpg"
            size={50}
            labelClassName="fs-2"
            className="me-4"
          />
          {/* <div className="symbol symbol-50 me-4">
            <span
              className="symbol-label"
              style={{ backgroundImage: 'url("assets/media/avatars/300-6.jpg")' }}
            />
          </div>*/}
          {/*--end::Avatar--*/}
          <div className="pe-5">
            {/*--begin::Author details--*/}
            <div className="d-flex align-items-center flex-wrap gap-1">
              <a className="fw-bolder text-dark text-hover-primary">
                {message?.from.map(displayName).join('、')}
              </a>
              <Icon className="svg-icon-7 svg-icon-success mx-3" name="Duotune/abs050" />
              <span className="text-muted fw-bolder">
                {message && moment(message!.date).fromNow()}
              </span>
            </div>
            <Popover
              stopPropagation
              content={
                <div
                  className="menu menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7"
                  data-kt-menu="true"
                >
                  <table className="table mb-0">
                    <tbody>
                      {mailbox != 'sent' && (
                        <tr>
                          <td className="w-75px text-muted">发件人</td>
                          <td>{message?.from.join('、')}</td>
                        </tr>
                      )}
                      {mailbox != 'inbox' && (
                        <tr>
                          <td className="w-75px text-muted">收件人</td>
                          <td>{message?.to.join('、')}</td>
                        </tr>
                      )}
                      <tr>
                        <td className="text-muted">时间</td>
                        <td>{message && moment(message.date).format('lll')}</td>
                      </tr>
                      {/* <tr>
                        <td className="text-muted">主题</td>
                        <td>{message?.subject}</td>
                      </tr> */}
                      {message?.replyTo && (
                        <tr>
                          <td className="text-muted">回复</td>
                          <td>{message.replyTo.map(displayName).join('、')}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              }
              placement="bottom-start"
            >
              <div className={classnames('inbox-message-details', { 'd-none': !expand })}>
                <span className="text-muted fw-bold">
                  发送给 {mailbox == 'inbox' ? '我' : message?.to.map(displayName).join('、')}
                </span>
                {/*--begin::Menu toggle--*/}
                <a
                  className="me-1"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                >
                  <Icon className="svg-icon-5 m-0" name="Duotune/arr072" />
                </a>
              </div>
            </Popover>
            <div
              className={classnames(
                'message_wrapper_preview-message message-handover text-muted fw-bold',
                {
                  'd-none': expand,
                },
              )}
            >
              {message?.mimeType == 'text/html' ? toPlainText(message.body || '') : message?.body}
            </div>
          </div>
        </div>
        {/*--end::Author--*/}
        {/*--begin::Actions--*/}
        <div className="message_wrapper_actions d-flex align-items-center flex-wrap gap-2">
          {/*--begin::Date--*/}
          <span className="mail-message-date fw-bold text-muted me-3">
            {message && moment(message!.date).format('YYYY-MM-DD A HH:mm')}
          </span>
          {/*--end::Date--*/}
          <div className="mail-message-actions d-flex">
            <Tooltip placement="bottom" title="收藏">
              <a className="btn btn-icon btn-clear btn-active-light-primary me-3">
                <Icon name="Duotune/gen029" className="svg-icon-2 m-0" />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" title="设置为重要">
              <a className="btn btn-icon btn-clear btn-active-light-primary me-3">
                <Icon name="Duotune/gen056" className="svg-icon-2 m-0" />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" title="回复">
              <a className="btn btn-icon btn-clear btn-active-light-primary me-3">
                <Icon name="Duotune/gen055" className="svg-icon-2 m-0" />
              </a>
            </Tooltip>
            {/*--begin::Settings--*/}
            <a
              className="btn btn-icon btn-clear btn-active-light-primary"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Settings"
            >
              {/*--begin::Svg Icon | path: icons/duotune/general/gen053.svg--*/}
              <span className="svg-icon svg-icon-2 m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect x="10" y="10" width="4" height="4" rx="2" fill="black" />
                  <rect x="10" y="3" width="4" height="4" rx="2" fill="black" />
                  <rect x="10" y="17" width="4" height="4" rx="2" fill="black" />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
            </a>
            {/*--end::Settings--*/}
          </div>
        </div>
        {/*--end::Actions--*/}
      </div>
      {/*--end::Message header--*/}
      {/*--begin::Message content--*/}
      <div
        className={classnames('collapse fade', { show: expand })}
        data-kt-inbox-message="message"
      >
        <div className="py-5" dangerouslySetInnerHTML={{ __html: message?.body || '' }} />
      </div>
      {/*--end::Message content--*/}
    </div>
  );
}

type MessageDetailsProps = {
  message: MailboxMessage;
  mailbox: string;
};

function MessageDetails(props: MessageDetailsProps) {
  const { message, mailbox } = props;
  return (
    <>
      <div className="d-flex flex-wrap gap-2 justify-content-between mb-8">
        <div className="d-flex align-items-center flex-wrap gap-2">
          {/*--begin::Heading--*/}
          <h2 className="fw-bold me-3 my-1">{message?.subject || '(无主题)'}</h2>
          {/*--begin::Heading--*/}
          {/*--begin::Badges-
              <Badge className="my-1 me-2" lightStyle="primary">
                inbox
              </Badge>
              <Badge className="my-1" lightStyle="danger">
                important
              </Badge>
              -*/}
        </div>
        <div className="d-flex">
          <Tooltip placement="bottom" title="打印">
            <a className="btn btn-icon btn-light btn-active-light-primary me-2">
              <i className="bi bi-printer-fill fs-2" />
            </a>
          </Tooltip>
        </div>
      </div>
      <MessageWrapper message={message} mailbox={mailbox} />
      <div className="separator my-6" />
    </>
  );
}

export default MessageDetails;
