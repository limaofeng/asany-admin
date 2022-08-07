import { useCallback, useMemo, useReducer, useRef } from 'react';

import type { ConversationItem, MessageItem } from 'open-im-sdk/types';
import { Resizer } from '@asany/sunmao';

import { useGetUserOnlineStatusQuery } from '../../hooks/api';
import '../../style/chat_app.scss';

import ChatContent from './ChatContent';
import WelcomeContent from './WelcomeContent';
import ChatFooter from './ChatFooter/ChatFooter';

import { ContentWrapper } from '@/layouts/components';
import { Badge, Card, Symbol } from '@/metronic';
import { isSingleCve } from '@/utils/open-im/utils/im';
import type { messageTypes } from '@/utils/open-im/constants/messageContentType';

type ChatMessengerProps = {
  msgList: MessageItem[];
  loadMore: (uid?: string, gid?: string, sMsg?: any) => void;
  hasMore: boolean;
  curCve?: ConversationItem | null;
  loading: boolean;
  merID?: string;
  sendMsg: (nMsg: string, type: messageTypes, uid?: string, gid?: string) => void;
};

const SingleCveInfo = ({ userId }: { userId: string }) => {
  const { data } = useGetUserOnlineStatusQuery({
    variables: {
      id: userId,
    },
    fetchPolicy: 'cache-and-network',
  });

  const oType = data?.user.onlineStatus.status;
  const details = data?.user.onlineStatus.detailPlatformStatus;

  const onlineStatus = useMemo(() => {
    if (oType == 'online') {
      let str = '';
      details?.map((detail) => {
        if (detail.status === 'online') {
          str += `${detail.platform}/`;
        }
      });
      return `${str.slice(0, -1)} 在线`;
    }
    return '离线';
  }, [oType, details]);

  return (
    <div className="mb-0 lh-1">
      <Badge
        color={oType == 'online' ? 'primary' : 'secondary'}
        shape="circle"
        className="w-10px h-10px me-1"
      />
      <span className="fs-7 fw-semibold text-muted">{onlineStatus}</span>
    </div>
  );
};

{
  /* <>
    <span
      style={{ backgroundColor: onlineStatus === t('Offline') ? '#959595' : '#0ecc63' }}
      className="icon"
    />
    <span className="online">{onlineStatus}</span>
  </> */
}

const GroupCveInfo = () => (
  <>
    {/* <div className="num">
      <img src={members} alt="" />
      <span>{ginfo?.memberCount}</span>
    </div>
    <div className="num">
      <span className="icon" />
      <span className="online">{`${onlineNo} ${t('OnlineEx')}`}</span>
    </div> */}
  </>
);

const MESSAGE_INPUT_MIN_HEIGHT = 105;
const MESSAGE_INPUT_MAX_HEIGHT = 350;

function getHeight(height: number) {
  console.log(
    'resizer height:',
    height,
    Math.min(MESSAGE_INPUT_MAX_HEIGHT, Math.max(MESSAGE_INPUT_MIN_HEIGHT, height)),
  );
  return Math.min(MESSAGE_INPUT_MAX_HEIGHT, Math.max(MESSAGE_INPUT_MIN_HEIGHT, height));
}

function ChatMessenger(props: ChatMessengerProps) {
  const { msgList, loadMore, hasMore, curCve, loading, sendMsg } = props;

  const state = useRef({
    height: 200,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  // const groupInfo = useModel('open-im.contacts', ({ state: _state }) => _state.groupInfo);

  const _is_single_cve = useMemo(() => curCve && isSingleCve(curCve!), [curCve]);

  const handleResize = useCallback((h: number) => {
    state.current.height += h;
    forceRender();
  }, []);

  const handleResizeEnd = useCallback(() => {
    state.current.height = getHeight(state.current.height);
  }, []);

  return (
    <ContentWrapper
      className="app-chat-main background-transparent"
      contentClassName="px-0"
      footer={false}
      header={false}
    >
      <Card className="card chat_messenger" id="kt_chat_messenger">
        {curCve && (
          <Card.Header id="kt_chat_messenger_header">
            <Card.Title className="d-flex align-items-center">
              <Symbol.Avatar light size={45} alt={curCve?.showName} src={curCve?.faceURL} />
              <div className="ms-5 d-flex justify-content-center flex-column me-3">
                <a
                  href="#"
                  className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                >
                  {curCve.showName}
                </a>
                {_is_single_cve ? <SingleCveInfo userId={curCve!.userID} /> : <GroupCveInfo />}
              </div>
            </Card.Title>
            <Card.Toolbar>
              <div className="me-n3">
                <button className="btn btn-sm btn-icon btn-active-light-primary">
                  <i className="bi bi-three-dots fs-2" />
                </button>
                {/*--begin::Menu 3--*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                  data-kt-menu="true"
                >
                  {/*--begin::Heading--*/}
                  <div className="menu-item px-3">
                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                      Contacts
                    </div>
                  </div>
                  {/*--end::Heading--*/}
                  {/*--begin::Menu item--*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_users_search"
                    >
                      Add Contact
                    </a>
                  </div>
                  {/*--end::Menu item--*/}
                  {/*--begin::Menu item--*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link flex-stack px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_invite_friends"
                    >
                      Invite Contacts
                      <i
                        className="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Specify a contact email to send an invitation"
                      />
                    </a>
                  </div>
                  {/*--end::Menu item--*/}
                  {/*--begin::Menu item--*/}
                  <div
                    className="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-start"
                  >
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">Groups</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*--begin::Menu sub--*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*--begin::Menu item--*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Create Group
                        </a>
                      </div>
                      {/*--end::Menu item--*/}
                      {/*--begin::Menu item--*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Invite Members
                        </a>
                      </div>
                      {/*--end::Menu item--*/}
                      {/*--begin::Menu item--*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Settings
                        </a>
                      </div>
                      {/*--end::Menu item--*/}
                    </div>
                    {/*--end::Menu sub--*/}
                  </div>
                  {/*--end::Menu item--*/}
                  {/*--begin::Menu item--*/}
                  <div className="menu-item px-3 my-1">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Settings
                    </a>
                  </div>
                  {/*--end::Menu item--*/}
                </div>
                {/*--end::Menu 3--*/}
              </div>
            </Card.Toolbar>
          </Card.Header>
        )}
        <Card.Body className="pe-0 py-0 overflow-hidden" id="kt_chat_messenger_body">
          {curCve ? (
            <ChatContent
              loadMore={loadMore}
              loading={loading}
              msgList={msgList}
              hasMore={hasMore}
              curCve={curCve}
            />
          ) : (
            <WelcomeContent />
          )}
        </Card.Body>
        {curCve && (
          <Card.Footer className="p-0" id="kt_chat_messenger_footer">
            <Resizer
              style={{ height: getHeight(state.current.height) }}
              direction="y"
              onResize={handleResize}
              onResizeEnd={handleResizeEnd}
            >
              <ChatFooter curCve={curCve} sendMsg={sendMsg} />
            </Resizer>
          </Card.Footer>
        )}
      </Card>
    </ContentWrapper>
  );
}

export default ChatMessenger;
