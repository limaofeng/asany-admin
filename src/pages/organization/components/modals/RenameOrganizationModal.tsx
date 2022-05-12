import { useCallback, useState } from 'react';

import classnames from 'classnames';

import { useRenameOrganizationCodeMutation } from '../../hooks/api';

import { Alert, Button, Form, Input, Modal, Toast } from '@/metronic';
import type { Organization } from '@/types';
import { sleep } from '@/utils';

type RenameOrganizationModalProps = {
  data?: Organization;
  visible?: boolean;
  onCancel: () => void;
};

function RenameOrganizationModal(props: RenameOrganizationModalProps) {
  const { data, visible, onCancel } = props;

  const [step, setStep] = useState(1);

  const [renameOrganizationCode, { loading: submiting }] = useRenameOrganizationCodeMutation();

  const handleRename = useCallback(
    async (values) => {
      await renameOrganizationCode({
        variables: {
          id: data!.id,
          code: values.code,
        },
      });
      Toast.success('组织代码修改成功', 3000, {
        placement: 'top-center',
        progressBar: true,
      });
      await sleep(300);
      setStep(1);
      onCancel();
    },
    [data, onCancel, renameOrganizationCode],
  );

  const handleContinue = useCallback(async () => {
    await sleep(300);
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
      title={step == 1 ? '确定修改组织代码吗？' : '输入新的组织代码'}
      footer={false}
    >
      {step == 1 ? (
        <>
          <Alert type="danger" message="请仔细阅读以下注意事项, 了解可能造成的副作用" />
          <div className="inner-body">
            <ul className="mb-6 ms-6">
              <li>修改组织代码可能需要几分钟才能完成。</li>
            </ul>
            <Button
              onClick={handleContinue}
              className="confirm-to-continue"
              variantStyle="light"
              variant="danger"
            >
              我明白了，继续修改
            </Button>
          </div>
        </>
      ) : (
        <Form onFinish={handleRename} initialValues={data}>
          <div className="mb-5">
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: '组织代码不能为空',
                },
                {
                  min: 6,
                  message: '至少得包含6个字符',
                },
                {
                  pattern: /^[a-zA-Z]\w{5,19}$/,
                  message: '组织代码只能为字母或者数字，而且必须以字母开头',
                },
              ]}
              help="组织代码只能为字母或者数字，而且必须以字母开头"
            >
              <Input />
            </Form.Item>
            <p className="text-small mt-2">输入一个新的组织代码</p>
          </div>
          <Button htmlType="submit" loading={submiting} className="change-name-save">
            修改组织代码
          </Button>
        </Form>
      )}
    </Modal>
  );
}

export default RenameOrganizationModal;
