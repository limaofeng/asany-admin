import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import classnames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import type { RouteComponentProps } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '@asany/icons';

import DocumentCard from './DocumentCard';
import {
  useDeleteScreenMutation,
  useOnUpdateScreenSubscription,
  useScreenLazyQuery,
  useScreenQuery,
  useUpdateScreenMutation,
} from './hooks';
import infoPlaceholder from './assets/info_placeholder.jpg';
import operatorPlaceholder from './assets/operator_placeholder.jpg';

import { logout } from '@/hooks';
import Upload from '@/metronic/Upload';
import { Menu, Modal, Popover, Spin, Toast, Tooltip } from '@/metronic';
import type { UploadFileData } from '@/metronic/Upload/utils/upload';
import { delay, sleep } from '@/utils';
import { FactoryScreen } from '@/types';
import { useCurrentuser } from '@/utils/hooks';

const switchMenu = (menu: any, i: number) => {
  if (menu.id === 'Separator') {
    return <Menu.Separator key={`separator_${i}`} />;
  }

  return (
    !menu.hidden && (
      <Menu.Item key={menu.id} className="px-3" onClick={menu.method}>
        {menu.title}
      </Menu.Item>
    )
  );
};

const statusTexts = [
  {
    id: '1',
    title: '正常量产中',
  },
  {
    id: '2',
    title: '转模',
  },
  {
    id: '3',
    title: '开机/调试',
  },
  {
    id: '4',
    title: '试模',
  },
  {
    id: '5',
    title: '修模',
  },
  {
    id: '6',
    title: '设备故障',
  },
  {
    id: '7',
    title: '计划停机',
  },
  {
    id: '8',
    title: '其他',
  },
];

type ScreenDetailsProps = RouteComponentProps<any> & {
  screen?: FactoryScreen;
};

function ScreenDetails(props: ScreenDetailsProps) {
  const { history, match, screen: cardData } = props;
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const deleting = useRef(false);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const { data: user } = useCurrentuser();

  const screenId = cardData?.id || match.params.id;
  const mode = cardData?.id ? 'card' : 'view';

  const [loadScreen, { data, loading, refetch }] = useScreenLazyQuery({
    variables: {
      id: screenId,
    },
    fetchPolicy: 'network-only',
  });

  const [updateScreen, {}] = useUpdateScreenMutation();
  const [deleteScreen, { loading: deleteing }] = useDeleteScreenMutation();

  const { data: newData } = useOnUpdateScreenSubscription({
    variables: {
      id: screenId,
    },
  });

  useEffect(() => {
    if (newData == null) {
      return;
    }
    refetch();
  }, [newData, refetch]);

  useEffect(() => {
    if (mode != 'view') {
      return;
    }
    loadScreen();
  }, [loadScreen, mode]);

  const handleRefetch = useCallback(async () => {
    setRefreshLoading(true);
    await delay(refetch(), 350);
    setRefreshLoading(false);
  }, [refetch]);

  const handleChangeStatus = useCallback(
    (item: (typeof statusTexts)[0]) => {
      return async () => {
        console.log(item);
        setUpdating(true);
        try {
          await delay(
            updateScreen({
              variables: {
                id: screenId,
                input: { status: item.id },
              },
            }),
            350,
          );
          handleRefetch();
        } finally {
          setUpdating(false);
          setContextMenuVisible(false);
        }
      };
    },
    [screenId, handleRefetch, updateScreen],
  );

  const menus = useMemo(
    () => [
      ...[
        {
          id: 'SelectImage',
          title: '选择图片',
        },
        {
          id: 'Separator',
        },
      ],
      ...statusTexts.map((item) => ({
        ...item,
        method: handleChangeStatus(item),
      })),
    ],
    [handleChangeStatus],
  );

  const handleUpdateInfo = useCallback(
    async (value?: string, fileData?: UploadFileData) => {
      console.log(value, fileData);
      setUpdating(true);
      try {
        await Toast.promise(
          delay(
            updateScreen({
              variables: {
                id: screenId,
                input: { info: value },
              },
            }),
            350,
          ),
          {
            pending: '数据更新中...',
            success: '数据更新成功',
            error: '数据更新失败',
          },
          {
            duration: 2000,
            placement: 'top-center',
          },
        );
      } finally {
        setUpdating(false);
      }
      handleRefetch();
    },
    [handleRefetch, screenId, updateScreen],
  );

  const handleGoBack = useCallback(() => {
    history.replace('/screens');
  }, [history]);

  const handleRemoveScreen = useCallback(async () => {
    const result = await Modal.confirm({
      title: '删除设备',
      content: (
        <>
          <p>会清除设备数据，请谨慎操作</p>
        </>
      ),
      okClassName: 'btn-danger',
      okText: '删除',
      allowOutsideClick: () => {
        return !deleting.current;
      },
      preConfirm: async () => {
        deleting.current = true;
        try {
          const okButton = document.querySelector('.swal2-confirm')!;
          okButton.textContent = '删除中...';
          const spinner = document.createElement('span');
          spinner.classList.add('spinner-border-sm', 'ms-2', 'spinner-border', 'align-middle');
          okButton.appendChild(spinner);
          const _result = await delay(
            deleteScreen({
              variables: { id: screenId },
            }),
            350,
          );
          console.log(_result);
        } finally {
          deleting.current = false;
        }
      },
    });
    if (!result.isConfirmed) {
      return;
    }
    Toast.success(`设备数据已删除`, 2000, {
      placement: 'top-center',
      progressBar: true,
    });
    await sleep(2000);
    history.replace('/screens');
  }, [deleteScreen, history, screenId]);

  const handleLogout = useCallback(async () => {
    const result = await Modal.confirm({
      title: '注销设备',
      content: (
        <>
          <p>只会将设备离线,不会清除数据</p>
        </>
      ),
      okClassName: 'btn-primary',
      okText: '注销',
      allowOutsideClick: () => {
        return !deleting.current;
      },
      preConfirm: async () => {
        deleting.current = true;
        try {
          const okButton = document.querySelector('.swal2-confirm')!;
          okButton.textContent = '注销中...';
          const spinner = document.createElement('span');
          spinner.classList.add('spinner-border-sm', 'ms-2', 'spinner-border', 'align-middle');
          okButton.appendChild(spinner);
          await delay(logout(), 150);
        } finally {
          deleting.current = false;
        }
      },
    });
    if (!result.isConfirmed) {
      return;
    }
    Toast.success(`注销成功`, 2000, {
      placement: 'top-center',
      progressBar: true,
    });
    await sleep(2000);
    history.replace('/login');
  }, [history]);

  const handleUpdateOperators = useCallback(
    (index: number) => {
      return async (value?: string, fileData?: UploadFileData) => {
        console.log(index, value, fileData);
        setUpdating(true);
        try {
          await Toast.promise(
            delay(
              updateScreen({
                variables: {
                  id: screenId,
                  input: { ['operator' + index]: value },
                },
              }),
              350,
            ),
            {
              pending: '数据更新中...',
              success: '数据更新成功',
              error: '数据更新失败',
            },
            {
              duration: 2000,
              placement: 'top-center',
            },
          );
        } finally {
          setUpdating(false);
        }
        handleRefetch();
      };
    },
    [handleRefetch, screenId, updateScreen],
  );

  const toggleFullScreen = useCallback(() => {
    // 支持 requestFullscreen 方法的浏览器
    const isFullscreen =
      document.fullscreenElement ||
      document.fullscreenElement ||
      document.fullscreenElement ||
      document.fullscreenElement;
    if (isFullscreen) {
      // 如果已经全屏，则退出全屏
      document.exitFullscreen();
    } else {
      // 否则，请求全屏
      document.documentElement.requestFullscreen();
    }
  }, []);

  const scrollbar = useRef<OverlayScrollbarsComponent>(null);

  const handleScroll = useCallback(() => {}, []);

  const logouting = deleting.current;

  const networkStatus = useMemo(() => {
    const _loading = loading || deleteing || logouting || updating || refreshLoading;

    let message = '';

    if (refreshLoading) {
      message = '数据刷新中...';
    } else if (updating) {
      message = '数据更新中...';
    } else if (deleteing) {
      message = '删除设备中...';
    } else if (logouting) {
      message = '注销设备中...';
    } else if (loading) {
      message = '数据加载中...';
    } else {
      message = '设备在线';
    }

    return {
      status: _loading ? 'loading' : 'ok',
      loading: _loading,
      message: message,
      error: '',
    };
  }, [deleteing, loading, logouting, updating, refreshLoading]);

  const screen = useMemo(() => data?.screen || cardData, [data?.screen, cardData]);

  const status = useMemo(() => statusTexts.find((s) => s.id == screen?.status), [screen?.status]);

  return (
    <div className="fples_screen_view">
      <div className="screen_one">
        <div className="screen_base">
          <div className="screen_info">
            <div className="frame-border">
              <Upload.NewImage
                value={screen?.info?.id}
                onChange={handleUpdateInfo}
                placeholder={infoPlaceholder}
              />
            </div>
          </div>
          <div className="network_status">
            <div className={classnames('status_content py-3')} style={{ height: '100%' }}>
              {mode == 'view' && user?.type == 'ADMIN' && (
                <Tooltip inverse title="返回列表">
                  <a className="goback-list" onClick={handleGoBack}>
                    <Icon name="Duotune/arr074" className="svg-icon-2x" />
                  </a>
                </Tooltip>
              )}
              <div className="network-details">
                IP: {screen?.boundIp}
                <br />
                {networkStatus.message}
              </div>

              <div className="network_status_flag">
                {networkStatus.status == 'ok' && (
                  <Icon name="Duotune/gen043" className="svg-icon-1 svg-icon-success" />
                )}
                {networkStatus.status == 'error' && (
                  <Icon name="Duotune/gen044" className="svg-icon-1 svg-icon-danger" />
                )}
                {networkStatus.status == 'loading' && <Spin spinning={true} size="small" />}
              </div>
              {mode == 'view' && (
                <div className="admin-actions">
                  <Tooltip inverse title="切换全屏">
                    <a onClick={toggleFullScreen}>
                      <Icon name="Duotune/gen054" className="svg-icon-2" />
                    </a>
                  </Tooltip>
                  <Tooltip inverse title="重新加载">
                    <a onClick={handleRefetch}>
                      <Icon name="Duotune/arr029" className="svg-icon-2" />
                    </a>
                  </Tooltip>
                  {user?.type == 'USER' && (
                    <Tooltip inverse title="退出">
                      <a onClick={handleLogout}>
                        <Icon name="Duotune/arr076" className="svg-icon-2" />
                      </a>
                    </Tooltip>
                  )}
                  {user?.type == 'ADMIN' && (
                    <Tooltip inverse title="删除屏幕数据">
                      <a onClick={handleRemoveScreen}>
                        <Icon name="Duotune/gen040" className="svg-icon-2" />
                      </a>
                    </Tooltip>
                  )}
                </div>
              )}
            </div>
            {/* <Dropdown menu={{ items }} trigger={['click']}>
              <div
                className="site-dropdown-context-menu"
                style={{
                  textAlign: 'center',
                  height: 200,
                  lineHeight: '200px',
                }}
              >
                Right Click on here
              </div>
            </Dropdown> */}
          </div>
        </div>
        <div className="operators">
          <div className="operator-context">
            <div className="operator-item">
              <Upload.NewImage
                value={screen?.operator1?.id}
                placeholder={operatorPlaceholder}
                onChange={handleUpdateOperators(1)}
              />
            </div>
            <div className="operator-item">
              <Upload.NewImage
                value={screen?.operator2?.id}
                onChange={handleUpdateOperators(2)}
                placeholder={operatorPlaceholder}
              />
            </div>
            <div className="operator-item">
              <Upload.NewImage
                value={screen?.operator3?.id}
                onChange={handleUpdateOperators(3)}
                placeholder={operatorPlaceholder}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="screen_status">
        <Popover
          trigger="contextMenu"
          visible={contextMenuVisible}
          onVisibleChange={setContextMenuVisible}
          content={
            <Menu className="menu-sub show menu-sub-dropdown show menu-gray-600 menu-state-bg-light-primary fs-1 w-175px py-2">
              {menus.map(switchMenu)}
            </Menu>
          }
          overlayClassName="overlay-no-arrow fples_screen_item_menu_popover"
        >
          <div
            className={classnames('status_content py-3', {
              status_text: !!status,
              ['status_no_' + status?.id]: !!status,
            })}
          >
            {status && status.title}
          </div>
        </Popover>
      </div>

      <div className="document-display-area">
        <OverlayScrollbarsComponent
          ref={scrollbar}
          className={classnames('custom-scrollbar infinite-scroll')}
          options={{
            scrollbars: {},
            callbacks: {
              onScroll: handleScroll,
            },
          }}
        >
          {mode == 'view' && (
            <div className="document-content">
              <DocumentCard
                doc={{ id: '', type: 'pdf', url: 'http://upic.asany.cn/uPic/B-Z21-010-09.pdf' }}
              />
              <DocumentCard
                doc={{ id: '', type: 'pdf', url: 'http://upic.asany.cn/uPic/B-Z21-010-09.pdf' }}
              />
              <DocumentCard
                doc={{ id: '', type: 'pdf', url: 'http://upic.asany.cn/uPic/B-Z21-010-09.pdf' }}
              />
              <DocumentCard
                doc={{ id: '', type: 'pdf', url: 'http://upic.asany.cn/uPic/B-Z21-010-09.pdf' }}
              />
              <DocumentCard
                doc={{ id: '', type: 'pdf', url: 'http://upic.asany.cn/uPic/B-Z21-010-09.pdf' }}
              />
              {/*         <DocumentCard
          doc={{
            id: '',
            type: 'excel',
            url: 'http://upic.asany.cn/uPic/%E6%93%8D%E4%BD%9C%E4%BA%BA%E5%91%98%E7%82%B9%E6%A3%80%E8%A1%A8QR-PRO-07-12.xlsx',
          }}
          height={1700}
        /> */}
              <DocumentCard
                doc={{ id: '', type: 'pdf', url: 'http://upic.asany.cn/uPic/Production_order.pdf' }}
              />
            </div>
          )}
        </OverlayScrollbarsComponent>
        {/* <div className="document-display-area__sidebar">水电费水电费</div> */}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ScreenDetails;
