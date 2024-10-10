import { useMemo } from 'react';

import { Button, Col, Drawer, Row } from '@/metronic';
import type { User } from '@/types';

import UserForm from './UserForm';

import useUserDelete from '../hooks/useUserDelete';
import useUserSubmit from '../hooks/useUserSubmit';

type UserDrawerProps = {
  data?: User;
  visible: boolean;
  onClose: () => void;
  onSuccess: (data: User) => void;
  onDeleteSuccess: (data: User) => void;
};

function UserDrawer(props: UserDrawerProps) {
  const { data, visible, onClose, onSuccess, onDeleteSuccess } = props;

  const [submit, { form, submitting }] = useUserSubmit(data!, {
    transform(data) {
      return {
        ...data,
      };
    },
    onSubmitted: onSuccess,
  });

  const defaultData = useMemo(() => {
    if (!data) {
      return {} as any;
    }
    return {
      ...data,
    };
  }, [data]);

  const { delete: handleDelete } = useUserDelete(() => onDeleteSuccess(data!));

  return (
    <Drawer
      title={!!data?.id ? `编辑` : `新增`}
      placement="right"
      width={640}
      mask={true}
      closable={true}
      onClose={onClose}
      visible={visible}
      footer={
        <Row>
          <Col span={6}>
            <Button
              style={{ letterSpacing: '1rem' }}
              className="w-100"
              loading={submitting}
              onClick={submit}
            >
              保存
            </Button>
          </Col>
          <Col span={6}>
            {data?.id && (
              <Button
                style={{ letterSpacing: '1rem' }}
                className="w-100"
                variant="light-danger"
                onClick={() => handleDelete(data)}
              >
                删除
              </Button>
            )}
          </Col>
        </Row>
      }
    >
      {data && (
        <UserForm
          submitting={submitting}
          data={defaultData}
          form={form}
          submit={submit}
          onDeleteSuccess={onDeleteSuccess}
        />
      )}
    </Drawer>
  );
}

export default UserDrawer;
