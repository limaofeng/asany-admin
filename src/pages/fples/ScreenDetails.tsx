import { useCallback, useMemo, useRef, useState } from 'react';

import type { MenuProps } from 'antd';
import classnames from 'classnames';
import type OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import type { RouteComponentProps } from 'react-router';

import PdfViewer from './viewers/PdfViewer';
import DocumentCard from './DocumentCard';

import type { FactoryScreen } from '@/types';
import Upload from '@/metronic/Upload';
import { Menu, Popover } from '@/metronic';
import { useScreenQuery } from './hooks';

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

type ScreenDetailsProps = RouteComponentProps<any>;

function ScreenDetails(props: ScreenDetailsProps) {
  const { history, match } = props;
  const [contextMenuVisible, setContextMenuVisible] = useState(false);

  const [status, setStatus] = useState(statusTexts[0]);

  const { data, loading } = useScreenQuery({
    variables: {
      id: match.params.id,
    },
    fetchPolicy: 'network-only',
  });

  console.log('data', data, loading);

  const handleChangeStatus = useCallback((item: (typeof statusTexts)[0]) => {
    return () => {
      console.log(item);
      setStatus(item);
      setContextMenuVisible(false);
    };
  }, []);

  const menus = useMemo(
    () => [
      ...[
        {
          id: 'goBack',
          title: '返回列表',
          method: () => {
            history.goBack();
          },
          hidden: false,
        },
        {
          id: 'Separator',
        },
        {
          id: 'SelectImage',
          title: '选择图片',
        },
        {
          id: 'RotateImage',
          title: '旋转图片',
          method: () => {},
        },
        {
          id: 'Separator',
        },
      ],
      ...statusTexts.map((item) => ({
        ...item,
        method: handleChangeStatus(item),
      })),
      ...[
        {
          id: 'Separator',
        },
        {
          id: 'logout',
          title: '离线',
          method: () => {},
          hidden: false,
        },
        {
          id: 'destroy',
          title: '注销',
          method: () => {},
          hidden: false,
        },
      ],
    ],
    [handleChangeStatus, history],
  );

  const scrollbar = useRef<OverlayScrollbarsComponent>(null);

  const handleScroll = useCallback(() => {}, []);

  return (
    <div className="fples_screen_view">
      <div className="screen_one">
        <div className="screen_base">
          <div className="screen_info">
            <Upload.NewImage />
          </div>
          <div className="screen_status">
            <Popover
              trigger="contextMenu"
              visible={contextMenuVisible}
              onVisibleChange={setContextMenuVisible}
              content={
                <Menu className="menu-sub show menu-sub-dropdown show menu-gray-600 menu-state-bg-light-primary fw-bold fs-1 w-175px py-2">
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
                style={{ height: '100%' }}
              >
                {status && status.title}
              </div>
            </Popover>
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
          <div className="operator-item">
            <Upload.NewImage />
          </div>
          <div className="operator-item">
            <Upload.NewImage />
          </div>
          <div className="operator-item">
            <Upload.NewImage />
          </div>
        </div>
      </div>

      <div className="document-display-area">
        <OverlayScrollbarsComponent
          ref={scrollbar}
          style={{ height: 1900 }}
          className={classnames('custom-scrollbar infinite-scroll')}
          options={{
            scrollbars: { autoHide: 'scroll' },
            callbacks: {
              onScroll: handleScroll,
            },
          }}
        >
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
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
}

export default ScreenDetails;
