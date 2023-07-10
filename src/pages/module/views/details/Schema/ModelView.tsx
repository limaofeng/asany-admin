import { useCallback, useRef, useState } from 'react';

import type { RouteComponentProps } from 'react-router';
import { Icon } from '@asany/icons';
import classnames from 'classnames';

import { useDeleteModelMutation, useModelQuery } from '../../../hooks';

import ModelFieldsManagement from './components/ModelFieldsManagement';
import ModelModal from './components/ModelModal';

import { Alert, Button, Card, Dropdown, Menu, Modal, Tabs, Toast } from '@/metronic';
import { ContentWrapper } from '@/layouts/components';
import type { Model, Module } from '@/types';
import { delay } from '@/utils';

import './style/ModelView.scss';

type ModelViewProps = RouteComponentProps<
  { mid: string },
  any,
  { module: Module; baseUrl: string }
>;

function ModelView(props: ModelViewProps) {
  const {
    match: { params },
    location,
    history,
  } = props;

  const { module, baseUrl } = location.state;

  const { data, loading } = useModelQuery({
    variables: { id: params.mid },
    fetchPolicy: 'cache-and-network',
  });
  const [deleteModel] = useDeleteModelMutation();

  const deleting = useRef(false);
  const model = data?.model;
  const temp = useRef({ model, deleteModel });
  temp.current.model = model;
  temp.current.deleteModel = deleteModel;

  const handleDelete = useCallback(async () => {
    const _model = temp.current.model!;
    const _deleteModel = temp.current.deleteModel;
    const result = await Modal.confirm({
      title: '删除实体',
      content: (
        <>
          <p className="tip-confirm">
            您确定要删除实体 <b>{_model.name}</b> 吗
          </p>
          <Alert
            type="warning"
            theme="Light"
            className="mb-0"
            message="删除后，存储在实体中的数据将丢失"
          />
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
            _deleteModel({
              variables: {
                id: _model.id,
              },
            }),
            350,
          );
          console.log(_result);
        } catch (e: any) {
          Toast.error(e.message, 2000, {
            placement: 'bottom-end',
            progressBar: true,
          });
        } finally {
          deleting.current = false;
        }
      },
    });
    if (!result.isConfirmed) {
      return;
    }
    Toast.success(`实体 “${_model.name}” 已删除`, 2000, {
      placement: 'bottom-end',
      progressBar: true,
    });
    history.push(baseUrl);
  }, [baseUrl, history]);

  const [visibleModelModal, setVisibleModelModal] = useState(false);

  const handleOpenModelModal = useCallback(() => {
    setVisibleModelModal(true);
  }, []);

  const handleCloseModelModal = useCallback(() => {
    setVisibleModelModal(false);
  }, []);

  const handleModelModalSuccess = useCallback(() => {
    handleCloseModelModal();
  }, [handleCloseModelModal]);

  return (
    <ContentWrapper
      className="pages-model-view"
      header={
        !!model && (
          <>
            <div className="h-40px d-flex align-items-center">
              <div className="d-flex align-items-end position-relative">
                <h1 className="mb-0 me-2">{model.name}</h1>
                <span className="text-muted">
                  #{model.code.substring(module.code.replace('.', '').length - 1)}
                </span>
                <Dropdown
                  placement="bottomLeft"
                  overlay={
                    <Menu
                      dropdown
                      rounded
                      className="menu-state-bg-light-primary p-1 gap-1 menu-sub-dropdown menu-title-gray-700 menu-state-primary fw-semibold fs-base w-125px"
                    >
                      <Menu.Item
                        className="p-0"
                        onClick={handleOpenModelModal}
                        icon={
                          <div className={classnames('')}>
                            <Icon name="Bootstrap/pencil-square" />
                          </div>
                        }
                      >
                        编辑
                      </Menu.Item>
                      <Menu.Item
                        className="actions-delete p-0"
                        icon={
                          <div className={classnames('')}>
                            <Icon name="Bootstrap/trash" />
                          </div>
                        }
                        onClick={handleDelete}
                      >
                        删除
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    variant="clean"
                    style={{ right: -34, top: 2 }}
                    className="position-absolute"
                    icon={<Icon className="svg-icon-2" name="Bootstrap/three-dots" />}
                  />
                </Dropdown>
              </div>
            </div>
            <span className="text-muted lh-base">{model.description}</span>
          </>
        )
      }
      loading={loading}
      footer={false}
    >
      <Card bodyClassName="px-0">
        <Tabs contentContainer={false} type="line-tabs">
          <Tabs.TabPane key="fields" tab="字段">
            {model && <ModelFieldsManagement model={model as Model} />}
          </Tabs.TabPane>
        </Tabs>
      </Card>
      <ModelModal
        module={module}
        data={model as any}
        onSuccess={handleModelModalSuccess}
        visible={visibleModelModal}
        onClose={handleCloseModelModal}
      />
    </ContentWrapper>
  );
}

export default ModelView;
