import { useCallback, useMemo, useState } from 'react';

import Icon from '@asany/icons';

import MailboxFolder from './mailbox';

import { Modal, Nav } from '@/metronic';
import type { MailSettings, MailUser } from '@/types';

type PreferencesProps = {
  mailUser: MailUser;
  visible: boolean;
  onCancel: () => void;
};

function Preferences(props: PreferencesProps) {
  const { visible, onCancel, mailUser } = props;

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [activeKey, setActiveKey] = useState('mailbox');

  const handleSubmit = useCallback(() => {
    setConfirmLoading(true);
  }, []);

  const handleSelect = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  const settings = useMemo(() => {
    if (!mailUser?.settings) {
      return { mailboxes: [] as any } as unknown as MailSettings;
    }
    return mailUser.settings as unknown as MailSettings;
  }, [mailUser]);

  return (
    <Modal
      centered
      maskClosable={false}
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      confirmLoading={confirmLoading}
      scroll={false}
      dialogClassName="mw-750px mail-preferences"
      header={
        <Modal.Header>
          <Nav onSelect={handleSelect as any} selectedKey={activeKey}>
            <Nav.Item key="general" className="me-2 mb-md-0">
              <Nav.Link className="btn d-flex flex-column btn-active-light-primary">
                <Icon name="Duotune/cod001" className="svg-icon-2 me-0" />
                <span className="d-flex flex-column align-items-start pt-2">
                  <span className="fs-7">通用</span>
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="account" className="me-2 mb-md-0">
              <Nav.Link className="btn d-flex flex-column btn-active-light-primary">
                <Icon name="Duotune/cod001" className="svg-icon-2 me-0" />
                <span className="d-flex flex-column align-items-start pt-2">
                  <span className="fs-7">账号</span>
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="mailbox" className="me-2 mb-md-0">
              <Nav.Link className="btn d-flex flex-column btn-active-light-success">
                <Icon name="Duotune/fil012" className="svg-icon-2  me-0" />
                <span className="d-flex flex-column align-items-start pt-2">
                  <span className="fs-7">文件夹</span>
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="signature" className="me-2 mb-md-0">
              <Nav.Link className="btn d-flex flex-column btn-active-light-dark">
                <Icon name="Duotune/art008" className="svg-icon-2  me-0" />
                <span className="d-flex flex-column align-items-start pt-2">
                  <span className="fs-7">签名</span>
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="template" className="me-2 mb-md-0">
              <Nav.Link className="btn d-flex flex-column btn-active-light-warning">
                <Icon name="Duotune/art008" className="svg-icon-2  me-0" />
                <span className="d-flex flex-column align-items-start pt-2">
                  <span className="fs-7">模版</span>
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Header>
      }
      footer={null}
    >
      <MailboxFolder user={mailUser?.name} mailboxes={settings.mailboxes} />
    </Modal>
  );
}

export default Preferences;
