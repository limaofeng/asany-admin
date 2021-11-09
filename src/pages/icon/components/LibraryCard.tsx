import { useCallback, useEffect, useRef, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import Icon from '@asany/icons';

import { useDeleteIconLibraryMutation, useUpdateIconLibraryMutation } from '../hooks';

import type { IconLibrary } from '@/types';
import type { InputRef } from '@/pages/Metronic/components/forms/Input';
import { Card, Dropdown, Input, Menu, Modal, Spin } from '@/pages/Metronic/components';

type LibraryCardProps = {
  library: IconLibrary;
  onStatusChange: (state: 'update' | 'delete', library: IconLibrary) => Promise<void>;
};

function LibraryCard({ library, onStatusChange }: LibraryCardProps) {
  const actionsContainer = useRef<HTMLDivElement>(null);
  const name = useRef<InputRef>(null);
  const [state, setState] = useState({ rename: false, updating: false, deleting: false });
  const history = useHistory();

  const [deleteLibrary, { loading: _deleting }] = useDeleteIconLibraryMutation();
  const [updateLibrary, { loading: _updating }] = useUpdateIconLibraryMutation();

  const handleClick = useCallback(() => {
    history.push('/icon-libraries/' + library.id);
  }, [history, library.id]);

  useEffect(() => {
    if (!_deleting) {
      return;
    }
    setState((preState) => ({ ...preState, deleting: _deleting }));
  }, [_deleting]);

  useEffect(() => {
    if (!_updating) {
      return;
    }
    setState((preState) => ({ ...preState, updating: _updating }));
  }, [_updating]);

  const handleDelete = useCallback(async () => {
    const alertResult = await Modal.confirm({
      title: `删除图标库 ${library.name}`,
      content: `<p>你确定你要删除 "${library.name}" 吗?</p>`,
      width: 320,
      okText: '删 除',
      cancelClassName: 'btn btn-secondary btn-sm',
      okClassName: 'btn btn-danger btn-sm',
    });
    if (alertResult.isConfirmed) {
      await deleteLibrary({ variables: { id: library.id } });
      onStatusChange && (await onStatusChange('delete', library));
      // setState((preState) => ({ ...preState, deleting: false }));
    }
  }, [deleteLibrary, library, onStatusChange]);

  const handleMenuClick = useCallback(
    (e) => {
      if (e.key == 'delete') {
        handleDelete();
      } else if (e.key == 'rename') {
        setTimeout(() => {
          name.current?.focus();
        }, 100);
        setState((preState) => ({ ...preState, rename: true }));
      }
    },
    [handleDelete],
  );

  const handleEditCancel = useCallback(() => {
    setState((preState) => ({ ...preState, rename: false, updating: false }));
  }, []);

  const handleNameSave = useCallback(async () => {
    await updateLibrary({
      variables: {
        id: library.id,
        input: {
          name: name.current?.value,
          description: library.description,
        },
      },
    });
    handleEditCancel();
  }, [handleEditCancel, library.description, library.id, updateLibrary]);

  return (
    <Card shadow="sm" className="library-container">
      <Card.Body>
        <Spin spinning={state.deleting}>
          <div onClick={handleClick} className="library-image-wrapper empty-library" />
        </Spin>
      </Card.Body>
      <Card.Footer>
        <div className="lib-description">
          <h1 className="library-name-header">
            {state.rename ? (
              <>
                <Input ref={name} className="input-rimless" defaultValue={library.name!} />
                <Spin spinning={state.updating} size="small">
                  <a className="name-editing-cancel" onClick={handleEditCancel}>
                    <Icon name="Duotune/arr088" className="svg-icon-2x" />
                  </a>
                  <a className="name-editing-ok" onClick={handleNameSave}>
                    <Icon name="Duotune/arr085" className="svg-icon-2x" />
                  </a>
                </Spin>
              </>
            ) : (
              <Link to={`/libraries/${library.id}`}>{library.name}</Link>
            )}
          </h1>
          <p className="library-item-count-label">{library.total} 个图标</p>
        </div>
        <div ref={actionsContainer} className="lib-actions-menu">
          <Dropdown
            placement="bottomRight"
            overlay={
              <Menu
                className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                onClick={handleMenuClick}
              >
                <Menu.Item key="rename" className="px-3">
                  重命名
                </Menu.Item>
                <Menu.Item key="delete" className="px-3 actions-delete">
                  删除图标库
                </Menu.Item>
              </Menu>
            }
          >
            <a className="dropdown-link">
              <Icon name="Duotune/gen053" />
            </a>
          </Dropdown>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default LibraryCard;
