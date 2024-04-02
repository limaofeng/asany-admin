import { useCallback, useState } from 'react';

import Icon from '@asany/icons';

import Calendars from './calendars';

import { Modal, Nav } from '@/metronic';

type PreferencesProps = {
  visible: boolean;
  onCancel: () => void;
};

function Preferences(props: PreferencesProps) {
  const { visible, onCancel } = props;

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [activeKey, setActiveKey] = useState('calendars');

  const handleSubmit = useCallback(() => {
    setConfirmLoading(true);
  }, []);

  const handleSelect = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  return (
    <Modal
      centered
      maskClosable={false}
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      scroll={false}
      confirmLoading={confirmLoading}
      dialogClassName="mw-750px calendar-preferences"
      header={
        <Modal.Header>
          <Nav onSelect={handleSelect as any} selectedKey={activeKey}>
            <Nav.Item key="general" className="me-2 mb-md-0">
              <Nav.Link className="btn d-flex flex-column btn-active-light-primary">
                <Icon name="Duotune/cod001" className="svg-icon-2 me-0" />
                <span className="d-flex flex-column align-items-start pt-2">
                  <span className="fs-7">常规</span>
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="calendars" className="me-2 mb-md-0">
              <Nav.Link className="btn d-flex flex-column btn-active-light-success">
                <Icon name="Duotune/gen014" className="svg-icon-2  me-0" />
                <span className="d-flex flex-column align-items-start pt-2">
                  <span className="fs-7">日历</span>
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="weather" className="me-2 mb-md-0">
              <Nav.Link className="btn d-flex flex-column btn-active-light-info">
                <Icon name="Duotune/fil020" className="svg-icon-2  me-0" />
                <span className="d-flex flex-column align-items-start pt-2">
                  <span className="fs-7">天气</span>
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Header>
      }
      footer={false}
    >
      <Calendars />
    </Modal>
  );
}

export default Preferences;
