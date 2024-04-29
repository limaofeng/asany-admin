import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import { Icon } from '@asany/icons';
import { Resizer } from '@asany/sunmao';
import classnames from 'classnames';
import {
  ConversationItem,
  MessageItem,
} from 'open-im-sdk-wasm/lib/types/entity';
import { MessageType } from 'open-im-sdk-wasm/lib/types/enum';

import { Badge, Button, Card, Symbol, Tooltip } from '@/metronic';
import { isSingleCve } from '@/models/open-im/utils';

import ChatContent from './ChatContent/ChatContent';
import ChatFooter from './ChatFooter/ChatFooter';
import WelcomeContent from './WelcomeContent';

import { useGetUserOnlineStatusLazyQuery } from '../../hooks/api';

import '../../style/chat_app.scss';

type ChatMessengerProps = {
  typing?: boolean;
  msgList: MessageItem[];
  loadMore: (uid?: string, gid?: string, sMsg?: any) => void;
  hasMore: boolean;
  curCve?: ConversationItem | null;
  loading: boolean;
  merID?: string;
  sendMsg: (
    nMsg: MessageItem,
    type: MessageType,
    uid?: string,
    gid?: string,
  ) => void;
  scrollbar: React.MutableRefObject<OverlayScrollbars | undefined>;
  onBack?: () => void;
};

const SingleCveInfo = ({
  userId,
  typing,
}: {
  userId: string;
  typing: boolean;
}) => {
  const [getUserOnlineStatus, { data, refetch }] =
    useGetUserOnlineStatusLazyQuery({
      variables: {
        id: userId,
      },
      fetchPolicy: 'cache-and-network',
    });

  const oType = data?.user.onlineStatus.status;
  const details = data?.user.onlineStatus.detailPlatformStatus;

  const onlineStatus = useMemo(() => {
    if (oType === 'online') {
      let str = '';
      for (const detail of details || []) {
        if (detail.status === 'online') {
          str += `${detail.platform}/`;
        }
      }
      return `${str.slice(0, -1)} 在线`;
    }
    return '离线';
  }, [oType, details]);

  const prevOnlineStatus = useRef(oType);

  prevOnlineStatus.current = oType;

  useEffect(() => {
    if (prevOnlineStatus.current === 'online') {
      return;
    }
    refetch();
  }, [getUserOnlineStatus, refetch, typing]);

  return (
    <div className="mb-0 lh-1 d-flex flex-row align-items-center">
      <Badge
        color={oType === 'online' ? 'primary' : 'secondary'}
        shape="circle"
        className="w-10px h-10px me-1"
      />
      <span className="fs-7 fw-semibold text-muted">{onlineStatus}</span>
    </div>
  );
};

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
  return Math.min(
    MESSAGE_INPUT_MAX_HEIGHT,
    Math.max(MESSAGE_INPUT_MIN_HEIGHT, height),
  );
}

function ChatMessenger(props: ChatMessengerProps) {
  const {
    msgList,
    loadMore,
    hasMore,
    curCve,
    loading,
    sendMsg,
    scrollbar,
    typing,
    onBack,
  } = props;

  const state = useRef({
    height: 200,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  // const groupInfo = useModel('open-im.contacts', ({ state: _state }) => _state.groupInfo);

  const _is_single_cve = useMemo(
    () => curCve && isSingleCve(curCve!),
    [curCve],
  );

  const handleResize = useCallback((h: number) => {
    state.current.height += h;
    forceRender();
  }, []);

  const handleResizeEnd = useCallback(() => {
    state.current.height = getHeight(state.current.height);
  }, []);

  return (
    <div className="wrapper d-flex flex-column flex-row-fluid app-chat-main background-transparent">
      <Card className="card chat_messenger" id="kt_chat_messenger">
        {curCve && (
          <Card.Header id="kt_chat_messenger_header">
            <Card.Title className="d-flex align-items-center">
              <Symbol.Avatar
                light
                size={45}
                alt={curCve?.showName}
                src={curCve?.faceURL}
              />
              <div className="ms-5 d-flex justify-content-center flex-column me-3">
                <a
                  href="#"
                  className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                >
                  {curCve.showName}
                </a>
                <div className="d-flex flex-row align-items-center">
                  {_is_single_cve ? (
                    <SingleCveInfo userId={curCve!.userID} typing={!!typing} />
                  ) : (
                    <GroupCveInfo />
                  )}
                  {typing && (
                    <span className="mb-0 lh-1 ms-4 fs-7 fw-semibold text-muted">
                      正在输入...
                    </span>
                  )}
                </div>
              </div>
            </Card.Title>
            <Card.Toolbar>
              <Tooltip placement="bottom" inverse title="文件">
                <Button
                  className="me-4"
                  icon={<Icon name="Bootstrap/folder" className="svg-icon-2" />}
                  variant={false}
                  activeColor="light-primary"
                />
              </Tooltip>
              <Tooltip placement="bottom" inverse title="聊天记录">
                <Button
                  className="me-4"
                  icon={
                    <Icon name="Bootstrap/list-ul" className="svg-icon-2" />
                  }
                  variant={false}
                  activeColor="light-primary"
                />
              </Tooltip>
              <Tooltip placement="bottom" inverse title="添加成员">
                <Button
                  className="me-4"
                  icon={
                    <Icon name="Bootstrap/person-plus" className="svg-icon-2" />
                  }
                  variant={false}
                  activeColor="light-primary"
                />
              </Tooltip>
              <Tooltip placement="bottom" inverse title="聊天设置">
                <Button
                  className={classnames({ 'me-4': !!onBack })}
                  icon={<Icon name="Bootstrap/gear" className="svg-icon-2" />}
                  variant={false}
                  activeColor="light-primary"
                />
              </Tooltip>
              {onBack && (
                <Tooltip placement="bottom" inverse title="返回消息列表">
                  <Button
                    onClick={onBack}
                    icon={
                      <Icon
                        name="Bootstrap/arrow-return-left"
                        className="svg-icon-2"
                      />
                    }
                    variant={false}
                    activeColor="light-primary"
                  />
                </Tooltip>
              )}
            </Card.Toolbar>
          </Card.Header>
        )}
        <Card.Body
          className="pe-0 py-0 overflow-hidden"
          id="kt_chat_messenger_body"
        >
          {curCve ? (
            <ChatContent
              loadMore={loadMore}
              loading={loading}
              msgList={msgList}
              hasMore={hasMore}
              curCve={curCve}
              scrollbar={scrollbar}
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
    </div>
  );
}

export default ChatMessenger;
