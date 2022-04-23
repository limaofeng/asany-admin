import { useCallback, useState } from 'react';

import classnames from 'classnames';

import { Alert, Button, Input, Modal } from '@/components/Metronic';

type RenameOrganizationModalProps = {
  visible?: boolean;
  onCancel: () => void;
};

function RenameOrganizationModal(props: RenameOrganizationModalProps) {
  const { visible, onCancel } = props;

  const [step, setStep] = useState(1);

  const handleContinue = useCallback(() => {
    setStep(2);
  }, []);

  const handleCancel = useCallback(() => {
    setStep(1);
    onCancel();
  }, [onCancel]);

  return (
    <Modal
      dialogClassName={classnames('rename-organization-modal w-450px', {
        'waiting-to-continue': step == 1,
      })}
      visible={visible}
      onCancel={handleCancel}
      title={step == 1 ? '确定修改组织名吗？' : '输入新的组织名称'}
      footer={false}
    >
      {step == 1 ? (
        <>
          <Alert type="danger" message="请仔细阅读以下注意事项, 了解可能造成的副作用" />
          <div className="inner-body">
            <ul className="mb-6 ms-6">
              <li>重命名可能需要几分钟才能完成。</li>
            </ul>
            <Button
              onClick={handleContinue}
              className="confirm-to-continue"
              variantStyle="light"
              variant="danger"
            >
              我明白了，继续修改组织名
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-5 mt-2">
            <Input />
            <p className="text-small mt-2">输入一个新的组织名称</p>
          </div>
          <Button onClick={handleContinue} className="change-name-save">
            修改组织名称
          </Button>
        </>
      )}
    </Modal>
  );
}

export default RenameOrganizationModal;
