import { useCallback, useEffect, useRef, useState } from 'react';

import $ from 'jquery';
import { Icon } from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import type { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classnames from 'classnames';

import {
  useMailboxMessageQuery,
  useMoveMailboxMessageToFolderMutation,
  useUpdateMailboxMessageFlagsMutation,
} from '../hooks';
import { DEFAULT_MAILBOXES, toPlainText } from '../utils';

import type { MailboxMessage } from '@/types';
import { Badge, Button, Popover, Tooltip } from '@/pages/Metronic/components';
import Avatar from '@/pages/Metronic/components/base/Symbol/Avatar';

export type MailboxRouteParams = {
  folder: string;
  id?: string;
};

type MailboxLocationState = {
  message?: MailboxMessage;
};

export type MailboxProps = RouteComponentProps<MailboxRouteParams> & {
  children: React.ReactNode;
};

type ActionType = 'archive' | 'spam' | 'deleted' | 'read' | 'unread';

type MailMessageActionsProps = {
  onAction: (action: ActionType) => void;
  message: MailboxMessage;
  mailbox: string;
};

function MailMessageActions(props: MailMessageActionsProps) {
  const { message, mailbox, onAction } = props;
  const buildClick = useCallback(
    (action: ActionType) => () => {
      onAction(action);
    },
    [onAction],
  );
  return (
    <div className="d-flex">
      <Tooltip placement="bottom" title="返回">
        <Link
          className="btn btn-sm btn-icon btn-clear btn-active-light-primary me-3"
          to={`/email/${mailbox}`}
        >
          <Icon name="Duotune/arr063" className="svg-icon-1 m-0" />
        </Link>
      </Tooltip>
      <Tooltip placement="bottom" title="存档">
        <a
          onClick={buildClick('archive')}
          className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
        >
          <Icon
            name={DEFAULT_MAILBOXES.find((item) => item.id == 'Archive')!.icon}
            className="svg-icon-2 m-0"
          />
        </a>
      </Tooltip>
      <Tooltip placement="bottom" title="垃圾邮件">
        <a
          onClick={buildClick('spam')}
          className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
        >
          <Icon
            name={DEFAULT_MAILBOXES.find((item) => item.id == 'Spam')!.icon}
            className="svg-icon-2 m-0"
          />
        </a>
      </Tooltip>
      <Tooltip placement="bottom" title="删除邮件">
        <a
          onClick={buildClick('deleted')}
          className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
        >
          <Icon name="Duotune/gen027" className="svg-icon-2 m-0" />
        </a>
      </Tooltip>
      <Tooltip placement="bottom" title={message.seen ? '标记为未读' : '标记为已读'}>
        <a
          onClick={buildClick(message.seen ? 'unread' : 'read')}
          className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
        >
          <Icon
            name={message.seen ? 'Duotune/gen028' : 'Duotune/gen054'}
            className="svg-icon-2 m-0"
          />
        </a>
      </Tooltip>
      {/* <Tooltip placement="bottom" title="移动到">
        <a className="btn btn-sm btn-icon btn-light btn-active-light-primary">
          <Icon name="Duotune/arr076" className="svg-icon-2 m-0" />
        </a>
      </Tooltip> */}
    </div>
  );
}

type PaginationProps = {
  pagination: {
    current: number;
    totalCount: number;
    pageSize: number;
    totalPage: number;
    currentPage: number;
  };
  goto: (index: number) => void;
};

function Pagination(props: PaginationProps) {
  const { pagination, goto } = props;
  const handlePrev = useCallback(() => {
    goto(Math.max(0, pagination.current - 2));
  }, [goto, pagination]);
  const handleNext = useCallback(() => {
    goto(Math.min(pagination.totalCount - 1, pagination.current));
  }, [goto, pagination]);
  return (
    <div className="d-flex align-items-center">
      <span className="fw-bold text-muted me-2">
        {pagination.current} / {pagination.totalCount}
      </span>
      <Tooltip placement="bottom" title="上一封邮件">
        <Button
          onClick={handlePrev}
          icon={<Icon name="Duotune/arr074" className="svg-icon-2 m-0" />}
          size="sm"
          variant="light"
          activeStyle="light"
          activeColor="primary"
          className="me-3"
          disabled={pagination.current == 1}
        />
      </Tooltip>
      <Tooltip placement="bottom" title="下一封邮件">
        <Button
          onClick={handleNext}
          icon={<Icon name="Duotune/arr071" className="svg-icon-2 m-0" />}
          size="sm"
          variant="light"
          activeStyle="light"
          activeColor="primary"
          className="me-2"
          disabled={pagination.current == pagination.totalCount}
        />
      </Tooltip>

      {/*--begin::Settings menu--*/}
    </div>
  );
}

// function Settings() {
//   return (
//     <div>
//       <a
//         className="btn btn-sm btn-icon btn-light btn-active-light-primary"
//         data-kt-menu-trigger="click"
//         data-kt-menu-placement="bottom-end"
//         data-bs-toggle="tooltip"
//         data-bs-placement="top"
//         title="Settings"
//       >
//         <Icon name="Duotune/gen052" className="svg-icon-2 m-0" />
//         {/*--end::Svg Icon--*/}
//       </a>
//       {/*--begin::Menu--*/}
//       <div
//         className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-250px py-4"
//         data-kt-menu="true"
//       >
//         {/*--begin::Menu item--*/}
//         <div className="menu-item px-3">
//           <a className="menu-link px-3">
//             {/*--begin::Svg Icon | path: icons/duotune/general/gen008.svg--*/}
//             <span className="svg-icon svg-icon-3 me-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z"
//                   fill="black"
//                 />
//                 <path
//                   opacity="0.3"
//                   d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z"
//                   fill="black"
//                 />
//                 <path
//                   opacity="0.3"
//                   d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z"
//                   fill="black"
//                 />
//                 <path
//                   opacity="0.3"
//                   d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z"
//                   fill="black"
//                 />
//               </svg>
//             </span>
//             {/*--end::Svg Icon--*/}New Group
//           </a>
//         </div>
//         {/*--end::Menu item--*/}
//         {/*--begin::Menu item--*/}
//         <div className="menu-item px-3">
//           <a className="menu-link px-3">
//             {/*--begin::Svg Icon | path: icons/duotune/communication/com005.svg--*/}
//             <span className="svg-icon svg-icon-3 me-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
//                   fill="black"
//                 />
//                 <path
//                   opacity="0.3"
//                   d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
//                   fill="black"
//                 />
//               </svg>
//             </span>
//             {/*--end::Svg Icon--*/}Contacts
//           </a>
//         </div>
//         {/*--end::Menu item--*/}
//         {/*--begin::Menu item--*/}
//         <div className="menu-item px-3">
//           <a className="menu-link px-3">
//             {/*--begin::Svg Icon | path: icons/duotune/communication/com014.svg--*/}
//             <span className="svg-icon svg-icon-3 me-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z"
//                   fill="black"
//                 />
//                 <rect opacity="0.3" x="14" y="4" width="4" height="4" rx="2" fill="black" />
//                 <path
//                   d="M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z"
//                   fill="black"
//                 />
//                 <rect opacity="0.3" x="6" y="5" width="6" height="6" rx="3" fill="black" />
//               </svg>
//             </span>
//             {/*--end::Svg Icon--*/}Groups
//             <span className="badge badge-light-primary ms-auto">new</span>
//           </a>
//         </div>
//         {/*--end::Menu item--*/}
//         {/*--begin::Menu item--*/}
//         <div className="menu-item px-3">
//           <a className="menu-link px-3">
//             {/*--begin::Svg Icon | path: icons/duotune/abstract/abs030.svg--*/}
//             <span className="svg-icon svg-icon-3 me-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7Z"
//                   fill="black"
//                 />
//                 <path
//                   opacity="0.3"
//                   d="M14 4.5C14 5.9 12.9 7 11.5 7C10.1 7 9 5.9 9 4.5C9 3.1 10.1 2 11.5 2C12.9 2 14 3.1 14 4.5ZM18.5 2C17.1 2 16 3.1 16 4.5C16 5.9 17.1 7 18.5 7C19.9 7 21 5.9 21 4.5C21 3.1 19.9 2 18.5 2ZM4.5 9C3.1 9 2 10.1 2 11.5C2 12.9 3.1 14 4.5 14C5.9 14 7 12.9 7 11.5C7 10.1 5.9 9 4.5 9ZM11.5 9C10.1 9 9 10.1 9 11.5C9 12.9 10.1 14 11.5 14C12.9 14 14 12.9 14 11.5C14 10.1 12.9 9 11.5 9ZM18.5 9C17.1 9 16 10.1 16 11.5C16 12.9 17.1 14 18.5 14C19.9 14 21 12.9 21 11.5C21 10.1 19.9 9 18.5 9ZM4.5 16C3.1 16 2 17.1 2 18.5C2 19.9 3.1 21 4.5 21C5.9 21 7 19.9 7 18.5C7 17.1 5.9 16 4.5 16ZM11.5 16C10.1 16 9 17.1 9 18.5C9 19.9 10.1 21 11.5 21C12.9 21 14 19.9 14 18.5C14 17.1 12.9 16 11.5 16ZM18.5 16C17.1 16 16 17.1 16 18.5C16 19.9 17.1 21 18.5 21C19.9 21 21 19.9 21 18.5C21 17.1 19.9 16 18.5 16Z"
//                   fill="black"
//                 />
//               </svg>
//             </span>
//             {/*--end::Svg Icon--*/}Calls
//           </a>
//         </div>
//         {/*--end::Menu item--*/}
//         {/*--begin::Menu item--*/}
//         <div className="menu-item px-3">
//           <a className="menu-link px-3">
//             {/*--begin::Svg Icon | path: icons/duotune/coding/cod001.svg--*/}
//             <span className="svg-icon svg-icon-3 me-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   opacity="0.3"
//                   d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
//                   fill="black"
//                 />
//                 <path
//                   d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
//                   fill="black"
//                 />
//               </svg>
//             </span>
//             {/*--end::Svg Icon--*/}Settings
//           </a>
//         </div>
//         {/*--end::Menu item--*/}
//         <div className="separator my-5" />
//         {/*--begin::Menu item--*/}
//         <div className="menu-item px-3">
//           <a className="menu-link px-3">
//             {/*--begin::Svg Icon | path: icons/duotune/general/gen021.svg--*/}
//             <span className="svg-icon svg-icon-3 me-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <rect
//                   opacity="0.5"
//                   x="17.0365"
//                   y="15.1223"
//                   width="8.15546"
//                   height="2"
//                   rx="1"
//                   transform="rotate(45 17.0365 15.1223)"
//                   fill="black"
//                 />
//                 <path
//                   d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
//                   fill="black"
//                 />
//               </svg>
//             </span>
//             {/*--end::Svg Icon--*/}Help
//           </a>
//         </div>
//         {/*--end::Menu item--*/}
//         {/*--begin::Menu item--*/}
//         <div className="menu-item px-3">
//           <a className="menu-link px-3">
//             {/*--begin::Svg Icon | path: icons/duotune/general/gen051.svg--*/}
//             <span className="svg-icon svg-icon-3 me-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   opacity="0.3"
//                   d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
//                   fill="black"
//                 />
//                 <path
//                   d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
//                   fill="black"
//                 />
//               </svg>
//             </span>
//             {/*--end::Svg Icon--*/}Privacy
//             <span className="badge badge-light-danger ms-auto">5</span>
//           </a>
//         </div>
//         {/*--end::Menu item--*/}
//       </div>
//       {/*--end::Menu--*/}
//     </div>
//   );
// }

type MailMessageDetailsProps = RouteComponentProps<MailboxRouteParams, any, MailboxLocationState> &
  MessageParentProps;

function MailMessageDetails(props: MailMessageDetailsProps) {
  const {
    match: {
      params: { folder: mailbox, id },
    },
    message: passthrough,
    pagination,
    goto,
    scrollTo,
    refresh,
  } = props;

  console.log('...', props);

  const { data } = useMailboxMessageQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id,
    },
  });
  const [toFolder] = useMoveMailboxMessageToFolderMutation();
  const [updateFlags] = useUpdateMailboxMessageFlagsMutation();

  const temp = useRef<{ message?: MailboxMessage; autoReadExecuted?: boolean; pagination: any }>({
    pagination,
  });

  const message = (data?.message as MailboxMessage | undefined) || passthrough;

  temp.current.message = message;
  temp.current.pagination = pagination;

  const handleAction = useCallback(
    async (action: ActionType) => {
      const _message = temp.current.message;
      const _pagination = temp.current.pagination;
      if (action == 'read' || action == 'unread') {
        await updateFlags({
          variables: {
            id,
            flags: ['seen'],
            mode: action == 'unread' ? 'REMOVE' : 'ADD',
          },
        });
      } else if (action == 'deleted') {
        await updateFlags({
          variables: {
            id,
            flags: ['deleted'],
            mode: 'ADD',
          },
        });
      } else if (['archive', 'spam'].includes(action)) {
        await toFolder({
          variables: {
            id,
            mailbox: action,
          },
        });
      }
      refresh && refresh(Math.ceil(_message!.index! / _pagination.pageSize), _message!);
    },
    [id, refresh, toFolder, updateFlags],
  );

  useEffect(() => {
    temp.current.autoReadExecuted = false;
  }, [id]);

  useEffect(() => {
    if (!message || message.id != id) {
      return;
    }
    if (temp.current.autoReadExecuted || message.seen) {
      temp.current.autoReadExecuted = true;
      return;
    }
    temp.current.autoReadExecuted = true;
    handleAction('read');
  }, [handleAction, id, message]);

  useEffect(() => {
    if (!data?.message) {
      return;
    }
    const p = temp.current.pagination;
    if (data?.message.index && p.current != data?.message.index) {
      scrollTo && scrollTo(data.message.index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.message]);

  return (
    <OverlayScrollbarsComponent
      className="mail-message-details flex-lg-row-fluid custom-scrollbar"
      options={{ scrollbars: { autoHide: 'scroll' } }}
    >
      <div className="card mail-message-container">
        <div className="card-header align-items-center py-5 gap-5">
          {message && (
            <MailMessageActions message={message} mailbox={mailbox} onAction={handleAction} />
          )}
          <Pagination
            pagination={{ ...pagination, current: message?.index || pagination.current }}
            goto={goto}
          />
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap gap-2 justify-content-between mb-8">
            <div className="d-flex align-items-center flex-wrap gap-2">
              {/*--begin::Heading--*/}
              <h2 className="fw-bold me-3 my-1">{message?.subject}</h2>
              {/*--begin::Heading--*/}
              {/*--begin::Badges--*/}
              <Badge className="my-1 me-2" lightStyle="primary">
                inbox
              </Badge>
              <Badge className="my-1" lightStyle="danger">
                important
              </Badge>
              {/*--end::Badges--*/}
            </div>
            <div className="d-flex">
              <Tooltip placement="bottom" title="打印">
                <a className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2">
                  <i className="bi bi-printer-fill fs-2" />
                </a>
              </Tooltip>
            </div>
          </div>
          <MessageWrapper message={message} mailbox={mailbox} />
          <div className="separator my-6" />
        </div>
      </div>
    </OverlayScrollbarsComponent>
  );
}

interface MessageParentProps {
  pagination: {
    current: number;
    totalCount: number;
    pageSize: number;
    totalPage: number;
    currentPage: number;
  };
  message: MailboxMessage;
  goto: (index: number) => void;
  scrollTo?: (index: number) => void;
  refresh?: (index: number, message: MailboxMessage) => void;
}

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
            alt={message?.from.map((item) => item.name || item.localPart).join(',')}
            src="assets/media/avatars/300-6.jpg"
            size={50}
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
                {message?.from.map((item) => item.name || item.localPart).join(',')}
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
                          <td>
                            {message?.from
                              .map(
                                (item) => (item.name || item.localPart) + '<' + item.address + '>',
                              )
                              .join(',')}
                          </td>
                        </tr>
                      )}
                      {mailbox != 'inbox' && (
                        <tr>
                          <td className="w-75px text-muted">收件人</td>
                          <td>
                            {message?.to
                              .map(
                                (item) => (item.name || item.localPart) + '<' + item.address + '>',
                              )
                              .join(',')}
                          </td>
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
                          <td>
                            {message.replyTo.map((item) => item.name || item.localPart).join(',')}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              }
              placement="bottom-start"
            >
              <div className={classnames('inbox-message-details', { 'd-none': !expand })}>
                <span className="text-muted fw-bold">发送给我</span>
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
              {message?.mimeType == 'text/html' ? toPlainText(message.body) : message?.body}
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
              <a className="btn btn-sm btn-icon btn-clear btn-active-light-primary me-3">
                <Icon name="Duotune/gen029" className="svg-icon-2 m-0" />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" title="设置为重要">
              <a className="btn btn-sm btn-icon btn-clear btn-active-light-primary me-3">
                <Icon name="Duotune/gen056" className="svg-icon-2 m-0" />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" title="回复">
              <a className="btn btn-sm btn-icon btn-clear btn-active-light-primary me-3">
                <Icon name="Duotune/gen055" className="svg-icon-2 m-0" />
              </a>
            </Tooltip>
            {/*--begin::Settings--*/}
            <a
              className="btn btn-sm btn-icon btn-clear btn-active-light-primary"
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

export default MailMessageDetails;
