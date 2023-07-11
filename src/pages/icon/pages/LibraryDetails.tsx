import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import Icon from '@asany/icons';
import type { IconDefinition, IconLibraryDefinition } from '@asany/icons/types';
import type { SortableItemProps } from '@asany/sortable';
import Sortable from '@asany/sortable';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';
import type { OnDrag } from 'react-selecto';
import Selecto from 'react-selecto';

import LibraryControlPanel from '../components/LibraryControlPanel';
import { useIconLibraryQuery } from '../hooks';

import { Dropdown, Input, Menu, Spin } from '@/metronic';
import { ContentWrapper } from '@/layouts/components';

import '../style/index.scss';

type LibraryNameProps = {
  editing: boolean;
  library: IconLibraryDefinition;
  onRevoke: () => void;
};

function LibraryName(props: LibraryNameProps) {
  const { library, editing, onRevoke } = props;
  const [loading] = useState(false);
  if (editing) {
    return (
      <div className="library-name-editing">
        <Input className="ant-input-rimless" defaultValue={library.name} />
        <Spin spinning={loading} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
          <a className="name-editing-cancel" onClick={onRevoke}>
            <Icon name="Ion/close" />
            close
          </a>
          <a className="name-editing-ok">
            <Icon name="Ion/checkmark" />
            checkmark
          </a>
        </Spin>
      </div>
    );
  }
  return <span className="library-current">{library.name}</span>;
}

interface IconThumbProps extends SortableItemProps<IconDefinition> {
  clicked: boolean;
  icon: IconDefinition;
  hasSelected: (id: string) => boolean;
  onDragstart: () => void;
  onDragend: () => void;
}

const IconMosaic = memo(
  forwardRef((props: IconThumbProps, ref: any) => {
    const { drag, icon, className, clicked, hasSelected, onDragstart, onDragend } = props;
    useEffect(() => {
      if (!onDragstart || !onDragend) {
        return;
      }
      props.dragging ? onDragstart() : onDragend();
    }, [onDragend, onDragstart, props.dragging]);
    return (
      <div
        ref={drag(ref) as any}
        className={classnames(
          'icon-mosaic',
          {
            selected: hasSelected(icon.id),
            'sortable-item-dragging': clicked && !className?.includes('sortable-item-dragging'),
          },
          className,
        )}
        data-key={icon.id}
      >
        <span
          role="img"
          className="anyicon icon-thumb d-flex justify-content-center align-items-center"
          aria-label={icon.name}
          dangerouslySetInnerHTML={{
            __html: icon.content,
          }}
        />
      </div>
    );
  }),
);

function LibraryDetails() {
  const dropdownContainer = useRef<HTMLDivElement>(null);
  const mosaicContainer = useRef<HTMLDivElement>(null);
  const temp = useRef<{ selecto?: boolean; move?: boolean; selectedKeys: Set<string> }>({
    selecto: true,
    move: false,
    selectedKeys: new Set(),
  });
  const selecto = useRef<Selecto>(null);
  const params = useParams<{ id: string }>();
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set<string>());
  const [editing, setEditing] = useState(false);
  const [, forceRender] = useReducer((s) => s + 1, 0);

  // temp.current.selecto = useSelector((state) => state.workspace.icon.selecto);
  // temp.current.move = useSelector((state) => state.workspace.icon.move);

  temp.current.selectedKeys = selectedKeys;

  const id = params.id;

  const { data, loading, refetch } = useIconLibraryQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  const handleStatus = useCallback(() => {
    setEditing((_editing) => !_editing);
  }, []);

  const popupContainer = useCallback(() => dropdownContainer.current!, []);

  const handleMenuClick = useCallback(() => {}, []);

  const handleChange = useCallback(() => {
    console.log('sort change');
  }, []);

  const handleDragstart = useCallback(() => {
    temp.current.selecto = false;
    forceRender();
  }, []);
  const handleDragend = useCallback(() => {
    temp.current.selecto = true;
    forceRender();
  }, []);

  const handleHasSelected = useCallback((key: string) => {
    return temp.current.selectedKeys.has(key);
  }, []);

  const handleSelectoDragCondition = useCallback(() => !!temp.current.selecto, []);
  const handleSelectoDrag = useCallback((e: OnDrag<any>) => {
    if (!temp.current.selecto) {
      e.stop();
    }
  }, []);
  const handleMoveDragCondition = useCallback(() => !!temp.current.move, []);

  const { library } = data || {};

  const icons = useMemo(
    () => (library?.icons || []).map((item) => ({ ...item })),
    [library?.icons],
  );

  return (
    <ContentWrapper
      header={{
        title: '图标库',
      }}
    >
      <div className="ie-libraries ie-library-details">
        <Spin spinning={loading}>
          <div className="libraries-list">
            <div className="libraries-header-section">
              <div className="library-left">
                <h1 className="libraries-header">
                  {library && (
                    <LibraryName
                      editing={editing}
                      onRevoke={handleStatus}
                      library={library as any}
                    />
                  )}
                </h1>
                <div className="subheading">
                  <span className="library-detail-header-library-total-count-text">
                    {library?.total} items
                  </span>
                </div>
              </div>
              <div className="library-right" ref={dropdownContainer}>
                <Dropdown
                  trigger="click"
                  placement="bottomRight"
                  getPopupContainer={popupContainer}
                  overlay={
                    <Menu onClick={handleMenuClick}>
                      <Menu.Item key="rename">Rename Library</Menu.Item>
                      <Menu.Item key="delete">Delete Library</Menu.Item>
                    </Menu>
                  }
                >
                  <a className="ant-dropdown-link">
                    <Icon name="Ion/navicon" />
                    xxxx
                  </a>
                </Dropdown>
              </div>
            </div>
            <div
              ref={mosaicContainer}
              className={classnames('mosaic-container', {
                'feature-move': temp.current.move,
                'feature-selecto': temp.current.selecto,
              })}
            >
              <div className="icon-mosaic-set">
                <div className="ims-header-section">
                  <span className="ims-hs-title">title</span>
                  <div className="ims-hs-actions">
                    {/* <Icon name="Ion/navicon" /> */}Ion/navicon
                  </div>
                </div>
                <Sortable
                  accept={['sortable-card']}
                  tag="div"
                  className="ims-header-body"
                  layout="grid"
                  style={{ listStyle: 'none', padding: 0 }}
                  items={icons}
                  onChange={handleChange}
                  draggable={handleMoveDragCondition}
                  itemRender={(props: any, ref) => (
                    <IconMosaic
                      {...props}
                      onDragstart={handleDragstart}
                      onDragend={handleDragend}
                      icon={props.data}
                      hasSelected={handleHasSelected}
                      ref={ref}
                    />
                  )}
                />
              </div>
              <Selecto
                ref={selecto}
                container={mosaicContainer.current}
                dragContainer={mosaicContainer.current!}
                selectableTargets={['.icon-mosaic']}
                selectByClick={true}
                selectFromInside={true}
                continueSelect={false}
                toggleContinueSelect={'shift'}
                keyContainer={window}
                dragCondition={handleSelectoDragCondition}
                hitRate={0}
                onDrag={handleSelectoDrag}
                onSelect={(e) => {
                  setSelectedKeys((_selectedKeys) => {
                    e.added
                      .map((item) => item.dataset.key!)
                      .forEach(_selectedKeys.add.bind(_selectedKeys));
                    e.removed
                      .map((item) => item.dataset.key!)
                      .forEach(_selectedKeys.delete.bind(_selectedKeys));
                    // 为了显示效果，通过 JSAPI 先直接修改样式
                    e.added.forEach((el) => el.classList.add('selected'));
                    e.removed.forEach((el) => el.classList.remove('selected'));
                    return new Set<string>(_selectedKeys);
                  });
                }}
              />
            </div>
          </div>
          <div className="control-panel sketch-configuration">
            {library && <LibraryControlPanel refresh={refetch as any} library={library as any} />}
          </div>
        </Spin>
      </div>
    </ContentWrapper>
  );
}

const LibraryDetailsMemo = React.memo(LibraryDetails);

export default LibraryDetailsMemo;
